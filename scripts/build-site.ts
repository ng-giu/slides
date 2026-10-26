// Build the site served at slides.nourgaser.com (GitHub Pages): the staff hub.
// It is for TAs; students get their material from the GIU CMS.
//
// Usage:
//   bun scripts/build-site.ts        -> dist/site/index.html, plus
//                                       every PDF in dist/<course>/     copied to dist/site/<course>/
//                                       every web deck in dist/web/     copied to dist/site/<course>/<deck>/
//                                       every course.yml document       built into dist/site/<course>/
//
// Nothing here names a course or a deck. Courses are the folders in courses/,
// decks are the `<kind>-NN.md` files inside them, and course details come from
// each deck's headmatter. Add a deck, export and build it: it shows up on its
// own. A deck with no PDF exported, or no web version built, is still listed,
// just without that link. Links are relative, so the site works under any base.
//
// A course can also have a courses/<course>/course.yml with key dates, its
// project and grouped links (see courses/ebd/course.yml for the fields). A
// course without one shows only its decks.
import { readdirSync, existsSync, mkdirSync, rmSync, copyFileSync, cpSync, statSync, writeFileSync, readFileSync } from 'node:fs'
import { join, extname } from 'node:path'
import { spawnSync } from 'node:child_process'

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

interface KeyDate {
  date: string // 2026-11-12
  time?: string
  what: string
  note?: string
}

interface Doc {
  label: string
  source: string // relative to the course folder
  out: string // file name in dist/site/<course>/
  note?: string
  href?: string // set once built
  bytes?: number
}

interface LinkGroup {
  group: string
  items: { label: string; url: string; note?: string }[]
}

interface Hub {
  dates?: KeyDate[]
  project?: { title?: string; summary?: string; documents?: Doc[] }
  links?: LinkGroup[]
}

interface Course {
  slug: string
  code: string
  title: string
  track: string
  semester: string
  decks: Deck[]
  hub: Hub
}

// --- decks -------------------------------------------------------------------

function headmatter(path: string): Record<string, any> {
  const m = readFileSync(path, 'utf8').match(/^---\n([\s\S]*?)\n---/)
  return m ? (Bun.YAML.parse(m[1]) as Record<string, any>) : {}
}

