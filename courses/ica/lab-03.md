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

In Information & Communication Architecture, visual design is never arbitrary; every container traces directly back to architectural data nodes:

<div class="grid grid-cols-4 gap-3 mt-3 text-[0.7rem]">
  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-teal-100 text-teal-800">01. Logic</span>
      <h3 class="text-xs font-bold text-slate-900 mt-2 mb-1">IA Diagram</h3>
      <p class="text-slate-600 leading-relaxed">
        Detailed content nodes, data attributes, and functional priorities per screen.
      </p>
      <div class="mt-2 text-[0.63rem] font-mono text-teal-700 bg-teal-50/50 p-1.5 rounded border border-teal-200">
        Card: Image, Title, Rating, ETA
      </div>
    </div>
    <div class="text-[0.63rem] text-slate-500 pt-1 border-t border-slate-200">Content Model</div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">02. Discovery</span>
      <h3 class="text-xs font-bold text-slate-900 mt-2 mb-1">Site Map</h3>
      <p class="text-slate-600 leading-relaxed">
        Hierarchical inventory of all screens and application pathways.
      </p>
      <div class="mt-2 text-[0.63rem] font-mono text-blue-700 bg-blue-50/50 p-1.5 rounded border border-blue-200">
        Home > Feed > Menu > Item
      </div>
    </div>
    <div class="text-[0.63rem] text-slate-500 pt-1 border-t border-slate-200">User Journey Paths</div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">03. Blueprint</span>
      <h3 class="text-xs font-bold text-slate-900 mt-2 mb-1">Wireframe</h3>
      <p class="text-slate-600 leading-relaxed">
        Grayscale spatial blueprint mapping IA data nodes to geometric bounding boxes without styling.
      </p>
      <div class="mt-2 text-[0.63rem] font-mono text-indigo-700 bg-indigo-50/50 p-1.5 rounded border border-indigo-200">
        Spatial Layout Boxes & Flow
      </div>
    </div>
    <div class="text-[0.63rem] text-slate-500 pt-1 border-t border-slate-200">Spatial Geometry</div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="text-[0.62rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">04. Production</span>
      <h3 class="text-xs font-bold text-slate-900 mt-2 mb-1">Auto-Layout UI</h3>
      <p class="text-slate-600 leading-relaxed">
        Responsive, componentized interface adhering to 8pt grid, design tokens, and typography systems.
      </p>
      <div class="mt-2 text-[0.63rem] font-mono text-amber-700 bg-amber-50/50 p-1.5 rounded border border-amber-200">
        Production Components
      </div>
    </div>
    <div class="text-[0.63rem] text-slate-500 pt-1 border-t border-slate-200">Production Interface</div>
  </div>
</div>

<div class="mt-3 p-2 rounded-lg border border-teal-200 bg-teal-50 text-[0.7rem] text-teal-900 flex items-center justify-between">
  <div><strong>Course Connection:</strong> This exact traceability pipeline is required for <strong>Project Deliverable 1 (PD1)</strong> and <strong>Deliverable 2 (PD2)</strong>.</div>
  <span class="px-2 py-0.5 rounded bg-teal-200 text-teal-900 font-bold text-[0.63rem]">Project Standard</span>
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
layout: split
title: What is an Auto-Layout Container?
icon: tools
dense: true
---

### The Container Mental Model
*Structural encapsulation for modern UI*

