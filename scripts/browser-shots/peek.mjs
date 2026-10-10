// Screenshot, URL and visible text of the active tab of browser.mjs: look before you click.
// usage: node scripts/browser-shots/peek.mjs <out.png>
import { chromium } from 'playwright-chromium'
const b = await chromium.connectOverCDP('http://localhost:9333')
const pages = b.contexts()[0].pages(); const p = pages[pages.length - 1]
console.log(pages.map(x => x.url()).join('\n'))
await p.screenshot({ path: process.argv[2] })
console.log((await p.evaluate(() => document.body.innerText)).replace(/\n+/g, ' | ').slice(0, 1500))
process.exit(0)
