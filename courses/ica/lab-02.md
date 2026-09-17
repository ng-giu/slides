---
theme: ../../theme
title: ICA - Lab 2 - UI/UX Design & Introduction to Figma
courseTitle: Information and Communication Architecture
course: ICA
track: Software Engineering
semester: W2026
lab: 2
lineNumbers: true
layout: cover
---

# Information & Communication Architecture — Lab 2 — UI/UX Design & Introduction to Figma

---
layout: people
title: Contacts
---


<PersonCard role="Course Instructor" name="Dr. Nourhan Hamdi" email="nourhan.hamdi@giu-uni.de" room="M2.312" />
<PersonCard role="Teaching Assistant" name="Mr. Nour Gaser" email="nour.aly@giu-uni.de" room="M2.419" />
<PersonCard role="Teaching Assistant" name="Ms. Menna Khalid" email="TBD" room="M1.###" />
<PersonCard role="Teaching Assistant" name="Ms. Shorouk Salah" email="TBD" room="M1.###" />
<PersonCard role="Teaching Assistant" name="Mr. Mahmoud" email="TBD" room="M2.506" />
<PersonCard role="Teaching Assistant" name="Mr. Younes Zied" email="younes.zied@giu-uni.de" room="M2.506" />

---
layout: media
image: /img/illustrations/hourglass.png
side: left
alt: An hourglass
---

# Lab agenda

| Duration | Topic |
|---|---|
| 10 min | What is UI vs. UX? |
| 20 min | The role of a UI/UX designer |
| 35 min | Introduction to Figma & key features |
| 20 min | Essential concepts: Frames, Auto Layout, Components |
| 35 min | Hands-on activity: Design a sign-in screen |

---
layout: section
icon: intro
sub: Understanding the dual pillars of modern digital product design
---

# 01 — What is UI/UX design?

---
layout: split
title: UX vs. UI — Two sides of the same coin
---

### UX — User Experience

**How the application feels.**

- Is the navigation intuitive and frictionless?
- Can users complete their task with minimal cognitive load?
- Does the information architecture make logical sense?
- Is the workflow forgiving when errors happen?
- Focus: **usability, utility, user research, structure**.

::right::

### UI — User Interface

**How the application looks.**

- Visual hierarchy, typography scales, and readability.
- Color palettes, contrast ratios, and brand consistency.
- Interactive controls: buttons, switches, inputs, modals.
- Micro-interactions, spacing systems, and icon sets.
- Focus: **aesthetics, visual design, interactive states**.

---
layout: default
icon: lifecycle
---

# Why both matter

A visually striking interface with broken workflows frustrates users. Conversely, a functionally sound system with confusing visual design gets abandoned.

```
+-------------------------------------------------------------------+
|                           Great Product                           |
|                                                                   |
|   +---------------------------+   +---------------------------+   |
|   |         UI Design         |   |         UX Design         |   |
|   | Visual Appeal & Polish    | + | Usability & Flow Logic    |   |
|   | Typography, Colors, Icons |   | User Research & Wireframes|   |
|   +---------------------------+   +---------------------------+   |
+-------------------------------------------------------------------+
```

- **UI without UX:** A beautiful sports car that has no steering wheel.
- **UX without UI:** An engine that runs efficiently but has exposed, unlabelled wires.

---
layout: section
icon: lifecycle
sub: Bridging human psychology with engineering reality
---

# 02 — Role of a UI/UX designer

---
layout: default
dense: true
---

# Core responsibilities of a designer

A modern UI/UX designer operates across the entire software development lifecycle:

1. **User research & problem definition:**
   - Interview users, observe workflows, and identify real pain points.
   - Synthesize research into personas, journey maps, and user flow diagrams.

2. **Information architecture & wireframing:**
   - Organize screens logically to create intuitive navigation pathways.
   - Sketch low-fidelity wireframes to rapidly validate layouts without getting bogged down in colors.

3. **High-fidelity interface design:**
   - Create pixel-perfect mockups applying consistent typography, colors, and layout grids.
   - Design interactive component variants (default, hover, focused, active, disabled).

