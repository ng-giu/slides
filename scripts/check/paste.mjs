// Check that every line of code a deck pulls in with `<<< @/snippets/...`
// survives into the exported PDF's text, so copy-paste from the PDF works.
// Code clipped by its box is missing from the PDF text too, not just hidden.
//
// Usage (after `bun run export [course] <n>`; needs poppler's pdftotext):
//   node scripts/check/paste.mjs courses/ebd/lab-05.md dist/ebd/lab-05.pdf
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const [deck, pdf] = process.argv.slice(2)
if (!deck || !pdf) { console.error('usage: paste.mjs <deck.md> <deck.pdf>'); process.exit(2) }

const squash = (t) => t.replace(/\s+/g, '')
const text = squash(execFileSync('pdftotext', ['-layout', pdf, '-'], { encoding: 'utf8' }))
const courseDir = path.dirname(deck)

let refs = 0, missing = 0
for (const [, file, region] of fs.readFileSync(deck, 'utf8').matchAll(/<<< @\/(\S+?)(?:#(\S+))?(?:\s|$)/g)) {
  refs++
  let src = fs.readFileSync(path.join(courseDir, file), 'utf8')
  if (region) {
    const m = src.match(new RegExp(`#region ${region}\\n([\\s\\S]*?)\\n[^\\n]*#endregion`))
    if (!m) { console.log(`NO REGION ${file}#${region}`); missing++; continue }
    src = m[1]
  }
  for (const line of src.split('\n')) {
    if (!line.trim() || /#(end)?region/.test(line)) continue
    if (!text.includes(squash(line))) { missing++; console.log(`MISSING ${file}${region ? '#' + region : ''} | ${line}`) }
  }
}
console.log(`${refs} code blocks checked, ${missing} lines missing from the PDF`)
process.exit(missing ? 1 : 0)
