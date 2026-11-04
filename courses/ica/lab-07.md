---
theme: ../../theme
title: BINF 301 - Lab 7 - Multi-File & Multi-Page Web Practice
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 7
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 7 — Multi-File & Multi-Page Web Practice</h1>

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
| 5 min | **Overview (Graded In-Lab Assignment):** 3-screen app & full navigation |
| 15 min | **Screen 1 HTML (`index.html`):** Boilerplate, emoji codes & Home links |
| 15 min | **Screen 1 CSS (`style.css`):** Selectors, properties & values for Home |
| 15 min | **Screen 2 (`burger.html`):** Shortcut (`!`), back button & Burger menu |
| 10 min | **Screen 3 (`pizza.html`):** Copy `burger.html`, swap content & test nav |
| 10 min | **Git & GitHub (Submission):** Pushing your graded 3-screen project |

---
layout: section
icon: assignment
sub: Today's 3-screen build is a graded in-lab assignment — complete and push to GitHub in class
---

# 01 — Graded In-Lab Assignment

---
layout: default
icon: assignment
dense: true
journey:
  - { title: "1. Screen 1 HTML", code: "index.html", sub: "Home & nav links" }
  - { title: "2. Screen 1 CSS", code: "style.css", sub: "Style Home screen" }
  - { title: "3. Screen 2", code: "burger.html", sub: "Burger menu & back" }
  - { title: "4. Screen 3", code: "pizza.html", sub: "Copy & swap text" }
  - { title: "5. Git & GitHub", code: "git push", sub: "Graded submission" }
---

# Putting your HTML, CSS, VS Code & Git skills together

There are **no new concepts** today—you already know every tag, CSS rule, and Git command needed:

<Flow :steps="$frontmatter.journey" />

<div class="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-xs">
  <div class="text-amber-950">
    <strong class="text-amber-900">Graded In-Lab Assignment:</strong> Today's lab is an <strong>in-lab assignment and will be graded</strong>. Complete all three screens, verify every navigation and back button works, and push <code>ica-lab-07</code> to GitHub before leaving!
  </div>
  <span class="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-bold text-[0.65rem] uppercase tracking-wider shrink-0 ml-3">Graded in Lab</span>
</div>

---
layout: default
icon: intro
dense: true
class: giu-target-screens
---

<style>
.giu-target-screens h1 { max-width: none !important; font-size: 1.52rem !important; margin-bottom: 0.4rem !important; }
.giu-target-screens p { margin-bottom: 0.45rem !important; font-size: 0.76rem !important; }
.giu-target-screens img { max-height: 11.8rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.65rem; border: 1px solid #cbd5e1; }
</style>

# The three-screen Talabat app you will build today

You will build **three connected screens** inside `ica-lab-07/` where **all screens are navigable from the Home screen** and **all back buttons return to Home**:

<div class="grid grid-cols-3 gap-3.5 mt-1 text-center text-xs">
  <div class="p-2 rounded-xl border border-blue-200 bg-blue-50/40">
    <div class="font-bold text-blue-900 mb-1 text-[0.72rem]">Screen 1: Home Hub (<code>index.html</code>)</div>
    <img src="/img/lab-07/step-5.png" alt="Screen 1 Home Page" />
    <div class="mt-1 text-[0.62rem] text-slate-600">Links to <strong>both</strong> <code>burger.html</code> &amp; <code>pizza.html</code></div>
  </div>
  <div class="p-2 rounded-xl border border-teal-200 bg-teal-50/40">
    <div class="font-bold text-teal-900 mb-1 text-[0.72rem]">Screen 2: Burger Menu (<code>burger.html</code>)</div>
    <img src="/img/lab-07/step-8.png" alt="Screen 2 Burger Menu" />
    <div class="mt-1 text-[0.62rem] text-slate-600"><strong>&larr; Back to Talabat Home</strong> opens <code>index.html</code></div>
  </div>
  <div class="p-2 rounded-xl border border-amber-200 bg-amber-50/40">
    <div class="font-bold text-amber-900 mb-1 text-[0.72rem]">Screen 3: Pizza Menu (<code>pizza.html</code>)</div>
    <img src="/img/lab-07/step-10.png" alt="Screen 3 Pizza Menu" />
    <div class="mt-1 text-[0.62rem] text-slate-600"><strong>&larr; Back to Talabat Home</strong> opens <code>index.html</code></div>
  </div>
</div>

---
layout: split
title: "Multi-page navigation: Home hub & working back buttons"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.48rem !important; margin-bottom: 0.5rem !important; }
.giu-step-1 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.3rem !important; margin-bottom: 0.4rem !important; }
.giu-step-1 li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-bottom: 0.25rem !important; }
</style>

