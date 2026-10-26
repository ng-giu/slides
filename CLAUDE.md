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
- **Solution** at the end, from **[ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb)**
  (EBD): one branch per finished lab (`lab-03` ... `lab-06`), each exactly the
  student's `ebd-bnb/` folder at the end of that lab, chained so the history is
  the project's history. The slide links the branch's direct **Download ZIP**
  (`.../archive/refs/heads/<branch>.zip`) and QR-codes the branch page. After a
  lab, add its branch on top of the previous one, built from the tested
  snippets, and run it from `git archive` before pushing. Gists are legacy:
  Labs 4-5 keep theirs next to the repo link; new labs use the repo only (a
  gist flattens folders, which lost students).
- **Every QR code has its link written under it, clickable.** The theme's
  `QrCode` does this for `qr: true` on `media` and `end`. A hand-made QR image
  must do the same: nobody should need a second device to open a link.
- **References** slide, then the `end` slide. No attendance or submission forms
  unless the user asks for one.

## Students never get a link to our hosts

The decks and index on slides.nourgaser.com are for TAs. Students get material
from the GIU CMS (the course page on cms.giu-uni.de). A slide never links or
QR-codes `nourgaser.com`; to point at another deck, name it and say
it is on the CMS. Gists and public docs are fine. See README, "Who the hosted
decks are for".

## Keep the lab itself light

A lab is 60-70 minutes for the median student, run by TAs who also field
everyone's problems. Lab 5's first draft split the code into four files during
the lab and ran 70-90 minutes; the user cut it to one file and moved the split
to a companion deck. So:

- **One new idea per step, done the simplest way that works.**
- **No more companion "Part 2" decks** (the user's call, Oct 2026, from Lab 7
  on). Lab 5, Part 2 (`lab-05-extra.md`) stays as it is. New material goes in
  the lab itself, last steps first to drop if time runs out; whatever isn't
  finished in class, students finish at home from the same deck.
