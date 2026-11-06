---
theme: ../../theme
title: BINF 503 - Lab 6 - React & Vite
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 6
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 6 — React & Vite

---
layout: people
title: Contacts
---

<PersonCard role="Course Instructor" name="Dr. Nourhan Hamdi" email="nourhan.hamdi@giu-uni.de" room="M2.312" />
<PersonCard role="Teaching Assistant" name="Mr. Nour Gaser" email="nour.aly@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Mr. Omar Alaa" email="omar.alaaeldin@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Ms. Mariam Khalid" email="mariam.khalid@giu-uni.de" room="M2.414" />
<PersonCard role="Teaching Assistant" name="Mr. Younes Zied" email="younes.zied@giu-uni.de" room="M2.506" />
<PersonCard role="Teaching Assistant" name="Mr. Mahmoud Hani" email="mahmoud.amer@giu-uni.de" room="M2.506" />

---
layout: media
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
---

# Lab agenda

| Duration | Topic |
|---|---|
| 5 min | Recap: the back end is done |
| 10 min | **Part 1A — The front end:** where your code runs, Vite, two servers |
| 15 min | **Part 1B — React:** JSX, components, props, lists, state |
| 35 min | **Part 2 — Lab Manual:** the starter project, then the first ebd bn'b page in 5 steps |
| — | Next lab: pages and forms |

---
layout: default
icon: recap
stack:
  - { title: Guest, sub: "Sees pages, clicks buttons" }
  - { title: Front end, code: "React", sub: "Labs 6 to 8: starts today" }
  - { title: Back end, code: "Express API", sub: "Labs 3 to 5: done" }
  - { title: Database, code: "MongoDB Atlas", sub: "Lab 5: done" }
---

# The back end is done

ebd bn'b has a real API: send a request, get JSON back, and the data survives a restart.

<Flow :steps="$frontmatter.stack" />

But nobody books a stay by typing requests into Thunder Client. Guests need **pages** they can see and click. That is the **front end**, and it starts today.

---
layout: section
icon: intro
sub: "Part 1 — Concepts: what changes when your code runs in someone else's browser"
---

# 01 — The front end

---
layout: default
icon: intro
dense: true
---

# Where your code runs now

| | Back end | Front end |
|---|---|---|
| **Runs on** | A server: your laptop now, a data centre later | **Every visitor's browser**, on their phone or laptop |
| **Run by** | Node.js | The browser itself |
| **Answers with** | JSON, to whoever asks | Pages people see and click |
| **You test it with** | Thunder Client | The browser |
| **When it breaks** | The error is in the terminal | The error is in the browser console (**F12**) and, with Vite, in the terminal too |

The big shift: your front-end code is **sent** to every visitor and runs on their machine. You don't control that machine, only what you send it.

---
layout: media
tools: [html5, css3, javascript]
side: right
---

# The browser speaks three languages

Only three. You used all of them in the workbook, modules 09 to 13:

- **HTML** says what is on the page: headings, buttons, lists.
- **CSS** says how it looks: colours, spacing, layout.
- **JavaScript** makes it do things: react to clicks, change the page.

Anything else we write today, React and JSX included, must be turned into these three before a browser can run it.

---
layout: default
icon: intro
react:
  - { title: Data, code: "listings", sub: "An array of listings" }
  - { title: Components, code: "<ListingCard />", sub: "Small pieces that say what one part looks like" }
  - { title: The page, sub: "What the guest sees" }
---

# Why React?

In the workbook you changed the page by hand: find an element, create one, append it, update its text. Fine for one button. With fifty listings that each change, it becomes a mess.

<Flow :steps="$frontmatter.react" back="When the data changes, React redraws the parts of the page that changed" />

With <Tool name="react" />, you **describe** what the page should look like for the data you have, as **components**. React builds the page, and keeps it up to date.

