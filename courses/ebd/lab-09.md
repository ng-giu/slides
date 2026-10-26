---
theme: ../../theme
title: BINF 503 - Lab 9 - Authentication
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 9
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 9 — Authentication

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
| 10 min | Passwords, tokens and JWTs |
| 20 min | Steps 1-2: users and protected routes, in the back end |
| 20 min | Steps 3-4: log in, in the front end |
| 15 min | Step 5: every listing has an owner |
| 5 min | What AI-written code looks like |
| — | Next: your project |

---
layout: default
icon: recap
---

# Anyone can do anything

ebd bn'b works end to end: React, the API, MongoDB. But right now:

- **Anyone** can add a listing, without saying who they are.
- **Anyone** can delete **any** listing, even one they didn't make.
- Nobody knows who listed what.

Today, users: **registration** and **log in**, then routes only a logged-in user may use, then listings that belong to someone. Every course project needs exactly this.

| | The question | Answered by |
|---|---|---|
| **Authentication** | Who are you? | Log in, then a token |
| **Authorization** | Are you allowed to do **this**? | Checking the token, then the owner |

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-08
side: right
qr: true
---

# Didn't finish Lab 8?

Start from ours:

1. [**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-08.zip) and unzip it.
2. Put your `.env` from Atlas in `backend/`.
3. Terminal 1: `cd backend`, `npm install`, `npm run dev`.
4. Terminal 2: `cd frontend`, `npm install`, `npm run dev`.

Today you change **both** halves.

---
layout: section
icon: intro
sub: Two ideas, before any code
---

# Passwords and tokens

---
layout: default
icon: intro
diagram:
  width: 860
  height: 118
  nodes:
    - { id: pw, x: 0, y: 34, w: 170, h: 56, label: A password, sub: '"secret123"', icon: key, tone: navy }
    - { id: hash, x: 220, y: 34, w: 170, h: 56, label: bcrypt, sub: "One way, slow on purpose", icon: lock, tone: amber }
    - { id: db, x: 440, y: 34, w: 420, h: 56, label: What MongoDB stores, sub: "$2b$10$HyKPQEwTqtU0VJXEhZa2euG6ic.RRoGz40BLfcFUVtmmUznMxSy3.", icon: database, tone: green }
  edges:
    - { from: pw, to: hash }
    - { from: hash, to: db }
---

# Never store a password

<Diagram v-bind="$frontmatter.diagram" />

A **hash** is one way: you can't turn it back into `secret123`. At login, bcrypt hashes what was typed and compares the two hashes. If the database leaks, nobody gets the passwords.

- Hash `secret123` twice and you get **two different** hashes: bcrypt mixes in a random **salt**, stored inside the hash. Both still match `secret123`.
- **Slow on purpose**: `10` rounds take a moment, so guessing millions of passwords takes years.
- Plain-text passwords in a project: a **significant grade penalty**.

---
layout: default
icon: intro
dense: true
class: giu-jwt
---

