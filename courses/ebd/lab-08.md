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
| 15 min | Step 1: the back end lets React in |
| 10 min | Step 2: one file for every request |
| 15 min | Step 3: load the listings from the API |
| 10 min | Steps 4-5: add and delete, for real |
| 5 min | Checkpoint: reload, and it's all still there |
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
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-07
side: right
qr: true
---

# Didn't finish Lab 7?

Start from ours:

1. [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-07.zip) and unzip it.
2. Put your `.env` from Atlas in `backend/`.
3. Terminal 1: `cd backend`, `npm install`, `npm run dev`.
4. Terminal 2: `cd frontend`, `npm install`, `npm run dev`.

Today you need **both** running.

---
layout: split
title: The plan
dense: true
wideRight: true
class: giu-tree
---

<style>
/* The whole project tree must fit. This style only styles this slide */
.giu-tree .giu-split__grid pre.shiki { font-size: 0.52rem !important; line-height: 1.15 !important; }
</style>

| Step | What |
|---|---|
| 1 | The back end lets React in |
| 2 | One file for every request |
| 3 | Load the listings from the API |
| 4 | Add, for real |
| 5 | Delete, for real |

Each code slide says **which file**, **new** or **edit**, and where.

<div class="giu-refs__note">Not shown: <code>node_modules/</code> and Vite's config files.</div>

::right::

```text {11,12,15,16,20,22,24,26,27}
ebd-bnb/
├── backend/
│   ├── controllers/
│   │   └── listingController.js
│   ├── models/
│   │   └── Listing.js
│   ├── routes/
│   │   └── listingRoutes.js
│   ├── .env
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
└── .gitignore
```

---
layout: section
icon: code
sub: Five steps, each one ends with an app that works
---

# Connecting the two halves

---
layout: split
title: "Step 1 of 5: ask the API from the browser"
dense: true
---

1. **Terminal 1**: `cd backend`, `npm run dev`. Wait for `Connected to MongoDB`.
2. **Terminal 2**: `cd frontend`, `npm run dev`. Open `localhost:5173`.
3. Press **F12**, open **Console**, paste this and press **Enter**:

```js
fetch("http://localhost:3000/api/listings")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

The same `fetch` as in Lab 2. It should print your listings from MongoDB.

::right::

It doesn't. The Console says, in red:

```text
Access to fetch at 'http://localhost:3000/api/listings'
from origin 'http://localhost:5173' has been blocked by
CORS policy: No 'Access-Control-Allow-Origin' header is
present on the requested resource.
```

The API **did** answer: its terminal even logs `GET /api/listings`. The **browser** refused to hand the answer to the page. Why? Next slide.

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

# CORS: who may read the answer

<Diagram v-bind="$frontmatter.diagram" />

A different **port** is a different **origin**, as far as the browser is concerned. A page may only read answers from another origin if that server says so, with a header: `Access-Control-Allow-Origin`.

That is **CORS**: it stops a random website from reading your bank's API through your browser. Thunder Client never hit it: it isn't a browser page.

---
layout: split
title: "Step 1 of 5: let React in"
dense: true
wideRight: true
class: giu-small
---

In **terminal 1**, stop the API (**Ctrl+C**), then in `backend/`:

```bash
npm install cors
```

Then in `backend/server.js`:

1. At the top: `import cors from "cors";`
2. In MIDDLEWARE, add `app.use(cors())`: every answer now carries the header.
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
3. Commit and push.

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

Pages shouldn't call `fetch` themselves: they'd all repeat the address and the error checks. One file does it, the same idea as the **model** in the back end.

1. In `frontend/src`, **New Folder**: `api`. In it, **New File**: `listings.js`.
2. Paste both blocks, top first.

- `API`: the address, written **once**.
- `res.ok` is false for a `404` or a `500`: we **throw**, so a mistake doesn't pass as data.
- `res.json()` turns the answer into JavaScript.

::right::

<FileTag name="frontend/src/api/listings.js" state="new" />

<<< @/snippets/lab-08/frontend/src/api/listings.js#read

---
layout: split
title: "Step 2 of 5: sending data"
dense: true
wideRight: true
class: giu-small
---

Sending is the same `fetch`, with more options. These are exactly what you set by hand in Thunder Client in Lab 4:

| In Thunder Client | In `fetch` |
|---|---|
| The method | `method: "POST"` |
| Body → JSON | `headers: { "Content-Type": "application/json" }` |
| The body you type | `body: JSON.stringify(listing)` |

Paste it under the first block. Nothing uses these functions yet: the page doesn't change.

::right::

<FileTag name="frontend/src/api/listings.js (continued)" state="new" />

<<< @/snippets/lab-08/frontend/src/api/listings.js#write

---
layout: default
icon: code
---

# Loading data when the app starts

React draws first; the data arrives later. So:

1. `App` starts with **no** listings, and `loading` set to `true`.
2. After the first draw, a **`useEffect`** asks the API.
3. The answer arrives: `setListings(data)`, `setLoading(false)`. React draws again, with the cards.

`useEffect(() => { ... }, [])`: the **empty** `[]` means "run once, when the app starts". Without it, the effect runs after **every** draw, each fetch triggers a draw, and the API gets hundreds of requests a second.

<div class="giu-refs__note">Two <code>GET /api/listings</code> per load in development? React's StrictMode, on purpose.</div>

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

Still in `App.jsx`, **just above** `return (`, add the two `if`s on the right.

While `loading`, the page shows only "Loading...". If the API can't be reached, it says so, instead of showing an empty app.

Then:

1. **Delete** the `src/data` folder: nothing uses the fake listings now.
2. At the end of `src/index.css`, add the `.error` style below.

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

A new database has no listings, and an empty page looks broken. In `src/pages/HomePage.jsx`, add the highlighted `if`: no listings, say so.

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
4. Commit and push.

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
2. Make `addListing` **`async`**: it sends the listing to the API, and puts the one that comes **back** into state.

Why the one that comes back? It has the `_id` **MongoDB** made. That's the id the delete and the listing page need.

`await`: wait for the API's answer before using it. Forget it, and `saved` is a Promise, not a listing.

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

In `frontend/src/pages/AddListingPage.jsx`, replace `handleSubmit` with the one on the right:

- **No `_id`** any more: MongoDB makes it.
- `async` and `await onAdd(...)`: go home only **after** the API has saved it.
- `try` / `catch`: if saving fails, say why, and stay on the form.

The rest of the file stays the same.

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
2. Make `deleteListing` **`async`**: delete it in MongoDB first, then from the page.

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
5. Commit and push.

</Activity>

Something wrong? <Link to="fix-stick">**Changes don't stick**</Link>, in Troubleshooting at the end.

::right::

Watch the back end's terminal while you click:

```text
GET /api/listings
POST /api/listings
DELETE /api/listings/6aded1f39f33c3673b95976f
```

Every click in React is a request you could have sent from Thunder Client. The API didn't change at all today, apart from `cors` and `/api/health`.

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

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
