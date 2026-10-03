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
Welcome to Lab 04! Today we turn our static screens from Lab 03 into a working, clickable mobile prototype. We will learn how to connect screens, show bottom sheets and popups, keep headers fixed in place while scrolling, and test our flow like a real app.
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
| 10 min | Prototyping Basics: Clicks, transitions, and back buttons |
| 10 min | Overlays & Bottom Sheets: Showing popups without leaving the page |
| 10 min | Scrolling & Fixed Headers: Keeping top bars fixed while lists scroll |
| 10 min | TA Live Demo: Step-by-step wiring of 3 screens + customizer sheet |
| 45 min | **Graded In-Class Sprint:** Build your clickable prototype |
| 5 min | Self-Check Checklist & Grading Walkthrough |

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
              <div class="text-[0.52rem] text-slate-500"><code>Navigate to</code> (change screen), <code>Open overlay</code> (popup), or <code>Back</code></div>
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
sub: Opening popups, options, and bottom sheets without leaving your screen
---

# 02 — Overlays & bottom sheets

---
layout: default
icon: tools
dense: true
---

# Full screen vs. Overlays: When to use which?

<div class="grid grid-cols-2 gap-3.5 mt-1 text-[0.68rem]">
  <!-- Left: The Architectural Tradeoff -->
  <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-1.5 mb-1.5">
        <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[0.6rem]">Key Decision</span>
        <span class="font-bold text-xs text-slate-900">Switch screens vs. Open a popup</span>
      </div>
      <p class="text-[0.68rem] text-slate-600 mb-2">When a user taps an item, should they move to a whole new screen or open a popup on top?</p>
      <!-- Comparison Matrix -->
      <div class="space-y-1.5">
        <div class="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
          <div class="flex items-center justify-between mb-0.5">
            <span class="font-bold text-slate-900 text-[0.62rem]">Full Screen: Navigate to</span>
            <span class="text-[0.52rem] px-1 py-0.2 rounded bg-slate-100 text-slate-600 font-mono">New Screen</span>
          </div>
          <p class="text-[0.55rem] text-slate-500 leading-tight">Replaces the entire screen with a new page. Use this for main journeys (e.g. Home ➔ Food Delivery ➔ Restaurant Menu).</p>
        </div>
        <div class="p-2 rounded-lg bg-white border-2 border-purple-300 shadow-2xs">
          <div class="flex items-center justify-between mb-0.5">
            <span class="font-bold text-purple-950 text-[0.62rem]">Overlay: Open overlay</span>
            <span class="text-[0.52rem] px-1 py-0.2 rounded bg-purple-100 text-purple-800 font-mono font-bold">Popup on Top</span>
          </div>
          <p class="text-[0.55rem] text-slate-600 leading-tight">Floats on top of the screen and dims the background. Use this for quick choices (e.g. customizing a burger) without losing your spot on the menu.</p>
        </div>
      </div>
    </div>
    <div class="mt-2 text-[0.6rem] text-purple-900 bg-purple-50 p-1.5 rounded border border-purple-200 flex items-center justify-between">
      <span><strong>Rule of Thumb:</strong> Main pages use <strong>Navigate to</strong>. Options & sheets use <strong>Open overlay</strong>.</span>
      <span class="font-mono text-[0.55rem] px-1.5 py-0.2 rounded bg-purple-200 text-purple-900 font-bold">Bottom Sheet</span>
    </div>
  </div>
  <!-- Right: Figma Overlay Inspector Specimen -->
  <div class="p-3 rounded-xl border border-slate-300 bg-slate-900 text-slate-100 flex flex-col justify-between shadow-sm font-sans">
    <div>
      <div class="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-2">
        <span class="text-[0.68rem] font-bold text-slate-200 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-purple-400 inline" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/></svg>
          <span>Figma Settings for Overlays</span>
        </span>
        <span class="text-[0.55rem] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-purple-300">Open overlay</span>
      </div>
      <!-- Config Controls -->
      <div class="space-y-1.5 text-[0.62rem]">
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Target Frame</span>
          <span class="font-mono font-bold text-purple-300 truncate max-w-[140px]">Item_Customizer_Modal</span>
        </div>
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Position</span>
          <span class="font-mono font-bold text-blue-400">Bottom Center (slides up from bottom)</span>
        </div>
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Close when clicking outside</span>
          <span class="text-emerald-400 font-bold font-mono">Checked (tap outside to close)</span>
        </div>
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Add background overlay</span>
          <span class="font-mono font-bold text-amber-400">50% Black (dims the background)</span>
        </div>
        <div class="p-1.5 rounded bg-slate-800 border border-slate-700 flex items-center justify-between">
          <span class="text-slate-400">Animation</span>
          <span class="font-mono font-bold text-teal-400">Move In ➔ From Bottom (300ms)</span>
        </div>
      </div>
    </div>
    <div class="pt-1.5 mt-2 border-t border-slate-800 text-[0.56rem] text-slate-400 flex items-center justify-between">
      <span>Standard Mobile Bottom Sheet</span>
      <span class="text-emerald-400 font-bold">Native App Feel</span>
    </div>
  </div>