<style>
/* The three parts of a token, coloured. Only styles this slide */
.giu-jwt .tok { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; word-break: break-all; line-height: 1.55; background: #f6f6f7; padding: 0.6rem 0.8rem; border-radius: 6px; }
.giu-jwt .h { color: #e2001a; } .giu-jwt .p { color: #34407e; } .giu-jwt .s { color: #2f6e3b; }
.giu-jwt td:first-child { white-space: nowrap; }
</style>

# A JWT: three parts, joined by dots

A **JSON Web Token** is what the API gives you at log in. A real one, from today's code:

<div class="tok"><span class="h">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span class="p">eyJpZCI6IjZhZGVkOTdhOTY5NzkxYTIyNDdlMjU1NCIsIm5hbWUiOiJOb3VyIiwiaWF0IjoxNzkyOTg5OTY4LCJleHAiOjE3OTMwNzYzNjh9</span>.<span class="s">Ati19-GIinztnEhlpzz78mK1tQgdvTLr-UnO_OTGdlM</span></div>

| Part | Decoded | What it is |
|---|---|---|
| <span class="h">**Header**</span> | `{"alg":"HS256","typ":"JWT"}` | How it was signed |
| <span class="p">**Payload**</span> | `{"id":"6aded97a...","name":"Nour",` `"iat":1792989968,"exp":1793076368}` | Who: the user's `_id` and name. Issued at, and expires: a day later |
| <span class="s">**Signature**</span> | header + payload, signed with **`JWT_SECRET`** | Proof the API made it, unchanged |

---
layout: default
icon: intro
diagram:
  width: 860
  height: 118
  nodes:
    - { id: login, x: 0, y: 34, w: 160, h: 56, label: Log in, sub: "Email and password", icon: key, tone: navy }
    - { id: token, x: 175, y: 34, w: 160, h: 56, label: The API signs a token, sub: "With JWT_SECRET", icon: lock, tone: amber }
    - { id: save, x: 350, y: 34, w: 160, h: 56, label: The browser keeps it, sub: "localStorage", icon: monitor, tone: navy }
    - { id: send, x: 525, y: 34, w: 160, h: 56, label: Every request carries it, sub: "Authorization: Bearer ...", icon: play, tone: navy }
    - { id: check, x: 700, y: 34, w: 160, h: 56, label: requireAuth checks it, sub: "Then req.user is set", icon: server, tone: amber }
  edges:
    - { from: login, to: token }
    - { from: token, to: save }
    - { from: save, to: send }
    - { from: send, to: check }
---

# Why a token works

<Diagram v-bind="$frontmatter.diagram" />

- **The server remembers nothing**: the token says who you are; the API only checks its signature.
- **Anyone can read it, nobody can change it.** On [jwt.io](https://www.jwt.io) the payload is plain to see: never put a password in it. Change one letter: `401`.
- **It expires**: after `exp`, log in again.
- **`JWT_SECRET` is the key**: whoever has it can make a token for any user. `.env` only, never git.

---
layout: split
title: The plan
dense: true
wideRight: true
class: giu-tree
---

<style>
/* The whole project tree must fit. Only styles this slide */
.giu-tree .giu-split__grid pre.shiki { font-size: 0.5rem !important; line-height: 1.12 !important; }
</style>

| Step | What |
|---|---|
| 1 | Users: register and log in (API) |
| 2 | Routes that need a login (API) |
| 3 | Log in and register pages |
| 4 | Send the token |
| 5 | Every listing has an owner |

Each code slide says **which file**, **new** or **edit**, and where.

<div class="giu-refs__note">Not shown: <code>node_modules/</code>, Vite's config files, and files that don't change today.</div>

::right::

```text {4,5,7,9,10,12,13,14,15,16,19,20,22,23,25,26,27,28,29}
ebd-bnb/
├── backend/
│   ├── controllers/
│   │   ├── authController.js     NEW  Step 1
│   │   └── listingController.js  EDIT Step 5
│   ├── middleware/
│   │   └── auth.js               NEW  Step 2
│   ├── models/
│   │   ├── Listing.js            EDIT Step 5
│   │   └── User.js               NEW  Step 1
│   ├── routes/
│   │   ├── authRoutes.js         NEW  Step 1
│   │   └── listingRoutes.js      EDIT Step 2
│   ├── .env                      EDIT Step 1
│   ├── package.json              EDIT Step 1
│   └── server.js                 EDIT Step 1
├── frontend/src/
│   ├── api/
│   │   ├── auth.js               NEW  Step 3
│   │   └── listings.js           EDIT Step 4
│   ├── components/
│   │   ├── Header.jsx            EDIT Steps 3, 5
│   │   └── ListingCard.jsx       EDIT Steps 4-5
│   ├── pages/
│   │   ├── HomePage.jsx          EDIT Step 4
│   │   ├── LoginPage.jsx         NEW  Step 3
│   │   └── RegisterPage.jsx      NEW  Step 3
│   ├── App.jsx                   EDIT Steps 3-5
│   └── index.css                 EDIT Step 3
└── .gitignore
```

---
layout: section
icon: code
sub: Five steps. 1-2 in the back end, 3-4 in the front end, 5 in both
---

# Adding users

---
layout: default
title: "Step 1 of 5: two packages and a secret"
dense: true
---

# Step 1 of 5: two packages and a secret

In **terminal 1**, stop the API (**Ctrl+C**), then in `backend/`:

```bash
npm install bcryptjs jsonwebtoken
```

`bcryptjs`, with **js**: the pure-JavaScript version. `bcrypt` without it needs a C++ build, which often fails on Windows.

Make a secret, a long random text. Run this, and copy what it prints:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add it to `backend/.env`, as a new last line: `JWT_SECRET="5f1c0e6a9b2d47c8a3e1..."`. Your **own**, never a classmate's: whoever knows it can log in as anyone.
---
layout: split
title: "Step 1 of 5: the User model"
dense: true
class: giu-small
---

In `backend/models`, **New File**: `User.js`.

The same shape as `Listing.js`: a schema, a model, and the functions that touch the data.

- `unique: true`: MongoDB refuses two users with the same email.
- `password` holds the **hash**, never the password.
- `findOne({ email })`: the first user with that email, or `null`.

::right::

<FileTag name="backend/models/User.js" state="new" />

<<< @/snippets/lab-09/backend/models/User.js#file

---
layout: split
title: "Step 1 of 5: register and log in"
dense: true
wideRight: true
class: giu-small
---

In `backend/controllers`, **New File**: `authController.js`. Paste the three blocks, in order: this one, then register, then log in.

- `makeToken`: the payload is the user's `_id` and name. Signed with `JWT_SECRET`. Valid for a day.
- `session`: what both register and log in answer with: the token, and who you are. **Never** the password hash.

::right::

<FileTag name="backend/controllers/authController.js (top)" state="new" />

<<< @/snippets/lab-09/backend/controllers/authController.js#top

---
layout: code
title: "Step 1 of 5: register"
dense: true
class: giu-small
---

<FileTag name="backend/controllers/authController.js (continued)" state="new" />

<<< @/snippets/lab-09/backend/controllers/authController.js#register

Check the fields (`400`), refuse a taken email (`409`), **hash** the password, save the user, answer `201` with a session.

---
layout: code
title: "Step 1 of 5: log in"
dense: true
class: giu-small
---

<FileTag name="backend/controllers/authController.js (continued)" state="new" />

<<< @/snippets/lab-09/backend/controllers/authController.js#login

Find the user by email; `bcrypt.compare` checks the password against the hash. Wrong email **or** wrong password: the same `401`, so nobody can test which emails exist.
---
layout: split
title: "Step 1 of 5: the routes"
dense: true
class: giu-small
---

1. In `backend/routes`, **New File**: `authRoutes.js`, with the code on the right.
2. In `backend/server.js`, import it and mount it, the same way as the listings:

```js
import authRoutes from "./routes/authRoutes.js";
```

```js
app.use("/api/auth", authRoutes);
```

3. Save, and `npm run dev` again: `.env` changed, so restart it by hand.

::right::

<FileTag name="backend/routes/authRoutes.js" state="new" />

<<< @/snippets/lab-09/backend/routes/authRoutes.js#file

---
layout: activity
title: "Checkpoint 1: users, in Thunder Client"
dense: true
---

1. Send each, and **predict the status first**:

| Request | Body | Expect |
|---|---|---|
| `POST /api/auth/register` | `{"name":"Nour","email":"nour@test.com","password":"secret123"}` | `201`, a token |
| The same again | the same | `409` |
| `POST /api/auth/login` | `{"email":"nour@test.com","password":"wrong"}` | `401` |
| `POST /api/auth/login` | `{"email":"nour@test.com","password":"secret123"}` | `200`, a token |

2. Copy the last token, without the quotes, into [jwt.io](https://www.jwt.io): find your `id` and `name` in the payload.
3. In Atlas **Data Explorer**, open the new `users` collection: the password is a `$2b$10$...` hash.
4. Commit and push. Something wrong? <Link to="fix-api">**The API says no**</Link>, in Troubleshooting.

---
layout: split
title: "Step 2 of 5: the gatekeeper"
dense: true
class: giu-small
---

**Middleware** (Lab 4) runs before a controller, and may stop the request. `requireAuth` lets it through only with a valid token.

In `backend`, **New Folder**: `middleware`. In it, **New File**: `auth.js`.

- The token arrives in a header: `Authorization: Bearer eyJ...`. We take off `"Bearer "`.
- `jwt.verify` checks the signature **and** the expiry. If either fails, it throws: `401`.
- Valid: `req.user` is the payload (`id`, `name`), and `next()` goes on to the controller.

::right::

<FileTag name="backend/middleware/auth.js" state="new" />

<<< @/snippets/lab-09/backend/middleware/auth.js#file

---
layout: split
title: "Step 2 of 5: lock the routes that change data"
dense: true
class: giu-xs
---

In `backend/routes/listingRoutes.js`: **import** `requireAuth`, and put it **before** the controller on the three routes that change data.

A route can run several functions, in order: first `requireAuth`, then, only if it calls `next()`, the controller.

Reading stays open: anyone may look at listings.

::right::

<FileTag name="backend/routes/listingRoutes.js" state="edit" />

<<< @/snippets/lab-09/backend/routes/listingRoutes.js#file {2,13,16,17,18,19}

---
layout: split
title: "Checkpoint 2: locked"
dense: true
---

<Activity>

In Thunder Client, send `POST /api/listings` with a listing as the body:

1. Without a token: **`401`** `Log in first`.
2. Open the **Auth** tab, choose **Bearer**, paste your token: **`201`**.
3. `GET /api/listings` still works without one.
4. Commit and push.

</Activity>

::right::

Now try **Add a listing** in the React app: `Could not save it: POST failed: 401`. That's right: the API now wants a token, and React doesn't send one yet.

Steps 3 and 4 log you in from React, and send the token.

---
layout: split
title: "Step 3 of 5: talking to /api/auth"
dense: true
wideRight: true
class: giu-xs
---

In `frontend/src/api`, **New File**: `auth.js`.

Like `listings.js`, but one difference: when the API refuses, we throw **its** message (`data.error`), e.g. `Wrong email or password`, so the page can show it as it is.

Both `register` and `login` answer `{ token, user }`.

::right::

<FileTag name="frontend/src/api/auth.js" state="new" />

<<< @/snippets/lab-09/frontend/src/api/auth.js#file

---
layout: split
title: "Step 3 of 5: the log in page"
dense: true
wideRight: true
class: giu-small
---

In `src/pages`, **New File**: `LoginPage.jsx`. Paste this, then the form on the next slide.

The same pattern as the Add a listing form. On success, `App` remembers the session; on failure, the API's message goes into `error`.

::right::

<FileTag name="src/pages/LoginPage.jsx (top)" state="new" />

<<< @/snippets/lab-09/frontend/src/pages/LoginPage.jsx#top

---
layout: code
title: "Step 3 of 5: the log in form"
dense: true
class: giu-small
---

<FileTag name="src/pages/LoginPage.jsx (continued)" state="new" />

<<< @/snippets/lab-09/frontend/src/pages/LoginPage.jsx#bottom

`type="password"` hides what you type. `{error && ...}` shows the message only when there is one. `htmlFor` and `id` tie each label to its input: click the label, and the input gets the cursor.
---
layout: split
title: "Step 3 of 5: the register page"
dense: true
wideRight: true
class: giu-small
---

In `src/pages`, **New File**: `RegisterPage.jsx`. Paste this, then the next slide.

The log in page, plus a `name`. Registering logs you in at once: the API sends a token back.

::right::

<FileTag name="src/pages/RegisterPage.jsx (top)" state="new" />

<<< @/snippets/lab-09/frontend/src/pages/RegisterPage.jsx#top

---
layout: code
title: "Step 3 of 5: the register form"
dense: true
class: giu-small
---

<FileTag name="src/pages/RegisterPage.jsx (continued)" state="new" />

<<< @/snippets/lab-09/frontend/src/pages/RegisterPage.jsx#bottom

The log in form, with a **Name** field first.
---
layout: split
title: "Step 3 of 5: App remembers who logged in"
dense: true
class: giu-small
---

In `frontend/src/App.jsx`, **under** the `useEffect`s, add the `user` state, `logIn` and `logOut`.

- `localStorage`: a small store in the browser that **survives a reload**. We keep the token and the user there.
- `useState(JSON.parse(...))`: start with whoever was saved, or `null`.
- `JSON.stringify` / `JSON.parse`: `localStorage` only holds text.

Log out = forget both.

::right::

<FileTag name="frontend/src/App.jsx (under the useEffects)" state="edit" />

<<< @/snippets/lab-09/steps/App-step3.jsx#user

---
layout: code
title: "Step 3 of 5: the routes and the header"
dense: true
class: giu-xs
---

<FileTag name="frontend/src/App.jsx (return)" state="edit" />

<<< @/snippets/lab-09/steps/App-step3.jsx#routes {3,8,9}

Import `LoginPage` and `RegisterPage` at the top, like the other pages. `Header` gets the user, and a way to log out.

---
layout: code
title: "Step 3 of 5: who is logged in"
dense: true
class: giu-xs
---

<FileTag name="src/components/Header.jsx: replace the <nav>. {user ? (...) : (...)} = logged in, or not" state="edit" />

<<< @/snippets/lab-09/steps/Header-step3.jsx#file {3,10,11,12,13,14,15,16,17,18,19,20,21}

---
layout: split
title: "Checkpoint 3: logged in"
dense: true
class: giu-small
---

<Activity>

1. At the end of `src/index.css`, paste the styles on the right.
2. **Register**: you land on the home page, and the header says **Hi, &lt;your name&gt;**.
3. **Reload**: still logged in. That's `localStorage`.
4. **Log out**, then **Log in** with a wrong password: the API's message, in red.
5. F12 → **Application** → **Local Storage**: your `token` and `user`.
6. Commit and push.

</Activity>

::right::

<<< @/snippets/lab-09/frontend/src/index.css#lab09

Adding a listing still fails with `401`: React knows who you are, but doesn't tell the API yet. That's Step 4.

Something wrong? <Link to="fix-react">**React**</Link>, in Troubleshooting.

---
layout: code
title: "Step 4 of 5: send the token"
dense: true
class: giu-small
---

<FileTag name="src/api/listings.js: add authHeader, and use it in both functions" state="edit" />

<<< @/snippets/lab-09/frontend/src/api/listings.js#write {1,2,3,4,5,10,20}
---
layout: code
title: "Step 4 of 5: a page for logged-in users only"
dense: true
class: giu-xs
---

<FileTag name="frontend/src/App.jsx (return)" state="edit" />

<<< @/snippets/lab-09/steps/App-step4.jsx#routes {5,7}

Logged out, `/add` sends you to log in. Add `Navigate` to the `"react-router"` import. `HomePage` gets `user`.

---
layout: code
title: "Step 4 of 5: Delete for logged-in users"
dense: true
class: giu-xs
---

<FileTag name="src/components/ListingCard.jsx: Delete only for a logged-in user. In HomePage.jsx, give each card user={user}" state="edit" />

<<< @/snippets/lab-09/steps/ListingCard-step4.jsx#file {4,6,7,16}

---
layout: split
title: "Step 4 of 5: say why a delete failed"
dense: true
class: giu-small
---

In `src/App.jsx`, wrap `deleteListing` in `try` / `catch`, like the form: if the API refuses, say why.

The API refuses with `401` when the token is missing or expired, and, from Step 5, with `403` when the listing isn't yours.

::right::

<FileTag name="frontend/src/App.jsx (deleteListing)" state="edit" />

<<< @/snippets/lab-09/steps/App-step4.jsx#change {8,11,12,13}
---
layout: split
title: "Checkpoint 4: logged-in users only"
dense: true
---

<Activity>

1. Logged in: **Add a listing** works again.
2. Log out: no **Delete** buttons, and no **Add a listing**. Type `localhost:5173/add`: you land on **Log in**.
3. Log in again, and check the back end's terminal: `POST /api/listings`, `201`.
4. Commit and push.

</Activity>

::right::

But: register a **second** user, and they can delete **your** listings. Logged in is not enough.

That's the last step: **authorization**.

---
layout: split
title: "Step 5 of 5: listings get an owner"
dense: true
wideRight: true
class: giu-small
---

In `backend/models/Listing.js`: add `owner`, the `_id` of the user who listed it.

`ref: "User"` says which collection that `_id` belongs to.

::right::

<FileTag name="backend/models/Listing.js (the schema)" state="edit" />

<<< @/snippets/lab-09/backend/models/Listing.js#schema {4,5}

---
layout: code
title: "Step 5 of 5: the owner is whoever is logged in"
dense: true
class: giu-small
---

<FileTag name="backend/controllers/listingController.js (handleCreate)" state="edit" />

<<< @/snippets/lab-09/backend/controllers/listingController.js#create {6,7,8,9,10,11}

The owner is **`req.user.id`**, from the token. Never from the body: anyone could send someone else's id there.
---
layout: split
title: "Step 5 of 5: only the owner may change it"
dense: true
wideRight: true
class: giu-small
---

In `handleDelete` and `handleUpdate`: **find** the listing first; `404` if it doesn't exist; **`403`** if it isn't yours. Only then change it.

`String(listing.owner)`: `owner` is an `ObjectId`, `req.user.id` is text. Compare them as text.

| Code | Means |
|---|---|
| `401` | Who are you? Log in |
| `403` | I know who you are. **Not yours** |

`handleUpdate` gets the same check: the same three highlighted blocks.

::right::

<FileTag name="backend/controllers/listingController.js (handleDelete)" state="edit" />

<<< @/snippets/lab-09/backend/controllers/listingController.js#delete {2,6,7,8,9,10}

---
layout: code
title: "Step 5 of 5: Delete on your own cards"
dense: true
class: giu-xs
---

<FileTag name="src/components/ListingCard.jsx: Delete only on your own listings. user && ...: logged out, there's no user.id" state="edit" />

<<< @/snippets/lab-09/frontend/src/components/ListingCard.jsx#file {6,7,16}

---
layout: code
title: "Step 5 of 5: My listings"
dense: true
class: giu-xs
---

<FileTag name="src/App.jsx (above return, then in Routes). Header.jsx: a link to /mine" state="edit" />

<<< @/snippets/lab-09/frontend/src/App.jsx#wait {5,6}

<<< @/snippets/lab-09/frontend/src/App.jsx#routes {6}
---
layout: split
title: "Checkpoint 5: two users"
dense: true
---

<Activity>

1. Logged in as yourself, add a listing.
2. Log out, **register a second user**, and add one as them.
3. As the second user: **Delete** only on **their** card. **My listings**: only theirs.
4. In Thunder Client, with the second user's token, `DELETE` your first listing: **`403`**.
5. Log back in as yourself: **your** cards have the Delete button now.
6. Commit and push.

</Activity>

::right::

Listings from before today have **no owner**, so nobody sees Delete on them. Delete them in Atlas Data Explorer, or leave them.

Same app, same data, two users, two views of it: that's authorization.

---
layout: default
icon: code
---

# In AI-written code, you'll also see...

The ideas are the same as today's. The names and places differ:

| You may see | It is | Today, we used |
|---|---|---|
| `AuthContext`, `useAuth()` | The user, shared without passing props | `user` in `App`, as a prop |
| An **HTTP-only cookie** | The browser sends the token itself | `localStorage` and a header |
| `GET /api/auth/me` | "Who am I?", asked at start | The user in `localStorage` |
| `requireAdmin`, `role` | One more check after `requireAuth` | The `owner` check |

In your project, use whichever you understand. You explain **every line** you hand in.

---
layout: media
image: https://github.com/ng-giu/ebd-bnb/tree/lab-09
side: right
qr: true
---

# The full solution

The whole project at the end of today: `backend/` and `frontend/`, every file in its folder.

[**Download ZIP**](https://github.com/ng-giu/ebd-bnb/archive/refs/heads/lab-09.zip), unzip, and see its `README.md`. Add `JWT_SECRET` to your `.env`.

Every lab has a branch in [ng-giu/ebd-bnb](https://github.com/ng-giu/ebd-bnb): this is the project's whole history.

---
layout: section
icon: assignment
sub: Everything in your project, you have now built once, in ebd bn'b
---

# Next: your project

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
routeAlias: fix-api
---

# The API says no

| You see | Cause | Fix |
|---|---|---|
| `500`, and `secretOrPrivateKey must have a value` | `JWT_SECRET` is missing from `.env`, or the API wasn't restarted after adding it | Add it, then **Ctrl+C** and `npm run dev` |
| `Cannot find package 'bcrypt'` | `bcrypt` instead of `bcryptjs` | `import bcrypt from "bcryptjs";` |
| `ReferenceError: requireAuth is not defined`, at start | Not imported in `listingRoutes.js` | `import { requireAuth } from "../middleware/auth.js";` |
| `401 Log in first`, with a token | No `Bearer ` before it, an expired token, or a token made with another secret | Log in again; in Thunder Client use **Auth → Bearer** |
| `403 This is not your listing` | It isn't yours, or it's from before today (no owner) | Log in as its owner, or delete it in Atlas |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-react
---

# React

| You see | Cause | Fix |
|---|---|---|
| `Could not save it: POST failed: 401` | The token isn't sent | Step 4: `...authHeader()` in the headers |
| A blank page, and `"[object Object]" is not valid JSON` | The user was saved without `JSON.stringify` | Fix `logIn`, **then** F12 → Application → Local Storage → clear it |
| A blank page, and `Navigate is not defined` | Not imported | `import { Routes, Route, Navigate } from "react-router";` |
| No Delete button, even on your own listings | Compared with `user._id`: the API sends `user.id` | `listing.owner === user.id` |
| Logged in, but every change fails with `401` | The token expired: a day has passed | Log out, and log in again |

---
layout: refs
title: Useful references
---

## Tokens and passwords

- [jwt.io: decode a token](https://www.jwt.io)
- [jwt.io: introduction to JSON Web Tokens](https://www.jwt.io/introduction)
- [OWASP: password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

## The packages

- [jsonwebtoken on npm](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs on npm](https://www.npmjs.com/package/bcryptjs)

## HTTP and the browser

- [MDN: the Authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization)
- [MDN: 401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401) and [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
