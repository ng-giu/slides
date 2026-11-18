// ICA Lab 9's target page, built from the snippets and the TA reference
// solution (app.js), opened from disk like students do (Live Server is
// blocked on the GIU network):
//   before.png  just opened: 0 orders waiting
//   busy.png    6 orders added, 1 served: 5 waiting, in red
//   closed.png  then Close kitchen clicked
// Output: courses/ica/public/img/lab-09/
//
//   node scripts/screenshots/ica-lab-09.mjs
import { chromium } from 'playwright-chromium'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const OUT = 'courses/ica/public/img/lab-09'
const SNIP = 'courses/ica/snippets/lab-09'
fs.mkdirSync(OUT, { recursive: true })

const site = fs.mkdtempSync(path.join(os.tmpdir(), 'ica-lab-09-'))
for (const f of ['index.html', 'style.css', 'app.js']) fs.copyFileSync(`${SNIP}/${f}`, `${site}/${f}`)

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 420, height: 420 }, deviceScaleFactor: 2 })
  const shoot = async name => {
    const box = await page.locator('#board').boundingBox()
    await page.screenshot({ path: `${OUT}/${name}.png`, clip: { x: box.x - 12, y: box.y - 12, width: box.width + 24, height: box.height + 24 } })
    console.log(`wrote ${OUT}/${name}.png`)
  }
  await page.goto(`file://${site}/index.html`)
  await shoot('before')
  for (let i = 0; i < 6; i++) await page.click('#add-btn')
  await page.click('#serve-btn')
  await page.mouse.move(0, 0)
  await shoot('busy')
  await page.click('#close-btn')
  await page.mouse.move(0, 0)
  await shoot('closed')
} finally {
  await browser.close()
  fs.rmSync(site, { recursive: true, force: true })
}
