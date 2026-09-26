---
theme: ../../theme
title: ICA - Lab 3 - Figma Auto-Layout & Component Architecture
courseTitle: Information and Communication Architecture
course: ICA
track: Software Engineering
semester: W2026
lab: 3
lineNumbers: true
layout: cover
---

<!-- # Information & Communication Architecture — Lab 3 — Figma Auto-Layout & Component Architecture -->
<h1 style="max-width:70% " >Information & Communication Architecture — Lab 3 — Figma Auto-Layout & Component Architecture</h1>
<!--
Welcome to Lab 03! Today we make the critical leap from wireframe blueprints to production-grade mobile interfaces. We will master Auto-Layout containers, understand how components enable massive reusability, and translate wireframes into high-fidelity screens for Talabat using an official Community starter template.
-->

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
| 10 min | The Architecture Pipeline: Site Map ➔ IA Diagram ➔ Wireframe ➔ UI |
| 10 min | Auto-Layout & Containers: Direction, Gap, Padding & Sizing |
| 10 min | Component Systems: Main Components (Master) vs. Instances (Copies) |
| 10 min | TA Live Demo: Building Reusable Cards & Assembling Mobile Views |
| 45 min | **Graded In-Class Sprint:** Wireframe-to-UI (2 Core Screens + Bonus) |
| 5 min | Grading Rubric, Self-Audit Checklist & Wrap-Up |

---
layout: section
icon: intro
sub: Bridging high-level information structures with tangible interface layouts
---

# 01 — Architecture pipeline

---
layout: default
icon: intro
dense: true
---

# The architecture pipeline: From IA to UI

<div class="text-[0.72rem] text-slate-500 mb-2">Every visual container in Figma traces directly back to an architectural data node:</div>

<div class="grid grid-cols-4 gap-2.5 mt-1 text-[0.68rem]">
  <!-- Step 1 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 uppercase tracking-wider">Step 01</span>
        <span class="text-[0.58rem] font-mono text-teal-700">Data Model</span>
      </div>
      <h3 class="text-xs font-bold text-slate-900 mb-1">IA Diagram</h3>
      <div class="p-2 rounded-lg bg-white border border-teal-200 text-[0.6rem] font-mono text-teal-950 space-y-0.5">
        <div class="font-bold text-teal-700">📦 Restaurant Card</div>
        <div class="text-slate-500 pl-1.5">├── title: string</div>
        <div class="text-slate-500 pl-1.5">├── rating: float</div>
        <div class="text-slate-500 pl-1.5">└── eta: string</div>
      </div>
    </div>
    <div class="text-[0.6rem] text-teal-800 font-semibold pt-1 mt-1.5 border-t border-teal-200">Content Attributes</div>
  </div>

  <!-- Step 2 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">Step 02</span>
        <span class="text-[0.58rem] font-mono text-blue-700">Navigation</span>
      </div>
      <h3 class="text-xs font-bold text-slate-900 mb-1">Site Map</h3>
      <div class="p-2 rounded-lg bg-white border border-blue-200 text-[0.6rem] font-mono text-blue-950 space-y-0.5">
        <div class="font-bold text-blue-700">🏠 Home</div>
        <div class="pl-2 text-slate-600">└── 🍔 Food Feed</div>
        <div class="pl-4 text-slate-500">└── 📋 Menu View</div>
      </div>
    </div>
    <div class="text-[0.6rem] text-blue-800 font-semibold pt-1 mt-1.5 border-t border-blue-200">Screen Hierarchy</div>
  </div>

  <!-- Step 3 -->
  <div class="p-2.5 rounded-xl border border-indigo-200 bg-indigo-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 uppercase tracking-wider">Step 03</span>
        <span class="text-[0.58rem] font-mono text-indigo-700">Geometry</span>
      </div>
      <h3 class="text-xs font-bold text-slate-900 mb-1">Wireframe</h3>
      <div class="p-2 rounded-lg bg-slate-100 border border-indigo-200 flex flex-col gap-1 items-center justify-center text-[0.55rem] text-slate-500">
        <div class="w-full h-4.5 bg-slate-300 rounded flex items-center justify-center font-mono text-slate-600">Image Box</div>
        <div class="w-full h-2.5 bg-slate-200 rounded"></div>
        <div class="w-3/4 h-2 bg-slate-200 rounded self-start"></div>
      </div>
    </div>
    <div class="text-[0.6rem] text-indigo-800 font-semibold pt-1 mt-1.5 border-t border-indigo-200">Spatial Layout Boxes</div>
  </div>

  <!-- Step 4 -->
  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">Step 04</span>
        <span class="text-[0.58rem] font-mono text-amber-700">Figma UI</span>
      </div>
      <h3 class="text-xs font-bold text-slate-900 mb-1">Auto-Layout UI</h3>
      <div class="p-2 rounded-lg bg-white border border-amber-300 shadow-2xs space-y-0.5">
        <div class="w-full h-4.5 rounded bg-amber-500 flex items-center justify-center text-[0.55rem] font-bold text-white">Talabat Food</div>
        <div class="text-[0.58rem] font-bold text-slate-800 truncate">Burger Republic</div>
        <div class="text-[0.5rem] text-slate-500">★ 4.7 • 20-35m • Free</div>
      </div>
    </div>
    <div class="text-[0.6rem] text-amber-800 font-semibold pt-1 mt-1.5 border-t border-amber-200">Production Interface</div>
  </div>
