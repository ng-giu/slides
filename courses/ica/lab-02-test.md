---
theme: ../../theme
title: ICA - Lab 2 - UI/UX Principles & Figma Foundations
courseTitle: Information and Communication Architecture
course: ICA
track: Software Engineering
semester: W2026
lab: 2
lineNumbers: true
layout: cover
---

# Information & Communication Architecture — Lab 2 — UI/UX Principles & Figma Foundations

<!--
Welcome everyone to Lab 02. Today we are setting the mental model for how user experience and visual interface systems work together, before opening Figma to build your first production-ready mobile component.
-->

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
dense: true
---

# Lab agenda

| Duration | Topic |
|---|---|
| 10 min | UI vs. UX: Purpose, execution & team specializations |
| 10 min | The three basics of great UX & interface anatomy |
| 10 min | Figma architecture: Frames, Rectangles & Text |
| 10 min | Live demo: Building a mobile login screen in Figma |
| 10 min | UI/UX DOs & DON'Ts: Login screen case study |
| 35 min | Hands-on sprint: Build a mobile sign-up screen |
| 5 min | Rubric, self-audit checklist & wrap-up |

---
layout: section
icon: intro
sub: Deconstructing digital product architecture and industry specializations
---

# 01 — Conceptual boundaries

---
layout: split
title: UI vs UX — Purpose and Execution
icon: intro
dense: true
---

### UX — User Experience
*System Architecture & Emotional Journey*

- **Focus areas:**
  - Usability, friction reduction, and intuitive workflows.
  - Information flows and information architecture.
  - Mental models, task completion, and user satisfaction.

> **Core Question:**  
> *"How does it work and feel to use?"*

::right::

### UI — User Interface
*Visual Communication & Sensory Controls*

- **Focus areas:**
  - Typography scales and readability hierarchy.
  - Color systems and accessibility contrast.
  - Layout grids, component states, and interactive affordances.

> **Core Question:**  
> *"How does it look and communicate visually?"*

<!--
A common mistake is using UI and UX interchangeably. UX is about the underlying system logic and user journey; UI is the tangible visual interface that makes those systems accessible. Think of UX as the blueprint and plumbing of a house, and UI as the finishes, fixtures, and interior styling.
-->

---
layout: default
icon: people
dense: true
---

# Specializations in product teams

Modern product organizations divide design into distinct, complementary disciplines:

<div class="grid grid-cols-3 gap-3.5 mt-3">
  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">Discovery</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">UX Researcher</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        Uncovers user behaviors, motivations, and mental models through interviews, usability testing, and analytics.
      </p>
    </div>
    <div class="text-[0.68rem] text-teal-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Focus: User validation</div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">Strategy & Design</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">Product Designer</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        Connects workflows to business goals; drafts wireflows, high-fidelity mockups, and interactive prototypes.
      </p>
    </div>
    <div class="text-[0.68rem] text-blue-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Focus: Product architecture</div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Implementation</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">Design Systems Engineer</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        Bridges design and production code with standardized token architectures, UI libraries, and accessibility.
      </p>
    </div>
    <div class="text-[0.68rem] text-indigo-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Focus: Scalability & handoff</div>
  </div>
</div>

<!--
In startups, one designer often handles all three roles. In mature tech companies (like Google, Stripe, or Spotify), these are distinct specialists collaborating closely with software engineering.
-->

---
layout: section
icon: lifecycle
sub: Evaluating and constructing digital interfaces through fundamental heuristics
---

# 02 — Heuristics & interface anatomy

---
layout: default
icon: lifecycle
dense: true
---

# The three basics of great UX

Before opening any design tool, digital interfaces are evaluated through three core pillars:

<div class="grid grid-cols-3 gap-3.5 mt-3">
  <div class="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="w-7 h-7 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-1.5">1</div>
      <h3 class="text-sm font-semibold text-slate-900 mb-1">Visual Hierarchy</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed mb-2.5">
        Guides eye sequence across content through intentional variations in scale, weight, and contrast.
      </p>
    </div>
    <div class="text-[0.7rem] bg-white p-2 rounded border border-slate-200 text-slate-700 font-medium leading-snug">
      💡 <strong>Rule:</strong> Key item (e.g. title) must grab the eye within 1 second.
    </div>
  </div>

  <div class="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="w-7 h-7 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs mb-1.5">2</div>
      <h3 class="text-sm font-semibold text-slate-900 mb-1">Visual Contrast</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed mb-2.5">
        Ensures clarity and access: guarantees legibility and makes interactive affordances obvious.
      </p>
    </div>
    <div class="text-[0.7rem] bg-white p-2 rounded border border-slate-200 text-slate-700 font-medium leading-snug">
      💡 <strong>Rule:</strong> Adjacent colors must meet WCAG AA standards (≥ 4.5:1 ratio).
    </div>
  </div>

  <div class="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-1.5">3</div>
      <h3 class="text-sm font-semibold text-slate-900 mb-1">Familiarity & Consistency</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed mb-2.5">
        Preserves mental models: eliminates steep learning curves and navigational friction.
      </p>
    </div>
    <div class="text-[0.7rem] bg-white p-2 rounded border border-slate-200 text-slate-700 font-medium leading-snug">
      💡 <strong>Rule:</strong> Never make users re-learn navigation. Innovate on value.
    </div>
  </div>
</div>

<!--
Before opening any design tool, we evaluate digital interfaces through these three basic rules: Can users tell what matters first? Can they recognize and read what is in front of them? Are they familiar with what is in front of them?
-->

---
layout: split
title: Deconstructing the interface
icon: lifecycle
dense: true
wideRight: true
---

<div class="w-58 rounded-xl border border-slate-200 bg-white shadow-md mx-auto my-auto overflow-hidden">
  <div class="h-22 bg-gradient-to-tr from-blue-700 via-indigo-600 to-teal-500 flex items-center justify-center text-white text-[0.68rem] font-semibold tracking-wide">
    16:9 Thumbnail Image
  </div>
  <div class="p-2.5 flex flex-col gap-1">
    <span class="self-start px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-50 text-blue-700">WORKSHOP</span>
    <h4 class="text-[0.75rem] font-semibold text-slate-900 leading-tight">Advanced Figma Systems</h4>
    <p class="text-[0.6rem] text-slate-500">Oct 24 • 6:00 PM • Room M2.312</p>
    <button class="mt-1 w-full py-1.5 bg-blue-600 text-white rounded-md text-[0.65rem] font-semibold">Register Now</button>
  </div>
</div>

::right::

<div class="space-y-2 text-xs">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <span class="font-bold text-blue-700 text-[0.72rem] block mb-0.5">1. Visual Hierarchy</span>
    <span class="text-[0.7rem] text-slate-600 leading-relaxed block">
      The dominant 16:9 hero thumbnail and bold 18px title anchor visual priority before secondary date metadata.
    </span>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <span class="font-bold text-teal-700 text-[0.72rem] block mb-0.5">2. Visual Contrast</span>
    <span class="text-[0.7rem] text-slate-600 leading-relaxed block">
      High contrast between the card surface, text, and primary blue CTA button meets WCAG AA standards (≥ 4.5:1 ratio).
    </span>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <span class="font-bold text-emerald-700 text-[0.72rem] block mb-0.5">3. Familiarity & Consistency</span>
    <span class="text-[0.7rem] text-slate-600 leading-relaxed block">
      Standard mobile card pattern (thumbnail top → copy middle → primary action base) matches universal mental models.
    </span>
  </div>
</div>

<!--
Notice how every visual detail has an architectural purpose. There are no arbitrary shapes—everything is organized into a nested hierarchy of content.
-->

---
layout: section
icon: tools
sub: Mental models and layout mechanics for building production-ready components
---

# 03 — Figma architecture

---
layout: default
icon: tools
dense: true
---

# Three basics of Figma

Figma builds complex interfaces out of three foundational primitives:

