---
theme: ../../theme
title: BINF 301 - Lab 8 - JavaScript Fundamentals (Data, Functions & Arrays)
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 8
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 8 — JavaScript Fundamentals</h1>

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
| 5 min | **1. The Third Pillar:** Adding <Tool name="javascript" /> (`app.js`) & the Browser DevTools Console |
| 10 min | **2. Variables & Objects:** `const`, `let`, template strings & restaurant data objects |
| 10 min | **3. Conditions & Loops:** `if / else`, ternary `? :`, and `for` loops |
| 10 min | **4. Functions & Callbacks:** Declarations, arrow functions (`=>`) & callbacks |
| 10 min | **5. Arrays & Iteration:** `.forEach()`, `.map()`, and `.filter()` on menu lists |
| 20 min | **6. Walkthrough & Activity:** Build `ica-lab-08` in <Tool name="vscode" /> & push to <Tool name="github" /> |

---
layout: section
icon: intro
sub: Moving from static HTML & CSS screens (Labs 5–7) to programmable web applications
---

# 01 — JavaScript in the Browser

---
layout: default
icon: recap
pillars:
  - { title: "1. HTML (Labs 5–7)", code: "index.html", sub: "Structure: headings, cards, links" }
  - { title: "2. CSS (Labs 5–7)", code: "style.css", sub: "Presentation: colors, Flexbox, Grid" }
  - { title: "3. JavaScript (Labs 8–10)", code: "app.js", sub: "Behavior: logic, events & live APIs" }
dense: true
---

# The three pillars of the web

In **Labs 5–7**, you built multi-page **Talabat** screens using **<Tool name="html5" />** and **<Tool name="css3" />**. Those pages look like a real app, but every price and dish is frozen text—nothing calculates a cart total or filters dishes.

<Flow :steps="$frontmatter.pillars" />

**Where we are heading in Labs 8–10 (and Course Project Deliverable 3):**
- **Lab 8 (Today):** JavaScript data types, objects, functions, and arrays in the browser **Console**.
- **Lab 9:** Connecting JavaScript to the **DOM** so button clicks update the page live.
- **Lab 10:** Fetching live **JSON APIs** (`fetch` + `async/await`) for your **Course Project (PD3)**.

---
layout: split
title: Linking app.js and opening the Console
wideRight: true
dense: true
---

<ToolLogo name="javascript" />

The **`<script>` tag** connects an external `.js` file to your HTML page:

- Place **`<script src="app.js"></script>`** right before **`</body>`** so the HTML loads first.
- Open your browser's **DevTools Console** to see what JavaScript prints:
  - Press **`F12`** (or **`Ctrl+Shift+J`** / **`Cmd+Option+J`** on Mac), or right-click the page ➔ **Inspect** ➔ **Console** tab.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-08/index.html {9}

---
layout: section
icon: code
sub: Storing prices, text, flags, and structured restaurant records in memory
---

# 02 — Variables, Printing & Objects

---
layout: split
title: Variables (const vs. let) & console output
dense: true
---

Declare every variable with **`const`** or **`let`**:

- **`const`** — a constant reference that **cannot be reassigned** (`appName`, `deliveryFee`). Use **`const` by default**.
- **`let`** — a variable whose value **changes later** (`cartTotal`, `itemCount`).
- **Template literals** use **backticks (`` `...` ``)** instead of quotes so you can inject variables directly with **`${variable}`**.

::right::

<FileTag name="concepts.js (variables & console)" />

<<< @/snippets/lab-08/concepts.js#console

| Method | What appears in DevTools Console |
|---|---|
| `console.log(...)` | Normal white/grey message |
| `console.warn(...)` | Yellow warning banner |
| `console.error(...)` | Red error banner |

---
layout: split
title: Grouping related data with Objects
dense: true
---

A single Talabat restaurant has a name, a star rating, a delivery time, and an open status. Instead of four loose variables, group them into an **Object** inside curly braces **`{ key: value }`**:

- **Read a property** with dot notation: `restaurant.name`
- **Update a property** with `=`: `restaurant.etaMinutes = 25`
- **Inspect as a table** in DevTools: `console.table(restaurant)`

::right::

<FileTag name="concepts.js (objects)" />

<<< @/snippets/lab-08/concepts.js#objects

---
layout: section
icon: code
sub: Making decisions with comparisons, if/else blocks, ternary operators, and loops
---

# 03 — Operators, Conditions & Loops

---
layout: split
title: Comparisons, if / else & ternary (? :)
dense: true
class: giu-small
---

JavaScript compares values and runs different branches depending on whether the condition is `true` or `false`:

| Operator | Meaning | Example (`subtotal = 320`) |
|---|---|---|
| `===` | Strictly equal | `subtotal === 320` ➔ `true` |
| `>=` | Greater or equal | `subtotal >= 300` ➔ `true` |
| `&&` | Both must be true | `isOpen && subtotal >= 100` |

- **`if / else`** chooses between two blocks of code.
- **Ternary (`cond ? a : b`)** picks between two values on one line.

::right::

<FileTag name="concepts.js (conditions)" />

<<< @/snippets/lab-08/concepts.js#conditions

<FileTag name="concepts.js (for loop)" />

<<< @/snippets/lab-08/concepts.js#loops

---
layout: section
icon: code
sub: Packaging reusable logic into functions, arrow functions, and callbacks
---

# 04 — Functions & Callbacks

---
layout: split
title: Functions, arrow functions & callbacks
dense: true
class: giu-small
---

A **function** is a reusable block of code that takes inputs (**parameters**) and returns an output (`return`):

1. **Function declaration:** `function addServiceFee(price) { ... }`
2. **Arrow function (`=>`):** Compact modern syntax. When the body is a single expression (`price - 30`), it returns that result automatically.
3. **Callback function:** A function passed **as an argument** into another function (`onComplete`), called once the work finishes.

<div class="giu-refs__note">We use <strong>arrow functions</strong> and <strong>callbacks</strong> immediately in Array methods (<code>.map</code>, <code>.filter</code>) and Lab 9 click listeners!</div>

::right::

<FileTag name="concepts.js (functions)" />

<<< @/snippets/lab-08/concepts.js#functions

---
layout: section
icon: code
sub: Storing lists of dishes and transforming or filtering them without manual loops
---

# 05 — Arrays & Array Iteration

---
layout: split
title: "Array methods: .forEach(), .map() & .filter()"
dense: true
---

An **Array** stores an ordered list inside square brackets **`[...]`** (indexed from `0`):

| Method | What it does | Returns |
|---|---|---|
| **`.forEach(fn)`** | Runs `fn` once per item | `undefined` |
| **`.map(fn)`** | Transforms every item | **New array** (same length) |
| **`.filter(fn)`** | Tests every item with `fn` | **New array** (`true` matches) |

::right::

<FileTag name="concepts.js (arrays)" />

<<< @/snippets/lab-08/concepts.js#arrays

---
layout: section
icon: activity
sub: Step-by-step build of the Burger Republic Order & Menu Console engine in VS Code
---

# 06 — Code Walkthrough: ica-lab-08

---
layout: split
title: "The plan: 2 files in 4 steps"
dense: true
---

Create a new folder named **`ica-lab-08`** and open it in <Tool name="vscode" /> (**File → Open Folder...**):

1. **Step 1 (`index.html`)** — Create the HTML shell that loads `<script src="app.js"></script>`.
2. **Step 2 (`app.js` top)** — Create the restaurant constants and `dish` object, then inspect them in DevTools Console.
3. **Step 3 (`app.js` middle)** — Add `getDeliveryFee(subtotal)` and `applyPromo(total)`.
4. **Step 4 (`app.js` bottom)** — Add the 4-item `menu` array and run `.forEach()`, `.filter()`, and `.map()`.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
  <div class="font-bold text-slate-900">ica-lab-08/</div>
  <div class="pl-4 space-y-1.5 text-[0.72rem]">
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Step 1 — Loads <code>app.js</code></span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-amber-200">
      <span class="font-bold text-amber-800">└── app.js</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Steps 2–4 — Menu logic &amp; arrays</span>
    </div>
  </div>
</div>

<div class="giu-refs__note">Missed Lab 7? No problem—<code>ica-lab-08</code> starts in a fresh folder with just these two files.</div>

---
layout: split
title: "Step 1 of 4: index.html shell"
dense: true
---

1. In <Tool name="vscode" /> Explorer (`ICA-LAB-08`), click **New File** and name it `index.html`.
2. Write the HTML on the right and press `Ctrl + S` to **save**.
3. Line 9 links `app.js` right before `</body>`.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-08/index.html {9}

---
layout: split
title: "Step 2 of 4: variables & dish object (app.js top)"
dense: true
---

1. In <Tool name="vscode" /> Explorer (`ICA-LAB-08`), click **New File** and name it `app.js`.
2. Add the **Step 2** code on the right and press `Ctrl + S` to **save**.
3. Open `index.html` with **Live Server**, press **`F12`**, and click the **Console** tab to see the welcome text and `dish` table.

::right::

<FileTag name="app.js (top)" state="new" />

<<< @/snippets/lab-08/app.js#step1

---
layout: split
title: "Step 3 of 4: delivery fee & promo functions"
dense: true
---