</div>

<!--
Bottom sheets let users customize items without leaving the menu. Dimming the background keeps their focus on the choice while preserving their scroll position.
-->

---
layout: section
icon: tools
sub: Keeping top headers fixed in place while content scrolls smoothly
---

# 03 — Scrolling & fixed headers

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
sub: Step-by-step walkthrough: connecting the 3 screens and adding the customizer sheet
---

# 04 — TA live demonstration

---
layout: default
icon: tools
dense: true
---

# Live demo: Connecting the 3 screens step-by-step

<div class="grid grid-cols-3 gap-2.5 mt-1 text-[0.68rem]">
  <!-- Step 1 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">STEP 1</span>
        <span class="text-[0.55rem] font-mono text-blue-600">Navigate to</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Connect Main Screens</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Screen 1: Select "Food" tile ➔ drag wire to <strong>Screen 2</strong></li>
        <li>Screen 2: Select "Burger Republic" ➔ drag wire to <strong>Screen 3</strong></li>
        <li>Screens 2 & 3: Select Back arrow ➔ action: <code>Back</code></li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-blue-700 pt-1 mt-1 border-t border-blue-200">Forward & Back Flow</div>
  </div>

  <!-- Step 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">STEP 2</span>
        <span class="text-[0.55rem] font-mono text-purple-600">Open overlay</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Add the Bottom Sheet</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Select circular <code>+</code> button on a burger card</li>
        <li>Action: <code>Open overlay</code> ➔ pick Customizer Frame</li>
        <li>Position: <code>Bottom Center</code> • Backdrop: <code>50% Black</code></li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-purple-700 pt-1 mt-1 border-t border-purple-200">Popup Sheet Setup</div>
  </div>

  <!-- Step 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[0.6rem] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">STEP 3</span>
        <span class="text-[0.55rem] font-mono text-teal-600">Close overlay</span>
      </div>
      <h4 class="font-bold text-slate-900 mb-1">Close the Sheet</h4>
      <ul class="text-[0.62rem] text-slate-600 space-y-1 pl-3 list-disc">
        <li>Select "Add to Cart" button inside sheet: <code>Close overlay</code></li>
        <li>Check: <code>Close when clicking outside</code></li>
        <li>Screen 3 now displays the bottom "View Basket" bar</li>
      </ul>
    </div>
    <div class="text-[0.58rem] font-semibold text-teal-700 pt-1 mt-1 border-t border-teal-200">Closing & Confirmation</div>
  </div>
</div>

<!-- Complete Interaction Flow Map -->
<div class="mt-2.5 p-2 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center justify-between">
  <div class="flex items-center gap-2 text-[0.62rem]">
    <span class="px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-bold font-mono">Screen 1: Home</span>
    <span class="text-slate-400 font-bold">➔</span>
    <span class="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-bold font-mono">Screen 2: Feed</span>
    <span class="text-slate-400 font-bold">➔</span>
    <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold font-mono">Screen 3: Menu</span>
    <span class="text-slate-400 font-bold">➔</span>
    <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-bold font-mono">[Popup: Customizer Sheet]</span>
  </div>
  <span class="text-[0.58rem] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">Complete Journey</span>
</div>

<!--
Follow along with the TA. Notice how setting Screen 1 as the starting point makes the entire prototype run smoothly from the first tap.
-->

---
layout: section
icon: activity
sub: 45-minute hands-on studio — Connect your screens into a clickable mobile prototype
---

# 05 — Graded in-class sprint

---
layout: default
icon: activity
dense: true
---

# Graded In-Class Sprint: Build Your Clickable Prototype

<div class="p-2 rounded-lg border border-amber-200 bg-amber-50 text-[0.67rem] text-amber-900 flex items-center justify-between mb-2">
  <div class="flex items-center gap-1.5">
    <span class="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[0.58rem]">GRADED</span>
    <span><strong>What you will build:</strong> Screens 1 ➔ 2 ➔ 3 (Navigation) + Dish Customizer (Popup Sheet)</span>
  </div>
  <div class="flex items-center gap-1.5 font-mono text-[0.6rem]">
    <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50 no-underline shadow-2xs" style="text-decoration: none;">Figma Workspace ↗</a>
  </div>