In a multi-page web app, pages are connected by **anchor tags (`<a href="...">`)**. Your navigation architecture must obey two rules:

1. **Every screen is navigable from the Home screen (`index.html`):**
   - `index.html` acts as the central **Home Hub**.
   - It has two `<a class="btn">` buttons: `href="burger.html"` (Screen 2) and `href="pizza.html"` (Screen 3).
2. **Every inner screen has a working Back button (`href="index.html"`):**
   - Users must never get trapped on a dead-end inner screen.
   - Both `burger.html` and `pizza.html` start their header with `<a class="back" href="index.html">&larr; Back to Talabat Home</a>`.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
  <div class="font-bold text-slate-900">Complete 3-Screen Navigation Map</div>
  <div class="p-2 rounded-lg bg-white border border-blue-200 space-y-1">
    <div class="font-bold text-blue-900">1. Forward Navigation (from <code>index.html</code>)</div>
    <div class="font-mono text-[0.65rem] text-slate-700"><code>&lt;a class="btn" href="burger.html"&gt;</code> ➔ opens <strong>Screen 2</strong></div>
    <div class="font-mono text-[0.65rem] text-slate-700"><code>&lt;a class="btn" href="pizza.html"&gt;</code> ➔ opens <strong>Screen 3</strong></div>
  </div>
  <div class="p-2 rounded-lg bg-white border border-teal-200 space-y-1">
    <div class="font-bold text-teal-900">2. Back Navigation (from <code>burger.html</code> &amp; <code>pizza.html</code>)</div>
    <div class="font-mono text-[0.65rem] text-slate-700">In <code>burger.html</code>: <code>&lt;a class="back" href="index.html"&gt;</code> ➔ returns <strong>Home</strong></div>
    <div class="font-mono text-[0.65rem] text-slate-700">In <code>pizza.html</code>: <code>&lt;a class="back" href="index.html"&gt;</code> ➔ returns <strong>Home</strong></div>
  </div>
  <div class="p-2 rounded-lg bg-amber-50 border border-amber-200 text-[0.65rem] text-amber-950">
    <strong>Grading Check:</strong> Your TA will click both restaurant buttons on <code>index.html</code> and test the <strong>&larr; Back to Talabat Home</strong> button on both inner screens!
  </div>
</div>

---
layout: split
title: "Step 1 of 15: set up your project folder in VS Code"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.48rem !important; margin-bottom: 0.5rem !important; }
.giu-step-1 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.3rem !important; margin-bottom: 0.4rem !important; }
.giu-step-1 li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-bottom: 0.25rem !important; }
</style>

Start by creating a clean project folder and your **four** empty files in <Tool name="vscode" />:

1. Create a new empty folder named `ica-lab-07` on your Desktop (or Documents).
2. Open <Tool name="vscode" /> and click **File → Open Folder...** to open `ica-lab-07`.
3. In the **Explorer** sidebar on the left, click the **New File** icon four times to create:
   - `index.html` — Screen 1 (Talabat Home Hub)
   - `burger.html` — Screen 2 (Burger Republic Menu)
   - `pizza.html` — Screen 3 (Napoli Woodfire Pizza Menu)
   - `style.css` — Shared stylesheet for all three screens

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-1.5">
  <div class="font-bold text-slate-900">ica-lab-07/</div>
  <div class="pl-4 space-y-1.5 text-[0.7rem]">
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.63rem] text-slate-600">Screen 1: Home Hub (links to burger &amp; pizza)</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── burger.html</span>
      <span class="font-sans text-[0.63rem] text-slate-600">Screen 2: Burger menu (back to index.html)</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-amber-200">
      <span class="font-bold text-amber-800">├── pizza.html</span>
      <span class="font-sans text-[0.63rem] text-slate-600">Screen 3: Pizza menu (back to index.html)</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-purple-200">
      <span class="font-bold text-purple-800">└── style.css</span>
      <span class="font-sans text-[0.63rem] text-slate-600">One shared CSS file for all 3 screens</span>
    </div>
  </div>
