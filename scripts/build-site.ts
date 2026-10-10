// Build the course index served at slides.nourgaser.com.
//
// Usage:
//   bun scripts/build-site.ts        -> dist/site/index.html, plus every PDF in dist/<course>/
//                                       copied to dist/site/<course>/
//
// Nothing here names a course or a deck. Courses are the folders in courses/,
// decks are the `<kind>-NN.md` files inside them, course details come from each
// deck's headmatter, and a deck's web link comes from the compose service that
// serves it. Add a deck, export it, add its service: it shows up on its own.
// A deck with no PDF exported, or no service in compose.yml, is still listed,
// just without that link.
import { readdirSync, existsSync, mkdirSync, rmSync, copyFileSync, statSync, writeFileSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const KINDS = ['lab', 'assignment'] as const
type Kind = (typeof KINDS)[number]
const KIND_HEADINGS: Record<Kind, string> = { lab: 'Labs', assignment: 'Assignments' }

const out = 'dist/site'

interface Deck {
  kind: Kind
  num: number
  file: string // lab-04
  label: string // Lab 4
  topic: string // Building a REST API
  web?: string
  pdf?: { href: string; bytes: number }
}

interface Course {
  slug: string
  code: string
  title: string
  track: string
  semester: string
  decks: Deck[]
}

// --- web links: one compose service per deck ---------------------------------

// `${EBD_LAB_01_HOST:-${LAB_01_HOST:-lab1.ebd.nourgaser.com}}`, resolved the way
// compose resolves it: the first variable that is set, else the innermost default.
function interpolate(value: string): string {
  const m = value.match(/^\$\{(\w+):-(.*)\}$/)
  if (!m) return value
  return process.env[m[1]] || interpolate(m[2])
}

function webLinks(): Map<string, string> {
  const links = new Map<string, string>()
  const compose = Bun.YAML.parse(readFileSync('compose.yml', 'utf8')) as any
  for (const service of Object.values<any>(compose.services ?? {})) {
    const [kind, course, num] = service.command ?? []
    const host = (service.environment ?? [])
      .find((e: string) => e.startsWith('VIRTUAL_HOST='))
      ?.slice('VIRTUAL_HOST='.length)
    if (!KINDS.includes(kind) || !course || !num || !host) continue
    // "5" -> "05", "5-extra" -> "05-extra"
    const [n, ...rest] = String(num).split('-')
    const id = [n.padStart(2, '0'), ...rest].join('-')
    links.set(`${course}/${kind}-${id}`, `https://${interpolate(host)}`)
  }
  return links
}

// --- decks -------------------------------------------------------------------

function headmatter(path: string): Record<string, any> {
  const m = readFileSync(path, 'utf8').match(/^---\n([\s\S]*?)\n---/)
  return m ? (Bun.YAML.parse(m[1]) as Record<string, any>) : {}
}

function collect(): Course[] {
  const links = webLinks()
  const courses: Course[] = []

  for (const slug of readdirSync('courses').sort()) {
    const dir = join('courses', slug)
    if (!statSync(dir).isDirectory()) continue

    const decks: Deck[] = []
    let meta: Record<string, any> = {}

    for (const name of readdirSync(dir)) {
      // lab-05.md, and companion decks such as lab-05-extra.md
      const m = name.match(/^(lab|assignment)-(\d+)(-[a-z]+)?\.md$/)
      if (!m) continue
      const kind = m[1] as Kind
      const file = `${kind}-${m[2]}${m[3] ?? ''}`
      const fm = headmatter(join(dir, name))
      if (!meta.courseTitle) meta = fm

      // Titles read "BINF 503 - Lab 4 - Building a REST API"
      const parts = String(fm.title ?? '').split(' - ')
      const num = Number(m[2])
      const label = parts.length >= 3 ? parts[1] : `${kind === 'lab' ? 'Lab' : 'Assignment'} ${num}`
      const topic = parts.length >= 3 ? parts.slice(2).join(' - ') : parts.at(-1) || label

      const pdfPath = join('dist', slug, `${file}.pdf`)
      decks.push({
        kind,
        num,
        file,
        label,
        topic,
        web: links.get(`${slug}/${file}`),
        pdf: existsSync(pdfPath) ? { href: `${slug}/${file}.pdf`, bytes: statSync(pdfPath).size } : undefined,
      })
    }

    if (!decks.length) continue
    decks.sort((a, b) => KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind) || a.num - b.num || a.file.localeCompare(b.file))
    courses.push({
      slug,
      code: String(meta.course ?? slug.toUpperCase()),
      title: String(meta.courseTitle ?? slug.toUpperCase()),
      track: String(meta.track ?? ''),
      semester: String(meta.semester ?? ''),
      decks,
    })
  }
  return courses
}

