// Takes the annotated VS Code screenshots for ICA Lab 6 by driving a real
// VS Code through the lab, click by click: open the folder, create assets/,
// logo.svg, style.css and index.html from the Explorer, preview with Live
// Server, then git init / add / commit in the integrated terminal and look at
// Source Control.
//
// Runs inside the Playwright container started by `bun run screenshots ica-06`
// (scripts/screenshots.sh), never on the host. Paths below are container paths.
import { _electron, chromium } from 'playwright-chromium'
import fs from 'node:fs'
import { execSync } from 'node:child_process'

const CACHE = '/cache'
const OUT = '/repo/courses/ica/public/img/vscode'
const SNIPPETS = '/repo/courses/ica/snippets/lab-06'
const PROBE = process.env.PROBE // set to dump unmarked full-window shots

// ICA's accent blue, so the marks read as ours on a slide
const MARK = '#1d4ed8'

fs.mkdirSync(OUT, { recursive: true })

// --- a fresh home, profile and empty project folder every run -----------------
const HOME = '/tmp/home'
fs.mkdirSync(HOME, { recursive: true })
// A plain prompt that only shows the folder, like a student's would
fs.writeFileSync(`${HOME}/.bashrc`, "PS1='\\[\\e[32m\\]\\W\\[\\e[0m\\] $ '\n")
fs.rmSync(`${HOME}/.gitconfig`, { force: true })

const profile = `${CACHE}/profile-ica`
fs.rmSync(profile, { recursive: true, force: true })
fs.mkdirSync(`${profile}/User`, { recursive: true })
fs.writeFileSync(`${profile}/User/settings.json`, JSON.stringify({
  'workbench.colorTheme': 'Default Light Modern',
  'workbench.startupEditor': 'none',
  'workbench.tips.enabled': false,
  'workbench.hover.delay': 60000,
  'workbench.secondarySideBar.defaultVisibility': 'hidden',
  'workbench.layoutControl.enabled': false,
  'window.titleBarStyle': 'custom',
  'window.menuStyle': 'custom',
  'window.commandCenter': false,
  'chat.disableAIFeatures': true,
  'chat.commandCenter.enabled': false,
  'security.workspace.trust.enabled': false,
  'telemetry.telemetryLevel': 'off',
  'extensions.ignoreRecommendations': true,
  'update.mode': 'none',
  'git.openRepositoryInParentFolders': 'never',
  'editor.minimap.enabled': false,
  'editor.fontSize': 14,
  'terminal.integrated.fontSize': 14,
  'terminal.integrated.defaultProfile.linux': 'bash',
  'terminal.integrated.shellIntegration.decorationsEnabled': 'never',
  'terminal.integrated.gpuAcceleration': 'off',
  'liveServer.settings.donotShowInfoMsg': true,
  'liveServer.settings.donotVerifyTags': true,
  'liveServer.settings.NoBrowser': true,
}))

const EXT = `${HOME}/extensions`
fs.rmSync(EXT, { recursive: true, force: true })
fs.mkdirSync(EXT, { recursive: true })

const WS = `${HOME}/Desktop/ica-lab-06`
fs.rmSync(`${HOME}/Desktop`, { recursive: true, force: true })
fs.mkdirSync(WS, { recursive: true })

const app = await _electron.launch({
  executablePath: `${CACHE}/vscode/code`,
  env: { ...process.env, HOME },
  args: [
    '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    '--password-store=basic',
    '--force-device-scale-factor=2',
    `--user-data-dir=${profile}`, `--extensions-dir=${EXT}`,
    '--disable-workspace-trust', '--skip-welcome', '--skip-release-notes', '--new-window',
    WS,
  ],
})
const win = await app.firstWindow()
await win.waitForSelector('.monaco-workbench', { timeout: 60000 })
async function size(w, h) {
  await app.evaluate(({ BrowserWindow }, [w, h]) => BrowserWindow.getAllWindows()[0].setSize(w, h), [w, h])
  await win.waitForTimeout(800)
}
await size(1100, 640)
await win.waitForTimeout(4000)

