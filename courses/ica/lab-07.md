---
theme: ../../theme
title: BINF 301 - Lab 7 - Multi-File & Multi-Page Web Architecture
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 7
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 7 — Multi-File & Multi-Page Web Architecture</h1>

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
| 5 min | **Recap:** From a single card (Lab 6) to a multi-page web app |
| 10 min | **Multi-Page Structure:** Multiple `.html` files sharing one `style.css` & `assets/` |
| 10 min | **Page Routing (`<a href>`):** Turning Lab 4 Figma wires & back arrows into HTML links |
| 10 min | **Figma-to-CSS Patterns:** Reusable classes, sticky headers & horizontal carousels |
| 10 min | **Code Walkthrough:** Wiring the 3-screen Talabat skeleton in VS Code |
| 35 min | **Graded In-Lab Assignment:** Recreate your Lab 4 Figma screens & push to GitHub |

---
layout: section
icon: lifecycle
sub: Turning your Lab 4 multi-screen Figma prototype into a real multi-page HTML & CSS website
---

# 01 — From one screen to a multi-page app

---
layout: default
icon: recap
journey:
  - { title: "Labs 3 & 4", code: "Figma Prototype", sub: "Home ➔ Food Delivery ➔ Restaurant" }
  - { title: "Lab 5", code: "Single HTML File", sub: "Tags, Flexbox & Box Model in Notepad" }
  - { title: "Lab 6", code: "VS Code + Git", sub: "Separated index.html, style.css, assets/" }
  - { title: "Lab 7 (Today)", code: "Multi-Page App", sub: "Linked .html pages + shared style.css" }
---

# Bridging Figma (Lab 4) and VS Code (Lab 6)

In **Lab 4**, you connected multiple mobile screens in <Tool name="figma" /> (**Home**, **Food Delivery**, and **Restaurant Menus**) with click triggers, back buttons, and sticky headers.

<Flow :steps="$frontmatter.journey" />

Today you will recreate those **exact Figma screens** in <Tool name="vscode" /> as a **multi-file, multi-page frontend project** and push it to <Tool name="github" />.

---
layout: default
icon: intro
dense: true
class: giu-screens
---

<style>
.giu-screens img { max-height: 12.5rem !important; width: auto !important; margin: 0 auto !important; border-radius: 0.75rem; border: 1px solid #cbd5e1; }
</style>

# The Lab 4 Figma screens you will recreate today

Each Figma frame from Lab 4 becomes its own `.html` file inside your project folder:

<div class="grid grid-cols-3 gap-3 mt-1.5 text-center text-xs">
  <div class="p-2 rounded-xl border border-blue-200 bg-blue-50/40">
    <div class="font-bold text-blue-900 mb-1">1. Home Screen</div>
    <img src="/img/screens/talabat-home.jpg" alt="Talabat Home Screen" />
    <div class="mt-1.5 font-mono font-bold text-[0.65rem] text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200 inline-block">index.html</div>
  </div>
  <div class="p-2 rounded-xl border border-teal-200 bg-teal-50/40">
    <div class="font-bold text-teal-900 mb-1">2. Food Delivery Feed</div>
    <img src="/img/screens/talabat-food-delivery.jpg" alt="Talabat Food Delivery Screen" />
    <div class="mt-1.5 font-mono font-bold text-[0.65rem] text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200 inline-block">food-delivery.html</div>
  </div>
  <div class="p-2 rounded-xl border border-purple-200 bg-purple-50/40">
    <div class="font-bold text-purple-900 mb-1">3. Restaurant Menu</div>
    <img src="/img/screens/talabat-menu.jpg" alt="Talabat Restaurant Menu Screen" />
    <div class="mt-1.5 font-mono font-bold text-[0.65rem] text-purple-800 bg-white px-2 py-0.5 rounded border border-purple-200 inline-block">burger-republic.html</div>
  </div>
</div>

---
layout: split
title: Multi-page project structure
wideRight: true
dense: true
---

In a multi-page website:

- **Every screen is a separate `.html` file** at the root of your project folder.
- **`index.html` is always the Home screen**—browsers and web servers open `index.html` first by default.
- **One `style.css` file** is shared by every page so you never duplicate CSS rules.
- **One `assets/` folder** holds all logos, icons, and dish photos used across pages.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-1.5">
  <div class="font-bold text-slate-900">ica-lab-07/</div>
  <div class="pl-4 space-y-1.5 text-[0.68rem]">
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.6rem] text-slate-600">Screen 1: Home (entry page)</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── food-delivery.html</span>
      <span class="font-sans text-[0.6rem] text-slate-600">Screen 2: Restaurant feed</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-purple-200">
      <span class="font-bold text-purple-800">├── burger-republic.html</span>
      <span class="font-sans text-[0.6rem] text-slate-600">Screen 3: Restaurant menu</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-emerald-200">
      <span class="font-bold text-emerald-800">├── style.css</span>
      <span class="font-sans text-[0.6rem] text-slate-600">Linked in <code>&lt;head&gt;</code> of all 3 pages</span>
    </div>
    <div class="p-1.5 rounded bg-white border border-amber-200">
      <div class="flex items-center justify-between">
        <span class="font-bold text-amber-900">└── assets/</span>
        <span class="font-sans text-[0.6rem] text-slate-600">Shared logos, banners &amp; dish images</span>
      </div>
    </div>
  </div>
