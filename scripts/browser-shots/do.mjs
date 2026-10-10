// Run Playwright actions against the active tab of browser.mjs.
// usage: node scripts/browser-shots/do.mjs '<async js using p (the page)>'
import { chromium } from 'playwright-chromium'
const b = await chromium.connectOverCDP('http://localhost:9333')
const pages = b.contexts()[0].pages(); const p = pages[pages.length - 1]
const r = await eval(`(async () => { ${process.argv[2]} })()`)
if (r !== undefined) console.log(r)
process.exit(0)