</div>

<div class="mt-2.5 p-2 rounded-xl border border-teal-200 bg-teal-50/80 text-[0.68rem] text-teal-950 flex items-center justify-between">
  <div><strong>Course Traceability:</strong> Step 1 & 2 = <strong>PD1 (Information Architecture)</strong> ➔ Step 3 & 4 = <strong>PD2 (Figma Mobile UI)</strong>.</div>
  <span class="px-2 py-0.5 rounded bg-teal-200 text-teal-900 font-bold text-[0.58rem]">Direct Parity</span>
</div>

<!--
In Information and Communication Architecture, UI design is never random decorating. Every single container you build in Figma traces directly back to an IA data node and a wireframe blueprint.
-->

---
layout: section
icon: tools
sub: Mastering Auto-Layout hierarchies, bounding frames, and responsive container mechanics
---

# 02 — Auto-Layout & containers

---
layout: default
icon: tools
dense: true
---

# Auto-Layout container mechanics

<div class="grid grid-cols-2 gap-3.5 mt-1 text-[0.68rem]">
  <!-- Left: Visual Container Box Model -->
  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[0.6rem]">Mental Model</span>
        <span class="font-bold text-xs text-slate-900">Auto-Layout = CSS Flexbox</span>
      </div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Eliminates manual pixel-nudging: positions, spaces, and aligns children mathematically.</p>
      <!-- Visual Box Model Diagram -->
      <div class="p-2.5 rounded-lg border-2 border-dashed border-blue-400 bg-blue-50/60 relative">
        <div class="text-[0.55rem] font-bold text-blue-700 uppercase tracking-wider mb-2">Container Boundary (Frame)</div>
        <div class="flex gap-2 items-center justify-center p-2 rounded bg-white border border-blue-200 shadow-2xs">
          <div class="px-3 py-1.5 rounded bg-slate-200 text-[0.62rem] font-bold text-slate-800">Child A</div>
          <div class="text-[0.6rem] font-bold text-teal-600 flex flex-col items-center">
            <span>↔</span>
            <span class="text-[0.5rem]">Gap (8px)</span>
          </div>
          <div class="px-3 py-1.5 rounded bg-slate-200 text-[0.62rem] font-bold text-slate-800">Child B</div>
        </div>
        <div class="mt-1.5 flex justify-between text-[0.52rem] text-blue-700 font-medium px-1">
          <span>◀ Inset: 16px</span>
          <span>Inset: 16px ▶</span>
        </div>
      </div>
    </div>
    <div class="mt-2 text-[0.62rem] font-bold text-red-600 bg-red-50 p-1.5 rounded border border-red-200">
      🚫 Rule: Zero static groups (<kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono text-[0.58rem]">Ctrl+G</kbd>). Always use Auto-Layout (<kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono text-[0.58rem]">Shift+A</kbd>).
    </div>
  </div>
  <!-- Right: Figma Inspector Replica -->
  <div class="p-3 rounded-xl border border-slate-300 bg-slate-900 text-slate-100 flex flex-col justify-between shadow-sm font-sans">
    <div>
      <div class="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-2">
        <span class="text-[0.68rem] font-bold text-slate-200 flex items-center gap-1.5">
          <span class="text-purple-400 font-bold">❖</span>
          <span>Auto Layout Controls</span>
        </span>
        <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">Shift + A</span>
      </div>
      <!-- Direction & Alignment -->
      <div class="grid grid-cols-2 gap-2 mb-2">
        <!-- Flow Direction -->
        <div>
          <div class="text-[0.56rem] text-slate-400 mb-1">Flow Direction</div>
          <div class="flex rounded bg-slate-800 p-0.5 border border-slate-700">
            <div class="flex-1 py-1 text-center rounded bg-blue-600 text-white font-bold text-[0.58rem]">↓ Column</div>
            <div class="flex-1 py-1 text-center text-slate-400 font-medium text-[0.58rem]">→ Row</div>
          </div>
        </div>
        <!-- Alignment Matrix -->
        <div>
          <div class="text-[0.56rem] text-slate-400 mb-1">Alignment Matrix (9-pt)</div>
          <div class="w-14 h-8 rounded bg-slate-800 border border-slate-700 grid grid-cols-3 grid-rows-3 gap-0.5 p-1 mx-auto items-center">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
            <span class="w-1.5 h-1.5 rounded-full bg-slate-600 mx-auto"></span>
          </div>
        </div>
      </div>
      <!-- Spacing and Padding -->
      <div class="grid grid-cols-2 gap-2 text-[0.62rem]">
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Item Gap</span>
          <span class="font-mono font-bold text-teal-400">8 px</span>
        </div>
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Padding</span>
          <span class="font-mono font-bold text-blue-400">12 px</span>
        </div>
      </div>
    </div>
    <div class="pt-1.5 mt-2 border-t border-slate-800 text-[0.56rem] text-slate-400 flex items-center justify-between">
      <span>Figma Design Sidebar Inspector</span>
      <span class="text-emerald-400 font-bold">8pt Grid Ready</span>
    </div>
  </div>
