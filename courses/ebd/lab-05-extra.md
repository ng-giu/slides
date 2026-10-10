---
theme: ../../theme
title: BINF 503 - Lab 5 Part 2 - Splitting the API into files
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 5
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 5, Part 2 — Splitting the API into files

---
layout: default
icon: intro
---

# What this is

Lab 5's `server.js` works. It is also **126 lines**, and it only grows from here: users, bookings, reviews.

This deck splits it into files, **one job per file**. Every request answers exactly as before: only *where* the code lives changes. That is called a **refactor**.

- Start from part 1: your `server.js` working on MongoDB, and pushed.
- Four steps. After each one the API works exactly as before: test it, commit, move on.
- Every step is a commit, so you can always go back.

---
layout: split
title: Where we're going
dense: true
---

Each section of `server.js` becomes a file. You already know the sections; they just move.

| Section of `server.js` | Moves to |
|---|---|
| DATABASE | `db.js` |
| MODEL | `models/Listing.js` |
| CONTROLLERS | `controllers/listingController.js` |
| ROUTES | `routes/listingRoutes.js` |
| MIDDLEWARE, START | stay in `server.js` |

`server.js` goes from **126 lines to 25**.

::right::

```text {3,4,5,6,7,8,11}
ebd-bnb/
├── node_modules/
├── controllers/
│   └── listingController.js
├── models/
│   └── Listing.js
├── routes/
│   └── listingRoutes.js
├── .env
├── .gitignore
├── db.js
├── package-lock.json
├── package.json
└── server.js
```

---
layout: split
title: "Step 1 of 4: db.js"
dense: true
---

1. Next to `server.js`, create **`db.js`**. Paste the code on the right.
2. In `server.js`, **delete** `connectDB` from the DATABASE section.
3. At the top of `server.js`, **import** it from `db.js`.
4. Save, run, send `GET /api/listings`. Same answer as before? Commit.

**`export`** in front of the function shares it with other files. **`import`** takes it in. Without `export`, `connectDB` is private to `db.js`.

`./db.js` means "`db.js`, in the same folder as this file".

::right::

<FileTag name="db.js" state="new" />

<<< @/snippets/lab-05-extra/db.js#file {3}

<FileTag name="server.js (top)" state="edit" />

<<< @/snippets/lab-05-extra/steps/after-step-1.js#imports {2}

---
layout: split
title: "Step 2 of 4: models/Listing.js"
dense: true
---

1. Create a folder **`models`**, and inside it **`Listing.js`**, capital L.
2. **Move** the schema, the model and the five functions there: cut them from `server.js`, paste them in.
3. Add `import mongoose` at the top of this file: it uses `mongoose` now.
4. Put **`export`** in front of each of the five functions.

::right::

<FileTag name="models/Listing.js (top)" state="new" />

<<< @/snippets/lab-05-extra/models/Listing.js#top {1}

<FileTag name="models/Listing.js (then your five functions)" state="new" />

<<< @/snippets/lab-05-extra/models/Listing.js#first {1}

---
layout: split
title: "Step 2 of 4: back in server.js"
dense: true
---

1. **Delete** `import mongoose` at the top: `server.js` no longer uses it.
2. **Import** the five functions from the model instead.
3. Save, run, test. Same answers? Commit.

The controllers still call `getAllListings()` and the rest exactly as before. They don't know the functions moved.

::right::

<FileTag name="server.js (top)" state="edit" />

<<< @/snippets/lab-05-extra/steps/after-step-2.js#imports {2-8}

<FileTag name="server.js (where MODEL was)" state="edit" />

<<< @/snippets/lab-05-extra/steps/after-step-2.js#moved

---
layout: split
title: "Step 3 of 4: the controllers"
dense: true
---

1. Create a folder **`controllers`**, and inside it **`listingController.js`**.
2. At its top, **import** the five model functions. Note the **`../`**: from inside `controllers/`, the model is one folder up.
3. **Move** the five controllers there, with **`export`** in front of each.

::right::

<FileTag name="controllers/listingController.js" state="new" />

<<< @/snippets/lab-05-extra/controllers/listingController.js#imports {7}

<<< @/snippets/lab-05-extra/controllers/listingController.js#first {1}