- Never write "optional", "not required", "if you're curious" or "extra" on a
  student-facing slide: students read that as permission to leave.
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
| 6 | React & Vite: the project becomes `ebd-bnb/backend/` + `ebd-bnb/frontend/` (the shape the course project requires). Components (`Header`, `ListingCard`), props, a list with `.map` and `key`, `useState`, all on fake data shaped like the API's (`_id`, `title`, `pricePerNight`) |
| 7 | React Router v8 (the `react-router` package; `BrowserRouter`, `Routes`, `Link`, `useNavigate`, `useParams`): `pages/` with Home, NotFound, AddListing (a controlled form), and Listing (`/listings/:id`); listings as state in `App` with `addListing` (spread) and `deleteListing` (`.filter`) passed down as `onAdd`/`onDelete`; `useEffect` for the tab title. Still fake data, lost on reload |
| 8 | The halves connect. Back end: `cors` (`app.use(cors())`) and `GET /api/health` (the route the project's automated check calls). Front end: `src/api/listings.js` wraps `fetch` (`getListings`, `getListing`, `createListing`, `removeListing`; `res.ok` checked, errors thrown); `App` loads in a `useEffect([])` with `loading`/`error` early returns (hooks above them); add and delete call the API first, and add stores the listing the API returns (MongoDB's `_id`). The form no longer makes ids |
| 9 | Auth. Back end: `bcryptjs` + `jsonwebtoken`, `JWT_SECRET` in `.env`, `models/User.js`, `controllers/authController.js` (register 201/409/400, login 401 for wrong email *or* password, both answer `{ token, user: { id, name } }`), `routes/authRoutes.js` at `/api/auth`, `middleware/auth.js` (`requireAuth`: `Authorization: Bearer`, `jwt.verify`, `req.user`) on POST/PUT/DELETE listings; `owner` on listings, set from `req.user.id`, and 403 on someone else's. Front end: `api/auth.js`, Login and Register pages, `user` in `App` saved in `localStorage`, the token sent by `api/listings.js`, `<Navigate>` guarding `/add`, Delete only on your own cards, `/mine`. No AuthContext, cookies or `/me` (one slide says what those are) |

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
   run it again with `ROOT_PX=18`: a slide that fits here only by a few pixels
   overflows on other machines (Lab 6's pipeline slide wrapped its title and
   ran into the footer on the user's screen while passing here). It reports
   content past the bottom **and** past the right edge. Then
   actually **look** at the screenshots: the script can't judge whether an
   image is too small to read.
3. `bun run export [course] <n>`.
4. `node scripts/check/paste.mjs courses/<course>/lab-NN.md dist/<course>/lab-NN.pdf`
   checks that every line of transcluded code is in the PDF's text, so
   copy-paste from the PDF works. The user checks this, so it must pass.

Read `<<<` regions back after editing a snippet: a region that doesn't match
silently pulls in nothing or the wrong lines. Slidev only recognises a marker
that is the **whole line** (`findRegion` in `@slidev/cli`):

- `// #region name`, `/* #region name */`, `#region name` (shell, `.env`;
  not `# #region`).
- **Not JSX comments** (`{/* #region */}`), so a region can't start inside
  returned JSX. Build the piece in a variable above `return` instead (Lab 6's
  `const cards = listings.map(...)`), which is also how React's docs teach it.
- **Not HTML**: the `<!-- #endregion -->` end pattern never matches, so an
  HTML region runs to the end of the file.

## Slidev and theme gotchas

All of these fail silently:

- `title:` never reaches a layout as a prop (it is a reserved frontmatter
  field). Layouts read `$frontmatter.title`. On `split`/`code`/`activity`/`refs`
  slides, `title:` draws the heading: don't add a `#` too. On `default`, the
  heading comes from `#`.
- A `<style>` block in a slide applies to the whole deck **only while that
  slide is mounted**: always in the PDF export, but not when the live deck is
  opened on another slide. So a slide's `<style>` may only style that slide
  (give it `class: <name>`, prefix every selector). Rules several slides share
  go in the theme: `class: giu-small` (long code: smaller type, tighter lines)
  and `class: giu-fix` (troubleshooting tables whose first column holds long
  error messages) live in `theme/styles/layout.css`. Lab 7's first draft
  defined them in one slide and they silently vanished elsewhere.
- The theme's tables make the **first column `nowrap`** (for agenda
  durations). Long text there pushes the table off the right edge; use
  `giu-fix`.
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

GitHub Pages, at slides.nourgaser.com: **every push to `main` deploys**
(`.github/workflows/pages.yml` exports the PDFs, builds every deck at
`/<course>/<deck>/`, builds the index). So ask before pushing to `main`. A new
deck needs no deploy config: the build finds it. After a deploy, `gh run watch`,
then open the changed deck on the live site. No server or container is involved;
the old `compose.yml` setup on ngxos is gone.

The build only rebuilds decks whose inputs changed (`scripts/build-decks.ts`,
keyed on a hash of the deck, the snippets it transcludes, its course's shared files, the theme, the
dependencies and the script; outputs cached in `.cache/decks` across runs). A
theme or dependency change therefore rebuilds every deck, which is correct and
slow. If a deck ever looks stale on the site, delete the `decks-*` caches in the
repo's Actions settings and push again. The repository lives at
`github.com/ng-giu/slides`.

Two things only break on the hosted build, never in `bun run lab`:

- An image path passed as a prop or frontmatter (`image: /img/...`) needs
  `withBase()` in the theme, or it 404s under `/<course>/<deck>/`.
- Decks use hash routing (`.../lab-05/#/12`), so scripts that open a slide by
  URL use `/#/N`.

## Writing for these decks

Short sentences, second person, plain words. Bold the one thing to notice. A
slide that needs scrolling to read has too much on it: split it. Notes that are
helpful but optional go in `<div class="giu-refs__note">`.
