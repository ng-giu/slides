---
theme: ../../theme
title: BINF 503 - Lab 5 - MongoDB & Mongoose
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 5
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 5 — MongoDB & Mongoose

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
| 5 min | Recap: where did the data go? |
| 5 min | MongoDB & Atlas |
| 15 min | Your database on Atlas |
| 5 min | Your `.env` and Mongoose |
| 20 min | Three steps in `server.js` |
| 10 min | Test it, restart it, see it in Atlas |
| — | Next: the front-end |

---
layout: default
icon: recap
layers:
  - { title: Route, code: 'app.get("/api/listings/:id", ...)', sub: "Unchanged today" }
  - { title: Controller, code: "handleGetOne(req, res)", sub: "Learns to wait: async / await" }
  - { title: Model, code: "getListingById(id)", sub: "Same names, new insides" }
  - { title: Database, code: "MongoDB Atlas", sub: "Replaces the array" }
---

# Where did the data go?

Last lab ended with a restart, and every listing you created was gone. The array lived in the server's **memory**.

<Flow :steps="$frontmatter.layers" />

Today the array becomes a real database. Because the layers only talk to their neighbours, **two of them change and the rest barely notice**. Keep an eye on how little you touch.

---
layout: media
image: https://gist.github.com/nourgaser/64d7a3eea2a096d51d10f511d2a9151a
side: right
qr: true
---

# Didn't finish Lab 4?

Start from the Lab 4 solution and you are exactly where it ended:

1. [**Download the Lab 4 project**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-04.zip) (or the [Lab 4 solution gist](https://gist.github.com/nourgaser/64d7a3eea2a096d51d10f511d2a9151a): **Download ZIP**).
2. Unzip it into a folder called `ebd-bnb`, open it in <Tool name="vscode" />.
3. Run `npm install`, then `npm run dev`.
4. Send `GET http://localhost:3000/api/listings`. Three listings? You are ready.

<div class="giu-refs__note">Make it a git repository and push it before you go on: today's work changes a lot of files.</div>

---
layout: section
icon: intro
sub: Where the data goes now
---

# MongoDB & Atlas

---
layout: split
title: MongoDB stores documents
---

<Tool name="mongodb" /> is a **document database**. A listing is stored almost exactly as you already send it:

```json
{
  "_id": "6ac9e4d306f1cc393040cce3",
  "title": "Nile View Apartment",
  "pricePerNight": 85
}
```

MongoDB gives every document a unique **`_id`**. It replaces the `id: 1, 2, 3` we counted ourselves.

::right::

| SQL database | MongoDB |
|---|---|
| Database | Database: `ebd-bnb` |
| Table | **Collection**: `listings` |
| Row | **Document**: one listing |
| Column | **Field**: `title`, `pricePerNight` |
| SQL | JavaScript functions: `find`, `create`, ... |

<div class="giu-refs__note">Documents are JSON-like, so data travels from MongoDB to your API to React without changing shape.</div>

---
layout: default
icon: intro
cloud:
  - { title: Your laptop, code: "npm run dev", sub: "Express runs here" }
  - { title: The internet, code: "connection string", sub: "Address, username and password in one line" }
  - { title: MongoDB Atlas, code: "Cluster0", sub: "Your database runs here, in the cloud" }
---

# MongoDB Atlas

You could install MongoDB on your laptop. We will not: **Atlas** runs it for us in the cloud, free.

<Flow :steps="$frontmatter.cloud" />

- A **cluster** is the database server Atlas runs for you. The **Free** tier is plenty for the whole course.
- Your server reaches it with a **connection string**: one line holding the address, a username and a password.
- Atlas only lets in **users** it knows, from **IP addresses** it allows. Both are set up next, and both are where things usually go wrong.

---
layout: section
icon: activity
sub: About 15 minutes. Follow along step by step.
---

# Your database on Atlas

---
layout: split
title: "1. Sign up"
dense: true
---

1. Go to [mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) and sign up, then verify your email.
2. Atlas makes you set up **multi-factor authentication**. Pick **Email** (**1**): it sends a code to your inbox, no app needed.
3. On **Welcome to Atlas**, click **Skip personalization** at the bottom.

<div class="giu-refs__note">The MFA code is for logging in to <strong>Atlas</strong>, the website. Your server never needs it.</div>

::right::

![Atlas: choosing Email as the multi-factor authentication method](/img/screenshots/atlas-mfa.png)

---
layout: split
title: "2. Deploy a free cluster"
wideRight: true
dense: true
class: giu-shot
---

<style>
/* A screenshot the student follows click by click: let it have the height.
   Slide styles leak deck-wide, so everything hangs off this slide's class. */
.giu-shot p > img { max-height: 27rem; }
</style>

Atlas pre-selects **M10**: a **paid** cluster.

1. Pick **Free**.
2. Region: **Frankfurt**, the closest.
3. Keep **Automate security setup**; **untick** Preload sample dataset.
4. **Create Deployment**.

::right::

![Atlas: Deploy your cluster, with Free, the Frankfurt region, the quick setup boxes and Create Deployment numbered 1 to 4](/img/screenshots/atlas-deploy.png)

---
layout: split
title: "3. Download your credentials"
dense: true
---

Atlas creates a **database user** for you, with a password, and shows this:

1. It allowed **only your current IP address**. Remember this one: we fix it next.
2. **Download .env file**. It holds your connection string, password included. Keep it.
3. **Close**. We don't need the other steps.

<div class="giu-refs__note">This password is <strong>not</strong> your Atlas account password: it is the one your server logs in with. Lost the file? <strong>Database Users → Edit → Edit Password</strong> makes a new one.</div>

::right::

![Atlas: the Connect to Cluster0 dialog, with the IP address note, the Download .env file button and Close numbered 1 to 3](/img/screenshots/atlas-credentials.png)

---
layout: default
title: "4. Allow every IP address"
---

# 4. Allow every IP address

Atlas only let in the IP address you had a minute ago. Your address at home is not your address at university, so allow them all.

![Atlas: IP Access List, with the menu entry and Add IP Address numbered 1 and 2](/img/screenshots/atlas-ip-list.png)

In the sidebar, **Database & Network Access** → **1** IP Access List · **2** + ADD IP ADDRESS

---
layout: split
title: "5. Type 0.0.0.0/0"
dense: true
---

1. Type `0.0.0.0/0` under **Access List Entry**. It means "every address".
2. Click **Confirm**.
3. Wait until the new line says **Active**: about a minute.

<div class="giu-refs__note">Fine for a course project, never for real data: the password becomes the only lock.</div>

::right::

![Atlas: the Add IP Access List Entry dialog with 0.0.0.0/0 typed in](/img/screenshots/atlas-ip-add.png)

---
layout: section
icon: code
sub: "All of today's code goes in server.js, in three steps"
---

# Connecting with Mongoose

---
layout: code
title: Your .env file
file: .env
---

<<< @/snippets/lab-05/.env.example ini

1. Move the file you downloaded into your project folder, next to `package.json`.
2. Rename it from `atlas-credentials.env` to exactly **`.env`**. Don't edit what is inside.
3. Add `*.env` to `.gitignore`: every file ending in `.env` stays on your laptop.

<div class="giu-refs__note">Your repo is on GitHub, and bots scan GitHub for leaked database passwords around the clock. A pushed one is found in minutes.</div>

---
layout: split
title: Node reads .env for you
wideRight: true
---

Add `--env-file=.env` to both scripts. Node then reads the file at start-up, and the code asks for a value by name:

```js
process.env.MONGODB_URI
```

The password never appears in your code, so the code is safe to push.

::right::

<FileTag name="package.json" />

<<< @/snippets/lab-05/package.json {7-8,12}

---
layout: media
tools: [mongoose]
side: right
---

# Mongoose

MongoDB works with any language. **Mongoose** is the <Tool name="nodejs" /> package that makes it feel like JavaScript:

- It **connects** to MongoDB in one line.
- A **schema** says what a listing looks like, and refuses data that breaks it.
- A **model** gives you functions to find, create, update and delete listings.

Stop your server with **Ctrl+C**, then install it in the same terminal:

```bash
npm install mongoose
```

---
layout: split
title: "Step 1 of 3: connect"
dense: true
---

Open `server.js`. Three additions, top to bottom. **Delete nothing yet.**

1. **Top:** under `import express`, add `import mongoose from "mongoose";`
2. **DATABASE section:** add `connectDB`, **under** the `listings` array. The array stays for now.
3. **START section, at the bottom:** `await connectDB();` above `app.listen`.

Save.

`connectDB` takes `MONGODB_URI` from `.env` and connects to a database called `ebd-bnb`. Atlas creates it on first use. The server now starts only once the database is there.

::right::

<FileTag name="server.js (DATABASE, under the array)" state="edit" />

<<< @/snippets/lab-05/server.js#database

<FileTag name="server.js (START)" state="edit" />

<<< @/snippets/lab-05/server.js#start {1}

---
layout: activity
title: "Checkpoint 1: connected to Atlas"
dense: true
---

1. You have: `mongoose` installed, `.env` from Atlas, `*.env` in `.gitignore`, `--env-file=.env` in both scripts, and Step 1.
2. Stop the server (**Ctrl+C**) and start it again with `npm run dev`. The terminal should show:

```text
Connecting to MongoDB...
Connected to MongoDB
Server running on http://localhost:3000
```

3. Send `GET /api/listings`: still the **three listings from the array**. You are connected; nothing uses the database yet. That's Steps 2 and 3.
4. Something else? <Link to="fix-connect">**It won't connect**</Link> or <Link to="fix-start">**It won't start**</Link>, in Troubleshooting at the end.

---
layout: split
title: "Step 2 of 3: the model"
dense: true
---

Still `server.js`, **MODEL section**. At its top, above the five functions, add the schema and the model.

- The **schema** is the shape of one listing. `required: true`: Mongoose refuses a listing without it.
- **`Listing`**, the **model**, is our handle on the `listings` collection in Atlas.

The five functions keep their names. What changes inside:

| Function | Array | Mongoose |
|---|---|---|
| `getAllListings` | `listings` | `Listing.find()` |
| `getListingById` | `listings.find(...)` | `Listing.findById(id)` |
| `addListing` | `listings.push(...)` | `Listing.create(data)` |
| `updateListing` | change its fields | `Listing.findByIdAndUpdate(...)` |
| `removeListing` | `listings.filter(...)` | `Listing.findByIdAndDelete(id)` |

::right::

<FileTag name="server.js (MODEL, at the top)" state="edit" />

<<< @/snippets/lab-05/server.js#schema

---
layout: split
title: "Step 2 of 3: the five functions"
dense: true
---

<FileTag name="server.js (MODEL): replace the five functions" state="edit" />

<<< @/snippets/lab-05/server.js#model-1

::right::

<<< @/snippets/lab-05/server.js#model-2

1. **Replace** your five old functions with these five. Don't keep both.
2. In the DATABASE section, **delete** the `listings` array and `nextId`: the listings live in Atlas now.
3. Save.

---
layout: default
title: "Step 3 of 3: the controllers"
icon: code
dense: true
---

# Step 3 of 3: the controllers

Still `server.js`, **CONTROLLERS section**. The model now answers from Atlas, so the controllers must **wait** for it.

1. Put `async` in front of each of the five controller functions: `async function handleGetAll(req, res) {`
2. Change one line in each:

| Controller | Change | To |
|---|---|---|
| `handleGetAll` | `res.json(getAllListings());` | `res.json(await getAllListings());` |
| `handleGetOne` | `getListingById(Number(req.params.id))` | `await getListingById(req.params.id)` |
| `handleCreate` | `res.status(201).json(addListing(data));` | `res.status(201).json(await addListing(data));` |
| `handleUpdate` | `updateListing(Number(req.params.id), data)` | `await updateListing(req.params.id, data)` |
| `handleDelete` | `removeListing(Number(req.params.id))` | `await removeListing(req.params.id)` |

`Number(...)` goes because an `_id` like `6ac9e4d3...` is not a number. Everything else stays: every check, every status code, and all the routes. Save.

---
layout: activity
title: "Checkpoint 2: listings in MongoDB"
dense: true
---

1. The server restarts by itself. You want `Connected to MongoDB` and `Server running` again.
2. Send `GET /api/listings`. You get **`[]`**, an empty list. That's right: the array is gone, and the database starts empty.
3. Something wrong? <Link to="fix-start">**It won't start**</Link> or <Link to="fix-answers">**the answers are wrong**</Link>, in Troubleshooting at the end.
4. Still stuck? Compare with the [solution](https://gist.github.com/nourgaser/3cdbd4b1b251b5f469251bf964354493).
5. Commit and push. Run `git log --stat -1`: `.env` must **not** be in the commit.

---
layout: split
title: Make sure you have Thunder Client
icon: tools
dense: true
---

Already have it from Lab 4? **Skip this slide.**

1. In <Tool name="vscode" />, open **Extensions**: the squares icon in the left bar, or **Ctrl+Shift+X**.
2. Search <Tool name="thunderclient" />, the one with the purple lightning icon.
3. Click **Install**.
4. A lightning icon appears in the left bar. Click it, then **New Request**.

<div class="giu-refs__note">Using Postman instead? That's fine: same requests, same answers.</div>

::right::

![Thunder Client sending GET /api/listings/2: the method, URL, Send button, status and response body are numbered 1 to 5](/img/screenshots/thunder-get.png)

**1** method · **2** URL · **3** Send · **4** status · **5** response body

---
layout: activity
title: Test it, restart it, see it
dense: true
---

1. Use <Tool name="thunderclient" /> to send each request to `http://localhost:3000`. **Predict the status** before you click Send. For `:id`, copy a real `_id` from an earlier response.

| Request | Body | Expect |
|---|---|---|
| `POST /api/listings` | `{ "title": "Lake View Penthouse", "pricePerNight": 400 }` | `201`, with an `_id` |
| `POST /api/listings` | `{ "title": "No price" }` | `400` |
| `GET /api/listings/:id` | — | `200` |
| `PUT /api/listings/:id` | `{ "title": "Lake View Penthouse", "pricePerNight": 450 }` | `200` |
| `GET /api/listings/abc` | — | `404` |
| `DELETE /api/listings/:id` | — | `204`, then `404` the second time |

2. Add three listings. Stop the server with **Ctrl+C**, start it again, send `GET /api/listings`. **Still there.**
3. In Atlas, open **Data Explorer**, click **Connect** next to `Cluster0`, then `ebd-bnb` → `listings`.

---
layout: default
---

# Your data, in Atlas

![Atlas Data Explorer showing the listings collection in the ebd-bnb database](/img/screenshots/atlas-data.png)

**1** your collection · **2** refresh: Data Explorer does not update by itself. Edit a price here and `GET` it from your API: there is only one copy of the data.

---
layout: media
image: https://gist.github.com/nourgaser/3cdbd4b1b251b5f469251bf964354493
side: right
qr: true
---

# The full solution

`server.js` and `package.json`, as we built them today:

[The Lab 5 solution on GitHub Gist](https://gist.github.com/nourgaser/3cdbd4b1b251b5f469251bf964354493)

`.env.example` there only shows the shape of the file. Use **your own** `.env` from Atlas.

Or the whole project folder, ready to run: [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-05.zip) (branch `lab-05` of [ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb)).

---
layout: default
icon: code
---

# Part 2: splitting ebd bn'b into files

`server.js` now does everything, in one long file, and it only grows from here: users, bookings, reviews.

Real projects split it into files: one for the database, one for the model, one for the controllers, one for the routes. That is **part 2 of this lab**.

- The split version is the back-end we **build on from now on**: the front-end, log-in, and your course project.
- Its slides are on the **CMS**, on the BINF 503 page, next to these: **Lab 5, Part 2**.
- Every step keeps your API working, so whatever we don't finish together, you finish at home.

---
layout: section
icon: intro
sub: The back-end is done. Next lab, people get to see it.
---

# Next: the front-end

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
routeAlias: fix-connect
---

# It won't connect

| You see | Cause | Fix |
|---|---|---|
| `node: .env: not found` | The file is still called `atlas-credentials.env`, or is in the wrong folder | Put it next to `package.json`, named exactly `.env` |
| `...must be a string, got "undefined"` | `.env` was edited; or the server was started **before** `--env-file` was added | Use Atlas's file unchanged; stop the server with **Ctrl+C** and run `npm run dev` again |
| `MongoParseError: Invalid connection string` or `querySrv ENOTFOUND` | The connection string was edited or cut | Undo your edits: the file works exactly as downloaded |
| `bad auth : authentication failed` | Wrong password: edited, or reset since | **Database Users → Edit → Edit Password**, put the new one in both places in `.env` |
| `querySrv ECONNREFUSED` | Your network cannot look up Atlas | Switch to a **phone hotspot** |
| Stuck on `Connecting...`, then `MongooseServerSelectionError` | Atlas does not allow your IP, **or** the network blocks MongoDB | Check **IP Access List** has `0.0.0.0/0`, **Active**; then try a hotspot |

---
layout: default
icon: tools
dense: true
routeAlias: fix-start
---

# It won't start

| You see | Cause | Fix |
|---|---|---|
| `ReferenceError: mongoose is not defined` | The import is missing | Step 1: top of `server.js` |
| `ReferenceError: connectDB is not defined` | `connectDB` is missing, or misspelt | Step 1: DATABASE section |
| `SyntaxError: Identifier 'getAllListings' has already been declared` | Old and new functions are both there | Step 2: **replace** the five functions |
| `SyntaxError: Unexpected reserved word` | `await` in a function without `async` | Step 3: `async` in front of that `function` |

---
layout: default
icon: tools
routeAlias: fix-answers
---

# It starts, but the answers are wrong

| You see | Cause | Fix |
|---|---|---|
| `GET /api/listings` still gives the three old listings | Step 2 is not done, or not saved | Do Step 2; save `server.js` |
| `500`, with `ReferenceError: listings is not defined` | An old function still uses the deleted array | Step 2: replace **all five** functions |
| `GET /api/listings` answers `{}` | An `await` is missing: you sent a Promise, not the data | Step 3: `res.json(await getAllListings())` |
| Every `GET /api/listings/:id` is `404`, even with a real `_id` | `Number(...)` is still there | Step 3: pass `req.params.id` as it is |

---
layout: refs
title: Useful references
---

## MongoDB Atlas

- [Atlas: get started](https://www.mongodb.com/docs/atlas/getting-started/)
- [Atlas: IP access list](https://www.mongodb.com/docs/atlas/security/ip-access-list/)
- [Atlas: troubleshoot connection issues](https://www.mongodb.com/docs/atlas/troubleshoot-connection/)

## Mongoose

- [Mongoose: getting started](https://mongoosejs.com/docs/index.html)
- [Mongoose: schemas](https://mongoosejs.com/docs/guide.html)
- [Mongoose: queries](https://mongoosejs.com/docs/queries.html), every `find...` function

## Node.js

- [Node.js: environment variables and `--env-file`](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [MDN: async and await](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await)

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