<div class="grid grid-cols-3 gap-3.5 mt-3">
  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">Container</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">1. Frames</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        Like a stretched canvas, a Frame is a top-level artboard and semantic container (like an HTML <code>&lt;div&gt;</code>). It defines coordinate space, background fill, clipping, and powers Auto-Layout.
      </p>
    </div>
    <div class="text-[0.68rem] text-blue-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Analog: Canvas & Viewport</div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">Shape Element</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">2. Rectangles</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        A primitive vector shape element that exists <em>within</em> a Frame. Ideal for cards, dividers, surface fills, and decorative backings, but cannot independently nest child layers.
      </p>
    </div>
    <div class="text-[0.68rem] text-teal-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Analog: Surfaces & Shapes</div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Typography</span>
      <h3 class="text-sm font-semibold text-slate-900 mt-1.5 mb-1">3. Text</h3>
      <p class="text-[0.72rem] text-slate-600 leading-relaxed">
        The atomic content layer that renders vector glyphs. Governed by font family, weight, line-height, and sizing modes (<code>Auto width</code>, <code>Auto height</code>, <code>Fixed</code>) to communicate meaning.
      </p>
    </div>
    <div class="text-[0.68rem] text-indigo-700 font-medium pt-1.5 mt-2 border-t border-slate-200">Analog: Written Content</div>
  </div>
</div>

<!--
Think of Figma's three building blocks as an art studio: Frames are the canvases that hold everything together, Rectangles are the structural and color surfaces you paint with, and Text is the clear written messaging that guides your audience.
-->

---
layout: split
title: Live demo — Building a mobile login screen
icon: tools
dense: true
wideRight: true
---

<div class="text-[0.72rem] space-y-1.5">
  <div class="font-semibold text-slate-900 text-xs mb-1">Step-by-Step Procedure:</div>
  <div class="p-2 rounded bg-slate-50 border border-slate-200">
    <strong>1. Mobile Frame (<code>F</code>):</strong> iPhone 16 preset (393px width), 8pt grid, white fill.
  </div>
  <div class="p-2 rounded bg-slate-50 border border-slate-200">
    <strong>2. Header Hierarchy:</strong> Brand mark, "Welcome Back" title (24px Bold), muted subtitle.
  </div>
  <div class="p-2 rounded bg-slate-50 border border-slate-200">
    <strong>3. Input Fields:</strong> Email & Password inputs with label, 1px border, 12px padding.
  </div>
  <div class="p-2 rounded bg-slate-50 border border-slate-200">
    <strong>4. CTA Button (<code>Shift + A</code>):</strong> "Sign In" with Auto-Layout, blue fill, 8px radius.
  </div>
  <div class="p-2 rounded bg-slate-50 border border-slate-200">
    <strong>5. Unified Stack:</strong> Wrap all elements in a vertical Auto-Layout with 16px gap.
  </div>
</div>

::right::

<div class="space-y-2">
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/70">
    <div class="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5">Key Observation Points</div>
    <ul class="text-[0.7rem] text-slate-700 pl-3.5 space-y-1">
      <li><strong>Frame vs. Rectangle:</strong> Top-level container is a native Frame, not a flat rectangle shape.</li>
      <li><strong>Auto-Layout (<code>Shift + A</code>):</strong> Padding and gap adjust dynamically without manual nudging.</li>
      <li><strong>Fill Container:</strong> Inputs and buttons stretch cleanly across the full frame width.</li>
    </ul>
  </div>

  <div class="text-[0.7rem] bg-white p-2.5 rounded-lg border border-slate-200 text-slate-600">
    💡 <strong>Follow along:</strong> Open your Figma workspace to watch and replicate each interaction in real-time.
  </div>
</div>

<!--
TAs will now open Figma and demonstrate building a clean mobile login screen from scratch in under 10 minutes. Watch closely how Auto-Layout simplifies alignment and dynamic resizing.
-->

---
layout: section
icon: lifecycle
sub: Real-world login screen comparisons across the three fundamental UX pillars
---

# 04 — DOs & DON'Ts of UI/UX

---
layout: split
title: DOs & DON'Ts — Visual Hierarchy
icon: lifecycle
dense: true
---

