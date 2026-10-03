---
theme: ../../theme
title: ICA - Lab 4 - Interactive Prototyping in Figma
courseTitle: Information and Communication Architecture
course: ICA
track: Software Engineering
semester: W2026
lab: 4
lineNumbers: true
layout: cover
---

<h1 style="max-width:70% " >Information & Communication Architecture — Lab 4 — Interactive Prototyping in Figma</h1>
<!--
Welcome to Lab 04! Today we expand our mobile application into a complete multi-restaurant interactive prototype. You will source missing assets, build 3 restaurant screens using a master template, and wire all feed cards with native navigation, back stacks, and fixed headers.
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
| 15 min | Prototyping Basics: Multi-card connections, back navigation & animations |
| 15 min | Scrolling & Fixed Headers: Sticky navigation bars & content scrolling |
| 10 min | TA Live Demo: 4-restaurant interactive reference prototype walkthrough |
| 45 min | **Graded In-Class Sprint:** Source assets, build 3 screens & wire 4 restaurants |
| 5 min | Microsoft Forms Submission & TA Checkoff |

---
layout: section
icon: intro
sub: How to turn static screens into a clickable mobile prototype
---

# 01 — Prototyping basics in Figma

---
layout: default
icon: intro
dense: true
---

# Connecting screens: Trigger ➔ Action ➔ Animation

<div class="text-[0.72rem] text-slate-500 mb-2">In Figma, connecting a button to another screen always answers three simple questions:</div>

<div class="grid grid-cols-2 gap-3.5 mt-1 text-[0.68rem]">
  <!-- Left: Core Mental Model -->
  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[0.6rem]">Core Concept</span>
        <span class="font-bold text-xs text-slate-900">How Figma Prototypes Work</span>
      </div>
      <p class="text-[0.68rem] text-slate-600 mb-2">Click on any layer, switch to the <strong>Prototype</strong> tab, and drag the blue circle to another screen:</p>
      <!-- 3-Step Event Flow Diagram -->
      <div class="space-y-1.5">
        <div class="p-2 rounded-lg bg-white border border-blue-200 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[0.6rem] flex items-center justify-center">1</span>
            <div>
              <div class="font-bold text-slate-900 text-[0.62rem]">Trigger (When does it happen?)</div>
              <div class="text-[0.52rem] text-slate-500">Usually <code>On click / tap</code> when the user taps a button or card</div>
            </div>
          </div>
          <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-blue-50 text-blue-700">When</span>
        </div>
        <div class="p-2 rounded-lg bg-white border border-teal-200 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[0.6rem] flex items-center justify-center">2</span>
            <div>
              <div class="font-bold text-slate-900 text-[0.62rem]">Action (What should happen?)</div>
              <div class="text-[0.52rem] text-slate-500"><code>Navigate to</code> (change screen) or <code>Back</code> (return to previous screen)</div>
            </div>
          </div>
          <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-teal-50 text-teal-700">What</span>
        </div>
        <div class="p-2 rounded-lg bg-white border border-purple-200 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-[0.6rem] flex items-center justify-center">3</span>
            <div>
              <div class="font-bold text-slate-900 text-[0.62rem]">Animation (How does it transition?)</div>
              <div class="text-[0.52rem] text-slate-500"><code>Push / Slide In</code> (300ms) so the screen slides smoothly like a real app</div>
            </div>
          </div>
          <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-purple-50 text-purple-700">How</span>
        </div>
      </div>
    </div>
    <div class="mt-2 text-[0.62rem] font-bold text-teal-800 bg-teal-50 p-1.5 rounded border border-teal-200 flex items-center gap-1.5">
      <span class="px-1.5 py-0.2 rounded bg-teal-200 text-teal-900 font-mono text-[0.55rem] uppercase font-bold">Rule</span>
      <span>Always set top back arrows to <code>Back</code> — never hardcode <code>Navigate to Home</code>!</span>
    </div>
  </div>
  <!-- Right: Figma Prototype Inspector Replica -->
  <div class="p-3 rounded-xl border border-slate-300 bg-slate-900 text-slate-100 flex flex-col justify-between shadow-sm font-sans">
    <div>
      <div class="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-2">
        <span class="text-[0.68rem] font-bold text-slate-200 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-blue-400 inline" viewBox="0 0 16 16" fill="currentColor"><path d="M11.5 1a2.5 2.5 0 0 0-2.5 2.5V5H5.5A2.5 2.5 0 0 0 3 7.5v1A2.5 2.5 0 0 0 5.5 11H9v1.5a2.5 2.5 0 0 0 5 0V3.5A2.5 2.5 0 0 0 11.5 1z"/></svg>
          <span>Interaction Details Panel</span>
        </span>
        <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">Shift + E</span>
      </div>
      <!-- Settings Rows -->
      <div class="space-y-2 text-[0.62rem]">
        <!-- Trigger Row -->
        <div class="flex items-center justify-between p-1.5 rounded bg-slate-800 border border-slate-700">
          <span class="text-slate-400">Trigger</span>
          <span class="font-bold text-blue-400 font-mono">On click / tap</span>
        </div>
        <!-- Action Row -->
        <div class="flex items-center justify-between p-1.5 rounded bg-slate-800 border border-slate-700">
          <span class="text-slate-400">Action</span>
          <span class="font-bold text-teal-400 font-mono">Navigate to ➔ Screen 2</span>
        </div>
        <!-- Animation Curve Row -->
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Animation</span>
            <span class="font-bold text-purple-400 font-mono">Push / Slide In</span>
          </div>
          <div class="flex items-center justify-between text-[0.55rem] text-slate-400 pt-0.5 border-t border-slate-700/60">
            <span>Direction: ← Left</span>
            <span class="font-mono text-slate-300">300ms • Ease Out</span>
          </div>
        </div>
        <!-- State Continuity Checkbox -->
        <div class="flex items-center justify-between p-1.5 rounded bg-slate-800/60 border border-slate-700/60 text-[0.56rem]">
          <span class="text-slate-400">Preserve scroll position</span>
          <span class="text-emerald-400 font-bold font-mono">Enabled</span>
        </div>
      </div>
    </div>
    <div class="pt-1.5 mt-2 border-t border-slate-800 text-[0.56rem] text-slate-400 flex items-center justify-between">
      <span>Figma Prototype Panel</span>
      <span class="text-blue-400 font-bold">Standard 300ms Slide</span>
    </div>
  </div>
