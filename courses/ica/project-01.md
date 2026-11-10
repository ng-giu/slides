---
theme: ../../theme
title: BINF 301 - Project - Course Project Brief
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
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
journey:
  - { title: "PD1: Idea, user stories & wireframes", code: "19 Nov", sub: "" }
  - { title: "PD2: Clickable Figma prototype", code: "26 Nov", sub: "" }
  - { title: "PD3: Website + live API, report & poster", code: "10 Dec", sub: "" }
  - { title: "Presentation: Live demo & printed poster", code: "12–17 Dec", sub: "" }
---

# The project

Your team picks a web app idea and takes it **from concept to a working website**:

<Flow :steps="$frontmatter.journey" />

- **Teams of 5 or 6.** You get an official **Team ID**. One member is the **point of contact**: they talk to your TA and submit for the team.
- **One feature per member**, so 5 or 6 core features in total.
- **Each member owns their feature end to end**, through every stage. You are graded on the team's work **and** on your own feature.
- **All deadlines are at 23:59**.

---
layout: default
icon: people
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
---

# Grading

| Deliverable | Weight | Due |
|---|---|---|
| **PD1:** Concept, user stories & wireframes | 20% | Thu 19 Nov |
| **PD2:** Clickable Figma prototype | 20% | Thu 26 Nov |
| **PD3:** Website + live JavaScript API | 20% | Thu 10 Dec |
| **Final Report**, with the AI prompts appendix | 10% | Thu 10 Dec |
| **Final Presentation** | 15% | 12–17 Dec |
| **Printed A1 Poster** | 5% | 12–17 Dec |

Every skill you need is practiced step by step in the labs.

---
layout: default
icon: lifecycle
dense: true
---

# Timeline

| When | Lab | Project |
|---|---|---|
| Week 7 · 31 Oct – 5 Nov | Lab 6: CSS & Git/GitHub | Form your team and choose your idea |
| Week 8 · 7 – 12 Nov | Lab 7: Multi-page web (graded) | Draft PD1 and your wireframes |
| Week 9 · 14 – 19 Nov | Lab 8: JavaScript fundamentals | **Thu 19 Nov: submit PD1** |
| Week 10 · 21 – 26 Nov | Lab 9: DOM & events | **Thu 26 Nov: submit PD2** |
| Week 11 · 28 Nov – 3 Dec | No lab (activity week) | Build the website; send your **poster draft** to your TA |
| Week 12 · 5 – 10 Dec | Lab 10: Web APIs & JSON | **Thu 10 Dec: submit PD3, report & digital poster** |
| Week 13 · 12 – 17 Dec | | **Presentations** and printed poster |

<div class="giu-refs__note">If the CMS announcement combines PD1 and PD2 into one submission, follow the announcement.</div>

---
layout: section
icon: assignment
sub: "Due Thursday 19 November, 23:59 · 20%"
---

# PD1 — Concept, User Stories & Wireframes

---
layout: default
icon: assignment
dense: true
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
---

# PD2 — Clickable Figma Prototype

---
layout: default
icon: assignment
dense: true
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
sub: "Due Thursday 10 December, 23:59 · 20%"
---

# PD3 — Website & Live JavaScript API

---
layout: default
icon: assignment
dense: true
---

# What PD3 contains

Build your design as a real multi-page website (Labs 5–10):

| Area | Requirement |
|---|---|
| **HTML & CSS** | Semantic HTML5: `index.html` plus each member's feature page(s), styled with **external** CSS (Flexbox, Grid, hover states, responsive layout) |
| **Navigation** | Working `<a href="...">` links across **all** pages: no broken links, no page you can't reach |
| **JavaScript & DOM** | Interactive behavior: select elements, `addEventListener`, update the page |
| **Live API** | **At least one** free public API, called with `fetch()`, its JSON shown on the page (Lab 10). For example: weather (Open-Meteo), maps (OpenStreetMap / Nominatim), currency, news, recipes (DummyJSON, TheMealDB), quotes |
| **GitHub** | **One team repository.** Each member commits their own pages **from their own GitHub account** |

**Submit:** the GitHub repository link **and** a `.zip` of all project files (`.html`, `.css`, `.js`, images, `README.md`). The repository is **frozen at the deadline**.

---
layout: section
icon: assignment
sub: "Report and digital poster due Thursday 10 December · presentations 12–17 December"
---

# Final Report, Poster & Presentation

---
layout: default
icon: assignment
dense: true
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
icon: assignment
dense: true
---

# Printed A1 Poster (5%)

**A1 portrait**: 59.4 × 84.1 cm, printed in **full color on foam cardboard**, shown in the BI corridor after presentation week.

<div class="grid grid-cols-2 gap-x-8">
<div>

**On the poster**

- The app's name and logo
- The idea and the problem it solves
- Key Figma or website screens: **sharp, in color**
- **Full names and student IDs** of every member
- BINF 301, Dr. Nourhan Hamdi, and your TA's name

</div>
<div>

**Design**

- Less text, more visuals: screens, icons, diagrams, callouts. No long paragraphs.

**Before you print**

1. Your point of contact sends the **digital poster** to your TA.
2. Your TA approves it.
3. **Only then** print it.

</div>
</div>

---
layout: default
icon: people
dense: true
---

# Final Presentation (15%)

**Week 13, 12–17 December.** Your day, time and room are in the **Presentation Slots** sheet, under your Team ID.

**8–10 minutes** of presentation, then **8–10 minutes** of questions. Show:

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
---

# AI Tools & Rules

---
layout: default
icon: questions
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
---

# Rules

- **Use your Team ID**, exactly as in the Teams sheet, on every submission form.
- **One submission per team**, by the point of contact. Two submissions from one team score **zero**. Check every link and file before you submit.
- **No plagiarism.** Copied code, templates, reports or projects score **zero for the whole team**.
- **Credit your work.** Put your full name and ID next to everything you made, and commit from your own GitHub account.
- **No printing without your TA's approval.**
- **Deadlines are fixed.** Late submissions, and commits pushed after the deadline, are not graded.

---
layout: default
icon: assignment
dense: true
---

# What to submit, and when

| Deadline | Submit |
|---|---|
| **Thu 19 Nov, 23:59** (PD1) | The PD1 document (PDF or Word), summarized in `README.md` |
| **Thu 26 Nov, 23:59** (PD2) | The Figma prototype link (anyone with the link can view) and the exported screens |
| **Week 11** | The **poster draft**, sent to your TA for review |
| **Thu 10 Dec, 23:59** (PD3) | The GitHub link, the project `.zip`, the **Final Report** PDF and the **digital poster** |
| **12–17 Dec** | Present at your slot, with the **printed** A1 poster |

Questions? Your point of contact asks your TA, in the lab or by email.

---
layout: end
image: /img/illustrations/thank-you.png
sub: "Open floor for questions. Next: form your team and pick your idea. PD1 is due Thursday 19 November."
---

# Good luck!
