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
| 5 min | **Overview:** Combining Lab 5 (HTML/CSS) & Lab 6 (VS Code & Git) into a 2-screen app |
| 15 min | **Screen 1 HTML (`index.html`):** Writing the HTML boilerplate, emoji codes & Home skeleton |
| 15 min | **Screen 1 CSS (`style.css`):** Selectors, properties & values for the Home screen |
| 15 min | **Screen 2 HTML (`menu.html`):** Boilerplate shortcut (`!`), header & Menu skeleton |
| 10 min | **Screen 2 CSS (`style.css`):** Reusing `style.css` & styling the back link |
| 10 min | **Git & GitHub:** Committing your 2-screen project and pushing to GitHub |

---
layout: section
icon: lifecycle
sub: Everything you need today is already in your toolkit from Labs 5 and 6
---

# 01 — Today's Goal: Practice & Build

---
layout: default
icon: recap
dense: true
journey:
  - { title: "1. Screen 1 HTML", code: "index.html", sub: "Build Home skeleton" }
  - { title: "2. Screen 1 CSS", code: "style.css", sub: "Style Home screen" }
  - { title: "3. Screen 2 HTML", code: "menu.html", sub: "Build Menu skeleton" }
  - { title: "4. Screen 2 CSS", code: "style.css", sub: "Link & finish Screen 2" }
  - { title: "5. Git & GitHub", code: "git push", sub: "Commit & push online" }
---

# Putting your HTML, CSS, VS Code & Git skills together

There are **no new concepts** today—you already know every tag, CSS rule, and Git command needed:

<Flow :steps="$frontmatter.journey" />

- **From Lab 5:** HTML tags (`<div>`, `<h1>`, `<h2>`, `<p>`, `<input>`, `<button>`) and CSS rules (`Selector { Property: Value; }`).
- **From Lab 6:** Multi-file projects in <Tool name="vscode" />, external `<link rel="stylesheet" href="style.css">`, `<a href="...">` links, and pushing commits to <Tool name="github" />.
- **Emoji Entity Codes:** Instead of external images, we write **HTML emoji codes** (like `&#127828;`) in our `.html` files, which the browser automatically decodes and renders as emojis (`🍔`) on the DOM!

---
layout: default
icon: intro
dense: true
class: giu-target-screens
---

<style>
.giu-target-screens h1 { max-width: none !important; font-size: 1.55rem !important; margin-bottom: 0.45rem !important; }
.giu-target-screens p { margin-bottom: 0.55rem !important; }
.giu-target-screens img { max-height: 12.2rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

# The two-screen Talabat app you will build today

You will build two connected screens inside `ica-lab-07/` using HTML emoji codes and one shared `style.css`:

<div class="grid grid-cols-2 gap-5 mt-1 text-center text-xs">
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40">
    <div class="font-bold text-blue-900 mb-1.5">Screen 1: Home Page (<code>index.html</code>)</div>
    <img src="/img/lab-07/step-5.png" alt="Screen 1 Home Page" />
    <div class="mt-1.5 text-[0.66rem] text-slate-600">Clicking <strong>Open Burger Republic Menu &rarr;</strong> opens <code>menu.html</code></div>
  </div>
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40">
    <div class="font-bold text-teal-900 mb-1.5">Screen 2: Restaurant Menu (<code>menu.html</code>)</div>
    <img src="/img/lab-07/step-8.png" alt="Screen 2 Menu Page" />
    <div class="mt-1.5 text-[0.66rem] text-slate-600">Clicking <strong>&larr; Back to Talabat Home</strong> returns to <code>index.html</code></div>
  </div>
</div>

---
layout: split
title: "Step 1 of 14: set up your project folder in VS Code"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.52rem !important; margin-bottom: 0.65rem !important; }
</style>

Start by creating a clean project folder and your three empty files in <Tool name="vscode" />:

1. Create a new empty folder named `ica-lab-07` on your Desktop (or Documents).
2. Open <Tool name="vscode" /> and click **File → Open Folder...** to open `ica-lab-07`.
3. In the **Explorer** sidebar on the left, click the **New File** icon three times to create:
   - `index.html` — Screen 1 (Talabat Home)
   - `menu.html` — Screen 2 (Burger Republic Menu)
   - `style.css` — Shared stylesheet for both screens

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
  <div class="font-bold text-slate-900">ica-lab-07/</div>
  <div class="pl-4 space-y-2 text-[0.72rem]">
    <div class="flex items-center justify-between p-2 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.64rem] text-slate-600">Screen 1: Home page (entry point)</span>
    </div>
    <div class="flex items-center justify-between p-2 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── menu.html</span>
      <span class="font-sans text-[0.64rem] text-slate-600">Screen 2: Restaurant menu page</span>
    </div>
    <div class="flex items-center justify-between p-2 rounded bg-white border border-purple-200">
      <span class="font-bold text-purple-800">└── style.css</span>
      <span class="font-sans text-[0.64rem] text-slate-600">One shared CSS file for both screens</span>
    </div>
  </div>
</div>

<div class="giu-refs__note">All three files must sit side-by-side in the root of <code>ica-lab-07/</code> so they can link to each other directly by filename.</div>

---
layout: section
icon: code
sub: "Phase 1 — Build the complete HTML skeleton of Screen 1 inside index.html"
---

# 02 — Screen 1: HTML Skeleton

---
layout: split
title: "Step 2 of 14: write the HTML boilerplate (index.html)"
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

For **Screen 1 (`index.html`)**, write the HTML boilerplate **by hand** to practice the core document structure from Lab 5 (you will use a shortcut on Screen 2!):

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
title: "Step 3 of 14: Screen 1 wrapper & header"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.18fr 0.82fr !important; gap: 1.5rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 3</div>

![Step 3 browser snapshot](/img/lab-07/step-2a.png)

---
layout: split
title: "Step 4 of 14: Screen 1 categories & promo"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.18fr 0.82fr !important; gap: 1.5rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 4</div>

![Step 4 browser snapshot](/img/lab-07/step-2.png)

---
layout: split
title: "Step 5 of 14: Screen 1 restaurants & page link"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.18fr 0.82fr !important; gap: 1.5rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

<FileTag name="index.html (inside <div class=&quot;card&quot;>)" state="edit" />

Below the `<div class="promo">` tag (still inside the `<div class="card">` tag), add two restaurant boxes and the page link:

1. First `<div class="item">` tag:
   - An `<h2>` tag with `&#127828; Burger Republic` (🍔)
   - A `<p>` tag with `&#11088; 4.8 &bull; Burgers &amp; Fries &bull; 25 mins &bull; Free Delivery` (`&#11088;` renders ⭐; `&bull;` renders •)
2. Second `<div class="item">` tag:
   - An `<h2>` tag with `&#127829; Napoli Woodfire Pizza` (🍕)
   - A `<p>` tag with `&#11088; 4.6 &bull; Italian Pizza &bull; 35 mins &bull; 15 EGP Delivery`
3. At the bottom of `<div class="card">`, add `<a class="btn" href="menu.html">` with text `Open Burger Republic Menu &rarr;` (`&rarr;` renders →).
   - **How `<a href>` connects pages:** `href="menu.html"` opens `menu.html` in the same folder when clicked.

::right::

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — Complete Screen 1 HTML Skeleton</div>

![Step 5 browser snapshot](/img/lab-07/step-3.png)

---
layout: section
icon: code
sub: "Phase 2 — Style Screen 1 in style.css using CSS Selectors, Properties, and Values"
---

# 03 — Screen 1: CSS Styling

---
layout: split
title: "Step 6 of 14: link style.css & style body and .card"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 6</div>

![Step 6 browser snapshot](/img/lab-07/step-40.png)

---
layout: split
title: "Step 7 of 14: style .header, header text & input"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 7</div>

![Step 7 browser snapshot](/img/lab-07/step-4.png)

