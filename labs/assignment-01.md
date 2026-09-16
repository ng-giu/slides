---
theme: ../theme
title: BINF 503 - Assignment 1 - Environment Setup and Development Basics
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
assignment: 1
lineNumbers: true
layout: cover
---

# Assignment 1 — Environment Setup and Development Basics

---
layout: default
icon: intro
---

# What this is

- Install VS Code, Git, and Node.js.
- Make your first commit and your first push.
- Follow these slides in order. About 2 hours.

---
layout: refs
title: Want to learn first? (optional)
columns: 2
---

## Git

- Watch: [Git Tutorial for Beginners (1 hour)](https://www.youtube.com/watch?v=8JJ101D3knE)
- Read: [Git documentation](https://git-scm.com/doc)

## GitHub

- Watch: [Git & GitHub Crash Course](https://www.youtube.com/watch?v=mAFoROnOfHs)
- Read: [GitHub Docs](https://docs.github.com/en)

## VS Code

- Watch: [VS Code in 7 Minutes](https://www.youtube.com/watch?v=ZngV3QqOEB0)
- Read: [VS Code documentation](https://code.visualstudio.com/docs)

## Shell / Terminal

- Watch: [Command Line Crash Course](https://www.youtube.com/watch?v=uwAqEzhyjtw)
- Read: [MDN — command line basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)

## Node.js

- Watch: [Node.js Full Tutorial for Beginners](https://www.youtube.com/watch?v=RLtyhwFtXQA)
- Read: [Node.js documentation](https://nodejs.org/en/docs)

<div class="giu-refs__note">Optional. Watch or read before Step 1 if you want to understand things first.</div>

---
layout: section
icon: tools
sub: Install it. Then check it works.
---

# Setup

---
layout: split
title: Install three things
wideRight: true
---

1. **VS Code** — code.visualstudio.com
2. **Git** — git-scm.com/downloads
   (Windows: this also installs Git Bash)
3. **Node.js**, the **LTS** version — nodejs.org

<div class="giu-refs__note">Windows: close and reopen your terminal after installing. It needs a restart to see new programs.</div>

::right::

<Activity label="Verify">

Open a terminal (VS Code: **Terminal → New Terminal**) and run:

```bash
git --version
node -v
```

You should see a version number for each. If not,
restart your terminal.

</Activity>

---
layout: activity
title: Set your git identity
---

**Do this once.** Without it, your first commit will fail:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@student.giu-uni.de"
```

Then make a **GitHub account** if you don't have one: github.com

---
layout: section
icon: code
sub: Click "Use this template." Not Fork.
---

# Get the repo

---
layout: split
title: Create your copy
wideRight: true
---

Open the template: [github.com/ng-giu/ebd-w26-assignment1](https://github.com/ng-giu/ebd-w26-assignment1)

1. Click **Use this template → Create a new repository**.
2. Pick any name you like.

Keep it on **your own GitHub account**. That's how we know
the repo is yours.

::right::

<Activity label="Clone it — in VS Code">

1. Open VS Code.
2. Click the **Source Control** icon in the sidebar.
3. Click **Clone Repository**. Paste your repo's URL.
4. Pick a folder, then open it.

Use this button, not the terminal. You'll use this same
tab again soon.

</Activity>

---
layout: section
icon: code
sub: Now everything happens in the terminal.
---

# Work through it

---
layout: activity
title: Sanity check
---

This folder only has one file to run right now. Run it:

```bash
node init.js
```

It checks that everything is set up right. If something is
wrong, it tells you how to fix it.

If it's all good, it creates a new file: `step1/hi.js`.

---
layout: split
title: Step 1
dense: true
---

Run this:

```bash
node hi.js
```

**It will fail**, with a big red error. Look for this line:

```
Error: Cannot find module '/.../hi.js'
```

Node looked for `hi.js` right where you are. It's not
there — it's inside `step1/`.

::right::

<Activity label="Two ways to fix it">

```bash
cd step1
node hi.js
```

or, without moving, give the full path:

```bash
node step1/hi.js
```

```
Hello! You made it to step1.
Created step2/okay.js
```

</Activity>

---
layout: activity
title: Step 2
---

Get back to the project's root folder (tip: **Terminal → New
Terminal** in VS Code always opens a fresh one there). Then:

```bash
cd step2
node okay.js
```

```
okay.
Created assignment/generate.js
```

---
layout: section
icon: assignment
sub: A small challenge made just for you
---

# The assignment

---
layout: default
dense: true
---

# Run generate.js

Back to the root folder again, then:

```bash
cd assignment
node generate.js
```

```
Your name, adventurer? > Nour
Your student ID? > 13003429
Choose your class: [1] Warrior [2] Mage [3] Rogue > 1

A wild Sand Kraken blocks your path near the Nile.
question.md written.
```

This makes a small challenge just for you. Everyone in
class gets a different one.

You can run it again if you want. Your challenge stays
the same.

---
layout: activity
title: Write solution.js
---

Open `assignment/question.md`. It tells you exactly what
to print.

Create `assignment/solution.js` in the same folder. Make
it print what `question.md` asks, in the same order.

Check it:

```bash
node solution.js
```

Keep it simple: variables, math, and `console.log`.

---
layout: split
title: "Commit twice, two ways"
wideRight: true
---

You will commit **two times**, in two different ways.

Both do the same thing. The Source Control tab is just
buttons for `git add`, `git commit`, and `git push`.

::right::

<Activity label="1. question.md — VS Code">

Source Control tab: stage, message, commit, **Sync**.

</Activity>

<Activity label="2. solution.js — terminal">

```bash
git add assignment/solution.js
git commit -m "Add solution"
git push
```

</Activity>

---
layout: activity
title: Submit
---

Fill in the form: [forms.gle/1f44aaXxVKVtTfgZ8](https://forms.gle/1f44aaXxVKVtTfgZ8)

- Your name
- Your student ID
- Your GitHub username
- Your repo's URL

Push **before** you submit. We only check what's on GitHub.

---
layout: default
dense: true
---

# Troubleshooting

| Problem | Fix |
|---|---|
| `git` or `node` says "not found" | Close and reopen your terminal. |
| Windows: `ls` doesn't work | Use Git Bash, or type `dir` instead. |
| `Cannot find module` | Node can't find the file where you are. `cd` to it, or give the full path. |
| A step's file is missing | Each step is created by the one before it. Run `init.js`, then `hi.js`, then `okay.js`, in order. |
| `init.js` or `generate.js` shows a git error | You may have downloaded a ZIP, not cloned it. Go back to **Get the repo**. |

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Submit: forms.gle/1f44aaXxVKVtTfgZ8"
---

# Questions?