</div>

<div class="giu-refs__note">Naming rule: always use <strong>lowercase letters and hyphens</strong> for HTML filenames (<code>food-delivery.html</code>, never <code>Food Delivery.html</code> with spaces).</div>

---
layout: section
icon: code
sub: Translating Figma prototype wires, master components, and scroll settings into HTML & CSS
---

# 02 — Connecting pages & sharing styles

---
layout: split
title: "Figma wires ➔ HTML anchor links"
wideRight: true
dense: true
---

In **Lab 4**, you dragged blue prototype wires in Figma (`On click ➔ Navigate to`).

In **HTML**, the **`<a>` (anchor) tag** with `href` is your prototype wire:

- **Forward wire:** Wrap a tile or card in `<a class="card-link" href="...">...</a>`.
- **Back wire:** Wire the top-left arrow to `<a href="index.html">&larr;</a>`.
- **No blue underline:** Add `.card-link { text-decoration: none; color: inherit; display: block; }` in `style.css`.

::right::

| Action | Page | HTML `<a href>` wire |
|---|---|---|
| Tap **Food** | `index.html` | `<a class="card-link" href="food-delivery.html">` |
| Tap **← Back** | `food-delivery.html` | `<a href="index.html">&larr;</a>` |
| Tap **Restaurant** | `food-delivery.html` | `<a class="card-link" href="burger-republic.html">` |
| Tap **← Back** | `burger-republic.html` | `<a href="food-delivery.html">&larr;</a>` |

---
layout: default
icon: tools
dense: true
---

# Figma features ➔ CSS rules

Every layout and prototyping feature from **Labs 3 & 4** has a direct CSS equivalent in `style.css`:

| In Figma | In HTML & CSS | CSS properties in `style.css` |
|---|---|---|
| **Mobile Frame** (`393px`) | `.app` wrapper div | `.app { width: 393px; background: #fff; }` |
| **Auto-Layout** (`Shift+A`) | Flexbox container | `display: flex; gap: 12px; align-items: center;` |
| **Master Component** | Shared CSS class | Define `.rest-card` once in `style.css`; reuse on every card |
| **Fixed Header / Nav** | Sticky positioning | `.top-bar { position: sticky; top: 0; }` |
| **Horizontal Carousel** | Horizontal flex scroll | `.scroll-row { display: flex; gap: 12px; overflow-x: auto; }` |
| **2-Col Dish Grid** | CSS Grid layout | `.menu-grid { display: grid; grid-template-columns: 1fr 1fr; }` |

---
layout: section
icon: code
sub: Step-by-step walkthrough of the 3-page navigation skeleton before you flesh out the full UI
---

# 03 — Code walkthrough: 3 linked pages

---
layout: split
title: "The plan: 4 files in 4 steps"
dense: true
---

Before building all the visual cards, always wire the **multi-page skeleton** first and test that every link works:

1. **Step 1** — Create the shared `style.css`
2. **Step 2** — Create Screen 1: `index.html` (links to `food-delivery.html`)
3. **Step 3** — Create Screen 2: `food-delivery.html` (links back to `index.html` and forward to `burger-republic.html`)
4. **Step 4** — Create Screen 3: `burger-republic.html` (links back to `food-delivery.html`)

::right::

