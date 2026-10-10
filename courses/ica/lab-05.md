---
theme: ../../theme
title: BINF 301 - Lab 5 - From Figma to Code — HTML & CSS Foundations
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 5
lineNumbers: true
layout: cover
---

<!-- Slide 1 -->

<h1 style="max-width:70% ">Information & Communication Architecture — Lab 5 — From Figma to Code: HTML & CSS Foundations</h1>

---
layout: people
title: Contacts
---

<!-- Slide 2 -->

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

<!-- Slide 3 -->

# Lab agenda

| Duration | Topic |
|---|---|
| 5 min | **The Bridge:** Connecting Lab 2 Figma to the Browser |
| 10 min | **HTML Primitives:** `<div>`, `<h1>`, `<p>`, `<input>`, `<button>` |
| 15 min | **CSS Core:** Flexbox Stacking, Box Model & Surface Polish |
| 10 min | **Beyond the Basics:** Modern HTML & MDN Launchpad |
| 5 min | **TA Live Demo:** Building a Login Page Live in Notepad |
| 30 min | **In-Class Practice (Ungraded):** Sign-Up Card Sprint |
| 15 min | **Take-Home Assignment (Graded):** Specs, Rules & 1-Week Deadline |

---
layout: section
icon: intro
sub: Connecting visual design systems to real web markup
---

<!-- Slide 4 -->

# 01 — The Figma to code bridge

---
layout: split
title: Recalling Lab 2 — Mobile Sign-Up Screen
icon: intro
dense: true
---

<!-- Slide 5 -->

In Lab 2, you designed a mobile card in Figma anchored by three pillars: **hierarchy**, **contrast**, and **consistency**.

**Four core UI elements:**
- **Card Container:** Outer frame with background fill and corner rounding
- **Typography:** Bold headline paired with muted secondary subtitle
- **Input Fields:** Form controls for Full Name, Email, and Password
- **Primary CTA:** High-contrast action button with touch padding

::right::

<div class="w-60 rounded-xl border border-slate-200 bg-white shadow-md mx-auto p-4 flex flex-col gap-2 text-xs">
  <div class="text-sm font-bold text-slate-900 leading-tight">Create Account</div>
  <div class="text-[0.6rem] text-slate-500 -mt-1">Sign up to get started</div>
  <div class="space-y-1.5 mt-1">
    <div class="p-1.5 rounded-lg border border-slate-300 text-[0.6rem] text-slate-400 bg-slate-50">Full Name</div>
    <div class="p-1.5 rounded-lg border border-slate-300 text-[0.6rem] text-slate-400 bg-slate-50">Email Address</div>
    <div class="p-1.5 rounded-lg border border-slate-300 text-[0.6rem] text-slate-400 bg-slate-50">Password</div>
  </div>
  <button class="w-full py-1.5 bg-blue-700 text-white text-[0.68rem] font-semibold rounded-lg mt-1">Create Account</button>
  <div class="text-[0.55rem] text-center text-slate-500">Already have an account? Log in</div>
</div>

---
layout: split
title: The Notepad Workflow — Zero Dependencies
icon: tools
dense: true
---

<!-- Slide 6 -->

### The Browser Iteration Loop

Browsers read plain `.html` files directly—no build tools or compilers required:

1. **Write:** Open **Notepad** (or TextEdit).
2. **Save:** Save as `login.html`
   - Save as type: **All Files (`*.*`)**
   - Encoding: **UTF-8**
3. **Open:** Double-click `login.html` in Chrome or Edge.
4. **Iterate:** Edit in Notepad → `Ctrl + S` → Refresh (`F5`).

::right::

<div class="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 text-xs space-y-2">
  <div class="font-bold text-amber-900 text-sm">Crucial Notepad Rule</div>
  <p class="text-slate-700 leading-relaxed text-[0.72rem]">
    Windows Notepad tries to append <code>.txt</code> to your filename, saving as <code>login.html.txt</code>.
  </p>
  <div class="p-2 rounded bg-white border border-amber-300 font-mono text-[0.68rem] text-slate-800">
    File name: "login.html"<br>
    Save as type: All Files (*.*)
  </div>
  <p class="text-[0.68rem] text-amber-800 font-medium">
    If the file opens as plain text in Chrome, rename it to remove the trailing <code>.txt</code>.
  </p>
</div>

---
layout: section
icon: code
sub: The semantic building blocks of web interfaces
---

