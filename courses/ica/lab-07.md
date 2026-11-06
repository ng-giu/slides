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
| 5 min | **Overview:** the graded 3-screen app |
| 15 min | **Screen 1 HTML (`index.html`):** Boilerplate, photos (`<img>`) & Home links |
| 15 min | **Screen 1 CSS (`style.css`):** Selectors, properties & values for Home |
| 10 min | **Screen 2 (`burger.html`):** Shortcut, back button & Today's Special |
| 10 min | **Screen 3 (`pizza.html`):** Copy `burger.html`, swap content & test nav |
| 10 min | **Git & GitHub:** push your graded project |
| 5 min | **Self-check & TA review** |

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
  - { title: "1. Screen 1 HTML", code: "index.html", sub: "Home, photos & nav links" }
  - { title: "2. Screen 1 CSS", code: "style.css", sub: "Style Home screen" }
  - { title: "3. Screen 2", code: "burger.html", sub: "Today's Special & back" }
  - { title: "4. Screen 3", code: "pizza.html", sub: "Swap text & photo" }
  - { title: "5. Git & GitHub", code: "git push", sub: "Graded submission" }
---

# Putting your HTML, CSS, VS Code & Git skills together

There are **no new concepts** today—you already know every tag, CSS rule, and Git command needed:

<Flow :steps="$frontmatter.journey" />