</div>

<!--
Containers are the fundamental building blocks of modern UI. Shift + A turns elements into flexbox containers.
-->

---
layout: default
icon: tools
dense: true
---

# Sizing dynamics: Fixed vs. Hug vs. Fill

<div class="text-[0.72rem] text-slate-500 mb-1.5">How containers behave along their layout axes dictates mobile responsiveness:</div>

<div class="grid grid-cols-3 gap-3 text-[0.68rem] mt-1">
  <!-- Fixed Sizing -->
  <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-slate-200 text-slate-800">Fixed</span>
        <span class="text-[0.55rem] font-mono text-slate-500">Rigid</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Fixed Sizing</h4>
      <!-- Visual Widget -->
      <div class="p-2 rounded-lg bg-white border border-slate-200 flex flex-col items-center justify-center my-1.5">
        <div class="w-full py-1 text-center rounded bg-slate-100 border border-slate-300 font-mono text-[0.62rem] text-slate-700 font-bold flex items-center justify-center gap-1">
          <span>🔒</span>
          <span>Fixed: 393 px</span>
        </div>
        <div class="text-[0.52rem] text-slate-500 mt-1">Width stays strictly constant</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Use cases:</strong> Phone frames, avatars, icons.</div>
    </div>
    <div class="text-[0.58rem] text-red-600 font-semibold pt-1 border-t border-slate-200">Avoid on text containers</div>
  </div>
  <!-- Hug Contents -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">Hug</span>
        <span class="text-[0.55rem] font-mono text-blue-700">Intrinsic</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Hug Contents</h4>
      <!-- Visual Widget -->
      <div class="p-2 rounded-lg bg-white border border-blue-200 flex flex-col items-center justify-center my-1.5">
        <div class="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[0.6rem] flex items-center gap-1.5 shadow-2xs">
          <span class="text-blue-200 font-mono text-[0.55rem]">→</span>
          <span>Order Now</span>
          <span class="text-blue-200 font-mono text-[0.55rem]">←</span>
        </div>
        <div class="text-[0.52rem] text-blue-700 mt-1">Shrinks boundary around child text</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Use cases:</strong> Buttons, category pills, badges.</div>
    </div>
    <div class="text-[0.58rem] text-blue-700 font-semibold pt-1 border-t border-blue-200">Expands dynamically with text</div>
  </div>
  <!-- Fill Container -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-teal-100 text-teal-800">Fill</span>
        <span class="text-[0.55rem] font-mono text-teal-700">Elastic</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Fill Container</h4>
      <!-- Visual Widget -->
      <div class="p-2 rounded-lg bg-white border border-teal-200 flex flex-col items-center justify-center my-1.5">
        <div class="w-full py-1 text-center rounded bg-teal-600 text-white font-bold text-[0.6rem] flex items-center justify-between px-2 shadow-2xs">
          <span class="text-teal-200 font-mono text-[0.55rem]">◀</span>
          <span>100% Parent Width</span>
          <span class="text-teal-200 font-mono text-[0.55rem]">▶</span>
        </div>
        <div class="text-[0.52rem] text-teal-700 mt-1">Stretches to consume full screen width</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Use cases:</strong> Feed cards, search inputs, carousels.</div>
    </div>
    <div class="text-[0.58rem] text-teal-700 font-semibold pt-1 border-t border-teal-200">Guarantees screen responsiveness</div>
  </div>