- **Definition:**  
  A **Container** is an Auto-Layout Frame (<kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono text-xs">Shift + A</kbd>) that groups, aligns, and spaces child elements mathematically.
- **Why Containers Matter:**
  - **Eliminates pixel nudging:** Spacing and alignment calculate automatically as content changes.
  - **Guarantees responsiveness:** When screen dimensions change, layout reflows predictably.
  - **Direct CSS parity:** A Figma Auto-Layout container directly mirrors CSS Flexbox (<code class="text-xs">display: flex</code>).

> **Key Rule:**  
> Never use loose shapes or basic groups (<kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono text-xs">Ctrl + G</kbd>) for layouts. Always use Auto-Layout Frames.

::right::

### Auto-Layout Parameters
*The four core configuration axes*

<div class="space-y-1.5 text-[0.7rem] mt-0.5">
  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700">1. Flow Direction</div>
    <div class="text-slate-600"><strong>Vertical (Column)</strong> stacks children top-to-bottom. <strong>Horizontal (Row)</strong> arranges children left-to-right.</div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-teal-700">2. Item Spacing (Gap)</div>
    <div class="text-slate-600">Mathematical distance between adjacent child layers (e.g., <code>8px</code>, <code>16px</code> adhering to the 8pt spatial grid).</div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-800">3. Padding (Internal Inset)</div>
    <div class="text-slate-600">Clearance between the container boundary and its children (Top, Bottom, Left, Right).</div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-indigo-700">4. Alignment Matrix</div>
    <div class="text-slate-600">9-point anchor box dictating child distribution (Top-Left, Center, Space-Between).</div>
  </div>
</div>

<!--
Containers are the fundamental building blocks of all modern software interfaces. In Figma, an Auto-Layout frame is the design equivalent of a flexbox container in CSS.
-->

---
layout: default
icon: tools
dense: true
---

# Sizing dynamics: Fixed vs. Hug vs. Fill

How containers and child layers behave along their layout axes dictates overall interface responsiveness:

<div class="grid grid-cols-3 gap-3 text-[0.7rem] mt-3">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-slate-200 text-slate-800">Fixed</span>
      <h4 class="font-bold text-slate-900 mt-1.5 mb-1">Fixed Sizing</h4>
      <p class="text-slate-600 leading-tight">Dimensions stay constant in absolute pixels regardless of parent or child sizing.</p>
      <div class="mt-2 text-slate-700"><strong>Use cases:</strong> Phone screen frames (393px), avatar circles (40px), icons.</div>
    </div>
    <div class="text-[0.62rem] text-red-600 font-semibold pt-1 border-t border-slate-200">Avoid on text containers</div>
  </div>

  <div class="p-2.5 rounded-lg border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">Hug</span>
      <h4 class="font-bold text-slate-900 mt-1.5 mb-1">Hug Contents</h4>
      <p class="text-slate-600 leading-tight">Container boundary wraps tightly around children plus padding.</p>
      <div class="mt-2 text-slate-700"><strong>Use cases:</strong> Buttons, category pills, tags, notification badges.</div>
    </div>
    <div class="text-[0.62rem] text-blue-700 font-semibold pt-1 border-t border-blue-200">Expands dynamically with text</div>
  </div>

  <div class="p-2.5 rounded-lg border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-teal-100 text-teal-800">Fill</span>
      <h4 class="font-bold text-slate-900 mt-1.5 mb-1">Fill Container</h4>
      <p class="text-slate-600 leading-tight">Stretches to consume 100% of available space along parent's layout axis.</p>
      <div class="mt-2 text-slate-700"><strong>Use cases:</strong> Food cards, search inputs, mobile primary CTA buttons.</div>
    </div>
    <div class="text-[0.62rem] text-teal-700 font-semibold pt-1 border-t border-teal-200">Enables responsive elasticity</div>
  </div>
</div>

<div class="mt-2.5 p-2 rounded-lg border border-indigo-200 bg-indigo-50/70 text-[0.68rem] text-indigo-950 flex items-center justify-between">
  <div><strong>The Golden Resizing Formula:</strong> Screen = Fixed Width | Card = Fill Width + Hug Height | Inner Text = Fill Width | Button = Hug Width</div>
  <span class="px-1.5 py-0.5 rounded bg-indigo-200 text-indigo-900 font-bold text-[0.6rem]">Rule</span>
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
layout: split
title: Main Components vs. Instances
icon: tools
dense: true
---

### Main Component (Master)
*The definitive architectural blueprint*

<div class="p-2 rounded-lg border border-purple-200 bg-purple-50/60 text-[0.7rem] mb-2">
  <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-purple-200 text-purple-900">Master Blueprint</span>
  <p class="text-purple-950 mt-1 leading-tight font-medium">The single source of truth for structure, layout, styles, and Auto-Layout rules.</p>
</div>

<ul class="text-[0.7rem] text-slate-600 space-y-1 pl-3.5 list-disc">
  <li><strong>Storage Rule:</strong> Keep all Main Components on a designated <strong>Components / Assets</strong> page. Never place a Main Component directly inside a screen frame.</li>
  <li><strong>Instant Propagation:</strong> Updating the master immediately cascades changes across all screens in the file.</li>
  <li><strong>Shortcut:</strong> Select Frame → <kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono text-xs">Ctrl + Alt + K</kbd></li>
</ul>

::right::

### Component Instance (Copy)
*The deployed consumer in screens*

<div class="p-2 rounded-lg border border-slate-200 bg-slate-50 text-[0.7rem] mb-2">
  <span class="px-1.5 py-0.5 rounded text-[0.58rem] font-bold bg-slate-200 text-slate-800">Screen Instance</span>
  <p class="text-slate-900 mt-1 leading-tight font-medium">A linked copy placed inside screen mockups, feeds, and user journeys.</p>
</div>

<ul class="text-[0.7rem] text-slate-600 space-y-1 pl-3.5 list-disc">
  <li><strong>Inheritance:</strong> Inherits padding, gap, radius, and layout direction from master.</li>
  <li><strong>Permitted Overrides:</strong> Text label copy, photography fills, and color tints.</li>
  <li><strong>Prohibited:</strong> Cannot delete inner layers or alter auto-layout axis without detaching.</li>
</ul>

<div class="p-1.5 rounded-lg border border-red-200 bg-red-50 text-[0.65rem] text-red-900 mt-2">
  <strong>Anti-Pattern:</strong> Never right-click and "Detach Instance". Detaching cuts the umbilical cord to the design system forever.
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
layout: split
title: Live Demo — Building Reusable Components
icon: tools
dense: true
wideRight: true
---

### Demo Objectives
*Step-by-step technical execution*

1. **Auto-Layout Card Construction:**
   - Construct a **Restaurant Item Card** using nested Auto-Layout containers with Fill Container width.
2. **Master Component Promotion:**
   - Convert to Main Component and store on the designated Assets canvas.
3. **Multi-Screen Deployment:**
   - Place instances across Screen 1 (Home) and Screen 2 (Food Delivery) with content overrides (+ Bonus Screen 3: Menu).

::right::

### Step-by-Step Technical Protocol

<div class="space-y-2 text-[0.7rem]">
  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-slate-900">Step 1: Nested Auto-Layout Assembly</span>
      <span class="text-[0.6rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Auto-Layout</span>
    </div>
    <div class="text-slate-600">
      Place food image (Fixed height 140px, Fill Container width). Group Title, Rating badge, and Delivery fee in a body frame (Vertical, 8px gap, 12px padding). Set card container to <code>Fill Container</code>.
    </div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-teal-800">Step 2: Componentize & Store</span>
      <span class="text-[0.6rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Component</span>
    </div>
    <div class="text-slate-600">
      Select card frame → press <kbd class="px-1 py-0.2 rounded bg-slate-200 font-mono">Ctrl+Alt+K</kbd>. Move master to Page 3 (Assets). Name it <strong>Restaurant Card</strong>.
    </div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-indigo-800">Step 3: Deploy Instances & Override</span>
      <span class="text-[0.6rem] font-bold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800">Reusability</span>
    </div>
    <div class="text-slate-600">
      Duplicate instances into Screen 1 (Home) and Screen 2 (Food Delivery), with preview for Bonus Screen 3 (Menu). Override names, photos, and ratings. Verify cards stretch smoothly with Fill Container.
    </div>
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

<div class="p-2 rounded-lg border border-amber-200 bg-amber-50 text-[0.67rem] text-amber-900 flex items-center justify-between mb-2.5">
  <div class="flex items-center gap-1.5">
    <span class="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">GRADED</span>
    <span><strong>Core:</strong> Screens 1 & 2 (100% Credit) • <strong>Screen 3:</strong> Bonus (+Extra Credit)</span>
  </div>
  <div class="flex items-center gap-1.5 font-mono text-[0.6rem]">
    <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 no-underline shadow-2xs" style="text-decoration: none;">🎨 Figma Starter ↗</a>
    <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-800 font-bold hover:bg-amber-50 no-underline shadow-2xs" style="text-decoration: none;">📄 Brand Guide ↗</a>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-[0.7rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900">Screen 1: Home</span>
        <span class="text-[0.58rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Mandatory</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-600 text-[0.68rem]">
        <li>Location header & Search input bar.</li>
        <li>5 Service icons grid (Food, Mart, Groceries...).</li>
        <li>Promo banner carousel (Buy 1 get 1 free).</li>
        <li>Redeem points/vouchers & bottom navigation.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-blue-700 font-semibold pt-1 border-t border-slate-200">Core Deliverable (50%)</div>
  </div>

  <div class="p-2.5 rounded-lg border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900">Screen 2: Food Delivery</span>
        <span class="text-[0.58rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Mandatory</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-600 text-[0.68rem]">
        <li>Header with Back, address, and favorites.</li>
        <li>Deals promo row & top rated restaurant cards.</li>
        <li>Cuisine category circles (Syrian, Pizza...).</li>
        <li>Filter pill bar (Sort by, Offers, Rating 4.0+).</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-teal-700 font-semibold pt-1 border-t border-teal-200">Core Deliverable (50%)</div>
  </div>

  <div class="p-2.5 rounded-lg border-2 border-emerald-400 bg-emerald-50/60 flex flex-col justify-between shadow-sm">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-emerald-950">Screen 3: Restaurant Menu</span>
        <span class="text-[0.58rem] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white">★ BONUS SCREEN</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-0.5 text-slate-700 text-[0.68rem]">
        <li>Hero cover photo with action buttons.</li>
        <li>Floating restaurant card (Rating, ETA, Fee).</li>
        <li>Deals row & sticky category tabs (Picks 🔥).</li>
        <li>2-column dish card feed & sticky order bar.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-emerald-800 font-bold pt-1 border-t border-emerald-200 flex justify-between items-center">
      <span>Bonus Deliverable</span>
      <span class="text-[0.58rem] font-bold px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-900">+Extra Grade</span>
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

<div class="grid grid-cols-4 gap-2.5 mt-2 text-[0.67rem]">
  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-blue-700">Pillar 1: UI/UX (Lab 02)</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-0.5">
        <li><strong>Visual Hierarchy:</strong> Clear focal priorities, dominant headlines, legible metadata.</li>
        <li><strong>WCAG AA Contrast:</strong> Minimum 4.5:1 text contrast ratio across all elements.</li>
        <li><strong>8pt Grid:</strong> Consistent 8pt spatial rhythm (8px, 16px, 24px) on all gaps and padding.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-blue-700 font-medium pt-1 border-t border-slate-200">UX Core Principles</div>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-teal-700">Pillar 2: Auto-Layout</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-0.5">
        <li><strong>Zero Loose Shapes:</strong> 100% of elements inside Auto-Layout frames. Zero static groups.</li>
        <li><strong>Resizing Mechanics:</strong> Correct Hug on buttons/chips and Fill on cards/inputs.</li>
        <li><strong>Responsiveness:</strong> Resizing screen width adapts smoothly without breaking.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-teal-700 font-medium pt-1 border-t border-slate-200">Container Elasticity</div>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-indigo-700">Pillar 3: Components</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-indigo-100 text-indigo-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-0.5">
        <li><strong>Master Separation:</strong> Main Components stored cleanly on Page 3; zero masters inside screens.</li>
        <li><strong>Instance Usage:</strong> Screens contain strictly component instances.</li>
        <li><strong>Component Reuse:</strong> Bottom Nav and Card components reused across Core Screens 1 & 2.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-indigo-700 font-medium pt-1 border-t border-slate-200">System Reusability</div>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-amber-700">Pillar 4: Brand Identity</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-amber-100 text-amber-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-0.5">
        <li><strong>Color System:</strong> Faithful application of Talabat Orange (<code>#FF5A00</code>), Dark Slate, and whites.</li>
        <li><strong>Shape Language:</strong> Uniform corner radii (8px buttons, 12px cards).</li>
        <li><strong>Curated Assets:</strong> Consistent photography and icons from the starter template.</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-amber-700 font-medium pt-1 border-t border-slate-200 flex items-center justify-between">
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

<div class="grid grid-cols-2 gap-2 text-[0.66rem]">
  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-blue-700 mb-0.5">1. Resizing Stress Test</div>
    <p class="text-slate-600 leading-tight">Drag screen width from 393px to 420px. Do cards and inputs stretch smoothly using <code>Fill Container</code> without manual tweaking?</p>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-teal-700 mb-0.5">2. Master Component Audit</div>
    <p class="text-slate-600 leading-tight">Confirm that all screens contain strictly component instances, proving zero master components were placed inside screens.</p>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-indigo-700 mb-0.5">3. Multi-Screen Reusability Check</div>
    <p class="text-slate-600 leading-tight">Confirm that Screen 2 (Food Delivery) and Bonus Screen 3 (Menu) reuse Bottom Nav and Card components from Page 3.</p>
  </div>

  <div class="p-2 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-emerald-700 mb-0.5">4. WCAG AA & 8pt Rhythm</div>
    <p class="text-slate-600 leading-tight">Confirm all text copy is easily readable against backgrounds and that all padding and gaps are multiples of 8 (8/16/24px).</p>
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

<div class="mt-2.5 grid grid-cols-3 gap-2.5 text-[0.68rem]">
  <div class="p-2 rounded-lg border border-slate-200 bg-white">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-slate-900">1. Screen 1: Home</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Mandatory</span>
    </div>
    <p class="text-slate-600 text-[0.62rem]">Location bar, search, 5 service icons, promo carousel, redeem cards, bottom nav.</p>
  </div>
  <div class="p-2 rounded-lg border border-slate-200 bg-white">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-slate-900">2. Screen 2: Food Delivery</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Mandatory</span>
    </div>
    <p class="text-slate-600 text-[0.62rem]">Back/heart bar, deals row, top rated restaurant feed, cuisine circles, filter pills.</p>
  </div>
  <div class="p-2 rounded-lg border-2 border-emerald-400 bg-emerald-50/50 shadow-sm">
    <div class="flex items-center justify-between mb-0.5">
      <span class="font-bold text-emerald-950">3. Screen 3: Menu</span>
      <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white">★ BONUS</span>
    </div>
    <p class="text-slate-600 text-[0.62rem]">Hero banner, floating info card, deals row, category tabs, dish feed, sticky order bar.</p>
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