<div class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-emerald-600 text-white uppercase tracking-wider">DO: Scaffolding</span>
      <span class="text-[0.62rem] text-emerald-800 font-semibold">Clear Focal Priority</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-emerald-200 shadow-sm mb-1.5 text-xs">
      <div class="text-[0.55rem] text-blue-600 font-bold uppercase">AppLogo</div>
      <div class="text-xs font-bold text-slate-900 leading-tight">Welcome Back</div>
      <div class="text-[0.58rem] text-slate-500 mb-1.5">Sign in to your account</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 rounded border border-slate-200 text-[0.58rem] text-slate-500 bg-slate-50 w-full">name@domain.com</div>
        <div class="p-1 px-1.5 rounded border border-slate-200 text-[0.58rem] text-slate-500 bg-slate-50 w-full">••••••••••••</div>
      </div>
      <button class="w-full py-1 bg-blue-700 text-white text-[0.65rem] font-semibold rounded mb-1">Sign In</button>
      <div class="text-[0.55rem] text-center text-slate-500">Forgot password?</div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>Focal Anchor:</strong> Bold headline anchors visual intent immediately.</li>
      <li><strong>Action Dominance:</strong> Full-width primary CTA clearly commands the screen.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-emerald-800 font-medium pt-1 border-t border-emerald-200">
    Result: Effortless scan path in &lt; 1 second
  </div>
</div>

::right::

<div class="p-2.5 rounded-xl border border-rose-200 bg-rose-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-rose-600 text-white uppercase tracking-wider">DON'T: Screaming Banner</span>
      <span class="text-[0.62rem] text-rose-800 font-semibold">Inconsistent & Buried CTA</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-rose-200 shadow-sm mb-1.5 text-xs">
      <div class="bg-red-600 text-white font-black text-center py-1 text-[0.7rem] uppercase rounded mb-1.5">SIGN UP NOW!</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 rounded border border-slate-300 text-[0.58rem] text-slate-700 bg-slate-50 w-full">name@domain.com (wide)</div>
        <div class="p-1 px-1.5 rounded border border-slate-300 text-[0.58rem] text-slate-700 bg-slate-50 w-28">•••••••• (narrow)</div>
      </div>
      <div class="flex justify-center mb-1">
        <button class="px-3 py-0.5 bg-slate-300 text-slate-700 text-[0.58rem] font-medium rounded-full">sign up</button>
      </div>
      <div class="text-[0.52rem] text-center text-slate-400">already have an account?</div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>Screaming Banner:</strong> Giant red header creates alarm and steals all focus.</li>
      <li><strong>Mismatched Widths & Tiny CTA:</strong> Random field widths; tiny muted CTA gets buried.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-rose-800 font-medium pt-1 border-t border-rose-200">
    Result: Visual anxiety & buried primary action
  </div>
</div>

<!--
Notice the common student mistakes on the right: an aggressive red banner at the top shouts for attention, inputs have mismatched arbitrary widths instead of stretching to container margins, and the actual submit button is a tiny, muted gray pill completely lost at the bottom.
-->

---
layout: split
title: DOs & DON'Ts — Visual Contrast
icon: lifecycle
dense: true
---

<div class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-emerald-600 text-white uppercase tracking-wider">DO: WCAG Contrast</span>
      <span class="text-[0.62rem] text-emerald-800 font-semibold">Ratio ≥ 4.5:1</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-emerald-200 shadow-sm mb-1.5 text-xs">
      <div class="text-[0.55rem] text-blue-700 font-bold uppercase">AppLogo</div>
      <div class="text-xs font-bold text-slate-900 leading-tight">Welcome Back</div>
      <div class="text-[0.58rem] text-slate-600 mb-1.5">Deep slate copy (16:1 ratio)</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 rounded border border-slate-400 text-[0.58rem] text-slate-800 bg-white">user@example.com</div>
        <div class="p-1 px-1.5 rounded border border-slate-400 text-[0.58rem] text-slate-800 bg-white">••••••••••••</div>
      </div>
      <button class="w-full py-1 bg-blue-700 text-white text-[0.65rem] font-semibold rounded mb-1">Sign In (7.2:1)</button>
      <div class="text-[0.55rem] text-center text-blue-700 font-medium">Forgot password?</div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>WCAG AA Compliant:</strong> Sharp text-to-background contrast.</li>
      <li><strong>Clear Affordance:</strong> Inputs and buttons have unmistakable interactivity.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-emerald-800 font-medium pt-1 border-t border-emerald-200">
    Result: Universal accessibility & clear clickability
  </div>