</div>

<div class="mt-2 p-2 rounded-xl border border-indigo-200 bg-indigo-50/80 text-[0.66rem] text-indigo-950 flex items-center justify-between">
  <div><strong>The Golden Rule:</strong> Screen = <code>Fixed</code> | Cards = <code>Fill</code> | Inner Text = <code>Fill</code> | Buttons = <code>Hug</code></div>
  <span class="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-bold text-[0.58rem]">Formula</span>
</div>

<!--
Understanding Fixed vs Hug vs Fill is the single biggest leap from beginner Figma user to professional product designer. Fill gives you responsive elasticity; Hug gives you intrinsic content sizing.
-->

---
layout: section
icon: tools
sub: Architecting modular, reusable UI building blocks and understanding master-to-instance inheritance
---

# 03 — Component systems

---
layout: default
icon: tools
dense: true
---

# Component systems: Master vs. Instances

<div class="p-3 rounded-2xl border border-purple-200 bg-purple-50/40 mt-1">
  <!-- Top: Master Component -->
  <div class="p-2.5 rounded-xl bg-purple-900 text-white flex items-center justify-between shadow-xs">
    <div class="flex items-center gap-2">
      <span class="text-base text-purple-300">❖</span>
      <div>
        <div class="text-xs font-bold flex items-center gap-1.5">
          <span>Main Component (Master)</span>
          <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-purple-800 text-purple-200">Page 3 (Assets)</span>
        </div>
        <div class="text-[0.58rem] text-purple-200 mt-0.5">Single source of truth for layout, padding, radii, and styles.</div>
      </div>
    </div>
    <div class="text-right">
      <span class="text-[0.58rem] font-mono px-2 py-0.5 rounded bg-purple-800 text-purple-200 border border-purple-700">Ctrl + Alt + K</span>
      <div class="text-[0.52rem] text-purple-300 mt-0.5">Edit once ➔ Updates everywhere</div>
    </div>
  </div>
  <!-- Inheritance Flow Arrows -->
  <div class="flex items-center justify-center gap-2 my-1.5 text-purple-600 font-mono text-[0.62rem] font-bold">
    <span>↓ Automatic Global Synchronization ↓</span>
  </div>
  <!-- Bottom: 3 Component Instances -->
  <div class="grid grid-cols-3 gap-2">
    <div class="p-2 rounded-lg bg-white border border-purple-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[0.62rem] font-bold text-slate-800 flex items-center gap-1">
          <span class="text-purple-600">◇</span>
          <span>Screen 1: Home</span>
        </span>
        <span class="text-[0.52rem] font-bold text-slate-400">Instance</span>
      </div>
      <div class="text-[0.55rem] text-slate-500">Overrides: Title, Photo</div>
    </div>
    <div class="p-2 rounded-lg bg-white border border-purple-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[0.62rem] font-bold text-slate-800 flex items-center gap-1">
          <span class="text-purple-600">◇</span>
          <span>Screen 2: Feed</span>
        </span>
        <span class="text-[0.52rem] font-bold text-slate-400">Instance</span>
      </div>
      <div class="text-[0.55rem] text-slate-500">Overrides: ETA, Rating</div>
    </div>
    <div class="p-2 rounded-lg bg-white border border-purple-200 shadow-2xs">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[0.62rem] font-bold text-slate-800 flex items-center gap-1">
          <span class="text-purple-600">◇</span>
          <span>Screen 3: Menu</span>
        </span>
        <span class="text-[0.52rem] font-bold text-slate-400">Instance</span>
      </div>
      <div class="text-[0.55rem] text-slate-500">Overrides: Price, Items</div>
    </div>
  </div>
