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
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
dense: true
---

# Lab agenda

| Duration | Topic |
|---|---|
| 10 min | **Part 1A — What is VS Code?** VS Code vs. Notepad & workspace anatomy |
| 10 min | **Part 1B — What is Git?** Version control for developers & local snapshots |
| 10 min | **Part 1C — What is GitHub?** Cloud hosting & comparing Git vs. GitHub |
| 35 min | **Part 2 — Lab Manual (Practice):** Build an HTML + CSS + `assets/` project & push to GitHub |

---
layout: section
icon: tools
sub: "Part 1 — Concepts: A text editor built specifically for programming"
---

# 01 — What is Visual Studio Code?

---
layout: split
title: What is Visual Studio Code?
wideRight: true
dense: true
---

<ToolLogo src="/img/logos/vscode.png" alt="Visual Studio Code" />

**Visual Studio Code (<Tool name="vscode" />)** is a free source-code editor used by developers to write and manage software projects.

**VS Code vs. Notepad:**
- Both are **plain-text editors** that read and save `.html` and `.css` files.
- Unlike **Notepad** (plain black text, one loose file per window), <Tool name="vscode" /> is **oriented toward programming**: it adds **syntax highlighting**, auto-closing `<tags>`, and opens an entire **project folder** at once.

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 text-xs">
  <div class="font-bold text-slate-900 text-sm">Three main areas inside the VS Code window</div>
  <div class="p-2.5 rounded-lg bg-white border border-blue-200">
    <div class="font-bold text-blue-900">1. Explorer Sidebar (Left)</div>
    <div class="text-[0.68rem] text-slate-600 mt-0.5">Shows your project folder tree (<code>index.html</code>, <code>style.css</code>, <code>assets/</code>) so you can create and switch between files quickly.</div>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-teal-200">
    <div class="font-bold text-teal-900">2. Editor Area (Top Right)</div>
    <div class="text-[0.68rem] text-slate-600 mt-0.5">Where you write <Tool name="html5" /> and <Tool name="css3" /> code inside open tabs. A dot on a tab means the file has unsaved changes.</div>
  </div>
  <div class="p-2.5 rounded-lg bg-white border border-purple-200">
    <div class="font-bold text-purple-900">3. Integrated Terminal (Bottom Panel)</div>
    <div class="text-[0.68rem] text-slate-600 mt-0.5">A built-in command line already pointed at your project folder, used to run <Tool name="git" /> commands.</div>
  </div>
</div>

---
layout: section
icon: code
sub: "Part 1 — Concepts: Version control for developers"
---

# 02 — What is Git?

---
layout: default
dense: true
---

<ToolLogo src="/img/logos/git.png" alt="Git" />

# What is Git? Version control for developers

**Git** is a **version control system** that runs on your computer. Instead of saving duplicate folders (`project_v1`, `project_FINAL`), Git watches your project folder and records permanent **snapshots (commits)** as you code:

| Concept | Local Git command | What it means |
|---|---|---|
| **Repository (`repo`)** | `git init` | A project folder that Git is actively tracking |
| **Working changes** | `git status` | Shows which files were created, modified, or deleted since the last snapshot |
| **Staging area** | `git add .` | Selects the changed files you want to include in your next snapshot |
| **Commit (snapshot)** | `git commit -m "<msg>"` | Saves a permanent, timestamped snapshot of staged files with a description |

---
layout: section
icon: lifecycle
sub: "Part 1 — Concepts: Cloud repository hosting and how Git differs from GitHub"
---

# 03 — What is GitHub? (Git vs. GitHub)

---
layout: default
dense: true
---

<ToolLogo name="github" />

# What is GitHub? Comparing Git vs. GitHub