</div>

<div class="giu-refs__note">All four files must sit side-by-side in the root of <code>ica-lab-07/</code> so relative links (<code>href="burger.html"</code>, <code>href="pizza.html"</code>, <code>href="index.html"</code>) work immediately.</div>

---
layout: section
icon: code
sub: "Phase 1 — Build the complete HTML skeleton of Screen 1 inside index.html"
---

# 02 — Screen 1: HTML Skeleton

---
layout: split
title: "Step 2 of 15: write the HTML boilerplate (index.html)"
wideRight: true
dense: true
class: giu-boilerplate-s2
---

<style>
.giu-boilerplate-s2 h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-boilerplate-s2 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-boilerplate-s2 li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.3rem !important; }
</style>

<FileTag name="index.html" state="edit" />

For **Screen 1 (`index.html`)**, write the HTML boilerplate **by hand** to practice the core document structure from Lab 5 (you will use the shortcut on Screen 2!):

1. Click inside your empty `index.html` file.
2. On line 1, type **`<!DOCTYPE html>`** to declare an HTML5 document.
3. Open and close the root **`<html>...</html>`** tag.
4. Inside `<html>`, add **`<head>`** containing **`<title>Talabat - Home</title>`**.
5. Below `</head>`, add **`<body>...</body>`** where all visible elements will go, and press `Ctrl + S` to save.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
  <div class="font-bold text-slate-900">Type this boilerplate in <code>index.html</code></div>
  <div class="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[0.65rem] leading-snug">
    <div>&lt;!DOCTYPE html&gt;</div>
    <div>&lt;html&gt;</div>
    <div>&lt;head&gt;</div>
    <div>&nbsp;&nbsp;&lt;title&gt;Talabat - Home&lt;/title&gt;</div>
    <div>&lt;/head&gt;</div>
    <div>&lt;body&gt;</div>
    <div class="text-slate-400">&nbsp;&nbsp;&lt;!<span>-</span><span>-</span> Screen 1 content goes here <span>-</span><span>-</span>&gt;</div>
    <div>&lt;/body&gt;</div>
    <div>&lt;/html&gt;</div>
  </div>
  <div class="space-y-1.5 text-[0.65rem] text-slate-700">
    <div class="p-1.5 rounded bg-white border border-slate-200">
      <strong><code>&lt;!DOCTYPE html&gt;</code> &amp; <code>&lt;html&gt;</code>:</strong> Declares HTML5 and wraps the entire page.
    </div>
    <div class="p-1.5 rounded bg-white border border-blue-200">
      <strong><code>&lt;head&gt;...&lt;/head&gt;</code>:</strong> Holds page metadata (<code>&lt;title&gt;</code> and our CSS <code>&lt;link&gt;</code>).
    </div>
    <div class="p-1.5 rounded bg-white border border-teal-200">
      <strong><code>&lt;body&gt;...&lt;/body&gt;</code>:</strong> Holds all visible elements rendered in the browser.
    </div>
  </div>
</div>

---
layout: split
title: "Step 3 of 15: Screen 1 wrapper & header"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.32rem !important; margin-bottom: 0.4rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-html-step img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="index.html (inside <body>)" state="edit" />

We will write **HTML emoji codes** (`&#...;`) in our `.html` file—the browser decodes and renders them as emojis on the DOM:

1. Inside the `<body>` tag, create one main `<div class="card">` tag that wraps the entire screen (do **not** link `style.css` yet so you can inspect the raw HTML first).
2. Inside the `<div class="card">` tag, create a `<div class="header">` tag.
3. Inside the `<div class="header">` tag, add three elements:
   - An `<h1>` tag with text `&#128757; Talabat` (`&#128757;` renders as 🛵 on the DOM).
   - A `<p>` tag with text `&#128205; Delivering to: New Cairo, 5th Settlement` (`&#128205;` renders as 📍).
   - An `<input>` tag with `type="text"` and `placeholder="Search for food, groceries, coffee..."`.

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 3</div>

![Step 3 browser snapshot](/img/lab-07/step-2a.png)

---
layout: split
title: "Step 4 of 15: Screen 1 categories & promo"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.32rem !important; margin-bottom: 0.4rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-html-step img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="index.html (inside <div class=&quot;card&quot;>)" state="edit" />