</div>

<div class="grid grid-cols-3 gap-3 text-[0.7rem]">
  <!-- Task 1: Navigation Journey -->
  <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">1. Connect the Screens</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Part 1 (30%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Screen 1: "Food" tile links to Screen 2.</li>
        <li>Screen 2: "Burger Republic" card links to Screen 3.</li>
        <li>Screens 2 & 3: Top header back arrows set to <code>Back</code>.</li>
        <li>Animation: <code>Push / Slide In</code> (300ms) for smooth sliding.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-blue-700 font-semibold pt-1 mt-2 border-t border-slate-200">Forward & Backward Navigation</div>
  </div>

  <!-- Task 2: Modal Customizer Sheet -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">2. Add the Bottom Sheet</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Part 2 (40%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Burger item <code>+</code> button opens sheet with <code>Open overlay</code>.</li>
        <li>Position: <code>Bottom Center</code>; Animation: <code>Move In</code> (Bottom).</li>
        <li>Dimming: Check <code>50% Black</code> background overlay.</li>
        <li>Dismissal: Check <code>Close when clicking outside</code> + CTA close.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-purple-700 font-semibold pt-1 mt-2 border-t border-purple-200">Popup Bottom Sheet</div>
  </div>

  <!-- Task 3: Viewport Physics & Polish -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between shadow-xs">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-slate-900">3. Scrolling & Fixed Bars</span>
        <span class="text-[0.55rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Part 3 (30%)</span>
      </div>
      <ul class="list-disc pl-3.5 space-y-1 text-slate-600 text-[0.66rem]">
        <li>Lock Top Status Bar & Address Header: <code>Fixed</code>.</li>
        <li>Lock Bottom Navigation Bar: <code>Fixed</code>.</li>
        <li>Menu items scroll vertically underneath the headers.</li>
        <li>Cuisine categories row scrolls horizontally: <code>Horizontal</code>.</li>
      </ul>
    </div>
    <div class="text-[0.62rem] text-teal-700 font-semibold pt-1 mt-2 border-t border-teal-200">Native App Feel</div>
  </div>
</div>

<!--
You have 45 minutes for this graded assignment. Connect all 3 screens, configure the popup bottom sheet, set up scrolling, and run the self-check tests before calling a TA.
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
        <span class="font-bold text-blue-900 text-xs">1. Navigation</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Continuous Flow:</strong> 1 ➔ 2 ➔ 3 works without broken wires</li>
        <li><strong>Back Action:</strong> Back arrows use native <code>Back</code> action</li>
        <li><strong>Starting Point:</strong> Screen 1 set as Flow Starting Point</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-blue-700 font-bold pt-1.5 mt-1 border-t border-blue-200">Smooth Navigation</div>
  </div>

  <!-- Pillar 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-purple-900 text-xs">2. Bottom Sheet</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-purple-100 text-purple-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Positioning:</strong> Sheet opens at <code>Bottom Center</code></li>
        <li><strong>Dimming:</strong> <code>50% Black</code> background overlay enabled</li>
        <li><strong>Easy Dismissal:</strong> Closes when clicking outside or CTA</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-purple-700 font-bold pt-1.5 mt-1 border-t border-purple-200">Popup Behavior</div>
  </div>

  <!-- Pillar 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">3. Scrolling & Fixed Bars</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Fixed Headers:</strong> Top bar stays pinned in place when scrolling</li>
        <li><strong>Clean Scrolling:</strong> Cards scroll smoothly under headers</li>
        <li><strong>Horizontal Row:</strong> Category row scrolls horizontally</li>
      </ul>
    </div>
    <div class="text-[0.6rem] text-teal-700 font-bold pt-1.5 mt-1 border-t border-teal-200">Scrolling Setup</div>
  </div>

  <!-- Pillar 4 -->
  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-amber-900 text-xs">4. Polish & Touch</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-amber-100 text-amber-800">25%</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.62rem] list-disc">
        <li><strong>Smooth Animation:</strong> <code>300ms Ease Out</code> transitions</li>
        <li><strong>Slide Physics:</strong> Sheet slides up cleanly from bottom</li>
        <li><strong>Tap Areas:</strong> Buttons are easy to tap (&ge; 44 &times; 44 px)</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-amber-700 font-medium pt-1.5 mt-1 border-t border-amber-200">Mobile Feel</div>
  </div>
</div>

