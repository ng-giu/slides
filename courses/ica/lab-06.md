---
theme: ../../theme
title: BINF 301 - Lab 6 - Development Environment, VS Code & Git
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 6
lineNumbers: true
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Lab 6 — Development Environment, VS Code & Git</h1>

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
image: /img/illustrations/rules.png
side: right
alt: A closed book titled Rules
---

# Rules and code of conduct

- **Punctuality:** a grace period of 15 minutes is permitted solely for recording attendance.
- **Mobile phones:** allowed for taking notes only. Anything unrelated to the session is not permitted.
- **Focus:** no side conversations during the session. Please participate in all activities.
- **Communication:** email and office hours only, written in formal business English.

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
| 10 min | **From Notepad to Pro Tools:** Where we are in the ICA pipeline |
| 15 min | **Visual Studio Code:** Explorer, Editor vs. Terminal & Live Server |
| 15 min | **Git & GitHub:** Version control, snapshots & team collaboration |
| 20 min | **Hands-on Activity:** Build & push a multi-file HTML/CSS/Assets project |
| 5 min | **Next Lab Preview:** Multi-page Figma-to-Code project (Lab 7) |

---
layout: section
icon: lifecycle
sub: Moving from a single Notepad file to a real multi-file web workspace
---

# 01 — From Notepad to a real dev setup

---
layout: default
icon: recap
pipeline:
  - { title: "Lab 1", code: "User Stories", sub: "What to build & why" }
  - { title: "Labs 2–4", code: "Figma UI & Flows", sub: "Wireframes, components & prototype" }
  - { title: "Lab 5", code: "Notepad HTML/CSS", sub: "One self-contained .html file" }
  - { title: "Lab 6 (Today)", code: "VS Code + Git", sub: "Multi-file workspace & GitHub" }
  - { title: "Lab 7", code: "Multi-Page App", sub: "Lab 4 Figma screens in HTML/CSS" }
---

# Where we are in the ICA pipeline

In **Lab 5**, you wrote HTML and CSS in **Notepad** inside a single `.html` file so you could see how the browser reads raw tags without shortcuts.

<Flow :steps="$frontmatter.pipeline" />

Real websites—and your **Course Project (PD3)**—are never one giant file in Notepad. Today we upgrade your workflow so you can manage **separate HTML, CSS, and asset files** and collaborate as a team.

---
layout: default
icon: intro
dense: true
---

# Why Notepad stops working past one screen

| Challenge | In Notepad (Lab 5) | In VS Code + Git (Lab 6 onwards) |
|---|---|---|
| **Multiple files** | Every file is a separate Notepad window; easy to edit the wrong one | **Explorer sidebar** shows your entire project folder tree (`index.html`, `style.css`, `assets/`) |
| **Shared styling** | `<style>` is trapped inside one `.html` file; copying it across 5 pages means 5 places to fix | One external **`style.css`** linked across every page via `<link rel="stylesheet" href="style.css">` |
| **Catching typos** | Black text on a white background; a missing `>` silently breaks the layout | **Syntax highlighting**, auto-closing tags, and colour swatches next to `#ff5a00` |
| **Teamwork & backups** | Sending `project_final_v3_REAL.zip` on WhatsApp and overwriting teammates' work | **Git & GitHub** track every change, who made it, and keep one shared cloud repository |

---
layout: media
image: /img/illustrations/tech-collage.png
side: left
alt: Web development tools illustration
---

# The three tools we lock in today

- **<Tool name="vscode" /> (Visual Studio Code)** — the code editor we use for the rest of the course to write <Tool name="html5" /> and <Tool name="css3" /> and organize project folders.
- **<Tool name="git" />** — version control on your laptop that records snapshots (**commits**) of your project as you work.
- **<Tool name="github" />** — the cloud platform that hosts your Git repositories online so you can back up, submit, and share code with your team.

---
layout: section
icon: tools
sub: Setting up Visual Studio Code, the Explorer sidebar, and the integrated Terminal
---

# 02 — Visual Studio Code & project folders

---
layout: split
title: Visual Studio Code
wideRight: true
dense: true
---

