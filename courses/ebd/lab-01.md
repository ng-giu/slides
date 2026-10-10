---
theme: ../../theme
title: BINF 503 - Lab 1 - Intro & Environment Setup
courseTitle: Electronic Business Development
course: BINF 503
track: Full-stack Web Development
semester: W2026
lab: 1
lineNumbers: true
layout: cover
---

# Electronic Business Development — Lab 1 — Intro & Environment Setup

---
layout: people
title: Contacts
---

<PersonCard role="Course Instructor" name="Dr. Nourhan Hamdi" email="nourhan.hamdi@giu-uni.de" room="M2.312" />
<PersonCard role="Teaching Assistant" name="Mr. Nour Gaser" email="nour.aly@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Mr. Omar Alaa" email="omar.alaaeldin@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Ms. Mariam Khalid" email="mariam.khalid@giu-uni.de" room="M2.414" />
<PersonCard role="Teaching Assistant" name="Mr. Younes" email="younes.zied@giu-uni.de" room="M2.506" />
<PersonCard role="Teaching Assistant" name="Mr. Mahmoud" email="mahmoud.amer@giu-uni.de" room="M2.506" />

---
layout: media
image: /img/illustrations/rules.png
side: right
alt: A closed book titled Rules
---

# Rules and code of conduct

- **Punctuality:** a grace period of 15 minutes is permitted, solely for recording attendance.
- **Mobile phones:** allowed for taking notes only. Anything unrelated to the session is not permitted.
- **Focus:** no side conversations during the session. Please participate in all activities.
- **Communication:** email and office hours only.

---
layout: section
icon: intro
sub: Setting the stage for our web development journey
---

# Introduction and course overview

---
layout: media
image: /img/illustrations/ebusiness.png
side: left
alt: Two people building and shopping in an online store
---

# Course intro and description

- We build a simplified Airbnb clone across the semester.
- You learn full-stack development by doing.
- By the end you build your own project.
---
layout: media
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
---

# Lab agenda

| | |
|---|---|
| 10 min | Course overview |
| 10 min | Software development lifecycle |
| 20 min | Tools and tech stacks: VS Code, Git, GitHub, MERN |
| 30 min | Lab activities |
| 20 min | Assignment and questions |

---
layout: section
icon: lifecycle
---

# Software development life cycle

---
layout: default
icon: recap
---

# Quick recap of lecture 1

- Intro to programming in JavaScript. The refresher assignment covers this.
- What full-stack web development means.
- If you missed it, the slides are on the CMS.

---
layout: default
dense: true
---

# Software development life cycle

- The lab lives mostly in the development box. The lectures give you the theoretical foundation you need as a software developer.
- Understanding the whole cycle is what makes the development box make sense.

![The six phases of the life cycle and the roles that own each one](/img/diagrams/sdlc.png)

---
layout: media
image: /img/illustrations/tech-collage.png
side: left
alt: A collage of JavaScript ecosystem logos
---

# The tools we will use

- There are thousands of tools out there.
- This course locks in six: VS Code, Git and GitHub, Node.js, MongoDB, React, Express.
- The world is bigger than this. You are encouraged to explore outside class.

---
layout: section
icon: assignment
sub: Practical exercises to get started
---

# Hands-on activities and assignment

---
layout: split
title: VS Code
wideRight: true
---

<ToolLogo src="/img/logos/vscode.png" alt="Visual Studio Code" />

Visual Studio Code is the editor we use for everything in this course. It is free, cross-platform, and extensible.

Docs: [code.visualstudio.com/docs](https://code.visualstudio.com/docs)

Install the extensions we recommend on the CMS.

::right::

<Activity>

1. Open a folder in VS Code.
2. Create a file called `hello.js`.
3. Write a `console.log` and save.

</Activity>

---
layout: split
title: Node.js
wideRight: true
---

Node.js is a JavaScript runtime that runs outside the browser. It is what lets us write backend code in JavaScript.

Docs: [nodejs.org/en/docs](https://nodejs.org/en/docs)

| Command | What it does |
|---|---|
| `node -v` | Prints the installed Node.js version |
| `npm -v` | Prints the installed npm version |
| `node <file>` | Runs a JavaScript file |

::right::

<Activity>

Install Node.js and npm, then run:

```bash
node -v
npm -v
node hello.js
```

</Activity>

---
layout: default
dense: true
---

<ToolLogo src="/img/logos/git.png" alt="Git" />

# Git

Git is version control. It tracks every change you make to your code, so you can go back, compare, and collaborate.

Docs: [git-scm.com/doc](https://git-scm.com/doc)

| Command | What it does |
|---|---|
| `git init` | Creates a local repository |
| `git status` | Shows the current branch and what has changed |
| `git add <files>` | Moves changes from the working directory to staging |
| `git commit -m "<msg>"` | Records the staged changes with a message |
| `git clone <url>` | Copies a remote repository to your machine |
| `git pull` | Brings remote changes down into your local copy |
| `git push` | Sends your local commits up to the remote |

Every one of these has a button in VS Code. You do not have to type them, but you should know what the button does.

---
layout: activity
title: Your first repository
---

```bash
git --version
git init
git add hello.js
git commit -m "First commit"
```

---
layout: split
title: GitHub
---

GitHub hosts Git repositories so you can share them and work together. GitLab and Bitbucket do the same job.

Docs: [docs.github.com/en](https://docs.github.com/en)

::right::

<Activity>

1. Create a GitHub account.
2. Create a new repository.
3. Push your local repository to it.

</Activity>

---
layout: split
icon: assignment
title: Assignment
---

Besides the project and its deliverables, there are **3 assignments** for the
course.

They are meant to both refresh anyone who already knows these topics and
introduce them to anyone who does not.

::right::

There will be **3 assignments** this semester (in addition to the project and its
deliverables):

1. Get familiar with Git, GitHub, VS Code, shell basics, and the full development setup used in this course.
2. Get familiar with JavaScript as a language.
3. Get familiar with HTML and CSS, and with JavaScript linked to them.

Deadlines and further details will be shared soon. For now, start working on
Assignment 1.

---
layout: refs
title: References & useful links
---

## Install and set up

- [Git — downloads](https://git-scm.com/downloads)
- [Git documentation](https://git-scm.com/doc)
- [VS Code documentation](https://code.visualstudio.com/docs)
- [Node.js documentation](https://nodejs.org/en/docs)

## Git and GitHub

- [GitHub Docs](https://docs.github.com/en)
- [Git and GitHub learning resources](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)
- [GitHub Skills catalogue](https://skills.github.com/)

## JavaScript

- [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — the one to bookmark
- [javascript.info](https://javascript.info/) — tutorial, beginner to advanced
- [Exercism JavaScript track](https://exercism.org/tracks/javascript)

## Going further

- [roadmap.sh — full stack](https://roadmap.sh/full-stack) — how the pieces fit together
- [MIT Missing Semester](https://missing.csail.mit.edu/) — shell and version control, with exercises

<div class="giu-refs__note">Nothing on this slide is required. It is here for when you get stuck or want to go further.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Open floor for any questions
---

# Questions?
