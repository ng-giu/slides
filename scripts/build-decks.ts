// Export every deck to PDF and build its web version, reusing last time's
// output for every deck whose inputs have not changed.
//
// Usage:
//   bun scripts/build-decks.ts                       # every deck
//   bun scripts/build-decks.ts courses/ebd/lab-06.md # just these (for testing)
//
// Output is what `export-all.sh` and `export-all.sh build` produce together:
// dist/<course>/<deck>.pdf and dist/web/<course>/<deck>/. SITE_BASE is read the
// same way as in deck.sh.
//
// A deck's key hashes everything that can change its output: the deck itself,
// the snippet files it pulls in with `<<< @/...`, its course's shared files
// (public/, vite.config.ts, style.css; not snippets/, other decks or project/),
// the theme, the dependencies and this script. So editing Lab 6's snippets
// rebuilds Lab 6 only. Finished decks are kept in .cache/decks/<course>/<deck>/<key>/,
// which CI carries between runs (actions/cache in .github/workflows/pages.yml).
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const CACHE = '.cache/decks'
const SLIDEV = resolve('node_modules/.bin/slidev')
const siteBase = (process.env.SITE_BASE ?? '').replace(/\/+$/, '')

// Files under a path, recursively, in a stable order
function files(path: string): string[] {
  if (!existsSync(path)) return []
  if (statSync(path).isFile()) return [path]
  return readdirSync(path)
    .filter((n) => n !== 'node_modules' && n !== 'dist' && !n.startsWith('.'))
    .sort()
    .flatMap((n) => files(join(path, n)))
}

function hash(paths: string[], extra = ''): string {
  const h = new Bun.CryptoHasher('sha256')
  h.update(extra)
  for (const f of paths) {
    h.update(`\0${f}\0`)
    h.update(readFileSync(f))
  }
  return h.digest('hex').slice(0, 16)
}

// What every deck depends on
const shared = hash(
  [...files('theme'), 'package.json', 'bun.lock', 'vite.config.ts', 'scripts/build-decks.ts'].filter(existsSync),
  `base=${siteBase}`,
)

// What every deck of one course depends on
const courseKeys = new Map<string, string>()
function courseKey(course: string): string {
  if (!courseKeys.has(course)) {
    const dir = join('courses', course)
    const inputs = readdirSync(dir)
      .filter((n) => !/^(lab|assignment)-.*\.md$/.test(n) && n !== 'project' && n !== 'snippets')
      .sort()
      .flatMap((n) => files(join(dir, n)))
    courseKeys.set(course, hash(inputs))
  }
  return courseKeys.get(course)!
}

// The files a deck transcludes: `<<< @/snippets/lab-06/x.jsx#region lang {1,2}`
// -> courses/<course>/snippets/lab-06/x.jsx
function transcluded(deck: string, course: string): string[] {
  const src = readFileSync(deck, 'utf8')
  const found = [...src.matchAll(/^<<<\s+@\/(\S+?)(?:#\S*)?(?:\s|$)/gm)].map((m) => join('courses', course, m[1]))
  return [...new Set(found)].sort().filter(existsSync)
}

function run(args: string[]) {
  const p = Bun.spawnSync([SLIDEV, ...args], { stdout: 'inherit', stderr: 'inherit' })
  if (p.exitCode !== 0) {
    console.error(`slidev ${args.join(' ')} failed with exit code ${p.exitCode}`)
    process.exit(1)
  }
}

// Every deck, as deck.sh finds them: courses/<course>/{lab,assignment}-*.md
const all = readdirSync('courses')
  .filter((c) => statSync(join('courses', c)).isDirectory())
  .sort()
  .flatMap((c) =>
    readdirSync(join('courses', c))
      .filter((n) => /^(lab|assignment)-.*\.md$/.test(n))
      .sort()
      .map((n) => join('courses', c, n)),
  )
const decks = process.argv.length > 2 ? process.argv.slice(2) : all

let reused = 0
const built: string[] = []
for (const deck of decks) {
  const course = deck.split('/')[1]
  const name = basename(deck, '.md')
  const key = hash([deck, ...transcluded(deck, course)], `${shared}|${courseKey(course)}`)
  const slot = join(CACHE, course, name)
  const hit = join(slot, key)
  const pdf = join('dist', course, `${name}.pdf`)
  const web = join('dist', 'web', course, name)

  mkdirSync(join('dist', course), { recursive: true })
  rmSync(web, { recursive: true, force: true })

  if (existsSync(join(hit, 'done'))) {
    cpSync(join(hit, 'deck.pdf'), pdf)
    cpSync(join(hit, 'web'), web, { recursive: true })
    reused++
    continue
  }

  console.log(`\n=== ${course}/${name}: building (key ${key})`)
  run(['export', deck, '--output', pdf])
  run(['build', deck, '--base', `${siteBase}/${course}/${name}/`, '--out', resolve(web)])

  // Keep only this key for this deck; 'done' marks a complete entry
  rmSync(slot, { recursive: true, force: true })
  mkdirSync(hit, { recursive: true })
  cpSync(pdf, join(hit, 'deck.pdf'))
  cpSync(web, join(hit, 'web'), { recursive: true })
  Bun.write(join(hit, 'done'), '')
  built.push(`${course}/${name}`)
}

// Forget decks that no longer exist, so the cache doesn't grow forever
if (process.argv.length <= 2 && existsSync(CACHE)) {
  const live = new Set(all.map((d) => `${d.split('/')[1]}/${basename(d, '.md')}`))
  for (const course of readdirSync(CACHE))
    for (const name of readdirSync(join(CACHE, course)))
      if (!live.has(`${course}/${name}`)) rmSync(join(CACHE, course, name), { recursive: true, force: true })
}

console.log(`\nDone: ${built.length} built${built.length ? ` (${built.join(', ')})` : ''}, ${reused} reused from cache.`)
