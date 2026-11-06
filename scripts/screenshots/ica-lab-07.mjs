// ICA Lab 7's timeline timeline snapshots, rendered from the real
// snippets in courses/ica/snippets/lab-07/ into courses/ica/public/img/lab-07/.
// Needs internet: the pages load their photos from images.unsplash.com.
//
//   node scripts/screenshots/ica-lab-07.mjs
import { chromium } from 'playwright-chromium'
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'courses/ica/snippets/lab-07'
const OUT = 'courses/ica/public/img/lab-07'
const read = f => fs.readFileSync(path.join(SRC, f), 'utf8')

// The selectors each CSS step of the deck has added so far.
const STEP = {
  6: ['body', '.card'],
  7: ['.header', '.header h1', '.header p', 'input', '.header input'],
  8: ['h2', 'p', '.item', '.item p', '.item img', '.btn'],
}
const rules = [...read('style.css').matchAll(/([^{}]+?)\s*\{[^}]*\}/g)]
const cssUpTo = n => rules
  .filter(r => Object.entries(STEP).some(([s, sel]) => +s <= n && sel.includes(r[1].trim())))
  .map(r => r[0]).join('\n')

const noImgs = html => html.replace(/ *<img[^>]*>\n/g, '')
const noLink = html => html.replace(/ *<link rel="stylesheet"[^>]*>\n/, '')
const headerOnly = html => html.replace(/(<div class="header">[\s\S]*?<\/div>)[\s\S]*(<\/div>\s*<\/body>)/, '$1\n$2')
const styled = (html, css) => noLink(html).replace('</head>', `<style>${css}</style></head>`)

const index = read('index.html'), burger = read('burger.html'), pizza = read('pizza.html')
const fullCss = read('style.css')

const shots = {
  'step-03.png': headerOnly(noLink(index)),
  'step-04.png': noImgs(noLink(index)),
  'step-05.png': noLink(index),
  'step-06.png': styled(index, cssUpTo(6)),
  'step-07.png': styled(index, cssUpTo(7)),
  'step-08.png': styled(index, cssUpTo(8)),
  'step-10.png': headerOnly(noLink(burger)),
  'step-11.png': noLink(burger),
  'step-12.png': styled(burger, fullCss),
  'step-13.png': styled(pizza.replace(/<img[^>]*>/, burger.match(/<img[^>]*>/)[0]), fullCss),
  'step-14.png': styled(pizza, fullCss),
}

const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 448, height: 580 }, deviceScaleFactor: 2 })
for (const [name, html] of Object.entries(shots)) {
  await p.setContent(html, { waitUntil: 'networkidle' })
  const broken = await p.evaluate(() => [...document.images].filter(x => !x.naturalWidth).map(x => x.src))
  if (broken.length) throw new Error(`${name}: broken ${broken}`)
  await p.screenshot({ path: path.join(OUT, name), fullPage: true })
  console.log(name)
}
await b.close()