</div>

<!--
In Figma, prototyping lets you test user journeys before writing a single line of code. Connect buttons to screens and choose smooth transitions to mimic a native smartphone app.
-->

---
layout: section
icon: tools
sub: Keeping top headers fixed in place while content scrolls smoothly
---

# 02 — Scrolling & fixed headers

---
layout: default
icon: tools
dense: true
---

# Scrolling & fixed bars: Making it feel like a real app

<div class="text-[0.72rem] text-slate-500 mb-1.5">In real mobile apps, top headers stay frozen in place while you scroll down through food items:</div>

<div class="grid grid-cols-3 gap-3 text-[0.68rem] mt-1">
  <!-- Layer 1: Fixed Top Header -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-blue-100 text-blue-800">Top Header</span>
        <span class="text-[0.55rem] font-mono text-blue-700">Fixed</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Status & Navigation Bar</h4>
      <div class="p-2 rounded-lg bg-white border border-blue-200 my-1.5 text-center">
        <div class="text-[0.58rem] font-bold text-blue-900">[Status: 12:54]</div>
        <div class="text-[0.52rem] text-blue-700 mt-0.5">[Address • Back Arrow • Heart]</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Setting:</strong> <code>Fixed (Stay in place)</code> in Figma Prototype settings.</div>
    </div>
    <div class="text-[0.58rem] text-blue-700 font-semibold pt-1 border-t border-blue-200">Never scrolls off screen</div>
  </div>

  <!-- Layer 2: Scrollable Feed Body -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-teal-100 text-teal-800">Page Content</span>
        <span class="text-[0.55rem] font-mono text-teal-700">Vertical Scroll</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Restaurant & Food List</h4>
      <div class="p-2 rounded-lg bg-white border border-teal-200 my-1.5 text-center space-y-0.5">
        <div class="text-[0.52rem] text-teal-800 font-semibold">↕ Vertical Scrolling</div>
        <div class="text-[0.5rem] text-slate-500">Restaurant Cards • Menu Items</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Setting:</strong> Frame height fitted; Overflow set to <code>Vertical</code>.</div>
    </div>
    <div class="text-[0.58rem] text-teal-700 font-semibold pt-1 border-t border-teal-200">Scrolls under fixed header</div>
  </div>

  <!-- Layer 3: Nested Horizontal Carousels -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="px-2 py-0.5 rounded text-[0.58rem] font-bold bg-purple-100 text-purple-800">Category Sliders</span>
        <span class="text-[0.55rem] font-mono text-purple-700">Horizontal</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1.5">Horizontal Carousels</h4>
      <div class="p-2 rounded-lg bg-white border border-purple-200 my-1.5 text-center space-y-0.5">
        <div class="text-[0.52rem] text-purple-800 font-semibold">↔ Horizontal Scrolling</div>
        <div class="text-[0.5rem] text-slate-500">Cuisine Circles • Promo Banners</div>
      </div>
      <div class="text-[0.6rem] text-slate-600"><strong>Setting:</strong> Overflow scrolling set to <code>Horizontal</code>.</div>
    </div>
    <div class="text-[0.58rem] text-purple-700 font-semibold pt-1 border-t border-purple-200">Swipes sideways smoothly</div>
  </div>