const pause = (ms = 600) => win.waitForTimeout(ms)
process.on('uncaughtException', async (e) => {
  console.error(e)
  await win.screenshot({ path: `${CACHE}/probe-error.png` }).catch(() => {})
  process.exit(1)
})

async function command(name) {
  await win.keyboard.press('F1')
  await pause(500)
  await win.keyboard.type(name)
  await pause(800)
  await win.keyboard.press('Enter')
  await pause(1200)
}

async function rectOf(target) {
  if (typeof target === 'object' && 'x' in target) return target
  const loc = typeof target === 'string' ? win.locator(target) : target
  const all = await loc.all()
  const rects = (await Promise.all(all.map((l) => l.boundingBox()))).filter((b) => b && b.width)
  if (!rects.length) throw new Error(`nothing to mark for ${target}`)
  const x = Math.min(...rects.map((r) => r.x))
  const y = Math.min(...rects.map((r) => r.y))
  return {
    x, y,
    width: Math.max(...rects.map((r) => r.x + r.width)) - x,
    height: Math.max(...rects.map((r) => r.y + r.height)) - y,
  }
}

// Numbered boxes drawn over the window, positioned from the real elements.
// `labels` (optional) writes a word in the badge instead of a number.
// A target can be { t, at } to place its badge: 'tl' (top-left corner, the
// default), 'tr' (top-right, off the text of an input), 'l' or 'r' (middle of
// the left or right edge, outside the box) or 'b' (just below the box), for
// elements on the top edge of a shot.
async function mark(targets, { labels, pad = 3, start = 1, right = false } = {}) {
  const boxes = []
  for (const t of targets) {
    const spec = t && typeof t === 'object' && 't' in t ? t : { t }
    boxes.push({ ...(await rectOf(spec.t)), at: spec.at || (right ? 'tr' : 'tl') })
  }
  await win.evaluate(({ boxes, color, labels, pad, start }) => {
    document.querySelectorAll('.giu-mark').forEach((e) => e.remove())
    const vw = window.innerWidth
    boxes.forEach((b, i) => {
      const box = document.createElement('div')
      box.className = 'giu-mark'
      Object.assign(box.style, {
        position: 'fixed', zIndex: 100000, pointerEvents: 'none',
        left: `${Math.max(1, b.x - pad)}px`, top: `${Math.max(1, b.y - pad)}px`,
        width: `${Math.min(b.width + pad * 2, vw - Math.max(1, b.x - pad) - 1)}px`,
        height: `${b.height + pad * 2}px`,
        border: `2.5px solid ${color}`, borderRadius: '5px', boxSizing: 'border-box',
      })
      const dot = document.createElement('div')
      dot.className = 'giu-mark'
      const text = labels ? labels[i] : String(i + start)
      dot.textContent = text
      const wide = text.length > 1
      Object.assign(dot.style, {
        position: 'fixed', zIndex: 100001, pointerEvents: 'none',
        left: `${{
          tr: Math.min(vw - 24, b.x + b.width + pad - 10),
          r: b.x + b.width + pad + 3,
          l: b.x - pad - 23,
          b: b.x + b.width / 2 - 10,
        }[b.at] ?? Math.max(2, b.x - pad - 10)}px`,
        top: `${{
          l: b.y + b.height / 2 - 10,
          r: b.y + b.height / 2 - 10,
          b: b.y + b.height + pad + 3,
        }[b.at] ?? Math.max(2, b.y - pad - 10)}px`,
        minWidth: '20px', height: '20px', padding: wide ? '0 7px' : '0',
        borderRadius: '10px', boxSizing: 'border-box',
        background: color, color: '#fff', font: '700 12px/20px system-ui, sans-serif',
        textAlign: 'center', boxShadow: '0 0 0 2px #fff', whiteSpace: 'nowrap',
      })
      document.body.append(box, dot)
    })
  }, { boxes, color: MARK, labels, pad, start })
  await pause(300)
}

