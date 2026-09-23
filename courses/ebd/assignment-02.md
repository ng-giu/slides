---
theme: ../../theme
title: BINF 503 - Assignments 2 & 3 - The Workbook
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
assignment: 2
lineNumbers: false
layout: cover
---

# Assignments 2 & 3 — The Workbook

---
layout: default
icon: intro
---

# What this is

**One repo. Fourteen small exercises. About a month.**

You already have the hard part done — VS Code, Git, Node, your first push.
This is the JavaScript and web refresher that makes the rest of the
semester make sense.

- Each exercise takes **30–45 minutes** and teaches exactly one thing.
- You do them **in order**, a few at a time, on **different days**.
- Everything you need is inside the repo. No videos, nothing to log into.

<div class="giu-refs__note">There is no exam here and nothing to memorise. If you do the work, you pass — and Express, MongoDB and React will feel like more of the same instead of something new.</div>

---
layout: section
icon: lifecycle
sub: The same six steps, fourteen times.
---

# The loop

---
layout: split
title: One session, start to finish
wideRight: true
---

Open the next folder and do this:

1. Read its **`README.md`** — short, one page.
2. Run its **`example.js`** — *this is the lesson.*
3. Fill in **`exercise.js`**.
4. Run the tests until they pass.
5. **Commit and push.**
6. Close the laptop. Come back another day.

::right::

<Activity label="For example, module 04">

```bash
node 04-arrays/example.js
```

Read the comments. Then edit `04-arrays/exercise.js` and:

```bash
npm test 04
```

```bash
git add 04-arrays/exercise.js
git commit -m "Finish module 04"
git push
```

</Activity>

---
layout: default
icon: lifecycle
dense: true
---

# It looks like a lot. It isn't.

That loop is six steps the first time and **one habit by the third**.

- You will run it **fourteen times** over the month.
- It is the same loop you will use for **every lab for the rest of the
  semester** — and in your final project.
- By week two you will stop reading these slides and just do it.

The only way this gets hard is if you save it all for the last week.
**Do not accumulate.** An hour, a few times a week, and you are done
comfortably.

<div class="giu-refs__note">Stuck for more than twenty minutes? Ask. That is what we are here for — bring the error message.</div>

---
layout: section
icon: tools
sub: Three things, once ever.
---

# Setting up

---
layout: split
title: Get your copy
wideRight: true
---

Open the template:
[github.com/ng-giu/ebd-w26-workbook](https://github.com/ng-giu/ebd-w26-workbook)

1. Click **Use this template → Create a new repository**.
2. Pick any name. Keep it on **your own account**.
3. Clone it — Source Control tab → **Clone Repository**, same as
   Assignment 1.

::right::

<Activity label="Then, once ever">

Open a terminal in the project (**Terminal → New Terminal**) and run:

```bash
npm install
```

This downloads the tools the exercises use. It takes a minute, and you
never do it again.

Then open **`START-HERE.md`**. It is ten lines.

</Activity>

---
layout: activity
title: Submit the form — today, not at the deadline
---

Fill it in **once**, at the very start:
[forms.gle/xWbT6eoxfiFLC2eY9](https://forms.gle/xWbT6eoxfiFLC2eY9)

- Your name
- Your student ID
- Your **tutorial number**
- Your **repo's URL**

That is the only thing you ever hand in. After that, **pushing your work
is submitting it** — no zip files, no email.

---
layout: section
icon: code
sub: Where the teaching actually lives.
---

# Doing an exercise

---
layout: split
title: Every folder looks the same
file: "04-arrays/"
---

| File | What it is |
|---|---|
| `README.md` | short — what it teaches, what to do |
| `example.js` | **the lesson** — run it, read it |
| `exercise.js` | **your work** — the only file you edit |
| `exercise.test.js` | the tests — don't edit |

::right::

<Activity label="Read the example. Really.">

`example.js` is not a demo — it **is** the lesson. It runs, it prints,
and every line is commented.

The README is one page of orientation. If you read only the README you
will be stuck.

</Activity>

---
layout: split
title: Red is not a problem
dense: true
---

A failing test tells you exactly what to fix:

```
× returns only the products under 100 EGP
  → expected undefined to be 45
```

That means your function gave back nothing.
Usually a missing `return`.

Work **one module at a time**:

```bash
npm test 04
```

::right::

<Activity label="Useful commands">

```bash
npm test 04     # one module
npm test        # everything
npm run modules # what exists
```

Plain `npm test` will show failures for every
module you have not reached yet. **That is
normal.** Do not panic — just use `npm test 04`.

</Activity>

---
layout: split
title: "Part 2: pages you can see"
wideRight: true
---

From module 09 the exercises are web pages, not just JavaScript.

Tests can check your HTML and CSS, but they **cannot see your page**.

Open it and look at it. Every time.

::right::

<Activity label="Open a page in your browser">

```bash
npm run open 09           # the example
npm run open 09 exercise  # your own page
```

Works on Windows, Mac and Linux.

Press **F12** in the browser for the console —
that is where JavaScript errors appear.

</Activity>

---
layout: section
icon: assignment
sub: Two of them. These carry the grade.
---

# The checkpoints

---
layout: default
dense: true
---

# Your checkpoint is yours

After module 08, and again after module 13:

```bash
node checkpoint-a/generate.js
```

It reads **your GitHub username** and writes **your** version of the task
into `spec.md`. Different city, different filter, different wording — for
every single student.

- The fourteen exercises are marked on **completion**.
- The **checkpoints carry the grade.**
- Copying a friend's answer fails your tests, because their task is not
  your task.

Nothing new to learn. Everything the spec asks for is in a module you
have already done — it just doesn't hand you the function signatures.

---
layout: default
icon: assignment
dense: true
---

# Deadlines

| | What | Due |
|---|---|---|
| **Assignment 2** | Modules 00–08 + Checkpoint A | **Fri 10 October** |
| **Assignment 3** | Modules 09–13 + Checkpoint B | **Wed 29 October** |

**No commit created after 31 October is reviewed. At all.**

One repo, two grading passes. Push before each date — we grade what is
on GitHub.

---
layout: activity
title: Commits on six different days
---

We check that your commits land on at least **six different calendar
days** across the month.

This is not extra work. It is the same work, **not crammed into one
night** — and spacing it out is the single biggest thing that makes it
stick.

Commit whenever a module goes green. That is it.

---
layout: default
dense: true
---

# If something goes wrong

| Problem | Fix |
|---|---|
| `npm` not recognised | Close the terminal, open a new one. Still failing? Reinstall Node, reopen VS Code. |
| `npm error code ENOENT ... package.json` | You are in the wrong folder. **Terminal → New Terminal** opens the right one. |
| `Could not find vitest` | Run `npm install` from the project's root folder. |
| Windows: `npm.ps1 cannot be loaded` | Use **Git Bash** — the **+** dropdown in the VS Code terminal panel. |
| `No test files found` | Check the number: `npm test 04`, not `npm test 4-arrays`. |
| A value is mysteriously `undefined` | A missing `return`, or a missing `await`. |
| Page is blank in the browser | Press **F12** → Console. An error in your JS stops the whole file. |

Each module's `README.md` has more. And ask us.

---
layout: end
image: https://forms.gle/xWbT6eoxfiFLC2eY9
qr: true
sub: "Submit once, today — then just push your work"
---

# Questions?