Below the `<div class="header">` tag (still inside the `<div class="card">` tag), add the category pills and promo box using emoji codes:

1. Create a `<div class="categories">` tag.
2. Inside the `<div class="categories">` tag, add four `<div class="cat">` tags:
   - First `<div class="cat">`: `&#127828; Food` (renders 🍔 Food)
   - Second `<div class="cat">`: `&#128722; Mart` (renders 🛒 Mart)
   - Third `<div class="cat">`: `&#9749; Coffee` (renders ☕ Coffee)
   - Fourth `<div class="cat">`: `&#128138; Health` (renders 💊 Health)
3. Below the `<div class="categories">` tag, create a `<div class="promo">` tag containing:
   - An `<h2>` tag with `&#128293; 50% OFF Your First Order` (renders 🔥)
   - A `<p>` tag with `Use code WELCOME50 at checkout today!`

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 4</div>

![Step 4 browser snapshot](/img/lab-07/step-2.png)

---
layout: split
title: "Step 5 of 15: Screen 1 restaurants & links to all screens"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.32rem !important; margin-bottom: 0.4rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-html-step img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="index.html (inside <div class=&quot;card&quot;>)" state="edit" />

Below `<div class="promo">`, add the two restaurant cards and **two `<a class="btn">` navigation links** so **all screens are navigable from the Home screen**:

1. First `<div class="item">`:
   - `<h2>` with `&#127828; Burger Republic` (🍔)
   - `<p>` with `&#11088; 4.8 &bull; Burgers &amp; Fries &bull; 25 mins &bull; Free Delivery`
2. Second `<div class="item">`:
   - `<h2>` with `&#127829; Napoli Woodfire Pizza` (🍕)
   - `<p>` with `&#11088; 4.6 &bull; Italian Pizza &bull; 35 mins &bull; 15 EGP Delivery`
3. At the bottom of `<div class="card">`, add **both** page navigation links:
   - `<a class="btn" href="burger.html">Open Burger Republic Menu &rarr;</a>` (opens Screen 2)
   - `<a class="btn" href="pizza.html">Open Napoli Pizza Menu &rarr;</a>` (opens Screen 3)

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 5</div>

![Step 5 browser snapshot](/img/lab-07/step-3.png)

---
layout: section
icon: code
sub: "Phase 2 — Style Screen 1 in style.css using CSS Selectors, Properties, and Values"
---

# 03 — Screen 1: CSS Styling

---
layout: split
title: "Step 6 of 15: link style.css & style body and .card"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="index.html + style.css" state="edit" />

Inside `<head>` of `index.html`, add `<link rel="stylesheet" href="style.css">`. Then open `style.css` and style the page backdrop (`body`) and outer phone frame (`.card`):

| Selector | Property | Value |
|---|---|---|
| `body` | `font-family` / `background-color` | `sans-serif` / `#e2e8f0` |
| `body` | `display` / `justify-content` | `flex` / `center` |
| `body` | `padding` / `margin` | `24px` / `0` |
| `.card` | `width` / `background-color` | `360px` / `white` |
| `.card` | `display` / `flex-direction` | `flex` / `column` |
| `.card` | `padding` / `border-radius` | `20px` / `20px` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 6</div>

![Step 6 browser snapshot](/img/lab-07/step-40.png)

---
layout: split
title: "Step 7 of 15: style .header, header text & input"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="style.css" state="edit" />

Continue in `style.css` to style the orange Talabat header box (`.header`), its title and subtitle, and the search `<input>`:

| Selector | Property | Value |
|---|---|---|
| `.header` | `background-color` / `color` / `padding` | `#ff5a00` / `white` / `16px` |
| `.header` | `display` / `flex-direction` | `flex` / `column` |
| `.header` | `border-radius` / `margin-bottom` | `14px` / `14px` |
| `.header h1` | `font-size` / `color` / `margin` | `22px` / `white` / `0 0 4px 0` |
| `.header p` | `font-size` / `color` / `margin` | `12px` / `#ffedd5` / `0 0 12px 0` |
| `input` | `padding` / `margin-bottom` / `font-size` | `10px 12px` / `12px` / `12px` |
| `input` | `border` / `border-radius` | `1px solid #cbd5e1` / `8px` |
| `.header input` | `border` / `margin-bottom` | `none` / `0` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 7</div>

![Step 7 browser snapshot](/img/lab-07/step-4.png)

