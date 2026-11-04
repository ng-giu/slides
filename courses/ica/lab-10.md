---
theme: ../../theme
title: BINF 301 - Lab 10 - APIs, JSON/XML & Course Project Integration
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 10
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 10 — APIs, JSON/XML & Course Project Integration</h1>

---
layout: people
title: Contacts
---

<PersonCard role="Course Instructor" name="Dr. Nourhan Hamdi" email="nourhan.hamdi@giu-uni.de" room="M2.312" />
<PersonCard role="Teaching Assistant" name="Mr. Nour Gaser" email="nour.aly@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Ms. Menna Khalid" email="mennatallah.khaled@giu-uni.de" room="M2.437" />
<PersonCard role="Teaching Assistant" name="Ms. Shorouk Salah" email="shorouk.metwally@giu-uni.de" room="M2.437" />
<PersonCard role="Teaching Assistant" name="Mr. Mahmoud" email="mahmoud.amer@giu-uni.de" room="M2.506" />
<PersonCard role="Teaching Assistant" name="Mr. Younes Zied" email="younes.zied@giu-uni.de" room="M2.506" />

---
layout: media
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
dense: true
---

# Lab agenda

| Duration | Topic |
|---|---|
| 10 min | **1. Web APIs & Data Formats:** How APIs work and reading/writing **JSON vs. XML** |
| 10 min | **2. Fetching Data (`fetch`):** Asynchronous JS, `async / await` vs. `.then()` |
| 10 min | **3. API + DOM Pipeline:** Turning a live JSON response into visible HTML elements |
| 15 min | **4. Code Walkthrough:** Build the **Live Recipe API Widget** (`ica-lab-10`) in <Tool name="vscode" /> |
| 20 min | **5. In-Lab Activity & PD3 Guide:** Build a CatFact/Live API card & plan your **Course Project PD3** API |

---
layout: section
icon: intro
sub: How browsers request live data from servers and represent it in JSON and XML
---

# 01 — Web APIs & Data Formats (JSON vs. XML)

---
layout: default
icon: intro
dense: true
---

# What is a Web API?

An **API (Application Programming Interface)** is a server endpoint that sends live data (weather, exchange rates, menus) when your browser requests it over HTTP:

<HttpExchange method="GET" url="https://dummyjson.com/recipes/1"
  status="200 OK" response='{ "id": 1, "name": "Margherita Pizza", "rating": 4.6 }' />

- **Analogy:** Your **Browser (Customer)** orders from the **API (Waiter)**, which fetches data from the **Server (Kitchen)** and returns **JSON**.
- **Course Project PD3:** Every team website must include **at least one live JS API component**!

---
layout: split
title: "Representing data: JSON vs. XML"
dense: true
class: giu-small
---

Web services exchange structured data as plain text using two standard formats (**both included on the Final Exam**):

- **JSON (JavaScript Object Notation):** Uses `{ "key": value }` pairs (double-quoted keys) and `[...]` arrays. Native to JavaScript (`res.json()`).
- **XML (eXtensible Markup Language):** Uses custom opening and closing tags (`<name>...</name>`) nested inside one root tag (`<restaurant>`).

::right::

<FileTag name="restaurant.json (JSON format)" />

<<< @/snippets/lab-10/restaurant.json

<FileTag name="restaurant.xml (XML format)" />

<<< @/snippets/lab-10/restaurant.xml

---
layout: section
icon: code
sub: Waiting for network responses without freezing the browser using async / await
---

# 02 — Asynchronous JS & Fetch API

---
layout: split
title: "Fetching APIs: .then() vs. async / await"
dense: true
class: giu-small
---

Fetching data over the internet takes time. JavaScript is **asynchronous (non-blocking)** so the browser does not freeze while waiting:

1. **`.then()` chaining** — passes callbacks to each step.
2. **`async / await` (modern standard)** — marks the function `async` so `await` pauses cleanly:
   - **`await fetch(url)`** waits for the HTTP response.
   - **`await res.json()`** parses the JSON into a JS object.

::right::

<FileTag name="fetch-concepts.js (.then style)" />

<<< @/snippets/lab-10/fetch-concepts.js#then

<FileTag name="fetch-concepts.js (async/await style)" />

<<< @/snippets/lab-10/fetch-concepts.js#async

---
layout: default
icon: code
dense: true
---

# Comparing `.then()` and `async / await`

