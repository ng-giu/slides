---
theme: ../../theme
title: BINF 503 - Lab 4 - Building a REST API
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 4
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 4 — Building a REST API

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
| 10 min | Recap: where we left ebd bn'b |
| 25 min | Routes, controllers & models |
| 10 min | Testing with an API client |
| 15 min | Middleware & the request body |
| 25 min | Create, update & delete |
| 5 min | What happens on restart? |

---
layout: default
icon: recap
---

# Where we left ebd bn'b

Last lab you set up an npm project, started an Express server, and served listings with two `GET` routes.

| Method | URL | Status |
|---|---|---|
| `GET` | `/api/listings` | Done |
| `GET` | `/api/listings/:id` | Done |
| `POST` | `/api/listings` | **Today** |
| `PUT` | `/api/listings/:id` | **Today** |
| `DELETE` | `/api/listings/:id` | **Today** |

Today we finish the API and give the code a shape that lasts the whole semester.

---
layout: split
title: Didn't finish Lab 3?
icon: recap
wideRight: true
dense: true
---

Start from here and you are exactly where Lab 3 ended:

1. Create a folder called `ebd-bnb` and open it in <Tool name="vscode" />.
2. Create `package.json` and paste in the code on the right.
3. In the terminal, run `npm install`.
4. Create `.gitignore` containing `node_modules/`.
5. Create `server.js` and paste in the code from the **next slide**.
6. Run `npm run dev` and open `http://localhost:3000/api/listings`. You should see three listings.
7. Commit and push it to a new <Tool name="github" /> repo.

::right::

<FileTag name="package.json" />

<<< @/snippets/lab-04/package.json

<div class="giu-refs__note">Want to know what each step does? Lab 3, from "npm init" onwards, walks through it.</div>

---
layout: split
title: Lab 3's server.js
dense: true
class: giu-paste
---

<style>
/* Code meant to be copied out of the PDF: every line must fit, because text
   clipped by the box is not in the PDF at all. Slide styles leak deck-wide,
   so everything hangs off this slide's class. */
.giu-paste .giu-split__grid { gap: 1rem; }
.giu-paste .giu-split__grid pre.shiki { font-size: 0.56rem !important; }
</style>

<FileTag name="server.js" />

<<< @/snippets/lab-04/catch-up.js#top

<div class="giu-refs__note">Copy each half into <code>server.js</code>, left then right. Indentation lost in the paste? <strong>Shift+Alt+F</strong> in VS Code puts it back.</div>

::right::

<FileTag name="server.js (continued)" />

<<< @/snippets/lab-04/catch-up.js#bottom

---
layout: split
title: Today's question
dense: true
---

<<< @/snippets/lab-04/starter.js#top txt

::right::

<<< @/snippets/lab-04/starter.js#bottom txt

---
layout: section
icon: code
sub: Who does what, when a request arrives
---

# Routes, controllers & models

---
layout: default
icon: code
layers:
  - { title: Route, code: 'app.get("/api/listings/:id", handleGetOne)', sub: "Maps a method + URL to a controller" }
  - { title: Controller, code: "handleGetOne(req, res)", sub: "Reads the request, calls the model, picks the status, sends the response" }
  - { title: Model, code: "getListingById(2)", sub: "The only code that reads or changes data" }
  - { title: Database, code: "listings", sub: "Where the data lives: an array today, MongoDB soon" }
---

# Four layers, one job each

<Flow :steps="$frontmatter.layers" back="The listing travels back up, and the controller sends it as the response" />

- A request travels **down** the layers; the answer comes back **up**.
- Each layer only talks to its neighbours. A route never touches the array; a model never sees `req` or `res`.
- **Why bother?** When MongoDB replaces the array, only the **model** and **database** change. Routes and controllers stay as they are.

---
layout: split
title: One file today, many files later
---

Today everything stays in `server.js`, split into sections by banners:

```js
// ========== MODEL ==========
```

Read the file top to bottom and you meet the layers in order.

As ebd bn'b grows, each section moves into its own file. Nothing inside it changes; it only moves.

::right::

```text
ebd-bnb/
├── server.js        MIDDLEWARE, ROUTES, START
├── db.js            DATABASE
├── models/
│   └── Listing.js   MODEL
├── controllers/
│   └── listingController.js
└── routes/
    └── listingRoutes.js
```

<div class="giu-refs__note">This is the usual Express layout; we get there in a few labs.</div>

---
layout: split
title: The model
dense: true
---

<<< @/snippets/lab-04/server.js#model-1