</div>

<div class="mt-2 grid grid-cols-2 gap-2 text-[0.66rem]">
  <div class="p-2 rounded-xl border border-emerald-200 bg-emerald-50/70 text-emerald-950 flex items-center gap-2">
    <span class="text-base font-bold text-emerald-600">✓</span>
    <div><strong>Permitted Overrides:</strong> Text label copy, photography fills, and icon colors.</div>
  </div>
  <div class="p-2 rounded-xl border border-red-200 bg-red-50/70 text-red-950 flex items-center gap-2">
    <span class="text-base font-bold text-red-600">✕</span>
    <div><strong>Anti-Pattern:</strong> Never "Detach Instance". Detaching destroys reusability forever.</div>
  </div>
</div>

<!--
Think of the Main Component as a class definition in object-oriented programming, and an Instance as an object instantiated from that class.
-->

---
layout: section
icon: tools
sub: Step-by-step construction of a reusable Restaurant Card component and its multi-screen deployment
---

# 04 — TA live demonstration

---
layout: default
icon: tools
dense: true
---

# Live demo: Building reusable mobile cards

<div class="grid grid-cols-3 gap-2.5 mt-1 text-[0.68rem]">
  <!-- Step 1 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">STEP 1</span>
        <span class="text-[0.55rem] font-mono text-blue-600">Shift + A</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Assemble Auto-Layout</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Food Image: Fixed <code>140px</code>, Width <code>Fill</code></li>
        <li>Content Frame: Gap <code>8px</code>, Padding <code>12px</code></li>
        <li>Card Container: Width <code>Fill Container</code></li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-blue-700 pt-1 mt-1 border-t border-blue-200">Container Elasticity</div>
  </div>

  <!-- Step 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">STEP 2</span>
        <span class="text-[0.55rem] font-mono text-purple-600">Ctrl + Alt + K</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Promote to Master</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Select outer card frame</li>
        <li>Create Master: <kbd class="px-1 py-0.2 rounded bg-purple-100 font-mono text-[0.55rem]">Ctrl+Alt+K</kbd></li>
        <li>Cut & Paste onto <strong>Page 3 (Assets)</strong></li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-purple-700 pt-1 mt-1 border-t border-purple-200">Master Separation</div>
  </div>

  <!-- Step 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">STEP 3</span>
        <span class="text-[0.55rem] font-mono text-teal-600">Alt + Drag</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Deploy & Override</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Deploy instance to <strong>Screen 1, 2, & 3</strong></li>
        <li>Verify card stretches with <code>Fill Container</code></li>
        <li>Override restaurant name, image, and ratings</li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-teal-700 pt-1 mt-1 border-t border-teal-200">Instance Deployment</div>
  </div>
</div>

<!-- Visual Specimen Card -->
<div class="mt-2.5 p-2 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center justify-between">
  <div class="flex items-center gap-3">
    <div class="w-14 h-12 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white text-xs">talabat</div>
    <div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-bold text-slate-900">Burger Republic</span>
        <span class="px-1.5 py-0.2 rounded text-[0.52rem] font-bold bg-purple-100 text-purple-800">talabat pro</span>
      </div>
      <div class="text-[0.6rem] text-slate-500">American, Sandwiches • 20–35 mins • EGP 22.99 Delivery</div>
    </div>
  </div>
  <div class="flex items-center gap-2 text-[0.62rem] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
    <span>★ 4.7 (1k+)</span>
  </div>
</div>

<!--
Follow along with the TA. Watch how the Hug and Fill sizing constraints keep the layout intact when we override text and images.
-->

---
layout: section
icon: activity
sub: "45-minute graded in-class assignment — 2 Core screens (Mandatory) + 1 Bonus screen for extra credit"
---

# 05 — Graded in-class sprint

---
layout: default
icon: activity
dense: true
---

# Graded In-Class Assignment: Wireframe-to-UI Translation