</div>

<div class="mt-2 p-2 rounded-xl border border-amber-200 bg-amber-50 text-[0.66rem] text-amber-950 flex items-center justify-between">
  <div><strong>Layer Order Tip:</strong> Keep your fixed header at the <strong>very top</strong> of your Figma layers list so food cards scroll underneath it, not over it!</div>
  <span class="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">Layer Order</span>
</div>

<!--
Fixed positioning prevents the top navigation and status bar from scrolling away when browsing through dozens of restaurant items.
-->

---
layout: section
icon: tools
sub: Live demonstration of the completed 4-restaurant reference prototype you will build today
---

# 03 — TA live demonstration

<!--
TAs: Switch to Figma Presentation mode to showcase the provided reference prototype. Walk students through Home ➔ Food Delivery ➔ tapping through all 4 distinct restaurant cards (Burger Republic + 3 newly built restaurants), demonstrate smooth push transitions, back navigation, and show fixed headers staying pinned during vertical and horizontal scroll.
-->

---
layout: section
icon: activity
sub: 45-minute hands-on sprint — Source assets, build 3 missing restaurant screens, and wire the complete flow
---

# 04 — Graded in-class sprint

---
layout: default
icon: activity
dense: true
---

# Graded In-Class Sprint: Multi-Screen Prototype Assembly

<div class="p-2 rounded-lg border border-amber-200 bg-amber-50 text-[0.67rem] text-amber-900 flex items-center justify-between mb-2">
  <div class="flex items-center gap-1.5">
    <span class="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">GRADED</span>
    <span><strong>What you will build:</strong> Home + Food Delivery + 4 Working Restaurant Screens (1 Provided + 3 Built & Wired)</span>
  </div>
  <div class="flex items-center gap-1.5 font-mono text-[0.6rem]">
    <a href="https://www.figma.com/community/file/1688178288499788693" target="_blank" class="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 no-underline shadow-2xs" style="text-decoration: none;">Figma Workspace ↗</a>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-[0.7rem]">
  <!-- Task 1: Asset Sourcing & Screen Building -->
  <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">1. Sourcing & Assembly</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Part 1 (30%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Duplicate the reference restaurant screen for 3 new brands.</li>
        <li>Source assets: 1 Logo, 1 Hero Cover & 2 Dishes per restaurant.</li>
        <li>Override titles, cuisine pills, delivery info & prices.</li>
        <li>Match the 3 new screens to the 3 missing feed cards.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-blue-700 font-semibold pt-1 mt-2 border-t border-slate-200">Asset Gathering & Overrides</div>
  </div>

  <!-- Task 2: Multi-Card Routing & Back Stack -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">2. Multi-Card Routing</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Part 2 (40%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Screen 1: "Food" category tile links to Food Delivery feed.</li>
        <li>Screen 2: Wire all 4 restaurant cards to their distinct pages.</li>
        <li>All 4 Screens: Set top back arrows to native <code>Back</code> action.</li>
        <li>Transitions: <code>Push / Slide In</code> (300ms Ease Out) with preserved state.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-purple-700 font-semibold pt-1 mt-2 border-t border-purple-200">Multi-Destination Flow</div>
  </div>

  <!-- Task 3: Scrolling & Fixed Bars -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">3. Scrolling & Fixed Bars</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Part 3 (30%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Top Status Bar & Navigation Header: <code>Fixed</code> on all screens.</li>
        <li>Bottom Navigation Bar on Home & Feed: <code>Fixed</code>.</li>
        <li>Menu lists scroll vertically underneath headers on all 4 screens.</li>
        <li>Cuisine categories row set to <code>Horizontal</code> scroll.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-teal-700 font-semibold pt-1 mt-2 border-t border-teal-200">Native Mobile Feel</div>
  </div>