// --- page --------------------------------------------------------------------

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

const size = (bytes: number) =>
  bytes >= 1e6 ? `${(bytes / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1e3))} KB`

const ICON_OPEN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
const ICON_PDF = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3M7 10l5 5 5-5M5 21h14"/></svg>`

function deckRow(d: Deck): string {
  const web = d.web
    ? `<a class="btn" href="${esc(d.web)}" target="_blank" rel="noopener">${ICON_OPEN}<span>Slides</span></a>`
    : `<span class="btn is-off" title="Not online yet">Slides</span>`
  const pdf = d.pdf
    ? `<a class="btn" href="${esc(d.pdf.href)}" target="_blank" rel="noopener">${ICON_PDF}<span>PDF</span><small>${size(d.pdf.bytes)}</small></a>`
    : `<span class="btn is-off" title="No PDF yet">PDF</span>`
  return `
        <li class="deck is-${d.kind}">
          <span class="deck__label">${esc(d.label)}</span>
          <span class="deck__topic">${esc(d.topic)}</span>
          <span class="deck__links">${web}${pdf}</span>
        </li>`
}

function courseSection(c: Course): string {
  const groups = KINDS.map((kind) => {
    const decks = c.decks.filter((d) => d.kind === kind)
    if (!decks.length) return ''
    return `
      <h3>${KIND_HEADINGS[kind]}</h3>
      <ul class="decks">${decks.map(deckRow).join('')}
      </ul>`
  }).join('')
  const eyebrow = [c.code, c.track, c.semester].filter(Boolean).map(esc).join('<span class="dot">·</span>')
  return `
    <section class="course" id="${esc(c.slug)}">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${esc(c.title)}</h2>${groups}
    </section>`
}

