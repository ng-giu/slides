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

- Getting VS Code, Git, and Node.js installed and talking to each other.
- Making your first commits and your first push.
- **Not** real JavaScript yet — that's Assignment 2. This is the plumbing.
- Follow these slides front to back. About 2 hours, start to submit.

---
layout: section
icon: tools
sub: Install once, verify twice
---

# Setup

---
layout: split
title: Install three things
wideRight: true
---

1. **VS Code** — code.visualstudio.com
2. **Git** (Windows: this also gives you Git Bash) — git-scm.com/downloads
3. **Node.js**, the **LTS** version — nodejs.org

<div class="giu-refs__note">Windows: if a terminal or VS Code was already open when you installed Node.js, close and reopen it. It can't see a command that didn't exist when it launched.</div>

::right::

<Activity label="Verify">

Open a terminal (VS Code: **Terminal → New Terminal**) and run:

```bash
git --version
node -v
```

Both must print a version. "Not found" means the install
didn't finish, or your terminal needs restarting.

</Activity>

---
layout: activity
title: Set your git identity
---

**Your first commit fails without this.** Run it once, ever, per machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@student.giu-uni.de"
```

Then create a **GitHub account** if you don't already have one: github.com

---
layout: section
icon: code
sub: "“Use this template,” not fork — forks are public on the parent repo"
---

# Get the repo

---
layout: split
title: Create your copy
wideRight: true
---

On the assignment's GitHub page:

1. Click **Use this template → Create a new repository**.
2. Name it whatever you like — it's now yours, under your account.

This matters more than it looks: the assignment later identifies you by
**which GitHub account owns the repo**, not by the repo's name.

::right::

<Activity label="Clone it — in VS Code">

1. Open VS Code.
2. Click the **Source Control** icon in the sidebar.
3. Click **Clone Repository**, paste your repo's URL.
4. Pick a folder, open it.

Use this button, not `git clone` in the terminal — you'll
use this same tab again later, for a real commit.

</Activity>

---
layout: section
icon: code
sub: "cd, node, commit, push — all from the terminal now"
---

# Work through it

---
layout: activity
title: Sanity check
---

From your project's terminal:

```bash
node init.js
```

It checks your Node version, your git identity, and that you actually
cloned this repo (a ZIP download has no git remote). Each failure prints
its own fix. Don't move on until it prints:

```
Everything looks good.
```

---
layout: split
title: "Step 1 — paths"
dense: true
---

Run this **from the repo root, on purpose**:

```bash
node step1/hi.js
```

```
Could not read greeting.txt.

Your terminal is currently in: /.../my-repo
It looked for the file at:     /.../my-repo/greeting.txt
The file actually lives at:    /.../my-repo/step1/greeting.txt
```

A relative path is resolved from wherever your **terminal** currently is —
not from wherever the script file happens to sit on disk.

::right::

<Activity label="The fix">

```bash
cd step1
node hi.js
```

```
Hello, traveler. You found the right folder.
```

Same file. Only your terminal's location changed.

</Activity>

---
layout: activity
title: Step 2
---

Same idea, no trap this time — just `cd` practice.

```bash
cd ..
cd step2
node okay.js
```

```
okay.
Two folders down, zero folders lost. On to the real assignment.
```

---
layout: section
icon: assignment
sub: A trial generated from who you are on GitHub
---

# The assignment

---
layout: default
dense: true
---

# generate.js — how your trial gets made

```
remote-url  →  parse the OWNER  →  seed  →  question.md
```

`generate.js` reads `git remote get-url origin`, takes the account that
**owns** the repo (not its name — you chose that), and hashes it into a
seed. Everyone gets a different seed; nobody can get yours without your
GitHub account.

```bash
cd ..
cd assignment
node generate.js
```

```
⚔ Your name, adventurer? > Nour
Your student ID? > 13003429
Choose your class: [1] Warrior [2] Mage [3] Rogue > 1

A wild Sand Kraken blocks your path near the Nile.
question.md written.
```

Your answers are flavor. The parts that get graded — the multiplier, the
warcry — come only from your seed, so re-running `generate.js` a hundred
times never changes what solves your trial.

---
layout: activity
title: Write solution.js
---

Open `assignment/question.md` — it now has **your** exact instructions:
a required computation and an exact required line of text. Create
`assignment/solution.js` that prints exactly what it asks for, in order.

Check it:

```bash
node solution.js
```

Keep the JavaScript itself trivial — variables, arithmetic,
`console.log`. That's the whole point of this assignment.

---
layout: split
title: "Commit twice, two ways"
wideRight: true
---

VS Code and Git are two different things wearing the same interface. This
assignment wants you to notice that, so you'll commit **twice**, two ways.

Both routes run the exact same Git underneath. The Source Control tab is
buttons over `git add` / `git commit` / `git push`.

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

Fill in the form (link on the CMS) with:

- Your name
- Your student ID
- Your GitHub username
- Your repo's URL

Push **before** you submit — the grader clones what's on GitHub, not
what's on your laptop.

---
layout: default
dense: true
---

# Troubleshooting

| Problem | Fix |
|---|---|
| `git` / `node` "not found" | Reopen your terminal (or VS Code) after installing. |
| Windows: `ls` doesn't work | Use Git Bash, or `dir` in PowerShell / Command Prompt. |
| `node step1/hi.js` seems to work from the root | It shouldn't — make sure you're running the file at `step1/hi.js`, unmodified. |
| `init.js` / `generate.js` can't find a git remote / owner | You likely downloaded a ZIP instead of cloning. Go back to **Get the repo**. |

---
layout: refs
title: Install and reference links
---

## Install

- [VS Code](https://code.visualstudio.com/)
- [Git — downloads](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)

## Git and GitHub

- [Git documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/en)

<div class="giu-refs__note">Full JavaScript references come with Lab 1 and Assignment 2 — nothing here requires writing real JavaScript yet.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Submit your repo link on the CMS form
---

# Questions?
