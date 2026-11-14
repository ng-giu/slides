---
theme: ../../theme
title: BINF 301 - Lab 8 - JavaScript Fundamentals
courseTitle: Information and Communication Architecture
course: BINF 301
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
class: giu-wide
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
dense: true
---

# Lab agenda

| Duration | Topic |
|---|---|
| 5 min | **Recap:** the three building blocks of the web |
| 2 min | **What a program is made of** |
| 7 min | **Declarations:** variables and functions |
| 7 min | **Expressions:** operations and references |
| 12 min | **Control flow:** conditionals and loops |
| 6 min | **Input and output:** `console.log` and where your code runs |
| 30 min | **Lab Manual:** a restaurant owner's dashboard in VS Code (graded) |

---
layout: default
class: giu-wide
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
sub: "Part 1 — Concepts: declarations, expressions, control flow and I/O"
---

# 01 — What a Program Is Made Of

---
layout: default
class: giu-wide giu-tree
dense: true
diagram:
  width: 860
  height: 286
  nodes:
    - { id: vars, x: 0, y: 160, w: 88, h: 34, label: Variables, tone: navy }
    - { id: funcs, x: 96, y: 160, w: 88, h: 34, label: Functions, tone: navy }
    - { id: ops, x: 192, y: 160, w: 135, h: 34, label: Operations, tone: amber }
    - { id: math, x: 214, y: 208, w: 117, h: 34, label: Math, tone: amber }
    - { id: cmp, x: 214, y: 252, w: 117, h: 34, label: Comparison, tone: amber }
    - { id: refs, x: 335, y: 160, w: 135, h: 34, label: References, tone: amber }
    - { id: rvar, x: 357, y: 208, w: 117, h: 34, label: Variables, tone: amber }
    - { id: call, x: 357, y: 252, w: 117, h: 34, label: Function calls, tone: amber }
    - { id: cond, x: 478, y: 160, w: 135, h: 34, label: Conditionals, tone: green }
    - { id: if, x: 500, y: 208, w: 117, h: 34, label: "if / else", tone: green }
    - { id: sw, x: 500, y: 252, w: 117, h: 34, label: switch, tone: green }
    - { id: loop, x: 621, y: 160, w: 135, h: 34, label: Loops, tone: green }
    - { id: for, x: 643, y: 208, w: 117, h: 34, label: for loop, tone: green }
    - { id: wh, x: 643, y: 252, w: 117, h: 34, label: while loop, tone: green }
    - { id: log, x: 764, y: 160, w: 96, h: 34, label: console.log, tone: red }
    - { id: decl, x: 12, y: 80, w: 160, h: 34, label: Declarations, tone: navy, icon: pencil }
    - { id: expr, x: 251, y: 80, w: 160, h: 34, label: Expressions, tone: amber, icon: zap }
    - { id: flow, x: 537, y: 80, w: 160, h: 34, label: Control flow, tone: green, icon: play }
    - { id: io, x: 764, y: 80, w: 96, h: 34, label: "I/O", tone: red, icon: terminal }
    - { id: prog, x: 350, y: 0, w: 160, h: 34, label: A program, tone: slate, icon: file-code }
  edges:
    - { from: decl, to: vars, fromSide: b, toSide: t }
    - { from: decl, to: funcs, fromSide: b, toSide: t }
    - { from: ops, to: math, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: ops, to: cmp, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: expr, to: ops, fromSide: b, toSide: t }
    - { from: refs, to: rvar, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: refs, to: call, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: expr, to: refs, fromSide: b, toSide: t }
    - { from: cond, to: if, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: cond, to: sw, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: flow, to: cond, fromSide: b, toSide: t }
    - { from: loop, to: for, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: loop, to: wh, fromSide: b, toSide: l, fromAt: 0.059 }
    - { from: flow, to: loop, fromSide: b, toSide: t }
    - { from: io, to: log, fromSide: b, toSide: t }
    - { from: prog, to: decl, fromSide: b, toSide: t }
    - { from: prog, to: expr, fromSide: b, toSide: t }
    - { from: prog, to: flow, fromSide: b, toSide: t }
    - { from: prog, to: io, fromSide: b, toSide: t }
