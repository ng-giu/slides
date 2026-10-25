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
| 10 min | The front end: what changes |
| 10 min | Step 1: two folders, two servers |
| 5 min | Step 2: a clean start |
| 10 min | Step 3: your first component |
| 15 min | Step 4: props and lists |
| 10 min | Step 5: state |
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
layout: media
image: https://gist.github.com/nourgaser/d0b53d3f38f7839d3ba188219f2e49a8
side: right
qr: true
---

# Back end not split yet?

Today's code is all front end, but Step 1 moves your back end into its own folder, and from now on we build on the **split** version from Lab 5, Part 2.

Not there yet? Take it from the [Lab 5, Part 2 solution gist](https://gist.github.com/nourgaser/d0b53d3f38f7839d3ba188219f2e49a8), put each file in its folder (the slide in Part 2 says where), add your own `.env`, and run `npm install`.

---
layout: section
icon: intro
sub: What changes when your code runs in someone else's browser
---

# The front end

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
    - { id: se, x: 678, y: 44, w: 164, h: 50, label: Serve or write, sub: "dev: memory · build: dist/", icon: zap, tone: amber }
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

# From your code to the browser

<Diagram v-bind="$frontmatter.diagram" />

<div class="giu-refs__note"><code>npm run dev</code> while you work: Vite serves from memory and reloads on every save. <code>npm run build</code> to publish: it writes the files to <code>dist/</code>.</div>

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
- **Two terminals**, one for each, both running at the same time.
- Today the front end works alone, with fake data. In Lab 8 it talks to the back end.

---
layout: section
icon: code
sub: Five steps, each one ends with a working page
---

# Building the front end

---
layout: split
title: The plan
dense: true
---

| Step | What |
|---|---|
| 1 | Move the API into `backend/`, create `frontend/`, run both |
| 2 | A clean start: our page and our styles |
| 3 | Your first component: `Header` |
| 4 | Props and lists: a `ListingCard` per listing |
| 5 | State: a Save button on each card |

Each code slide says **which file**, whether it is **new** or an **edit**, and where in the file.

::right::

```text {2,9,14-18}
ebd-bnb/
├── backend/            MOVED  Step 1
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   ├── package.json
│   └── server.js
├── frontend/           NEW    Step 1
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── components/
│       │   ├── Header.jsx       Step 3
│       │   └── ListingCard.jsx  Step 4
│       ├── data/listings.js     Step 4
│       ├── App.jsx              Steps 2-4
│       ├── index.css            Step 2
│       └── main.jsx
└── .gitignore
```

---
layout: split
title: "Step 1 of 5: move the API into backend/"
dense: true
---

1. Stop your server: **Ctrl+C** in its terminal.
2. In the **Explorer**, at the top level of `ebd-bnb`, click **New Folder**. Name it `backend`.
3. Select everything else **except `.gitignore`**: click the first item, **Shift+click** the last. That includes `.env`, `node_modules`, `package.json` and every folder.
4. Drag the selection onto `backend`. Confirm the move.
5. In the terminal: `cd backend`, then `npm run dev`. You want `Connected to MongoDB`, as before.

<div class="giu-refs__note"><code>.gitignore</code> stays at the top: its <code>node_modules/</code> and <code>*.env</code> lines cover every folder below it.</div>

::right::

```text
Before                After
ebd-bnb/              ebd-bnb/
├── controllers/      ├── backend/
├── models/           │   ├── controllers/
├── routes/           │   ├── models/
├── .env              │   ├── routes/
├── db.js             │   ├── .env
├── package.json      │   ├── db.js
├── server.js         │   ├── package.json
└── .gitignore        │   └── server.js
                      └── .gitignore
```

---
layout: split
title: "Step 1 of 5: create the front end"
dense: true
---

1. Open a **second terminal**: the **+** at the top right of the terminal panel. Leave the first one running the API.
2. The new terminal opens at the top of `ebd-bnb`. Run the command on the right.
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
title: "Checkpoint 1: two servers"
dense: true
---

<Activity>

1. **Terminal 1**, in `backend/`: `Connected to MongoDB` and `Server running on http://localhost:3000`.
2. **Terminal 2**, in `frontend/`: `Local: http://localhost:5173/`.
3. **Browser**, at `localhost:5173`: Vite's starter page, on the right.
4. Commit and push. Run `git status` first: no `node_modules` anywhere in the list.

</Activity>

Something else? <Link to="fix-start">**It won't start**</Link>, in Troubleshooting at the end.

::right::

![The Vite and React starter page: a Get started heading and a Count is 0 button](/img/screenshots/vite-starter.png)

---
layout: default
icon: code
tour:
  - { title: index.html, code: '<div id="root"></div>', sub: "The one HTML page. It starts empty" }
  - { title: src/main.jsx, code: "createRoot(...).render(<App />)", sub: "Puts App into that empty div" }
  - { title: src/App.jsx, code: "function App() { ... }", sub: "Your page. You write this" }
---

# What is in frontend/

The browser loads **one** page, and React fills it in:

<Flow :steps="$frontmatter.tour" />

Everything happens in `src/`. The rest, `package.json`, `vite.config.js`, `public/` and the linter's settings, you leave alone. `main.jsx` too: it already does its one job.

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
title: "Step 3 of 5: your first component"
dense: true
---

A **component** is a function that returns JSX. Its name starts with a capital letter, and you use it like a tag: `<Header />`.

1. In the Explorer, click `src`, then **New Folder**: `components`.
2. Click `components`, then **New File**: `Header.jsx`, capital **H**.
3. Paste the code on the right. Save.

Nothing changes on the page yet: the component exists, but nobody uses it. That is the next slide.

::right::

<FileTag name="src/components/Header.jsx" state="new" />

<<< @/snippets/lab-06/frontend/src/components/Header.jsx#file

---
layout: split
title: "Step 3 of 5: use it"
dense: true
---

In `App.jsx`:

1. At the top, **import** `Header`.
2. Replace the `<h1>` with `<Header />`.
3. Save. A red title and a tagline.

`export default` in `Header.jsx` shares the component; `import` in `App.jsx` takes it in. The same as Lab 5, Part 2.

::right::

<FileTag name="src/App.jsx" state="edit" />

<<< @/snippets/lab-06/steps/App-step3.jsx#file {1,6}

---
layout: split
title: "Step 4 of 5: the data"
dense: true
---

1. Click `src`, then **New Folder**: `data`.
2. Inside it, **New File**: `listings.js`. Paste the code on the right.

Three **fake** listings, shaped exactly like what our API returns: an `_id`, a `title`, a `pricePerNight`.

In Lab 8 they come from the back end instead. Because the shape is the same, the components won't change.

::right::

<FileTag name="src/data/listings.js" state="new" />

<<< @/snippets/lab-06/frontend/src/data/listings.js#file

---
layout: split
title: "Step 4 of 5: a card, with props"
dense: true
---

**Props** are a component's inputs. The same card shows different listings, depending on what it is given:

```jsx
<ListingCard listing={...} />
```

passes a `listing` in, and the card takes it out of its props:

```jsx
function ListingCard({ listing }) {
```

1. In `components`, **New File**: `ListingCard.jsx`. Paste the code on the right.
2. Nothing shows yet: no one uses it. That is the next slide.

::right::

<FileTag name="src/components/ListingCard.jsx" state="new" />

<<< @/snippets/lab-06/steps/ListingCard-step4.jsx#file

---
layout: split
title: "Step 4 of 5: a card per listing"
wideRight: true
dense: true
---

In `App.jsx`:

1. At the top, **import** `ListingCard` and `listings`.
2. Inside `App`, **above** `return`, add `cards`.
3. In the JSX, **under** `<Header />`, add:<br>`<div className="listings">{cards}</div>`
4. Save. Three cards.

`listings.map(...)` turns each listing into a `<ListingCard>`: the same `.map` as Lab 2, returning JSX.

**`key`**: React needs a unique key on each item of a list, to tell them apart. The `_id` is exactly that.

::right::

<FileTag name="src/App.jsx (top)" state="edit" />

<<< @/snippets/lab-06/frontend/src/App.jsx#imports {2,3}

<FileTag name="src/App.jsx (inside App, above return)" state="edit" />

<<< @/snippets/lab-06/frontend/src/App.jsx#cards

---
layout: split
title: "Step 5 of 5: state"
dense: true
---

**State** is data a component remembers, and that can change. Here: has this card been saved?

- `useState(false)` gives two things: the value, `saved`, and a function to change it, `setSaved`.
- Call `setSaved(...)` and React redraws **this card**, and only this one. Every card has its own.

In `ListingCard.jsx`, add the highlighted lines. Save, and click **Save** on a card.

<div class="giu-refs__note"><code>onClick={() => setSaved(!saved)}</code>, with the arrow: it runs on a click. Without the arrow it runs on every redraw, forever.</div>

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
2. Click **Save** on one card: only that card changes.
3. In `listings.js`, change a price and save. The page updates by itself.
4. Commit and push.

</Activity>

Something wrong? <Link to="fix-start">**It won't start**</Link> or <Link to="fix-page">**The page is blank or wrong**</Link>, in Troubleshooting at the end.

::right::

![The finished page: the ebd bn'b header and three listing cards, one of them saved](/img/screenshots/lab06-result.png)

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
layout: media
image: https://gist.github.com/nourgaser/8427b647ae311ef624597a516da43874
side: right
qr: true
---

# The full solution

Today's front end: `App.jsx`, `Header.jsx`, `ListingCard.jsx`, `listings.js` and `index.css`.

[The Lab 6 solution on GitHub Gist](https://gist.github.com/nourgaser/8427b647ae311ef624597a516da43874)

A gist has no folders. `Header.jsx` and `ListingCard.jsx` go in `src/components/`, `listings.js` in `src/data/`, the rest in `src/`.

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
routeAlias: fix-start
---

# It won't start

| You see | Cause | Fix |
|---|---|---|
| `npm error code ENOENT` ... `package.json` | The terminal is in the wrong folder | `cd backend` or `cd frontend` first: each has its own `package.json` |
| `Port 5173 is in use, trying another one...` | Vite is already running elsewhere | Not an error: open the link it prints, or stop the other one |
| `Failed to resolve import "./components/header.jsx"` | A wrong path, or wrong capitals: `header.jsx` is not `Header.jsx` | Match the file's name exactly |
| `does not provide an export named 'default'` | `export default ...` is missing | Last line of the component's file |
| `Adjacent JSX elements must be wrapped in an enclosing tag` | A component returns two elements side by side | Put **one** parent around them |

<div class="giu-refs__note">Vite shows these errors in the terminal where it runs, and in a red box on the page.</div>

---
layout: default
icon: tools
dense: true
routeAlias: fix-page
---

# The page is blank or wrong

| You see | Cause | Fix |
|---|---|---|
| A blank page, and `ReferenceError: Header is not defined` | The component is used but not imported | `import Header from "./components/Header.jsx";` |
| A blank page, and `Too many re-renders` | `onClick={setSaved(!saved)}`, without the arrow | `onClick={() => setSaved(!saved)}` |
| Your component shows nothing, no error | Its name starts with a lower-case letter | `<Header />`, not `<header />` |
| Warning: `Invalid DOM property 'class'. Did you mean 'className'?` | `class` in JSX | `className` |
| Warning: `Each child in a list should have a unique "key" prop.` | `key` is missing in the `.map` | `key={listing._id}` |

<div class="giu-refs__note">Press <strong>F12</strong> and open the <strong>Console</strong> tab: React's errors and warnings appear there, and in Vite's terminal.</div>

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

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
