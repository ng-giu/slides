---
theme: ../../theme
title: BINF 503 - Lab 8 - Connecting React to the API
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 8
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 8 — Connecting React to the API

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
| 5 min | Recap: two halves that don't talk yet |
| 10 min | **Part 1A — The browser and the API:** CORS, one file for every request |
| 10 min | **Part 1B — Data from the API:** loading when the app starts, saving with `await` |
| 40 min | **Part 2 — Lab Manual:** the starter project, then 5 steps |
| — | Next lab: log in |

---
layout: default
icon: recap
diagram:
  width: 860
  height: 196
  groups:
    - { id: fe, x: 0, y: 0, w: 260, h: 196, label: frontend/, icon: monitor, tone: navy }
    - { id: be, x: 300, y: 0, w: 380, h: 196, label: backend/, icon: server, tone: amber }
  nodes:
    - { id: react, x: 20, y: 70, w: 220, h: 56, label: React, sub: "localhost:5173 · fake listings", icon: monitor, tone: navy }
    - { id: api, x: 320, y: 70, w: 160, h: 56, label: Express API, sub: "localhost:3000", icon: server, tone: amber }
    - { id: model, x: 500, y: 70, w: 160, h: 56, label: Mongoose, sub: "models/Listing.js", icon: code, tone: amber }
    - { id: db, x: 720, y: 70, w: 140, h: 56, label: MongoDB Atlas, sub: "The real listings", icon: database, tone: green }
  edges:
    - { from: api, to: model }
    - { from: model, to: db }
---

# Two halves that don't talk yet

<Diagram v-bind="$frontmatter.diagram" />

The **back end** (Labs 3 to 5) keeps listings in MongoDB. The **front end** (Labs 6 and 7) shows fake ones, and forgets every change on reload. Today we draw the missing arrow: React asks the API.

---
layout: section
icon: intro
sub: "Part 1 — Concepts: CORS, and one file for every request"
---

# 01 — The browser and the API

---
layout: default
icon: intro
diagram:
  width: 860
  height: 128
  nodes:
    - { id: page, x: 0, y: 36, w: 190, h: 56, label: The page, sub: "from localhost:5173", icon: monitor, tone: navy }
    - { id: api, x: 230, y: 36, w: 190, h: 56, label: The API, sub: "on localhost:3000", icon: server, tone: amber }
    - { id: check, x: 460, y: 36, w: 190, h: 56, label: The browser checks, sub: "Does the API allow 5173?", icon: lock, tone: red }
    - { id: ok, x: 690, y: 36, w: 170, h: 56, label: The page gets it, sub: "Only if allowed", icon: play, tone: green }
  edges:
    - { from: page, to: api }
    - { from: api, to: check }
    - { from: check, to: ok }
---

# CORS

<Diagram v-bind="$frontmatter.diagram" />

A different **port** is a different **origin**, as far as the browser is concerned. A page may only read answers from another origin if that server says so, with a header: `Access-Control-Allow-Origin`.

That is **CORS**: it stops a random website from reading your bank's API through your browser. Thunder Client never hit it: it isn't a browser page. Without the header, the API still answers, but the browser **hides the answer** from the page. The `cors` package adds the header to every answer: `app.use(cors())`.

---
layout: split
title: One file for every request
dense: true
wideRight: true
---

Pages shouldn't call `fetch` themselves: they'd all repeat the address and the error checks. One file, `src/api/listings.js`, does it, the same idea as the **model** in the back end.

- `API`: the address, written **once**.
- `res.ok` is false for a `404` or a `500`: we **throw**, so a mistake doesn't pass as data.
- `res.json()` turns the answer into JavaScript.

::right::

Sending data is the same `fetch`, with more options. They are what you set by hand in Thunder Client in Lab 4:

| In Thunder Client | In `fetch` |
|---|---|
| The method | `method: "POST"` |
| Body → JSON | `headers: { "Content-Type": "application/json" }` |
| The body you type | `body: JSON.stringify(listing)` |

---
layout: section
icon: code
sub: "Part 1 — Concepts: loading when the app starts, saving with await"
---

