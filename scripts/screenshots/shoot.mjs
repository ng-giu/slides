// Takes the annotated Thunder Client screenshots used in the EBD decks, by
// driving a real VS Code + Thunder Client against the real Lab 4 solution.
//
// Runs inside the Playwright container started by scripts/screenshots.sh —
// never directly on the host, where a second VS Code can interfere with the
// one you are working in. Paths below are container paths.
import { _electron } from 'playwright-chromium'
import fs from 'node:fs'

const CACHE = '/cache'
const OUT = '/repo/courses/ebd/public/img/screenshots'
const API = 'http://localhost:3000'

// Theme red, so the marks read as ours on a slide
const MARK = '#e2001a'

// --- a fresh VS Code profile every run -------------------------------------
const profile = `${CACHE}/profile`
fs.rmSync(profile, { recursive: true, force: true })
fs.mkdirSync(`${profile}/User`, { recursive: true })
fs.writeFileSync(`${profile}/User/settings.json`, JSON.stringify({
  'workbench.colorTheme': 'Default Light Modern',
  'workbench.startupEditor': 'none',
  'workbench.tips.enabled': false,
  'workbench.activityBar.location': 'hidden',
  'workbench.statusBar.visible': false,
  'workbench.secondarySideBar.defaultVisibility': 'hidden',
  'workbench.editor.showTabs': 'none',
  'window.commandCenter': false,
  'chat.disableAIFeatures': true,
  'security.workspace.trust.enabled': false,
  'telemetry.telemetryLevel': 'off',
  'extensions.ignoreRecommendations': true,
  'update.mode': 'none',
  'git.enabled': false,
}))
fs.mkdirSync(`${CACHE}/workspace`, { recursive: true })

const app = await _electron.launch({
  executablePath: `${CACHE}/vscode/code`,
  args: [
    '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    // No keyring in the container: without this, Thunder Client hangs on startup
    '--password-store=basic',
    '--force-device-scale-factor=2',
    `--user-data-dir=${profile}`, `--extensions-dir=${CACHE}/extensions`,
    '--disable-workspace-trust', '--skip-welcome', '--skip-release-notes', '--new-window',
    `${CACHE}/workspace`,
  ],
})
const win = await app.firstWindow()
await win.waitForSelector('.monaco-workbench', { timeout: 60000 })
// A narrow window keeps the UI large relative to the shot, so it stays readable
// once scaled onto a slide. (Not window.zoomLevel: that breaks screenshot clips.)
await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].setSize(980, 400))
await win.waitForTimeout(3000)
await win.click('.monaco-workbench .part.editor')

async function command(name) {
  await win.keyboard.press('F1')
  await win.waitForTimeout(500)
  await win.keyboard.type(name)
  await win.waitForTimeout(700)
  await win.keyboard.press('Enter')
  await win.waitForTimeout(1500)
}

// The request editor lives in a webview: find the frame that has the Send button
async function requestFrame() {
  for (let i = 0; i < 30; i++) {
    for (const f of win.frames()) {
      if (await f.locator('#btn-request').count().catch(() => 0)) return f
    }
    await win.waitForTimeout(1000)
  }
  throw new Error('Thunder Client request editor never appeared')
}

// A fresh request tab, with nothing else open (the first run also opens release notes)
async function newRequest() {
  await command('View: Close All Editors')
  // Hide the side bar so the request editor gets the full width. Checked, not
  // toggled blindly: the palette's fuzzy match can pick a toggle command instead
  if (await win.locator('.part.sidebar').isVisible()) {
    await win.keyboard.press('Control+B')
    await win.waitForTimeout(500)
  }
  await command('Thunder Client: New Request')
  const f = await requestFrame()
  await win.waitForTimeout(1500)
  return f
}

