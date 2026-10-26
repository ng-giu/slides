// Find slides whose content runs past the bottom (or clips on the right) by
// measuring each slide in a headless browser against a running dev server.
// Slidev never reports this: it just clips, and the PDF silently loses it.
//
// Usage (dev server running, e.g. `bun run lab 5` on its default port):
//   node scripts/check/overflow.mjs http://localhost:3030 [outdir] [slide...]
//   ROOT_PX=18 node scripts/check/overflow.mjs ...   # stricter: a 12% bigger root font
//
// Prints one line per slide: "ok", "OVERFLOW ...", or "BROKEN IMG ...". With
// an outdir, also saves a 1280x720 screenshot of every slide for a visual pass.
import { chromium } from 'playwright-chromium'
import fs from 'node:fs'

const [base, out, ...only] = process.argv.slice(2)
if (!base) { console.error('usage: overflow.mjs <devServerUrl> [outdir] [slide...]'); process.exit(2) }
if (out) fs.mkdirSync(out, { recursive: true })

const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1280, height: 720 } })

// Decks use hash routing (theme/package.json), so slide N is /#/N.
// Slide count: Slidev exposes it on the overview page as numbered entries
await p.goto(`${base}/#/1`, { waitUntil: 'networkidle' })
const total = await p.evaluate(() => window.__slidev__?.nav?.total ?? 0)
const list = only.length ? only.map(Number) : Array.from({ length: total }, (_, i) => i + 1)

let problems = 0
for (const i of list) {
  await p.goto(`${base}/#/${i}`, { waitUntil: 'networkidle' })
  // ROOT_PX=18 renders with a bigger root font, like a viewer whose browser is
  // set larger or whose fonts measure wider: a slide that fits at 16px only by
  // a few pixels will overflow for them
  if (process.env.ROOT_PX) await p.addStyleTag({ content: `html { font-size: ${process.env.ROOT_PX}px !important; }` })
  await p.waitForTimeout(700)
  const r = await p.evaluate(() => {
    // Slidev keeps neighbouring slides in the DOM at display:none: take the visible one
    const L = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 0)
    if (!L) return 'no layout (render error? open the slide)'
    const lr = L.getBoundingClientRect(), cs = getComputedStyle(L)
    const bottom = lr.bottom - parseFloat(cs.paddingBottom)
    // Content can also run off the right edge (a table whose code cells don't wrap)
    const right = lr.right - parseFloat(cs.paddingRight)
    const issues = []
    for (const e of L.querySelectorAll('*')) {
      const er = e.getBoundingClientRect(); if (!er.height) continue
      if (e.closest('.giu-footer')) continue // sits in the padding by design
      // (decorative SVG, like the cover pattern, bleeds off the edge on purpose)
      if (er.right > right + 2 && !e.closest('pre') && !e.closest('svg')) issues.push(`${e.tagName}.${e.className}`.slice(0, 50) + ` +${Math.round(er.right - right)}px right`)
      if (er.bottom > bottom + 1) issues.push(`${e.tagName}.${e.className}`.slice(0, 50) + ` +${Math.round(er.bottom - bottom)}px down`)
      // <pre> reports ~8px of scroll from its own padding; real clipping is more
      if (e.scrollWidth > e.clientWidth + 10 && getComputedStyle(e).overflowX !== 'visible')
        issues.push(`${e.tagName} clipped ${e.scrollWidth - e.clientWidth}px right`)
    }
    const imgs = [...L.querySelectorAll('img')].filter(im => !im.naturalWidth).map(im => im.getAttribute('src'))
    return (issues.length ? 'OVERFLOW ' + [...new Set(issues)].slice(0, 4).join(' | ') : 'ok') +
      (imgs.length ? ' BROKEN IMG ' + imgs.join(',') : '')
  })
  if (r !== 'ok') problems++
  console.log(String(i).padStart(2), r)
  if (out) await p.screenshot({ path: `${out}/s${String(i).padStart(2, '0')}.png` })
}
await b.close()
process.exit(problems ? 1 : 0)
