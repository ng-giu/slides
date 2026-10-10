# GIU lab slides

Slidev decks for GIU lab courses. Content lives in Markdown, design lives in one theme.

```bash
bun install

# Dev server
bun run lab 1                 # dev server for courses/ebd/lab-01.md (default: ebd)
bun run lab ica 1             # dev server for courses/ica/lab-01.md
bun run lab ica 2             # dev server for courses/ica/lab-02.md
bun run assignment 1          # dev server for courses/ebd/assignment-01.md

# Export PDF
bun run export 1              # PDF into dist/ebd/lab-01.pdf
bun run export ica 1          # PDF into dist/ica/lab-01.pdf
bun run export ica all        # export all ICA lab PDFs
bun run export:assignment 1   # PDF into dist/ebd/assignment-01.pdf
```

Each script takes an optional `[course]` (defaults to `ebd` for backward compatibility)
and a number that is automatically zero-padded, so `bun run lab ica 2` and
`bun run lab ica 02` both open `courses/ica/lab-02.md`. `bun run dev` is shorthand
for EBD Lab 1.

There are two deck kinds, living inside each course folder under `courses/<course>/`
and sharing the same theme: `lab-0N.md` for weekly lab sessions, `assignment-0N.md`
for a self-paced, front-to-back walkthrough of an assignment.

A deck can have an optional companion, `lab-0N-<suffix>.md` (e.g. `lab-05-extra.md`,
take-home material that would crowd the lab). Address it as `<n>-<suffix>`
everywhere: `bun run lab 5-extra`, `bun run export 5-extra`, and
`command: ["lab", "ebd", "5-extra"]` in `compose.yml`. The course index lists it
right after its lab.

PDF export needs a browser binary once:

```bash
bunx playwright install chromium
```

## Who the hosted decks are for

The live decks (`lab<N>.<course>.nourgaser.com`) and the index at
slides.nourgaser.com are **for TAs**: to present from, and to share among
ourselves. Students get their material from the GIU CMS, on the course's page
(cms.giu-uni.de → BINF 503 → ...), where we upload the PDFs.

So **no slide ever links to a `*.nourgaser.com` host**, not in text and not in a
QR code. When a deck points students to another deck, it names it and says it
is on the CMS. A student who finds a host on their own is fine; we just never
send them there. Links to public resources (gists, docs) are fine.

## The course index (slides.nourgaser.com)

One page lists every course and every deck, with a link to the live slides and
the PDF. Nothing in it is written by hand: `scripts/build-site.ts` finds courses
(folders in `courses/`) and decks (`lab-NN.md`, `assignment-NN.md`), takes the
course name, code, track and semester from each deck's headmatter, and splits
the deck title (`BINF 503 - Lab 4 - Building a REST API`) into label and topic.

A deck's **Slides** link is the `VIRTUAL_HOST` of the `compose.yml` service that
serves it, and its **PDF** link is `dist/<course>/<deck>.pdf`. A deck missing
either is still listed, with that button greyed out, and the build says which.
So a new deck needs no edit to the index: add its service and rebuild.

```bash
bun run site          # export every PDF, then build dist/site/
bun run site:index    # rebuild dist/site/ from the PDFs already in dist/
```

In production it is the `site` service: `Dockerfile.site` exports every PDF
inside Playwright's image and serves `dist/site/` from nginx. Rebuild it after
changing a deck: `docker compose up -d --build site`. When `playwright-chromium`
is bumped in `bun.lock`, bump the Playwright image tag in `Dockerfile.site` to
match.

## Layout

```
courses/
  ebd/             Electronic Business Development
    lab-01.md
    assignment-01.md
    public/        course assets, served at site root (/img/...)
    snippets/      runnable code the decks pull in, one folder per lab
  ica/             Information & Communication Architecture
    lab-01.md      Lab 1: User Stories & Acceptance Criteria
    lab-02.md      Lab 2: UI/UX & Figma
    public/        course assets, served at site root (/img/...)
theme/             the GIU theme: layouts, components, tokens
scripts/           deck.sh — multi-course resolver for bun scripts; build-site.ts — the index;
                   check/ — deck checks; browser-shots/ — annotated shots of logged-in web apps
dist/              exported PDFs organized by course (dist/ebd/, dist/ica/)
```

Assets live in `courses/<course>/public/` rather than the repo root because Slidev resolves
its public folder relative to the deck it is given (`courses/ebd/lab-01.md`), not to the
working directory. A file at `courses/ebd/public/img/x.png` is referenced as `/img/x.png`.

Images are grouped by what they are, not by which lab uses them, so they stay
reusable as labs are added:

```
img/illustrations/   scene-setting art (rules, hourglass, thank-you, ...)
img/diagrams/        information graphics (sdlc, ...)
img/logos/           product marks for tool slides (git, vscode, ...)
img/screenshots/     captures of real tools, generated (thunder-get, ...)
```

