---
theme: ../../theme
title: BINF 301 - Project - Course Project Brief
courseTitle: Information and Communication Architecture
course: BINF 301
semester: W2026
lineNumbers: false
layout: cover
---

<h1 style="max-width:70%">Information & Communication Architecture — Course Project</h1>

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
layout: default
icon: intro
dense: true
class: giu-wide
---

# The project

Your team picks a web app idea and takes it **from concept to a working website**: user stories and wireframes, a clickable Figma prototype, the website itself, then a live demo.

<div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 mb-3">

**Be creative.** The idea is yours: pick a **real business domain** (food delivery, travel, health, education, retail, banking, events, ...), find a problem its customers have, and design a web app that solves it. An original idea that makes business sense scores higher than a copy of an app that already exists.

</div>

- **Teams of 5 or 6**, with an official **Team ID**. One member is the **point of contact**: they talk to your TA and submit for the team.
- **One feature per member**, owned **end to end**. You are graded on the team's work **and** on your own feature.
- **All deadlines are at 23:59**.

---
layout: default
icon: people
class: giu-wide
---

# Your feature, end to end

You build **your own feature** at every stage:

| Stage | What you do for your feature |
|---|---|
| PD1 | Write **at least 2 user stories**, each with **at least 3 acceptance criteria**, and sketch its **wireframes** |
| PD2 | Design its **Figma screens** and connect them in the prototype |
| PD3 | Code its **HTML & CSS page(s)**, plus its JavaScript, in the team repository |
| Report | Document your part |

Write **your full name** next to every section, screen and page you made, in PD1, PD2, PD3 and the Final Report.

---
layout: default
icon: assignment
class: giu-wide
---

# Grading

| Deliverable | Weight | Due |
|---|---|---|
| **PD1:** Concept, user stories & wireframes | 10% | Thu 19 Nov |
| **PD2:** Clickable Figma prototype | 20% | Thu 26 Nov |
| **PD3:** Website + live JavaScript API | 30% | Thu 10 Dec |
| **Final Report**, with the AI prompts appendix | 10% | Thu 10 Dec |
| **Final Presentation:** 10% team, 10% individual | 20% | 12–17 Dec |


---
layout: default
icon: lifecycle
class: "proj-timeline giu-wide"
---

# Timeline

<div class="tl">
  <div class="tl__line"></div>
  <div class="tl__item">
    <div class="tl__date">Now</div>
    <div class="tl__dot"></div>
    <div class="tl__card">
      <div class="tl__tag">Start</div>
      <div class="tl__title">Form your team</div>
      <div class="tl__text">Get your Team ID and choose your idea</div>
    </div>
  </div>
  <div class="tl__item">
    <div class="tl__date">Thu 19 Nov</div>
    <div class="tl__dot"></div>
    <div class="tl__card">
      <div class="tl__tag">PD1 · 10%</div>
      <div class="tl__title">The idea on paper</div>
      <div class="tl__text">Concept, user stories and wireframes</div>
    </div>
  </div>
  <div class="tl__item">
    <div class="tl__date">Thu 26 Nov</div>
    <div class="tl__dot"></div>
    <div class="tl__card">
      <div class="tl__tag">PD2 · 20%</div>
      <div class="tl__title">The design</div>
      <div class="tl__text">A clickable Figma prototype</div>
    </div>
  </div>
  <div class="tl__item">
    <div class="tl__date">Thu 10 Dec</div>
    <div class="tl__dot"></div>
    <div class="tl__card">
      <div><span class="tl__tag">PD3 · 30%</span> <span class="tl__tag">Report · 10%</span></div>
      <div class="tl__title">The website</div>
      <div class="tl__text">Working site with a live API, and the Final Report</div>
    </div>
  </div>
  <div class="tl__item is-final">
    <div class="tl__date">12–17 Dec</div>
    <div class="tl__dot"></div>
    <div class="tl__card">
      <div class="tl__tag">Presentation · 20%</div>
      <div class="tl__title">Show it live</div>
      <div class="tl__text">Demo and Q&amp;A at your team's slot</div>
    </div>
  </div>
</div>