function collect(): Course[] {
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
        web: existsSync(join('dist', 'web', slug, file, 'index.html')) ? `${slug}/${file}/` : undefined,
        pdf: existsSync(pdfPath) ? { href: `${slug}/${file}.pdf`, bytes: statSync(pdfPath).size } : undefined,
      })
    }

    if (!decks.length) continue
    const hubPath = join(dir, 'course.yml')
    const hub = existsSync(hubPath) ? ((Bun.YAML.parse(readFileSync(hubPath, 'utf8')) ?? {}) as Hub) : {}
    decks.sort((a, b) => KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind) || a.num - b.num || a.file.localeCompare(b.file))
    courses.push({
      slug,
      code: String(meta.course ?? slug.toUpperCase()),
      title: String(meta.courseTitle ?? slug.toUpperCase()),
      track: String(meta.track ?? ''),
      semester: String(meta.semester ?? ''),
      decks,
      hub,
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

// "Thu 12 Nov"; dates are calendar days, so read and print them in UTC
const day = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' })

// Dates are marked past / next in the browser, so the page stays right between deploys
function datesBlock(dates: KeyDate[]): string {
  const rows = [...dates]
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
    .map(
      (d) => `
        <li data-date="${esc(String(d.date))}">
          <span class="when">${esc(day(String(d.date)))}${d.time ? `<small>${esc(d.time)}</small>` : ''}</span>
          <span class="what">${esc(d.what)}${d.note ? `<small>${esc(d.note)}</small>` : ''}</span>
        </li>`,
    )
    .join('')
  return `
      <ol class="dates">${rows}
      </ol>`
}

function projectBlock(p: NonNullable<Hub['project']>): string {
  const docs = (p.documents ?? [])
    .map((d) =>
      d.href
        ? `<a class="btn" href="${esc(d.href)}" target="_blank" rel="noopener">${extname(d.href) === '.pdf' ? ICON_PDF : ICON_OPEN}<span>${esc(d.label)}</span>${d.bytes ? `<small>${size(d.bytes)}</small>` : ''}</a>`
        : `<span class="btn is-off" title="Not built">${esc(d.label)}</span>`,
    )
    .join('')
  return `
      <div class="project">
        ${p.summary ? `<p>${esc(p.summary)}</p>` : ''}
        ${docs ? `<div class="docs">${docs}</div>` : ''}
      </div>`
}

function linksBlock(groups: LinkGroup[]): string {
  return `
      <div class="links">${groups
        .map(
          (g) => `
        <div class="links__group">
          <h4>${esc(g.group)}</h4>
          <ul>${g.items
            .map(
              (l) => `
            <li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a><small>${[new URL(l.url).host.replace(/^www\./, ''), l.note].filter(Boolean).map((t) => esc(t!)).join(' · ')}</small></li>`,
            )
            .join('')}
          </ul>
        </div>`,
        )
        .join('')}
      </div>`
}

function courseSection(c: Course): string {
  const { dates, project, links } = c.hub
  // [id, heading, html]: one sub-section each, in page order
  const parts: [string, string, string][] = []
  if (dates?.length) parts.push(['dates', 'Key dates', datesBlock(dates)])
  if (project) parts.push(['project', project.title ?? 'Project', projectBlock(project)])
  for (const kind of KINDS) {
    const decks = c.decks.filter((d) => d.kind === kind)
    if (decks.length)
      parts.push([`${kind}s`, KIND_HEADINGS[kind], `
      <ul class="decks">${decks.map(deckRow).join('')}
      </ul>`])
  }
  if (links?.length) parts.push(['links', 'Important links', linksBlock(links)])

  const id = (part: string) => `${c.slug}-${part}`
  const toc =
    parts.length > 2
      ? `
      <nav class="toc" aria-label="${esc(c.title)}">${parts.map(([p, h]) => `<a href="#${id(p)}">${esc(h)}</a>`).join('')}</nav>`
      : ''
  const eyebrow = [c.code, c.track, c.semester].filter(Boolean).map(esc).join('<span class="dot">·</span>')
  return `
    <section class="course" id="${esc(c.slug)}">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${esc(c.title)}</h2>${toc}${parts
        .map(([p, h, html]) => `
      <h3 id="${id(p)}">${esc(h)}</h3>${html}`)
        .join('')}
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
<title>GIU Course Hub</title>
<meta name="description" content="Slides, PDFs, dates, projects and links for every course, for teaching staff.">
<meta name="robots" content="noindex">
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
.toc { display: flex; flex-wrap: wrap; gap: 0.25rem 1.1rem; margin: -0.5rem 0 0.5rem; font-size: 0.85rem; }
.toc a { color: var(--muted); text-decoration: none; font-weight: 500; }
.toc a:hover { color: var(--strong); }
h3 { scroll-margin-top: 1rem; }
.dates { list-style: none; margin: 0.5rem 0 0; padding: 0; }
.dates li { display: grid; grid-template-columns: 9.5rem 1fr; gap: 1rem; padding: 0.55rem 0 0.55rem 0.9rem; border-left: 3px solid var(--rule); }
.dates .when { color: var(--strong); font-weight: 500; font-size: 0.9rem; }
.dates .when small { color: var(--muted); font-weight: 400; margin-left: 0.4rem; }
.dates .what { color: var(--strong); font-size: 0.95rem; }
.dates .what small, .links small { display: block; color: var(--muted); font-size: 0.8rem; }
.dates li.is-past { opacity: 0.45; }
.dates li.is-next { border-left-color: var(--red); background: var(--chip); }
.dates li.is-next .when::after { content: 'Next'; margin-left: 0.5rem; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--red); }
.project p { margin: 0.5rem 0 0.9rem; max-width: 44rem; }
.docs { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.links { display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); gap: 0.5rem 2rem; margin-top: 0.25rem; }
.links h4 { color: var(--strong); font-size: 0.9rem; font-weight: 600; margin: 0.75rem 0 0.25rem; }
.links ul { list-style: none; margin: 0; padding: 0; }
.links li { padding: 0.4rem 0; border-bottom: 1px solid var(--rule); }
.links a { color: var(--strong); font-weight: 500; text-decoration-color: var(--rule); text-underline-offset: 3px; overflow-wrap: anywhere; }
.links a:hover { text-decoration-color: var(--strong); }
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
  .dates li { grid-template-columns: 1fr; gap: 0; }
}
</style>
</head>
<body>
<main class="wrap">
  <header>
    <div class="bar"></div>
    <h1>Course hub</h1>
    <p class="lede">For teaching staff: every course's slides and PDFs, key dates, project and links. Students get their material from the GIU CMS, never from here.</p>
    ${nav}
  </header>
${courses.map(courseSection).join('\n')}
  <footer>Updated ${esc(built)}</footer>
</main>
<script>
  // Dim past dates and mark the next one, per course, against today's date
  const today = new Date().toLocaleDateString('en-CA')
  for (const list of document.querySelectorAll('.dates')) {
    let next = false
    for (const li of list.children) {
      if (li.dataset.date < today) li.classList.add('is-past')
      else if (!next) { li.classList.add('is-next'); next = true }
    }
  }
</script>
</body>
</html>
`
}

// --- write -------------------------------------------------------------------

const courses = collect()
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
for (const c of courses)
  for (const d of c.decks) {
    if (d.web) cpSync(join('dist', 'web', d.web), join(out, d.web), { recursive: true })
    if (d.pdf) {
      mkdirSync(join(out, c.slug), { recursive: true })
      copyFileSync(join('dist', d.pdf.href), join(out, d.pdf.href))
    }
  }
// Documents: an .html source is printed to PDF (scripts/build-doc.mjs), anything else copied
for (const c of courses)
  for (const d of c.hub.project?.documents ?? []) {
    const src = join('courses', c.slug, d.source)
    const dest = join(out, c.slug, d.out)
    mkdirSync(join(out, c.slug), { recursive: true })
    if (extname(src) === '.html') {
      const footer = `${c.title} · ${c.code} · GIU`
      const r = spawnSync('node', ['scripts/build-doc.mjs', src, dest, footer], { stdio: 'inherit' })
      if (r.status !== 0) {
        console.log(`  ${c.slug}: could not build ${d.source}`)
        continue
      }
    } else copyFileSync(src, dest)
    d.href = `${c.slug}/${d.out}`
    d.bytes = statSync(dest).size
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
      console.log(`  ${c.slug}/${d.file}: no ${[!d.web && 'web version', !d.pdf && 'PDF'].filter(Boolean).join(', no ')}`)
