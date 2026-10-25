// Print an HTML document (a project brief, a handout) to an A4 PDF with the
// same Chromium the deck exports use. Page size and margins come from the
// document's own @page rule; this adds page numbers in the footer.
//
// Usage:
//   node scripts/build-doc.mjs courses/ebd/project/brief.html dist/ebd/project-brief.pdf
import { chromium } from 'playwright-chromium'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const [input, output] = process.argv.slice(2)
if (!input || !output) {
  console.error('usage: build-doc.mjs <document.html> <output.pdf>')
  process.exit(2)
}

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(resolve(input)).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

mkdirSync(dirname(resolve(output)), { recursive: true })
await page.pdf({
  path: output,
  preferCSSPageSize: true,
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  // Course name and page number on every page
  footerTemplate: `
    <div style="width:100%; font: 7.5pt Poppins, sans-serif; color:#e2001a; padding: 0 18mm; display:flex; justify-content:space-between;">
      <span>Electronic Business Development · BINF 503 · GIU</span>
      <span class="pageNumber"></span>
    </div>`,
})
await browser.close()
console.log(`wrote ${output}`)