<style>
.proj-timeline .tl { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.7rem; margin: 2rem 0 1.6rem; }
.proj-timeline .tl__line { position: absolute; left: 4%; right: 4%; top: 2.05rem; height: 4px; border-radius: 2px; background: linear-gradient(90deg, #cbd5e1, #e8a33d 60%, #e2001a); }
.proj-timeline .tl__item { position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; }
.proj-timeline .tl__date { font-weight: 700; font-size: 0.9rem; color: #0f172a; height: 1.3rem; }
.proj-timeline .tl__dot { width: 1.05rem; height: 1.05rem; margin: 0.25rem 0 0.8rem; border-radius: 50%; background: #fff; border: 4px solid #e8a33d; z-index: 1; }
.proj-timeline .tl__item:first-of-type .tl__dot, .proj-timeline .tl__item:nth-of-type(2) .tl__dot { border-color: #94a3b8; }
.proj-timeline .is-final .tl__dot { width: 1.4rem; height: 1.4rem; margin-top: 0.05rem; margin-bottom: 0.6rem; background: #e2001a; border-color: #fde2e4; }
.proj-timeline .tl__card { width: 100%; flex: 1; padding: 0.7rem 0.55rem 0.8rem; border-radius: 0.6rem; background: #f8fafc; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
.proj-timeline .is-final .tl__card { background: #fff1f2; border-color: #fda4af; }
.proj-timeline .tl__tag { display: inline-block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; white-space: nowrap; color: #8a5412; background: #fbf3e5; border-radius: 0.3rem; padding: 0.05rem 0.35rem; margin-bottom: 0.3rem; }
.proj-timeline .is-final .tl__tag { color: #a30013; background: #fde2e4; }
.proj-timeline .tl__title { font-weight: 700; font-size: 0.9rem; line-height: 1.2; margin-bottom: 0.2rem; }
.proj-timeline .tl__text { font-size: 0.74rem; line-height: 1.35; color: #475569; }
</style>

---
layout: section
icon: assignment
sub: "Due Thursday 19 November, 23:59 · 10%"
class: giu-wide
---

# PD1 — Concept, User Stories & Wireframes

---
layout: default
icon: assignment
dense: true
class: giu-wide
---

# What PD1 contains

Submit a **PDF or Word document**, and summarize it in your repository's `README.md`. It has three parts:

| Part | What goes in it |
|---|---|
| **1. App idea** | The app's name, concept and purpose; the target users and the real problem it solves; the 5–6 features, each with its owner's **full name and student ID** |
| **2. User stories & acceptance criteria** | **2+ user stories per feature** (10–12 for the team), each with **3+ acceptance criteria** |
| **3. Wireframes** | Low-fidelity wireframes of the **Home page** and **every feature page**: clean hand sketches (photographed or scanned clearly) or Figma |

---
layout: split
title: User stories & acceptance criteria
icon: assignment
dense: true
class: giu-wide
---

Write each user story in this format (Lab 1):

> As a **[type of user]**, I want **[an action or goal]** so that **[a benefit]**.

Each story gets **at least 3 acceptance criteria**:

- Each one is a clear **pass/fail** test.
- Cover the normal flow **and at least one wrong input** (empty input, an invalid filter, a value out of range).
- No "Definition of Done" items. "The code is on GitHub" is not an acceptance criterion.

::right::

**Example**

> As a **hungry student**, I want to **filter restaurants by cuisine** so that **I find food I like quickly**.

1. Choosing "Pizza" shows only pizza restaurants.
2. Each result shows its name, rating and delivery time.
3. If no restaurant matches, the page shows "No restaurants found".

---
layout: section
icon: assignment
sub: "Due Thursday 26 November, 23:59 · 20%"
class: giu-wide
---

# PD2 — Clickable Figma Prototype

---
layout: default
icon: assignment
dense: true
class: giu-wide
---

# What PD2 contains

Turn your PD1 wireframes into a **high-fidelity, clickable prototype** in Figma (Labs 2–4):

| Requirement | What it means |
|---|---|
| **Consistent UI** | One color palette, type scale, spacing system and set of reusable components across every member's screens |
| **Information architecture** | A clear page hierarchy, a navigation bar or menu, back links or breadcrumbs, and logical flows from Home to every feature |
| **Clickable** | Prototype connections, so someone can click through the **whole app**, start to finish |

**Submit:** the Figma prototype link, shared as **Anyone with the link can view**, and high-resolution **PNG or PDF exports** of the screens, labeled by feature owner.

---
layout: section
icon: assignment
sub: "Due Thursday 10 December, 23:59 · 30%"
class: giu-wide
---

# PD3 — Website &<br>Live JavaScript API

---
layout: default
icon: assignment
dense: true
class: giu-wide
---

# What PD3 contains

Build your design as a real multi-page website (Labs 5–10):

| Area | Requirement |
|---|---|
| **HTML & CSS** | A home page plus each member's feature page(s), with a **shared stylesheet**: a clear layout, hover effects, and pages that work on a phone too |
| **Navigation** | Every page is reachable from the menu: no broken links, no dead ends |
| **JavaScript** | The pages **react to the user**: clicking, typing or choosing changes what the page shows |
| **Live API** | Live data from **at least one** free public service, shown on the page (Lab 10). For example: weather, maps, currency rates, news, recipes, quotes |
| **GitHub** | **One team repository.** Each member uploads their own pages **from their own GitHub account** |

**Submit:** the GitHub repository link **and** a zip of the whole project folder. The repository is **frozen at the deadline**.

---
layout: section
icon: assignment
sub: "Report due Thursday 10 December · presentations 12–17 December"
class: giu-wide
---

# Final Report & Presentation

---
layout: default
icon: assignment
dense: true
class: giu-wide
---

# Final Report (10%)

One well-formatted **PDF** that documents the project from concept to code, in this order:

<div class="grid grid-cols-2 gap-x-8">
<div>

1. **Cover page & table of contents**: team number, names, IDs, tutorial groups
2. **Introduction & app concept**: the idea, the audience, the problem
3. **User stories & acceptance criteria**, grouped by feature, with each owner's name
4. **Wireframes**: all of PD1's
5. **Figma screens**: all of PD2's, plus the navigation flow

</div>
<div>

6. **Website screenshots** of the working pages
7. **APIs used**: the endpoint(s), the JSON they return, and how your JavaScript shows it
8. **Roles & contributions** table: who designed and coded what
9. **References**: every API, icon, font and article you used
10. **Appendix: AI prompts used**, every prompt by every member

</div>
</div>

---
layout: default
icon: people
dense: true
class: giu-wide
---

# Final Presentation (20%)

**Week 13, 12–17 December.** Your day, time and room are in the **Presentation Slots** sheet, under your Team ID.

**8–10 minutes** of presentation, then **8–10 minutes** of questions. **10%** is the team's grade, **10%** your own. Show:

1. The idea and the problem it solves
2. The clickable Figma prototype
3. The live website
4. The live API, working
5. **Each member** explaining their own feature: screens, HTML/CSS and JavaScript

Every member must understand **the whole project**, including how teammates' pages and the shared CSS and JavaScript fit together. Bring **screenshots or a screen recording** of the API demo in case the internet is down.

---
layout: section
icon: questions
sub: What you may use, and how to submit
class: giu-wide
---

# AI Tools & Rules

---
layout: default
icon: questions
class: giu-wide
---

# Using AI tools

You may use AI to help write HTML, CSS, JavaScript or visuals **only if all three** hold:

| Condition | What it means |
|---|---|
| **You understand the code** | In the Q&A you explain your code **line by line**. Code you can't explain counts **against your own grade**. |
| **You log every prompt** | Every prompt, from every member, goes in the report's **Appendix: AI prompts used**. |
| **The work is still yours** | The website must implement your team's approved PD1 and PD2 design. |

A clean website you fully understand **scores higher** than complex AI code you can't explain.

---
layout: media
image: /img/illustrations/rules.png
side: left
alt: A rule book
dense: true
class: giu-wide
---

# Rules

- **Use your Team ID**, exactly as in the Teams sheet, on every submission form.
- **One submission per team**, by the point of contact. Two submissions from one team score **zero**. Check every link and file before you submit.
- **No plagiarism.** Copied code, templates, reports or projects score **zero for the whole team**.
- **Credit your work.** Put your full name and ID next to everything you made, and commit from your own GitHub account.
- **Deadlines are fixed.** Late submissions, and commits pushed after the deadline, are not graded.

---
layout: default
icon: assignment
dense: true
class: giu-wide
---

# What to submit, and when

| Deadline | Submit |
|---|---|
| **Thu 19 Nov, 23:59** (PD1) | The PD1 document (PDF or Word), summarized in `README.md` |
| **Thu 26 Nov, 23:59** (PD2) | The Figma prototype link (anyone with the link can view) and the exported screens |
| **Thu 10 Dec, 23:59** (PD3) | The GitHub link, the project `.zip`, and the **Final Report** PDF |
| **12–17 Dec** | Present at your slot |

Questions? Your point of contact asks your TA, in the lab or by email.

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Open floor for questions. Next: form your team and pick your idea. PD1 is due Thursday 19 November."
---

# Good luck!