---
layout: split
title: "Step 8 of 15: style .categories, .cat & .promo"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="style.css" state="edit" />

Next in `style.css`, arrange the category pills in a horizontal flex row (`.categories` & `.cat`) and style the promo banner (`.promo`):

| Selector | Property | Value |
|---|---|---|
| `.categories` | `display` / `gap` / `margin-bottom` | `flex` / `8px` / `14px` |
| `.cat` | `background-color` / `color` | `#f1f5f9` / `#1e293b` |
| `.cat` | `padding` / `border-radius` | `8px 12px` / `8px` |
| `.cat` | `font-size` / `font-weight` | `12px` / `bold` |
| `.promo` | `background-color` / `border` | `#fff7ed` / `1px solid #fed7aa` |
| `.promo` | `padding` / `border-radius` / `margin-bottom` | `12px` / `12px` / `14px` |
| `.promo h2` | `color` | `#c2410c` |
| `.promo p` | `margin` | `0` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 8</div>

![Step 8 browser snapshot](/img/lab-07/step-4b.png)

---
layout: split
title: "Step 9 of 15: style h2, p, .item & .btn"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="style.css (bottom)" state="edit" />

Finish Screen 1 by adding the typography (`h2`, `p`), restaurant card (`.item`), and orange button (`.btn`) rules in `style.css`:

| Selector | Property | Value |
|---|---|---|
| `h2` | `font-size` / `color` / `margin` | `14px` / `#0f172a` / `0 0 4px 0` |
| `p` | `font-size` / `color` / `margin` | `12px` / `#64748b` / `0 0 12px 0` |
| `.item` | `background-color` / `border` | `#f8fafc` / `1px solid #e2e8f0` |
| `.item` | `padding` / `border-radius` / `margin-bottom` | `12px` / `12px` / `10px` |
| `.item p` | `margin` | `0` |
| `.btn` | `background-color` / `color` / `padding` | `#ff5a00` / `white` / `12px` |
| `.btn` | `border-radius` / `border` / `text-align` | `10px` / `none` / `center` |
| `.btn` | `font-size` / `font-weight` / `text-decoration` | `14px` / `bold` / `none` |
| `.btn` | `margin-top` / `margin-bottom` | `4px` / `6px` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 9</div>

![Step 9 browser snapshot](/img/lab-07/step-5.png)

---
layout: section
icon: code
sub: "Phase 3 — Build Screen 2 (Burger Republic Menu) in burger.html with a working back button"
---

# 04 — Screen 2: Burger Menu (`burger.html`)

---
layout: split
title: "Step 10 of 15: Screen 2 boilerplate shortcut (! + Tab)"
wideRight: true
dense: true
class: giu-boilerplate-s2
---

<style>
.giu-boilerplate-s2 h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-boilerplate-s2 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-boilerplate-s2 li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.3rem !important; }
</style>

<FileTag name="burger.html" state="edit" />

Now that you wrote the HTML boilerplate by hand on Screen 1, use <Tool name="vscode" />'s built-in **shortcut** for **Screen 2 (`burger.html`)**:

1. Click inside your empty `burger.html` file.
2. Type a single exclamation mark **`!`** on line 1.
3. Press **`Tab`** (or **`Enter`**) when the **Emmet Abbreviation** popup appears.
4. <Tool name="vscode" /> automatically generates the complete HTML5 boilerplate (`<!DOCTYPE html>`, `<html lang="en">`, `<head>`, and `<body>`).
5. Inside `<head>`, change `<title>` from `Document` to `Talabat - Burger Republic Menu` and press `Ctrl + S` to save.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 text-xs">
  <div class="font-bold text-slate-900">What the <code>!</code> + <code>Tab</code> shortcut generates in <code>burger.html</code></div>
  <div class="p-2.5 rounded-lg bg-slate-900 text-white font-mono text-[0.68rem] flex items-center justify-between">
    <span>1 &nbsp;<span class="text-amber-400 font-bold">!</span></span>
    <span class="px-2 py-0.5 rounded bg-blue-600 text-[0.6rem]">Emmet Abbreviation (Press Tab ↹)</span>
  </div>
  <div class="space-y-1.5 text-[0.66rem] text-slate-700">
    <div class="p-2 rounded bg-white border border-slate-200">
      <strong><code>&lt;!DOCTYPE html&gt;</code> &amp; <code>&lt;html lang="en"&gt;</code>:</strong> Same HTML5 root structure you typed on Screen 1.
    </div>
    <div class="p-2 rounded bg-white border border-blue-200">
      <strong><code>&lt;head&gt;...&lt;/head&gt;</code>:</strong> Includes <code>&lt;meta charset="UTF-8"&gt;</code> and <code>&lt;title&gt;Talabat - Burger Republic Menu&lt;/title&gt;</code>.
    </div>
    <div class="p-2 rounded bg-white border border-teal-200">
      <strong><code>&lt;body&gt;...&lt;/body&gt;</code>:</strong> Ready for the Screen 2 restaurant menu elements!
    </div>
  </div>