</div>

<!--
You have 45 minutes for this graded assignment. Source assets for the 3 missing restaurants, assemble their screens using the template, wire all 4 cards to their destinations, and run self-check tests.
-->

---
layout: default
icon: activity
dense: true
---

# Grading rubric: What TAs will check (100 Points)

Your prototype will be evaluated out of 100% across four simple checks (25 points each):

<div class="grid grid-cols-4 gap-2.5 mt-2 text-[0.68rem]">
  <!-- Pillar 1 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-blue-900 text-xs">1. Sourcing & UI</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>3 Built Screens:</strong> Assembled from the master template</li>
        <li><strong>Sourced Assets:</strong> Unique logos, hero covers & dishes</li>
        <li><strong>Clean Layout:</strong> Auto-Layout structure preserved</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-blue-700 font-bold pt-1.5 mt-1 border-t border-blue-200">Screen Assembly</div>
  </div>

  <!-- Pillar 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-purple-900 text-xs">2. 4-Card Routing</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-purple-100 text-purple-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Distinct Wires:</strong> Each card opens its own restaurant screen</li>
        <li><strong>Push Transitions:</strong> <code>300ms Ease Out</code> screen sliding</li>
        <li><strong>Starting Point:</strong> Screen 1 set as Flow Starting Point</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-purple-700 font-bold pt-1.5 mt-1 border-t border-purple-200">Card Connections</div>
  </div>

  <!-- Pillar 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">3. Back Stack</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Native Action:</strong> Back arrows on all 4 screens use <code>Back</code></li>
        <li><strong>Preserve State:</strong> Returns to previous scroll position</li>
        <li><strong>No Resets:</strong> Pops stack cleanly without restarting</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-teal-700 font-bold pt-1.5 mt-1 border-t border-teal-200">Return Navigation</div>
  </div>

  <!-- Pillar 4 -->
  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-amber-900 text-xs">4. Scrolling & Fit</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-amber-100 text-amber-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Fixed Bars:</strong> Headers pinned on all 4 restaurant screens</li>
        <li><strong>Menu Scrolling:</strong> Lists scroll smoothly under top bars</li>
        <li><strong>Device Frame:</strong> Screens fit iPhone frame (393 × 852 px)</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-amber-700 font-medium pt-1.5 mt-1 border-t border-amber-200">Scroll & Device Fit</div>
  </div>
</div>

<!--
Review these four criteria carefully. Each pillar carries 25% of your in-class grade.
-->

---
layout: default
icon: activity
dense: true
---

# Sprint active — Connect your interactive prototype

<div class="mt-1.5 p-3 rounded-2xl border border-blue-200 bg-blue-50/70">
  <div class="flex items-center justify-between mb-1.5">
    <div class="flex items-center gap-2">
      <span class="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-amber-500 text-white">Graded (100 pts)</span>
      <span class="px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-blue-600 text-white">Sprint Active</span>
      <span class="text-[0.65rem] text-slate-600 font-medium">5-Screen Mobile Architecture (4 Restaurants)</span>
    </div>
    <span class="text-xs font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 shadow-xs">45–50 Mins</span>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <a href="https://www.figma.com/community/file/1688178288499788693" target="_blank" class="p-2 rounded-xl bg-white border border-indigo-200 hover:border-indigo-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-indigo-900 flex items-center gap-1">
          <span>Figma Workspace Template</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Pre-built screens, assets & prototype canvas</div>
      </div>
      <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[0.58rem] whitespace-nowrap ml-2">Open File ↗</span>
    </a>
    <a href="https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" target="_blank" class="p-2 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-amber-900 flex items-center gap-1">
          <span>Figma Prototyping Docs</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Triggers, navigation, animations & easing curves</div>
      </div>
      <span class="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[0.58rem] whitespace-nowrap ml-2">Open Docs ↗</span>
    </a>
  </div>
