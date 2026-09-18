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

PDF export needs a browser binary once:

```bash
bunx playwright install chromium
```

## Layout

```
courses/
  ebd/             Electronic Business Development
    lab-01.md
    assignment-01.md
    public/        course assets, served at site root (/img/...)
  ica/             Information & Communication Architecture
    lab-01.md      Lab 1: User Stories & Acceptance Criteria
    lab-02.md      Lab 2: UI/UX & Figma
    public/        course assets, served at site root (/img/...)
theme/             the GIU theme: layouts, components, tokens
scripts/           deck.sh — multi-course resolver for bun scripts
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
| `media` | Illustration beside text | `image`, `side`, `alt`, `qr` |
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
| `<ToolLogo>` | The real product mark on a tool slide |
| `<FileTag>` | Filename label above a code block |
| `<Tool>` | Inline mention of a tool, e.g. in a sentence — icon plus name, in its brand color |

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
`theme/components/Tool.vue` — find its slug on simpleicons.org and write the
`i-simple-icons-*` class out in full, for the same reason as the slide-type icons
above.

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
<<< ../snippets/lab-09/App.jsx {1-8}
```

`{1-8}` highlights those lines. Wrap a section of the source in `// #region name`
and `// #endregion name` to pull just that part, which is usually better than
showing a whole file — a full file will overflow the slide long before it becomes
unreadable:

```markdown
<<< ../snippets/lab-09/App.jsx#routes
```

Best case, `snippets/` is a symlink or git submodule pointing at the semester's
real course repo.

## Re-skinning

Every colour and spacing value is a CSS variable at the top of `theme/styles/layout.css`. Change the six tokens there to retarget the theme at another course.

Course metadata comes from each deck's headmatter (`course`, `courseTitle`, `track`, `semester`, `lab`) and feeds the footer. Next semester's refresh is one line per file.

## Checking a deck before you teach it

Slidev will not warn you when a slide runs past its bottom edge — it just clips
in the PDF. After heavy edits, export and skim the pages:

```bash
bun run export [course] <lab-number>   # e.g. bun run export ica 1 or bun run export 1
```