<div class="p-2 rounded-lg border border-amber-200 bg-amber-50 text-[0.67rem] text-amber-900 flex items-center justify-between mb-2">
  <div class="flex items-center gap-1.5">
    <span class="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">GRADED</span>
    <span><strong>Core:</strong> Screens 1 & 2 (100% Credit) • <strong>Screen 3:</strong> Bonus (+Extra Credit)</span>
  </div>
  <div class="flex items-center gap-1.5 font-mono text-[0.6rem]">
    <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 no-underline shadow-2xs" style="text-decoration: none;">🎨 Figma Starter ↗</a>
    <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-800 font-bold hover:bg-amber-50 no-underline shadow-2xs" style="text-decoration: none;">📄 Brand Guide ↗</a>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-[0.68rem]">
  <!-- Screen 1: Home -->
  <div class="p-2 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-between shadow-xs">
    <div class="w-full flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-[0.68rem]">1. Home Screen</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Mandatory (50%)</span>
    </div>
    <div class="h-44 w-full flex justify-center overflow-hidden rounded-lg bg-slate-50 border border-slate-200 my-1">
      <img src="/screens/home.jpg" class="h-full object-cover object-top" />
    </div>
    <div class="w-full text-center text-[0.55rem] text-slate-500 font-medium">
      Search • 5 Services • Promo Carousel • Bottom Nav
    </div>
  </div>

  <!-- Screen 2: Food Delivery -->
  <div class="p-2 rounded-xl border border-teal-200 bg-white flex flex-col items-center justify-between shadow-xs">
    <div class="w-full flex items-center justify-between mb-1">
      <span class="font-bold text-slate-900 text-[0.68rem]">2. Food Delivery</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Mandatory (50%)</span>
    </div>
    <div class="h-44 w-full flex justify-center overflow-hidden rounded-lg bg-slate-50 border border-teal-200 my-1">
      <img src="/screens/food_delivery.jpg" class="h-full object-cover object-top" />
    </div>
    <div class="w-full text-center text-[0.55rem] text-slate-500 font-medium">
      Deals Row • Restaurant Feed • Cuisines • Filter Pills
    </div>
  </div>

  <!-- Screen 3: Menu [Bonus] -->
  <div class="p-2 rounded-xl border-2 border-emerald-400 bg-emerald-50/40 flex flex-col items-center justify-between shadow-xs">
    <div class="w-full flex items-center justify-between mb-1">
      <span class="font-bold text-emerald-950 text-[0.68rem]">3. Restaurant Menu</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white">★ BONUS (+Extra)</span>
    </div>
    <div class="h-44 w-full flex justify-center overflow-hidden rounded-lg bg-slate-50 border border-emerald-300 my-1">
      <img src="/screens/menu.jpg" class="h-full object-cover object-top" />
    </div>
    <div class="w-full text-center text-[0.55rem] text-emerald-900 font-medium">
      Hero Banner • Floating Card • 2-Col Dish Grid • Sticky Order
    </div>
  </div>
</div>

<!--
You have 45 minutes for this graded assignment. Focus on building clean reusable components on Page 3 and deploying them across Core Screens 1 & 2 on Page 4. Complete Screen 3 (Menu) for bonus credit!
-->

---
layout: default
icon: activity
dense: true
---

# Comprehensive grading criteria & rubric

Your submission will be evaluated out of 100% across four core architectural pillars:

<div class="grid grid-cols-4 gap-2.5 mt-2 text-[0.68rem]">
  <!-- Pillar 1 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-blue-900 text-xs">Pillar 1: UI/UX</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Visual Dominance:</strong> Scannable titles & badges</li>
        <li><strong>WCAG AA:</strong> Minimum <code>4.5:1</code> body text contrast</li>
        <li><strong>8pt Spatial Grid:</strong> 8px / 16px / 24px rhythm</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-blue-700 font-bold pt-1.5 mt-1 border-t border-blue-200">UX Foundations</div>
  </div>

  <!-- Pillar 2 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">Pillar 2: Auto-Layout</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Zero Static Groups:</strong> 100% inside <code>Shift+A</code></li>
        <li><strong>Sizing Rules:</strong> Hug buttons, Fill cards</li>
        <li><strong>Elasticity:</strong> Stretches cleanly 393px ➔ 420px</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-teal-700 font-bold pt-1.5 mt-1 border-t border-teal-200">Container Elasticity</div>
  </div>

  <!-- Pillar 3 -->
  <div class="p-2.5 rounded-xl border border-indigo-200 bg-indigo-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-indigo-900 text-xs">Pillar 3: Components</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-indigo-100 text-indigo-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Master Separation:</strong> Masters on Page 3</li>
        <li><strong>Strict Instances:</strong> Only <code>◇</code> inside screens</li>
        <li><strong>Component Reuse:</strong> Shared Nav & Cards</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-indigo-700 font-bold pt-1.5 mt-1 border-t border-indigo-200">System Reusability</div>
  </div>

  <!-- Pillar 4 -->
  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-amber-900 text-xs">Pillar 4: Brand</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-amber-100 text-amber-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Colors:</strong> Talabat Orange (<code>#FF5A00</code>), Slate</li>
        <li><strong>Typography:</strong> Official Poppins system</li>
        <li><strong>Corner Radii:</strong> Consistent 8px / 12px</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-amber-700 font-medium pt-1.5 mt-1 border-t border-amber-200 flex items-center justify-between">
      <span>Visual Polish</span>
      <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="no-underline font-bold text-amber-800" style="text-decoration: none;">Brand Guide ↗</a>
    </div>
  </div>
