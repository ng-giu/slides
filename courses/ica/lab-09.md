---
theme: ../../theme
title: BINF 301 - Lab 9 - The DOM and Events
courseTitle: Information and Communication Architecture
course: BINF 301
semester: W2026
lab: 9
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 9 — The DOM and Events</h1>

---
layout: people
title: Contacts
---

<PersonCard role="Course Instructor" name="Dr. Nourhan Hamdi" email="nourhan.hamdi@giu-uni.de" room="M2.312" />
<PersonCard role="Teaching Assistant" name="Mr. Nour Gaser" email="nour.aly@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Ms. Menna Khalid" email="mennatallah.khaled@giu-uni.de" room="M2.437" />
<PersonCard role="Teaching Assistant" name="Ms. Shorouk Salah" email="shorouk.metwally@giu-uni.de" room="M2.437" />
<PersonCard role="Teaching Assistant" name="Mr. Mahmoud" email="mahmoud.amer@giu-uni.de" room="M2.506" />
<PersonCard role="Teaching Assistant" name="Mr. Younes Zied" email="younes.zied@giu-uni.de" room="M2.506" />

---
layout: media
class: giu-wide
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
dense: true
---

# Lab agenda

| Duration | Topic |
|---|---|
| 6 min | **The DOM:** the tree |
| 4 min | **Live demo:** changing a page from the Console |
| 18 min | **Select, listen, change:** `querySelector`, `addEventListener`, `textContent`, `style`, `classList`, and single-page applications |
| 35 min | **Lab Manual:** the Burger Republic kitchen board in VS Code, pushed to GitHub (graded) |

---
layout: split
class: giu-wide dom-tree
title: The DOM tree
dense: true
---

When the browser opens a page, it builds the **DOM** (Document Object Model): a **tree** with one JavaScript **object** for every tag.

<FileTag name="index.html" />

<<< @/snippets/lab-09/tree.html

- A tag **inside** another is its **child**: each `<li>` is a child of the `<ul>`.
- JavaScript reaches the tree through **`document`**.

::right::

<div class="dt-wrap">
<svg viewBox="0 0 400 360" role="img" aria-label="The DOM tree: document, then html; html has head and body; body has h1 and ul; ul has li">
  <path d="M200 50.0 V85.0" class="dt-edge" />
  <path d="M200 125.0 V142.5 H100 V160.0" class="dt-edge" />
  <path d="M200 125.0 V142.5 H280 V160.0" class="dt-edge" />
  <path d="M280 200.0 V217.5 H215 V235.0" class="dt-edge" />
  <path d="M280 200.0 V217.5 H345 V235.0" class="dt-edge" />
  <path d="M345 275.0 V310.0" class="dt-edge" />
  <g class="dt-root"><rect x="150.0" y="10.0" width="100" height="40" rx="10" /><text x="200" y="30">document</text></g>
  <g class="dt-node"><rect x="150.0" y="85.0" width="100" height="40" rx="10" /><text x="200" y="105">&lt;html&gt;</text></g>
  <g class="dt-node"><rect x="50.0" y="160.0" width="100" height="40" rx="10" /><text x="100" y="180">&lt;head&gt;</text></g>
  <g class="dt-node"><rect x="230.0" y="160.0" width="100" height="40" rx="10" /><text x="280" y="180">&lt;body&gt;</text></g>
  <g class="dt-node"><rect x="165.0" y="235.0" width="100" height="40" rx="10" /><text x="215" y="255">&lt;h1&gt;</text></g>
  <g class="dt-node"><rect x="295.0" y="235.0" width="100" height="40" rx="10" /><text x="345" y="255">&lt;ul&gt;</text></g>
  <g class="dt-hl"><rect x="295.0" y="310.0" width="100" height="40" rx="10" /><text x="345" y="330">&lt;li&gt;</text></g>
</svg>
</div>

