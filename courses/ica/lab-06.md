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
| 12 min | **Part 1A — What is VS Code?** VS Code vs. Notepad & its three areas |
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
- Unlike **Notepad**, <Tool name="vscode" /> is **made for programming**: **syntax highlighting**, auto-closing `<tags>`, a whole **project folder** open at once.

**Three areas**: **Explorer** (1), **Editor** (2), **Terminal** (3). One slide each next.

::right::

![The VS Code window with the lab project open: the Explorer, the Editor and the Terminal are boxed and numbered 1 to 3](/img/vscode/vscode-areas.png)

---
layout: split
title: "Area 1: the Explorer"
wideRight: true
dense: true
---

The Explorer shows the **folder you opened** and everything inside it. You create, rename and open files here.

1. **Explorer icon**: click it to bring the Explorer back if it's hidden.
2. **Your project folder** (`ica-lab-06`). Every file you create lands inside it.
3. **New File**: creates a file.
4. **New Folder**: creates a folder.
5. **The file tree**: click a file to open it in the Editor. Click `>` next to a folder to open or close it.

<div class="giu-refs__note">Buttons 3 and 4 only show while your mouse is over the Explorer. Move it there if you don't see them.</div>

::right::

![The Explorer: the Explorer icon, the folder name, the New File and New Folder buttons and the file tree are numbered 1 to 5](/img/vscode/area-explorer.png)

---
layout: split
title: "Area 2: the Editor"
wideRight: true
dense: true
---

The Editor is where you **write code**. Every file you open gets a **tab** at the top.

1. **The tab** of the open file. Click another tab to switch files.
2. **The unsaved dot**: the file has changes that are **not saved yet**. The browser and Git can't see them. Press `Ctrl + S` (`Cmd + S` on Mac) and the dot turns back into an `×`.
3. **Line numbers**: when a slide says "line 5", look here.
4. **Your code**, coloured by **syntax highlighting**: tags, attributes and values each get their own colour, so a typo stands out.

::right::

![The Editor with index.html open and not saved yet: the tab, the unsaved dot, the line numbers and the code are numbered 1 to 4](/img/vscode/area-editor.png)

---
layout: default
dense: true
---

# Area 3: the Terminal

![The Terminal panel: the Terminal tab, the command area, the New Terminal button and the Kill Terminal button are numbered 1 to 4](/img/vscode/area-terminal.png)

1. **Terminal** tab. Open it from the top menu: **Terminal → New Terminal**.
2. **The command line.** It already starts **inside your project folder** (`ica-lab-06`), so `git` commands work on your project. Type a command, press `Enter`, read the answer underneath.
3. **New Terminal** (`+`): opens another one.
4. **Kill Terminal** (bin): closes this one. Your files are not touched.

<div class="giu-refs__note">On Windows your terminal is PowerShell and the line starts with something like <code>PS C:\Users\you\Desktop\ica-lab-06&gt;</code>. Same thing, different look.</div>

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
dense: true
---