<div class="mt-2 py-1 px-2.5 rounded-lg border border-indigo-300 bg-indigo-50/80 text-[0.66rem] text-indigo-950 flex items-center justify-between">
  <div>
    <span class="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold text-[0.58rem] mr-2">PD2 ALIGNMENT</span>
    This in-class prototype serves as the verified interactive blueprint for your team's <strong>Project Deliverable 2</strong> submission!
  </div>
  <span class="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-bold text-[0.58rem]">100 Pts Checkoff</span>
</div>

<!--
Review these four criteria carefully. Each pillar carries 25% of your in-class grade.
-->

---
layout: split
title: Student Self-Check: Test Before Checkoff
icon: activity
dense: true
wideRight: true
---

<div class="grid grid-cols-2 gap-2.5 text-[0.66rem]">
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50">
    <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-blue-600 font-bold">1.</span>
      <span>The Full Loop Test</span>
    </div>
    <p class="text-slate-600 leading-tight">Start at Screen 1. Tap through to 2 and 3, open the modal, close it, and tap back twice. Confirm you never get stuck.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50">
    <div class="font-bold text-purple-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-purple-600 font-bold">2.</span>
      <span>The Popup Sheet Test</span>
    </div>
    <p class="text-slate-600 leading-tight">Tapping <code>+</code> must slide the sheet up and dim the screen; tapping the dark area outside must close it immediately.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/50">
    <div class="font-bold text-teal-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-teal-600 font-bold">3.</span>
      <span>The Scroll Test</span>
    </div>
    <p class="text-slate-600 leading-tight">Scroll each screen. Top status bars and navigation bars must stay pinned in place while cards scroll underneath.</p>
  </div>

  <div class="p-2.5 rounded-xl border border-amber-200 bg-amber-50/50">
    <div class="font-bold text-amber-900 mb-0.5 flex items-center gap-1.5">
      <span class="text-amber-600 font-bold">4.</span>
      <span>The Phone Preview Test</span>
    </div>
    <p class="text-slate-600 leading-tight">Click Present (Play button). Confirm your screens fit the phone frame (<code>393 × 852 px</code>) cleanly without unwanted horizontal cutoffs.</p>
  </div>
</div>

::right::

<Activity label="Self-Check Steps">

<div class="text-[0.7rem] space-y-1 text-slate-700">
  <p class="font-medium text-slate-900 mb-1">Before calling a TA for grading:</p>
  <p><strong>Step 1:</strong> Run all 4 tests on the left in Figma Presentation mode.</p>
  <p><strong>Step 2:</strong> Verify your Flow Starting Point is set to <strong>Screen 1 (Home)</strong>.</p>
  <p><strong>Step 3:</strong> Copy your Figma file share link (Permissions: <em>"Anyone with the link can view"</em>).</p>
  <p><strong>Step 4:</strong> Raise your hand for TA checkoff and submit your link.</p>
</div>

</Activity>

<!--
Run through this 4-step self-check protocol before asking a TA to evaluate your work.
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
      <span class="text-[0.65rem] text-slate-600 font-medium">3-Screen Clickable Flow + Dish Customizer Modal Sheet</span>
    </div>
    <span class="text-xs font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 shadow-xs">45–50 Mins</span>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="p-2 rounded-xl bg-white border border-indigo-200 hover:border-indigo-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-indigo-900 flex items-center gap-1">
          <span>Figma Workspace Template</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Your Lab 03 screens, assets & prototype flow canvas</div>
      </div>
      <span class="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[0.58rem] whitespace-nowrap ml-2">Open File ↗</span>
    </a>
    <a href="https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma" target="_blank" class="p-2 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-xs transition flex items-center justify-between no-underline" style="text-decoration: none;">
      <div>
        <div class="text-[0.65rem] font-bold text-amber-900 flex items-center gap-1">
          <span>Figma Prototyping Docs</span>
        </div>
        <div class="text-[0.56rem] text-slate-500 mt-0.5">Triggers, action sheets, overlays & easing reference</div>
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
        <span class="font-bold text-slate-900 text-[0.68rem]">1. Screen Links</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">Connections</span>
      </div>
      <div class="text-[0.56rem] text-slate-600 leading-snug">
        Home ➔ Food Delivery ➔ Menu ➔ Back stack. Zero broken links or dead-end screens.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-slate-400 pt-1 border-t border-slate-100">
      Scope: 3 Core Screens
    </div>
  </div>

  <!-- Check 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-purple-950 text-[0.68rem]">2. Bottom Sheet</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">Overlay</span>
      </div>
      <div class="text-[0.56rem] text-slate-600 leading-snug">
        Dish customizer bottom sheet with 50% backdrop dimming and outside-tap dismissal.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-purple-600 pt-1 border-t border-purple-100">
      Scope: Bottom Sheet
    </div>
  </div>

  <!-- Check 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-teal-950 text-[0.68rem]">3. Fixed Headers</span>
        <span class="text-[0.52rem] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">Scroll</span>
      </div>
      <div class="text-[0.56rem] text-teal-950 leading-snug">
        Fixed header and bottom nav bars; vertical feed scroll and horizontal deals carousel.
      </div>
    </div>
    <div class="mt-2 text-[0.52rem] font-mono text-teal-700 pt-1 border-t border-teal-200">
      Scope: Fixed & Scroll
    </div>
  </div>