---

# The parts of a program

<Diagram v-bind="$frontmatter.diagram" />

Every line you write today is one of these. Each section of Part 1 opens one branch.

---
layout: section
icon: code
sub: "Part 1 — Concepts: statements that define a name"
---

# 02 — Declarations

---
layout: default
icon: code
class: giu-wide giu-tree
dense: true
diagram:
  width: 440
  height: 94
  nodes:
    - { id: vars, x: 0, y: 64, w: 200, h: 30, label: Variables, tone: navy, sub: "const, let" }
    - { id: funcs, x: 240, y: 64, w: 200, h: 30, label: Functions, tone: navy, sub: function }
    - { id: decl, x: 120, y: 0, w: 200, h: 30, label: Declarations, tone: navy, icon: pencil }
  edges:
    - { from: decl, to: vars, fromSide: b, toSide: t }
    - { from: decl, to: funcs, fromSide: b, toSide: t }
---

# Declarations

A **declaration** is a statement that defines an **identifier**: a name that later code can refer to.

<Diagram v-bind="$frontmatter.diagram" />

**A variable**

<div class="flex flex-wrap items-start gap-2 font-mono text-[0.85rem] mt-1 mb-3">
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-indigo-400 bg-indigo-50">const</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-indigo-700">keyword</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-amber-400 bg-amber-50">cartTotal</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-amber-700">identifier</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-slate-400 bg-slate-50">=</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-slate-700">assignment</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-emerald-400 bg-emerald-50">280;</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-emerald-700">value</span></div>
</div>

**A function**

<div class="flex flex-wrap items-start gap-2 font-mono text-[0.85rem] mt-1 mb-0">
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-indigo-400 bg-indigo-50">function</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-indigo-700">keyword</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-amber-400 bg-amber-50">itemTotal</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-amber-700">identifier</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-slate-400 bg-slate-50">(price, quantity)</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-slate-700">parameters: its inputs</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-emerald-400 bg-emerald-50">{ return price * quantity; }</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-emerald-700">body: the code it runs</span></div>
</div>

---
layout: split
class: giu-wide
title: Variables
dense: true
---

A **variable** declaration gives a **value** a name.

- **`const`**: the value **never changes**. Use it by default.
- **`let`**: the value **changes later**, with `=`.
- Identifiers are **case-sensitive** (`itemCount` is not `itemcount`)

| Type of value | Examples |
|---|---|
| **String**  | `"Burger Republic"`, `"2345"` |
| **Number** | `4.8`, `2345` |
| **Boolean** | `true`, `false` |

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#variables

---
layout: split
class: giu-wide
title: Functions
dense: true
---

A **function** declaration gives a **block of code** a name, so you can run it again and again.

- The **parameters** in `( )` are its inputs.
- The **body** in `{ }` is the code it runs.
- **`return`** sends the result back.

Running it is called a **call**: an expression, in the next section.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#functions

---
layout: section
icon: code
sub: "Part 1 — Concepts: code that calculates a value"
---

# 03 — Expressions

