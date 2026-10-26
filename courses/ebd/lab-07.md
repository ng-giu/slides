---
theme: ../../theme
title: BINF 503 - Lab 7 - Pages, State & Forms
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 7
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 7 — Pages, State & Forms

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
| 10 min | Recap, and pages without reloading |
| 20 min | Steps 1-2: React Router, pages and links |
| 25 min | Steps 3-5: state, add and delete |
| 10 min | Step 6: a page per listing |
| 5 min | Step 7: `useEffect` |
| — | Next lab: real data, from our API |

---
layout: default
icon: recap
class: giu-recap7
---

# Where we left ebd bn'b

<style>
.giu-recap7 p > img { max-height: 11rem; }
</style>

Last lab, the front end got its first page: a header and a card per listing, from fake data, each card with a Save button.

![The Lab 6 page: the ebd bn'b header and three listing cards](/img/screenshots/lab06-result.png)

Today it gets **more pages**: one to add a listing, one per listing, and a "page not found". All without the browser ever reloading.

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-06
side: right
qr: true
---

# Didn't finish Lab 6?

Start from ours:

1. [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-06.zip) and unzip it. It is your `ebd-bnb` from now on.
2. Put your `.env` from Atlas in `backend/`.
3. In a terminal: `cd frontend`, `npm install`, `npm run dev`.

Today is all `frontend/`. The back end can stay stopped until Lab 8.

---
layout: section
icon: intro
sub: One HTML page, many screens
---

# Pages without reloading

---
layout: default
icon: intro
diagram:
  width: 860
  height: 250
  groups:
    - { id: old, x: 0, y: 0, w: 860, h: 108, label: A normal link, icon: globe, tone: slate }
    - { id: spa, x: 0, y: 132, w: 860, h: 118, label: A React Router link, icon: zap, tone: green }
  nodes:
    - { id: o1, x: 20, y: 42, w: 180, h: 48, label: Click a link, sub: "<a href=\"/add\">", icon: play, tone: slate }
    - { id: o2, x: 240, y: 42, w: 180, h: 48, label: Ask the server, sub: "GET /add", icon: server, tone: slate }
    - { id: o3, x: 460, y: 42, w: 180, h: 48, label: A new page arrives, sub: "Download it all again", icon: file, tone: slate }
    - { id: o4, x: 680, y: 42, w: 160, h: 48, label: Start from zero, sub: "State is lost", icon: globe, tone: red }
    - { id: s1, x: 20, y: 178, w: 180, h: 52, label: Click a link, sub: "<Link to=\"/add\">", icon: play, tone: green }
    - { id: s2, x: 240, y: 178, w: 180, h: 52, label: The URL changes, sub: "No request, no reload", icon: globe, tone: green }
    - { id: s3, x: 460, y: 178, w: 180, h: 52, label: The Router picks a page, sub: "/add → AddListingPage", icon: code, tone: green }
    - { id: s4, x: 680, y: 178, w: 160, h: 52, label: React draws it, sub: "State is kept", icon: monitor, tone: green }
  edges:
    - { from: o1, to: o2 }
    - { from: o2, to: o3 }
    - { from: o3, to: o4 }
    - { from: s1, to: s2 }
    - { from: s2, to: s3 }
    - { from: s3, to: s4 }
---

# Pages without reloading

The browser loads `index.html` **once**. After that, React swaps what is on the screen when the URL changes. That is a **single-page app**.

<Diagram v-bind="$frontmatter.diagram" />

---
layout: default
icon: tools
---

# React Router

React only draws components. Which component goes with which URL is the job of a library: <Tool name="react" /> **Router**.

| Piece | What it does |
|---|---|
| `<BrowserRouter>` | Wraps the app, and watches the address bar |
| `<Routes>` and `<Route>` | The list of pages: "this path shows this component" |
| `<Link to="...">` | A link that changes the URL **without** reloading |
| `useNavigate()` | Go to a page from code, e.g. after a form is sent |
| `useParams()` | Read the parts of the URL, e.g. which listing |

---
layout: section
icon: code
sub: Seven steps, each one ends with an app that works
---

# Building the pages

---
layout: split
title: The plan
dense: true
wideRight: true
class: giu-tree
---

<style>
/* The whole project tree must fit. Slide styles leak, so this hangs off the class */
.giu-tree .giu-split__grid pre.shiki { font-size: 0.52rem !important; line-height: 1.15 !important; }
</style>

| Step | What |
|---|---|
| 1 | Install React Router |
| 2 | Pages and links |
| 3 | The listings become state |
| 4 | A form to add a listing |
| 5 | Delete a listing |
| 6 | A page per listing |
| 7 | `useEffect`: the tab title |

Each code slide says **which file**, **new** or **edit**, and where.

<div class="giu-refs__note">Not shown: <code>node_modules/</code> and Vite's config files.</div>

::right::

```text {16,17,20,21,22,23,24,25,26,27,28}
ebd-bnb/
├── backend/                      no change today
│   ├── controllers/
│   │   └── listingController.js
│   ├── models/
│   │   └── Listing.js
│   ├── routes/
│   │   └── listingRoutes.js
│   ├── .env
│   ├── db.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx         EDIT Step 2
│   │   │   └── ListingCard.jsx    EDIT Steps 5-6
│   │   ├── data/
│   │   │   └── listings.js
│   │   ├── pages/                 NEW  Step 2
│   │   │   ├── HomePage.jsx       NEW  Step 2, EDIT 5
│   │   │   ├── NotFoundPage.jsx   NEW  Step 2
│   │   │   ├── AddListingPage.jsx NEW  Step 4
│   │   │   └── ListingPage.jsx    NEW  Step 6
│   │   ├── App.jsx                EDIT Steps 2-7
│   │   ├── index.css              EDIT Step 2
│   │   └── main.jsx               EDIT Step 1
│   └── package.json               EDIT Step 1
└── .gitignore
```

---
layout: split
title: "Step 1 of 7: install React Router"
dense: true
class: giu-small
---


1. In the terminal running Vite, press **Ctrl+C** to stop it.
2. Make sure you are in `frontend/`, then install the router:

```bash
npm install react-router
```

3. Start Vite again: `npm run dev`.
4. In `src/main.jsx`, **import** `BrowserRouter`, and put it **around** `<App />`: the highlighted lines.
5. Save. The page looks exactly the same. That is right: the router is there, nothing uses it yet.

`main.jsx` is Vite's file, so it uses `'single quotes'`. Both kinds work.

::right::

<FileTag name="src/main.jsx" state="edit" />

<<< @/snippets/lab-07/frontend/src/main.jsx#file {3,9,11}

---
layout: split
title: "Step 2 of 7: the home page"
dense: true
class: giu-small
---

A **page** is a component like any other; we keep them in their own folder.

1. In the Explorer, click `src`, then **New Folder**: `pages`.
2. In `pages`, **New File**: `HomePage.jsx`. Paste the code on the right.

The cards code is the same as in `App.jsx`: it **moves** here. (The slide after next replaces `App.jsx` anyway.)

`HomePage` gets `listings` as a **prop**, from `App`.

`../components/`: from inside `pages/`, one folder up, then into `components/`.

::right::

<FileTag name="src/pages/HomePage.jsx" state="new" />

<<< @/snippets/lab-07/steps/HomePage-step2.jsx#file

---
layout: split
title: "Step 2 of 7: page not found"
dense: true
class: giu-small
---

In `pages`, **New File**: `NotFoundPage.jsx`. Paste the code on the right.

It is what we show for any address we have no page for, with a way back home.

::right::

<FileTag name="src/pages/NotFoundPage.jsx" state="new" />

<<< @/snippets/lab-07/frontend/src/pages/NotFoundPage.jsx#file
---
layout: split
title: "Step 2 of 7: the routes"
dense: true
wideRight: true
class: giu-small
---

Replace **everything** in `src/App.jsx` with the two blocks: the imports, then `App`.

<FileTag name="src/App.jsx (top)" state="edit" />

<<< @/snippets/lab-07/steps/App-step2.jsx#imports

`path="/"` shows `HomePage`. `path="*"` matches **any other** address, so it shows `NotFoundPage`: keep it **last**.

::right::

<FileTag name="src/App.jsx: then this" state="edit" />

<<< @/snippets/lab-07/steps/App-step2.jsx#routes {4,5,6,7}
---
layout: split
title: "Step 2 of 7: links"
dense: true
class: giu-small
---

1. In `src/components/Header.jsx`, add the highlighted lines: `import { Link }`, and the `<nav>`.
2. At the **end** of `src/index.css`, paste the styles from the next slide.
3. Save.

`<Link to="/add">` looks like any link, but clicking it only changes the URL. No reload.

::right::

<FileTag name="src/components/Header.jsx" state="edit" />

<<< @/snippets/lab-07/frontend/src/components/Header.jsx#file {1,8,9,10,11}

---
layout: split
title: "Step 2 of 7: the new styles"
dense: true
class: giu-css
---

<style>
/* Paste-in code: every line must fit. Slide styles leak, so this hangs off the class */
.giu-css .giu-split__grid pre.shiki { font-size: 0.56rem !important; line-height: 1.3 !important; }
</style>

<FileTag name="src/index.css: add at the end, left then right" state="edit" />

<<< @/snippets/lab-07/frontend/src/index.css#lab07

::right::

<<< @/snippets/lab-07/frontend/src/index.css#lab07b

---
layout: split
title: "Checkpoint 1: pages and links"
dense: true
---

<Activity>

1. The header now has two links: **All listings** and **Add a listing**.
2. Click **Add a listing**. The URL becomes `localhost:5173/add`, and you see **Page not found**: there is no `/add` page yet. That's Step 4.
3. Click **All listings**: the cards are back.
4. Type `localhost:5173/anything` in the address bar: **Page not found**.
5. Commit and push.

</Activity>

::right::

Something wrong? <Link to="fix-blank">**The page is blank**</Link>, in Troubleshooting at the end.

---
layout: default
icon: code
flow:
  width: 860
  height: 210
  groups:
    - { id: pages, x: 160, y: 96, w: 600, h: 114, label: The pages, icon: file, tone: green }
  nodes:
    - { id: app, x: 330, y: 0, w: 260, h: 56, label: App, sub: "listings, addListing, deleteListing", icon: code, tone: amber }
    - { id: home, x: 180, y: 142, w: 170, h: 50, label: HomePage, sub: "listings, onDelete", icon: file, tone: green }
    - { id: one, x: 375, y: 142, w: 170, h: 50, label: ListingPage, sub: "listings", icon: file, tone: green }
    - { id: add, x: 570, y: 142, w: 170, h: 50, label: AddListingPage, sub: "onAdd", icon: file, tone: green }
  edges:
    - { from: app, to: home, fromSide: b, toSide: t, fromAt: 0.15 }
    - { from: app, to: one, fromSide: b, toSide: t, fromAt: 0.5 }
    - { from: app, to: add, fromSide: b, toSide: t, fromAt: 0.85 }
---

# Where the listings live

Three pages need the listings, so they live **above** all three, in `App`, as **state**.

<Diagram v-bind="$frontmatter.flow" />

Each page gets the props under its name. Data goes **down** (`listings`); a change goes **up** by calling a function from `App` (`onAdd`, `onDelete`).

---
layout: split
title: "Step 3 of 7: the listings become state"
dense: true
wideRight: true
class: giu-small
---

In `src/App.jsx`:

1. At the top, **import** `useState`.
2. Rename the data import to `initialListings`: it is only where the list **starts**.
3. Inside `App`, **above** `return`, add the `useState` line.

Save. The page looks the same, but now `App` can **change** the list. Step 4 does.

::right::

<FileTag name="src/App.jsx (top)" state="edit" />

<<< @/snippets/lab-07/steps/App-step3.jsx#imports {1,6}

<FileTag name="src/App.jsx (inside App, above return)" state="edit" />

<<< @/snippets/lab-07/steps/App-step3.jsx#state

---
layout: default
icon: code
dense: true
---

# A form React controls

In the workbook, a form kept its own values, and you read them out on submit. In React, **state** holds them:

```jsx
const [title, setTitle] = useState("");

<input value={title} onChange={(e) => setTitle(e.target.value)} />
```

- `value={title}`: the input **shows** the state.
- `onChange`: every key you press **updates** the state, and React redraws the input.

That is a **controlled input**. On submit, the values are already in `title` and `price`, ready to use.

<div class="giu-refs__note"><code>event.preventDefault()</code> stops the browser's default for a form: reloading the page, which would wipe everything.</div>

---
layout: split
title: "Step 4 of 7: the form"
dense: true
class: giu-small
---

<FileTag name="src/pages/AddListingPage.jsx: left column, then right" state="new" />

<<< @/snippets/lab-07/frontend/src/pages/AddListingPage.jsx#top

::right::

<<< @/snippets/lab-07/frontend/src/pages/AddListingPage.jsx#bottom

---
layout: split
title: "Step 4 of 7: what the form does"
dense: true
---

On **submit**, `handleSubmit`:

1. Stops the reload: `event.preventDefault()`.
2. Builds a listing, in the same shape as the others: an `_id`, a `title`, a `pricePerNight`.
3. Gives it to `onAdd`, a function from `App`. **`App` adds it**: the form doesn't own the list.
4. Goes back home: `navigate("/")`.

::right::

Two details:

- `Number(price)`: an input's value is always **text**. `"75"` becomes `75`.
- `crypto.randomUUID()`: a random, unique id, built into the browser. In Lab 8, MongoDB makes the `_id` instead.

`required` on both inputs: the browser won't submit the form while one is empty.

---
layout: split
title: "Step 4 of 7: connect it in App"
dense: true
class: giu-small
---

In `src/App.jsx`:

1. At the top, **import** `AddListingPage`:

```jsx
import AddListingPage from "./pages/AddListingPage.jsx";
```

2. Under the `useState` line, add `addListing`: on the right.

`[...listings, listing]` is a **new** array: every listing so far, then the new one. React redraws when it gets a **new** value. Change the old array with `push`, and React may not notice.

::right::

<FileTag name="src/App.jsx (inside App)" state="edit" />

<<< @/snippets/lab-07/steps/App-step4.jsx#state {4,5,6,7}

---
layout: code
title: "Step 4 of 7: the /add route"
dense: true
class: giu-small
---

<FileTag name="src/App.jsx (in Routes, above the * route)" state="edit" />

<<< @/snippets/lab-07/steps/App-step4.jsx#routes {6}

Add the highlighted route, **above** `path="*"`. Save.
---
layout: split
title: "Checkpoint 2: add a listing"
dense: true
---

<Activity>

1. Click **Add a listing**: the form.
2. Try to send it empty: the browser stops you.
3. Fill in `Siwa Mud House`, `75`, and click **Add listing**.
4. You are back home, with **four** cards.
5. Commit and push. Next, a way to remove one.

</Activity>

Something wrong? <Link to="fix-blank">**The page is blank**</Link> or <Link to="fix-wrong">**It runs, but something is off**</Link>, in Troubleshooting at the end.

::right::

![The home page with four cards, the fourth one being the Siwa Mud House just added](/img/screenshots/lab07-added.png)

---
layout: split
title: "Step 5 of 7: delete, in App"
dense: true
class: giu-small
---

Deleting is the other way round from adding: a **new** array with every listing **but** that one.

In `src/App.jsx`, under `addListing`, add `deleteListing`: on the right.

`.filter(...)` keeps every listing whose `_id` is **not** the one to delete, in a new array. Like `[...listings, listing]` for adding, it never changes the old array.

::right::

<FileTag name="src/App.jsx (under addListing)" state="edit" />

<<< @/snippets/lab-07/steps/App-step5.jsx#state {9,10,11,12}

---
layout: code
title: "Step 5 of 7: give it to HomePage"
dense: true
class: giu-small
---

<FileTag name="src/App.jsx (in Routes)" state="edit" />

<<< @/snippets/lab-07/steps/App-step5.jsx#routes {5}

The `/` route now also gives `HomePage` the function, as `onDelete`.
---
layout: split
title: "Step 5 of 7: HomePage passes it on"
dense: true
class: giu-small
---

`App` has `deleteListing`, but the button will be in `ListingCard`, two levels down. So the function is passed down, a prop at each level.

In `src/pages/HomePage.jsx`: take `onDelete`, and give it to every card.

::right::

<FileTag name="src/pages/HomePage.jsx" state="edit" />

<<< @/snippets/lab-07/frontend/src/pages/HomePage.jsx#file {3,6,7,8,9,10}

---
layout: code
title: "Step 5 of 7: the Delete button"
dense: true
class: giu-small
---
<FileTag name="src/components/ListingCard.jsx: take onDelete, add the Delete button" state="edit" />

<<< @/snippets/lab-07/steps/ListingCard-step5.jsx#file {3,13}



---
layout: split
title: "Step 6 of 7: a page per listing"
dense: true
class: giu-small
---

One page that shows **any** listing: which one comes from the URL.

- In the route, `path="/listings/:id"`: the `:` makes `id` a **parameter**, like `:id` in Express in Lab 3.
- `useParams()` reads it: for `/listings/a2`, `id` is `"a2"`.
- `.find(...)` looks for the listing with that `_id`. No match? Say so.

In `pages`, **New File** `ListingPage.jsx`, and paste the code on the right.

::right::

<FileTag name="src/pages/ListingPage.jsx" state="new" />

<<< @/snippets/lab-07/frontend/src/pages/ListingPage.jsx#file {5,6}

---
layout: code
title: "Step 6 of 7: the route"
dense: true
class: giu-small
---

<FileTag name="src/App.jsx (in Routes, above /add)" state="edit" />

<<< @/snippets/lab-07/steps/App-step6.jsx#routes {6}

And at the top: `import ListingPage from "./pages/ListingPage.jsx";`

---
layout: code
title: "Step 6 of 7: link each card to its page"
dense: true
class: giu-small
---
<FileTag name="src/components/ListingCard.jsx: import Link, make the title a link" state="edit" />

<<< @/snippets/lab-07/frontend/src/components/ListingCard.jsx#file {2,10}



---
layout: split
title: "Step 7 of 7: useEffect"
dense: true
class: giu-small
---

Some code isn't about drawing the page: setting the tab's title, or, in Lab 8, **fetching from the API**. That goes in `useEffect`.

- The function runs **after** React draws the page.
- `[listings]`: run it again **whenever `listings` changes**, and only then.

In `src/App.jsx`: add `useEffect` to the import from `"react"`, and the highlighted block **under** `deleteListing`. Save, then add a listing and watch the tab.

::right::

<FileTag name="src/App.jsx (inside App)" state="edit" />

<<< @/snippets/lab-07/frontend/src/App.jsx#state {14,15,16,17}
---
layout: split
title: "Checkpoint 3: the finished app"
dense: true
---

<Activity>

1. The tab says **ebd bn'b (3 listings)**. Add one: **(4 listings)**. Delete one: **(3 listings)**.
2. Click a card's title: its own page, at `/listings/` and its id.
3. Change the id in the address bar to `zzz`: **No listing with this id.**
4. Commit and push.
5. Now **reload** the page. The listing you added is **gone**.

</Activity>

::right::

Why? State lives in the browser's memory, like the array in Lab 4 lived in the server's. Reload, and it starts again from `initialListings`.

The fix is the same as in Lab 5: keep the data in **MongoDB**. Next lab, React asks **our API** for the listings, and adding one sends it there.

---
layout: default
icon: code
---

# What you used today

| | What it is | Today |
|---|---|---|
| **Route** | A path, and the page it shows | `/`, `/add`, `/listings/:id`, `*` |
| **Link** | Change the URL without reloading | The header, each card's title |
| **State in App** | Data several pages need | `listings`; `addListing` and `deleteListing` change it |
| **Controlled input** | An input that shows and updates state | The title and the price |
| **`useEffect`** | Code that runs after drawing, when something changes | The tab title; in Lab 8, the API |

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-07
side: right
qr: true
---

# The full solution

The whole project at the end of today: `backend/` and `frontend/`, every file in its folder.

[**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-07.zip), unzip, and see its `README.md`.

Every lab so far has a branch in [ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb).

---
layout: section
icon: intro
sub: The front end and the back end, talking. Bring your .env.
---

# Next lab: real data, from our API

---
layout: section
icon: tools
sub: Only if something went wrong. Find what you see, then the fix.
---

# Troubleshooting

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-blank
---

# The page is blank


Press **F12**, open **Console**: the message is there, and in Vite's terminal.

| You see | Cause | Fix |
|---|---|---|
| `Failed to resolve import "react-router"` | Not installed, or installed in the wrong folder | `npm install react-router` in `frontend/` |
| `Failed to resolve import "react-router-dom"` | The old name | Import from `"react-router"` |
| `Cannot destructure property 'basename' of ... as it is null` | `<BrowserRouter>` is missing | Step 1: wrap `<App />` in `main.jsx` |
| `ReferenceError: useEffect is not defined` | Not imported | `import { useEffect, useState } from "react";` |
| Only the header, and `Functions are not valid as a React child` | `element={NotFoundPage}` | `element={<NotFoundPage />}` |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-wrong
---

# It runs, but something is off

| You see | Cause | Fix |
|---|---|---|
| The page reloads on submit, and the URL ends in `/?` | `event.preventDefault()` is missing | First line of `handleSubmit` |
| You can't type in an input. Warning: `You provided a 'value' prop ... without an 'onChange' handler` | `onChange` is missing | Add `onChange`, as in Step 4 |
| A header link reloads the page, and added listings vanish | `<a href>` instead of `<Link to>` | `<Link to="/add">` |
| The new card shows, but the tab still says **3 listings** | `listings.push(...)`: the same array, so `useEffect` sees no change | A new array: `[...listings, listing]` |

---
layout: default
icon: tools
dense: true
class: giu-fix
---

# Delete and the listing pages

| You see | Cause | Fix |
|---|---|---|
| **Every** card is gone as soon as the page loads. Error: `Cannot update a component ('App') while rendering a different component` | No arrow: `onClick={onDelete(...)}` | `onClick={() => onDelete(listing._id)}` |
| Delete does nothing. Error: `onDelete is not a function` | `HomePage` doesn't pass `onDelete` on | `onDelete={onDelete}` on `<ListingCard>` |
| Every listing's page says **Page not found** | The path is `/listings/id`, without the `:` | `path="/listings/:id"` |
---
layout: refs
title: Useful references
---

## React Router

- [React Router: declarative mode, the installation](https://reactrouter.com/start/declarative/installation)
- [React Router: routing](https://reactrouter.com/start/declarative/routing)
- [React Router: navigating](https://reactrouter.com/start/declarative/navigating)

## React

- [React: sharing state between components](https://react.dev/learn/sharing-state-between-components)
- [React: updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
- [React: reacting to input with state](https://react.dev/learn/reacting-to-input-with-state)
- [React: synchronizing with effects](https://react.dev/learn/synchronizing-with-effects)

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