---
layout: default
icon: intro
diagram:
  width: 860
  height: 318
  groups:
    - { id: author, x: 0, y: 0, w: 252, h: 258, label: You write, icon: pencil, tone: slate }
    - { id: vite, x: 282, y: 0, w: 578, h: 112, label: Vite builds it, icon: zap, tone: amber }
    - { id: out, x: 282, y: 138, w: 578, h: 120, label: What the browser gets, icon: folder, tone: green }
  nodes:
    - { id: dev, x: 14, y: 107, w: 80, h: 46, label: You, icon: user, tone: slate }
    - { id: jsx, x: 124, y: 38, w: 114, h: 46, label: Components, sub: "App.jsx, Header.jsx", icon: file-code, tone: slate }
    - { id: css, x: 124, y: 107, w: 114, h: 46, label: Styles, sub: index.css, icon: palette, tone: slate }
    - { id: img, x: 124, y: 176, w: 114, h: 46, label: Images, sub: "logos, photos", icon: image, tone: slate }
    - { id: tr, x: 302, y: 44, w: 160, h: 50, label: Translate, sub: "JSX to plain JavaScript", icon: code, tone: amber }
    - { id: bu, x: 490, y: 44, w: 160, h: 50, label: Bundle, sub: "Many files into a few", icon: package, tone: amber }
    - { id: se, x: 678, y: 44, w: 164, h: 50, label: Serve or write, sub: "npm run dev · npm run build", icon: zap, tone: amber }
    - { id: html, x: 302, y: 186, w: 124, h: 50, label: index.html, sub: "The one page", icon: file, tone: green }
    - { id: js, x: 440, y: 186, w: 124, h: 50, label: JavaScript, sub: "Your bundled code", icon: file-code, tone: green }
    - { id: pics, x: 578, y: 186, w: 124, h: 50, label: Images, sub: "Optimised", icon: image, tone: green }
    - { id: style, x: 716, y: 186, w: 126, h: 50, label: CSS, sub: "All your styles", icon: palette, tone: green }
    - { id: host, x: 302, y: 276, w: 160, h: 42, label: Web server, sub: "localhost:5173 today", icon: server, tone: navy }
    - { id: browser, x: 490, y: 276, w: 160, h: 42, label: Browser, sub: "Downloads the files", icon: globe, tone: navy }
    - { id: run, x: 678, y: 276, w: 164, h: 42, label: Runs them, sub: "React draws the page", icon: play, tone: navy }
  edges:
    - { from: dev, to: jsx }
    - { from: dev, to: css }
    - { from: dev, to: img }
    - { from: author, to: tr, fromAt: 0.27, toAt: 0.5 }
    - { from: tr, to: bu }
    - { from: bu, to: se }
    - { from: vite, to: out, fromSide: b, toSide: t, fromAt: 0.86, toAt: 0.86 }
    - { from: out, to: host, fromSide: b, toSide: t, fromAt: 0.173, toAt: 0.5 }
    - { from: host, to: browser }
    - { from: browser, to: run }
---

# From code to browser

<Diagram v-bind="$frontmatter.diagram" />

---
layout: default
icon: intro
servers:
  - { tool: vite, code: "frontend/  :5173", sub: "Sends the app to the browser" }
  - { title: Browser, code: "http://localhost:5173", sub: "Runs React, shows the pages" }
  - { tool: express, code: "backend/  :3000", sub: "Answers /api/... with JSON" }
---

# Two servers from now on

<Flow :steps="$frontmatter.servers" back="Lab 8: React asks Express for the listings, and JSON comes back" />

- **Two folders**, `frontend/` and `backend/`, each its own npm project with its own `npm run dev`.
- From Lab 8: **two terminals**, one for each, both running at the same time.
- **Today only the front end runs**, with fake data. The back end stays stopped until Lab 8.

---
layout: section
icon: code
sub: "Part 1 — Concepts: JSX, components, props, lists and state"
---

# 02 — React

---
layout: default
icon: code
tour:
  - { title: index.html, code: '<div id="root"></div>', sub: "The one HTML page. It starts empty" }
  - { title: src/main.jsx, code: "createRoot(...).render(<App />)", sub: "Puts App into that empty div" }
  - { title: src/App.jsx, code: "function App() { ... }", sub: "Your page. You write this" }
---

# How a React app starts

Vite makes a starter project for you. The browser loads **one** page, and React fills it in:

<Flow :steps="$frontmatter.tour" />

You write everything in `src/`. The rest, `package.json`, `vite.config.js`, `public/` and the linter's settings, you leave alone. `main.jsx` too: it already does its one job.

---
layout: default
icon: code
dense: true
---

# JSX: HTML inside JavaScript