---
layout: default
icon: code
class: giu-wide giu-tree
dense: true
diagram:
  width: 540
  height: 174
  nodes:
    - { id: ops, x: 0, y: 64, w: 250, h: 30, label: Operations, tone: amber }
    - { id: math, x: 22, y: 108, w: 246, h: 30, label: Math, tone: amber, sub: "+  -  *  /  %" }
    - { id: cmp, x: 22, y: 144, w: 246, h: 30, label: Comparison, tone: amber, sub: "===  !==  <  >=" }
    - { id: refs, x: 290, y: 64, w: 250, h: 30, label: References, tone: amber }
    - { id: rvar, x: 312, y: 108, w: 246, h: 30, label: Variables, tone: amber, sub: cartTotal }
    - { id: call, x: 312, y: 144, w: 246, h: 30, label: Function calls, tone: amber, sub: "itemTotal(180, 2)" }
    - { id: expr, x: 170, y: 0, w: 200, h: 30, label: Expressions, tone: amber, icon: zap }
  edges:
    - { from: ops, to: math, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: ops, to: cmp, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: expr, to: ops, fromSide: b, toSide: t }
    - { from: refs, to: rvar, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: refs, to: call, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: expr, to: refs, fromSide: b, toSide: t }
---

# Expressions

An **expression** is valid code that calculates into **one value**. The simplest is a value written out: `280`, `"Mariam"`, `true`.

<Diagram v-bind="$frontmatter.diagram" />

<div class="flex flex-wrap items-start gap-2 font-mono text-[0.85rem] mt-1 mb-3">
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-amber-400 bg-amber-50">cartTotal</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-amber-700">reference: 280</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-slate-400 bg-slate-50">*</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-slate-700">operator</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-emerald-400 bg-emerald-50">2</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-emerald-700">value</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-slate-400 bg-slate-50">>=</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-slate-700">operator</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-emerald-400 bg-emerald-50">500</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-emerald-700">value</span></div>
</div>

This whole line is one expression. It calculates `280 * 2` first, then `560 >= 500`, and gives **`true`**.

---
layout: split
title: Operations
class: giu-wide
dense: true
---

An **operation** combines values with an **operator** into a new value.

| Kind | Operators | Gives |
|---|---|---|
| **Math** | `+` `-` `*` `/` `%` | A number |
| **Comparison** | `= =` `! = =` `<` `>` `< =` `> =` | `true` or `false` |

- **`%`** gives the **remainder**: `7 % 2` is `1`. Even numbers have remainder `0`.
- **`= =`** means "is equal to", **`!= =`** "is not equal to". One `=` is not a comparison: it **assigns** a value.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#expressions

---
layout: split
class: giu-wide
title: References
dense: true
---

A **reference** uses an identifier from a declaration.

| Reference | Written as | Its value |
|---|---|---|
| **Variable** | The name: `cartTotal` | The variable's current value |
| **Function call** | The name, then `( )` with **arguments**: `itemTotal(180, 2)` | What the function **returns** |

The arguments fill the parameters in order: `price` is `180`, `quantity` is `2`.


::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#references

---
layout: section
icon: code
sub: "Part 1 — Concepts: statements that decide what runs"
---

# 04 — Control Flow

---
layout: default
icon: code
class: giu-wide giu-tree
dense: true
diagram:
  width: 540
  height: 174
  nodes:
    - { id: cond, x: 0, y: 64, w: 250, h: 30, label: Conditionals, tone: green }
    - { id: if, x: 22, y: 108, w: 246, h: 30, label: "if / else", tone: green }
    - { id: sw, x: 22, y: 144, w: 246, h: 30, label: switch, tone: green }
    - { id: loop, x: 290, y: 64, w: 250, h: 30, label: Loops, tone: green }
    - { id: for, x: 312, y: 108, w: 246, h: 30, label: for loop, tone: green }
    - { id: wh, x: 312, y: 144, w: 246, h: 30, label: while loop, tone: green }
    - { id: flow, x: 170, y: 0, w: 200, h: 30, label: Control flow, tone: green, icon: play }
  edges:
    - { from: cond, to: if, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: cond, to: sw, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: flow, to: cond, fromSide: b, toSide: t }
    - { from: loop, to: for, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: loop, to: wh, fromSide: b, toSide: l, fromAt: 0.032 }
    - { from: flow, to: loop, fromSide: b, toSide: t }
---

# Control flow

A program runs **top to bottom**. A **control flow** statement changes that: it decides **whether** a block of code runs, or **how many times**.