async function unmark() {
  await win.evaluate(() => document.querySelectorAll('.giu-mark').forEach((e) => e.remove()))
}

// `grow` widens a clip up and left (clamped to the window).
async function shoot(name, clip, { grow = 0 } = {}) {
  const opts = { path: `${OUT}/${name}` }
  if (clip) {
    const r = await rectOf(clip)
    const x = Math.max(0, r.x - grow); const y = Math.max(0, r.y - grow)
    opts.clip = { x, y, width: r.x + r.width - x, height: r.y + r.height - y }
  }
  await win.screenshot(opts)
  console.log('wrote', name)
  await unmark()
}

async function probe(name) {
  if (!PROBE) return
  await win.screenshot({ path: `${CACHE}/probe-${name}.png` })
  console.log('probe', name)
}

// --- the Explorer ---------------------------------------------------------------
const explorer = '.part.sidebar'
const header = '.part.sidebar .pane-header:has-text("ica-lab-06")'

async function showExplorer() {
  await command('View: Show Explorer')
}

async function hoverHeader() {
  // Hovering the header shows its buttons (the hover delay setting keeps the
  // folder name's tooltip from covering the shot)
  await win.locator(`${header} .title`).hover()
  await pause(500)
}

// Click an Explorer header action ("New File...", "New Folder...")
async function headerAction(label) {
  await hoverHeader()
  await win.locator(`${header} .action-label[aria-label^="${label}"]`).click()
  await pause(700)
}

async function typeName(name) {
  await win.keyboard.type(name)
  await pause(400)
}

// Paste a snippet into the open editor through the clipboard, as students do
// (typing it would trigger auto-indent and auto-closing tags)
async function paste(file) {
  const text = fs.readFileSync(`${SNIPPETS}/${file}`, 'utf8')
  await app.evaluate(({ clipboard }, t) => clipboard.writeText(t), text)
  await win.locator('.part.editor .monaco-editor .view-lines').first().click()
  await win.keyboard.press('Control+V')
  await pause(700)
}

async function save() {
  await win.keyboard.press('Control+S')
  await pause(800)
}

async function treeRow(name) {
  return win.locator(`.part.sidebar .monaco-list-row[aria-label="${name}"], .part.sidebar .monaco-list-row:has(.label-name:text-is("${name}"))`).first()
}

// 0. Extensions → search Live Server → Install (a fresh extensions folder every
// run, so the Install button is real)
await command('View: Show Extensions')
await pause(1500)
await win.keyboard.type('Live Server')
await pause(500)
{
  const item = win.locator('.part.sidebar .extension-list-item:has(.publisher:has-text("Ritwick Dey"))').first()
  await item.waitFor({ timeout: 60000 })
  await pause(2500) // icons and install counts load late
  await probe('extensions')
  const install = item.locator('.action-item:not(.disabled) .extension-action.install, .action-label:text-is("Install")').first()
  await mark([
    { t: '.part.activitybar .action-item:has([aria-label^="Extensions"])', at: 'r' },
    { t: '.part.sidebar .extensions-search-container, .part.sidebar .suggest-input-container', at: 'tr' },
    item.locator('.name').first(),
    { t: install, at: 'r' },
  ])
  await shoot('extensions-live-server.png', { x: 0, y: 30, width: 460, height: 240 })
  await install.click()
  // First extension from this publisher: VS Code asks whether to trust them
  const trust = win.locator('.monaco-dialog-box .monaco-button:has-text("Trust Publisher & Install")')
  await trust.waitFor({ timeout: 30000 })
  await pause(800)
  await mark([{ t: trust, at: 'b' }])
  {
    const d = await rectOf('.monaco-dialog-box')
    await shoot('extensions-trust.png', { x: d.x - 8, y: d.y - 8, width: d.width + 16, height: d.height + 34 })
  }
  await trust.click()
  await win.locator('.statusbar-item:has-text("Go Live")').waitFor({ timeout: 120000 })
  await command('View: Close All Editors')
  await pause(1500)
}