4. **Developer collaboration & design handoff:**
   - Deliver clear design tokens (spacing, color codes, font sizes) to engineers.
   - Inspect and test implemented interfaces to ensure fidelity to the original design.

---
layout: section
icon: tools
sub: The industry standard platform for collaborative interface design
---

# 03 — Introduction to Figma

---
layout: split
title: Why the industry builds on Figma
---

- **Cloud-based & zero install:** Runs entirely in the web browser or via desktop app. Works identically on macOS, Windows, Linux, and Chromebooks.
- **Real-time multiplayer:** Teams collaborate simultaneously in real time — multiple cursors editing the same screen just like Google Docs.
- **Device frames & presets:** Instant viewports for every major iPhone, Android, tablet, and desktop display resolution.
- **Built-in design systems:** Centralized color styles, typography tokens, and icon libraries that propagate changes instantly.

::right::

- **Interactive prototyping:** Link screens together, define transitions (slide, dissolve, push), and test user flows without writing code.
- **Developer handoff built-in:** The Dev Mode inspect panel translates visual layouts into exact CSS properties, padding values, and SVG assets.
- **Components & variants:** Create reusable design components (buttons, input fields) with configurable properties.
- **Thriving community:** Access thousands of free wireframe kits, UI templates, icon libraries, and productivity plugins.

---
layout: default
icon: tools
dense: true
---

# Essential Figma concepts every engineer needs

Before creating screens, learn these three foundational Figma mechanics:

### 1. Frames (Not Groups)
Unlike generic folders or groups, a **Frame** is a container that has its own viewport, background color, clipping boundaries, and responsive constraints. Always place UI elements inside Frames.

### 2. Auto Layout (CSS Flexbox in Figma)
Auto Layout removes manual pixel alignment. It automatically adjusts child positioning, internal padding, and spacing when text changes:
- Direction: Horizontal or Vertical flow
- Gap: Space between elements (e.g. `8px`, `16px`)
- Padding: Internal container padding (e.g. `12px 24px`)

### 3. Components & Variants (`Ctrl+Alt+K` / `Cmd+Option+K`)
Define a **master component** (e.g. a Primary Button). Create instances across your project. Changing the master updates every instance automatically.

---
layout: section
icon: activity
sub: Hands-on prototyping in Figma
---

# 04 — In-class activity

---
layout: split
title: Design a Sign-in screen in Figma
wideRight: true
---

### Screen requirements

1. **Header:** Application logo and a welcome title (e.g. *“Welcome back”*).
2. **Form inputs:**
   - Email / Username input with label & placeholder.
   - Password input with hidden characters and a show/hide eye icon.
3. **Controls:**
   - “Remember me” checkbox.
   - “Forgot password?” clickable text link.
4. **Call to Action (CTA):**
   - High-contrast primary “Sign In” button.
5. **Alternative sign-in:**
   - Social login buttons (*Continue with Google* / *Apple*).
6. **Footer link:**
   - *“Don't have an account? Sign up”*.

::right::

<Activity label="Your Turn">

1. Open **[figma.com](https://figma.com)** and create a new design file.
2. Press **`F`** and select a mobile phone frame preset (e.g. **iPhone 16**).
3. Apply an **8-point grid** (spacing in multiples of 8: `8px`, `16px`, `24px`, `32px`).
4. Build the inputs and the primary CTA button using **Auto Layout** (`Shift + A`).
5. Ensure clear visual hierarchy and proper contrast between background and text.

</Activity>

---
layout: refs
icon: references
---

## Figma Learning & Guides

- [Figma Learn — Getting Started](https://help.figma.com/hc/en-us/categories/360002051613-Get-started) — official tutorial series
- [Figma YouTube Channel](https://www.youtube.com/@Figma) — bite-sized auto-layout and prototyping walk-throughs

## UI/UX Fundamentals

- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — golden rules of UX
- [Refactoring UI](https://www.refactoringui.com) — practical interface design advice for developers
- [Material 3 Design Guidelines](https://m3.material.io) — design system anatomy and tokens

---
layout: end
image: /img/illustrations/thank-you.png
sub: Bring your Figma sign-in design to the next lab session!
---