<!-- Slide 7 -->

# 02 — The HTML primitives

---
layout: split
title: The Card Frame — The div Tag
icon: code
dense: true
---

<!-- Slide 8 -->

### From Figma Frame to HTML `<div>`

In Figma, every component starts with a **Frame**. In HTML, that container is a **`<div>`** (content division):

```html
<div>
  <!-- Card content lives here -->
</div>
```

- **Grouping:** Bundles titles, inputs, and buttons into one structural card boundary.
- **Styling Target:** Receives background color, padding, and corner rounding in CSS.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
  <div class="font-bold text-slate-900 text-sm">Why &lt;div&gt;?</div>
  <p class="text-slate-600 leading-relaxed text-[0.72rem]">
    <code>&lt;div&gt;</code> is a pure, unstyled container.
  </p>
  <p class="text-slate-600 leading-relaxed text-[0.72rem]">
    Like an empty Figma frame, it carries zero default opinions and provides a clean canvas for your CSS layout and colors.
  </p>
</div>

---
layout: split
title: Typographic Hierarchy — h1 and p Tags
icon: code
dense: true
---

<!-- Slide 9 -->

### Semantic Text Levels

HTML tags give text automatic visual priority:

```html
<h1>Welcome Back</h1>
<p>Sign in to your account</p>
```

- **`<h1>` (Heading 1):** Dominant title. Bold and prominent by default.
- **`<p>` (Paragraph):** Secondary copy for descriptions and subtitles.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-white text-xs space-y-2.5">
  <div class="font-bold text-slate-900">Browser Default Hierarchy:</div>
  <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
    <h1 style="font-size: 1.2rem; font-weight: bold; margin: 0; color: #0f172a;">Welcome Back</h1>
    <p style="font-size: 0.75rem; color: #64748b; margin: 4px 0 0 0;">Sign in to your account</p>
  </div>
  <p class="text-[0.68rem] text-slate-600 leading-tight">
    Notice how <code>&lt;h1&gt;</code> establishes immediate visual dominance over <code>&lt;p&gt;</code> even without custom CSS.
  </p>
</div>

---
layout: split
title: Interactive Controls — input and button Tags
icon: code
dense: true
---

<!-- Slide 10 -->

### Inputs & Actions

```html
<input type="email" placeholder="Email Address">
<input type="password" placeholder="Password">
<button>Sign In</button>
```

- **`<input>`:** Self-closing data field.
  - `type`: Sets keyboard behavior (`email`) or masks text (`password`).
  - `placeholder`: Ghost hint text inside the field.
- **`<button>`:** Clickable trigger for the primary card action.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-white text-xs space-y-2">
  <div class="font-bold text-slate-900 text-xs">Live Interactive Elements:</div>
  <div class="space-y-1.5">
    <input type="email" placeholder="Email Address" class="w-full p-1.5 rounded border border-slate-300 text-xs bg-slate-50" readonly />
    <input type="password" value="secret123" class="w-full p-1.5 rounded border border-slate-300 text-xs bg-slate-50" readonly />
    <button class="w-full py-1.5 bg-blue-600 text-white rounded text-xs font-semibold">Sign In</button>
  </div>
</div>

---
layout: split
title: The Complete HTML Skeleton
icon: code
dense: true
---

<!-- Slide 11 -->

### `login.html` (Structure Only)

Combining all 5 primitives into one working file:

```html
<div>
  <h1>Welcome Back</h1>
  <p>Sign in to your account</p>

  <input type="email" placeholder="Email Address">
  <input type="password" placeholder="Password">

  <button>Sign In</button>
</div>
```

- **Functional:** Interactive typing and clicking work immediately.
- **Unstyled:** Uses raw browser defaults. Next: styling with CSS!

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
  <div class="font-bold text-slate-900 text-xs">Raw Browser Rendering:</div>
  <div class="p-3 bg-white border border-slate-300 rounded space-y-1">
    <h1 style="font-size: 1.1rem; font-weight: bold; margin: 0;">Welcome Back</h1>
    <p style="font-size: 0.7rem; color: gray; margin: 0 0 6px 0;">Sign in to your account</p>
    <div class="space-x-1">
      <input type="email" placeholder="Email Address" class="border p-0.5 text-[0.6rem] w-24" readonly />
      <input type="password" value="pass" class="border p-0.5 text-[0.6rem] w-16" readonly />
      <button class="border bg-slate-200 text-[0.6rem] px-1">Sign In</button>
    </div>
  </div>
  <p class="text-[0.68rem] text-slate-600 leading-tight">
    By default, inputs sit side-by-side. We need CSS Flexbox to stack them vertically with comfortable spacing.
  </p>
