---
theme: ../../theme
title: BINF 301 - Lab 8 (v2) - JavaScript Basics
courseTitle: Information and Communication Architecture
course: BINF 301
semester: W2026
lab: 8
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 8 — JavaScript Basics</h1>

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
| 5 min | **Recap:** the three building blocks of the web |
| 8 min | **Printing, variables & objects** |
| 12 min | **Operators & control flow** |
| 8 min | **Functions & callbacks** |
| 8 min | **Arrays** |
| 3 min | **Where your code runs:** `script.js` and the Console |
| 25 min | **Lab Manual:** a program about your favourite movie (graded) |

---
layout: default
icon: recap
dense: true
---

# The three building blocks of the web

Every web page in your browser is built from three technologies:

<div class="grid grid-cols-3 gap-3.5 my-3.5">
  <!-- HTML (done) -->
  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 shadow-xs flex flex-col justify-between opacity-80">
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
          &lt;/&gt;
        </div>
        <div>
          <div class="font-bold text-slate-800 text-sm leading-tight">HTML</div>
          <div class="text-[0.58rem] text-slate-500 font-medium">HyperText Markup Language</div>
        </div>
      </div>
      <div class="font-bold text-slate-700 text-xs mb-1">Structure &amp; Semantics</div>
      <p class="text-[0.66rem] text-slate-600 leading-relaxed">
        Defines the meaning and skeleton of the page: headings, paragraphs, containers, text fields, and action buttons.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-slate-200 text-[0.6rem] font-medium text-slate-500">
      Labs 5–7
    </div>
  </div>
  <!-- CSS (done) -->
  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 shadow-xs flex flex-col justify-between opacity-80">
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
          #
        </div>
        <div>
          <div class="font-bold text-slate-800 text-sm leading-tight">CSS</div>
          <div class="text-[0.58rem] text-slate-500 font-medium">Cascading Style Sheets</div>
        </div>
      </div>
      <div class="font-bold text-slate-700 text-xs mb-1">Styling &amp; Presentation</div>
      <p class="text-[0.66rem] text-slate-600 leading-relaxed">
        Controls visual aesthetics: surface colors, typographic scale, inner cushioning, outer spacing, and layout flow.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-slate-200 text-[0.6rem] font-medium text-slate-500">
      Labs 5–7
    </div>
  </div>
  <!-- JS (today) -->
  <div class="p-3.5 rounded-xl border-2 border-amber-500 bg-amber-50/80 shadow-md relative flex flex-col justify-between">
    <div class="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[0.55rem] font-bold uppercase tracking-wider">
      Today's Topic
    </div>
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
          { }
        </div>
        <div>
          <div class="font-bold text-amber-950 text-sm leading-tight">JavaScript</div>
          <div class="text-[0.58rem] text-amber-700 font-medium">The programming language of the web</div>
        </div>
      </div>
      <div class="font-bold text-amber-900 text-xs mb-1">Interactivity &amp; Logic</div>
      <p class="text-[0.66rem] text-slate-700 leading-relaxed">
        Powers interactive behavior: calculations, decisions, input validation, live data from APIs, and page updates.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-amber-200 text-[0.6rem] font-bold text-amber-800">
      Labs 8–10
    </div>
  </div>
</div>



---
layout: section
icon: code
sub: "Part 1 — Concepts: printing, variables and objects"
---

# 01 — Printing, Variables & Objects

---
layout: code
title: "Printing, variables & objects"
dense: true
class: giu-wide
---

`const` never changes, `let` can. An **object** groups values under names: `place.area` reads one.

<<< @/snippets/lab-08-v2/concepts.js#printing
---
layout: section
icon: code
sub: "Part 1 — Concepts: operators, conditionals and loops"
---

# 02 — Operators & Control Flow

---
layout: code
title: "Operators & conditionals"
dense: true
class: giu-wide
---

The **ternary** `condition ? a : b` is a short `if / else` that gives a value.

<<< @/snippets/lab-08-v2/concepts.js#operators
---
layout: code
title: "Loops"
dense: true
class: giu-wide
---

`for` repeats a set number of times; `while` repeats while its condition is `true`. `break` stops a loop early.

<div class="grid grid-cols-[3fr_2fr] gap-5 items-start">
<div>

<<< @/snippets/lab-08-v2/concepts.js#loops

</div>
<div>

**Console**

```text
Order: 1
Order: 2
Order: 3
While: 0
While: 1
```

</div>
</div>
---
layout: section
icon: code
sub: "Part 1 — Concepts: functions, arrow functions and callbacks"
---

# 03 — Functions & Callbacks

---
layout: code
title: "Functions & callbacks"
dense: true
class: giu-wide
---

A **callback** is a function you hand to other code, which calls it later. `setTimeout` calls it after 1000 ms.