</div>

<div class="mt-2 grid grid-cols-3 gap-2.5 text-[0.68rem]">
  <!-- Check 1 -->
  <div class="p-2.5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-slate-900 text-[0.68rem]">1. Sourcing & Assembly</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Assets & Screens</span>
      </div>
      <div class="text-[0.56rem] text-slate-600 leading-snug">
        Duplicate master template for 3 brands. Source 1 logo, 1 hero cover & 2 dishes per brand. Override content.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-slate-400 pt-1 border-t border-slate-100">
      Scope: 3 Built Screens (5 Total)
    </div>
  </div>

  <!-- Check 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-purple-950 text-[0.68rem]">2. Multi-Card Routing</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Navigation</span>
      </div>
      <div class="text-[0.56rem] text-slate-600 leading-snug">
        Feed cards wire to 4 distinct restaurant screens. Set 300ms Push transitions with native Back stack.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-purple-600 pt-1 border-t border-purple-100">
      Scope: 4 Distinct Destinations
    </div>
  </div>

  <!-- Check 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-teal-950 text-[0.68rem]">3. Fixed & Scroll</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Scroll</span>
      </div>
      <div class="text-[0.56rem] text-teal-950 leading-snug">
        Fixed headers and bottom nav bars; vertical menu scrolling and category row horizontal scroll.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-teal-700 pt-1 border-t border-teal-200">
      Scope: Pinned Bars & Overflow
    </div>
  </div>
</div>

<!--
The template link is active. Open your file in Figma and begin wiring Phase 1.
-->

---
layout: default
dense: true
---

<div class="flex flex-col items-center justify-center text-center -mt-6">
  <div class="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Lab 04 Submission Form</div>
  <div class="p-3 bg-white rounded-3xl border-2 border-indigo-200 shadow-xl inline-block mb-2.5">
    <img src="/lab-04-submission-qr.png" alt="Lab 04 Submission QR Code" class="w-[345px] h-[345px] object-contain" />
  </div>
  <div class="mb-1.5">
    <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZUNEZPNklUVVNaVzdWNjRGMDQ4MFBFOTFETC4u" target="_blank" class="px-5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm inline-flex items-center gap-1.5 transition no-underline" style="color: #ffffff !important; text-decoration: none !important;">
      <span style="color: #ffffff !important; font-weight: 700; font-size: 0.72rem;">Open Microsoft Forms Submission ↗</span>
    </a>
  </div>
  <div>
    <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZUNEZPNklUVVNaVzdWNjRGMDQ4MFBFOTFETC4u" target="_blank" class="text-[0.52rem] font-mono text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200 px-4 py-1 rounded-full border border-slate-300 inline-block transition select-all" style="text-decoration: none !important;">
      https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZUNEZPNklUVVNaVzdWNjRGMDQ4MFBFOTFETC4u</a>
  </div>
</div>

<!--
Scan the QR code or click the link to submit your working prototype.
-->

---
layout: refs
icon: references
dense: true
---

## Lab 04 Core Resources

- <a href="https://www.figma.com/community/file/1688178288499788693" target="_blank" class="no-underline" style="text-decoration: none;"><strong>Figma Community — Official Talabat Prototyping Starter Kit</strong></a> — pre-built screens, assets & prototype canvas
- <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="no-underline" style="text-decoration: none;"><strong>Google Drive — Talabat Brand & Typography Guidelines (PDF)</strong></a> — official tokens & color standards

## Figma Official Documentation

- [Figma Learn — Guide to Prototyping in Figma](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma) — official prototyping engine overview
- [Figma Learn — Scroll with Overflow](https://help.figma.com/hc/en-us/articles/360039818034-Scroll-with-overflow) — vertical and horizontal scrolling in mobile prototypes
- [Figma Learn — Prototype Triggers and Actions](https://help.figma.com/hc/en-us/articles/360040035834-Prototype-triggers-and-actions) — touch events, navigation & stack mechanics
- [Figma Learn — Prototype Easing and Animation Curves](https://help.figma.com/hc/en-us/articles/360040035874-Prototype-animation-and-easing) — natural motion physics & timing