A component returns **JSX**. It looks like HTML, but it is JavaScript, and Vite turns it into plain JavaScript for the browser. Four differences to know:

| In HTML | In JSX | Why |
|---|---|---|
| `class="card"` | `className="card"` | `class` is already a word in JavaScript |
| Elements side by side | **One parent** around them | A function returns one thing |
| Text only | `{listing.title}` | Curly braces put JavaScript inside |
| `<header>` | `<Header />` | A **capital** letter is your component; lower case is an HTML tag |

<div class="giu-refs__note">Forget one of these and Vite tells you, in the terminal and on the page. Troubleshooting, at the end, has the messages.</div>

---
layout: split
title: "Components"
dense: true
---

A **component** is a function that returns JSX.

- Its name starts with a **capital letter**: `Header`, in `Header.jsx`.
- You use it like a tag: `<Header />`. Use it three times, get three copies.
- One component per file. `export default` shares it; `import` takes it into another file. The same as Lab 5, Part 2.

ebd bn'b gets two today: `Header` (the title) and `ListingCard` (one listing).

::right::

A small one:

```jsx
// components/Header.jsx
function Header() {
  return <h1>ebd bn'b</h1>;
}

export default Header;
```

And where it is used:

```jsx
// App.jsx
import Header from "./components/Header.jsx";
// ... inside App's JSX:
<Header />
```

---
layout: split
title: "Props"
dense: true
---

**Props** are what a parent hands to a component, like the arguments of a function.

- The **same** `ListingCard` shows a different listing depending on what it is given.
- The parent passes it as an attribute: `listing={...}`.
- The component takes it out of its props, in its first line, and shows parts of it with `{ }`.
- A component **reads** its props. It never changes them.

::right::

The parent passes one listing in:

```jsx
<ListingCard listing={listings[0]} />
```

The card takes it out of its props:

```jsx
function ListingCard({ listing }) {
  return <h2>{listing.title}</h2>;
}
```

---
layout: split
title: "Lists: .map and key"
dense: true
---

To show one card per listing, turn the **array of listings** into an **array of cards**. It is the same `.map` as Lab 2, except it returns JSX.

- Put `{cards}` in the JSX and React draws them all.
- **`key`**: React needs a unique key on each item of a list, to tell them apart when the list changes. MongoDB's `_id` is exactly that.

Today's listings are **fake**, shaped exactly like what our API returns: `_id`, `title`, `pricePerNight`. In Lab 8 they come from the back end. The shape is the same, so the components won't change.

::right::

```jsx
const cards = listings.map((listing) => (
  <ListingCard key={listing._id} listing={listing} />
));
```

Then, in the JSX:

```jsx
<div className="listings">{cards}</div>
```

---
layout: split
title: "State"
dense: true
---

**State** is data a component remembers, and that can change. On each card: has this listing been saved?

- `useState(false)` gives two things: the value, `saved`, starting at `false`, and a function to change it, `setSaved`.
- Call `setSaved(...)` and React redraws **this card**, and only this one. Every card has its own `saved`.
- `saved ? "♥ Saved" : "♡ Save"` picks the text: the first one if `saved` is true.

<div class="giu-refs__note"><code>onClick={() => setSaved(!saved)}</code>, with the arrow: it runs on a click. Without the arrow it runs on every redraw, forever.</div>

::right::

```jsx
import { useState } from "react";

// first line inside the component:
const [saved, setSaved] = useState(false);

// in its JSX:
<button onClick={() => setSaved(!saved)}>
  {saved ? "♥ Saved" : "♡ Save"}
</button>
```

---
layout: default
icon: code
---

# Props and state

| | Props | State |
|---|---|---|
| **What** | A component's inputs | A component's own memory |
| **Who sets it** | The parent: `<ListingCard listing={...} />` | The component: `setSaved(...)` |
| **Can it change?** | Not from inside the component | Yes, and React redraws when it does |
| **Today** | Which listing a card shows | Whether a card is saved |

Most of React is these two ideas: data flows **down** through props, and changes happen through state.

---
layout: section
icon: activity
sub: "Part 2 — Practice: five steps, each one ends with a working page"
---

# 03 — Lab Manual: your first React page

---
layout: split
title: The plan
dense: true
wideRight: true
class: giu-tree
---