<div class="grid grid-cols-[3fr_2fr] gap-5 items-start">
<div>

<<< @/snippets/lab-08-v2/concepts.js#functions

</div>
<div>

**Console**

```text
Hello, Mariam!
Hello, Mariam!
Your order is ready
```

The last line comes **1 second later**, after everything else.

</div>
</div>
---
layout: section
icon: code
sub: "Part 1 — Concepts: lists of values, forEach, map and filter"
---

# 04 — Arrays

---
layout: code
title: "Arrays"
dense: true
class: giu-wide
---

An **array** is a list in `[ ]`: `prices[0]` is the first item. `forEach`, `map` and `filter` each take a callback.

<div class="grid grid-cols-[1fr_1fr] gap-5 items-start">
<div>

<<< @/snippets/lab-08-v2/concepts.js#arrays

</div>
<div>

**Console**

```text
45 5
Price: 45
Price: 120
Price: 180
Price: 60
Price: 250
With service: (5) [65, 140, 200, 80, 270]
Under 100: (2) [45, 60]
```

</div>
</div>

`map` gives a **new array** of changed items; `filter` keeps the items whose callback returns `true`.
---
layout: default
icon: intro
steps:
  - { title: "The browser opens the page", code: "index.html" }
  - { title: "Its <script> line loads", code: "script.js" }
  - { title: "console.log prints in", code: "the Console" }
---

# Where your code runs

JavaScript lives in its own file, `script.js`. A page loads it with one line at the bottom of `<body>`:

```html
<script src="script.js"></script>
```

<Flow :steps="$frontmatter.steps" />

**`console.log(...)`** prints a value in the browser's **Console** (`F12`, then the **Console** tab). Visitors never look there: it is where developers check their code.


---
layout: section
icon: assignment
sub: "Part 2 — Practice: a program about your favourite movie, in VS Code (graded in class)"
---

# 05 — Lab Manual: Your Movie Program

---
layout: split
title: The plan
dense: true
---

You write **one program**, in `script.js`, about **your** favourite movie and **your** rating of it.

```text
ica-lab-08/
├── index.html   Getting started
└── script.js    Steps 1 to 5
```

This lab is **graded**: at the end, your TA checks your Console.

::right::

| Step | Adds | Console shows |
|---|---|---|
| 1 | Your movie, as an object | A table |
| 2 | Your score, `if / else`, a ternary | `Pass`, then your title and `Good` |
| 3 | A `for` and a `while` loop | 1 to 5, then 5 to 1 |
| 4 | `passed`, a function | `true`, `false` |
| 5 | An array of grades | Passing grades, then final grades |

---
layout: split
title: Getting started
dense: true
---

1. Create a folder `ica-lab-08` on your Desktop. Open it in <Tool name="vscode" /> (**File → Open Folder...**).
2. In the Explorer, create `index.html` and `script.js`.
3. Copy the code into `index.html` and save (`Ctrl+S`). Leave `script.js` empty for now.
4. Right-click `index.html` → **Reveal in File Explorer** (Mac: **Reveal in Finder**). There, right-click `index.html` → **Open with** → **Google Chrome**.
5. In Chrome, press `F12` (Mac: `Cmd+Option+I`) and click the **Console** tab.

The Console is empty for now. Keep this tab open: after every save, **reload it** with `F5` (Mac: `Cmd+R`).

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-08-v2/index.html

---
layout: split
title: "Step 1 of 5: your movie"
wideRight: true
dense: true
---

1. Copy the code into `script.js`.
2. Change `"Inception"` to **your favourite movie**, and `2010` to its year.
3. Watched it this year? Keep `true`. If not, write `false`.
4. Save, then reload the page in Chrome (`F5`).

The **Console** tab **(1)** shows your movie as a table **(2)**, and the line of `script.js` that printed it **(3)**.

::right::

<FileTag name="script.js" state="new" />

<<< @/snippets/lab-08-v2/script.js#step1

![The Console tab with a table of title, releaseYear and watchedRecently, printed by script.js line 6, numbered 1 to 3](/img/lab-08-v2/console-table.png)

---
layout: split
title: "Step 2 of 5: your score"
wideRight: true
dense: true
---

Add the code **at the bottom** of `script.js`. Change `85` to **your score** for the movie, from 0 to 100. Save, and reload the page (`F5`).

**Console**: two new lines under the table. With `85`:

```text
Pass
Inception: Good
```

Below 50 gives `Fail`; below 80 gives `Needs work`.

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08-v2/script.js#step2
---
layout: split
title: "Step 3 of 5: loops"
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: ten new lines.

```text
For: 1
For: 2
For: 3
For: 4
For: 5
While: 5
While: 4
While: 3
While: 2
While: 1
```

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08-v2/script.js#step3
---
layout: split
title: "Step 4 of 5: a function"
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: two new lines: `78` passes, `40` does not.

