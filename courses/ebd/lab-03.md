---
theme: ../../theme
title: BINF 503 - Lab 3 - APIs, npm & Express
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 3
lineNumbers: false
layout: cover
---

# Electronic Business Development — Lab 3 — APIs, npm & Express

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
| 10 min | Recap: you already used an API |
| 20 min | APIs, REST & HTTP |
| 20 min | Starting a project with npm |
| 15 min | Your first Express server |
| 25 min | Serving listings with GET routes |
| — | Next lab: the full API |

---
layout: default
icon: recap
---

# You already used an API

In Lab 2 you wrote this:

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => console.log(user.name));
```

- Your code sent a **request** over the internet to someone else's server.
- That server sent back a **response**, with data in **JSON**.
- You never saw its code. You only knew **which URL to ask**.

Today we build the other side: **our own server**, answering requests of our own.

---
layout: default
icon: intro
---

# Meet ebd bn'b

Over the semester we build **ebd bn'b**, a simplified Airbnb: people list rental properties, and guests browse and book them.

It grows one layer at a time:

| Labs | What we add |
|---|---|
| Today and next lab | An **API** with Express that serves listings |
| Later | A **MongoDB** database, so listings survive a restart |
| Later | A **React** front-end that shows them to guests |

Every lab builds on the one before it. Keep your project, commit it, push it.

---
layout: section
icon: intro
---

# APIs, REST & HTTP

---
layout: default
---

# What is an API?

<style>
/* A diagram the TA talks through: let it have the whole slide */
.slidev-layout p > img { max-height: 22rem; }
</style>

![Other applications call named operations such as createUser and cancelOrder on an application's API layer, which hides the business logic, cache and database behind it](/img/diagrams/api-architecture.png)

---
layout: default
icon: intro
---

# What is a REST API?

**RE**presentational **S**tate **T**ransfer: a set of conventions most web APIs follow.

<HttpExchange />

- Every **resource** has a URL: `/api/listings` is all listings, `/api/listings/2` is one.
- The **HTTP method** says what to do with it: `GET`, `POST`, `PUT`, `DELETE`.
- Data travels as **JSON**, and each request stands on its own.

---
layout: default
icon: intro
---

# Anatomy of a request

<HttpExchange method="GET" url="/api/listings/2" status="200 OK" response='{ "id": 2, "title": "Beach House", "pricePerNight": 140 }' />

| Part | What it is |
|---|---|
| Method | What you want done: `GET` reads, `POST` creates, `PUT` updates, `DELETE` removes |
| URL | Which resource. `:id`-style parts pick one item |
| Body | Data you send along. Only for `POST` and `PUT`; a `GET` has none |
| Status | How it went: `200` fine, `404` not found, `500` the server broke |

---
layout: default
icon: intro
---

# The ebd bn'b API

The same URL with a different method is a different action.

| Method | URL | Does |
|---|---|---|
| `GET` | `/api/listings` | Return all listings |
| `GET` | `/api/listings/:id` | Return one listing, or `404` if it does not exist |
| `POST` | `/api/listings` | Add a new listing |
| `PUT` | `/api/listings/:id` | Update a listing |
| `DELETE` | `/api/listings/:id` | Remove a listing |

**Today:** the two `GET` routes. **Next lab:** the other three.

<div class="giu-refs__note">Status codes group by their first digit: 2xx it worked, 4xx the client asked for something wrong, 5xx the server broke.</div>

---
layout: section
icon: tools
---

# Starting a project with npm

---
layout: media
tools: [npm]
side: right
---

# npm

The **Node Package Manager** is installed with <Tool name="nodejs" />, so you already have it.

It does two jobs:

1. **Describes your project** in a file called `package.json`: its name, how to run it, and what it depends on.
2. **Downloads other people's code** (packages) from [npmjs.com](https://www.npmjs.com), the world's largest code registry.

We use it to install our first package: <Tool name="express" />.

---
layout: split
title: npm init
wideRight: true
---

Inside an empty project folder:

```bash
npm init -y
```

`-y` accepts every default. It creates `package.json`.

Then edit two things by hand:

1. Set `"type"` to `"module"`, so `import` works.
2. Add a `"dev"` script that restarts the server whenever you save.

Run it with `npm run dev`.

::right::

<<< @/snippets/lab-03/package.json {4,8}

<div class="giu-refs__note">The <code>dependencies</code> block appears on its own when you install Express. You never write it by hand.</div>

---
layout: split
title: npm install
wideRight: true
---

```bash
npm install express
```

Three things change. Look at each one.

Anyone who clones your repo gets `node_modules` back with a single `npm install`, so it never goes into git.

::right::

| File | What it is | Commit? |
|---|---|---|
| `package.json` | Gains `"express"` under `dependencies` | Yes |
| `package-lock.json` | The exact version of every package installed | Yes |
| `node_modules/` | The downloaded code: Express and the ~60 packages it needs | **No** |
| `.gitignore` | You create it, with one line: `node_modules/` | Yes |

---
layout: activity
title: Set up ebd bn'b
---

1. Create a folder called `ebd-bnb` and open it in <Tool name="vscode" />.
2. Open a terminal and run `npm init -y`. Open `package.json` and read it.
3. Set `"type": "module"` and add the `"dev"` script from the previous slide.
4. Run `npm install express`. What appeared? What changed in `package.json`?
5. Create `.gitignore` containing `node_modules/`.
6. Make it a <Tool name="git" /> repository, commit, and push it to a new <Tool name="github" /> repo. Check on GitHub that `node_modules` is **not** there.

---
layout: section
icon: code
---

# Your first Express server

---
layout: media
tools: [nodejs, express]
side: right
---

# Node.js + Express

<Tool name="nodejs" /> runs JavaScript outside the browser, which is what lets it be a server.

It can already handle web requests on its own, but the code is long and fiddly.

<Tool name="express" /> is a small framework on top of Node that makes the common parts short:

- **Routes:** "when this method and URL arrive, run this function"
- **Responses:** send text or JSON in one line
- **Middleware:** more on that next lab

---
layout: code
title: Hello, world
file: server.js
---

<<< @/snippets/lab-03/hello.js

- `app.get(path, handler)`: when a `GET` request for `path` arrives, run `handler`.
- `req` is the **request** that came in; `res` is the **response** you send back.
- `app.listen(3000)` starts the server on port 3000 of your machine: `http://localhost:3000`.