</div>

::right::

<div class="p-2.5 rounded-xl border border-rose-200 bg-rose-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-rose-600 text-white uppercase tracking-wider">DON'T: Solid Gray & Neon</span>
      <span class="text-[0.62rem] text-rose-800 font-semibold">FAILS WCAG (1.4:1)</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-rose-200 shadow-sm mb-1.5 text-xs">
      <div class="text-[0.55rem] text-slate-400 font-bold uppercase">AppLogo</div>
      <div class="text-xs font-bold text-slate-900 leading-tight">Welcome Back</div>
      <div class="text-[0.58rem] text-slate-400 mb-1.5">Solid fills & washed-out CTA</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 bg-slate-400 text-slate-200 text-[0.58rem] rounded">user@example.com (solid fill)</div>
        <div class="p-1 px-1.5 bg-slate-400 text-slate-200 text-[0.58rem] rounded">•••••••••••• (solid fill)</div>
      </div>
      <button class="w-full py-1 bg-lime-400 text-white text-[0.65rem] font-bold rounded mb-1 shadow-sm">Sign In (1.4:1 white on lime)</button>
      <div class="text-[0.55rem] text-center text-slate-300">Forgot password?</div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>Solid Gray Blocks:</strong> Heavy filled rectangles look like disabled shapes.</li>
      <li><strong>Neon Lime on White:</strong> White text on lime green has 1.4:1 ratio; completely unreadable.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-rose-800 font-medium pt-1 border-t border-rose-200">
    Result: Catastrophic contrast failure & illegible button
  </div>
</div>

<!--
A classic blunder seen every year is picking neon lime green for buttons with white text—creating an illegible 1.4:1 contrast ratio that fails WCAG AA. Additionally, filling inputs with solid dark gray rectangles strips their input affordance and makes them look disabled.
-->

---
layout: split
title: DOs & DON'Ts — Familiarity & Consistency
icon: tools
dense: true
---

<div class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-emerald-600 text-white uppercase tracking-wider">DO: Consistent System</span>
      <span class="text-[0.62rem] text-emerald-800 font-semibold">Jakob's Law & 8pt Grid</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-emerald-200 shadow-sm mb-1.5 text-xs">
      <div class="text-xs font-bold text-slate-900 mb-0.5">Welcome Back</div>
      <div class="text-[0.55rem] text-slate-500 mb-1">Standard 8px radius on all controls</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 rounded-lg border border-slate-300 text-[0.58rem] text-slate-700">Email Address</div>
        <div class="p-1 px-1.5 rounded-lg border border-slate-300 text-[0.58rem] text-slate-700">Password</div>
      </div>
      <button class="w-full py-1 bg-blue-700 text-white text-[0.65rem] font-semibold rounded-lg mb-1.5">Sign In</button>
      <div class="flex items-center justify-center gap-2 py-0.5 border-t border-slate-100">
        <span class="text-[0.55rem] text-slate-400">Or continue with:</span>
        <span class="w-4 h-4 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[0.55rem] font-bold text-slate-700">G</span>
        <span class="w-4 h-4 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-[0.55rem] font-bold text-blue-600">f</span>
      </div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>Uniform Shapes:</strong> All inputs and buttons share an identical 8px corner radius.</li>
      <li><strong>Cohesive Assets:</strong> Cleanly scaled, matching social icons in an 8pt layout grid.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-emerald-800 font-medium pt-1 border-t border-emerald-200">
    Result: Cohesive design system & zero mental friction
  </div>
</div>

::right::