# 02 — Data from the API

---
layout: default
icon: code
dense: true
---

# Loading data when the app starts

React draws first; the data arrives later. So:

1. `App` starts with **no** listings, and `loading` set to `true`.
2. After the first draw, a **`useEffect`** asks the API.
3. The answer arrives: `setListings(data)`, `setLoading(false)`. React draws again, with the cards.

`useEffect(() => { ... }, [])`: the **empty** `[]` means "run once, when the app starts". Without it, the effect runs after **every** draw, each fetch triggers a draw, and the API gets hundreds of requests a second.

While `loading`, `App` returns only "Loading...". If the API can't be reached, it returns the error. These two `if`s go **below** every `useState` and `useEffect`: React needs the same hooks on every draw.

---
layout: split
title: Saving, then showing
dense: true
wideRight: true
---

**Add**: send the listing to the API first, and put the one that comes **back** into state. It has the `_id` **MongoDB** made: the delete and the listing page need that id. So the form no longer makes an `_id`.

`await`: wait for the API's answer before using it. Forget it, and `saved` is a Promise, not a listing.

**The form** waits too: `await onAdd(...)`, then go home. If saving fails, `try` / `catch` says why, and the form stays.

**Delete**: delete in MongoDB first, then from the page.

::right::

```jsx
async function addListing(listing) {
  const saved = await createListing(listing);
  setListings([...listings, saved]);
}

async function deleteListing(id) {
  await removeListing(id);
  setListings(
    listings.filter((l) => l._id !== id)
  );
}
```

---
layout: default
icon: code
diagram:
  width: 860
  height: 150
  nodes:
    - { id: click, x: 0, y: 40, w: 150, h: 56, label: A click, sub: "Add listing", icon: play, tone: navy }
    - { id: fn, x: 175, y: 40, w: 150, h: 56, label: api/listings.js, sub: "createListing()", icon: code, tone: navy }
    - { id: route, x: 350, y: 40, w: 150, h: 56, label: Route, sub: "POST /api/listings", icon: server, tone: amber }
    - { id: ctrl, x: 525, y: 40, w: 150, h: 56, label: Controller + model, sub: "addListing()", icon: code, tone: amber }
    - { id: db, x: 710, y: 40, w: 150, h: 56, label: MongoDB, sub: "Saves, makes the _id", icon: database, tone: green }
  edges:
    - { from: click, to: fn }
    - { from: fn, to: route }
    - { from: route, to: ctrl }
    - { from: ctrl, to: db }
---

# The whole trip

<Diagram v-bind="$frontmatter.diagram" />

Then all the way back: MongoDB to the model, the controller sends `201` and the listing, `fetch` resolves, `setListings` adds it, React draws the card.

This is the trip you will explain for **your** use case at the project presentation: from the click to the database, and back.

---
layout: section
icon: activity
sub: "Part 2 — Practice: five steps, each one ends with an app that works"
---

# 03 — Lab Manual: React talks to the API

---
layout: split
title: The plan
dense: true
wideRight: true
class: giu-tree
---

<style>
/* The whole project tree must fit. Slide styles leak, so this hangs off the class */
.giu-tree .giu-split__grid pre.shiki { font-size: 0.5rem !important; line-height: 1.12 !important; }
</style>

| Step | What |
|---|---|
| Start | The starter project, and your `.env` |
| 1 | The back end lets React in |
| 2 | One file for every request |
| 3 | Load the listings from the API |
| 4 | Add, for real |
| 5 | Delete, for real |

Each code slide says **which file**, **new** or **edit**, and where.

::right::

