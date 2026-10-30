---
theme: ../../theme
title: BINF 301 - Assignment 2 - Multi-File Project & GitHub Workflow
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
assignment: 2
lineNumbers: true
layout: cover
---

# Assignment 2 — Multi-File Project & GitHub Workflow

---
layout: default
icon: intro
---

# What this assignment is

- Install **<Tool name="vscode" />** and **<Tool name="git" />**, and verify they work on your machine.
- Create a local **Git repository** inside a project folder.
- Refactor your **Assignment 1** mobile home screen from a single Notepad file into a clean **multi-file structure** (`index.html` + `style.css`).
- Create a **Public** repository on **<Tool name="github" />**, push your code, and submit your repository link.

---
layout: refs
title: Want a quick refresher first?
columns: 2
dense: true
---

## VS Code

- Watch: [VS Code in 7 Minutes](https://www.youtube.com/watch?v=ZngV3QqOEB0)
- Read: [VS Code Documentation](https://code.visualstudio.com/docs)

## Git

- Watch: [Git Tutorial for Beginners](https://www.youtube.com/watch?v=8JJ101D3knE)
- Read: [Git Official Documentation](https://git-scm.com/doc)

## GitHub

- Watch: [Git & GitHub Crash Course](https://www.youtube.com/watch?v=mAFoROnOfHs)
- Read: [GitHub Docs — Getting Started](https://docs.github.com/en/get-started)

## External CSS & File Structure

- Read: [MDN — Dealing with files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)
- Read: [MDN — External stylesheets (`<link>`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

<div class="giu-refs__note">Use these resources anytime you want a refresher before or during the steps below.</div>

---
layout: section
icon: tools
sub: Step 1 & Step 2 — Install the required tools and verify your setup
---

# 01 — Installing & Verifying the Tools

---
layout: split
title: "1. Install the needed tools"
wideRight: true
---

Install these two programs on your computer:

1. **<Tool name="vscode" />** — [code.visualstudio.com](https://code.visualstudio.com)
2. **<Tool name="git" />** — [git-scm.com/downloads](https://git-scm.com/downloads)
   (On Windows, keep all default options—this also installs **Git Bash**.)

Also make sure you have a free **<Tool name="github" />** account at [github.com](https://github.com).

<div class="giu-refs__note">Windows: if VS Code was already open while you installed Git, close and reopen VS Code so it detects Git.</div>

::right::

<Activity label="Open the integrated Terminal in VS Code">

1. Open **<Tool name="vscode" />**.
2. Click **Terminal** in the top menu bar.
3. Click **New Terminal**.

A panel opens at the bottom of the VS Code window—that is your **Terminal**. Click inside it, type a command, and press **Enter** to run it.

</Activity>

---
layout: split
title: "2. Verify the installation & set your Git identity"
wideRight: true
dense: true
---

Before creating a repository, check that Git is installed and tell Git your name and email so it can label your commits.

**Why set your identity?**
Git stamps every snapshot (`commit`) with the author's name and email. Without this one-time setup, `git commit` will stop with an error.

::right::

<Activity label="Run in the VS Code Terminal">

1. Check that Git is installed:
   ```bash
   git --version
   ```
   *(You should see a version like `git version 2.x.x`.)*

2. Set your name and email (once per computer):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@giu.de"
   ```

3. Confirm your settings were saved:
   ```bash
   git config --global --list
   ```

</Activity>

---
layout: section
icon: code
sub: Step 3 — Create your project folder and initialize a local Git repository
---

# 02 — Creating a Local Repository

---
layout: split
title: "3. Create a project folder & initialize Git"
wideRight: true
dense: true
---

Always work inside a dedicated **project folder** opened in VS Code—never edit loose files on your Desktop.

1. Create a new empty folder named **`ica-assignment-2`** on your computer.
2. Open that folder in **<Tool name="vscode" />**.
3. Open the integrated Terminal and run `git init` to turn the folder into a local **Git repository**.

::right::

<Activity label="Open folder & run git init">

1. In VS Code, click **File → Open Folder...** and select **`ica-assignment-2`**.
2. Open the Terminal (**Terminal → New Terminal**) and run:
   ```bash
   git init
   ```
3. Expected output:
   ```text
   Initialized empty Git repository in .../ica-assignment-2/
   ```

</Activity>

<div class="giu-refs__note">Your folder is now a local Git repository. Next, we will add your project files inside it.</div>

---
layout: section
icon: assignment
sub: Step 4 — Refactor your Assignment 1 mobile screen into separate HTML and CSS files
---

# 03 — Recreating Assignment 1 in a Multi-File Structure

---
layout: split
title: "4. From one Notepad file to a multi-file project"
dense: true
---

In **Assignment 1**, you built your mobile home screen inside a single `<StudentID>.html` file with CSS inside `<style>` tags.

Now organize that screen into two files inside `ica-assignment-2/`:

- **`index.html`** — HTML structure only, linking `style.css`: `<link rel="stylesheet" href="style.css">`
- **`style.css`** — all CSS rules (no `<style>` tags).

Need your Assignment 1 brief again? Visit:
[youneszied.github.io/ICA_lab_5_Assignment-/](https://youneszied.github.io/ICA_lab_5_Assignment-/)

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2.5">
  <div class="font-bold text-slate-900">ica-assignment-2/</div>
  <div class="pl-4 space-y-2 text-[0.72rem]">
    <div class="flex items-center justify-between p-2 rounded bg-white border border-blue-200">
      <span class="font-bold text-blue-800">├── index.html</span>
      <span class="font-sans text-[0.62rem] text-slate-600">HTML structure + <code>&lt;link&gt;</code> to CSS</span>
    </div>
    <div class="flex items-center justify-between p-2 rounded bg-white border border-teal-200">
      <span class="font-bold text-teal-800">└── style.css</span>
      <span class="font-sans text-[0.62rem] text-slate-600">All CSS rules (no <code>&lt;style&gt;</code> tags)</span>
    </div>
  </div>
</div>

<div class="p-2.5 mt-2 rounded-xl border border-amber-200 bg-amber-50/70 text-[0.65rem] text-slate-700 leading-relaxed">
  <strong class="text-amber-900">Why no empty <code>assets/</code> folder?</strong> Assignment 1 uses native Unicode emojis and CSS gradients (no external image files), and Git automatically ignores empty folders when committing.
</div>

---
layout: split
title: "Splitting your file into style.css & index.html"
dense: true
---

<Activity label="Step 4A — Create style.css">

1. In the VS Code **Explorer** sidebar, click **New File** and name it **`style.css`**.
2. Cut all the CSS rules that were between `<style>` and `</style>` in your Assignment 1 file and paste them into `style.css`.
3. Make sure there are **no `<style>` or `</style>` tags** inside `style.css`.
4. Press `Ctrl + S` (`Cmd + S` on Mac) to save.

</Activity>

::right::

<Activity label="Step 4B — Create index.html & link style.css">

1. In the **Explorer** sidebar, click **New File** and name it **`index.html`**.
2. Paste your HTML structure into `index.html`.
3. Replace the old `<style>...</style>` block with:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
4. Save (`Ctrl + S`) and open `index.html` in your browser to verify your mobile screen looks identical to Assignment 1.

</Activity>

---
layout: section
icon: lifecycle
sub: Step 5 & Step 6 — Create a Public GitHub repository and push your local commits
---

# 04 — Publishing to GitHub

---
layout: split
title: "5. Commit locally & create a Public GitHub repo"
wideRight: true
dense: true
---

First, save a local snapshot (`commit`) of your `index.html` and `style.css` files:

```bash
git status
git add .
git commit -m "Initial multi-file screen"
```

Next, create the remote repository on **<Tool name="github" />**.

<div class="p-2.5 mt-2 rounded-xl border-2 border-red-200 bg-red-50/60 text-[0.66rem] text-red-900">
  <strong>Important:</strong> Your GitHub repository <strong>must be Public</strong>. If it is Private, we cannot access or grade your submission.
</div>

::right::

<Activity label="Create your remote repo on GitHub">

1. Go to [github.com](https://github.com) and sign in.
2. Click the **`+`** icon in the top-right corner → **New repository**.
3. Set **Repository name** to `ica-assignment-2`.
4. Under **Visibility**, select **Public**.
5. Leave **Add a README file** **unchecked**.
6. Click **Create repository**.

</Activity>

---
layout: split
title: "6. Push your local repo to GitHub"
wideRight: true
dense: true
---

After clicking **Create repository**, GitHub displays a box titled *"…or push an existing repository from the command line"*.

Run those three commands in your VS Code Terminal to link your local folder to GitHub and upload your commit.

::right::

<Activity label="Push to origin main">

1. In the VS Code Terminal, run the three commands from your GitHub page:
   ```bash
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Refresh your repository page on GitHub in the browser.
3. Confirm you see both **`index.html`** and **`style.css`** listed, along with a **Public** badge next to the repository name.

</Activity>

---
layout: section
icon: assignment
sub: Step 7 — Final checklist and form submission
---

# 05 — Submission

---
layout: split
title: "7. Checklist & submission"
dense: true
---

Before submitting, verify on your GitHub repository page:

- **`index.html`** links `style.css` via `<link rel="stylesheet" href="style.css">` (zero `<style>` tags).
- **`style.css`** is in the same folder and holds all your CSS rules.
- Your screen matches your **Student ID seed** and the repo is **Public**.

**Submit via Microsoft Forms (scan QR or click link):**
- Full Name, GIU Student ID, GitHub Username, and Public Repo URL
- [Open Assignment 2 Submission Form ↗](https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZUNE5BNzJPS1FXWVpRUlUySTlTR0JQUjA4RC4u)

::right::

<div class="h-64 flex items-center justify-center">
  <QrCode class="h-full w-full" value="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZUNE5BNzJPS1FXWVpRUlUySTlTR0JQUjA4RC4u" />
</div>

---
layout: default
class: giu-fix
dense: true
---

# Troubleshooting

| Problem | Fix |
|---|---|
| Page opens in the browser with no styling (plain unstyled text) | Check that `style.css` is saved in the exact same folder as `index.html` and that `index.html` has `<link rel="stylesheet" href="style.css">`. |
| `git` is not recognized in the VS Code Terminal | Install Git from [git-scm.com/downloads](https://git-scm.com/downloads), then **close and reopen VS Code**. |
| `Author identity unknown` / `Please tell me who you are` | Run `git config --global user.name "Your Name"` and `git config --global user.email "you@giu.de"`, then run `git commit` again. |
| `fatal: not a git repository` | Make sure `ica-assignment-2` is open in VS Code (**File → Open Folder...**), then run `git init` in the Terminal. |
| `error: failed to push some refs` | You ticked *Add a README* when creating the repo on GitHub. Create a new empty repository on GitHub **without** a README and push to it. |
| Repository opens a 404 page in an Incognito window | Your repository is Private. On GitHub, go to **Settings → General → Danger Zone → Change repository visibility → Change to Public**. |

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions — good luck with Assignment 2!
---

# Questions?