</div>

---
layout: split
title: "Step 11 of 15: Screen 2 header, back link & categories"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.32rem !important; margin-bottom: 0.4rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-html-step img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html (inside <body>)" state="edit" />

Inside `<body>` of `burger.html`, build the top of Screen 2 (keep `<link>` out until Step 13 so you inspect the raw HTML first):

1. Inside the `<body>` tag, create a `<div class="card">` tag, and inside it create a `<div class="header">` tag containing:
   - **Working back button:** `<a class="back" href="index.html">&larr; Back to Talabat Home</a>` (`&larr;` renders ←, and `href="index.html"` returns to Screen 1!).
   - An `<h1>` tag with text `&#127828; Burger Republic` (🍔)
   - A `<p>` tag with text `&#11088; 4.8 (500+ ratings) &bull; 25 mins &bull; Free Delivery` (⭐)
2. Below the `<div class="header">` tag (still inside the `<div class="card">` tag), create a `<div class="categories">` tag containing four `<div class="cat">` tags:
   - `&#128293; Popular` (🔥), `&#127828; Burgers` (🍔), `&#127839; Sides` (🍟), and `&#129380; Drinks` (🥤).

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 11</div>

![Step 11 browser snapshot](/img/lab-07/step-6.png)

---
layout: split
title: "Step 12 of 15: Screen 2 dishes, note input & button"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.32rem !important; margin-bottom: 0.4rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-html-step img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html (inside <div class=&quot;card&quot;>)" state="edit" />

Below the `<div class="categories">` tag (still inside the `<div class="card">` tag in `burger.html`), add the dishes and checkout controls:

1. **First `<div class="item">` tag:** `<h2>` with `&#127828; Classic Double Smash` (🍔) + `<p>` with `2 Angus beef patties, cheddar &amp; house sauce — 145 EGP`.
2. **Second `<div class="item">` tag:** `<h2>` with `&#127812; Mushroom Swiss Burger` (🍄) + `<p>` with `Sauteed mushrooms, melted Swiss &amp; garlic aioli — 160 EGP`.
3. **Third `<div class="item">` tag:** `<h2>` with `&#127839; Loaded Cheese Fries` (🍟) + `<p>` with `Crispy crinkle fries &amp; warm cheddar sauce — 65 EGP`.
4. **Delivery note:** An `<input type="text">` tag with `placeholder="Add delivery note (e.g. extra sauce, no onions)..."`.
5. **Order button:** A `<button class="btn">` tag with text `Place Order &bull; 210 EGP` (`&bull;` renders •).

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 12</div>

![Step 12 browser snapshot](/img/lab-07/step-7.png)

---
layout: split
title: "Step 13 of 15: link style.css to burger.html & style .back"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html + style.css" state="edit" />

Now watch the power of a **shared stylesheet** in a multi-page project:

1. Inside the `<head>` tag of `burger.html`, add `<link rel="stylesheet" href="style.css">` and save (`Ctrl + S`).
   - Because `burger.html` reuses `.card`, `.header`, `.categories`, `.cat`, `.item`, `input`, and `.btn`, **95% of Screen 2 styles itself immediately**!
2. At the bottom of `style.css`, add one rule for the `<a class="back">` link inside the orange header:

| Selector | Property | Value |
|---|---|---|
| `.back` | `color` | `#ffedd5` |
| `.back` | `font-size` / `font-weight` | `12px` / `bold` |
| `.back` | `text-decoration` | `none` |
| `.back` | `margin-bottom` | `8px` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 13</div>

![Step 13 browser snapshot](/img/lab-07/step-8.png)

---
layout: section
icon: code
sub: "Phase 4 — Screen 3 (pizza.html) shares the exact same HTML structure as burger.html: copy, paste & swap the text!"
---