---
layout: split
title: "Step 8 of 14: style .categories, .cat & .promo"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 8</div>

![Step 8 browser snapshot](/img/lab-07/step-4b.png)

---
layout: split
title: "Step 9 of 14: style h2, p, .item & .btn"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
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

::right::

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — Screen 1 Complete!</div>

![Step 9 browser snapshot](/img/lab-07/step-5.png)

---
layout: section
icon: code
sub: "Phase 3 — Build Screen 2 inside menu.html using the VS Code boilerplate shortcut"
---

# 04 — Screen 2: HTML Skeleton

---
layout: split
title: "Step 10 of 14: Screen 2 boilerplate shortcut (! + Tab)"
wideRight: true
dense: true
class: giu-boilerplate-s2
---

<style>
.giu-boilerplate-s2 h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-boilerplate-s2 p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-boilerplate-s2 li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.3rem !important; }
</style>

<FileTag name="menu.html" state="edit" />

Now that you wrote the HTML boilerplate by hand on Screen 1, use <Tool name="vscode" />'s built-in **shortcut** for **Screen 2 (`menu.html`)**:

1. Click inside your empty `menu.html` file.
2. Type a single exclamation mark **`!`** on line 1.
3. Press **`Tab`** (or **`Enter`**) when the **Emmet Abbreviation** popup appears.
4. <Tool name="vscode" /> automatically generates the complete HTML5 boilerplate (`<!DOCTYPE html>`, `<html lang="en">`, `<head>`, and `<body>`).
5. Inside `<head>`, change `<title>` from `Document` to `Talabat - Burger Republic Menu` and press `Ctrl + S` to save.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 text-xs">
  <div class="font-bold text-slate-900">What the <code>!</code> + <code>Tab</code> shortcut generates in <code>menu.html</code></div>
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
title: "Step 11 of 14: Screen 2 header & categories"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.18fr 0.82fr !important; gap: 1.5rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

<FileTag name="menu.html (inside <body>)" state="edit" />

Inside `<body>` of `menu.html`, build the top of Screen 2 (keep `<link>` out until Step 13 so you inspect the raw HTML first):

1. Inside the `<body>` tag, create a `<div class="card">` tag, and inside it create a `<div class="header">` tag containing:
   - An `<a class="back" href="index.html">` tag with text `&larr; Back to Talabat Home` (`&larr;` renders ←, and `href="index.html"` links back to Screen 1!).
   - An `<h1>` tag with text `&#127828; Burger Republic` (🍔)
   - A `<p>` tag with text `&#11088; 4.8 (500+ ratings) &bull; 25 mins &bull; Free Delivery` (⭐)
2. Below the `<div class="header">` tag (still inside the `<div class="card">` tag), create a `<div class="categories">` tag containing four `<div class="cat">` tags:
   - `&#128293; Popular` (🔥), `&#127828; Burgers` (🍔), `&#127839; Sides` (🍟), and `&#129380; Drinks` (🥤).

::right::

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — After Step 11</div>

![Step 11 browser snapshot](/img/lab-07/step-6.png)

---
layout: split
title: "Step 12 of 14: Screen 2 dishes, note input & button"
dense: true
class: giu-html-step
---

<style>
.giu-html-step h1 { font-size: 1.48rem !important; margin-bottom: 0.55rem !important; max-width: none !important; }
.giu-html-step .giu-split__grid { grid-template-columns: 1.18fr 0.82fr !important; gap: 1.5rem !important; align-items: start !important; }
.giu-html-step p { font-size: 0.75rem !important; line-height: 1.42 !important; margin-top: 0.35rem !important; margin-bottom: 0.45rem !important; }
.giu-html-step li { font-size: 0.74rem !important; line-height: 1.42 !important; margin-bottom: 0.28rem !important; }
.giu-html-step img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

<FileTag name="menu.html (inside <div class=&quot;card&quot;>)" state="edit" />

Below the `<div class="categories">` tag (still inside the `<div class="card">` tag in `menu.html`), add the dishes and checkout controls:

1. **First `<div class="item">` tag:** `<h2>` with `&#127828; Classic Double Smash` (🍔) + `<p>` with `2 Angus beef patties, cheddar &amp; house sauce — 145 EGP`.
2. **Second `<div class="item">` tag:** `<h2>` with `&#127812; Mushroom Swiss Burger` (🍄) + `<p>` with `Sauteed mushrooms, melted Swiss &amp; garlic aioli — 160 EGP`.
3. **Third `<div class="item">` tag:** `<h2>` with `&#127839; Loaded Cheese Fries` (🍟) + `<p>` with `Crispy crinkle fries &amp; warm cheddar sauce — 65 EGP`.
4. **Delivery note:** An `<input type="text">` tag with `placeholder="Add delivery note (e.g. extra sauce, no onions)..."`.
5. **Order button:** A `<button class="btn">` tag with text `Place Order &bull; 210 EGP` (`&bull;` renders •).

::right::

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — Complete Screen 2 HTML Skeleton</div>

![Step 12 browser snapshot](/img/lab-07/step-7.png)

---
layout: section
icon: code
sub: "Phase 4 — Link the shared style.css to menu.html and style the back link"
---

# 05 — Screen 2: CSS Styling

---
layout: split
title: "Step 13 of 14: link style.css & style the .back link"
dense: true
class: giu-css-table
---

<style>
.giu-css-table h1 { font-size: 1.44rem !important; margin-bottom: 0.45rem !important; max-width: none !important; }
.giu-css-table .giu-split__grid { grid-template-columns: 1.44fr 0.56fr !important; gap: 1.25rem !important; align-items: start !important; }
.giu-css-table p, .giu-css-table li { font-size: 0.74rem !important; line-height: 1.4 !important; margin-top: 0.28rem !important; margin-bottom: 0.32rem !important; }
.giu-css-table table { font-size: 0.72rem !important; margin: 0.3rem 0 0 !important; line-height: 1.35 !important; width: 100% !important; }
.giu-css-table th { padding: 0.32rem 0.45rem 0.32rem 0 !important; font-size: 0.74rem !important; white-space: nowrap !important; }
.giu-css-table td { padding: 0.32rem 0.45rem 0.32rem 0 !important; vertical-align: middle !important; white-space: nowrap !important; }
.giu-css-table td:first-child { width: auto !important; padding-right: 0.6rem !important; }
.giu-css-table td code { font-size: 0.68rem !important; padding: 0.1rem 0.3rem !important; white-space: nowrap !important; }
.giu-css-table img { max-height: 18rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

<FileTag name="menu.html + style.css" state="edit" />

Now watch the power of a **shared stylesheet** in a multi-page project:

1. Inside the `<head>` tag of `menu.html`, add `<link rel="stylesheet" href="style.css">` and save (`Ctrl + S`).
   - Because `menu.html` reuses `.card`, `.header`, `.categories`, `.cat`, `.item`, `input`, and `.btn`, **95% of Screen 2 styles itself immediately**!
2. At the bottom of `style.css`, add one rule for the `<a class="back">` link inside the orange header:

| Selector | Property | Value |
|---|---|---|
| `.back` | `color` | `#ffedd5` |
| `.back` | `font-size` / `font-weight` | `12px` / `bold` |
| `.back` | `text-decoration` | `none` |
| `.back` | `margin-bottom` | `8px` |

::right::

<div class="text-[0.64rem] font-bold uppercase tracking-wider text-slate-500 text-center mb-1.5">Timeline Snapshot — Screen 2 Complete!</div>

![Step 13 browser snapshot](/img/lab-07/step-8.png)

---
layout: split
title: "Checkpoint: test your 2-screen navigation loop"
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.52rem !important; margin-bottom: 0.65rem !important; }
</style>

<Activity label="Test both pages in your browser">