<style>
/* The whole project tree must fit. Slide styles leak, so this hangs off the class */
.giu-tree .giu-split__grid pre.shiki { font-size: 0.56rem !important; line-height: 1.2 !important; }
</style>

| Step | What |
|---|---|
| Start | The starter project |
| 1 | `backend/` and `frontend/` |
| 2 | A clean start |
| 3 | A component: `Header` |
| 4 | Props and lists: `ListingCard` |
| 5 | State: a Save button |

Each code slide says **which file**, **new** or **edit**, and where. Stuck at a checkpoint? Its link takes you to the fix.

<div class="giu-refs__note">Not shown: <code>node_modules/</code>. <code>App.css</code> is deleted in Step 2.</div>

::right::

```text {2,13,17,18,20,21,22,24}
ebd-bnb-lab-05-part2/
├── backend/                 MOVED  Step 1
│   ├── controllers/
│   │   └── listingController.js
│   ├── models/
│   │   └── Listing.js
│   ├── routes/
│   │   └── listingRoutes.js
│   ├── .env.example
│   ├── db.js
│   ├── package.json
│   └── server.js
├── frontend/                NEW    Step 1
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       NEW  Step 3
│   │   │   └── ListingCard.jsx  NEW  Step 4
│   │   ├── data/
│   │   │   └── listings.js      NEW  Step 4
│   │   ├── App.jsx              EDIT Steps 2-4
│   │   ├── index.css            EDIT Step 2
│   │   └── main.jsx
│   ├── index.html               EDIT Step 2
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-05-part2
side: right
qr: true
dense: true
---

# Getting started

Everyone starts from the same project: our back end from Lab 5, Part 2.

1. [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-05-part2.zip) and unzip it. You get a folder named `ebd-bnb-lab-05-part2`.
2. In <Tool name="vscode" />: **File → Open Folder...**, and open `ebd-bnb-lab-05-part2`.
3. The Explorer, on the left, shows `controllers`, `models`, `routes` and `server.js`. It shows one folder named `ebd-bnb-lab-05-part2` instead? Windows unzipped it into a second folder. Open the inner one.

**You don't run the back end today.** No `.env`, no `npm install` in it: today is all front end. It runs again in Lab 8.

---
layout: split
title: "Step 1 of 5: move the API into backend/"
dense: true
---

1. Click the empty space under the last file in the Explorer, so nothing is selected.
2. Click the **New Folder** icon at the top of the Explorer. Type `backend`, press **Enter**. It appears next to `controllers`, not inside it.
3. Click `controllers`, then **Shift+click** `server.js`, the last item. **Ctrl+click** `.gitignore` and `README.md` to leave them out (**Cmd+click** on Mac).
4. Drag the selection onto `backend`. Confirm the move.

**Nothing to start:** the back end stays stopped today.

<div class="giu-refs__note"><code>.gitignore</code> stays at the top: its <code>node_modules/</code> and <code>*.env</code> lines cover every folder below it.</div>

::right::

```text
Before                After
ebd-bnb-lab-05-part2/ ebd-bnb-lab-05-part2/
├── controllers/      ├── backend/
├── models/           │   ├── controllers/
├── routes/           │   ├── models/
├── .env.example      │   ├── routes/
├── db.js             │   ├── .env.example
├── package.json      │   ├── db.js
├── server.js         │   ├── package.json
├── .gitignore        │   └── server.js
└── README.md         ├── .gitignore
                      └── README.md
```

---
layout: split
title: "Step 1 of 5: create the front end"
dense: true
---

1. Open a terminal: **Terminal → New Terminal**. It opens in `ebd-bnb-lab-05-part2`.
2. Run the command on the right.
3. **Which linter to use?** Press **Enter**: the first one is fine.
4. **Install with npm and start now?** Choose **Yes**.
5. It installs, then starts. **Ctrl+click** the `Local:` link.

`frontend` is the folder it creates; `--template react` picks React.

::right::

```bash
npm create vite@latest frontend -- --template react
```

When it is ready, the terminal shows:

```text
VITE v8.3.5  ready in 151 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Next time, start it yourself: `cd frontend`, then `npm run dev`.

---
layout: split
title: "Checkpoint 1: the front end runs"
dense: true
---

<Activity>