::right::

<<< @/snippets/lab-04/server.js#model-2

- Plain functions, and the **only** code that touches `listings`.
- They know nothing about requests or status codes; they just find and change data.
- In the MongoDB lab, each one becomes a single database call.

---
layout: split
title: Controllers and routes
wideRight: true
dense: true
---

<FileTag name="ROUTES" />

<<< @/snippets/lab-04/server.js#routes {5-6}

In Lab 3 the handler was written **inside** `app.get(...)`. Now it has a name, and the route only says which one to run.

::right::

<FileTag name="CONTROLLERS" />

<<< @/snippets/lab-04/server.js#controllers-get

`handleGetOne` never touches the array, and `getListingById` never sees `req` or `res`.

---
layout: activity
title: Split your server into layers
---

1. Add the section banners to `server.js`: MIDDLEWARE, DATABASE, MODEL, CONTROLLERS, ROUTES, START.
2. Move the `listings` array under DATABASE.
3. Under MODEL, write `getAllListings()` and `getListingById(id)`.
4. Turn your two inline handlers into the controllers `handleGetAll` and `handleGetOne`.
5. Make the routes point at them: `app.get("/api/listings", handleGetAll)`.
6. Test in the browser. **Everything should behave exactly as before.** That is what a refactor is.
7. Commit and push.

---
layout: section
icon: tools
sub: The address bar only sends GET
---

# Testing with an API client

---
layout: media
tools: [postman, thunderclient]
side: right
---

# API clients

Typing a URL in the address bar always sends a `GET`, with no body.

An API client lets you choose **everything**: the method, the URL, the headers, and the body.

- <Tool name="postman" />: a desktop app, the most widely used.
- <Tool name="thunderclient" />: the same idea, inside <Tool name="vscode" />.

Both are fine. Pick one and stick to it.

---
layout: default
---

# Sending a request

![Thunder Client sending GET /api/listings/2: the method, URL, Send button, status and response body are numbered 1 to 5](/img/screenshots/thunder-get.png)

**1** method · **2** URL · **3** Send · **4** status · **5** response body. Postman has the same parts in the same places.

---
layout: activity
title: Your GET routes, again
---

1. Start your server with `npm run dev`.
2. In your API client, send `GET http://localhost:3000/api/listings`.
3. Send `GET http://localhost:3000/api/listings/99`. Find the **status code**. Where is it shown?
4. Try `POST http://localhost:3000/api/listings`. What comes back, and why?

---
layout: section
icon: code
sub: What app.use actually does
---

# Middleware & the request body

---
layout: split
title: A mystery
---

Say we write a `handleCreate` controller and send it a new listing:

<HttpExchange method="POST" url="/api/listings" body='{ "title": "Lake View Penthouse", "pricePerNight": 400 }' status="400 Bad Request" response='{ "error": "title and pricePerNight are required" }' />

::right::

We **did** send a title. Why does the server say it is missing?

Add `console.log(req.body)` to the controller and send it again. It prints:

```text
undefined
```

A body arrives as **raw text**, in pieces over the network. Express does not read it unless you ask it to.

That is a job for **middleware**.

---
layout: default
icon: code
pipeline:
  - { title: Request, code: "POST /api/listings", sub: "The body is still raw text" }
  - { title: Logger, code: "app.use(...)", sub: "Prints the method and URL, calls next()" }
  - { title: Body parser, code: "express.json()", sub: "Turns the JSON text into req.body, calls next()" }
  - { title: Route + controller, code: "handleCreate(req, res)", sub: "Reads req.body and sends the response" }
---

# Middleware

<Flow :steps="$frontmatter.pipeline" />

- **Middleware** is a function that runs on a request **before** it reaches any route.
- `app.use(fn)` adds one. They run **in the order you add them**, for every request.
- Each gets `(req, res, next)`. It can read or change `req`, then call `next()` to pass it on, or answer straight away with `res`.
- Forget to call `next()` and the request hangs forever.

---
layout: code
title: Two pieces of middleware
file: server.js
---

<<< @/snippets/lab-04/server.js#middleware

- The **logger** is ours: every request now shows up in the terminal.
- `express.json()` is built into Express. When a request says its body is JSON, it parses it and puts the result on `req.body`.
- That is all **body parsing** means: turning the text of the body into a JavaScript object.
- Both come **before** the routes, so they run first.

---
layout: section
icon: code
---

# Create, update & delete

---
layout: code
title: "Create: POST"
dense: true
---

<<< @/snippets/lab-04/server.js#controllers-create