</div>

<div class="mt-2 py-1 px-2.5 rounded-lg border border-emerald-300 bg-emerald-50/80 text-[0.66rem] text-emerald-950 flex items-center justify-between">
  <div>
    <span class="px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold text-[0.58rem] mr-2">BONUS GRADE</span>
    <strong>Screen 3 Bonus (Restaurant Menu):</strong> Implement Menu page with Auto-Layout & component reuse for <strong>extra grades</strong>!
  </div>
  <span class="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold text-[0.58rem]">+Extra Points</span>
</div>

<!--
Review these four criteria carefully. Core Screens 1 & 2 cover 100% of the rubric. Screen 3 awards extra grades for students who complete the bonus restaurant menu.
-->

---
layout: split
title: Student Self-Audit Protocol
icon: activity
dense: true
wideRight: true
---

<div class="grid grid-cols-2 gap-2.5 text-[0.66rem]">
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50">
    <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-blue-600 font-bold">1.</span>
      <span>Width Stress Test</span>
    </div>
    <p class="text-slate-600 leading-tight">Drag screen width <code>393px ➔ 420px</code>. Cards & inputs must stretch smoothly via <code>Fill Container</code>.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50">
    <div class="font-bold text-teal-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-teal-600 font-bold">2.</span>
      <span>Master Separation</span>
    </div>
    <p class="text-slate-600 leading-tight">Screens contain strictly instances (<code>◇</code>). Zero master components (<code>❖</code>) on Page 4.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-indigo-200 bg-indigo-50/50">
    <div class="font-bold text-indigo-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-indigo-600 font-bold">3.</span>
      <span>Multi-Screen Reuse</span>
    </div>
    <p class="text-slate-600 leading-tight">Screen 2 & Bonus Screen 3 reuse Bottom Nav and Card components from Page 3.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/50">
    <div class="font-bold text-emerald-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-emerald-600 font-bold">4.</span>
      <span>WCAG AA & 8pt Rhythm</span>
    </div>
    <p class="text-slate-600 leading-tight">Contrast ≥ 4.5:1 on body text; all paddings/gaps adhere strictly to 8pt multiples.</p>
  </div>
</div>

::right::

<Activity label="Self-Audit Protocol">

<div class="text-[0.7rem] space-y-1 text-slate-700">
  <p class="font-medium text-slate-900 mb-1">Before requesting checkoff from a TA:</p>
  <p><strong>Step 1:</strong> Complete all 4 audit checks on the left.</p>
  <p><strong>Step 2:</strong> Verify Core Screens 1 & 2 (and optional Bonus Screen 3: Menu) are on Page 4.</p>
  <p><strong>Step 3:</strong> Copy your Figma file share link (Permissions: <em>"Anyone with the link can view"</em>).</p>
  <p><strong>Step 4:</strong> Call a TA to your screen for live evaluation and submit the link to your portal.</p>
</div>

</Activity>

<!--
Run through this 4-step self-audit protocol before asking a TA to evaluate your work.
-->

---
layout: default
icon: activity
dense: true
---

# Sprint active — Open the Figma Community template