---
layout: split
title: Run it
wideRight: true
---

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The server keeps running until you press **Ctrl+C** in its terminal.

`--watch` restarts it every time you save, so edit, save, and refresh.

::right::

<Activity label="If it does not start">

| You see | Fix |
|---|---|
| `Cannot use import statement outside a module` | `"type": "module"` is missing from `package.json` |
| `Cannot find package 'express'` | Run `npm install express` in this folder |
| `EADDRINUSE: address already in use :::3000` | Another server is still running; stop it with **Ctrl+C** |
| The browser can't connect | Is the terminal still running? Did it crash? Read the red text |

</Activity>

---
layout: activity
title: Hello, ebd bn'b
---

1. Create `server.js` with the code from two slides back.
2. Start it with `npm run dev` and open `http://localhost:3000`.
3. Change the message to `Welcome to ebd bn'b`, save, and refresh. You never restarted anything.
4. Visit `http://localhost:3000/nothing-here`. What does Express send back when no route matches?
5. Commit and push.

---
layout: section
icon: code
---

# Serving listings

---
layout: code
title: A fake database
file: server.js
---

<<< @/snippets/lab-03/server.js#data

- For now, our listings live in a **plain array**, in the server's memory.
- Each listing is an object with an `id`, so we can find it again.
- A real database replaces this array in a few labs. Everything else barely changes.

---
layout: code
title: Two GET routes
file: server.js
dense: true
---

<<< @/snippets/lab-03/server.js#get-routes {5-13}

- `:id` is a **route parameter**: for `/api/listings/2`, `req.params.id` is `"2"`, a **string**, so `Number(...)` converts it.
- `res.status(404)` sets the status code; `return` stops the function so we never respond twice.

---
layout: activity
title: Serve your listings
---

1. Add a `listings` array with **three** properties of your own: `id`, `title`, `pricePerNight`.
2. Add `GET /api/listings` and `GET /api/listings/:id`.
3. Test in the browser, and predict each answer before you press Enter:
   - `http://localhost:3000/api/listings`
   - `http://localhost:3000/api/listings/2`
   - `http://localhost:3000/api/listings/99`
   - `http://localhost:3000/api/listings/abc`
4. Press **F12**, open the **Network** tab and reload. Find the method and the status code of each request.
5. Commit and push.

---
layout: section
icon: assignment
sub: We build all of it together next lab. Try it before then if you like.
---

# Next lab: the full API

---
layout: split
title: The full question
dense: true
---

<<< @/snippets/lab-04/starter.js#top txt

::right::

<<< @/snippets/lab-04/starter.js#bottom txt

---
layout: default
icon: tools
---

# Before next lab

**Install an API client.** The address bar can only send `GET`, so for `POST`, `PUT` and `DELETE` we need a tool that can send any method. Pick one:

- <Tool name="postman" />: a desktop app. [postman.com/downloads](https://www.postman.com/downloads/)
- <Tool name="thunderclient" />: an extension inside VS Code. Search "Thunder Client" in the Extensions panel.

**Bring your `ebd-bnb` project**, working and pushed. Next lab starts from it.

<div class="giu-refs__note">Model, controllers, routes: the section names in the question are explained properly next lab. For now, read them as "the part that touches the data", "the part that decides what to answer", and "the part that maps URLs".</div>

---
layout: refs
title: Useful references
---

## Express

- [Express: official documentation](https://expressjs.com/)
- [Express: Hello world](https://expressjs.com/en/starter/hello-world.html)
- [Express: basic routing](https://expressjs.com/en/starter/basic-routing.html)
- [Introduction to Express (GeeksforGeeks)](https://www.geeksforgeeks.org/web-tech/introduction-to-express/)
- [Introductory video to Express](https://www.youtube.com/watch?v=-MTSQjw5DrM)

## HTTP & npm

- [MDN: an overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [npm docs: package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)

<div class="giu-refs__note">Nothing on this slide is required.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