# 05 — Screen 3: Copy Structure & Swap Content (`pizza.html`)

---
layout: split
title: "Step 14 of 15: copy burger.html into pizza.html & swap text"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.72rem !important; line-height: 1.38 !important; margin-top: 0.22rem !important; margin-bottom: 0.25rem !important; }
.giu-css-table table { font-size: 0.69rem !important; margin: 0.25rem 0 0 !important; line-height: 1.3 !important; width: 100% !important; }
.giu-css-table th { padding: 0.26rem 0.4rem 0.26rem 0 !important; font-size: 0.71rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.26rem 0.4rem 0.26rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.5rem !important; }
.giu-css-table td code { font-size: 0.65rem !important; padding: 0.08rem 0.26rem !important; white-space: nowrap !important; }
.giu-css-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-css-table img { height: 18rem !important; max-height: 18rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html → pizza.html" state="edit" />

Notice that **Screen 3 (`pizza.html`) has the exact same layout, `<link rel="stylesheet" href="style.css">`, and `<a class="back" href="index.html">` back button as `burger.html`**—only the restaurant text changes!

1. Open `burger.html`, press **`Ctrl + A`** then **`Ctrl + C`** to copy the entire file, and paste (**`Ctrl + V`**) into `pizza.html`.
2. Keep `<link rel="stylesheet" href="style.css">` and `<a class="back" href="index.html">&larr; Back to Talabat Home</a>` untouched, and update the text below:

| Element | New text in `pizza.html` |
|---|---|
| `<title>` / `<h1>` | `Talabat - Napoli Woodfire Pizza` / `&#127829; Napoli Woodfire Pizza` |
| `.header <p>` | `&#11088; 4.6 (350+ ratings) &bull; 35 mins &bull; 15 EGP Delivery` |
| `.categories` | `&#128293; Popular`, `&#127829; Pizzas`, `&#129367; Salads`, `&#129380; Drinks` |
| `.item` 1 | `&#127829; Margherita Classica` — `Tomato sauce, fresh mozzarella &amp; basil - 150 EGP` |
| `.item` 2 | `&#128293; Spicy Pepperoni` — `Beef pepperoni, mozzarella &amp; chili honey - 175 EGP` |
| `.item` 3 | `&#129472; Garlic Cheese Bread` — `Wood-fired dough, roasted garlic &amp; herbs - 70 EGP` |
| `<button class="btn">` | `Place Order &bull; 220 EGP` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 14</div>

![Step 14 browser snapshot](/img/lab-07/step-10.png)

---
layout: split
title: "Checkpoint: test all screens & back buttons"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.48rem !important; margin-bottom: 0.45rem !important; }
.giu-step-1 p { font-size: 0.73rem !important; line-height: 1.38 !important; margin-top: 0.25rem !important; margin-bottom: 0.3rem !important; }
.giu-step-1 li { font-size: 0.73rem !important; line-height: 1.38 !important; margin-bottom: 0.22rem !important; }
</style>

<Activity label="Verify every navigation & back button">

1. Open `index.html` in your browser (**Open with Live Server**).
2. Click **Open Burger Republic Menu →** and verify it opens `burger.html` (Screen 2).
3. On `burger.html`, click **← Back to Talabat Home** and verify it returns to `index.html`.
4. Click **Open Napoli Pizza Menu →** and verify it opens `pizza.html` (Screen 3).
5. On `pizza.html`, click **← Back to Talabat Home** and verify it returns to `index.html`.

</Activity>

Getting a `Cannot GET` error or missing styles? Jump to <Link to="fix-links">**Broken links**</Link> or <Link to="fix-styles">**Missing styles**</Link> in Troubleshooting.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
  <div class="font-bold text-slate-900">Predict &amp; Verify Navigation Table</div>
  <table class="w-full text-[0.66rem]">
    <thead>
      <tr>
        <th>Current Screen</th>
        <th>Button / Link Clicked</th>
        <th>HTML Attribute</th>
        <th>Opens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>index.html</code></td>
        <td>Open Burger Republic Menu &rarr;</td>
        <td><code>href="burger.html"</code></td>
        <td><code>burger.html</code></td>
      </tr>
      <tr>
        <td><code>burger.html</code></td>
        <td>&larr; Back to Talabat Home</td>
        <td><code>href="index.html"</code></td>
        <td><code>index.html</code></td>
      </tr>
      <tr>
        <td><code>index.html</code></td>
        <td>Open Napoli Pizza Menu &rarr;</td>
        <td><code>href="pizza.html"</code></td>
        <td><code>pizza.html</code></td>
      </tr>
      <tr>
        <td><code>pizza.html</code></td>
        <td>&larr; Back to Talabat Home</td>
        <td><code>href="index.html"</code></td>
        <td><code>index.html</code></td>
      </tr>
    </tbody>
  </table>