<div class="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-xs">
  <div class="text-amber-950">
    <strong class="text-amber-900">Graded In-Lab Assignment:</strong> Today's lab is an <strong>in-lab assignment and will be graded</strong>. Complete all three screens, verify every navigation and back button works and every photo shows, and push <code>ica-lab-07</code> to GitHub before leaving!
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
.giu-target-screens img { max-height: 12rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.65rem; border: 1px solid #cbd5e1; }
</style>

# The three-screen Talabat app you will build today

You will build **three connected screens** inside `ica-lab-07/` where **all screens are navigable from the Home screen** and **all back buttons return to Home**. Every restaurant and dish shows a photo with an `<img>` tag whose `src` is a **public link**:

<div class="grid grid-cols-3 gap-3.5 mt-1 text-center text-xs">
  <div class="p-2 rounded-xl border border-blue-200 bg-blue-50/40">
    <div class="font-bold text-blue-900 mb-1 text-[0.72rem]">Screen 1: Home Hub (<code>index.html</code>)</div>
    <img src="/img/lab-07/step-08.png" alt="Screen 1 Home Page" />
    <div class="mt-1 text-[0.62rem] text-slate-600">Links to <strong>both</strong> <code>burger.html</code> &amp; <code>pizza.html</code></div>
  </div>
  <div class="p-2 rounded-xl border border-teal-200 bg-teal-50/40">
    <div class="font-bold text-teal-900 mb-1 text-[0.72rem]">Screen 2: Burger Menu (<code>burger.html</code>)</div>
    <img src="/img/lab-07/step-12.png" alt="Screen 2 Burger Menu" />
    <div class="mt-1 text-[0.62rem] text-slate-600"><strong>Back to Talabat Home</strong> opens <code>index.html</code></div>
  </div>
  <div class="p-2 rounded-xl border border-amber-200 bg-amber-50/40">
    <div class="font-bold text-amber-900 mb-1 text-[0.72rem]">Screen 3: Pizza Menu (<code>pizza.html</code>)</div>
    <img src="/img/lab-07/step-14.png" alt="Screen 3 Pizza Menu" />
    <div class="mt-1 text-[0.62rem] text-slate-600"><strong>Back to Talabat Home</strong> opens <code>index.html</code></div>
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

<div class="giu-refs__note">All four files must sit side-by-side in the root of <code>ica-lab-07/</code> so relative links (<code>href="burger.html"</code>, <code>href="pizza.html"</code>, <code>href="index.html"</code>) work immediately. There is no images folder: every <code>&lt;img&gt;</code> loads its photo from a public link.</div>

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

<FileTag name="index.html (inside &lt;body&gt;)" state="edit" />

Build the top of the Home screen:

1. Inside the `<body>` tag, create one main `<div class="card">` tag that wraps the entire screen (do **not** link `style.css` yet so you can inspect the raw HTML first).
2. Inside the `<div class="card">` tag, create a `<div class="header">` tag.
3. Inside the `<div class="header">` tag, add three elements:
   - An `<h1>` tag with text `Talabat`.
   - A `<p>` tag with text `Delivering to: New Cairo, 5th Settlement`.
   - An `<input>` tag with `type="text"` and `placeholder="Search for food, groceries, coffee..."`.
4. Press `Ctrl + S`. In the Explorer, right-click `index.html` and click **Open with Live Server**. Keep this browser tab open: it reloads each time you save.

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 3</div>

![Step 3 browser snapshot](/img/lab-07/step-03.png)

---
layout: split
title: "Step 4 of 15: Screen 1 restaurants & links to all screens"
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

<FileTag name="index.html (inside &lt;div class=&quot;card&quot;&gt;)" state="edit" />

Below `<div class="header">`, add the two restaurant cards. **Each card holds its own `<a class="btn">` link**, so all screens open from Home:

1. First `<div class="item">`:
   - `<h2>` with `Burger Republic`
   - `<p>` with `4.8 stars - Burgers and Fries - 25 mins - Free Delivery`
   - `<a class="btn" href="burger.html">Open Burger Republic Menu</a>` (opens Screen 2)
2. Second `<div class="item">`:
   - `<h2>` with `Napoli Woodfire Pizza`
   - `<p>` with `4.6 stars - Italian Pizza - 35 mins - 15 EGP Delivery`
   - `<a class="btn" href="pizza.html">Open Napoli Pizza Menu</a>` (opens Screen 3)
3. Press `Ctrl + S`.

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 4</div>

![Step 4 browser snapshot](/img/lab-07/step-04.png)

---
layout: split
title: "Step 5 of 15: Screen 1 restaurant photos"
dense: true
class: giu-photo-step
---

<style>
.giu-photo-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-photo-step .giu-split__grid { grid-template-columns: 1.55fr 0.45fr !important; gap: 1rem !important; align-items: start !important; }
.giu-photo-step p, .giu-photo-step li { font-size: 0.74rem !important; line-height: 1.38 !important; margin-top: 0.22rem !important; margin-bottom: 0.25rem !important; }
.giu-photo-step .giu-snap-label { font-size: 0.56rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; }
.giu-photo-step .giu-split__grid img { max-height: 19rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="index.html (inside each <div class=&quot;item&quot;>)" state="edit" />

Each `src` below is a **public link**: the photo is hosted on the web, so you add no image file to your project.

1. In `index.html`, click at the end of the Burger Republic `<div class="item">` line and press `Enter`.
2. Copy its `<img>` from below and paste it there, above the `<h2>`.
3. Do the same in the Napoli Woodfire Pizza `<div class="item">`, then press `Ctrl + S`.

<<< @/snippets/lab-07/photos/index.html {lines:false}

::right::

<div class="giu-snap-label">After Step 5</div>

![Step 5 browser snapshot](/img/lab-07/step-05.png)

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

![Step 6 browser snapshot](/img/lab-07/step-06.png)

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

![Step 7 browser snapshot](/img/lab-07/step-07.png)

---
layout: split
title: "Step 8 of 15: style h2, p, .item & .btn"
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

Finish Screen 1 by adding the typography (`h2`, `p`), restaurant card and photo (`.item`, `.item img`), and orange button (`.btn`) rules in `style.css`:

| Selector | Property | Value |
|---|---|---|
| `h2` | `font-size` / `color` / `margin` | `14px` / `#0f172a` / `0 0 4px 0` |
| `p` | `font-size` / `color` / `margin` | `12px` / `#64748b` / `0 0 12px 0` |
| `.item` | `background-color` / `border` | `#f8fafc` / `1px solid #e2e8f0` |
| `.item` | `padding` / `border-radius` / `margin-bottom` | `12px` / `12px` / `10px` |
| `.item p` | `margin` | `0` |
| `.item img` | `width` / `border-radius` / `margin-bottom` | `100%` / `8px` / `6px` |
| `.btn` | `background-color` / `color` / `padding` | `#ff5a00` / `white` / `12px` |
| `.btn` | `border-radius` / `border` / `text-align` | `10px` / `none` / `center` |
| `.btn` | `font-size` / `font-weight` / `text-decoration` | `14px` / `bold` / `none` |
| `.btn` | `display` / `margin-top` | `block` / `8px` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 8</div>

![Step 8 browser snapshot](/img/lab-07/step-08.png)

---
layout: split
title: "Checkpoint 1: Screen 1 looks right & its links open"
dense: true
---

<Activity label="Check before you continue">

1. Compare your Home tab with the picture: orange header, then a photo and a button in each card.
2. Click **Open Burger Republic Menu**. The address bar ends in `/burger.html` and **the page is blank**. That is correct: you fill it next.
3. Press the browser's Back arrow, then do the same with **Open Napoli Pizza Menu**.

</Activity>

Something different? See <Link to="fix-links">**Broken links**</Link>, <Link to="fix-styles">**Missing styles**</Link> or <Link to="fix-photos">**Photo problems**</Link>.

::right::

![Expected result at Checkpoint 1](/img/lab-07/step-08.png)

---
layout: section
icon: code
sub: "Phase 3 — Build Screen 2 (Burger Republic Menu) in burger.html with a working back button"
---

# 04 — Screen 2: Burger Menu (`burger.html`)

---
layout: split
title: "Step 9 of 15: Screen 2 boilerplate shortcut (! + Tab)"
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
title: "Step 10 of 15: Screen 2 header & back link"
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

<FileTag name="burger.html (inside &lt;body&gt;)" state="edit" />

Inside `<body>` of `burger.html`, build the top of Screen 2 (keep `<link>` out until Step 12 so you inspect the raw HTML first):

1. Inside the `<body>` tag, create a `<div class="card">` tag, and inside it create a `<div class="header">` tag containing:
   - **Working back button:** `<a class="back" href="index.html">Back to Talabat Home</a>` (`href="index.html"` returns to Screen 1).
   - An `<h1>` tag with text `Burger Republic`.
   - A `<p>` tag with text `4.8 stars (500+ ratings) - 25 mins - Free Delivery`.
2. Press `Ctrl + S`. In your browser, click **Open Burger Republic Menu** to see this page.

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 10</div>

![Step 10 browser snapshot](/img/lab-07/step-10.png)

---
layout: split
title: "Step 11 of 15: Screen 2 Today's Special"
dense: true
class: giu-photo-step
---

<style>
.giu-photo-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-photo-step .giu-split__grid { grid-template-columns: 1.55fr 0.45fr !important; gap: 1rem !important; align-items: start !important; }
.giu-photo-step p, .giu-photo-step li { font-size: 0.74rem !important; line-height: 1.38 !important; margin-top: 0.22rem !important; margin-bottom: 0.25rem !important; }
.giu-photo-step .giu-snap-label { font-size: 0.56rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; }
.giu-photo-step .giu-split__grid img { max-height: 19rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html (inside &lt;div class=&quot;card&quot;&gt;)" state="edit" />

Below `<div class="header">`, add today's dish and the order controls:

1. An `<h2>` tag with text `Today's Special`.
2. A `<div class="item">` tag containing, in this order:
   - The `<img>` tag below. Its `src` is a **public link**, the same idea as Step 5.
   - An `<h2>` tag with text `Classic Double Smash`.
   - A `<p>` tag with text `2 Angus beef patties, cheddar and house sauce - 145 EGP`.
3. An `<input type="text">` tag with `placeholder="Add delivery note (e.g. extra sauce, no onions)..."`.
4. A `<button class="btn">` tag with text `Place Order - 145 EGP`. Press `Ctrl + S`.

<<< @/snippets/lab-07/photos/burger.html {lines:false}

::right::

<div class="giu-snap-label">After Step 11</div>

![Step 11 browser snapshot](/img/lab-07/step-11.png)

---
layout: split
title: "Step 12 of 15: link style.css to burger.html & style .back"
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

Link the **shared stylesheet** to this page:

1. Inside the `<head>` tag of `burger.html`, add `<link rel="stylesheet" href="style.css">` and save (`Ctrl + S`).
   - Because `burger.html` reuses `.card`, `.header`, `.item`, `.item img`, `input`, and `.btn`, **most of Screen 2 is styled right away**.
2. At the bottom of `style.css`, add one rule for the `<a class="back">` link inside the orange header:

| Selector | Property | Value |
|---|---|---|
| `.back` | `color` | `#ffedd5` |
| `.back` | `font-size` / `font-weight` | `12px` / `bold` |
| `.back` | `text-decoration` | `none` |
| `.back` | `margin-bottom` | `8px` |

::right::

<div class="giu-snap-label">Timeline Snapshot — After Step 12</div>

![Step 12 browser snapshot](/img/lab-07/step-12.png)

---
layout: split
title: "Checkpoint 2: Screen 2 is styled & returns Home"
dense: true
---

<Activity label="Check before you continue">

1. From Home, click **Open Burger Republic Menu**. The page matches the picture, with one dish photo.
2. Click **Back to Talabat Home**. You are back on `index.html`.
3. `pizza.html` is still blank. You fill it next.

</Activity>

Something different? See <Link to="fix-links">**Broken links**</Link>, <Link to="fix-styles">**Missing styles**</Link> or <Link to="fix-photos">**Photo problems**</Link>.

::right::

![Expected result at Checkpoint 2](/img/lab-07/step-12.png)

---
layout: section
icon: code
sub: "Phase 4 — Screen 3 (pizza.html) shares the exact same HTML structure as burger.html: copy, paste, then swap the text and photo!"
---

# 05 — Screen 3: Copy Structure & Swap Content (`pizza.html`)

---
layout: split
title: "Step 13 of 15: copy burger.html into pizza.html & swap text"
dense: true
class: giu-pizza-table
---

<style>
.giu-pizza-table h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-pizza-table .giu-split__grid { grid-template-columns: 1.68fr 0.32fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-pizza-table p, .giu-pizza-table li { font-size: 0.72rem !important; line-height: 1.38 !important; margin-top: 0.22rem !important; margin-bottom: 0.25rem !important; }
.giu-pizza-table table { font-size: 0.69rem !important; margin: 0.25rem 0 0 !important; line-height: 1.3 !important; width: 100% !important; }
.giu-pizza-table th { padding: 0.26rem 0.4rem 0.26rem 0 !important; font-size: 0.71rem !important; white-space: nowrap !important; }
.giu-pizza-table td { padding: 0.26rem 0.4rem 0.26rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-pizza-table td:first-child { width: auto !important; padding-right: 0.5rem !important; }
.giu-pizza-table td code { font-size: 0.65rem !important; padding: 0.08rem 0.26rem !important; white-space: nowrap !important; }
.giu-pizza-table .giu-snap-label { font-size: 0.62rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; white-space: nowrap !important; }
.giu-pizza-table img { height: auto !important; max-height: 18rem !important; max-width: 100% !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="burger.html → pizza.html" state="edit" />

`pizza.html` has the same layout, stylesheet link and back button as `burger.html`. Only the text and the photo change.

1. Open `burger.html`, press `Ctrl + A` then `Ctrl + C`, and paste (`Ctrl + V`) into `pizza.html`.
2. Keep the `<link>` and the back link untouched, and update the text below:

| Element | New text in `pizza.html` |
|---|---|
| `<title>` | `Talabat - Napoli Woodfire Pizza` |
| `<h1>` | `Napoli Woodfire Pizza` |
| `.header <p>` | `4.6 stars (350+ ratings) - 35 mins - 15 EGP Delivery` |
| `.item <h2>` | `Margherita Classica` |
| `.item <p>` | `Tomato sauce, fresh mozzarella and basil - 150 EGP` |
| `<input>` placeholder | `Add delivery note (e.g. extra oregano, thin crust)...` |
| `<button class="btn">` | `Place Order - 150 EGP` |

3. Press `Ctrl + S`. The photo is still the burger. You replace it in the next step.

::right::

<div class="giu-snap-label">After Step 13</div>

![Step 13 browser snapshot](/img/lab-07/step-13.png)

---
layout: split
title: "Step 14 of 15: Screen 3 photo"
dense: true
class: giu-photo-step
---

<style>
.giu-photo-step h1 { font-size: 1.44rem !important; line-height: 1.15 !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-photo-step .giu-split__grid { grid-template-columns: 1.55fr 0.45fr !important; gap: 1rem !important; align-items: start !important; }
.giu-photo-step p, .giu-photo-step li { font-size: 0.74rem !important; line-height: 1.38 !important; margin-top: 0.22rem !important; margin-bottom: 0.25rem !important; }
.giu-photo-step .giu-snap-label { font-size: 0.56rem !important; line-height: 1.2 !important; font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #64748b !important; text-align: center !important; margin: 0 0 0.35rem 0 !important; }
.giu-photo-step .giu-split__grid img { max-height: 19rem !important; width: auto !important; margin: 0 auto !important; display: block !important; border-radius: 0.75rem !important; border: 1px solid #cbd5e1 !important; }
</style>

<FileTag name="pizza.html (inside &lt;div class=&quot;item&quot;&gt;)" state="edit" />

1. In `pizza.html`, select the whole `<img ...>` tag and delete it.
2. Paste this tag in its place, above the `<h2>`, then press `Ctrl + S`.

<<< @/snippets/lab-07/photos/pizza.html {lines:false}

::right::

<div class="giu-snap-label">After Step 14</div>

![Step 14 browser snapshot](/img/lab-07/step-14.png)

---
layout: split
title: "Checkpoint 3: test all screens & back buttons"
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
2. Click **Open Burger Republic Menu** and verify it opens `burger.html` (Screen 2).
3. On `burger.html`, click **Back to Talabat Home** and verify it returns to `index.html`.
4. Click **Open Napoli Pizza Menu** and verify it opens `pizza.html` (Screen 3).
5. On `pizza.html`, click **Back to Talabat Home** and verify it returns to `index.html`.
6. Check that all three screens show their photos.

</Activity>

Getting a `Cannot GET` error or missing styles? Jump to <Link to="fix-links">**Broken links**</Link>, <Link to="fix-styles">**Missing styles**</Link> or <Link to="fix-photos">**Photo problems**</Link> in Troubleshooting.

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
        <td>Open Burger Republic Menu</td>
        <td><code>href="burger.html"</code></td>
        <td><code>burger.html</code></td>
      </tr>
      <tr>
        <td><code>burger.html</code></td>
        <td>Back to Talabat Home</td>
        <td><code>href="index.html"</code></td>
        <td><code>index.html</code></td>
      </tr>
      <tr>
        <td><code>index.html</code></td>
        <td>Open Napoli Pizza Menu</td>
        <td><code>href="pizza.html"</code></td>
        <td><code>pizza.html</code></td>
      </tr>
      <tr>
        <td><code>pizza.html</code></td>
        <td>Back to Talabat Home</td>
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

An error? See <Link to="fix-git">**Git and GitHub errors**</Link>.

---
layout: default
icon: assignment
dense: true
---

# Before you leave: what your TA checks

| Check | What your TA looks for |
|---|---|
| Files | `index.html`, `burger.html`, `pizza.html` and `style.css` side by side in `ica-lab-07/` |
| Links | Both Home buttons open the right screen, and both Back links return to Home |
| Styles | All three pages use the same `style.css` and match the pictures in this deck |
| Photos | 4 `<img>` tags, each with a public link in `src` and text in `alt`, and all 4 load |
| GitHub | Public repo `ica-lab-07` with all four files on `main` |

Check every row yourself first. Then open your Home page and your GitHub repo in two tabs and **raise your hand**.

---
layout: section
icon: tools
sub: Fixing broken page links, unstyled screens, photos that do not show, and Git errors
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
| Home button is narrow or overlaps the text above it | `.btn` needs `display: block;` in `style.css`. |
| Button or back link is underlined | Add `text-decoration: none;` to both `.btn` and `.back` in `style.css`. |

---
layout: default
routeAlias: fix-photos
dense: true
class: giu-fix
---

# Photo problems

To read the browser's error: press `F12`, open the **Network** or **Console** tab, then refresh.

| Symptom | Browser error | Cause & exact fix |
|---|---|---|
| Broken-image icon and the `alt` text | `net::ERR_BLOCKED_BY_ORB` | The link has a typo or was cut short. Copy the whole `src` again, from `https://` to `crop`. |
| Broken-image icon and the `alt` text | `Failed to load resource: the server responded with a status of 404 (Not Found)` | `src` points at a file in your project, such as `burger.jpg`. Use the public link from the step. |
| All photos broken, on every page | `Failed to load resource: net::ERR_INTERNET_DISCONNECTED` | The photos need internet. Reconnect, or switch to a phone hotspot, then refresh. |
| Photo sticks out past the right edge of the card | None | The `.item img` rule is missing from `style.css`. Add it with `width: 100%;` (Step 8). |

---
layout: default
routeAlias: fix-git
dense: true
class: giu-fix
---

# Git and GitHub errors

| Error in the terminal | Cause & exact fix |
|---|---|
| `fatal: not a git repository (or any of the parent directories): .git` | Wrong folder, or no `git init` yet. Open `ica-lab-07` in VS Code, then run `git init`. |
| `*** Please tell me who you are.` | Run `git config --global user.name "Your Name"` and `git config --global user.email "you@giu.de"`, then commit again. |
| `error: src refspec main does not match any` | Nothing is committed yet. Run `git add .` and `git commit -m "Build Talabat app"`, then push again. |
| `error: remote origin already exists.` | You already added a remote. Run `git remote set-url origin <your-github-repo-url>`, then push again. |
| `! [rejected]        main -> main (fetch first)` | Your GitHub repo has a README. Run `git pull origin main --allow-unrelated-histories --no-rebase --no-edit`, then push again. |
| `remote: Invalid username or token. Password authentication is not supported for Git operations.` | Push again and sign in to GitHub in the window that opens. |

---
layout: refs
title: References & useful links
dense: true
---

## HTML & CSS Foundations (Lab 5 & Lab 6 Review)

- [MDN — Creating hyperlinks (`<a href>`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links) — connecting multiple HTML files in the same folder
- [MDN — External stylesheets (`<link>`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) — sharing one `style.css` across multiple pages
- [MDN — CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) — `display: flex`, `flex-direction`, and `justify-content`

- [MDN — Images in HTML (`<img>`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images) — `src` and `alt`
- [Unsplash](https://unsplash.com) — where today's food photos are hosted

## Git & GitHub Workflow

- [GitHub Docs — Pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) — `git init`, `git add .`, `git commit`, and `git push`

---
layout: end
sub: Complete all 3 screens, verify all Home & Back links and photos work, and push ica-lab-07 to GitHub!
---