| Feature | `.then()` Chaining | `async / await` (Recommended) |
|---|---|---|
| **Readability** | Harder to read when chaining multiple `.then()` calls | Very clean—reads top-to-bottom like normal synchronous code |
| **Syntax Type** | Uses nested callback functions (`res => ...`) | Uses `await` inside an `async function` |
| **Error Handling** | Uses `.catch(err => ...)` at the end of the chain | Uses standard `try { ... } catch (err) { ... }` blocks |
| **Where It Runs** | Works at the top level or inside any function | `await` **must** be placed inside a function marked `async` |
| **Industry Usage** | Older Promise style; good to recognize when reading code | Preferred modern standard for all multi-step API calls |

---
layout: section
icon: lifecycle
sub: Combining Lab 9 DOM manipulation with Lab 10 Fetch to display live API data on the page
---

# 03 — Connecting APIs to the DOM

---
layout: split
title: "The 5-step API-to-DOM pipeline"
dense: true
class: giu-small
---

Every live API feature on a webpage follows the exact same **5 steps**:

1. **Select DOM elements** (`getElementById`).
2. **Declare an `async function`** (`async function getDog()`).
3. **Fetch the URL** (`const res = await fetch("...")`).
4. **Convert to a JS object** (`const data = await res.json()`).
5. **Copy a JSON property into the DOM** (`dogImg.src = data.message`).

<div class="giu-refs__note">Always check what keys the API returns! The Dog API returns <code>{ "message": "https://...jpg" }</code>, so we read <code>data.message</code>.</div>

::right::

<FileTag name="fetch-concepts.js (API + DOM)" />

<<< @/snippets/lab-10/fetch-concepts.js#dog {6,7-9,10,11,14}

---
layout: section
icon: activity
sub: Step-by-step build of a Live Recipe API Widget in VS Code
---

# 04 — Code Walkthrough: ica-lab-10

---
layout: split
title: "The plan: 3 files in 4 steps"
dense: true
---

Create a new folder named **`ica-lab-10`** and open it in <Tool name="vscode" /> (**File → Open Folder...**):

1. **Step 1 (`style.css`)** — Style the mobile frame, `.api-card`, `.dish-photo`, and button.
2. **Step 2 (`index.html`)** — Create the card with `#dish-img`, `#dish-name`, `#dish-info`, and `#load-btn`, plus `<script src="api.js"></script>`.
3. **Step 3 (`api.js` top)** — Select the 4 DOM elements with `document.getElementById()`.
4. **Step 4 (`api.js` bottom)** — Write `async function loadRandomDish()` using `fetch()` and wire it to `#load-btn`.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
  <div class="font-bold text-slate-900">ica-lab-10/</div>
  <div class="pl-4 space-y-1.5 text-[0.72rem]">
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── style.css</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Step 1 — API card styling</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Step 2 — Card &amp; button IDs</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-amber-200">
      <span class="font-bold text-amber-800">└── api.js</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Steps 3–4 — <code>fetch()</code> + DOM</span>
    </div>
  </div>
</div>

---
layout: split
title: "Step 1 of 4: style.css"
wideRight: true
dense: true
class: giu-small
---

1. In <Tool name="vscode" /> Explorer (`ICA-LAB-10`), click **New File** and name it `style.css`.
2. Paste the CSS rules on the right and press `Ctrl + S` to **save**.
3. `.dish-photo` uses `object-fit: cover` so any image fetched from the API fits cleanly inside the card.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-10/style.css

---
layout: split
title: "Step 2 of 4: index.html with card & button IDs"
wideRight: true
dense: true
class: giu-small
---

1. Create `index.html` next to `style.css`, paste the HTML on the right, and press `Ctrl + S` to **save**.
2. Notice the 4 IDs that `api.js` will select: `dish-img`, `dish-name`, `dish-info`, and `load-btn`.
3. Line 16 loads `<script src="api.js"></script>` right before `</body>`.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-10/index.html {10-12,14,16}

---
layout: split
title: "Step 3 of 4: select DOM elements (api.js top)"
dense: true
class: giu-small
---

1. Create `api.js` next to `index.html`.
2. Add the **top section** on the right (`getElementById` for the image, heading, info paragraph, and button) and press `Ctrl + S`.

::right::

<FileTag name="api.js (top)" state="new" />

<<< @/snippets/lab-10/api.js#select

---
layout: split
title: "Step 4 of 4: async fetch & DOM update (api.js bottom)"
dense: true
class: giu-small
---

1. At the **bottom** of `api.js`, add `loadRandomDish()` and the event listener on the right.
2. Look at what happens inside `loadRandomDish()`:
   - **Line 2** shows `"Loading dish..."` immediately so the user never sees a frozen screen.
   - **Lines 5–8** fetch `https://dummyjson.com/recipes/${id}` and parse the JSON with `await res.json()`.
   - **Lines 9–12** copy `data.image`, `data.name`, `data.cuisine`, and `data.rating` into the DOM!