```text
ica-lab-07/
├── assets/
│   └── food.svg          (image assets)
├── style.css             (Step 1: CSS)
├── index.html            (Step 2: Home)
├── food-delivery.html    (Step 3: Feed)
└── burger-republic.html  (Step 4: Menu)
```

<div class="giu-refs__note">All four files live in the same root folder (<code>ica-lab-07/</code>), so every page links to <code>href="style.css"</code> and can navigate to any sibling page by its filename.</div>

---
layout: split
title: "Step 1 of 4: shared style.css"
dense: true
---

1. Create a new folder `ica-lab-07` and open it in <Tool name="vscode" />.
2. Create `style.css` at the root of `ica-lab-07/`.
3. Add the shared layout classes on the right and press `Ctrl + S` to **save**:
   - `.app` locks the `393px` mobile viewport width.
   - `.top-bar` pins the navigation header with `position: sticky; top: 0;`.
   - `.card-link` removes the default underline from clickable `<a href>` cards.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-07/style.css

---
layout: split
title: "Step 2 of 4: index.html (Home)"
dense: true
---

1. Create `index.html` next to `style.css`.
2. Notice the two highlighted parts:
   - **Line 5** loads the shared `style.css`.
   - **Lines 10–11** wrap the **Food** service tile inside `<a class="card-link" href="food-delivery.html">` so clicking **Food** opens Screen 2.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-07/index.html {5,10-11}

---
layout: split
title: "Step 3 of 4: the Feed page"
dense: true
---

1. Create `food-delivery.html` next to `index.html`.
2. Look at the three highlighted lines:
   - **Line 5** reuses the exact same `style.css`.
   - **Line 10** wires the top-left back arrow (`&larr;`) to `href="index.html"`.
   - **Line 12** wires the **Burger Republic** card to `href="burger-republic.html"`.

::right::

<FileTag name="food-delivery.html" state="new" />

<<< @/snippets/lab-07/food-delivery.html {5,10,12-13}

---
layout: split
title: "Step 4 of 4: the Menu page"
dense: true
---

1. Create `burger-republic.html` next to `food-delivery.html`.
2. Look at the two highlighted lines:
   - **Line 5** links the same `style.css` stylesheet.
   - **Line 10** wires the top-left back arrow (`&larr;`) to `href="food-delivery.html"`, returning to the Food Delivery feed.

::right::

<FileTag name="burger-republic.html" state="new" />

<<< @/snippets/lab-07/burger-republic.html {5,10}

---
layout: split
title: "Checkpoint: test the 3-page loop"
dense: true
---

<Activity label="Click through your pages">

1. Right-click `index.html` in VS Code and select **Open with Live Server**.
2. Click **Food** ➔ opens `/food-delivery.html`.
3. Click **Burger Republic** ➔ opens `/burger-republic.html`.
4. Click **`←`** on Menu ➔ returns to `/food-delivery.html`.
5. Click **`←`** on Feed ➔ returns to `/index.html`.

</Activity>

Something broken? Check <Link to="fix-links">**Broken links (404)**</Link> or <Link to="fix-styles">**Missing styles**</Link> in Troubleshooting.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
  <div class="font-bold text-slate-900">Your Multi-Page Navigation Graph</div>
  <div class="p-2.5 rounded-lg bg-white border border-blue-200 flex items-center justify-between">
    <span class="font-mono font-bold text-blue-800">index.html</span>
    <span class="text-[0.65rem] text-slate-600">Tap Food ➔ <code>food-delivery.html</code></span>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-teal-200 flex items-center justify-between">
    <span class="font-mono font-bold text-teal-800">food-delivery.html</span>
    <span class="text-[0.65rem] text-slate-600">Tap ← ➔ <code>index.html</code> • Tap Card ➔ Menu</span>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-purple-200 flex items-center justify-between">
    <span class="font-mono font-bold text-purple-800">burger-republic.html</span>
    <span class="text-[0.65rem] text-slate-600">Tap ← ➔ <code>food-delivery.html</code></span>
  </div>
</div>

---
layout: section
icon: assignment
sub: 35-minute graded in-lab sprint — Recreate the Lab 4 Talabat screens as a multi-page website & push to GitHub
---

# 04 — Graded in-lab assignment

---
layout: default
icon: assignment
dense: true
---

# In-Lab Assignment: Multi-Page Figma-to-Code