</div>

<!--
The template link is active. Open your file in Figma and begin wiring Phase 1.
-->

---
layout: default
icon: intro
dense: true
---

# Project Deliverable 2 (PD2): Prototype Handoff & Requirements

<div class="text-[0.72rem] text-slate-500 mb-2">How today's in-class sprint directly feeds into your team's graded Project Milestone:</div>

<div class="grid grid-cols-3 gap-3 text-[0.68rem] mt-1">
  <!-- Requirement 1 -->
  <div class="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-blue-900 text-xs">1. Connect Your User Stories</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-blue-100 text-blue-800">PD1 ➔ PD2</span>
      </div>
      <p class="text-slate-600 text-[0.62rem] leading-relaxed">
        Every clickable interaction in your team prototype must match a user story your team defined in <strong>Lab 01</strong>.
      </p>
    </div>
    <div class="text-[0.58rem] text-blue-700 font-semibold pt-1 border-t border-blue-200">User Story Mapping</div>
  </div>

  <!-- Requirement 2 -->
  <div class="p-2.5 rounded-xl border border-purple-200 bg-purple-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-purple-900 text-xs">2. Complete Clickable Flow</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-purple-100 text-purple-800">Multi-Screen</span>
      </div>
      <p class="text-slate-600 text-[0.62rem] leading-relaxed">
        Your team project submission must contain a minimum of <strong>4 connected screens</strong>, at least <strong>1 bottom sheet or popup</strong>, and responsive Auto-Layout containers.
      </p>
    </div>
    <div class="text-[0.58rem] text-purple-700 font-semibold pt-1 border-t border-purple-200">Prototype Scope</div>
  </div>

  <!-- Requirement 3 -->
  <div class="p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">3. Submission Checklist</span>
        <span class="px-1.5 py-0.5 rounded text-[0.56rem] font-bold bg-teal-100 text-teal-800">Checklist</span>
      </div>
      <ul class="text-slate-600 pl-3 space-y-1 text-[0.6rem] list-disc">
        <li>Public Figma file view link</li>
        <li>Figma Presentation prototype link</li>
        <li>1-page screen map & user flow PDF</li>
      </ul>
    </div>
    <div class="text-[0.58rem] text-teal-700 font-semibold pt-1 border-t border-teal-200">Portal Submission</div>
  </div>
</div>

<div class="mt-2.5 p-2 rounded-xl border border-slate-200 bg-slate-50 text-[0.66rem] text-slate-800 flex items-center justify-between">
  <div><strong>Next Lab Preview:</strong> After Lab 04, we finish Figma! In Lab 05, we start turning these visual containers into real code using <strong>HTML & CSS</strong>!</div>
  <span class="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[0.58rem]">Phase 2 Ahead</span>
</div>

<!--
PD2 connects your user stories from Lab 01, design system from Lab 02-03, and prototype from today.
-->

---
layout: refs
icon: references
dense: true
---

## Lab 04 Core Resources

- <a href="https://www.figma.com/community/file/1685465148190554592" target="_blank" class="no-underline" style="text-decoration: none;"><strong>Figma Community — Official Talabat ICA Starter Kit</strong></a> — multi-screen template, wireframes & workspace
- <a href="https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing" target="_blank" class="no-underline" style="text-decoration: none;"><strong>Google Drive — Talabat Brand & Typography Guidelines (PDF)</strong></a> — official tokens & color standards

## Figma Official Documentation

- [Figma Learn — Guide to Prototyping in Figma](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma) — official prototyping engine overview
- [Figma Learn — Create Overlays in Prototypes](https://help.figma.com/hc/en-us/articles/360039818254-Create-overlays-in-your-prototypes) — positioning, modal dismissal & backdrops
- [Figma Learn — Prototype Triggers and Actions](https://help.figma.com/hc/en-us/articles/360040035834-Prototype-triggers-and-actions) — touch events, navigation & stack mechanics
- [Figma Learn — Prototype Easing and Animation Curves](https://help.figma.com/hc/en-us/articles/360040035874-Prototype-animation-and-easing) — natural motion physics & timing
