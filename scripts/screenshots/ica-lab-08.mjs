// ICA Lab 8's Getting started shot: Chrome DevTools' Console after Step 1,
// with index.html opened directly from disk (Live Server is blocked on the GIU
// network), marked with the numbers the slide keys.
// Output: courses/ica/public/img/lab-08/console.png
//
//   node scripts/screenshots/ica-lab-08.mjs
//
// The page is the lab's index.html and Step 1 of script.js, built from the
// snippets. DevTools is opened as an ordinary page (the inspector Chromium
// serves on its debugging port), with the remote screencast switched off so
// it looks like the panel students see.
import { chromium } from 'playwright-chromium'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const OUT = 'courses/ica/public/img/lab-08'
const SNIP = 'courses/ica/snippets/lab-08'
const PORT = 9338
fs.mkdirSync(OUT, { recursive: true })

// index.html as given, script.js as it is after Step 1
const site = fs.mkdtempSync(path.join(os.tmpdir(), 'ica-lab-08-'))
fs.copyFileSync(`${SNIP}/index.html`, `${site}/index.html`)
const step1 = fs.readFileSync(`${SNIP}/script.js`, 'utf8').match(/\/\/ #region step1\n([\s\S]*?)\/\/ #endregion step1/)[1]
fs.writeFileSync(`${site}/script.js`, step1)

const browser = await chromium.launch({ args: [`--remote-debugging-port=${PORT}`] })
try {
  const ctx = await browser.newContext({ viewport: { width: 640, height: 260 }, deviceScaleFactor: 2 })
  const page = await ctx.newPage()
  await page.goto('about:blank')
  const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
  const target = targets.find(t => t.type === 'page' && t.url === 'about:blank')
  const dt = await ctx.newPage()
  await dt.goto(`http://127.0.0.1:${PORT}/devtools/inspector.html?ws=127.0.0.1:${PORT}/devtools/page/${target.id}`)
  await dt.waitForTimeout(3000)
  await dt.getByRole('button', { name: 'Toggle screencast' }).click()
  await dt.waitForTimeout(600)
  const consoleTab = dt.getByRole('tab', { name: 'Console' })
  await consoleTab.click()
  await page.goto(`file://${site}/index.html`) // opened directly: Live Server is blocked on the GIU network
  await dt.waitForTimeout(2000)

  // Red numbered markers; ring = [x, y, w, h] around what to look at
  const mark = pts => dt.evaluate(pts => {
    for (const { x, y, n, ring } of pts) {
      const r = document.createElement('div')
      Object.assign(r.style, {
        position: 'fixed', left: `${ring[0]}px`, top: `${ring[1]}px`, width: `${ring[2]}px`, height: `${ring[3]}px`,
        border: '3px solid #e11d48', borderRadius: '6px', zIndex: 99999, pointerEvents: 'none',
      })
      document.body.appendChild(r)
      const d = document.createElement('div')
      d.textContent = n
      Object.assign(d.style, {
        position: 'fixed', left: `${x - 13}px`, top: `${y - 13}px`, width: '26px', height: '26px', borderRadius: '50%',
        background: '#e11d48', color: '#fff', font: 'bold 15px sans-serif', display: 'flex', alignItems: 'center',
        justifyContent: 'center', zIndex: 100000, pointerEvents: 'none', boxShadow: '0 1px 4px rgba(0,0,0,.4)',
      })
      document.body.appendChild(d)
    }
  }, pts)

  const tab = await consoleTab.boundingBox()
  const hello = await dt.getByText("Burger Republic: today's dashboard", { exact: true }).last().boundingBox()
  const link = await dt.getByText(/^script\.js:\d+$/).last().boundingBox()
  await mark([
    { x: tab.x + tab.width / 2, y: tab.y + tab.height + 14, n: 1, ring: [tab.x - 3, tab.y - 3, tab.width + 6, tab.height + 6] },
    { x: hello.x + hello.width + 22, y: hello.y + hello.height / 2, n: 2, ring: [hello.x - 6, hello.y - 4, hello.width + 12, hello.height + 8] },
    { x: link.x - 20, y: link.y + link.height / 2, n: 3, ring: [link.x - 4, link.y - 4, link.width + 8, link.height + 8] },
  ])
  await dt.screenshot({ path: `${OUT}/console.png`, clip: { x: 0, y: 0, width: 640, height: 116 } })
  console.log(`wrote ${OUT}/console.png`)
} finally {
  await browser.close()
  fs.rmSync(site, { recursive: true, force: true })
}