await showExplorer()
await probe('start')

// 1. File → Open Folder... (the folder is already open; the menu is the point)
await win.locator('.menubar-menu-button[aria-label="File"]').click()
await pause(700)
await probe('file-menu')
{
  const item = win.locator('.monaco-menu .action-item:has(.action-label:text-is("Open Folder..."))')
  const menu = await rectOf('.monaco-menu-container .monaco-scrollable-element')
  const recent = await rectOf(win.locator('.monaco-menu .action-item:has(.action-label:text-is("Open Recent"))'))
  await mark(['.menubar-menu-button[aria-label="File"]', item])
  await shoot('open-folder.png', {
    x: 0, y: 0,
    width: Math.min(menu.x + menu.width + 20, 1100),
    height: recent.y + recent.height + 10,
  })
}
await win.keyboard.press('Escape')
await pause(500)

// 2. New Folder → assets (focus the empty Explorer first, or the buttons stay hidden)
await win.locator('.part.sidebar .explorer-folders-view').click({ position: { x: 120, y: 300 } })
await hoverHeader()
await mark([
  `${header} .action-label[aria-label^="New File"]`,
  `${header} .action-label[aria-label^="New Folder"]`,
])
await shoot('explorer-buttons.png', { x: 0, y: 30, width: 460, height: 154 })

await headerAction('New Folder')
await typeName('assets')
await mark(['.part.sidebar .monaco-inputbox'], { right: true })
await shoot('explorer-new-folder.png', { x: 0, y: 30, width: 460, height: 154 })
await win.keyboard.press('Enter')
await pause(800)

// 3. assets selected → New File → logo.svg
await (await treeRow('assets')).click()
await pause(400)
await headerAction('New File')
await typeName('logo.svg')
await mark(['.part.sidebar .monaco-inputbox'], { right: true })
await shoot('explorer-new-file-in-assets.png', { x: 0, y: 30, width: 460, height: 154 })
await win.keyboard.press('Enter')
await pause(1500)
// A new, empty .svg opens in Image Preview, which can't show an empty file.
// Students hit this: the link below the error opens the text editor.
{
  await probe('svg-preview')
  const frame = await (async () => {
    for (let i = 0; i < 20; i++) {
      for (const f of win.frames()) {
        if (await f.locator('a.open-file-link, a:has-text("standard text")').count().catch(() => 0)) return f
      }
      await pause(500)
    }
    throw new Error('no image preview link')
  })()
  // A smaller window for this one shot, so the message stays readable on a slide
  await size(800, 470)
  await pause(800)
  const a = frame.locator('a.open-file-link, a:has-text("standard text")').first()
  const msg = frame.locator('text=An error occurred while loading the image').first()
  // boundingBox() is already in the window's coordinates, even inside a webview
  await mark([await msg.boundingBox(), await a.boundingBox()])
  await shoot('svg-preview-error.png', '.part.editor')
  await size(1100, 640)
  await a.click()
  await pause(1500)
}
await paste('assets/logo.svg')
await save()
await command('View: Close All Editors')

// 4. click the empty space → New File → style.css at the root
await probe('after-logo')
await win.locator('.part.sidebar .explorer-folders-view').click({ position: { x: 120, y: 300 } })
await pause(400)
await headerAction('New File')
await typeName('style.css')
await mark(['.part.sidebar .monaco-inputbox'], { right: true })
await shoot('explorer-new-file-root.png', { x: 0, y: 30, width: 460, height: 154 })
await win.keyboard.press('Enter')
await pause(1200)
await paste('style.css')
await save()