```text
true
false
```

Output wrong? See <Link to="fix-output">**Wrong output**</Link>.

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08-v2/script.js#step4
---
layout: split
title: "Step 5 of 5: an array"
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: the passing grades twice (once with `passed`, once with an arrow function), then each grade plus 5.

```text
(4) [55, 78, 90, 100]
(4) [55, 78, 90, 100]
Final: 45
Final: 60
Final: 83
Final: 95
Final: 105
```

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08-v2/script.js#step5
---
layout: default
icon: assignment
dense: true
---

# Checkpoint: show your TA

Save `script.js` and reload the page once more. The Console shows these lines from the top, and **no red text**:

| Step | Shows |
|---|---|
| 1 | A table: `title`, `releaseYear` and `watchedRecently` of **your** movie |
| 2 | `Pass` or `Fail`, then your movie's title and `Good` or `Needs work`, agreeing with **your** score |
| 3 | `For: 1` to `For: 5`, then `While: 5` to `While: 1` |
| 4 | `true`, then `false` |
| 5 | `(4) [55, 78, 90, 100]` twice, then `Final: 45` to `Final: 105` |

**Raise your hand**, and keep the tab open until your TA has checked it. Problems? See <Link to="fix-errors">**Red errors**</Link> or <Link to="fix-output">**Wrong output**</Link>.

---
layout: section
icon: tools
sub: Red errors, wrong output, and the Console
---

# Troubleshooting

---
layout: default
routeAlias: fix-errors
class: giu-fix
dense: true
---

# Red errors in the Console

Each error ends with the file and line: `script.js:5` is line 5 of `script.js`.

| Error in the Console | Cause & fix |
|---|---|
| `Uncaught ReferenceError: releaseyear is not defined` | A name spelled differently from its declaration. Names are case-sensitive: `releaseYear`. |
| `Uncaught ReferenceError: Console is not defined` | Capital letter: write `console`, all lowercase. |
| `Uncaught TypeError: Assignment to constant variable.` | A `const` got a new value, as `count--` does. Use `let count`. |
| `GET file:///…/ica-lab-08/script.js net::ERR_FILE_NOT_FOUND` | No file named exactly `script.js` next to `index.html`. The path before it is your own folder. |

Error starts with `Uncaught SyntaxError`? See <Link to="fix-syntax">**Syntax errors**</Link>.

---
layout: default
routeAlias: fix-syntax
class: giu-fix
dense: true
---

# Syntax errors in the Console

A **syntax error** stops the whole file: nothing from `script.js` prints, not even the lines above the mistake.

| Error in the Console | Cause & fix |
|---|---|
| `Uncaught SyntaxError: Invalid or unexpected token` | A missing closing quote, or curly quotes (`“ ”`) from a word processor. Use straight quotes `" "`. |
| `Uncaught SyntaxError: Unexpected token '{'` | A missing `)` before `{`, as in `if (score >= 50 {`. |
| `Uncaught SyntaxError: missing ) after argument list` | A call is missing a `)`. `console.log(grades.filter(passed));` needs two at the end. |
| `Uncaught SyntaxError: Unexpected end of input` | A `{` without its closing `}`. Every block needs one. |
| `Uncaught SyntaxError: Identifier 'title' has already been declared` | A step pasted twice. Delete the second copy. |

---
layout: default
routeAlias: fix-output
class: giu-fix
dense: true
---

# Wrong output and Console problems

| What you see | Cause & fix |
|---|---|
| `undefined` instead of `true` / `false`, and `(0) []` in Step 5 | `passed` has no `return`. Write `return grade >= 50;`. |
| `${title}: ${status}`, word for word | You used quotes. Template strings need **backticks** `` ` `` (left of `1`). |
| The tab freezes after Step 3 | The `while` loop has no `count--`, so it never ends. Close the tab, add the line, save, and open `index.html` in Chrome again. |
| The Console doesn't change after your edit | Not saved: a dot on the file's tab means unsaved. Press `Ctrl+S`. |
| Still no change after saving | The page doesn't reload by itself: press `F5` in Chrome after every save. |
| No **Console** tab | Press `F12`. Tab hidden? Click `>>` next to the tabs, then **Console**. |

---
layout: refs
title: References & useful links
dense: true
---

## Videos

- [JavaScript in 100 seconds](https://www.youtube.com/watch?v=DHjqpvDnNGE)

## JavaScript basics

- [MDN — Storing information: variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
- [MDN — JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)
- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)
- [MDN — Arrays](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)

## Practice and tools

- [JSchallenger — JavaScript basics](https://www.jschallenger.com/javascript-basics/)
- [Chrome DevTools — Console overview](https://developer.chrome.com/docs/devtools/console)

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Open floor for questions. Next: Lab 9, JavaScript in your web pages."
---

# Questions?