3. Press `Ctrl + S` and open `index.html` with **Live Server**.

::right::

<FileTag name="api.js (bottom)" state="edit" />

<<< @/snippets/lab-10/api.js#fetch {1-2,5-8,9-12,17-18}

---
layout: activity
title: "In-Lab Activity: Build the CatFact API Card & Push to GitHub"
label: "20-minute hands-on practice"
dense: true
---

Add a second live API section to `ica-lab-10` that fetches random facts from **`https://catfact.ninja/fact`** (`{ "fact": "..." }`):

1. **In `index.html` (below `#load-btn`):** Add `<h2>Daily Cat Fact</h2>`, `<p id="factText">Click to load a fact.</p>`, and `<button id="factBtn" class="btn">Get Cat Fact</button>`.
2. **In `api.js` (at the bottom):** Select `#factText` and `#factBtn`. Write `async function getCatFact()` that runs `const res = await fetch("https://catfact.ninja/fact")`, `const data = await res.json()`, and sets `factText.textContent = data.fact`. Wire `factBtn.addEventListener("click", getCatFact)`.
3. **Commit & push to GitHub:** Run `git init`, `git add .`, `git commit -m "Complete Lab 10 live APIs"`, and push to a public repository named **`ica-lab-10`**.

---
layout: default
icon: assignment
class: giu-fix
dense: true
---

# Course Project Deliverable 3 (PD3): Live API Guide

In **Course Project Deliverable 3 (PD3 — 20%)**, your team website must include **at least one live JavaScript API component**. Pick any of these **4 free, no-key APIs** and use today's `fetch()` pattern:

| Domain | Free Public API Endpoint (`GET`) | JSON Property (`data...`) |
|---|---|---|
| **Weather / Travel** | [`api.open-meteo.com/v1/forecast?...`](https://api.open-meteo.com/v1/forecast?latitude=30.04&longitude=31.24&current_weather=true) | `data.current_weather.temperature` |
| **Currency / Finance** | [`open.er-api.com/v6/latest/USD`](https://open.er-api.com/v6/latest/USD) | `data.rates.EGP` (USD ➔ EGP rate) |
| **Food / E-Commerce** | [`dummyjson.com/recipes/1`](https://dummyjson.com/recipes/1) | `data.name`, `data.image`, `data.rating` |
| **Quotes / Facts** | [`catfact.ninja/fact`](https://catfact.ninja/fact) | `data.fact` |

<div class="giu-refs__note"><strong>PD3 &amp; AI Policy:</strong> Every member must explain their HTML, CSS, and JS during the Final Presentation, and document any AI prompts used in the Final Report Appendix.</div>

---
layout: section
icon: tools
sub: Fixing async/await syntax errors, [object Promise], and undefined JSON fields
---

# Troubleshooting

---
layout: default
routeAlias: fix-api
class: giu-fix
dense: true
---

# Fetch & API errors

| Symptom / Exact Console error | Cause & fix |
|---|---|
| `Uncaught SyntaxError: await is only valid in async functions` | You used `await fetch(...)` inside a normal `function`. Add the keyword **`async`** before `function` (`async function loadRandomDish()`). |
| Page displays `[object Promise]` instead of text | You forgot the **`await`** keyword before `res.json()`. Write `const data = await res.json();`. |
| Page displays `undefined` instead of the API value | The property name does not match the JSON structure. Add `console.log(data);` right after `await res.json()` and check the exact key names in the DevTools Console. |
| `TypeError: Failed to fetch` | Check your internet connection and verify the API URL starts with `https://` and has no typos. |

---
layout: refs
title: References & useful links
dense: true
---

## Fetch API, Async/Await & JSON (MDN)

- [MDN — Fetching data from the server (`fetch`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests) — complete guide to `fetch()` and `async/await`
- [MDN — Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) — JSON syntax rules and `response.json()`
- [MDN — XML Introduction](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) — XML tag structure vs. JSON objects

## Free No-Key APIs for Course Project PD3

- [DummyJSON Docs](https://dummyjson.com/docs) — free JSON endpoints for recipes, products, quotes, and users
- [Open-Meteo Weather API](https://open-meteo.com/) — live weather forecasts with no API key required

<div class="giu-refs__note">Final Exam reminder: Tutorial 9 (DOM) and Tutorial 10 (APIs, Fetch &amp; JSON/XML) are included on the Final Exam—make sure you can read and trace every snippet in these two decks!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Best of luck with Course Project Deliverable 3, the Poster Conference, and the Final Exam!
---

# Questions?
