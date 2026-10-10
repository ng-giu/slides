# Working on this repo

Slidev decks for GIU lab courses, taught by a TA from the PDF and the live
slides. `README.md` is the reference for commands, layouts, components, assets
and code transclusion. Read it before editing a deck. This file is the rest:
the standard a deck is held to, how to check one, and what has bitten us.

## What lives here

- `courses/ebd/`: BINF 503 Electronic Business Development. Weekly labs
  (`lab-NN.md`) and assignment walkthroughs (`assignment-NN.md`).
- `courses/ica/`: BINF 301 Information & Communication Architecture (Figma, UX).
- `theme/`: the one theme both courses share. Change it with care: every deck
  re-renders.
- Last semester's decks were Figma exports. When migrating one, the user drops
  the old PDF in the repo root for reference. Those PDFs are untracked and stay
  that way (large, and superseded).

## The standard a deck is held to

The old Figma decks were prose and "go read the docs". The new ones must let a
student who missed the lab do it alone at home, from the PDF:

- **Real code, never pasted.** Code lives in `courses/<course>/snippets/lab-NN/`
  as a runnable project and is pulled in with `<<< @/snippets/...#region`. Run
  it before it goes on a slide (EBD: start the server and send every request in
  the deck's request table, including the error cases).
- **Time-boxed.** The agenda adds up to about 60-70 minutes, even though the
  slot is 90. Labs over-run; leave the slack.
- **Every activity is concrete**: numbered steps, exact names, and a "predict
  the status/result first" table where it fits.
- **Troubleshooting slides quote real error messages.** Reproduce each failure
  and copy the exact text. Don't write it from memory. They go in a
  **Troubleshooting section at the end**, grouped by symptom ("won't connect",
  "won't start", "answers are wrong"), never mid-lesson. Checkpoints link to
  them with `routeAlias:` on the target and `<Link to="...">`.
- **Catch-up path** near the start for students who missed the previous lab
  (paste-in code, or the previous solution gist with a QR code).
- **Solution** at the end: a public GitHub gist (managed with `gh gist`, already
  logged in) shown with a `qr: true` media slide. A gist has no folders, so the
  slide says where each file goes.
- **Every QR code has its link written under it, clickable.** The theme's
  `QrCode` does this for `qr: true` on `media` and `end`. A hand-made QR image
  must do the same: nobody should need a second device to open a link.
- **References** slide, then the `end` slide. No attendance or submission forms
  unless the user asks for one.

## Students never get a link to our hosts

The `*.nourgaser.com` decks and the index are for TAs. Students get material
from the GIU CMS (the course page on cms.giu-uni.de). A slide never links or
QR-codes a `*.nourgaser.com` host; to point at another deck, name it and say
it is on the CMS. Gists and public docs are fine. See README, "Who the hosted
decks are for".

## Keep the lab itself light

A lab is 60-70 minutes for the median student, run by TAs who also field
everyone's problems. Lab 5's first draft split the code into four files during
the lab and ran 70-90 minutes; the user cut it to one file and moved the split
to a companion deck. So:

- **One new idea per lab, done the simplest way that works.** Good practice
  that isn't the lab's topic (modularising, refactors, extra validation) goes
  in a `lab-NN-extra.md` companion deck, never into the lab itself.
- **A companion deck is part 2 of the lab, never "optional".** It exists only
  because the time may run out: if there is time it is taught in the lab,
  otherwise it is at least opened and walked through, and students finish it
  at home. Title it "Lab N, Part 2". Never write "optional", "not required",
  "if you're curious" or "extra" on a student-facing slide: students read that
  as permission to leave.
- **No homework before a lab.** Students don't do it, and they already have
  assignments. Account sign-ups and similar setup happen in class; an email
  beforehand is a bonus, never a dependency.
- Prefer one slide of small before/after edits (a table) over several slides
  of code blocks, when the change is a word or two per line.

## Code walkthroughs that nobody gets lost in

Write for the most confused student in the room. The user rejected a draft of
Lab 5 whose code section jumped between files without saying so. The rules
that fixed it:

- **A plan slide first**: the finished project tree with new and edited files
  marked, and the steps numbered. Nothing is mentioned before the step that
  creates it (no importing `models/Listing.js` two slides before it exists).
- **Every code slide says which file, new or edit, and where in it.** Title it
  "Step N of M: ...", and use `<FileTag name="server.js (top)" state="edit" />`
  or `state="new"`. Say *where* explicitly: top, bottom, under which line,
  which section.
- **Physical instructions** for anything outside the code: which VS Code
  button, what to type, where the file must end up, "save".
- **No broken middle states.** Order the steps so the app works after each one
  (Lab 5 keeps the array until the last step, so Checkpoint 1 is "connected,
  and still serving the old data").
- **Checkpoints** after each milestone: the exact terminal output and API
  response to expect, then a link to the right troubleshooting table.
- **Show every changed block**, with the changed lines highlighted (`{1,6}`),
  rather than "do the same to the other three".
- Explanations go in their own short slide between steps, not wedged into a
  step.

## EBD: the running project

One app grows all semester: **ebd bn'b**, a simplified Airbnb.

| Lab | Delivered |
|---|---|
| 3 | npm, Express, two `GET` routes on an in-memory array |
| 4 | Full CRUD, middleware, API client; `server.js` split by banners into MIDDLEWARE / DATABASE / MODEL / CONTROLLERS / ROUTES / START |
| 5 | MongoDB Atlas + Mongoose, still **one file**: DATABASE becomes `connectDB`, MODEL gets a schema and new insides, controllers get `async`/`await`. Last back-end lab before midterms, meant to be one of the easiest |
| 5, Part 2 | `lab-05-extra.md`: the refactor into `db.js`, `models/`, `controllers/`, `routes/` (express.Router). Every intermediate `server.js` is in `snippets/lab-05-extra/steps/` and runs. **This split version is the canonical back-end from here on**: the React labs integrate with it, auth is added to it, and the course project is expected to have its shape |
| 6+ | React front-end (Vite, components, router, then calling this API) |

The **layers** are the throughline. When a layer changes, the deck says which
others did not, and shows it. Lab 5's controllers changed only by
`async`/`await` and dropping `Number(...)`, and routes not at all. The React
labs use MongoDB's `_id`.

## Before you call a deck done

Slidev never reports layout problems: it clips silently, and the PDF loses
whatever was clipped. So:

1. Run the dev server (`bun run lab [course] <n>`, or
   `./node_modules/.bin/slidev courses/<course>/lab-NN.md --port <p>`).
2. `node scripts/check/overflow.mjs http://localhost:<p> <outdir>` checks every
   slide for overflow and broken images and saves a screenshot of each. Then
   actually **look** at the screenshots: the script can't judge whether an
   image is too small to read.
3. `bun run export [course] <n>`.
4. `node scripts/check/paste.mjs courses/<course>/lab-NN.md dist/<course>/lab-NN.pdf`
   checks that every line of transcluded code is in the PDF's text, so
   copy-paste from the PDF works. The user checks this, so it must pass.

Read `<<<` regions back after editing a snippet: a region that doesn't match
silently pulls in nothing or the wrong lines. `#region` markers only work in
languages Slidev knows comment syntax for. They do **not** work in `.env` files,
so transclude those whole.

## Slidev and theme gotchas

All of these fail silently:

- `title:` never reaches a layout as a prop (it is a reserved frontmatter
  field). Layouts read `$frontmatter.title`. On `split`/`code`/`activity`/`refs`
  slides, `title:` draws the heading: don't add a `#` too. On `default`, the
  heading comes from `#`.
- A `<style>` block in a slide leaks to the whole deck. Give the slide
  `class: <name>` and prefix every selector with it.
- UnoCSS's preflight removes list bullets; the theme puts them back. Keep it
  that way.
- Assets go in `courses/<course>/public/` (Slidev resolves `public/` from the
  deck's folder), referenced as `/img/...`.
- Code wider than its box is clipped **and missing from the PDF text**. Keep
  slide code within about 55 characters per line in a split column. Use
  `dense: true`, or put a comment on its own line, rather than shrinking fonts.
- Icons (`i-lucide-*`, `i-simple-icons-*`) must be written out in full in
  source. A class built at runtime resolves to nothing. New tools go in
  `theme/tools.ts`.
- A Markdown image is capped at 19rem tall. A screenshot that needs more gets
  a slide class with a scoped `max-height`. A wide-but-short screenshot reads
  best full-width on a `default` slide with a numbered key underneath; a
  near-square one, in the `wideRight` column of a `split`.

## Screenshots

- **Thunder Client** shots are generated by `bun run screenshots` (Docker, a
  real VS Code). Never run that VS Code on the host.
- **Web apps behind a login** (MongoDB Atlas): `scripts/browser-shots/`.
  `browser.mjs` opens a visible Chromium. The user logs in by hand (MFA,
  email codes) and tells you when they are done. Then `peek.mjs` to look,
  `do.mjs` to click, and `shot.mjs` to take a numbered, cropped shot with
  personal data scrubbed (email, org name, password, IP, cluster host).
  Students follow these click by click, so mark only what they press, and key
  the numbers in the slide text.
- Real SaaS UIs drift. Check the actual flow before writing steps. In Oct 2026
  Atlas had: mandatory MFA; **M10 (paid) pre-selected** on the deploy page;
  "Automate security setup" creating the user and allow-listing only the
  current IP; a **Download .env file** button giving
  `MONGODB_URI="mongodb+srv://..."` with the password filled in; no "Allow
  access from anywhere" button (students type `0.0.0.0/0`); and Data Explorer
  needing a **Connect** click.

## Where students get stuck (EBD)

These failures come from real labs, so design against them:

- Database connections. Wrong or edited password, connection strings edited
  by hand, a `.env` in the wrong folder or wrongly named, the IP missing from
  the Atlas access list, a classmate's string, and **the GIU network blocking
  MongoDB** (a phone hotspot fixes it). Lab 5 removes most of these by having
  students use Atlas's downloaded `.env` unchanged, with `dbName` set in code
  so the URI is never edited.
- Secrets in git: `.gitignore` uses `*.env`, which also catches Atlas's
  `atlas-credentials.env` if a student forgets to rename it.
- A silent 30-second wait reads as "frozen". Print something before slow steps.

## Contacts slide

The same `<PersonCard>` list opens every deck of a course. When a detail
changes, change it in **every** deck of that course: they have drifted before
(`TBD` emails left in old decks).

## Deploying

Each deck is a `compose.yml` service with its own `VIRTUAL_HOST`
(`lab<N>.<course>.nourgaser.com`), plus the `site` index at
slides.nourgaser.com. Add the service when you add a deck. Deploy runs on the
user's server (`ssh ngxos`, `git pull`, `docker compose build`, then
`docker compose up -d`). **Ask before deploying.** After a redeploy, curl the
public URLs: a 502 means the shared nginx-proxy didn't pick up the new container
IPs, and must be regenerated, not restarted (it serves other people's sites).

## Writing for these decks

Short sentences, second person, plain words. Bold the one thing to notice. A
slide that needs scrolling to read has too much on it: split it. Notes that are
helpful but optional go in `<div class="giu-refs__note">`.