<Diagram v-bind="$frontmatter.diagram" />

<div class="flex flex-wrap items-start gap-2 font-mono text-[0.85rem] mt-1 mb-3">
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-indigo-400 bg-indigo-50">if</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-indigo-700">keyword</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-amber-400 bg-amber-50">(cartTotal >= 250)</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-amber-700">expression: the condition</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-emerald-400 bg-emerald-50">{ console.log("Free delivery"); }</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-emerald-700">code block</span></div>
</div>

Conditionals and loops have the same three parts: a **keyword**, an **expression** in `( )`, and a **code block** in `{ }`.

---
layout: split
class: giu-wide
title: if / else
dense: true
---

**`if`** runs a block only when its **condition** is `true`.

- **`else if`** checks another condition when the first was `false`.
- **`else`** runs when **none** of them was `true`.

Exactly **one** block runs. The engine checks the conditions top to bottom and stops at the first `true` one.

With `cartTotal` at `280`, this prints `Free delivery`.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#conditionals

---
layout: split
class: giu-wide
title: switch
dense: true
---

**`switch`** compares **one value** with several **cases**.

- The expression in `( )` is calculated once.
- The `case` whose value matches runs its lines.
- **`break`** ends the switch. Without it, the next case runs too.
- **`default`** runs when no case matches.

Use it instead of a long `if / else if` chain that checks the same value. This one prints `Weekend offer: 20% off`.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#switch

---
layout: split
class: giu-wide
title: for loops
dense: true
---

A **`for` loop** repeats a block a **set number of times**. Its `( )` holds three parts, separated by `;`:

| Part | Example | Runs |
|---|---|---|
| **Start** | `let i = 1` | Once, before the loop |
| **Condition** | `i <= 3` | Before every round: stop when `false` |
| **Update** | `i++` (adds 1 to `i`) | After every round |

This loop runs **3 times**, with `i` at `1`, `2`, then `3`.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#loops

**Console**

```text
Order 1 is on its way
Order 2 is on its way
Order 3 is on its way
```

---
layout: split
class: giu-wide
title: while loops
dense: true
---

A **`while` loop** repeats its block **as long as** its condition is `true`.

- The condition is checked **before every round**.
- Something in the block must change it. If nothing does, the loop never ends and the page **freezes**.

Use `for` when you know how many rounds; `while` when you don't.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#while

**Console**

```text
Orders left: 3
Orders left: 2
Orders left: 1
All delivered
```

---
layout: section
icon: code
sub: "Part 1 — Concepts: statements that show a value"
---

# 05 — Input and Output

---
layout: default
icon: code
class: giu-wide giu-tree
dense: true
diagram:
  width: 200
  height: 94
  nodes:
    - { id: log, x: 0, y: 64, w: 200, h: 30, label: console.log, tone: red }
    - { id: io, x: 0, y: 0, w: 200, h: 30, label: "I/O", tone: red, icon: terminal }
  edges:
    - { from: io, to: log, fromSide: b, toSide: t }
---

# Input and output

An **I/O statement** moves data **into** a program (input) or **out of** it (output). Today you use output only.

<Diagram v-bind="$frontmatter.diagram" />

<div class="flex flex-wrap items-start gap-2 font-mono text-[0.85rem] mt-1 mb-3">
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-red-400 bg-red-50">console.log</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-red-700">function: prints</span></div>
  <div class="flex flex-col items-center"><span class="px-2 py-1 rounded-md border-2 border-amber-400 bg-amber-50">(cartTotal);</span><span class="mt-1 font-sans text-[0.62rem] font-semibold text-amber-700">argument: the value to print</span></div>
</div>

`console.log(...)` is a **function call**: the browser declares `console.log` for you. In `( )` goes any expression; its **value** is what prints.

**Console**

```text
280
```

---
layout: split
title: Printing text and values
class: giu-wide
dense: true
---