// 5. index.html at the root
await win.locator('.part.sidebar .explorer-folders-view').click({ position: { x: 120, y: 300 } })
await pause(400)
await headerAction('New File')
await typeName('index.html')
await win.keyboard.press('Enter')
await pause(1200)
await paste('index.html')
await win.keyboard.press('Control+Home')
await pause(500)

// Area 2: the Editor, close up, while index.html is still unsaved
await mark([
  { t: '.part.editor .tab.active .tab-label', at: 'l' },
  { t: '.part.editor .tab.active .tab-actions', at: 'r' },
  '.part.editor .monaco-editor .line-numbers',
  '.part.editor .monaco-editor .view-line > span',
])
{
  // Cut below the last line of code: the rest of the editor is empty
  const ed = await rectOf('.part.editor')
  const lines = await rectOf('.part.editor .monaco-editor .line-numbers')
  const code = await rectOf('.part.editor .monaco-editor .view-line > span')
  await shoot('area-editor.png', { x: ed.x, y: ed.y, width: code.x + code.width + 40 - ed.x, height: lines.y + lines.height + 16 - ed.y })
}
await save()

// The panel, cut off just below the last line of terminal text
async function panelToText() {
  const pr = await rectOf('.part.panel')
  // ...and just right of the longest line, so the text stays large on a slide
  const { bottom, right } = await win.evaluate(() => {
    const rows = [...document.querySelectorAll('.part.panel .xterm-rows > div')]
    const full = rows.filter((r) => r.textContent.trim())
    const right = Math.max(...full.map((r) => {
      const range = document.createRange()
      const spans = [...r.querySelectorAll('span')].filter((sp) => sp.textContent.trim())
      if (!spans.length) return 0
      range.setStartBefore(spans[0]); range.setEndAfter(spans.at(-1))
      return range.getBoundingClientRect().right
    }))
    return { bottom: full.at(-1).getBoundingClientRect().bottom, right }
  })
  return { x: pr.x, y: pr.y, width: Math.min(pr.width, right + 24 - pr.x), height: bottom + 14 - pr.y }
}

// --- the terminal ------------------------------------------------------------------
async function terminalType(line, wait = 1500) {
  await win.locator('.part.panel .xterm').first().click()
  await win.keyboard.type(line)
  await win.keyboard.press('Enter')
  await pause(wait)
}

// Terminal → New Terminal
await win.locator('.menubar-menu-button[aria-label="Terminal"]').click()
await pause(700)
{
  const item = win.locator('.monaco-menu .action-item:has(.action-label:text-is("New Terminal"))')
  const menu = await rectOf('.monaco-menu-container .monaco-scrollable-element')
  await mark(['.menubar-menu-button[aria-label="Terminal"]', { t: item, at: 'r' }])
  const t = await rectOf('.menubar-menu-button[aria-label="Terminal"]')
  await shoot('terminal-menu.png', {
    x: Math.max(0, t.x - 140), y: 0,
    width: Math.min(menu.x + menu.width + 20, 1100) - Math.max(0, t.x - 140),
    height: (await rectOf(win.locator('.monaco-menu .action-item:has(.action-label:text-is("Run Selected Text"))'))).y + 34,
  })
}
await win.locator('.monaco-menu .action-item:has(.action-label:text-is("New Terminal"))').click()
await pause(3000)
await terminalType('clear', 800)

// --- the three areas, with the finished project open -----------------------------------
await command('View: Close All Editors')
await (await treeRow('style.css')).click()
await pause(800)
await (await treeRow('index.html')).click()
await pause(1000)
await win.locator('.part.panel .xterm').first().click()
await pause(500)
await probe('areas')
await mark(['.part.sidebar', '.part.editor', '.part.panel'], { pad: -2 })
await shoot('vscode-areas.png')