1. Open `index.html` in your browser (using **Open with Live Server** in VS Code, or double-clicking `index.html`).
2. Confirm Screen 1 displays the orange Talabat header, 4 category pills in a row, promo box, 2 restaurant cards, and the orange bottom button.
3. Click **Open Burger Republic Menu →** and verify the browser navigates to `menu.html`.
4. On `menu.html`, click **← Back to Talabat Home** and verify it returns to `index.html`.

</Activity>

Getting a `Cannot GET` error or missing styles? Jump to <Link to="fix-links">**Broken links**</Link> or <Link to="fix-styles">**Missing styles**</Link> in Troubleshooting.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 text-xs">
  <div class="font-bold text-slate-900">How your two files connect</div>
  <div class="p-2.5 rounded-lg bg-white border border-blue-200 flex items-center justify-between">
    <span class="font-mono font-bold text-blue-800">index.html</span>
    <span class="text-[0.65rem] text-slate-600"><code>href="menu.html"</code> ➔ opens Screen 2</span>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-teal-200 flex items-center justify-between">
    <span class="font-mono font-bold text-teal-800">menu.html</span>
    <span class="text-[0.65rem] text-slate-600"><code>href="index.html"</code> ➔ returns to Screen 1</span>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-purple-200 flex items-center justify-between">
    <span class="font-mono font-bold text-purple-800">style.css</span>
    <span class="text-[0.65rem] text-slate-600">Linked in <code>&lt;head&gt;</code> of both HTML files</span>
  </div>
</div>

---
layout: section
icon: lifecycle
sub: "Phase 5 — Commit your changes with Git and push your project to GitHub"
---

# 06 — Commit & Push to GitHub

---
layout: split
title: "Step 14 of 14: commit your work & push to GitHub"
wideRight: true
dense: true
class: giu-step-1
---

<style>
.giu-step-1 h1 { max-width: none !important; font-size: 1.52rem !important; margin-bottom: 0.65rem !important; }
</style>

Using the <Tool name="git" /> and <Tool name="github" /> setup from **Lab 6**, commit your 2-screen app and push it to GitHub:

1. In <Tool name="vscode" />, open the Terminal (**Terminal → New Terminal**).
2. Run `git init`, `git add .`, and `git commit` inside `ica-lab-07/`.
3. On [github.com](https://github.com), click **`+` → New repository**, name it `ica-lab-07` (**Public**, **Add a README** unchecked), and click **Create repository**.
4. Connect your local repo and push to `main`.

::right::

<Activity label="Run in the VS Code Terminal">

1. Initialize and commit locally:

```bash
git init
git add .
git commit -m "Build two-screen Talabat app"
```

2. Link your GitHub repository and push:

```bash
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

3. Refresh `https://github.com/<your-username>/ica-lab-07` and confirm `index.html`, `menu.html`, and `style.css` are online!

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
| `Cannot GET /menu.html` | Filename in `href="menu.html"` does not match the actual filename in VS Code Explorer. Make sure it is named `menu.html` in lowercase. |
| Clicking the button does nothing | Make sure you used `<a class="btn" href="menu.html">...</a>` on `index.html` and included the `href` attribute. |
| Back link does not return home | Check that the top link in `menu.html` has `href="index.html"` (`<a class="back" href="index.html">`). |

---
layout: default
routeAlias: fix-styles
dense: true
class: giu-fix
---

# Missing styles or underlined buttons

| Symptom | Cause & exact fix |
|---|---|
| `menu.html` has zero styling | Confirm `<link rel="stylesheet" href="style.css">` is inside `<head>` of `menu.html` and press `Ctrl + S` to save. |
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
- [MDN — CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) — stacking cards vertically (`flex-direction: column`) and aligning category pills horizontally

## Git & GitHub Workflow

- [Git Cheat Sheet (GitHub Education)](https://education.github.com/git-cheat-sheet-education.pdf) — quick reference for `git init`, `git add .`, `git commit`, and `git push`

<div class="giu-refs__note">Make sure your <code>ica-lab-07</code> repository is pushed to GitHub and verified before leaving the lab!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for questions — make sure your 2-screen app is pushed to GitHub!
---

# Questions?