Text in quotes is a **string**: it prints exactly as written. Three ways to print text **and** a value:

- **Commas** between values: a space goes between them.
- **`+`** joins a string and a value into one string.
- A **template string**, in backticks `` ` `` (left of `1`): `${ }` puts a value in the text. Quotes **don't** fill in `${ }`.

::right::

<FileTag name="example.js" />

<<< @/snippets/lab-08/concepts.js#output

**Console**

```text
280
Free delivery
Total: 280
Total: 280
EGP 280
```

---
layout: default
class: giu-wide
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
sub: "Part 2 — Practice: a restaurant owner's dashboard, in VS Code (graded in class)"
---

# 06 — Lab Manual: Restaurant Owner Dashboard

---
layout: split
class: giu-wide
title: The plan
dense: true
---

You own **Burger Republic** on Talabat. In `script.js`, you work out its money for today and the next 7 days, starting from **your** student ID.

```text
ica-lab-08/
├── index.html   Getting started
└── script.js    Steps 1 to 5
```

| Step | Adds | Part |
|---|---|---|
| 1 | The restaurant's numbers | Declarations |
| 2 | Today's money | Expressions |
| 3 | `dailyProfit`, a function | Declarations |
| 4 | Rate the day | `if / else` |
| 5 | The next 7 days | `for` loop |

::right::

**The finished output** (for a student whose ID ends in **45**):

```text
Burger Republic: today's dashboard
Revenue: EGP 9000
Talabat's commission: EGP 1800
Profit: EGP 2200
2200
11000
Normal day
Day 1: EGP 2200
Day 2: EGP 2680
...
Day 7: EGP 5080
Week profit: EGP 25480
```

This lab is **graded**: at the end, your TA checks your Console.

---
layout: split
class: giu-wide
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

<<< @/snippets/lab-08/index.html


---
layout: split
class: giu-wide
title: "Step 1 of 5: the restaurant's numbers"
wideRight: true
dense: true
---

1. Copy the code into `script.js`.
2. Change `45` to the **last 2 digits of your student ID**. Leave out a leading zero: `07` becomes `7`.
3. Save, then reload the page in Chrome (`F5`).

The **Console** tab **(1)** shows your output **(2)**, and the line of `script.js` that printed it **(3)**.

Keep `let` on `ordersPerDay`: Step 5 changes it.

::right::

<FileTag name="script.js" state="new" />

<<< @/snippets/lab-08/script.js#step1

![The Console tab with Burger Republic: today's dashboard printed by script.js line 7, numbered 1 to 3](/img/lab-08/console.png)

---
layout: split
class: giu-wide
title: "Step 2 of 5: today's money"
wideRight: true
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: three new lines. With `45` orders:

```text
Burger Republic: today's dashboard
Revenue: EGP 9000
Talabat's commission: EGP 1800
Profit: EGP 2200
```

A **negative** profit is correct if your orders are below 32: you are losing money.

Output wrong? See <Link to="fix-output">**Wrong output**</Link>.

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08/script.js#step2

---
layout: split
class: giu-wide
title: "Step 3 of 5: a function"
wideRight: true
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: two new lines. The first is **your profit again**, the same as the `Profit:` line. The second is the profit for 100 orders, `11000` for everyone.

```text
Profit: EGP 2200
2200
11000
```

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08/script.js#step3

---
layout: split
class: giu-wide
title: "Step 4 of 5: rate the day"
wideRight: true
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: one new line, from your `profit`:

| `profit` | Prints |
|---|---|
| `3000` or more | `Great day` |
| `0` to `2999` | `Normal day` |
| below `0` | `Losing money` |

Predict yours **before** you reload.

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08/script.js#step4

---
layout: split
class: giu-wide
title: "Step 5 of 5: the next 7 days"
wideRight: true
dense: true
---

Add the code **at the bottom** of `script.js`, save, and reload the page (`F5`).

**Console**: 8 new lines. Day 1 is today's profit, and each day has **3 more orders**, so EGP 480 more profit. The last line adds up the 7 days.

```text
Normal day
Day 1: EGP 2200
Day 2: EGP 2680
...
Day 7: EGP 5080
Week profit: EGP 25480
```

::right::

<FileTag name="script.js (bottom)" state="edit" />

<<< @/snippets/lab-08/script.js#step5

---
layout: default
class: giu-wide
icon: assignment
dense: true
---

# Checkpoint: show your TA

Save `script.js` and reload the page once more. The Console shows **15 lines** and **no red text**:

| Line | Shows |
|---|---|
| 1 | `Burger Republic: today's dashboard` |
| 2–4 | Revenue (**your digits × 200**), commission, profit |
| 5 | The same number as the `Profit:` line |
| 6 | `11000` |
| 7 | `Great day`, `Normal day` or `Losing money`, agreeing with your profit |
| 8–14 | Day 1 to Day 7: Day 1 is your profit, and each day is EGP 480 more |
| 15 | `Week profit:` and the 7 days added up |

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
class: giu-fix giu-wide
dense: true
---