// Area 1: Explorer, close up
await hoverHeader()
await mark([
  { t: '.part.activitybar .action-item:has([aria-label^="Explorer"])', at: 'r' },
  `${header} .title`,
  `${header} .action-label[aria-label^="New File"]`,
  `${header} .action-label[aria-label^="New Folder"]`,
  '.part.sidebar .explorer-folders-view .monaco-list-rows',
])
await shoot('area-explorer.png', { x: 0, y: 30, width: 460, height: 264 })

// Area 3: Terminal, close up
await terminalType('ls', 1000)
await mark([
  { t: '.part.panel .composite-bar .action-item.checked', at: 'b' },
  '.part.panel .xterm-rows',
  { t: '.part.panel .actions-container [aria-label^="New Terminal"]', at: 'b' },
  { t: '.part.panel .actions-container [aria-label^="Kill"]', at: 'b' },
])
{
  await shoot('area-terminal.png', '.part.panel')
}

// --- Live Server: right-click index.html -------------------------------------------
await (await treeRow('index.html')).click({ button: 'right' })
await pause(1000)
await probe('context')
{
  const item = win.locator('.context-view .monaco-menu .action-item:has(.action-label:text-is("Open with Live Server"))')
  const menu = await rectOf('.context-view .monaco-scrollable-element')
  await mark([await treeRow('index.html'), item], { right: true })
  await shoot('live-server-menu.png', {
    x: 0, y: 30,
    width: Math.min(menu.x + menu.width + 20, 1100),
    height: (await rectOf(win.locator('.context-view .action-item:has(.action-label:text-is("Open in Integrated Terminal"))'))).y + 36 - 30,
  })
  await item.click()
  await pause(4000)
}

// The page itself, served by Live Server, in a real browser
{
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 760, height: 460 }, deviceScaleFactor: 2 })
  await page.goto('http://127.0.0.1:5500/index.html')
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${OUT}/page-result.png` })
  console.log('wrote page-result.png')
  await browser.close()
}

// --- Git in the terminal --------------------------------------------------------------
await command('View: Toggle Maximized Panel')
await terminalType('clear', 600)
await terminalType('git config --global user.name "Your Name"', 600)
await terminalType('git config --global user.email "you@giu.de"', 600)
await terminalType('git init', 1500)
await terminalType('git status', 1500)
await probe('git-status')
await shoot('git-status.png', await panelToText())
await terminalType('clear', 600)
await terminalType('git add .', 1000)
await terminalType('git commit -m "Initial frontend structure"', 2000)
await terminalType('git status', 1500)
await shoot('git-commit.png', await panelToText())
await command('View: Toggle Maximized Panel')
await command('View: Close Panel')

// --- Source Control ----------------------------------------------------------------------
await command('View: Show Source Control')
await pause(2500)
await probe('scm')
{
  const btn = win.locator('.part.sidebar .monaco-button:has-text("Publish Branch")').first()
  await mark([{ t: '.part.activitybar .action-item:has([aria-label^="Source Control"])', at: 'tr' }, { t: btn, at: 'l' }])
  await shoot('scm-publish.png', { x: 0, y: 30, width: 460, height: 164 })
}

// An edit afterwards: the daily commit from Source Control
await command('View: Show Explorer')
await (await treeRow('style.css')).click()
await pause(1000)
await win.locator('.part.editor .monaco-editor .view-lines').first().click()
await win.keyboard.press('Control+Home')
await win.keyboard.type('/* Talabat portal styles */\n')
await save()
await command('View: Show Source Control')
await pause(2500)
await win.locator('.part.sidebar .scm-editor .monaco-editor').first().click()
await win.keyboard.type('Add a comment to the styles')
await pause(600)
await probe('scm-commit')
{
  await mark([
    { t: '.part.sidebar .scm-editor', at: 'l' },
    { t: win.locator('.part.sidebar .monaco-button-dropdown').first(), at: 'l' },
    { t: win.locator('.part.sidebar .monaco-list-row:has-text("style.css")').first(), at: 'l' },
  ])
  await shoot('scm-commit.png', { x: 0, y: 30, width: 460, height: 254 })
}

await app.close()