1. Open `app.js` in <Tool name="vscode" /> and go to the **bottom** of the file (right under `console.table(dish);`).
2. Add the two functions on the right and press `Ctrl + S` to **save**:
   - **`getDeliveryFee(subtotal)`** returns `0` when the order is `>= 500`, or `25` otherwise.
   - **`applyPromo`** is an arrow function that multiplies a price by `0.9` (10% off).

::right::

<FileTag name="app.js (middle)" state="edit" />

<<< @/snippets/lab-08/app.js#step2 {2-6,9}

---
layout: split
title: "Step 4 of 4: menu array (.forEach, .filter, .map)"
dense: true
class: giu-small
---

1. At the **bottom** of `app.js`, add the `menu` array of 4 dish objects and the three array methods on the right.
2. Press `Ctrl + S` to **save** and look at your browser's **Console** tab.

::right::

<FileTag name="app.js (bottom)" state="edit" />

<<< @/snippets/lab-08/app.js#step3 {8-10,12-13,15-16}

---
layout: split
title: "Checkpoint: predict & verify Console output"
wideRight: true
dense: true
---

<Activity label="Predict before checking your Console">

Look at your `app.js` code and predict the exact values before reading the browser Console:

1. Since `dish.price` is `600`, what does `getDeliveryFee(600)` return?
2. Which **two dishes** survive `menu.filter((d) => d.price < 250)`? *(Careful: is `250 < 250` true or false?)*
3. What are the 4 numbers inside `proPrices`?

</Activity>

Console empty or showing red text? Jump to <Link to="fix-js">**Console & JavaScript errors**</Link> in Troubleshooting.

::right::

| Expression in `app.js` | Expected Console Output |
|---|---|
| `Welcome to ${restaurantName}` | `Welcome to Burger Republic` |
| `Fee: ${fee}, Final: ${finalPrice}` | `Fee: 0, Final: 540` |
| `menu.filter(d => d.price < 250)` | **2 rows:** `Cheese Fries (100)` & `Smash Single (180)` |
| `menu.map(d => d.price * 0.9)` | `[ 540, 225, 90, 162 ]` |

---
layout: activity
title: "In-Lab Activity: Extend app.js & Push to GitHub"
label: "20-minute hands-on practice"
dense: true
---

Extend your `ica-lab-08/app.js` file with the following 4 tasks, verify the output in the **DevTools Console**, and push your repo to <Tool name="github" />:

1. **Add a 5th dish to `menu`:** Add `{ title: "Onion Rings", price: 80 }` inside the `menu` array.
2. **Write `calcCartTotal(items)`:** Inside the function, declare `let sum = 0;`, loop over `items` with `.forEach((d) => { sum = sum + d.price; })`, and `return sum;`. Log `calcCartTotal(menu)` (should print **`1210`**).
3. **Filter premium dishes:** Create `const premium = menu.filter((d) => d.price >= 250);` and print it with `console.table(premium);` (should show **`Bestie Deal`** and **`Mushroom Ranch`**).
4. **Commit & push to GitHub:** Run `git init`, `git add .`, `git commit -m "Complete Lab 8 JS fundamentals"`, and push to a public repo named **`ica-lab-08`**.

---
layout: section
icon: tools
sub: Fixing blank consoles, ReferenceErrors, and TypeErrors
---

# Troubleshooting

---
layout: default
routeAlias: fix-js
class: giu-fix
dense: true
---

# Console & JavaScript errors

| Symptom / Exact error message | Cause & fix |
|---|---|
| Console tab is completely blank | 1. Make sure `<script src="app.js"></script>` is inside `index.html` and both files are saved (`Ctrl+S`).<br>2. Check that `app.js` is in the same folder as `index.html`. |
| `Failed to load resource: net::ERR_FILE_NOT_FOUND (app.js)` | Typo in the filename. Check that the file in VS Code Explorer is named `app.js` (lowercase, not `App.js` or `app.js.txt`). |
| `Uncaught ReferenceError: dish is not defined` | You used a variable before declaring it, or misspelled its name (JavaScript is case-sensitive: `dish` vs `Dish`). |
| `Uncaught TypeError: Assignment to constant variable.` | You tried to reassign a `const` variable with `=`. Change its declaration from `const` to `let`. |

---
layout: refs
title: References & useful links
dense: true
---

## JavaScript Fundamentals (MDN)

- [MDN — JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — variables, strings, arrays, and conditions
- [MDN — Functions & Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) — function declarations, parameters, and `=>` syntax
- [MDN — Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) & [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Browser Developer Tools

- [Chrome DevTools — Console Overview](https://developer.chrome.com/docs/devtools/console) — inspecting objects and tables with `console.log` and `console.table`

<div class="giu-refs__note">In Lab 9, we connect these exact JavaScript functions and variables to the HTML page using the DOM!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for questions — see you in Lab 9 for DOM Manipulation & Events!
---

# Questions?