<div class="p-2 rounded-lg border border-amber-200 bg-amber-50 text-[0.67rem] text-amber-900 flex items-center justify-between mb-1.5">
  <div class="flex items-center gap-1.5">
    <span class="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">GRADED (100 PTS)</span>
    <span><strong>Goal:</strong> Recreate the Lab 4 Figma screens as a multi-page HTML/CSS project in VS Code &amp; push to GitHub</span>
  </div>
  <div class="flex items-center gap-1.5 font-mono text-[0.6rem]">
    <a href="https://www.figma.com/community/file/1688178288499788693" target="_blank" class="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 no-underline shadow-2xs" style="text-decoration: none;">Lab 4 Figma Reference ↗</a>
    <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-800 font-bold hover:bg-amber-50 no-underline shadow-2xs" style="text-decoration: none;">Brand Guidelines ↗</a>
  </div>
</div>

<div class="grid grid-cols-3 gap-2.5 text-[0.68rem]">
  <div class="p-2 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900">1. Home (<code>index.html</code>)</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Screen 1</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-600 text-[0.62rem]">
        <li>Orange header (<code>#FF5A00</code>) with address &amp; search bar.</li>
        <li>5 service tiles row (<strong>Food</strong> wired to <code>food-delivery.html</code>).</li>
        <li>Promo banner card ("Buy 1 get 1 FREE") &amp; Redeem cards.</li>
        <li>Sticky bottom navigation bar (<code>Home</code>, <code>Orders</code>, <code>Pay</code>, <code>Account</code>).</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-blue-700 font-semibold pt-1 mt-1.5 border-t border-blue-200">Entry Page + Forward Link</div>
  </div>

  <div class="p-2 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900">2. Feed (<code>food-delivery.html</code>)</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Screen 2</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-600 text-[0.62rem]">
        <li>Sticky top bar with <code>&larr;</code> back link to <code>index.html</code> &amp; search input.</li>
        <li>3 horizontal promo deal cards (<code>30% off</code>, <code>pro day</code>, <code>Hot deals</code>).</li>
        <li>Top-rated restaurant cards with logos, ratings, ETA &amp; fee.</li>
        <li>Restaurant card(s) wired with <code>&lt;a href&gt;</code> to their menu page(s).</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-teal-700 font-semibold pt-1 mt-1.5 border-t border-teal-200">Feed + Multi-Page Links</div>
  </div>

  <div class="p-2 rounded-xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900">3. Menu (<code>burger-republic.html</code>)</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Screen 3+</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-600 text-[0.62rem]">
        <li>Hero banner with <code>&larr;</code> back link to <code>food-delivery.html</code>.</li>
        <li>Floating restaurant info card (logo, rating <code>4.7 ★</code>, ETA, fee).</li>
        <li>Discount row (<code>50% off</code>, <code>Emirates NBD</code>, <code>Mastercard</code>).</li>
        <li>2-column dish grid (<code>Bestie deal</code>, <code>Mushroom Ranch</code>) + prices.</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-purple-700 font-semibold pt-1 mt-1.5 border-t border-purple-200">Menu Detail + Back Link</div>
  </div>
</div>

---
layout: default
icon: activity
dense: true
---

# Grading rubric: What TAs will check (100 Points)

Your multi-page project will be evaluated across four pillars (25 points each):

<div class="grid grid-cols-4 gap-2.5 mt-2 text-[0.68rem]">
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-blue-900 text-xs">1. Multi-File Setup</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Separate Files:</strong> Distinct <code>.html</code> file per screen</li>
        <li><strong>Shared CSS:</strong> One <code>style.css</code> linked on all pages (no <code>&lt;style&gt;</code> tags)</li>
        <li><strong>Assets Folder:</strong> All images/SVGs organized inside <code>assets/</code></li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-blue-700 font-bold pt-1.5 mt-1 border-t border-blue-200">Folder Hygiene</div>
  </div>

  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-purple-900 text-xs">2. Page Routing</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-purple-100 text-purple-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Forward Links:</strong> Home &rarr; Feed &rarr; Restaurant Menu works</li>
        <li><strong>Back Arrows:</strong> Every inner screen links back to the previous page</li>
        <li><strong>Clean Links:</strong> No raw blue underlined text inside cards</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-purple-700 font-bold pt-1.5 mt-1 border-t border-purple-200">Bidirectional Links</div>
  </div>

  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">3. UI &amp; Layout</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Mobile Viewport:</strong> Centered <code>393px</code> container on all screens</li>
        <li><strong>Flexbox &amp; Grid:</strong> Service tiles, deals row, and 2-col dish grid</li>
        <li><strong>Brand Tokens:</strong> Talabat orange (<code>#FF5A00</code>), cards &amp; badges</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-teal-700 font-bold pt-1.5 mt-1 border-t border-teal-200">Figma Fidelity</div>
  </div>

  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-amber-900 text-xs">4. Git &amp; GitHub</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-amber-100 text-amber-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Git Repo:</strong> Initialized with meaningful commits</li>
        <li><strong>Pushed Online:</strong> Public GitHub repo (<code>ica-lab-07</code>)</li>
        <li><strong>Complete Tree:</strong> All <code>.html</code>, <code>style.css</code> &amp; <code>assets/</code> on GitHub</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-amber-700 font-bold pt-1.5 mt-1 border-t border-amber-200">Version Control</div>
  </div>
</div>

---
layout: split
title: Self-audit checklist
dense: true
---

Before calling a TA or submitting your GitHub link, verify all four checks:

<Activity label="Run these 4 checks">

1. **Click-through test:** `index.html` ➔ **Food** ➔ **Burger Republic** ➔ **`←`** ➔ **`←`** works with zero `404` errors.
2. **No `<style>` tags:** Every `.html` file loads styles via `<link rel="stylesheet" href="style.css">`.
3. **Assets load:** Every `<img>` points to `assets/...` with no broken icons.
4. **GitHub check:** All `.html` files, `style.css`, and `assets/` are visible on GitHub.

</Activity>

::right::

### Exporting images from Figma (quick tip)

Need a logo, banner, or dish photo from the Lab 4 Figma file?

1. Click the image or logo frame in <Tool name="figma" />.
2. Scroll to the bottom of the right sidebar and click **Export (`+`)**.
3. Choose **PNG** (for photos) or **SVG** (for icons/logos).
4. Save directly into `ica-lab-07/assets/` with a short lowercase name (e.g., `burger-logo.png`).

---
layout: section
icon: tools
sub: Fixing broken links, missing styles on inner pages, and unstyled anchor tags
---

# Troubleshooting

---
layout: default
routeAlias: fix-links
dense: true
---

# Broken links (404 errors)

| Symptom | Cause & exact fix |
|---|---|
| `Cannot GET /food-delivery.html` | Filename in `href="..."` does not match the actual file name in VS Code Explorer. Check spelling and lowercase hyphens (`food-delivery.html`). |
| `←` jumps to Home instead of Feed | Back arrow `href` on `burger-republic.html` was copied without updating: set it to `<a href="food-delivery.html">&larr;</a>`. |
| Clicking a card does nothing | Make sure `<a class="card-link" href="...">` wraps **around** the card `<div>...</div>` and includes the `href` attribute. |

---
layout: default
routeAlias: fix-styles
dense: true
---

# Missing styles or blue underlines

| Symptom | Cause & exact fix |
|---|---|
| `food-delivery.html` is unstyled | Every `.html` file needs `<link rel="stylesheet" href="style.css">` inside its own `<head>`. |
| Card text is blue and underlined | Browsers underline `<a href>` by default. Add `class="card-link"` and `.card-link { text-decoration: none; color: inherit; display: block; }` in `style.css`. |
| Images break on inner pages | Keep all `.html` files together at the root of `ica-lab-07/`, outside `assets/`, so `src="assets/..."` resolves from every page. |

---
layout: refs
title: References & useful links
dense: true
---

## Lab 7 Design & Brand Resources

- [Figma Community — Official Talabat Prototyping Starter Kit (Lab 4)](https://www.figma.com/community/file/1688178288499788693) — reference screens, tokens & exportable assets
- [Talabat Brand & Typography Guidelines (PDF)](https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing) — color palette & typography tokens

## Multi-Page HTML & CSS Documentation

- [MDN — Creating hyperlinks (`<a href>`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links) — linking between pages in the same project
- [MDN — CSS `position: sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) — pinning headers and bottom navigation bars
- [MDN — CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) — horizontal rows and flexible cards
- [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) — building 2-column dish card grids

<div class="giu-refs__note">Keep the Lab 4 Figma file open next to VS Code while building your multi-page project!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for questions — push your multi-page repository to GitHub before leaving!
---

# Questions?