</div>

---
layout: section
icon: lifecycle
sub: Layout systems, spatial discipline, and surface styling
---

<!-- Slide 12 -->

# 03 — The 6 CSS properties

---
layout: split
title: "Layout Flow — display: flex"
icon: lifecycle
dense: true
---

<!-- Slide 13 -->

### From Inline to Vertical Auto-Layout

By default, `<input>` and `<button>` sit inline horizontally.

Applying `display: flex; flex-direction: column;` creates a vertical stacking layout:

```css
div {
  display: flex;
  flex-direction: column;
}
```

- **Vertical Flow:** Children stack top-to-bottom automatically.
- **Full Width:** Fields expand to match the card container width.

::right::

<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="p-2.5 rounded-lg border border-rose-200 bg-rose-50/60">
    <div class="text-[0.62rem] font-bold text-rose-800 mb-1">Default (Inline)</div>
    <div class="p-2 bg-white rounded border border-slate-300 text-[0.55rem] space-x-1">
      <span class="border p-0.5">Input</span>
      <span class="border p-0.5">Input</span>
      <span class="border p-0.5">Btn</span>
    </div>
    <div class="text-[0.55rem] text-slate-500 mt-1">Crammed side-by-side</div>
  </div>

  <div class="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50/60">
    <div class="text-[0.62rem] font-bold text-emerald-800 mb-1">display: flex (column)</div>
    <div class="p-2 bg-white rounded border border-slate-300 text-[0.55rem] space-y-1">
      <div class="border p-0.5">Email Address</div>
      <div class="border p-0.5">Password</div>
      <div class="border p-0.5">Sign In</div>
    </div>
    <div class="text-[0.55rem] text-slate-500 mt-1">Clean vertical flow!</div>
  </div>
</div>

---
layout: split
title: The Box Model — padding vs. margin
icon: lifecycle
dense: true
---

<!-- Slide 14 -->

### Inside Spacing vs. Outside Spacing

Every web element is a rectangular box:

- **`padding` (Inside):**
  - Space between content and border.
  - Creates inner breathing room and finger-friendly touch targets.

- **`margin` (Outside):**
  - Space outside the border.
  - Pushes neighboring elements apart.

```css
div { padding: 24px; }
input { margin-bottom: 12px; }
```

::right::

<div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 text-xs space-y-2">
  <div class="font-bold text-blue-900 text-xs uppercase tracking-wide">The Box Model Visualized</div>
  
  <div class="p-2.5 bg-amber-100 border border-amber-300 rounded text-center">
    <span class="text-[0.62rem] font-bold text-amber-800 uppercase block mb-1">margin (outer gap)</span>
    <div class="p-2.5 bg-emerald-100 border-2 border-emerald-400 rounded text-center">
      <span class="text-[0.62rem] font-bold text-emerald-800 uppercase block mb-1">padding (inner cushion)</span>
      <div class="p-2 bg-white rounded border border-slate-400 text-[0.68rem] font-semibold text-slate-800">
        Element Content (Text / Input)
      </div>
    </div>
  </div>

  <p class="text-[0.68rem] text-slate-600">
    <strong>Golden Rule:</strong> Use <code>padding</code> to size the inside of boxes. Use <code>margin</code> to separate boxes from each other.
  </p>
</div>

---
layout: split
title: Surfaces & Scale — Visual Polish
icon: palette
dense: true
---

<!-- Slide 15 -->

### Matching the Figma Inspector

Three core properties bring your design to life:

- **`border-radius: 8px;` (Corner Rounding)**
  - Softens sharp 90-degree corners on cards, inputs, and buttons.

- **`font-size: 20px;` (Typographic Scale)**
  - Sets visual hierarchy between headline (`20px`) and subtitle (`13px`).