<style>
.dom-tree .dt-wrap { display: flex; justify-content: center; align-items: center; height: 100%; }
.dom-tree .dt-wrap svg { width: 100%; max-height: 22rem; }
.dom-tree .dt-edge { fill: none; stroke: #9aa7c7; stroke-width: 2; }
.dom-tree rect { stroke-width: 2; }
.dom-tree text { text-anchor: middle; dominant-baseline: central; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 17px; }
.dom-tree rect { fill: #eef2fd; stroke: #2252D9; }
.dom-tree text { fill: #1a3ea8; }
</style>

---
layout: split
class: giu-wide
title: Changing a page from the Console
dense: true
---

<span class="inline-block px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[0.7rem] font-bold tracking-wide">Live demo</span>

On any page with an `<h1>`, open the **Console** (`F12`) and run the lines one at a time:

1. Nothing changes yet: `title` now holds the heading.
2. The heading's text changes.
3. The heading turns red.

Reload the page: it is back to normal. You changed the **DOM**, not the website's files.

::right::

<FileTag name="Console" />

<<< @/snippets/lab-09/dom-concepts.js#console

---
layout: section
icon: code
sub: "Part 1 — Concepts: the three things every interactive page does"
---

# 01 — Select, Listen, Change

---
layout: default
class: giu-wide lp-slide
dense: true
---

# Interactivity loop

<div class="lp-grid">
<svg viewBox="0 0 520 420" role="img" aria-label="A loop: 1. Select, then 2. Listen, then 3. Change, then back to Select">
  <defs><marker id="lp-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#e8a33d" /></marker></defs>
  <path d="M385.2 115.4 A160 160 0 0 1 418.8 234.5" class="lp-arc" marker-end="url(#lp-head)" />
  <path d="M336.3 355.6 A160 160 0 0 1 183.7 355.6" class="lp-arc" marker-end="url(#lp-head)" />
  <path d="M101.2 234.5 A160 160 0 0 1 134.8 115.4" class="lp-arc" marker-end="url(#lp-head)" />
  <g class="lp-node">
    <rect x="143.0" y="13.0" width="234" height="84" rx="14" />
    <text x="260.0" y="33.0" class="lp-title">1. Select</text>
    <text x="260.0" y="57.0" class="lp-code">querySelector</text>
    <text x="260.0" y="79.0" class="lp-sub">Find the element</text>
  </g>
  <g class="lp-node">
    <rect x="281.6" y="253.0" width="234" height="84" rx="14" />
    <text x="398.6" y="273.0" class="lp-title">2. Listen</text>
    <text x="398.6" y="297.0" class="lp-code">addEventListener</text>
    <text x="398.6" y="319.0" class="lp-sub">Wait for an event</text>
  </g>
  <g class="lp-node">
    <rect x="4.4" y="253.0" width="234" height="84" rx="14" />
    <text x="121.4" y="273.0" class="lp-title">3. Change</text>
    <text x="121.4" y="297.0" class="lp-code">textContent, style, classList</text>
    <text x="121.4" y="319.0" class="lp-sub">Update the page</text>
  </g>
  <text x="260" y="211" class="lp-center">on every</text>
  <text x="260" y="233" class="lp-center">event</text>
</svg>
<div>

An interactive page runs these three steps **every time something happens**. The page never reloads.

**Example:** the **New order** button you build today.

| Step | What your code does |
|---|---|
| **Select** | Finds the button and the count |
| **Listen** | Waits for a click on the button |
| **Change** | Adds 1 to the count on the page |

Click again, and the loop runs again.

</div>
</div>

<style>
.lp-slide .lp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center; }
.lp-slide .lp-grid svg { width: 100%; max-height: 22rem; }
.lp-slide .lp-arc { fill: none; stroke: #e8a33d; stroke-width: 4; }
.lp-slide .lp-node rect { fill: #eef2fd; stroke: #2252D9; stroke-width: 2; }
.lp-slide .lp-node text, .lp-slide .lp-center { text-anchor: middle; dominant-baseline: central; }
.lp-slide .lp-title { font-weight: 700; font-size: 19px; fill: #2252D9; }
.lp-slide .lp-code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12px; fill: #2b2b2b; }
.lp-slide .lp-sub { font-size: 13px; fill: #6f6f6f; }
.lp-slide .lp-center { font-size: 18px; font-weight: 600; fill: #8a5a10; }
</style>

---
layout: split
class: giu-wide
title: Select
wideRight: true
dense: true
---

**Selecting** finds an element in the DOM, so JavaScript can work with it. You give a **CSS selector** in quotes: `"#add-btn"`, `".card"`, `"h2"`.

- **`document.querySelector("...")`** returns the **first** element that matches, or **`null`** if none does.
- **`document.querySelectorAll("...")`** returns **every** element that matches, as a list. `.length` says how many; `[0]` is the first.

::right::

<FileTag name="app.js" />

<<< @/snippets/lab-09/dom-concepts.js#select

| Selector | Selects |
|---|---|
| `"#add-btn"` | The element with `id="add-btn"` |
| `".card"` | The elements with `class="card"` |
| `"h2"` | The `<h2>` elements |
| `"ul li"` | The `<li>` elements inside a `<ul>` |

---
layout: split
class: giu-wide
title: Listen
wideRight: true
dense: true
---

**Listening** runs your code every time an **event** (a click, a key press) happens on an element: **`element.addEventListener(type, handler)`**

- **type**: the event, in quotes, all lowercase:

| Type | Happens when |
|---|---|
| `"click"` | The element is clicked |
| `"input"` | The text in a box changes |
| `"keydown"` | A key is pressed |
| `"mouseover"` | The mouse moves onto it |

- **handler**: a **function** called when the event occurs.

::right::

<FileTag name="app.js" />

<<< @/snippets/lab-09/dom-concepts.js#listen

---
layout: split
class: giu-wide
title: Change
wideRight: true
dense: true
---

**Changing** updates an element you selected. The page changes at once, with no reload.

- **`.textContent = "..."`** replaces the text inside the tag.
- **`.style.color = "..."`** sets one CSS property. The name is in camelCase: `backgroundColor`, `fontSize`.
- **`.classList.toggle("...")`** adds the class if it's missing, and removes it if it's there. No dot: `"delivered"`.

::right::

<FileTag name="app.js" />

<<< @/snippets/lab-09/dom-concepts.js#change

---
layout: default
class: giu-wide
dense: true
---

# Single-page applications

A **single-page application (SPA)** is a website built on the **interactivity loop**: it loads one page, once, then runs **Select → Listen → Change** on every event to update what you see. No new page, no reload.

<div class="mx-auto my-5 max-w-[34rem] rounded-xl border-2 border-dashed border-[#2252D9] px-5 pt-2 pb-4">
  <div class="font-mono text-[0.7rem] text-slate-500 mb-3">index.html, loaded once</div>
  <div class="flex items-center justify-center gap-3 text-[0.85rem] font-bold text-[#2252D9]">
    <span class="px-3 py-1.5 rounded-lg border-2 border-[#2252D9] bg-[#eef2fd]">Select</span>→
    <span class="px-3 py-1.5 rounded-lg border-2 border-[#2252D9] bg-[#eef2fd]">Listen</span>→
    <span class="px-3 py-1.5 rounded-lg border-2 border-[#2252D9] bg-[#eef2fd]">Change</span>
    <span class="text-[#e8a33d] text-[1.1rem]">↻</span>
  </div>
</div>

You use SPAs every day: Gmail, Google Maps, Instagram. Today's kitchen board is a tiny one.

In BINF 503 (EBD), you build a bigger SPA with React.

---
layout: section
icon: assignment
sub: "Part 2 — Practice: the Burger Republic kitchen board, in VS Code (graded in class)"
---

# 02 — Lab Manual: Burger Republic Kitchen Board

---
layout: split
class: giu-wide
title: The plan
wideRight: true
dense: true
---

You build the board Burger Republic's kitchen uses to count waiting orders. The HTML and CSS are given; **you write all of `app.js` yourself**. Each step gives the exact names to use and where the code goes.

```text
ica-lab-09/
├── index.html   Getting started (given)
├── style.css    Getting started (given)
└── app.js       Steps 1 to 5 (yours)
```

This lab is **graded**: at the end, you push it to GitHub and your TA checks it.

::right::

| Step | What you add to `app.js` | Use |
|---|---|---|
| 1 | 5 elements and a `count`, at the top | `querySelector`, `let` |
| 2 | **New order**: count up | `addEventListener`, `textContent` |
| 3 | **Serve order**: count down, never below `0` | `if` |
| 4 | Red at `5` or more, in Steps 2 and 3 | `if / else`, `style.color` |
| 5 | **Close kitchen**: grey out the board | `classList.toggle` |
| 6 | Push to GitHub (no code) | `git push` |

---
layout: default
class: giu-wide
dense: true
---

# The target

<div class="grid grid-cols-3 gap-5 mt-2">
<div>

**Just opened**

<img src="/img/lab-09/before.png" alt="The kitchen board just opened: Orders waiting: 0, New order, Serve order and Close kitchen buttons" class="w-full border border-slate-200 rounded-lg" />

</div>
<div>

**6 new orders, 1 served**

<img src="/img/lab-09/busy.png" alt="The kitchen board with Orders waiting: 5, the 5 in red" class="w-full border border-slate-200 rounded-lg" />

</div>
<div>

**Then Close kitchen**

<img src="/img/lab-09/closed.png" alt="The kitchen board greyed out, its title ending in (closed)" class="w-full border border-slate-200 rounded-lg" />

</div>
</div>

**New order** adds 1 to the count; **Serve order** takes 1 away, never below `0`. At **5 or more**, the number turns **red**. **Close kitchen** greys out the board; click it again to reopen.

---
layout: split
class: giu-wide giu-small
title: Getting started (1 of 2)
wideRight: true
dense: true
---

1. Create a folder `ica-lab-09` on your Desktop. Open it in <Tool name="vscode" /> (**File → Open Folder...**).
2. In the Explorer, create `index.html`, `style.css` and `app.js`.
3. Copy the code into `index.html` and save (`Ctrl+S`).

`index.html` links the other two: `style.css` in `<head>`, `app.js` at the end of `<body>`.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-09/index.html

---
layout: split
class: giu-wide giu-small
title: Getting started (2 of 2)
wideRight: true
dense: true
---

4. Copy the code into `style.css` and save. Leave `app.js` empty for now.
5. Right-click `index.html` → **Reveal in File Explorer** (Mac: **Reveal in Finder**). There, right-click `index.html` → **Open with** → **Google Chrome**.
6. Press `F12` (Mac: `Cmd+Option+I`) and click the **Console** tab.

You see the **Just opened** page from **The target**. Keep this tab open, and **reload it** with `F5` (Mac: `Cmd+R`) after every save.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-09/style.css

---
layout: split
class: giu-wide
title: "Step 1 of 6: find the elements"
dense: true
---

At the top of `app.js`:

1. Select each element in the table with `document.querySelector`. Store each one in a `const` with the name in the table.
2. Below them, declare `count` with `let`, starting at `0`. It holds the number of waiting orders.
3. Below that, `console.log` the `countEl` constant.

Save, and reload the page (`F5`).

::right::

| Element | Selector | `const` name |
|---|---|---|
| **The count** | `"#order-count"` | `countEl` |
| **New order** | `"#add-btn"` | `addBtn` |
| **Serve order** | `"#serve-btn"` | `serveBtn` |
| **Close kitchen** | `"#close-btn"` | `closeBtn` |
| **The board** | `"#board"` | `board` |

**Console**: the count element, and **no red text**:

```text
<b id="order-count">0</b>
```

`null` instead? See <Link to="fix-errors">**Red errors**</Link>.

---
layout: split
class: giu-wide
title: "Step 2 of 6: a new order"
dense: true
---

At the **bottom** of `app.js`, below Step 1, type this empty listener on **`addBtn`**. Then replace each comment with **one line** of code.

<FileTag name="app.js (bottom)" state="edit" />

<<< @/snippets/lab-09/skeleton.js#step2

Save, and reload the page (`F5`).

::right::

**Hints**

- Add 1: `count = count + 1`, as in Lab 8.
- Set the text: `countEl.textContent`, then `=`, then the value (Part 1, **Change**).

**Check**: click **New order** three times.

```text
Orders waiting: 3
```

Still `0`? See <Link to="fix-page">**The page doesn't change**</Link>.

---
layout: split
class: giu-wide
title: "Step 3 of 6: serve an order"
dense: true
---

Below the closing `});` of Step 2, type this empty listener on **`serveBtn`**. Then replace the comments with code.

<FileTag name="app.js (bottom)" state="edit" />

<<< @/snippets/lab-09/skeleton.js#step3

Save, and reload the page (`F5`).

::right::

**Hints**

- "More than 0" is `count > 0`. Take 1 away: `count = count - 1`.
- Keep the `textContent` line **outside** the `if`, so it runs on every click.

**Predict** each row, then do it:

| You click | Orders waiting |
|---|---|
| **Serve order** | `0` |
| **New order**, twice | `2` |
| **Serve order** | `1` |
| **Serve order**, twice | `0` |

---
layout: split
class: giu-wide
title: "Step 4 of 6: a busy kitchen"
dense: true
---

Add an `if / else` as the **last lines** of **both** handlers: `addBtn`'s (Step 2) and `serveBtn`'s (Step 3). **Don't type a new listener**: add the lines inside the ones you have. In `addBtn`'s:

<FileTag name="app.js (Step 2's listener)" state="edit" />

<<< @/snippets/lab-09/skeleton.js#step4

Then add the **same** `if / else` at the end of `serveBtn`'s handler, just above its `});`.

::right::

**Hints**

- "5 or more" is `count >= 5`.
- Set a color like any property: `countEl.style.color`, then `=`, then the color in quotes (Part 1, **Change**).

**Predict** each row, then do it:

| You click | Orders waiting |
|---|---|
| **New order**, 4 times | `4` |
| **New order** | <span style="color:crimson;font-weight:700">5</span> |
| **Serve order** | `4` |
| **New order** | <span style="color:crimson;font-weight:700">5</span> |

---
layout: split
class: giu-wide
title: "Step 5 of 6: close the kitchen"
dense: true
---

Below the closing `});` of Step 3, type this empty listener on **`closeBtn`**. Then replace the comment with **one line** of code.

<FileTag name="app.js (bottom)" state="edit" />

<<< @/snippets/lab-09/skeleton.js#step5

`style.css` already has the `.closed` rule: grey, and `(closed)` after the title.

Save, and reload the page (`F5`).

::right::

**Hint**: start the line with `board.classList.toggle`. The class name goes in quotes, **without** a dot (Part 1, **Change**).

**Check**:

| You click | The board |
|---|---|
| **Close kitchen** | Grey, title ends in **(closed)** |
| **Close kitchen** again | Back to normal |

The count keeps its number either way.

---
layout: split
class: giu-wide
title: "Step 6 of 6: push to GitHub"
wideRight: true
dense: true
---

Push your project to GitHub, the way you did in **Lab 7**:

1. In <Tool name="vscode" />, open the Terminal (**Terminal → New Terminal**).
2. Commit your files (the first three commands).
3. On [github.com](https://github.com), click **`+` → New repository**. Name it `ica-lab-09`, **Public**, **Add a README** unchecked. Click **Create repository** and copy its URL.
4. Connect and push (the last three commands), with your URL in place of `<your-github-repo-url>`.

An error? See <Link to="fix-git">**Git and GitHub errors**</Link>.

::right::

<FileTag name="Terminal" />

```bash
git init
git add .
git commit -m "Build the kitchen board"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

Refresh your repository's page on GitHub: `index.html`, `style.css` and `app.js` are there.

---
layout: default
class: giu-wide
icon: assignment
dense: true
---

# Checkpoint: show your TA

Reload the page. **Predict** each row, then do it:

| You do | The page shows |
|---|---|
| Click **Serve order** | `Orders waiting: 0` |
| Click **New order** 5 times | <span style="color:crimson;font-weight:700">5</span>, in red |
| Click **Serve order** | `4`, in black |
| Click **Close kitchen**, then again | Grey with **(closed)**, then back to normal |
| Open your GitHub repository | `ica-lab-09`, public, with `index.html`, `style.css` and `app.js` |

The Console shows **no red text**. Open your page and your GitHub repository in two tabs, and **raise your hand**.

Problems? See <Link to="fix-errors">**Red errors**</Link>, <Link to="fix-page">**The page doesn't change**</Link> or <Link to="fix-git">**Git and GitHub errors**</Link>.

---
layout: section
icon: tools
sub: Red errors, a page that doesn't change, and Git errors
---

# Troubleshooting

---
layout: default
routeAlias: fix-errors
class: giu-fix giu-wide
dense: true
---

# Red errors in the Console

Each error ends with the file and line: `app.js:12` is line 12 of `app.js`.

| Error in the Console | Cause & fix |
|---|---|
| `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` | `querySelector` found nothing. Ids need a `#`: `"#add-btn"`. Also check that `<script>` is at the **end** of `<body>`. |
| `Uncaught TypeError: Assignment to constant variable.` | Your count is a `const`. It changes, so declare it with `let`. |
| `Uncaught TypeError: addBtn.addEventlistener is not a function` | Names are case-sensitive: `addEventListener`, `querySelector`, `classList.toggle`. |
| `Uncaught SyntaxError: Unexpected end of input` | A `{` without its closing `}`. Every function and `if` needs one. |
| `GET file:///…/ica-lab-09/app.js net::ERR_FILE_NOT_FOUND` | No file named exactly `app.js` next to `index.html`. |

---
layout: default
routeAlias: fix-page
class: giu-fix giu-wide
dense: true
---

# The page doesn't change

| What you see | Cause & fix |
|---|---|
| Nothing changes after your edit | Not saved (a dot on the file's tab): press `Ctrl+S`. Then press `F5` in Chrome: the page doesn't reload by itself. |
| A button does nothing, and no red text | The event type is all lowercase: `"click"`, not `"Click"`. |
| The count stays at `0`, and no red text | `textContent` has a capital `C`. `textcontent` sets nothing. |
| The count goes below `0` | Take `1` away only **if** the count is more than `0`. |
| The number stays red under `5` | The `else` is missing, or is in only one of the two click functions. |
| **Close kitchen** does nothing | No dot in the class name: `classList.toggle("closed")`. |

---
layout: default
routeAlias: fix-git
class: giu-fix giu-wide
dense: true
---

# Git and GitHub errors

| Error in the terminal | Cause & fix |
|---|---|
| `fatal: not a git repository (or any of the parent directories): .git` | Wrong folder, or no `git init` yet. Open `ica-lab-09` in VS Code, then run `git init`. |
| `*** Please tell me who you are.` | Run `git config --global user.name "Your Name"` and `git config --global user.email "you@giu.de"`, then commit again. |
| `error: src refspec main does not match any` | Nothing is committed yet. Run `git add .` and `git commit -m "Build the kitchen board"`, then push again. |
| `error: remote origin already exists.` | You already added a remote. Run `git remote set-url origin <your-github-repo-url>`, then push again. |
| `! [rejected]        main -> main (fetch first)` | Your GitHub repo has a README. Run `git pull origin main --allow-unrelated-histories --no-rebase --no-edit`, then push again. |
| `remote: Invalid username or token. Password authentication is not supported for Git operations.` | Push again and sign in to GitHub in the window that opens. |

---
layout: refs
title: References & useful links
dense: true
---

## The DOM

- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — `document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — `document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [MDN — `Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN — `HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [MDN — `Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## Events and GitHub

- [MDN — `addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [MDN — SPA (Single-page application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
- [GitHub Docs — Pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Open floor for questions. Next: Lab 10, APIs, JSON and XML."
---

# Questions?