# Red errors in the Console

Each error ends with the file and line: `script.js:5` is line 5 of `script.js`.

| Error in the Console | Cause & fix |
|---|---|
| `Uncaught ReferenceError: ordersperday is not defined` | A name spelled differently from its declaration. Names are case-sensitive: `ordersPerDay`. |
| `Uncaught ReferenceError: Console is not defined` | Capital letter: write `console.log`, all lowercase. |
| `Uncaught SyntaxError: Invalid or unexpected token` | A missing closing quote, or curly quotes (`“ ”`) from a word processor. Use straight quotes `" "`. |
| `Uncaught SyntaxError: Unexpected token '{'` | A missing `)` before `{`, as in `if (profit >= 3000 {`. |
| `Uncaught SyntaxError: Unexpected end of input` | A `{` without its closing `}`. Every block needs one. |
| `Uncaught TypeError: Assignment to constant variable.` | A `const` got a new value with `=`. In Step 1, `ordersPerDay` must be `let`. |
| `GET file:///…/ica-lab-08/script.js net::ERR_FILE_NOT_FOUND` | No file named exactly `script.js` next to `index.html`. The path before it is your own folder. |

---
layout: default
routeAlias: fix-output
class: giu-fix giu-wide
dense: true
---

# Wrong output and Console problems

| What you see | Cause & fix |
|---|---|
| A negative `Profit:` and `Losing money` | Correct if your digits are below 32: costs are more than your share. |
| `Revenue: EGP ${revenue}`, word for word | You used quotes. Template strings need **backticks** `` ` `` (left of `1`). |
| `undefined` instead of your profit, under `Profit:` | The function has no `return`. Its last line is `return income - cut - dailyCosts;`. |
| `Normal day` when your profit is `3000` or more | The `if` checks the wrong number first. `profit >= 3000` comes **before** `profit >= 0`. |
| Every day shows the same profit | The loop's last line is missing: `ordersPerDay = ordersPerDay + 3;`. |
| `Week profit:` is only Day 7's profit | Write `weekProfit = weekProfit + dayProfit;`. |
| The Console doesn't change after your edit | Not saved (a dot on the file's tab): press `Ctrl+S`. Then press `F5` in Chrome: the page doesn't reload by itself. |
| No **Console** tab | Press `F12`. Tab hidden? Click `>>` next to the tabs, then **Console**. |

---
layout: refs
title: References & useful links
dense: true
---

## JavaScript basics

- [MDN — What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN — Storing information: variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)
- [MDN — Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

## Control flow

- [MDN — `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN — `for` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## Chrome DevTools

- [Chrome DevTools — Console overview](https://developer.chrome.com/docs/devtools/console)

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Open floor for questions. Next: Lab 9, JavaScript in your web pages."
---

# Questions?