Installed? **VS Code** ([code.visualstudio.com](https://code.visualstudio.com)) and **Git** ([git-scm.com/downloads](https://git-scm.com/downloads)).

<Activity label="Create and open ica-lab-06">

1. Create a new empty folder named `ica-lab-06` on your Desktop (or Documents).
2. Open <Tool name="vscode" /> and click **File** (①) → **Open Folder...** (②).
3. Select `ica-lab-06` and click **Select Folder** (Windows) or **Open** (Mac).
4. If VS Code asks *"Do you trust the authors?"*, click **Yes, I trust the authors**.

</Activity>

Open a **folder**, never a loose file: the Explorer and Terminal work on that folder.

::right::

![The File menu open in VS Code, with File numbered 1 and Open Folder... numbered 2](/img/vscode/open-folder.png)

---
layout: split
title: "Step 1 of 6: install Live Server"
wideRight: true
dense: true
---

**Live Server** opens your page in the browser and **reloads it every time you save**. You'll use it at Checkpoint 1.

1. Click the **Extensions** icon in the left bar (①), or press `Ctrl + Shift + X`.
2. Type `Live Server` in the search box (②).
3. Find the one by **Ritwick Dey** (③). Other extensions have similar names.
4. Click its **Install** button (④).
5. VS Code asks if you trust the publisher: next slide.

::right::

![The Extensions view with Live Server typed in the search box: the Extensions icon, the search box, Live Server by Ritwick Dey and its Install button are numbered 1 to 4](/img/vscode/extensions-live-server.png)

---
layout: split
title: "Step 1 of 6: trust the publisher"
dense: true
---

Live Server is the first extension you install from its publisher, so VS Code asks:

**Do you trust the publisher "Ritwick Dey"?**

1. Click **Trust Publisher & Install** (①).
2. Wait a few seconds. When it's installed, a **Go Live** button appears at the **bottom right** of the VS Code window.

"Not verified" only means the publisher hasn't verified a domain with Microsoft. Live Server is one of the most installed extensions there is.

::right::

![The dialog Do you trust the publisher Ritwick Dey?, with the Trust Publisher & Install button numbered 1](/img/vscode/extensions-trust.png)

---
layout: split
title: "Step 2 of 6: create the assets/ folder"
dense: true
class: ica6-stack
---

1. Move your mouse over the **Explorer**. Two buttons appear next to `ica-lab-06`: **New File** (①) and **New Folder** (②).
2. Click **New Folder** (②).
3. A box appears in the tree. Type `assets` and press `Enter`.

The folder is created **inside `ica-lab-06`**. Check that `assets` appears in the tree, one step to the right of `ica-lab-06`.

::right::

![The Explorer header with the New File button numbered 1 and the New Folder button numbered 2](/img/vscode/explorer-buttons.png)

![The name box in the Explorer with assets typed in it](/img/vscode/explorer-new-folder.png)

---
layout: split
title: "Step 2 of 6: create logo.svg inside assets/"
dense: true
class: ica6-stack
---

1. **Click `assets`** in the tree, so it is selected (highlighted).
2. Click **New File** (the first button next to `ica-lab-06`).
3. The box now appears **under `assets`**, indented. Type `logo.svg` and press `Enter`.

If the box appears at the same level as `assets` instead, press `Esc`, click `assets` and try again.

::right::

![The name box indented under the assets folder, with logo.svg typed in it](/img/vscode/explorer-new-file-in-assets.png)

---
layout: split
title: "Step 2 of 6: \"An error occurred while loading the image\""
wideRight: true
dense: true
---

An `.svg` file is an image, so VS Code opens it in **Image Preview**.

1. Your new file is still empty, so there is nothing to show: **An error occurred while loading the image.** This is **expected**.
2. Click **Open file using VS Code's standard text/binary editor?** You get an empty editor, ready for the code.

::right::

![VS Code showing logo.svg in Image Preview: the error message is numbered 1 and the link to open the text editor is numbered 2](/img/vscode/svg-preview-error.png)

---
layout: split
title: "Step 2 of 6: the image code (assets/logo.svg)"
dense: true
---

1. Paste the SVG code on the right into the empty editor.
2. Press `Ctrl + S` (`Cmd + S` on Mac) to **save**. The dot on the tab disappears.

An SVG image is written in text: a rounded orange square (`<rect>`) with a white letter `t` (`<text>`) on it.

::right::

<FileTag name="assets/logo.svg" state="new" />

<<< @/snippets/lab-06/assets/logo.svg html

---
layout: split
title: "Step 3 of 6: the CSS file (style.css)"
dense: true
class: giu-small ica6-stack
---

1. Click the **empty space** in the Explorer, below the files, so the next file goes at the **root** of `ica-lab-06/`.
2. Click **New File**, type `style.css`, press `Enter`. It lines up with `assets`, not under it:

![The name box at the root of the project, lined up with the assets folder, with style.css typed in it](/img/vscode/explorer-new-file-root.png)

3. Paste the CSS on the right (a `.css` file has **no `<style>` tags**) and press `Ctrl + S` to **save**.

::right::

<FileTag name="style.css" state="new" />

<<< @/snippets/lab-06/style.css

---
layout: split
title: "Step 4 of 6: index.html linking CSS and image"
dense: true
---

1. Click the empty space in the Explorer again, then **New File**, and name it `index.html` (next to `style.css`).
2. Paste the HTML on the right and press `Ctrl + S` to **save**.

Look closely at the two highlighted parts:

- **Line 5 (`<link>`)** links `style.css` inside `<head>`: `<link rel="stylesheet" href="style.css">`
- **Lines 9–10 (`<img>`)** load the image from `assets/`: `<img class="logo" src="assets/logo.svg" alt="Logo">`

Your Explorer should now show `assets/` (with `logo.svg`), `index.html` and `style.css`, like **Area 1**.

::right::

<FileTag name="index.html" state="new" />

<<< @/snippets/lab-06/index.html {5,9-10}

---
layout: split
title: "Checkpoint 1: open your page with Live Server"
dense: true
class: ica6-tall
---

<Activity label="Open your page">

1. **Right-click** `index.html` in the Explorer (①).
2. Click **Open with Live Server** (②), the first item in the menu.
3. Your browser opens at `http://127.0.0.1:5500/index.html`.

</Activity>

No Live Server in the menu? Install it (Step 1), or click **Go Live** at the bottom right of VS Code. You can also double-click `index.html` in your file manager.

::right::

![Right-click menu on index.html in the Explorer: index.html is numbered 1 and Open with Live Server is numbered 2](/img/vscode/live-server-menu.png)

---
layout: split
title: "Checkpoint 1: what you should see"
wideRight: true
dense: true
---

<Activity label="Check both linked files">

- **From `style.css`:** light grey background, a white card with rounded corners, an orange **Explore Menu** button.
- **From `assets/logo.svg`:** the orange **`t`** logo above the heading.

</Activity>

Plain black text on white, or a broken image icon? Check <Link to="fix-files">**Styles or images don't load**</Link> in Troubleshooting.

::right::

![The finished page in the browser: an orange t logo, the heading Talabat, the line Fresh food delivered fast. and an orange Explore Menu button on a white card](/img/vscode/page-result.png)

---
layout: split
title: "Step 5 of 6: open the Terminal"
dense: true
---

1. In the top menu bar, click **Terminal** (①) → **New Terminal** (②).
2. The Terminal opens at the bottom (**Area 3**). Check that it starts in `ica-lab-06`.
3. **First time using Git on this computer?** Tell Git who you are. Type each line, with **your** name and email, and press `Enter`:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@giu.de"
```

These print nothing. That means they worked.

::right::

![The Terminal menu open, with Terminal numbered 1 and New Terminal numbered 2](/img/vscode/terminal-menu.png)

---
layout: split
title: "Step 5 of 6: git init and git status"
wideRight: true
dense: true
---

Type in the Terminal, one line at a time:

```bash
git init
git status
```

- `git init` turns `ica-lab-06` into a Git repository. The yellow **`hint:`** lines are **not errors**: Git says it called the branch `master`. Step 6 renames it to `main`.
- `git status` lists your three items in **red** under *Untracked files*: Git sees them but isn't saving them yet.

::right::

![The Terminal after git init and git status: hint lines about the branch name master, then Untracked files listing assets/, index.html and style.css in red](/img/vscode/git-status.png)

---
layout: default
dense: true
---

# Step 5 of 6: add and commit

Now record your first snapshot. Type in the Terminal, one line at a time:

```bash
git add .
git commit -m "Initial frontend structure"
git status
```

<div class="grid grid-cols-2 gap-6 items-start">
<div>

- `git add .` (with the dot) selects every changed file. It prints nothing.
- `git commit` saves the snapshot and prints **3 files changed**.
- `git status` now says **nothing to commit, working tree clean**: everything is saved in Git.

</div>
<div>

![The Terminal after git add, git commit and git status: 3 files changed, and working tree clean](/img/vscode/git-commit.png)

</div>
</div>

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

<Activity label="Connect and push from the Terminal">

Copy the three commands GitHub shows under *"…or push an existing repository"* and run them in your Terminal:

```bash
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

The first time, a window asks you to **sign in to GitHub**. Sign in, and the push continues.

</Activity>

---
layout: split
title: "Step 6 of 6, the other way: Publish Branch"
dense: true
---

You can skip the GitHub website and the three commands, and publish from VS Code instead:

1. Click the **Source Control** icon in the left bar (①).
2. Click **Publish Branch** (②).
3. Pick **Publish to GitHub public repository**, and sign in to GitHub when asked.

VS Code creates the repository on GitHub **and** pushes in one go. Use **one** way, not both.

::right::

![The Source Control view after the first commit: the Source Control icon is numbered 1 and the Publish Branch button is numbered 2](/img/vscode/scm-publish.png)

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

Or use the **Source Control** view: next slide.

---
layout: split
title: "Updating your project from Source Control"
dense: true
---

The same three commands, without the Terminal:

1. Open **Source Control** in the left bar. Your changed files are listed under **Changes** (③), marked **M** for *modified*.
2. Type a message in the box (①), e.g. `Add a comment to the styles`.
3. Click **Commit** (②). If VS Code asks to stage all your changes, click **Yes** (that's `git add .`).
4. Click **Sync Changes** to push to GitHub (that's `git push`).

::right::

![The Source Control view with a message typed in the box, the Commit button and the changed file style.css numbered 1 to 3](/img/vscode/scm-commit.png)

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
class: giu-fix
dense: true
---

# VS Code shows an error

| Message in VS Code | Cause | Fix |
|---|---|---|
| `An error occurred while loading the image.` | `logo.svg` is still empty, and VS Code opened it in Image Preview | Click **Open file using VS Code's standard text/binary editor?** under the message, then paste the SVG code (Step 2). |

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