**<Tool name="github" />** ([github.com](https://github.com)) is a cloud platform that hosts **<Tool name="git" />** repositories online so you can back up your work and collaborate with your team:

| Question | <Tool name="git" /> | <Tool name="github" /> |
|---|---|---|
| **What is it?** | **Version control tool** that records snapshots of files | **Cloud website** that hosts Git repositories online |
| **Where does it live?** | **Locally on your laptop** (Terminal / VS Code) | **On the web** at [github.com](https://github.com) |
| **Internet needed?** | **No** — `git init`, `add`, and `commit` work offline | **Yes** — needed for `git push`, `pull`, and `clone` |
| **Analogy** | Taking and organizing photos on your phone | Backing up and sharing that album in the cloud |

---
layout: default
icon: lifecycle
gitflow:
  - { title: "1. VS Code Folder", code: "Save files (Ctrl+S)", sub: "Edit index.html, style.css, assets/" }
  - { title: "2. Staging Area (Git)", code: "git add .", sub: "Select files for the next snapshot" }
  - { title: "3. Local Repo (Git)", code: 'git commit -m "..."', sub: "Permanent snapshot on your laptop" }
  - { title: "4. Cloud Repo (GitHub)", code: "git push", sub: "Uploaded to github.com for backup & team" }
dense: true
---

# How VS Code, Git, and GitHub work together

First, you edit and save files in **<Tool name="vscode" />**, record commits locally with **<Tool name="git" />**, and then sync them with **<Tool name="github" />**:

<Flow :steps="$frontmatter.gitflow" />

- **`git push`** — uploads your local commits from your laptop to your repository on GitHub.
- **`git clone <url>`** — downloads an existing repository from GitHub onto a computer for the first time.
- **`git pull`** — downloads the latest commits from GitHub when a teammate updates the repository.

---
layout: section
icon: activity
sub: "Part 2 — Practice: Step-by-step walkthrough from an empty folder to GitHub"
---

# 04 — Lab Manual: Hands-On Practice

---
layout: split
title: "The plan: 3 files across 6 steps"
dense: true
---

You will now build a multi-file **Talabat Portal** in <Tool name="vscode" /> and push it to <Tool name="github" />:

1. **Step 1** — Open the `ica-lab-06/` project folder in VS Code.
2. **Step 2 (`assets/logo.svg`)** — Create `assets/` with an image.
3. **Step 3 (`style.css`)** — Create the CSS stylesheet.
4. **Step 4 (`index.html`)** — Link `style.css` (`<link>`) & `logo.svg` (`<img>`).
5. **Step 5 (Git)** — Configure Git, `git init`, and commit locally.
6. **Step 6 (GitHub)** — Create a GitHub repository and push.

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
  <div class="font-bold text-slate-900">ica-lab-06/ <span class="font-sans font-normal text-[0.65rem] text-slate-500">(Step 1 — Open in VS Code)</span></div>
  <div class="pl-4 space-y-1.5 text-[0.72rem]">
    <div class="p-1.5 rounded bg-white border border-amber-200 space-y-1">
      <div class="font-bold text-amber-900">├── assets/</div>
      <div class="pl-5 flex items-center justify-between">
        <span class="font-bold text-amber-800">└── logo.svg</span>
        <span class="font-sans text-[0.62rem] text-slate-600">Step 2 — Image inside <code>assets/</code></span>
      </div>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">├── style.css</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Step 3 — External CSS styling</span>
    </div>
    <div class="flex items-center justify-between p-1.5 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">└── index.html</span>
      <span class="font-sans text-[0.62rem] text-slate-600">Step 4 — Links <code>style.css</code> &amp; <code>&lt;img&gt;</code></span>
    </div>
  </div>
</div>

<div class="giu-refs__note">We create <code>assets/logo.svg</code> and <code>style.css</code> before <code>index.html</code> so every file exists when we link it.</div>

---
layout: split
title: "Step 1 of 6: open your project folder in VS Code"
wideRight: true
dense: true
---

Before creating any files, make sure these two tools are installed:

1. **VS Code** — [code.visualstudio.com](https://code.visualstudio.com)
2. **Git** — [git-scm.com/downloads](https://git-scm.com/downloads)

In VS Code, always open a **folder** rather than a loose file so the **Explorer** sidebar and **Terminal** know where your project lives.

::right::

<Activity label="Create and open ica-lab-06">

1. Create a new empty folder named `ica-lab-06` on your Desktop (or Documents).
2. Open <Tool name="vscode" />.
3. Click **File → Open Folder...** (or **Open Folder** on the Welcome screen).
4. Select `ica-lab-06` and click **Select Folder** (Windows) or **Open** (Mac).

</Activity>

<div class="giu-refs__note">Recommended extension: open the Extensions tab on the left sidebar (<code>Ctrl+Shift+X</code>) and install <strong>Live Server</strong> so your browser reloads automatically whenever you save.</div>

---
layout: split
title: "Step 2 of 6: the assets/ folder and image"
dense: true
---

1. Look at the **Explorer** sidebar on the left side of <Tool name="vscode" /> (under `ICA-LAB-06`).
2. Click the **New Folder** icon next to `ICA-LAB-06` and name the folder `assets`.
3. Click the `assets` folder to select it, then click the **New File** icon and name it `logo.svg`.
4. Paste the SVG image code on the right and press `Ctrl + S` (`Cmd + S` on Mac) to **save**.

::right::

<FileTag name="assets/logo.svg" state="new" />

<<< @/snippets/lab-06/assets/logo.svg html

---
layout: split
title: "Step 3 of 6: the CSS file (style.css)"
dense: true
class: giu-small
---

1. Click the empty space in the **Explorer** sidebar (outside `assets/`) so your next file is created at the root of `ica-lab-06/`.
2. Click the **New File** icon and name it `style.css`.
3. Write the CSS styling rules on the right and press `Ctrl + S` to **save**.

Notice there are **no `<style>` tags** inside a `.css` file—only CSS selectors (`body`, `.card`, `.logo`, `.btn`) and their properties.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-06/style.css

---
layout: split
title: "Step 4 of 6: index.html linking CSS and image"
dense: true
---

1. At the root of `ica-lab-06/` (next to `style.css`), click **New File** and name it `index.html`.
2. Write the HTML on the right and press `Ctrl + S` to **save**.

Look closely at the two highlighted parts:

- **Line 5 (`<link>`)** links `style.css` inside `<head>`: `<link rel="stylesheet" href="style.css">`
- **Lines 9–10 (`<img>`)** load the image from `assets/`: `<img class="logo" src="assets/logo.svg" alt="Logo">`

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-06/index.html {5,9-10}

---
layout: split
title: "Checkpoint 1: preview your page in the browser"
dense: true
---

<Activity label="Open your page">

1. Right-click `index.html` in the VS Code Explorer sidebar and click **Open with Live Server** (or double-click `index.html` in your file manager).
2. Confirm that both linked files load properly:
   - **From `style.css`:** light grey background, centered white card, and orange **Explore Menu** button.
   - **From `assets/logo.svg`:** the orange **`t`** logo image above the heading.

</Activity>

Missing the styling or seeing a broken image icon? Check <Link to="fix-files">**Styles or images don't load**</Link> in Troubleshooting.

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
title: "Step 5 of 6: initialize Git & commit locally"
wideRight: true
dense: true
---

1. Open the integrated Terminal in VS Code: click **Terminal → New Terminal** in the top menu bar.
2. If this is your first time using Git on this computer, set your `user.name` and `user.email` first (shown on the right).
3. Run `git init`, `git status`, `git add .`, and `git commit` to record your first snapshot (`commit`) locally.

::right::

<Activity label="Run in the VS Code Terminal">

First-time setup on a machine (run once):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@giu.de"
```

Initialize and commit your project:

```bash
git init
git status
git add .
git commit -m "Initial frontend structure"
```

</Activity>

---
layout: split
title: "Step 6 of 6: create a GitHub repo & push"
wideRight: true
dense: true
---

Now upload your local Git repository to <Tool name="github" />:

1. Sign in to [github.com](https://github.com) (create a free account if needed) and click **`+`** (top right) → **New repository**.
2. Name it `ica-lab-06`, keep it **Public**, and leave **Add a README** **unchecked**.
3. Click **Create repository**.

::right::

<Activity label="Connect and push (Terminal or VS Code)">

Copy the three commands GitHub shows under *"…or push an existing repository"* and run them in your Terminal:

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

### Updating your project after edits

Whenever you edit `index.html`, `style.css`, or add more images to `assets/`, save the file (`Ctrl + S`) and run the three daily commands:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Or in VS Code's **Source Control** tab: type a message, click **Commit**, then click **Sync Changes**.

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
| Broken image icon instead of the logo | `logo.svg` is outside `assets/` or path mismatches | Place `logo.svg` inside `assets/` and check `<img class="logo" src="assets/logo.svg" alt="Logo">`. |
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