async function fill(f, { method, url, body }) {
  await f.selectOption('#req-method', method)
  const u = f.locator('#req-url')
  await u.click()
  await u.press('Control+A')
  await u.pressSequentially(url)
  if (body) {
    await f.locator('li._tab-body').click()
    await win.waitForTimeout(500)
    await f.locator('#json-body').click()
    // insertText, not type: Ace auto-closes brackets and quotes as you type
    await win.keyboard.insertText(body)
  }
  await f.locator('#btn-request').click()
  await f.locator('#res-header').getByText(/\d{3}/).waitFor({ timeout: 15000 })
  await win.waitForTimeout(1200)
}

// Numbered boxes drawn over the window, positioned from the real elements.
// A target matching several elements (lines of JSON, say) gets one box around all
// of them. The numbers are keyed in the slide's caption, so labels never collide.
async function mark(f, targets) {
  const boxes = []
  for (const target of targets) {
    const all = await f.locator(target).all()
    const rects = (await Promise.all(all.map((l) => l.boundingBox()))).filter((b) => b && b.width)
    if (!rects.length) throw new Error(`nothing to mark for ${target}`)
    const x = Math.min(...rects.map((r) => r.x))
    const y = Math.min(...rects.map((r) => r.y))
    boxes.push({
      x, y,
      width: Math.max(...rects.map((r) => r.x + r.width)) - x,
      height: Math.max(...rects.map((r) => r.y + r.height)) - y,
    })
  }
  await win.evaluate(({ boxes, color }) => {
    document.querySelectorAll('.giu-mark').forEach((e) => e.remove())
    const pad = 3
    boxes.forEach((b, i) => {
      const box = document.createElement('div')
      box.className = 'giu-mark'
      Object.assign(box.style, {
        position: 'fixed', zIndex: 100000, pointerEvents: 'none',
        left: `${b.x - pad}px`, top: `${b.y - pad}px`,
        width: `${b.width + pad * 2}px`, height: `${b.height + pad * 2}px`,
        border: `2.5px solid ${color}`, borderRadius: '5px', boxSizing: 'border-box',
      })
      const dot = document.createElement('div')
      dot.className = 'giu-mark'
      dot.textContent = String(i + 1)
      Object.assign(dot.style, {
        position: 'fixed', zIndex: 100001, pointerEvents: 'none',
        left: `${b.x - pad - 10}px`, top: `${b.y - pad - 10}px`,
        width: '20px', height: '20px', borderRadius: '50%',
        background: color, color: '#fff', font: '700 12px/20px system-ui, sans-serif',
        textAlign: 'center', boxShadow: '0 0 0 2px #fff',
      })
      document.body.append(box, dot)
    })
  }, { boxes, color: MARK })
  await win.waitForTimeout(300)
}

// The editor is flaky to drive right after launch; give each shot a second go
async function attempt(name, fn) {
  try { await fn() } catch (e) {
    console.log(`${name}: ${e.message.split('\n')[0]} — retrying once`)
    await fn()
  }
}

async function shoot(name) {
  const editor = await win.locator('.part.editor').boundingBox()
  await win.screenshot({ path: `${OUT}/${name}`, clip: editor })
  console.log('wrote', name)
}

// --- 1. a GET, start to finish ----------------------------------------------
// Caption key: 1 method, 2 URL, 3 Send, 4 status, 5 response body
await attempt('thunder-get', async () => {
  const f = await newRequest()
  await fill(f, { method: 'GET', url: `${API}/api/listings/2` })
  await mark(f, ['#req-method', '#req-url', '#btn-request', '#res-header', '#result-body .ace_line > span'])
  await shoot('thunder-get.png')
})

// --- 2. a POST with a JSON body ---------------------------------------------
// Caption key: 1 method, 2 Body tab, 3 JSON tab, 4 the body, 5 status
await attempt('thunder-post-body', async () => {
  const f = await newRequest()
  await fill(f, {
    method: 'POST',
    url: `${API}/api/listings`,
    body: '{\n  "title": "Lake View Penthouse",\n  "pricePerNight": 400\n}',
  })
  await mark(f, [
    '#req-method',
    'li._tab-body',
    'li[data-type="json"]',
    '#json-body .ace_line > span',
    '#res-header',
  ])
  await shoot('thunder-post-body.png')
})

await app.close()