function page(courses: Course[]): string {
  const built = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const nav =
    courses.length > 1
      ? `<nav class="jump" aria-label="Courses">${courses
          .map((c) => `<a href="#${esc(c.slug)}">${esc(c.title)}</a>`)
          .join('')}</nav>`
      : ''
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GIU Lab Slides</title>
<meta name="description" content="Lab slides and PDFs for every course, in one place.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --ink: #2b2b2b; --strong: #000; --muted: #6f6f6f; --rule: #e7e7e7;
  --paper: #fff; --chip: #f4f4f5; --red: #e2001a; --gold: #e8a33d; --focus: #2252d9;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --ink: #d6d6d6; --strong: #fff; --muted: #9a9a9a; --rule: #2e2e2e;
    --paper: #141414; --chip: #222; --red: #ff3b4e; --focus: #7aa2ff;
  }
}
:root[data-theme="dark"] {
  --ink: #d6d6d6; --strong: #fff; --muted: #9a9a9a; --rule: #2e2e2e;
  --paper: #141414; --chip: #222; --red: #ff3b4e; --focus: #7aa2ff;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0; background: var(--paper); color: var(--ink);
  font: 400 16px/1.55 'Poppins', ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.wrap { max-width: 56rem; margin: 0 auto; padding: 3.5rem 1.5rem 4rem; }
header { margin-bottom: 2.5rem; }
header .bar { width: 3rem; height: 4px; background: var(--red); margin-bottom: 1.25rem; }
h1 { color: var(--strong); font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 600; letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 0.6rem; }
.lede { color: var(--muted); margin: 0; max-width: 34rem; }
.jump { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
.jump a {
  color: var(--strong); background: var(--chip); text-decoration: none;
  font-size: 0.85rem; font-weight: 500; padding: 0.35rem 0.8rem; border-radius: 999px;
}
.jump a:hover { background: var(--rule); }
.course { padding-top: 2.25rem; margin-top: 2.25rem; border-top: 1px solid var(--rule); scroll-margin-top: 1rem; }
.eyebrow { color: var(--muted); font-size: 0.8rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.35rem; }
.eyebrow .dot { margin: 0 0.5em; }
h2 { color: var(--strong); font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 1.25rem; }
h3 { color: var(--muted); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin: 1.5rem 0 0.25rem; }
.decks { list-style: none; margin: 0; padding: 0; }
.deck {
  display: grid; grid-template-columns: 9.5rem 1fr auto; align-items: center; gap: 0.25rem 1rem;
  padding: 0.8rem 0 0.8rem 0.9rem; border-bottom: 1px solid var(--rule); border-left: 3px solid var(--strong);
}
.deck.is-assignment { border-left-color: var(--gold); }
.deck__label { color: var(--muted); font-size: 0.85rem; font-weight: 500; }
.deck__topic { color: var(--strong); font-weight: 500; }
.deck__links { display: grid; grid-template-columns: 6.25rem 8.25rem; gap: 0.5rem; }
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; white-space: nowrap;
  font-size: 0.85rem; font-weight: 500; color: var(--strong); text-decoration: none;
  border: 1px solid var(--rule); border-radius: 6px; padding: 0.4rem 0.75rem; min-height: 2.25rem;
}
a.btn:hover { border-color: var(--strong); }
.btn svg { width: 1rem; height: 1rem; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.btn small { color: var(--muted); font-size: 0.75rem; font-weight: 400; }
.btn.is-off { color: var(--muted); border-style: dashed; cursor: default; }
a:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
footer { color: var(--muted); font-size: 0.8rem; margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid var(--rule); }
@media (max-width: 40rem) {
  .wrap { padding: 2.25rem 1rem 3rem; }
  .deck { grid-template-columns: 1fr; padding-right: 0; }
  .deck__links { grid-template-columns: 1fr 1fr; margin-top: 0.4rem; }
}
</style>
</head>
<body>
<main class="wrap">
  <header>
    <div class="bar"></div>
    <h1>Lab slides</h1>
    <p class="lede">Every lab and assignment walkthrough, by course. Open the slides in your browser, or download the PDF to copy code from.</p>
    ${nav}
  </header>
${courses.map(courseSection).join('\n')}
  <footer>Updated ${esc(built)}</footer>
</main>
</body>
</html>
`
}

// --- write -------------------------------------------------------------------

const courses = collect()
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
for (const c of courses)
  for (const d of c.decks)
    if (d.pdf) {
      mkdirSync(join(out, c.slug), { recursive: true })
      copyFileSync(join('dist', d.pdf.href), join(out, d.pdf.href))
    }
writeFileSync(join(out, 'index.html'), page(courses))

const decks = courses.flatMap((c) => c.decks)
console.log(
  `Built ${out}/index.html: ${courses.length} course(s), ${decks.length} deck(s), ` +
    `${decks.filter((d) => d.pdf).length} PDF(s), ${decks.filter((d) => d.web).length} web link(s).`,
)
for (const c of courses)
  for (const d of c.decks)
    if (!d.web || !d.pdf)
      console.log(`  ${c.slug}/${d.file}: no ${[!d.web && 'web link (no compose service)', !d.pdf && 'PDF'].filter(Boolean).join(', no ')}`)
