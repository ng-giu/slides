// A visible Chromium that a person logs in to by hand (MFA, email codes), and
// that the other scripts here drive over CDP on port 9333. Used for the Atlas
// screenshots in courses/ebd/public/img/screenshots/atlas-*.png.
//
// Usage: node scripts/browser-shots/browser.mjs <profile-dir> [start-url]
// Keep the profile dir outside the repo: it holds a logged-in session.
import { chromium } from 'playwright-chromium'
const ctx = await chromium.launchPersistentContext(process.argv[2], {
  headless: false, viewport: null,
  args: ['--remote-debugging-port=9333', '--window-size=1440,900'],
})
const p = ctx.pages()[0] || await ctx.newPage()
await p.goto(process.argv[3] || 'https://account.mongodb.com/account/login')
console.log('browser up')
await new Promise(() => {})