1. **Explorer**: `backend/` and `frontend/` side by side, with `.gitignore` and `README.md` next to them.
2. **Terminal**: `Local: http://localhost:5173/`.
3. **Browser**, at `localhost:5173`: Vite's starter page, on the right.

</Activity>

Something else? <Link to="fix-start">**It won't start**</Link>, in Troubleshooting at the end.

::right::

![The Vite and React starter page: a Get started heading and a Count is 0 button](/img/screenshots/vite-starter.png)

---
layout: split
title: "Step 2 of 5: a clean start"
dense: true
---

The starter page is Vite's, not ours.

1. Replace **everything** in `src/App.jsx` with the code on the right.
2. **Delete** `src/App.css`: nothing uses it now.
3. Replace everything in `src/index.css` with our styles: **next slide**.
4. In `index.html`, change `<title>frontend</title>` to `<title>ebd bn'b</title>`.
5. **Save.** The page shows just **ebd bn'b**, and you never pressed reload: that is Vite.

::right::

<FileTag name="src/App.jsx: replace everything" state="edit" />

<<< @/snippets/lab-06/steps/App-step2.jsx#file

---
layout: split
title: "Step 2 of 5: the styles"
dense: true
class: giu-css
---

<style>
/* Paste-in code: every line must fit, and nobody needs to read it closely.
   Slide styles leak deck-wide, so everything hangs off this slide's class. */
.giu-css .giu-split__grid pre.shiki { font-size: 0.56rem !important; line-height: 1.3 !important; }
</style>

<FileTag name="src/index.css: replace everything" state="edit" />

<<< @/snippets/lab-06/frontend/src/index.css#top

::right::

<<< @/snippets/lab-06/frontend/src/index.css#bottom

Paste both columns, left first. You don't need to read them: styling is not what this course is about.

---
layout: split
title: "Step 3 of 5: create Header"
dense: true
---

1. In the Explorer, click `src` (inside `frontend`). Click the **New Folder** icon, type `components`, press **Enter**.
2. Click `components`. Click the **New File** icon, type `Header.jsx` (capital **H**), press **Enter**.
3. Paste the code on the right. **Save.**

Nothing changes on the page yet: nobody uses `Header`. That is the next slide.

::right::

<FileTag name="src/components/Header.jsx" state="new" />

<<< @/snippets/lab-06/frontend/src/components/Header.jsx#file

---
layout: split
title: "Step 3 of 5: use Header"
dense: true
---

In `src/App.jsx`:

1. At the top, add the `import` line (highlighted).
2. Replace the `<h1>` with `<Header />` (highlighted).
3. **Save.** A red title and a tagline.

::right::

<FileTag name="src/App.jsx" state="edit" />

<<< @/snippets/lab-06/steps/App-step3.jsx#file {1,6}

---
layout: split
title: "Step 4 of 5: the data"
dense: true
---

1. Click `src`. Click the **New Folder** icon, type `data`, press **Enter**.
2. Click `data`. Click the **New File** icon, type `listings.js`, press **Enter**.
3. Paste the code on the right. **Save.**

Three fake listings, shaped like the API's (Part 1, *Lists*). Real `_id`s are longer; any unique text works here.

Nothing changes on the page yet.

::right::

<FileTag name="src/data/listings.js" state="new" />

<<< @/snippets/lab-06/frontend/src/data/listings.js#file

---
layout: split
title: "Step 4 of 5: create ListingCard"
dense: true
---

1. Click `components`. Click the **New File** icon, type `ListingCard.jsx` (capital **L** and **C**), press **Enter**.
2. Paste the code on the right. **Save.**

Nothing shows yet: nobody uses `ListingCard`. That is the next slide.

`{ listing }` in the first line is the **prop** from Part 1.

::right::

<FileTag name="src/components/ListingCard.jsx" state="new" />

<<< @/snippets/lab-06/steps/ListingCard-step4.jsx#file

---
layout: split
title: "Step 4 of 5: a card per listing"
wideRight: true
dense: true
---

In `src/App.jsx`:

1. At the top, **under** the `Header` import, add the two highlighted `import` lines.
2. Inside `App`, **above** `return`, add `cards`.
3. In the JSX, **under** `<Header />`, add:<br>`<div className="listings">{cards}</div>`
4. **Save.** Three cards.