- **Never trust the client.** Check the body before handing it to the model.
- Missing fields? `400 Bad Request`, and say what is wrong.
- Created? `201 Created`, and send the new listing back, with the `id` the server gave it.
- `req.body` is `undefined` when no body was sent, so `|| {}` gives us an empty object to check instead.

---
layout: default
---

# Sending a JSON body

![Thunder Client sending POST /api/listings with a JSON body, answered 201 Created: the method, Body tab, JSON tab, body and status are numbered 1 to 5](/img/screenshots/thunder-post-body.png)

**1** `POST` · **2** Body · **3** JSON · **4** the listing · **5** `201 Created`. In Postman: **Body → raw → JSON**. Either way the `Content-Type: application/json` header is set, which is what `express.json()` looks for.

---
layout: code
title: "Update: PUT"
dense: true
---

<<< @/snippets/lab-04/server.js#controllers-update

- The same checks as create, plus a `404` when the `id` does not exist.
- `PUT` **replaces** the whole listing, so send **every** field, not only the one that changed.

<div class="giu-refs__note"><strong>PUT or PATCH?</strong> <code>PATCH</code> updates only the fields you send, so <code>{ "pricePerNight": 500 }</code> would change the price and keep the rest. Many APIs offer both. We stick to <code>PUT</code> here; a <code>PATCH</code> version of <code>updateListing</code> would only copy the fields that were sent.</div>

---
layout: code
title: "Delete: DELETE"
dense: true
---

<<< @/snippets/lab-04/server.js#controllers-delete

- `204 No Content`: it worked, and there is nothing to send back.
- `.end()` finishes the response with no body.
- Deleting something that is not there is a `404`, like everywhere else.

---
layout: default
icon: code
---

# The status codes we use

| Code | Name | When |
|---|---|---|
| `200` | OK | A read or an update worked; the data is in the body |
| `201` | Created | A new listing was made; it is in the body |
| `204` | No Content | A delete worked; there is no body |
| `400` | Bad Request | The client sent something invalid |
| `404` | Not Found | No listing has that `id` |
| `500` | Internal Server Error | Our code crashed. Express sends this for you |

2xx it worked · 4xx the client asked for something wrong · 5xx the server broke

---
layout: activity
title: Complete the API
dense: true
---

1. Add the logger and `express.json()` middleware at the top.
2. Add `addListing`, `updateListing` and `removeListing` to the model, then `handleCreate`, `handleUpdate`, `handleDelete` and their routes.
3. Test each request in order, and predict the status code first:

| Request | Body | Expect |
|---|---|---|
| `GET /api/listings` | — | `200` |
| `POST /api/listings` | `{ "title": "Lake View Penthouse", "pricePerNight": 400 }` | `201` |
| `POST /api/listings` | `{ "title": "No price" }` | `400` |
| `PUT /api/listings/1` | `{ "title": "Nile View Apartment", "pricePerNight": 500 }` | `200` |
| `DELETE /api/listings/1` | — | `204` |
| `DELETE /api/listings/1` | — | `404` |

4. Watch the terminal: the logger prints every request. Commit and push.

---
layout: default
icon: questions
---

# Now restart the server

Stop it with **Ctrl+C**, start it again, and send `GET /api/listings`.

- Where did **Lake View Penthouse** go? Why is listing 1 back?
- The array lives in the server's **memory**. When the process stops, it is gone.
- `--watch` restarts on every save, which is why your test data kept disappearing today.

Real applications keep their data in a **database**. That is next: MongoDB replaces the DATABASE section and the insides of the MODEL functions. The routes and controllers you wrote today stay.

---
layout: media
image: https://gist.github.com/nourgaser/64d7a3eea2a096d51d10f511d2a9151a
side: right
qr: true
---

# The full solution

The complete `server.js`, section by section, as we built it today, with its `package.json`:

[The ebd bn'b solution on GitHub Gist](https://gist.github.com/nourgaser/64d7a3eea2a096d51d10f511d2a9151a)

Compare it with yours. If yours works but looks different, that is fine; ask us if you are unsure why.

---
layout: refs
title: Useful references
---

## Express

- [Express: routing guide](https://expressjs.com/en/guide/routing.html)
- [Express: using middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Express: writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
- [Express API: express.json()](https://expressjs.com/en/5x/api.html#express.json)

## HTTP

- [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
- [MDN: PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PATCH), and how it differs from PUT
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

## API clients

- [Postman: send your first request](https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request/)
- [Thunder Client on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