- **`background-color: white;` (Surface Color)**
  - Sets card surface (`white`) and CTA brand color (`#1d4ed8`).

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2.5">
  <div class="font-bold text-slate-900">Before & After Visual Properties:</div>

  <div class="p-2.5 bg-slate-200 rounded text-xs space-y-1 text-slate-700">
    <div class="text-[0.6rem] font-bold text-slate-500 uppercase">Without Styles</div>
    <div class="border border-black p-0.5 bg-white text-[0.6rem] inline-block">Sharp 0px square</div>
    <button class="border border-black bg-slate-300 text-[0.6rem] px-1">Raw button</button>
  </div>

  <div class="p-2.5 bg-white rounded-xl border border-blue-200 shadow-sm text-xs space-y-1.5">
    <div class="text-[0.6rem] font-bold text-blue-700 uppercase">With Visual Polish</div>
    <input type="text" placeholder="Soft 8px rounded field" class="w-full p-1.5 rounded-lg border border-slate-300 text-[0.65rem] bg-slate-50" readonly />
    <button class="w-full py-1.5 bg-blue-700 text-white rounded-lg text-[0.65rem] font-semibold">Styled CTA Button</button>
  </div>
</div>

---
layout: split
title: The Complete Styled Card — 25 Lines
icon: code
dense: true
---

<!-- Slide 16 -->

<div class="slidev-code-compact">

```html
<style>
  div {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 24px;
    border-radius: 12px;
  }
  h1 { font-size: 20px; margin-bottom: 4px; }
  p { font-size: 13px; color: #64748b; margin-bottom: 16px; }
  input {
    padding: 10px 14px;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
  }
  button {
    padding: 12px;
    background-color: #1d4ed8;
    color: white;
    border-radius: 8px;
    font-size: 14px;
  }
</style>

<div>
  <h1>Welcome Back</h1>
  <p>Sign in to your account</p>
  <input type="email" placeholder="Email Address">
  <input type="password" placeholder="Password">
  <button>Sign In</button>
</div>
```

</div>

::right::

<div class="p-4 rounded-xl border border-blue-200 bg-slate-100 flex flex-col items-center justify-center h-full">
  <div class="w-64 rounded-xl border border-slate-200 bg-white shadow-md p-4 space-y-2 text-xs">
    <div class="font-bold text-slate-900 text-sm">Welcome Back</div>
    <div class="text-[0.65rem] text-slate-500 -mt-1.5">Sign in to your account</div>
    <div class="space-y-1.5 pt-1">
      <input type="email" placeholder="Email Address" class="w-full p-2 text-xs rounded-lg border border-slate-200 bg-slate-50" readonly />
      <input type="password" value="secret123" class="w-full p-2 text-xs rounded-lg border border-slate-200 bg-slate-50" readonly />
    </div>
    <button class="w-full py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg mt-2">Sign In</button>
  </div>
  <div class="mt-2 text-[0.68rem] text-slate-500 font-medium">Rendered live in Chrome/Edge</div>
</div>

---
layout: section
icon: tools
sub: Discovering the full depth of standard web capabilities
---

<!-- Slide 17 -->

# 04 — The wider web & MDN launchpad

---
layout: default
icon: tools
dense: true
---

<!-- Slide 18 -->

# A glimpse into HTML superpowers

Browsers include powerful native UI primitives with **zero JavaScript**:

<div class="grid grid-cols-4 gap-3 mt-3 text-xs">
  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-blue-700 mb-1">&lt;select&gt; Dropdown</div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Native menus for options and categories.</p>
    </div>
    <select class="w-full p-1 rounded border border-slate-300 text-[0.65rem] bg-white">
      <option>Select City...</option>
      <option>Cairo</option>
      <option>Berlin</option>
    </select>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-teal-700 mb-1">Date & Color Pickers</div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Built-in calendar and color wheel widgets.</p>
    </div>
    <input type="date" value="2026-10-10" class="w-full p-1 rounded border border-slate-300 text-[0.65rem] bg-white" />
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-indigo-700 mb-1">&lt;details&gt; Accordion</div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Native collapsible FAQ cards without scripts.</p>
    </div>
    <details class="text-[0.65rem] bg-white p-1 rounded border border-slate-200">
      <summary class="font-semibold cursor-pointer">Terms & Conditions</summary>
      <span class="text-slate-500">I agree to the terms...</span>
    </details>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-emerald-700 mb-1">Checkboxes & Radios</div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Multi-selection and toggle controls.</p>
    </div>
    <label class="text-[0.65rem] flex items-center gap-1.5 cursor-pointer">
      <input type="checkbox" checked class="rounded" /> Remember login
    </label>
  </div>
</div>

<div class="mt-3 p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-[0.72rem] text-blue-900">
  <strong>Key Takeaway:</strong> Always check what standard HTML already provides before creating custom components from scratch.