## Editing a deck

Slides are separated by `---`. The block after `---` is that slide's frontmatter, and it picks the layout.

```markdown
---
layout: split
title: Client-side routing
---

Prose on the left.

::right::

Anything on the right.
```

`title:` sets both the heading drawn on the slide and the slide's name in the
overview and PDF outline. Layouts that build their own heading (`split`, `code`,
`activity`, `refs`) read it off the frontmatter — do not also write a `#` heading on
those slides, or you get two. Every other layout takes its heading from a normal
Markdown `#`.

## Layouts

| Layout | Use it for | Frontmatter |
|---|---|---|
| `cover` | Title slide | `logo` |
| `people` | Contacts grid, one `<PersonCard>` per person | `title` |
| `section` | Chapter divider | `icon`, `sub` |
| `default` | Heading plus prose, bullets, or a table | `icon`, `dense` |
| `media` | Illustration beside text | `image` or `tools`, `side`, `alt`, `qr` |
| `split` | Two columns, `::right::` for the second | `title`, `icon`, `file`, `wideRight`, `dense` |
| `code` | Full-width code with a filename tag | `title`, `file`, `dense` |
| `activity` | A whole slide given over to one task | `title`, `label`, `dense` |
| `refs` | Grouped link list | `title`, `icon`, `columns`, `dense` |
| `end` | Closing slide | `sub`, `image`, `qr` |

`dense: true` shrinks type, tables and code on a slide that is running long. Use it instead of rewriting the layout.

## Slide-type icons

Recurring kinds of slide carry the same mark every week, so students recognise
what a slide is before reading it. Decks never name an icon file — they name a
slide type, and the layout draws the mark:

```markdown
---
layout: section
icon: recap
---

# Quick recap of lecture 1
```

| `icon:` | Means |
|---|---|
| `recap` | Looking back at earlier material |
| `activity` | Something the student does now |
| `assignment` | Work to hand in |
| `intro` | Course or topic introduction |
| `lifecycle` | Process and stages |
| `tools` | Tooling and setup |
| `people` | Who is who |
| `questions` | Open floor |
| `code` | Source walk-through |
| `references` | Links to read later |

Section dividers also get an accent dot, gold on the types where the student has
something to do (`activity`, `assignment`) and black everywhere else.