<div class="mt-1.5 p-3 rounded-2xl border border-blue-200 bg-blue-50/70">
  <div class="flex items-center justify-between mb-1.5">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-amber-500 text-white">Graded (100 pts)</span>
      <span class="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-blue-600 text-white">Sprint Active</span>
      <span class="text-[0.65rem] text-slate-600 font-medium">Screens 1 & 2 (Mandatory) + Screen 3 (Bonus)</span>
    </div>
    <span class="text-xs font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 shadow-xs">⏱️ 45–50 Mins</span>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="p-2 rounded-xl bg-white border border-indigo-200 hover:border-indigo-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-indigo-900 flex items-center gap-1">
          <span>🎨 Figma Community Starter Kit</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Wireframes, sitemap, tokens & student workspace</div>
      </div>
      <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[0.58rem] whitespace-nowrap ml-2">Duplicate ↗</span>
    </a>
    <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="p-2 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-amber-900 flex items-center gap-1">
          <span>📄 Brand & Typography Guide (PDF)</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Poppins scale, official HEX colors & 8pt grid tokens</div>
      </div>
      <span class="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[0.58rem] whitespace-nowrap ml-2">Open PDF ↗</span>
    </a>
  </div>
</div>

<div class="mt-2 grid grid-cols-3 gap-2.5 text-[0.68rem]">
  <!-- Screen 1 Mini Card -->
  <div class="p-2 rounded-xl border border-slate-200 bg-white flex items-center gap-2.5 shadow-xs">
    <img src="/screens/home.jpg" class="h-16 w-10 rounded border border-slate-200 object-cover object-top shrink-0 shadow-2xs" />
    <div>
      <div class="flex items-center gap-1 mb-0.5">
        <span class="font-bold text-slate-900 text-[0.65rem]">1. Home</span>
        <span class="text-[0.5rem] font-bold px-1 py-0.2 rounded bg-blue-100 text-blue-800">Mandatory</span>
      </div>
      <div class="text-[0.56rem] text-slate-500">Search, 5 Services, Promo Carousel, Bottom Nav</div>
    </div>
  </div>

  <!-- Screen 2 Mini Card -->
  <div class="p-2 rounded-xl border border-teal-200 bg-white flex items-center gap-2.5 shadow-xs">
    <img src="/screens/food_delivery.jpg" class="h-16 w-10 rounded border border-teal-200 object-cover object-top shrink-0 shadow-2xs" />
    <div>
      <div class="flex items-center gap-1 mb-0.5">
        <span class="font-bold text-slate-900 text-[0.65rem]">2. Food Delivery</span>
        <span class="text-[0.5rem] font-bold px-1 py-0.2 rounded bg-teal-100 text-teal-800">Mandatory</span>
      </div>
      <div class="text-[0.56rem] text-slate-500">Deals Row, Feed Cards, Cuisines, Filter Pills</div>
    </div>
  </div>

  <!-- Screen 3 Mini Card [Bonus] -->
  <div class="p-2 rounded-xl border-2 border-emerald-400 bg-emerald-50/50 flex items-center gap-2.5 shadow-xs">
    <img src="/screens/menu.jpg" class="h-16 w-10 rounded border border-emerald-300 object-cover object-top shrink-0 shadow-2xs" />
    <div>
      <div class="flex items-center gap-1 mb-0.5">
        <span class="font-bold text-emerald-950 text-[0.65rem]">3. Menu</span>
        <span class="text-[0.5rem] font-bold px-1 py-0.2 rounded bg-emerald-600 text-white">★ BONUS</span>
      </div>
      <div class="text-[0.56rem] text-emerald-900">Hero Banner, 2-Col Dish Grid, Sticky Order</div>
    </div>
  </div>
</div>

<!--
The template link is active. Duplicate it to your drafts and begin Phase 1.
-->

---
layout: refs
icon: references
dense: true
---

## Lab 03 Core Resources

- <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="no-underline" style="text-decoration: none;">🎨 <strong>Figma Community — Official Talabat ICA Starter Kit</strong></a> — wireframes, IA sitemap & student workspace
- <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="no-underline" style="text-decoration: none;">📄 <strong>Google Drive — Talabat Brand & Typography Guidelines (PDF)</strong></a> — official Poppins scale & design tokens

## Figma Official Documentation

- [Figma Learn — Auto Layout Properties & Constraints](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties) — official mechanics guide
- [Figma Learn — Components and Instances](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) — master component architecture