</div>

---
layout: default
icon: tools
dense: true
---

<!-- Slide 19 -->

# The MDN Scavenger Guide — Explore for your assignment

Professional developers do not memorize every property—they consult **MDN Web Docs** (`developer.mozilla.org`).

**4 high-value searches for your take-home assignment:**

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">
  <div class="p-3 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Search 1: "MDN input types"</div>
    <p class="text-[0.68rem] text-slate-600 mb-1.5">Discover 20+ input types: <code>type="tel"</code>, <code>type="number"</code>, and <code>type="date"</code>.</p>
    <code class="text-[0.65rem] text-blue-700">&lt;input type="tel" placeholder="+20..."&gt;</code>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Search 2: "MDN box-shadow"</div>
    <p class="text-[0.68rem] text-slate-600 mb-1.5">Add soft card elevation shadows to match your Figma mockup.</p>
    <code class="text-[0.65rem] text-blue-700">box-shadow: 0 4px 6px rgba(0,0,0,0.1);</code>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Search 3: "MDN gap"</div>
    <p class="text-[0.68rem] text-slate-600 mb-1.5">Modern flexbox shortcut to space all child elements apart evenly.</p>
    <code class="text-[0.65rem] text-blue-700">div { display: flex; gap: 12px; }</code>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Search 4: "MDN border"</div>
    <p class="text-[0.68rem] text-slate-600 mb-1.5">Customize border width, style, and color for crisp input outlines.</p>
    <code class="text-[0.65rem] text-blue-700">border: 1px solid #cbd5e1;</code>
  </div>
</div>

---
layout: section
icon: activity
sub: Live demo, hands-on practice, and take-home assignment details
---

<!-- Slide 20 -->

# 05 — Live demo & activities

---
layout: default
icon: activity
dense: true
---

<!-- Slide 21 -->

# TA Live Demo — Building a Login Page in Notepad (5 mins)

Watch your TA build a working 2-field **Login Card** live from a blank file:

<div class="grid grid-cols-4 gap-3 mt-4 text-xs">
  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700 mb-1">Step 01</div>
    <div class="font-semibold text-slate-900 mb-1">Create File</div>
    <p class="text-[0.68rem] text-slate-600">Open Notepad, save as <code>login.html</code> (All Files <code>*.*</code>, UTF-8).</p>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700 mb-1">Step 02</div>
    <div class="font-semibold text-slate-900 mb-1">Write HTML</div>
    <p class="text-[0.68rem] text-slate-600">Add <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, inputs, and button.</p>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700 mb-1">Step 03</div>
    <div class="font-semibold text-slate-900 mb-1">Add Styles</div>
    <p class="text-[0.68rem] text-slate-600">Add <code>&lt;style&gt;</code>: flex column, padding, border-radius, background.</p>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700 mb-1">Step 04</div>
    <div class="font-semibold text-slate-900 mb-1">Open in Chrome</div>
    <p class="text-[0.68rem] text-slate-600">Double-click file, inspect card, and test interactive typing.</p>
  </div>
</div>

<div class="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
  TAs: Share your screen, open Notepad, type the 25-line login card live, save to Desktop, and open in Chrome.
</div>

---
layout: default
icon: activity
dense: true
---

<!-- Slide 22 -->

# In-Class Activity — Build your Lab 2 sign-up card (30 mins)

This activity is **not graded**—use this session to build muscle memory and ask TA questions:

<div class="grid grid-cols-2 gap-4 mt-3 text-xs">
  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
    <div class="font-bold text-slate-900 text-sm">Practice Challenge</div>
    <ul class="text-[0.72rem] text-slate-700 pl-3.5 space-y-1">
      <li><strong>File:</strong> <code>signup.html</code> created from scratch in Notepad.</li>
      <li><strong>Container:</strong> <code>&lt;div&gt;</code> with <code>display: flex; flex-direction: column;</code>.</li>
      <li><strong>Typography:</strong> <code>&lt;h1&gt;Create Account&lt;/h1&gt;</code> & <code>&lt;p&gt;</code> subtitle.</li>
      <li><strong>3 Fields:</strong> Full Name (<code>text</code>), Email (<code>email</code>), Password (<code>password</code>).</li>
      <li><strong>CTA Button:</strong> <code>&lt;button&gt;Create Account&lt;/button&gt;</code> styled with blue fill.</li>
    </ul>
  </div>

  <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between">
    <div>
      <div class="font-bold text-emerald-900 text-sm mb-1">Ungraded Practice Goals</div>
      <div class="text-[0.7rem] text-emerald-800 space-y-1.5">
        <div>Raise your hand if:</div>
        <div>• Your file opens as plain text instead of a webpage.</div>
        <div>• Your inputs sit side-by-side instead of stacking vertically.</div>
        <div>• You want to experiment with MDN drop shadows.</div>
      </div>
    </div>
    <div class="p-2 rounded bg-white border border-emerald-300 text-center font-bold text-emerald-700 text-xs">
      Duration: 30 Minutes
    </div>
  </div>