This is the `.map` and `key` from Part 1, *Lists*.

::right::

<FileTag name="src/App.jsx (top)" state="edit" />

<<< @/snippets/lab-06/frontend/src/App.jsx#imports {2,3}

<FileTag name="src/App.jsx (inside App, above return)" state="edit" />

<<< @/snippets/lab-06/frontend/src/App.jsx#cards

---
layout: split
title: "Step 5 of 5: a Save button"
dense: true
---

In `src/components/ListingCard.jsx`, add the highlighted lines:

1. At the **top**: the `useState` import.
2. **First line inside** `ListingCard`: the `saved` state.
3. **Under** the price `<p>`: the button.
4. **Save.**

Type `onClick={() => ...}` exactly, **with the arrow**.

::right::

<FileTag name="src/components/ListingCard.jsx" state="edit" />

<<< @/snippets/lab-06/frontend/src/components/ListingCard.jsx#file {1,4,10-12}

---
layout: split
title: "Checkpoint 2: your first React page"
dense: true
---

<Activity>

1. The page shows the header and **three cards**, as on the right.
2. Click **Save** on one card: it turns into **♥ Saved**, and only that card changes.
3. In `listings.js`, change a price and save. The page updates by itself.

</Activity>

Something wrong? <Link to="fix-start">**It won't start**</Link> or <Link to="fix-page">**The page is blank or wrong**</Link>, in Troubleshooting at the end.

::right::

![The finished page: the ebd bn'b header and three listing cards, one of them saved](/img/screenshots/lab06-result.png)

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-06
side: right
qr: true
---

# The full solution

The whole project as it is at the end of today: `backend/` and `frontend/`, every file in its folder.

[**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-06.zip), unzip, and see its `README.md`: add your `.env` to `backend/`, then `npm install` and `npm run dev` in each folder.

Every lab so far has a branch in [ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb).

---
layout: section
icon: intro
sub: More pages with React Router, and a form to add a listing
---

# Next lab: pages and forms

---
layout: section
icon: tools
sub: Only if something went wrong. Find the message you see, then the fix.
---

# Troubleshooting

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-start
---

# It won't start

<style>
/* Two long tables: tighter rows. Slide styles leak, so this hangs off the class */
.giu-fix table td, .giu-fix table th { padding-top: 0.22rem !important; padding-bottom: 0.22rem !important; }
</style>

Vite shows these in the terminal where it runs, and in a red box on the page.

| You see | Cause | Fix |
|---|---|---|
| `npm error code ENOENT` ... `package.json` | Terminal in the wrong folder | `cd frontend` first |
| `Port 5173 is in use, trying another one...` | Vite is already running elsewhere | Not an error: open the link it prints, or stop the other one |
| `Failed to resolve import "./components/header.jsx"` | A wrong path, or wrong capitals: `header.jsx` is not `Header.jsx` | Match the file's name exactly |
| `does not provide an export named 'default'` | `export default ...` is missing | Last line of the component's file |
| `Adjacent JSX elements must be wrapped in an enclosing tag` | A component returns two elements side by side | Put **one** parent around them |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-page
---

# The page is blank or wrong

Press **F12**, open **Console**: React's messages appear there, and in Vite's terminal.

| You see | Cause | Fix |
|---|---|---|
| Blank page: `ReferenceError: Header is not defined` | Used but not imported | Import it at the top of the file |
| Blank page: `Too many re-renders` | `onClick={setSaved(!saved)}` | `onClick={() => setSaved(!saved)}` |
| A component shows nothing, no error | Lower-case name | `<Header />`, not `<header />` |
| `Invalid DOM property 'class'` | `class` in JSX | `className` |
| `Each child in a list should have a unique "key" prop.` | No `key` in the `.map` | `key={listing._id}` |

---
layout: refs
title: Useful references
---

## React

- [React: your first component](https://react.dev/learn/your-first-component)
- [React: passing props](https://react.dev/learn/passing-props-to-a-component)
- [React: rendering lists](https://react.dev/learn/rendering-lists)
- [React: state, a component's memory](https://react.dev/learn/state-a-components-memory)

## Vite

- [Vite: getting started](https://vite.dev/guide/)
- [Vite: why Vite](https://vite.dev/guide/why)

## The browser

- [MDN: what is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN: using the browser's developer tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