…and the other four, each with `export` in front.

---
layout: split
title: "Step 3 of 4: back in server.js"
dense: true
---

1. **Replace** the model import with an import of the five controllers.
2. Save, run, test. Same answers? Commit.

The routes still say `app.get("/api/listings", handleGetAll)`. They don't know the controllers moved.

::right::

<FileTag name="server.js (top)" state="edit" />

<<< @/snippets/lab-05-extra/steps/after-step-3.js#imports {2-8}

<FileTag name="server.js (where CONTROLLERS was)" state="edit" />

<<< @/snippets/lab-05-extra/steps/after-step-3.js#moved

---
layout: split
title: "Step 4 of 4: the routes"
dense: true
---

1. Create a folder **`routes`**, and inside it **`listingRoutes.js`**. Paste the code on the right.

A **router** is a mini app for one resource. Its paths are **relative**: `"/:id"` here, mounted at `/api/listings` in `server.js`, answers `/api/listings/:id`.

**`export default`**: the file shares one main thing, so `server.js` can import it under any name, without `{ }`.

::right::

<FileTag name="routes/listingRoutes.js" state="new" />

<<< @/snippets/lab-05-extra/routes/listingRoutes.js#file

---
layout: split
title: "Step 4 of 4: server.js, all of it"
dense: true
---

<FileTag name="server.js (top)" state="edit" />

<<< @/snippets/lab-05-extra/server.js#top {3}

The controllers import becomes the **routes** import.

::right::

<FileTag name="server.js (bottom)" state="edit" />

<<< @/snippets/lab-05-extra/server.js#bottom {5}

The five route lines become **one** `app.use`. This is the whole file now. Save, run, test, commit.

---
layout: activity
title: "Checkpoint: nothing changed"
---

1. Start the server. The terminal shows `Connecting to MongoDB...`, `Connected to MongoDB`, `Server running`, as always.
2. Send Lab 5's test requests again: `GET`, `POST`, `PUT`, `DELETE`, and `GET /api/listings/abc`. **Every status is the same as before the split.**
3. Your listings in Atlas are untouched: the data never moved, only the code did.
4. Commit and push: `refactor: split the API into files`.

---
layout: split
title: Before and after
dense: true
---

**One file**

```text
server.js         126 lines, everything
```

Adding **users** means more of everything, in the same file: a schema, five functions, five controllers, five routes. Soon 250 lines, and every change touches the file everyone else is changing too.

::right::

**Split**

```text
server.js                          25 lines
db.js                              12
models/Listing.js                  40
controllers/listingController.js   49
routes/listingRoutes.js            20
```

Adding **users** means three new files, `models/User.js`, `controllers/userController.js` and `routes/userRoutes.js`, and **one line** in `server.js`: `app.use("/api/users", userRoutes)`. Nothing that works today is touched.

---
layout: default
icon: tools
dense: true
---

# If it breaks

| You see | Cause | Fix |
|---|---|---|
| `Cannot find module '.../db.js'` | The file is in the wrong folder, or misspelt | Next to `server.js`, exactly `db.js` |
| `Cannot find module '.../controllers/models/Listing.js'` | The path starts from the wrong folder | From inside `controllers/`, use `../models/Listing.js` |
| `Cannot find module '.../models/Listing.js'` | `listing.js` is not `Listing.js` | Capital **L**, in a folder called `models` |
| `does not provide an export named 'getAllListings'` | `export` is missing | `export async function getAllListings()` |
| `does not provide an export named 'default'` | `export default router;` is missing | Last line of `routes/listingRoutes.js` |
| `SyntaxError: Identifier '...' has already been declared` | Copied instead of moved: it is in both files | Delete it from `server.js` |

---
layout: media
image: https://gist.github.com/nourgaser/d0b53d3f38f7839d3ba188219f2e49a8
side: right
qr: true
---

# Both versions

The split version, file by file, and the one-file version from Lab 5 next to it for comparison:

[ebd bn'b, split into files, on GitHub Gist](https://gist.github.com/nourgaser/d0b53d3f38f7839d3ba188219f2e49a8)

A gist has no folders. `Listing.js` goes in `models/`, `listingController.js` in `controllers/`, `listingRoutes.js` in `routes/`.

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# That's it