<ToolLogo src="/img/logos/vscode.png" alt="Visual Studio Code" />

**Visual Studio Code** is a free, cross-platform editor built for web projects.

Install two things before we start:

1. **VS Code** — [code.visualstudio.com](https://code.visualstudio.com)
2. **Git** — [git-scm.com/downloads](https://git-scm.com/downloads) (on Windows, this also installs Git Bash)

Docs: [code.visualstudio.com/docs](https://code.visualstudio.com/docs)

::right::

<Activity label="Open a project folder in VS Code">

Always open a **folder**, never a loose file:

1. Create a new empty folder named `ica-lab-06` on your Desktop (or Documents).
2. Open <Tool name="vscode" />.
3. Click **File → Open Folder...** (or **Open Folder** on the Welcome screen).
4. Select `ica-lab-06` and click **Select Folder** (Windows) or **Open** (Mac).

</Activity>

<div class="giu-refs__note">Recommended extension: open the Extensions tab on the left sidebar (<code>Ctrl+Shift+X</code>) and install <strong>Live Server</strong> to auto-refresh your browser whenever you save.</div>

---
layout: split
title: Editor (files) vs. Terminal (commands)
dense: true
---

**Code goes in a file** in the Editor (top area):

- You write <Tool name="html5" /> inside `.html` files and <Tool name="css3" /> inside `.css` files.
- Use the **Explorer** sidebar (top icon on the far left) to create files and folders.
- Press `Ctrl + S` (`Cmd + S` on Mac) to save—an unsaved file shows a **dot** next to its tab name.

::right::

**Commands go in the Terminal** (bottom panel):

```bash
git --version
git status
```

<Activity label="Open the integrated Terminal">

1. In VS Code's top menu bar, click **Terminal → New Terminal**.
2. A panel opens at the bottom of the window, already inside your `ica-lab-06` folder.
3. Type `git --version` and press **Enter** to verify Git is installed.

</Activity>

---
layout: split
title: Anatomy of a frontend project folder
wideRight: true
dense: true
---

Instead of cramming CSS inside `<style>` tags in one file, we separate a frontend project by **responsibility**:

- **`index.html`** — the main entry page (HTML structure only).
- **`style.css`** — the external stylesheet linked in `<head>`:
  `<link rel="stylesheet" href="style.css">`
- **`assets/`** — a subfolder for images and icons linked in `<body>`:
  `<img src="assets/logo.svg" alt="Logo">`

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
  <div class="font-bold text-slate-900">ica-lab-06/</div>
  <div class="pl-4 space-y-1.5 text-[0.72rem]">
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Links <code>style.css</code> &amp; <code>assets/logo.svg</code></span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── style.css</span>
      <span class="font-sans text-[0.62rem] text-slate-600">All Flexbox, Box Model &amp; surface rules</span>
    </div>
    <div class="p-1.5 rounded bg-white border border-amber-200 space-y-1">
      <div class="font-bold text-amber-900">└── assets/</div>
      <div class="pl-5 flex items-center justify-between">
        <span class="font-bold text-amber-800">└── logo.svg</span>
        <span class="font-sans text-[0.62rem] text-slate-600">Brand graphics, icons &amp; photos</span>
      </div>
    </div>
  </div>
</div>

---
layout: section
icon: code
sub: Tracking changes locally with Git and backing them up on GitHub
---

# 03 — Version control with Git & GitHub

---
layout: default
dense: true
---

<ToolLogo src="/img/logos/git.png" alt="Git" />

# Git

**Git** is version control: it tracks every change you make to your project folder so you can inspect what changed, undo mistakes, and collaborate. Every command below also has a button in VS Code's **Source Control** sidebar.

| Command | What it does |
|---|---|
| `git init` | Turns the current folder into a new local Git repository (run once per project) |
| `git status` | Shows which files were created or modified since your last snapshot |
| `git add .` | Stages all changed files in the folder so they are ready to be saved |
| `git commit -m "<msg>"` | Saves a permanent snapshot of staged files with a short description |
| `git clone <url>` | Downloads a remote repository from GitHub onto your computer |
| `git pull` | Downloads the latest commits from GitHub into your local folder |
| `git push` | Uploads your local commits to GitHub |

---
layout: default
icon: lifecycle
gitflow:
  - { title: "1. Working Folder", code: "Save files (Ctrl+S)", sub: "Edit index.html, style.css, assets/" }
  - { title: "2. Staging Area", code: "git add .", sub: "Select files for the next snapshot" }
  - { title: "3. Local Repository", code: 'git commit -m "..."', sub: "Permanent snapshot on your laptop" }
  - { title: "4. Remote (GitHub)", code: "git push", sub: "Backed up online & shared with team" }
---

# How a change travels from VS Code to GitHub

Saving a file (`Ctrl + S`) only updates it on disk. To record it in version history and upload it to GitHub, it moves through four stages:

<Flow :steps="$frontmatter.gitflow" />

<div class="giu-refs__note">Think of <code>git add .</code> as putting items into a shipping box, <code>git commit</code> as sealing and labelling the box, and <code>git push</code> as sending the box to GitHub.</div>

---
layout: activity
title: One-time setup — Set your Git identity
dense: true
---

**Do this once on your machine.** Git stamps every commit with the author's name and email—without this, your first `git commit` will stop with an error:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@student.giu-uni.de"
```

Verify that Git saved your identity:

```bash
git config --global --list
```

Then create a free **GitHub account** if you do not have one yet: [github.com](https://github.com)

---
layout: section
icon: activity
sub: Build a multi-file HTML, CSS & Assets project in VS Code and push it to GitHub
---

# 04 — Hands-on activity: Your first frontend repo

---
layout: split
title: "The plan: 3 files across 5 steps"
dense: true
---

You will build a clean **Talabat Portal Card** inside `ica-lab-06/` with separated HTML, CSS, and image assets, then publish it to GitHub:

1. **Step 1** — Create the `assets/` folder and `assets/logo.svg`
2. **Step 2** — Create the external stylesheet `style.css`
3. **Step 3** — Create `index.html` linking `style.css` and `assets/logo.svg`
4. **Step 4** — Initialize Git and commit your project locally
5. **Step 5** — Create a GitHub repository and push your code online

::right::

```text
ica-lab-06/
├── assets/
│   └── logo.svg      (new — Step 1)
├── style.css         (new — Step 2)
└── index.html        (new — Step 3)
```

<div class="giu-refs__note">Follow the steps in order—we create <code>assets/logo.svg</code> and <code>style.css</code> first so that when you open <code>index.html</code> in Step 3, every linked file already exists.</div>

---
layout: split
title: "Step 1 of 5: the logo asset"
dense: true
---

1. Make sure your `ica-lab-06` folder is open in <Tool name="vscode" />.
2. In the **Explorer** sidebar on the left, click the **New Folder** icon next to `ICA-LAB-06` and name it `assets`.
3. Click on the `assets` folder, then click the **New File** icon and name it `logo.svg`.
4. Type or paste the SVG icon code on the right and press `Ctrl + S` to **save**.

::right::

<FileTag name="assets/logo.svg" state="new" />

<<< @/snippets/lab-06/assets/logo.svg html

---
layout: split
title: "Step 2 of 5: the CSS file"
dense: true
---

1. Click the empty space in the **Explorer** sidebar (outside `assets/`) so your next file is created at the root of `ica-lab-06/`.
2. Click the **New File** icon and name it `style.css`.
3. Paste the CSS rules on the right and press `Ctrl + S` to **save**.

Notice there are **no `<style>` tags** inside a `.css` file—only pure CSS selectors (`body`, `.card`, `.logo`, `.btn`) and properties.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-06/style.css

---
layout: split
title: "Step 3 of 5: the HTML page"
dense: true
---

1. At the root of `ica-lab-06/` (next to `style.css`), click **New File** and name it `index.html`.
2. Write the HTML on the right and press `Ctrl + S` to **save**.

Look at the two highlighted lines:

- **Line 5** pulls in your external stylesheet (`style.css`).
- **Line 10** loads the vector icon from the `assets/` subfolder (`assets/logo.svg`).

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-06/index.html {5,9-10}

---
layout: split
title: "Checkpoint 1: preview in the browser"
dense: true
---

<Activity label="Open your page">

1. Right-click `index.html` in the VS Code Explorer sidebar and click **Open with Live Server** (or double-click `index.html` in your file manager).
2. Confirm you see the white rounded card on a light grey background, the orange **`t`** logo badge, the heading, and the orange **Explore Menu** button.

</Activity>

Missing the styling or broken image icon? Check <Link to="fix-files">**Styles or images don't load**</Link> in Troubleshooting at the end.

::right::

<div class="p-5 rounded-2xl border border-slate-200 bg-[#f8fafc] flex flex-col items-center justify-center shadow-inner">
  <div class="bg-white p-6 rounded-2xl shadow-xs border border-slate-100 flex flex-col items-center text-center w-64">
    <div class="w-12 h-12 rounded-xl bg-[#ff5a00] text-white font-bold text-2xl flex items-center justify-center mb-3">t</div>
    <div class="text-xl font-bold text-slate-900 mb-1">Talabat</div>
    <div class="text-xs text-slate-600 mb-3">Fresh food delivered fast.</div>
    <div class="px-4 py-2 rounded-lg bg-[#ff5a00] text-white text-xs font-semibold">Explore Menu</div>
  </div>
  <div class="mt-2.5 text-[0.64rem] text-slate-500 font-mono">index.html + style.css + assets/logo.svg</div>
</div>

---
layout: split
title: "Step 4 of 5: initialize Git & commit locally"
wideRight: true
dense: true
---

Open the integrated Terminal (**Terminal → New Terminal**) and run these four commands one by one:

1. `git init` — creates the local repository.
2. `git status` — lists `assets/`, `index.html`, and `style.css` as untracked.
3. `git add .` — stages all three files.
4. `git commit -m "Initial frontend structure"` — records your first snapshot.

::right::

<Activity label="Run in the VS Code Terminal">

```bash
git init
git status
git add .
git commit -m "Initial frontend structure"
```

Expected output after `git commit`:

```text
[main (root-commit) 1a2b3c4] Initial frontend structure
 3 files changed, 50 insertions(+)
 create mode 100644 assets/logo.svg
 create mode 100644 index.html
 create mode 100644 style.css
```

</Activity>

---
layout: split
title: "Step 5 of 5: push to GitHub"
wideRight: true
dense: true
---

Now upload your local repository to <Tool name="github" />:

1. Sign in to [github.com](https://github.com) and click **`+`** (top right) → **New repository**.
2. Name it `ica-lab-06`, keep it **Public**, and leave **Add a README** **unchecked**.
3. Click **Create repository**.

::right::

<Activity label="Connect and push (Terminal or VS Code)">

Copy the three lines GitHub shows under *"…or push an existing repository"* and run them in your Terminal:

```bash
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

**Or in VS Code:** click the **Source Control** icon on the left → click **Publish Branch** → **Publish to GitHub public repository**.

</Activity>

---
layout: split
title: "Checkpoint 2: verify your repository on GitHub"
dense: true
---

<Activity label="Final check">

1. Refresh your `https://github.com/<your-username>/ica-lab-06` page in the browser.
2. Confirm you see all three items in the file list:
   - `assets/` (containing `logo.svg`)
   - `index.html`
   - `style.css`
3. Confirm your commit message **`Initial frontend structure`** appears next to them.

</Activity>

Got an error in the terminal? Jump to <Link to="fix-git">**Git & GitHub errors**</Link> in Troubleshooting.

::right::

### What happens when you edit a file later?

Whenever you change `index.html` or `style.css`, you only need the **three daily commands**:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Or in VS Code's **Source Control** tab: type a message, click **Commit**, then click **Sync Changes**.

---
layout: default
icon: lifecycle
dense: true
---

# Coming up in Lab 7: Multi-page Figma-to-code sprint

Now that you have <Tool name="vscode" />, a clean `index.html` + `style.css` + `assets/` folder structure, and <Tool name="github" /> ready, here is what we will build next week in **Lab 7**:

<div class="grid grid-cols-3 gap-3.5 mt-3 text-xs">
  <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-blue-900 text-sm mb-1">1. Your Lab 4 Figma Prototype</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        You will take the multi-screen <Tool name="figma" /> prototype you wired in <strong>Lab 4</strong> (Home, Food Delivery Feed, and Restaurant pages) as your visual blueprint.
      </p>
    </div>
    <div class="text-[0.6rem] text-blue-800 font-semibold pt-1.5 mt-2 border-t border-blue-200">
      Design-to-Code Handoff
    </div>
  </div>

  <div class="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-teal-900 text-sm mb-1">2. Multi-Page HTML &amp; CSS</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        Instead of one page, you will build multiple `.html` pages connected with <code>&lt;a href="..."&gt;</code> navigation links, sharing stylesheet rules and an <code>assets/</code> folder.
      </p>
    </div>
    <div class="text-[0.6rem] text-teal-800 font-semibold pt-1.5 mt-2 border-t border-teal-200">
      Multi-File Architecture
    </div>
  </div>

  <div class="p-3.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-purple-900 text-sm mb-1">3. In-Lab Graded Sprint</div>
      <p class="text-[0.68rem] text-slate-600 leading-relaxed">
        You will build and wire the multi-page project in <Tool name="vscode" /> during Lab 7 and push your completed repository to <Tool name="github" />.
      </p>
    </div>
    <div class="text-[0.6rem] text-purple-800 font-semibold pt-1.5 mt-2 border-t border-purple-200">
      Directly Prepares for PD3
    </div>
  </div>
</div>

---
layout: section
icon: tools
sub: Common file-path, terminal, and Git errors and how to fix them
---

# Troubleshooting

---
layout: default
routeAlias: fix-files
dense: true
---

# Styles or images don't load

| Symptom | Cause | Fix |
|---|---|---|
| Plain unstyled text (no card or orange button) | `style.css` is inside `assets/` or misspelled in `<link>` | Keep `style.css` next to `index.html` and check `<link rel="stylesheet" href="style.css">`. |
| Broken image icon instead of the logo | `logo.svg` is outside `assets/` or path mismatches | Place `logo.svg` inside `assets/` and check `src="assets/logo.svg"` on line 10. |
| Edits in VS Code don't show in the browser | File is unsaved (dot on tab) or named `.css.txt` | Press `Ctrl + S` to save, refresh the browser, and always create files from VS Code Explorer. |

---
layout: default
routeAlias: fix-git
dense: true
---

# Git & GitHub errors

| Error message in the Terminal | Exact fix |
|---|---|
| `git: command not found` or `'git' is not recognized` | Install Git from [git-scm.com/downloads](https://git-scm.com/downloads), then **close and reopen VS Code**. |
| `Author identity unknown` / `Please tell me who you are` | Run `git config --global user.name "..."` and `user.email "..."`, then commit again. |
| `fatal: not a git repository: .git` | Open `ica-lab-06` via **File → Open Folder...**, open a **New Terminal**, and run `git init`. |
| `error: failed to push some refs` | Create a fresh repo on GitHub **without** ticking *Add a README*, or run `git pull --rebase origin main`. |

---
layout: refs
title: References & useful links
dense: true
---

## Install and set up

- [Visual Studio Code — Download](https://code.visualstudio.com)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Git — Downloads](https://git-scm.com/downloads)
- [Git Official Documentation](https://git-scm.com/doc)

## Git and GitHub

- [GitHub Docs — Getting Started](https://docs.github.com/en/get-started)
- [Git and GitHub Learning Resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)
- [GitHub Skills Interactive Courses](https://skills.github.com/)

## HTML, CSS & Project Structure

- [MDN — Dealing with files & website structure](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)
- [MDN — External stylesheets (`<link>`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [MDN — Embedding images in HTML (`<img>`)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)

<div class="giu-refs__note">Nothing on this slide is required homework—use these links whenever you get stuck or want to explore further.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions — see you in Lab 7!
---

# Questions?