```text {9,12,13,16,17,21,23,25,27,28}
ebd-bnb-lab-07/
├── backend/
│   ├── controllers/
│   │   └── listingController.js
│   ├── models/
│   │   └── Listing.js
│   ├── routes/
│   │   └── listingRoutes.js
│   ├── .env                     COPY Start
│   ├── .env.example
│   ├── db.js
│   ├── package.json             EDIT Step 1
│   └── server.js                EDIT Step 1
├── frontend/
│   ├── src/
│   │   ├── api/                 NEW  Step 2
│   │   │   └── listings.js      NEW  Step 2
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── ListingCard.jsx
│   │   ├── data/                GONE Step 3
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     EDIT Step 3
│   │   │   ├── NotFoundPage.jsx
│   │   │   ├── AddListingPage.jsx EDIT Step 4
│   │   │   └── ListingPage.jsx
│   │   ├── App.jsx              EDIT Steps 3-5
│   │   ├── index.css            EDIT Step 3
│   │   └── main.jsx
│   └── package.json
├── .gitignore
└── README.md
```

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-07
side: right
qr: true
dense: true
---

# Getting started

Everyone starts from ebd bn'b at the end of Lab 7.

1. [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-07.zip) and unzip it. You get a folder named `ebd-bnb-lab-07`.
2. In <Tool name="vscode" />: **File → Open Folder...**, and open `ebd-bnb-lab-07`. The Explorer shows `backend` and `frontend`. Only one folder, `ebd-bnb-lab-07` again? Open that inner one instead.
3. Copy your `.env` from Lab 5 into `backend`, next to `server.js`.
4. **Terminal → New Terminal**: `cd backend`, `npm install`, `npm run dev`. Wait for `Connected to MongoDB` (or see <Link to="fix-db">**The back end won't connect**</Link>).
5. **Terminal → New Terminal** again: `cd frontend`, `npm install`, `npm run dev`. Open the `Local:` link.

**Today both halves run**: keep both terminals open.

---
layout: split
title: "Step 1 of 5: the CORS error"
dense: true
---

In the app's tab (`localhost:5173`), press **F12**, open **Console**, paste this and press **Enter**:

```js
fetch("http://localhost:3000/api/listings")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

It should print your listings from MongoDB.

::right::

It doesn't. The Console says, in red:

```text
Access to fetch at 'http://localhost:3000/api/listings'
from origin 'http://localhost:5173' has been blocked by
CORS policy: No 'Access-Control-Allow-Origin' header is
present on the requested resource.
```

Terminal 1 still logs `GET /api/listings`: the API answered, and the browser hid the answer. That is CORS, from Part 1.

---
layout: split
title: "Step 1 of 5: let React in"
dense: true
wideRight: true
class: giu-small
---

In **terminal 1**, stop the API (**Ctrl+C**), then, still in `backend`:

```bash
npm install cors
```

Then in `backend/server.js`:

1. At the top: `import cors from "cors";`
2. In MIDDLEWARE, add `app.use(cors())`.
3. In ROUTES, add `/api/health`. Every course project needs this route: our automated check calls it.
4. Save, and `npm run dev` again.

::right::

<FileTag name="backend/server.js (MIDDLEWARE)" state="edit" />

<<< @/snippets/lab-08/backend/server.js#middleware {6,7}

<FileTag name="backend/server.js (ROUTES)" state="edit" />

<<< @/snippets/lab-08/backend/server.js#routes {4,5,6,7}

---
layout: split
title: "Checkpoint 1: the browser may read it"
dense: true
---

<Activity>

1. Paste the same `fetch` in the Console again. This time it prints an **array**: your listings, from MongoDB.
2. Open `localhost:3000/api/health` in a tab: `{"status":"ok"}`.

</Activity>

::right::

No listings in your database? Then it prints `[]`. That's fine: you'll add some in Step 4.

Still blocked? <Link to="fix-reach">**Can't reach the API**</Link>, in Troubleshooting at the end.

---
layout: split
title: "Step 2 of 5: one file for every request"
dense: true
class: giu-small
---

1. In `frontend/src`, create a folder `api`, and in it `listings.js`.
2. Paste the code on the right.
3. Paste the next slide's code under it. Save.

This is the file from Part 1: every request the front end sends goes through it.

::right::

<FileTag name="frontend/src/api/listings.js" state="new" />

<<< @/snippets/lab-08/frontend/src/api/listings.js#read

---
layout: code
title: "Step 2 of 5: sending data"
dense: true
class: giu-small
---

<FileTag name="frontend/src/api/listings.js (under the first block)" state="new" />

<<< @/snippets/lab-08/frontend/src/api/listings.js#write

Save. Nothing uses these functions yet, so the page doesn't change.

---
layout: split
title: "Step 3 of 5: load from the API"
dense: true
class: giu-small
---

In `frontend/src/App.jsx`:

1. **Delete** the `initialListings` import. **Import** `getListings` from the api file instead: highlighted below.
2. **Replace** the `useState(initialListings)` line with the three `useState`s and the new `useEffect`, on the right.

<FileTag name="frontend/src/App.jsx (top)" state="edit" />

<<< @/snippets/lab-08/steps/App-step3.jsx#imports {8}

::right::

<FileTag name="frontend/src/App.jsx (inside App, at the top)" state="edit" />

<<< @/snippets/lab-08/steps/App-step3.jsx#load {1,2,3,4,6,8,9,10,11,12}

---
layout: split
title: "Step 3 of 5: wait for the answer"
dense: true
class: giu-small
---

1. Still in `App.jsx`, **just above** `return (`, add the two `if`s on the right.
2. **Delete** the `src/data` folder: nothing uses the fake listings now.
3. At the end of `src/index.css`, add the `.error` style below. Save both files.

<<< @/snippets/lab-08/frontend/src/index.css#lab08

::right::

<FileTag name="frontend/src/App.jsx (above return)" state="edit" />

<<< @/snippets/lab-08/steps/App-step3.jsx#wait

---
layout: split
title: "Step 3 of 5: an empty database"
dense: true
class: giu-small
---

In `src/pages/HomePage.jsx`, add the highlighted `if`: with no listings, the page says so instead of looking broken.

Save. The page now shows **your** listings, from MongoDB.

::right::

<FileTag name="frontend/src/pages/HomePage.jsx" state="edit" />

<<< @/snippets/lab-08/frontend/src/pages/HomePage.jsx#file {4,5,6}

---
layout: split
title: "Checkpoint 2: real listings"
dense: true
---

<Activity>

1. The cards are the listings in **MongoDB**: the ones you made in Lab 5, or "No listings yet".
2. Stop the API (**Ctrl+C** in terminal 1) and reload the page: **Can't reach the API**. Start it again, reload: back.
3. Add a listing with the form. It shows... then **reload**: gone. Adding still only changes React's state. That's Step 4.

</Activity>

::right::

![Atlas Data Explorer showing the listings collection: these are the listings the page now shows](/img/screenshots/atlas-data.png)

Something wrong? <Link to="fix-reach">**Can't reach the API**</Link> or <Link to="fix-break">**The page breaks**</Link>.

---
layout: split
title: "Step 4 of 5: add, for real"
dense: true
class: giu-small
---

In `frontend/src/App.jsx`:

1. Add `createListing` to the import from the api file:
   `import { getListings, createListing } from "./api/listings.js";`
2. Replace `addListing` with the `async` one on the right: it saves to the API, and stores the listing that comes back.
3. Save.

::right::

<FileTag name="frontend/src/App.jsx (addListing)" state="edit" />

<<< @/snippets/lab-08/steps/App-step4.jsx#change {1,2,3,4}

---
layout: split
title: "Step 4 of 5: the form waits"
dense: true
wideRight: true
class: giu-small
---

In `frontend/src/pages/AddListingPage.jsx`, replace `handleSubmit` with the one on the right. Save.

The highlighted lines: no `_id` any more, `await onAdd(...)`, and the `try` / `catch`. The rest of the file stays the same.

::right::

<FileTag name="frontend/src/pages/AddListingPage.jsx (handleSubmit)" state="edit" />

<<< @/snippets/lab-08/frontend/src/pages/AddListingPage.jsx#top {10,13,14,15,16,17,18,19}

---
layout: split
title: "Step 5 of 5: delete, for real"
dense: true
wideRight: true
class: giu-small
---

In `frontend/src/App.jsx`:

1. Add `removeListing` to the import from the api file, after `createListing`.
2. Replace `deleteListing` with the `async` one on the right. Save.

The card's button needs no change: it still calls `onDelete(listing._id)`, and that `_id` is now MongoDB's.

::right::

<FileTag name="frontend/src/App.jsx (deleteListing)" state="edit" />

<<< @/snippets/lab-08/frontend/src/App.jsx#change {7,8}

---
layout: split
title: "Checkpoint 3: it all stays"
dense: true
---

<Activity>

1. Add a listing. **Reload**: still there.
2. Delete one. **Reload**: still gone.
3. Open one listing's page, and reload **there**: it loads, with an `_id` from MongoDB in the address.
4. In Atlas, **Data Explorer** → `listings`, refresh: the same listings as the page.

</Activity>

Something wrong? <Link to="fix-stick">**Changes don't stick**</Link>, in Troubleshooting at the end.

::right::

Terminal 1, while you click:

```text
GET /api/listings
POST /api/listings
DELETE /api/listings/6aded1f39f33c3673b95976f
```

The API didn't change today, apart from `cors` and `/api/health`.

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-08
side: right
qr: true
---

# The full solution

The whole project at the end of today: `backend/` and `frontend/`, every file in its folder.

[**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-08.zip), unzip, and see its `README.md`.

Every lab so far has a branch in [ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb).

---
layout: section
icon: intro
sub: Registration, passwords, and pages only a logged-in user can see
---

# Next lab: log in

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
routeAlias: fix-db
---

# The back end won't connect

| You see | Cause | Fix |
|---|---|---|
| `node: .env: not found` | No `.env` in `backend`, or it has another name | Copy your `.env` from Lab 5 next to `server.js`, named exactly `.env` |
| `querySrv ECONNREFUSED` | Your network cannot look up Atlas | Switch to a **phone hotspot** |
| Stuck on `Connecting to MongoDB...`, then `MongooseServerSelectionError` | Atlas does not allow your IP, **or** the network blocks MongoDB | In Atlas, check **IP Access List** has `0.0.0.0/0`, **Active**; then try a hotspot |
| `bad auth : authentication failed` | The password in `.env` is wrong: edited, or reset since | **Database Users → Edit → Edit Password**, put the new one in `.env` |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-reach
---

# Can't reach the API

| You see | Cause | Fix |
|---|---|---|
| `blocked by CORS policy: No 'Access-Control-Allow-Origin' header` | `cors` isn't set up | Step 1: `app.use(cors())`, then restart the API |
| `Cannot find package 'cors'` in the back end's terminal | Not installed, or in the wrong folder | `npm install cors` in `backend/` |
| **Can't reach the API.** and `ERR_CONNECTION_REFUSED` in the Console | The back end isn't running | Terminal 1: `cd backend`, `npm run dev` |
| **Can't reach the API.** and a `404 (Not Found)` in the Console | A wrong address in `api/listings.js` | `http://localhost:3000/api/listings` |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-break
---

# The page breaks

| You see | Cause | Fix |
|---|---|---|
| A blank page. Error: `listings.map is not a function` | `return res;` instead of `return res.json();` | Return the JSON: `res.json()` |
| The back end's terminal floods with `GET /api/listings`, and the page never settles | `useEffect` without `[]`: it runs after every draw | `}, []);` at the end of the effect |
| Two `GET /api/listings` on each load | React's StrictMode, in development only | Nothing: that is expected |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-stick
---

# Changes don't stick

| You see | Cause | Fix |
|---|---|---|
| After adding, a card with no title; after a reload, it's fine | `createListing(...)` without `await` | `const saved = await createListing(listing);` |
| Alert: `Could not save it: POST failed: 400` | The JSON header is missing, so the API gets no body | `headers: { "Content-Type": "application/json" }` |
| A deleted listing is back after a reload | `deleteListing` doesn't call the API | Step 5: `await removeListing(id);` first |
| An added listing is gone after a reload | `addListing` doesn't call the API | Step 4 |

---
layout: refs
title: Useful references
---

## The browser

- [MDN: using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

## React

- [React: synchronizing with effects](https://react.dev/learn/synchronizing-with-effects)
- [React: you might not need an effect](https://react.dev/learn/you-might-not-need-an-effect)

## Express

- [Express: the cors middleware](https://expressjs.com/en/resources/middleware/cors.html)


---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