Marks come from [Lucide](https://lucide.dev) through the UnoCSS icon preset that
Slidev ships with. To add a slide type, add one line to the map in
`theme/components/SlideIcon.vue`. Write the `i-lucide-*` class out in full —
UnoCSS scans source text for those strings, so a class built dynamically resolves
to nothing and the icon silently disappears.

## References slide

Every lab ends with one. Write plain Markdown: an `##` heading starts a group, and
the list under it belongs to that group. Groups flow down the first column and on
into the next, and are never split across the gutter.

```markdown
---
layout: refs
---

## Install and set up

- [Git — downloads](https://git-scm.com/downloads)
- [VS Code documentation](https://code.visualstudio.com/docs)

## JavaScript

- [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — the one to bookmark

<div class="giu-refs__note">Nothing on this slide is required.</div>
```

The heading defaults to "References & useful links"; set `title:` to change it, and
`columns: 3` if a lab collects enough links to need it. Keep the trailing note if
the list is long — students otherwise read a wall of links as homework.

## Components

| Component | Use it for |
|---|---|
| `<PersonCard>` | One person in the contacts grid |
| `<Activity>` | An in-lab task inside a content slide — carries the same mark as the `activity` layout |
| `<ToolLogo>` | The real product mark on a tool slide — `src` for an image, or `name` for a tool from `theme/tools.ts` |
| `<FileTag>` | Filename label above a code block |
| `<Tool>` | Inline mention of a tool, e.g. in a sentence — icon plus name, in its brand color |
| `<HttpExchange>` | One HTTP round trip drawn: client, request (method, URL, body), response (status, body), server |
| `<Flow>` | A left-to-right chain of steps: request layers, a middleware pipeline |

```markdown
<ToolLogo src="/img/logos/vscode.png" alt="Visual Studio Code" />

::right::

<Activity>

1. Open a folder in VS Code.
2. Create a file called `hello.js`.

</Activity>
```

Leave blank lines inside `<Activity>`, or Markdown will not format what is in it.

### Mentioning a tool inline

`<Tool name="vscode" />` drops an icon and the tool's name into a sentence, colored
so it reads as that tool at a glance — handy in instructions that mix several
tools (`Open <Tool name="vscode" />, then run it with <Tool name="nodejs" />`).

Icons come from [Simple Icons](https://simpleicons.org) through the same UnoCSS
icon preset the slide-type marks use. To add a tool, add one line to the map in
`theme/tools.ts` — find its slug on simpleicons.org and write the
`i-simple-icons-*` class out in full, for the same reason as the slide-type icons
above. A tool Simple Icons lacks (Thunder Client) borrows a Lucide mark.

### Big tool marks instead of logo files

The same map draws a tool's mark at any size, so a tool slide needs no image
file. On a `media` slide, `tools:` takes the image's spot:

```markdown
---
layout: media
tools: [nodejs, express]
side: right
---

# Node.js + Express
```

`<ToolLogo name="npm" />` draws a single mark inline, at the size of an image logo.

### Drawing a request

`<HttpExchange>` shows what travels between client and server, with the real
method, URL and JSON. Leave the props out for a generic picture of the idea.

```markdown
<HttpExchange method="POST" url="/api/listings"
  body='{ "title": "Beach House" }'
  status="201 Created" response='{ "id": 4, "title": "Beach House" }' />
```

### Drawing a chain of steps

`<Flow>` reads its steps from the slide's frontmatter, where quotes inside code
need no escaping:

```markdown
---
layout: default
layers:
  - { title: Route, code: 'app.get("/api/listings/:id", getListing)', sub: Maps a URL to a controller }
  - { title: Controller, code: "getListing(req, res)" }
---

<Flow :steps="$frontmatter.layers" back="The response travels back up" />
```

## Images

A Markdown image is treated as a figure: full content width, centred, and capped
at 19rem tall so a large export cannot silently run off the bottom of a slide.

```markdown
![The six phases of the life cycle](/img/diagrams/sdlc.png)
```

## QR codes

`media` and `end` both take a `qr: true` flag. When set, `image:` is read as
a link instead of a picture, and a QR code encoding that link is drawn in
the image's spot — same size, same position, same `object-fit: contain`
behaviour.

```markdown
---
layout: media
image: https://forms.gle/your-form-id
side: right
qr: true
---

# Scan to submit
```

The code is built as an inline SVG on the fly, purely in the browser —
nothing is fetched over the network and no image file is ever written to
the repo. This works the same in `slidev dev`, in a static build, and in a
PDF export, since export just screenshots the built page.

## Code slides

Never paste code into a deck. Keep the real file on disk and pull it in, so the
slide and the code students clone cannot drift apart:

```markdown
<<< @/snippets/lab-09/App.jsx {1-8}
```

`@/` is the course folder, so that reads `courses/<course>/snippets/lab-09/App.jsx`.

`{1-8}` highlights those lines. Wrap a section of the source in `// #region name`
and `// #endregion name` to pull just that part, which is usually better than
showing a whole file — a full file will overflow the slide long before it becomes
unreadable:

```markdown
<<< @/snippets/lab-09/App.jsx#routes
```

Regions cannot nest: Slidev ends a region at the first `#endregion` of any name.
Add a language after the region (`#top txt`) to show a file as plain text — useful
for a comments-only exercise, which Shiki would otherwise grey out entirely.

Each `snippets/lab-NN/` folder is a small runnable project (`package.json`,
`.gitignore`), so the code on the slides is code that has actually run. EBD Labs 3
and 4 share one: `lab-03/` is where Lab 3 ends, `lab-04/starter.js` is the
comments-only exercise, and `lab-04/server.js` is the full solution.

## Screenshots of real tools

The Thunder Client screenshots in `img/screenshots/` are generated, not taken
by hand: a script drives a real VS Code with Thunder Client, sends real
requests to the Lab 4 solution in `snippets/lab-04/`, draws the numbered
highlight boxes, and writes the PNGs.

```bash
bun run screenshots
```

It needs Docker, and runs everything inside the Playwright image. Do not run the
VS Code part on the host: a second VS Code there kills a remote-tunnel session.
The first run downloads VS Code, Thunder Client and Express into
`.cache/screenshots/` (gitignored); later runs reuse them.

To change a shot, edit `scripts/screenshots/shoot.mjs`: each shot fills in a
request, lists the elements to number, and names its file. The numbers are keyed
in the slide caption rather than written on the image, so labels never collide.

## Re-skinning

Every colour and spacing value is a CSS variable at the top of `theme/styles/layout.css`. Change the six tokens there to retarget the theme at another course.

Course metadata comes from each deck's headmatter (`course`, `courseTitle`, `track`, `semester`, `lab`) and feeds the footer. Next semester's refresh is one line per file.

## Checking a deck before you teach it

Slidev will not warn you when a slide runs past its bottom edge — it just clips
in the PDF. After heavy edits, export and skim the pages:

```bash
bun run export [course] <lab-number>   # e.g. bun run export ica 1 or bun run export 1
```

Two scripts do the checking for you:

```bash
# every slide: overflow, clipped code, broken images (+ a screenshot of each)
node scripts/check/overflow.mjs http://localhost:3030 /tmp/shots

# every line of code pulled in with <<< is in the PDF's text, so copy-paste works
node scripts/check/paste.mjs courses/ebd/lab-05.md dist/ebd/lab-05.pdf
```
