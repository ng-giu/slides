// Annotated screenshot of the page open in browser.mjs.
// usage: node scripts/browser-shots/shot.mjs <spec.json>
// spec: { out, marks: [{text|css, nth?, pad?}], clip: {text|css, pad} | {x,y,w,h}, scrub: {from: to}, tab? }
// Numbers marks 1..n with red boxes drawn into the page, scrubs text, screenshots, then cleans up.
// marks: {text, exact?, nth?, up? (climb to a parent), pad?, badge?: 'right'} or {css, nth?}
// scrub: replace real emails, passwords, IPs and org names BEFORE the shot is taken.
//   The replacement stays in the live page, so the logged-in person sees it too.
// The viewport is the window's; set it first with do.mjs (p.setViewportSize) for a repeatable crop.
import { chromium } from 'playwright-chromium'
import fs from 'node:fs'
const spec = JSON.parse(fs.readFileSync(process.argv[2]))
const b = await chromium.connectOverCDP('http://localhost:9333')
const pages = b.contexts()[0].pages(); const p = pages[spec.tab ?? pages.length - 1]
const info = await p.evaluate((spec) => {
  const MARK = '#e2001a'
  // scrub text everywhere (text nodes + input values)
  const scrub = spec.scrub || {}
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  for (let n; (n = walk.nextNode());) for (const [a, c] of Object.entries(scrub)) if (n.nodeValue.includes(a)) n.nodeValue = n.nodeValue.split(a).join(c)
  for (const i of document.querySelectorAll('input,textarea')) for (const [a, c] of Object.entries(scrub)) if (i.value.includes(a)) i.value = i.value.split(a).join(c)
  const find = (m) => {
    if (m.css) return [...document.querySelectorAll(m.css)].filter(e => e.getBoundingClientRect().width)[m.nth || 0]
    const all = [...document.querySelectorAll('body *')].filter(e => {
      const r = e.getBoundingClientRect(); if (!r.width || !r.height) return false
      const own = [...e.childNodes].filter(c => c.nodeType === 3).map(c => c.nodeValue).join('').trim()
      return m.exact ? (e.innerText || '').trim() === m.text : own.includes(m.text) || (e.innerText || '').trim() === m.text
    })
    const el = all[m.nth || 0]; if (!el) return null
    let t = el; for (let k = 0; k < (m.up || 0); k++) t = t.parentElement
    return t
  }
  const rect = (m) => { const e = find(m); if (!e) return null; const r = e.getBoundingClientRect(); const pd = m.pad ?? 6; return { x: r.x - pd, y: r.y - pd, w: r.width + 2 * pd, h: r.height + 2 * pd } }
  const layer = document.createElement('div'); layer.id = '__marks'
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647'
  const missing = []
  ;(spec.marks || []).forEach((m, i) => {
    const r = rect(m); if (!r) { missing.push(m.text || m.css); return }
    const box = document.createElement('div')
    box.style.cssText = `position:fixed;left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px;border:3px solid ${MARK};border-radius:6px;box-sizing:border-box`
    const n = document.createElement('div'); n.textContent = i + 1
    const left = m.badge === 'right' ? r.x + r.w - 2 : r.x - 26
    n.style.cssText = `position:fixed;left:${Math.max(2, left)}px;top:${r.y - 12}px;width:26px;height:26px;border-radius:13px;background:${MARK};color:#fff;font:700 15px/26px system-ui;text-align:center`
    layer.append(box, n)
  })
  document.body.append(layer)
  let clip = spec.clip
  if (clip && !('x' in clip)) clip = rect(clip)
  return { clip, missing, vw: innerWidth, vh: innerHeight }
}, spec)
if (info.missing.length) console.log('MISSING', info.missing)
let clip = info.clip
if (clip) { clip.x = Math.max(0, clip.x); clip.y = Math.max(0, clip.y); clip.w = Math.min(clip.w, info.vw - clip.x); clip.h = Math.min(clip.h, info.vh - clip.y) }
await p.screenshot({ path: spec.out, clip: clip && { x: clip.x, y: clip.y, width: clip.w, height: clip.h } })
if (!spec.keep) await p.evaluate(() => document.getElementById('__marks')?.remove())
console.log('saved', spec.out, JSON.stringify(clip))
process.exit(0)