</div>

---
layout: default
icon: lifecycle
dense: true
---

<!-- Slide 23 -->

# Take-Home Assignment — Personalized web card (Graded)

Each student receives an **individualized target card** to recreate:

<div class="grid grid-cols-3 gap-3.5 mt-3 text-xs">
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="text-blue-700 font-bold mb-1">1. Unique Target Screen</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        Distinct archetype, brand palette, padding constraint, and field set generated from your Student ID.
      </p>
    </div>
    <div class="text-[0.62rem] text-blue-800 font-semibold pt-1 border-t border-blue-200">
      Zero code sharing
    </div>
  </div>

  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50 flex flex-col justify-between">
    <div>
      <div class="text-indigo-700 font-bold mb-1">2. Explore & Innovate</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        Use MDN to explore new CSS properties: elevation shadows, custom borders, and layout spacing.
      </p>
    </div>
    <div class="text-[0.62rem] text-indigo-800 font-semibold pt-1 border-t border-indigo-200">
      MDN exploration encouraged
    </div>
  </div>

  <div class="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
    <div>
      <div class="text-amber-800 font-bold mb-1">3. Automated Grading</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        Evaluated by an automated headless engine verifying DOM structure, computed CSS, and design fidelity.
      </p>
    </div>
    <div class="text-[0.62rem] text-amber-900 font-semibold pt-1 border-t border-amber-200">
      Deadline: 1 Week
    </div>
  </div>
</div>

<div class="mt-4 p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
  <div>
    <div class="font-bold text-sm">Submission Deadline: Exactly 1 Week</div>
    <div class="text-[0.7rem] text-slate-400">Submit your single <code>index.html</code> file before the next lab session begins.</div>
  </div>
  <div class="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider">
    7 Days Remaining
  </div>
</div>

---
layout: split
title: How to Access & Complete Your Assignment
icon: tools
dense: true
---

<!-- Slide 24 -->

### Assignment Workflow

1. **Open Course Portal:** Visit the assignment portal on GitHub Pages.
2. **Enter Student ID:** Generates your target mockup, color palette, and input requirements.
3. **Build in Notepad & MDN:** Create `index.html` from scratch using standard HTML and CSS.
4. **Submit in 1 Week:** Upload before the deadline for automated grading.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2.5">
  <div class="font-bold text-slate-900 text-sm">Evaluation Criteria (100 Pts Total)</div>

  <div class="space-y-1.5 text-[0.7rem]">
    <div class="p-2 rounded bg-white border border-slate-200">
      <strong>Structure (40%):</strong> Top-level <code>&lt;div&gt;</code> container, required input count and types, action button.
    </div>
    <div class="p-2 rounded bg-white border border-slate-200">
      <strong>Layout & Styling (40%):</strong> Vertical flexbox stacking, touch padding, assigned background color match.
    </div>
    <div class="p-2 rounded bg-white border border-slate-200">
      <strong>Fidelity & Integrity (20%):</strong> Match to assigned student seed and clean code craftsmanship.
    </div>
  </div>
</div>

---
layout: refs
icon: references
dense: true
---

<!-- Slide 25 -->

## Essential Web Documentation

- [MDN Web Docs — The div Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) — universal container and content division
- [MDN Web Docs — The input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) — complete index of input types and attributes
- [MDN Web Docs — Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) — mastering flex-direction, align-items, and gap

## Visual Styling Guides

- [MDN Web Docs — The CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) — understanding margin vs padding
- [MDN Web Docs — border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) — rounding box corners
- [MDN Web Docs — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) — adding subtle elevation depth to cards

<div class="giu-refs__note">Keep MDN bookmarked as you explore new tags and attributes for your take-home assignment!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Practice in class today, explore MDN, and submit your assignment in 1 week!
---

<!-- Slide 26 -->