<div class="p-2.5 rounded-xl border border-rose-200 bg-rose-50/60 flex flex-col justify-between h-full">
  <div>
    <div class="flex items-center justify-between mb-1.5">
      <span class="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-rose-600 text-white uppercase tracking-wider">DON'T: Shape & Asset Chaos</span>
      <span class="text-[0.62rem] text-rose-800 font-semibold">Reinventing Wheels</span>
    </div>
    <div class="p-2 bg-white rounded-lg border border-rose-200 shadow-sm mb-1.5 text-xs">
      <div class="text-xs font-bold text-slate-900 mb-0.5">Welcome Back</div>
      <div class="text-[0.55rem] text-rose-600 mb-1">Sharp 0px inputs mixed with pill CTA</div>
      <div class="space-y-1 mb-1.5">
        <div class="p-1 px-1.5 rounded-none border border-slate-400 text-[0.58rem] text-slate-700">Email (sharp 0px box)</div>
        <div class="p-1 px-1.5 rounded-none border border-slate-400 text-[0.58rem] text-slate-700">Password (sharp 0px box)</div>
      </div>
      <button class="w-full py-1 bg-yellow-400 text-black text-[0.65rem] font-semibold rounded-full mb-1">sign in</button>
      <div class="flex items-center justify-center gap-3 py-0.5 border-t border-slate-100">
        <div class="bg-slate-300 border border-slate-400 px-1.5 text-[0.52rem] font-bold text-slate-800">G (grey box)</div>
        <div class="w-4 h-4 rounded-full bg-blue-600 text-white text-[0.52rem] flex items-center justify-center font-bold">f</div>
      </div>
      <div class="text-[0.5rem] text-center text-slate-400 mt-0.5">sign in with google? sign in facebook?</div>
    </div>
    <ul class="text-[0.68rem] text-slate-700 pl-3 space-y-0.5">
      <li><strong>Shape Clashing:</strong> Mixing sharp 0px boxes with full rounded pills breaks cohesion.</li>
      <li><strong>Unclipped Pasted Assets:</strong> Raw screenshot artifacts & floating unstyled questions.</li>
    </ul>
  </div>
  <div class="text-[0.64rem] text-rose-800 font-medium pt-1 border-t border-rose-200">
    Result: Amateur aesthetic & broken design system consistency
  </div>
</div>

<!--
Look at how consistency breaks down on the right: the designer mixed 0px sharp rectangular inputs with a full rounded pill button, pasted a Google logo with an unclipped gray background next to a circular Facebook icon, and dumped unstyled text with question marks at the bottom. A design system requires unified corner radii, properly clipped SVG icons, and consistent spacing rhythm.
-->

---
layout: section
icon: activity
sub: 35-minute hands-on sprint building a production-grade mobile sign-up screen
---

# 05 — Hands-on sprint

---
layout: default
icon: activity
dense: true
---

# Execution roadmap — Sign-up page (35 mins)

Follow these four progressive steps sequentially to build your screen:

<div class="grid grid-cols-2 gap-3 mt-2 text-[0.72rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-xs">Step 01: Frame & Grid Setup</span>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">5 mins</span>
    </div>
    <ul class="text-slate-600 pl-3.5 space-y-0.5">
      <li>Press <strong><code>F</code></strong> and select the <strong>iPhone 16</strong> preset (393px).</li>
      <li>Set background fill to <strong><code>#FFFFFF</code></strong>.</li>
      <li>Configure an 8pt layout grid (or 16px margin guides).</li>
    </ul>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-xs">Step 02: Header & Typography</span>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">8 mins</span>
    </div>
    <ul class="text-slate-600 pl-3.5 space-y-0.5">
      <li>Place brand logo or top bar navigation icon.</li>
      <li>Add <strong>"Create Account"</strong> headline (24px Bold).</li>
      <li>Add muted subtext (14px Regular) and group with Auto-Layout.</li>
    </ul>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-xs">Step 03: Input Fields</span>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">12 mins</span>
    </div>
    <ul class="text-slate-600 pl-3.5 space-y-0.5">
      <li>Build inputs for <strong>Full Name</strong>, <strong>Email</strong>, and <strong>Password</strong>.</li>
      <li>Use Auto-Layout with <strong>12px</strong> vertical & <strong>16px</strong> horizontal padding.</li>
      <li>Set 1px border (<code>#CBD5E1</code>), 8px radius, and 16px vertical gap.</li>
    </ul>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-xs">Step 04: CTA Button & Footer</span>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">10 mins</span>
    </div>
    <ul class="text-slate-600 pl-3.5 space-y-0.5">
      <li>Type <em>"Create Account"</em>, wrap with Auto-Layout (<code>Shift + A</code>).</li>
      <li>Apply <strong><code>#1D4ED8</code></strong> (ICA Blue), 8px radius, 14px padding.</li>
      <li>Set width to <strong>Fill Container</strong>. Add <em>"Already have an account? Log in"</em>.</li>
    </ul>
  </div>
</div>

<!--
You have 35 minutes for this sprint. Work sequentially through the four steps. Focus on structure and Auto-Layout constraints before tweaking colors.
-->

---
layout: split
title: Rubric & self-audit checklist
icon: activity
dense: true
wideRight: true
---

<div class="space-y-2 text-[0.72rem]">
  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-blue-700">1. Visual Hierarchy</span>
      <span class="text-[0.62rem] font-semibold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Sub-2s scan</span>
    </div>
    <p class="text-slate-600 leading-tight">Headline and CTA immediately dominate secondary metadata.</p>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-teal-700">2. Visual Contrast</span>
      <span class="text-[0.62rem] font-semibold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">WCAG AA</span>
    </div>
    <p class="text-slate-600 leading-tight">Text and button fills meet minimum 4.5:1 accessible contrast ratio.</p>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-emerald-700">3. Consistency</span>
      <span class="text-[0.62rem] font-semibold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">8pt Grid</span>
    </div>
    <p class="text-slate-600 leading-tight">Standard mobile input order, top-down flow, and predictable spacing.</p>
  </div>
</div>

::right::

<Activity label="Self-Audit Protocol">

<div class="text-[0.72rem] space-y-1.5 text-slate-700">
  <p class="font-medium text-slate-900 mb-1">Before requesting checkoff from a TA:</p>
  <p><strong>1. Hierarchy Test:</strong> Does the eye land on "Create Account" first, then flow naturally to inputs and CTA?</p>
  <p><strong>2. Contrast Check:</strong> Is input text and button copy clearly legible from arm's length?</p>
  <p><strong>3. Auto-Layout Check:</strong> Does resizing frame width keep elements aligned without manual tweaks?</p>
</div>

</Activity>

<!--
Before asking a TA to audit your sign-up screen, run through these three checks. Verify that your hierarchy is obvious, your colors meet WCAG contrast, and your spacing adheres to the 8pt grid.
-->

---
layout: default
icon: activity
dense: true
---

# Sprint active — Open Figma & begin

<div class="mt-6 p-6 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-between">
  <div>
    <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white">Sprint Active</span>
    <h2 class="text-xl font-bold text-slate-900 mt-3 mb-1">Open Figma & Start Lab 02: Sign-Up Sprint</h2>
    <p class="text-sm text-slate-600 max-w-lg">
      Duplicate the starter file from the course workspace. Instructors and TAs are circulating to assist.
    </p>
  </div>
  <div class="text-center p-4 rounded-xl bg-white border border-blue-100 shadow-sm min-w-36">
    <div class="text-xs text-slate-500 font-semibold uppercase tracking-wider">Duration</div>
    <div class="text-2xl font-mono font-bold text-blue-700 mt-1">35 Mins</div>
  </div>
</div>

<!--
The starter file link is active in your portal. Duplicate the file to your Figma drafts and begin with Step 1. Good luck!
-->

---
layout: refs
icon: references
dense: true
---

## Figma Learning & Guides

- [Figma Learn — Auto Layout In-Depth](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties) — official documentation
- [Figma YouTube — Auto Layout Masterclass](https://www.youtube.com/@Figma) — practical component walkthroughs

## UI/UX Fundamentals & Heuristics

- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — core interaction principles
- [Refactoring UI by Adam Wathan & Steve Schoger](https://www.refactoringui.com) — practical developer interface guidelines
- [Material Design 3 — Layout & Touch Targets](https://m3.material.io) — responsive grids and touch targets

<div class="giu-refs__note">Keep these resources bookmarked as you refine your interface designs for the semester project.</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Bring your finished Figma sign-up screen to the next session!
---