</div>

---
layout: section
icon: assignment
sub: "Phase 5 — Commit your changes and push your graded in-lab assignment to GitHub"
---

# 06 — Graded Submission: Push to GitHub

---
layout: split
title: "Step 15 of 15: commit & push to GitHub (Graded)"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.48rem !important; margin-bottom: 0.5rem !important; }
.giu-step-1 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.3rem !important; margin-bottom: 0.4rem !important; }
.giu-step-1 li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-bottom: 0.25rem !important; }
</style>

Using the <Tool name="git" /> and <Tool name="github" /> setup from **Lab 6**, commit your 3-screen app and push it to GitHub for your **in-lab assignment grade**:

1. In <Tool name="vscode" />, open the Terminal (**Terminal → New Terminal**).
2. Run `git init`, `git add .`, and `git commit` inside `ica-lab-07/`.
3. On [github.com](https://github.com), click **`+` → New repository**, name it `ica-lab-07` (**Public**, **Add a README** unchecked), and click **Create repository**.
4. Connect your local repo, push to `main`, and show your TA your live GitHub repo and working navigation before leaving!

::right::

<Activity label="Run in the VS Code Terminal">

1. Initialize and commit locally:

```bash
git init
git add .
git commit -m "Build three-screen Talabat app"
```

2. Link your GitHub repository and push:

```bash
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

3. Refresh `https://github.com/<your-username>/ica-lab-07` and confirm `index.html`, `burger.html`, `pizza.html`, and `style.css` are online!

</Activity>

---
layout: section
icon: tools
sub: Fixing broken page links, unstyled inner screens, and underlined anchor buttons
---

# Troubleshooting

---
layout: default
routeAlias: fix-links
dense: true
class: giu-fix
---

# Broken links (`Cannot GET` or clicking does nothing)

| Symptom | Cause & exact fix |
|---|---|
| `Cannot GET /burger.html` or `/pizza.html` | Filename in `href="burger.html"` or `href="pizza.html"` does not match the actual filename in VS Code Explorer. Make sure both are lowercase in the root of `ica-lab-07/`. |
| Clicking a Home button does nothing | Make sure you used `<a class="btn" href="burger.html">...</a>` and `<a class="btn" href="pizza.html">...</a>` on `index.html` and included the `href` attribute on both. |
| Back link does not return home | Check that the top link in **both** `burger.html` and `pizza.html` has `href="index.html"` (`<a class="back" href="index.html">`). |

---
layout: default
routeAlias: fix-styles
dense: true
class: giu-fix
---

# Missing styles or underlined buttons

| Symptom | Cause & exact fix |
|---|---|
| `burger.html` or `pizza.html` has zero styling | Confirm `<link rel="stylesheet" href="style.css">` is inside `<head>` of both `burger.html` and `pizza.html` and press `Ctrl + S` to save. |
| Category pills stack vertically | Check `.categories` in `style.css`: it needs `display: flex;` and `gap: 8px;` so `<div class="cat">` items sit side-by-side. |
| Button or back link is underlined | Add `text-decoration: none;` to both `.btn` and `.back` in `style.css`. |

---
layout: refs
title: References & useful links
dense: true
---

## HTML & CSS Foundations (Lab 5 & Lab 6 Review)

- [MDN — Creating hyperlinks (`<a href>`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links) — connecting multiple HTML files in the same folder
- [MDN — External stylesheets (`<link>`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) — sharing one `style.css` across multiple pages
- [MDN — CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) — `display: flex`, `flex-direction`, `justify-content`, and `gap`

## Git & GitHub Workflow

- [GitHub Docs — Pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) — `git init`, `git add .`, `git commit`, and `git push`

---
layout: end
sub: Complete all 3 screens, verify all Home & Back links work, and push ica-lab-07 to GitHub!
---
