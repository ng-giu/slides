---
theme: ../../theme
title: BINF 301 - Assignment 1 - Mobile Home Screen Re-creation
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
assignment: 1
lineNumbers: true
layout: cover
---

<!-- Slide 1 -->

<div class="space-y-3" style="max-width: 56%;">
  <div class="text-[0.68rem] font-bold uppercase tracking-wider text-blue-700">
    German International University (GIU) &bull; Faculty of Informatics
  </div>
  <h1 style="font-size: 1.85rem; line-height: 1.25; margin-bottom: 0.35rem; color: #0f172a;">
    Practical Assignment:<br>Mobile Home Screen Re-creation
  </h1>
  <div class="text-[0.82rem] text-slate-700 font-medium">
    Course: Information &amp; Communication Architecture (ICA) &bull; BINF 301
  </div>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/90 border border-blue-200 text-blue-950 text-[0.66rem] font-medium mt-1 shadow-xs">
    <strong class="text-blue-800">Core Goal:</strong>
    <span class="text-slate-600">Hands-on HTML5 &amp; CSS layout mastery from scratch in Notepad</span>
  </div>
  <div class="pt-1">
    <a href="https://youneszied.github.io/ICA_lab_5_Assignment-/" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-[0.6rem] shadow-xs no-underline" style="color: #ffffff !important; text-decoration: none !important;">
      <span>Open Assignment Portal ↗</span>
      <span class="opacity-75 font-normal">youneszied.github.io/ICA_lab_5_Assignment-/</span>
    </a>
  </div>
</div>

---
layout: default
icon: tools
dense: true
---

<!-- Slide 2 -->

# How the deterministic assignment portal works

Each student receives a cryptographically unique assignment generated from their university Student ID.

<div class="grid grid-cols-4 gap-3 my-3">
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2">1</div>
      <div class="font-bold text-blue-950 text-xs mb-1">Open Portal</div>
      <div class="text-[0.62rem] text-slate-600 leading-relaxed mb-1.5">
        Visit the public GitHub Pages generator portal to begin:
      </div>
      <a href="https://youneszied.github.io/ICA_lab_5_Assignment-/" target="_blank" class="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-[0.55rem] inline-block no-underline shadow-2xs" style="color: #ffffff !important; text-decoration: none !important;">
        Launch Portal ↗
      </a>
    </div>
    <div class="text-[0.48rem] font-mono text-blue-800 mt-2 pt-1.5 border-t border-blue-200/60 break-all leading-tight">
      youneszied.github.io/ICA_lab_5_Assignment-/
    </div>
  </div>

  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50 flex flex-col justify-between">
    <div>
      <div class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mb-2">2</div>
      <div class="font-bold text-indigo-950 text-xs mb-1">Enter Student ID</div>
      <div class="text-[0.62rem] text-slate-600 leading-relaxed">
        Input your university ID <span class="whitespace-nowrap">(e.g. <span class="font-mono font-bold text-indigo-900">19006583</span>)</span> to seed the generator.
      </div>
    </div>
    <div class="text-[0.58rem] font-semibold text-indigo-700 mt-2 pt-1.5 border-t border-indigo-200/60">
      Deterministic Seed
    </div>
  </div>

  <div class="p-3 rounded-xl border border-teal-200 bg-teal-50/50 flex flex-col justify-between">
    <div>
      <div class="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center mb-2">3</div>
      <div class="font-bold text-teal-950 text-xs mb-1">Personalized Specs</div>
      <div class="text-[0.62rem] text-slate-600 leading-relaxed">
        Instantly computes your theme (Food, Bakery, Grocery, Pharmacy, Electronics) and brand palette.
      </div>
    </div>
    <div class="text-[0.58rem] font-semibold text-teal-700 mt-2 pt-1.5 border-t border-teal-200/60">
      5 Distinct Verticals
    </div>
  </div>

  <div class="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
    <div>
      <div class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">4</div>
      <div class="font-bold text-emerald-950 text-xs mb-1">Download Package</div>
      <div class="text-[0.62rem] text-slate-600 leading-relaxed">
        Download your individualized 3-page assignment brief (PDF) and target mockup (PNG).
      </div>
    </div>
    <div class="text-[0.58rem] font-semibold text-emerald-700 mt-2 pt-1.5 border-t border-emerald-200/60">
      3-Page Brief + Target PNG
    </div>
  </div>
</div>

<div class="p-2.5 rounded-xl border border-amber-300 bg-amber-50/70 text-[0.64rem] text-amber-950 flex items-start gap-2.5">
  <div class="font-bold text-amber-800 shrink-0 uppercase tracking-wide text-[0.62rem] mt-0.5">Canvas Security Architecture</div>
  <div class="text-slate-700 leading-relaxed">
    The target UI on the portal is rendered strictly onto an HTML5 <code>&lt;canvas&gt;</code> element—there are <strong>zero HTML DOM elements</strong> to inspect or copy. You must craft the semantic HTML and CSS structure yourself from your design brief.
  </div>
</div>

---
layout: default
icon: intro
dense: true
---

<!-- Slide 3 -->

# Anatomy of the target mobile screen

Your submission must construct the following 6 core functional components inside a mobile wrapper:

<div class="flex gap-3.5 my-2">
  <div class="w-[195px] shrink-0 rounded-2xl border-2 border-slate-700 bg-slate-900 p-2 text-white shadow-md flex flex-col justify-between text-[0.5rem] font-sans">
    <div class="p-1 rounded bg-slate-800 border border-slate-700 mb-1 flex items-center justify-between">
      <span class="text-blue-400 font-bold truncate">📍 Deliver to Nasr City</span>
      <span class="text-[0.44rem] text-slate-400">▾</span>
    </div>
    <div class="p-1 rounded bg-slate-800 border border-slate-700 text-slate-400 mb-1 flex items-center gap-1">
      <span>🔍</span>
      <span class="truncate">Search meals or items...</span>
    </div>
    <div class="p-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-1">
      <div class="font-bold text-[0.54rem] leading-tight">30% OFF SPECIAL</div>
      <div class="text-[0.44rem] opacity-90">🏷️ CODE: ICA30</div>
    </div>
    <div class="grid grid-cols-4 gap-1 text-center mb-1">
      <div class="p-1 rounded bg-slate-800 border border-slate-700"><div>🍔</div><div class="text-[0.4rem]">Food</div></div>
      <div class="p-1 rounded bg-slate-800 border border-slate-700"><div>☕</div><div class="text-[0.4rem]">Cafe</div></div>
      <div class="p-1 rounded bg-slate-800 border border-slate-700"><div>🛒</div><div class="text-[0.4rem]">Mart</div></div>
      <div class="p-1 rounded bg-slate-800 border border-slate-700"><div>💊</div><div class="text-[0.4rem]">Meds</div></div>
    </div>
    <div class="p-1.5 rounded-lg bg-slate-800 border border-slate-700 mb-1">
      <div class="h-5 rounded bg-gradient-to-r from-teal-500 to-emerald-600 mb-1"></div>
      <div class="flex items-center justify-between font-bold text-[0.52rem]">
        <span>Burger Station</span>
        <span class="text-amber-400">★ 4.8</span>
      </div>
      <div class="text-[0.42rem] text-slate-400">20-30 min &bull; Free delivery</div>
    </div>
    <div class="pt-1 border-t border-slate-700 flex justify-around text-center text-[0.52rem] text-slate-400">
      <span class="text-blue-400 font-bold">🏠</span>
      <span>🔍</span>
      <span>📋</span>
      <span>👤</span>
    </div>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-2 text-[0.62rem]">
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">1</span>
        Delivery Location Header
      </div>
      <div class="text-slate-600 leading-snug">
        Location indicator with pin emoji (📍 <strong>DELIVER TO ...</strong>), current street/city text, and delivery selector dropdown.
      </div>
    </div>
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">2</span>
        Search Bar Component
      </div>
      <div class="text-slate-600 leading-snug">
        Styled <code>&lt;input type="search"&gt;</code> with search emoji prefix (🔍) and personalized placeholder text.
      </div>
    </div>
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">3</span>
        Promotional Hero Banner
      </div>
      <div class="text-slate-600 leading-snug">
        Dual-gradient CSS container with <code>linear-gradient</code>, discount headline, subtext, and coupon badge (🏷️ <strong>CODE: ...</strong>).
      </div>
    </div>
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">4</span>
        Category Grid / Flexbox
      </div>
      <div class="text-slate-600 leading-snug">
        Exactly 4 themed category tiles featuring assigned native emojis (🍔, ☕, etc.), rounded cards, and category titles.
      </div>
    </div>
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">5</span>
        Featured Store Card
      </div>
      <div class="text-slate-600 leading-snug">
        CSS gradient cover banner, bold store name, rating badge (★ 4.8), delivery time tag, and minimum order metadata.
      </div>
    </div>
    <div class="p-2 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5 flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[0.54rem] font-mono">6</span>
        Fixed Bottom Navigation
      </div>
      <div class="text-slate-600 leading-snug">
        Anchored bottom <code>&lt;nav&gt;</code> container with 4 interactive tab items: 🏠 Home, 🔍 Search, 📋 Orders, and 👤 Profile.
      </div>
    </div>
  </div>
</div>

<div class="p-1.5 rounded-lg bg-slate-900 text-slate-200 text-[0.58rem] flex items-center justify-between font-mono">
  <span>Mobile Viewport Constraint:</span>
  <span class="text-blue-400 font-bold">max-width: 400px; margin: 0 auto; min-height: 100vh;</span>
</div>

---
layout: default
icon: code
dense: true
---

<!-- Slide 4 -->

# Step-by-step implementation guide (build in Notepad)

Follow this architectural roadmap to assemble your screen cleanly from blank file to final prototype:

<div class="grid grid-cols-2 gap-3 my-2 text-[0.62rem]">
  <div class="space-y-2">
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 1: Viewport &amp; Centered Container</div>
      <div class="text-slate-600 leading-relaxed">
        Create <code>&lt;StudentID&gt;.html</code> in Notepad. Set the viewport meta tag and wrap content in container styles: <code>max-width: 400px; margin: auto;</code>
      </div>
    </div>
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 2: Header &amp; Search Input</div>
      <div class="text-slate-600 leading-relaxed">
        Code the semantic <code>&lt;header&gt;</code> with delivery location label and an accessible <code>&lt;input type="search"&gt;</code> using your assigned placeholder.
      </div>
    </div>
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 3: Dual-Gradient Promo Hero</div>
      <div class="text-slate-600 leading-relaxed">
        Build a hero card styled with <code>linear-gradient(135deg, Primary, Secondary)</code>, rounded corners, discount title, and coupon badge.
      </div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 4: Category Section (Flexbox or Grid)</div>
      <div class="text-slate-600 leading-relaxed">
        Use <code>display: flex</code> or <code>display: grid; grid-template-columns: repeat(4, 1fr)</code> to lay out 4 category cards with native emojis and text labels.
      </div>
    </div>
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 5: Featured Store Card</div>
      <div class="text-slate-600 leading-relaxed">
        Build the featured store card with a CSS gradient cover banner, bold store name, rating pill badge (★ 4.8), and delivery time tag.
      </div>
    </div>
    <div class="p-2.5 rounded-lg border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-blue-900 mb-0.5">Step 6: Anchored Bottom Navigation</div>
      <div class="text-slate-600 leading-relaxed">
        Anchor the <code>&lt;nav&gt;</code> bar to the bottom viewport with <code>position: fixed; bottom: 0; max-width: 400px;</code> and distribute the 4 tabs with flexbox.
      </div>
    </div>
  </div>
</div>

---
layout: default
icon: tools
dense: true
---

<!-- Slide 5 -->

# Asset guidelines: Mandatory Unicode emoji policy

Automated headless grading evaluates your code in an isolated CI sandbox. Adhere strictly to these asset rules:

<div class="grid grid-cols-2 gap-3 my-2.5">
  <div class="p-3.5 rounded-xl border-2 border-red-200 bg-red-50/50 flex flex-col justify-between">
    <div>
      <div class="text-red-900 font-bold text-xs mb-1.5 flex items-center gap-1.5">
        <span class="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[0.6rem] font-bold">X</span>
        Strictly Prohibited: External Images
      </div>
      <ul class="text-[0.62rem] text-slate-700 space-y-1.5 pl-3 list-disc">
        <li><strong>No local machine paths:</strong> Linking <code>C:\Users\...\icon.png</code> or <code>file:///...</code> fails immediately in automated testing.</li>
        <li><strong>No external image hosts:</strong> Hotlinking external CDN URLs or image servers causes 404 network timeouts in headless testing.</li>
        <li><strong>No SVG files or icon fonts:</strong> Do not load FontAwesome, Lucide scripts, or external sprite sheets.</li>
      </ul>
    </div>
    <div class="mt-2 pt-2 border-t border-red-200 text-[0.6rem] font-semibold text-red-800">
      Result: Unresolved links trigger automated 404 deduction
    </div>
  </div>
  <div class="p-3.5 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
    <div>
      <div class="text-emerald-900 font-bold text-xs mb-1.5 flex items-center gap-1.5">
        <span class="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
        Mandatory: Native Unicode Emojis
      </div>
      <ul class="text-[0.62rem] text-slate-700 space-y-1.5 pl-3 list-disc">
        <li><strong>Text Emojis:</strong> Place native Unicode emojis directly in your HTML text nodes: 📍 Location, 🔍 Search, 🍔 Food, ☕ Coffee, ★ Rating, 🏷️ Voucher, 🏠 Home, 📋 Orders, 👤 Profile.</li>
        <li><strong>CSS Visual Gradients:</strong> Store cover banners and promo backgrounds must be rendered using pure CSS <code>linear-gradient(...)</code>.</li>
        <li><strong>Zero Dependencies:</strong> 100% self-contained, lightning-fast rendering, and works offline anywhere.</li>
      </ul>
    </div>
    <div class="mt-2 pt-2 border-t border-emerald-200 text-[0.6rem] font-semibold text-emerald-800">
      Result: 100% reliable headless test rendering
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[0.62rem] text-blue-900 flex items-center justify-between">
  <strong>How to type emojis in Notepad:</strong>
  <span>Windows: Press <kbd class="px-1.5 py-0.5 rounded bg-white border border-blue-300 font-mono text-[0.58rem]">Win + .</kbd> &bull; Mac: Press <kbd class="px-1.5 py-0.5 rounded bg-white border border-blue-300 font-mono text-[0.58rem]">Cmd + Ctrl + Space</kbd></span>
</div>

---
layout: default
icon: activity
dense: true
---

<!-- Slide 6 -->

# Official grading rubric breakdown (100 points)

Your submission is scored out of 100 points across three automated evaluation pillars:

<div class="grid grid-cols-3 gap-3 my-2.5">
  <div class="p-3 rounded-xl border border-blue-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-blue-900 text-xs">Structure &amp; Semantics</span>
        <span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[0.6rem]">40 Pts</span>
      </div>
      <ul class="text-[0.6rem] text-slate-600 space-y-1 pl-3 list-disc leading-relaxed">
        <li>Centered wrapper: <code>max-width: 400px;</code> and <code>margin: auto;</code></li>
        <li>Semantic tags: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code></li>
        <li>Exact element counts: 4 categories, 1 featured store card, 4 bottom nav items</li>
        <li>Proper input element: <code>&lt;input type="search"&gt;</code></li>
      </ul>
    </div>
    <div class="mt-2 pt-1.5 border-t border-slate-100 text-[0.58rem] font-semibold text-blue-700">
      DOM Architecture &amp; Hierarchy
    </div>
  </div>

  <div class="p-3 rounded-xl border border-teal-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-teal-900 text-xs">Layout &amp; Styling</span>
        <span class="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold text-[0.6rem]">40 Pts</span>
      </div>
      <ul class="text-[0.6rem] text-slate-600 space-y-1 pl-3 list-disc leading-relaxed">
        <li>Modern alignment: <code>display: flex</code> or <code>grid</code> on categories and navigation</li>
        <li>Fixed bottom navigation anchored to the viewport bottom</li>
        <li>Color accuracy: Assigned brand primary and secondary palette applied</li>
        <li>Touch ergonomics: Padding, border-radii, and clean contrast hierarchy</li>
      </ul>
    </div>
    <div class="mt-2 pt-1.5 border-t border-slate-100 text-[0.58rem] font-semibold text-teal-700">
      Computed CSS &amp; Visual Fidelity
    </div>
  </div>

  <div class="p-3 rounded-xl border border-indigo-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-bold text-indigo-900 text-xs">Academic Integrity</span>
        <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold text-[0.6rem]">20 Pts</span>
      </div>
      <ul class="text-[0.6rem] text-slate-600 space-y-1 pl-3 list-disc leading-relaxed">
        <li>Pure human-written code matching your unique Student ID seed</li>
        <li>Automated detection scans for prompt injection honeypot tokens</li>
        <li>Inspection for AI artifacts (markdown code fences, default font stacks)</li>
        <li>Submissions matching another student's seed receive 0 points</li>
      </ul>
    </div>
    <div class="mt-2 pt-1.5 border-t border-slate-100 text-[0.58rem] font-semibold text-indigo-700">
      Seed Consistency &amp; AI Defense
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[0.6rem] text-slate-700 flex justify-between">
  <span>Scored automatically via Headless Chromium DOM &amp; CSS evaluation</span>
  <span class="font-bold text-slate-900">Total Available: 100 Points</span>
</div>

---
layout: default
icon: assignment
dense: true
---

<!-- Slide 7 -->

# Submission instructions & final checklist

Ensure strict compliance with file naming and technical constraints before uploading:

<div class="grid grid-cols-2 gap-3.5 my-2.5">
  <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="font-bold text-blue-950 text-xs mb-1.5">Strict File Naming Rule</div>
      <div class="p-2 rounded bg-white border border-blue-200 font-mono text-[0.72rem] text-blue-900 font-bold mb-2">
        &lt;StudentID&gt;.html
      </div>
      <p class="text-[0.62rem] text-slate-600 leading-relaxed">
        Example: For student ID <strong>19006583</strong>, name your file strictly: <span class="whitespace-nowrap font-mono font-bold text-blue-900 bg-blue-100/70 px-1.5 py-0.5 rounded">19006583.html</span>
      </p>
      <div class="mt-2 text-[0.6rem] text-red-600 font-medium">
        Invalid names like <span class="font-mono font-semibold text-red-700 bg-red-100/70 px-1 rounded">index.html</span> or <span class="font-mono font-semibold text-red-700 bg-red-100/70 px-1 rounded">assignment.html</span> are rejected by the automated ingestion pipeline.
      </div>
    </div>
      <div class="mt-2 pt-2 border-t border-blue-200/60 text-[0.6rem] text-slate-500 space-y-1">
        <div>Portal: <a href="https://youneszied.github.io/ICA_lab_5_Assignment-/" target="_blank" class="text-blue-700 font-bold hover:underline font-mono" style="color: #1d4ed8 !important;">youneszied.github.io/ICA_lab_5_Assignment-/ ↗</a></div>
        <div>Submit: Microsoft Forms link &amp; QR on next slide</div>
      </div>
    </div>
  <div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="font-bold text-slate-900 text-xs mb-2">Pre-Submission Verification Checklist</div>
    <div class="space-y-1.5 text-[0.62rem] text-slate-700">
      <div class="flex items-center gap-2 p-1.5 rounded bg-slate-50 border border-slate-100">
        <span class="font-mono text-emerald-600 font-bold">[✓]</span>
        <span><strong>Single self-contained file:</strong> All CSS in <code>&lt;style&gt;</code> in <code>&lt;head&gt;</code></span>
      </div>
      <div class="flex items-center gap-2 p-1.5 rounded bg-slate-50 border border-slate-100">
        <span class="font-mono text-emerald-600 font-bold">[✓]</span>
        <span><strong>Mobile container bounds:</strong> <code>max-width: 400px; margin: auto;</code></span>
      </div>
      <div class="flex items-center gap-2 p-1.5 rounded bg-slate-50 border border-slate-100">
        <span class="font-mono text-emerald-600 font-bold">[✓]</span>
        <span><strong>Asset rule:</strong> All icons are native emojis (zero external images)</span>
      </div>
      <div class="flex items-center gap-2 p-1.5 rounded bg-slate-50 border border-slate-100">
        <span class="font-mono text-emerald-600 font-bold">[✓]</span>
        <span><strong>Zero JavaScript:</strong> No <code>&lt;script&gt;</code> tags or JS event handlers</span>
      </div>
      <div class="flex items-center gap-2 p-1.5 rounded bg-slate-50 border border-slate-100">
        <span class="font-mono text-emerald-600 font-bold">[✓]</span>
        <span><strong>Seed consistency:</strong> Matches parameters from your assigned Student ID</span>
      </div>
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-emerald-600 text-white text-[0.64rem] font-bold text-center">
  Deadline: Exactly 1 Week from your lab session &bull; Submit via Microsoft Forms
</div>

---
layout: default
dense: true
---

<!-- Slide 8 -->

<div class="flex flex-col items-center justify-center text-center -mt-6">
  <div class="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Assignment 1 Submission Portal</div>
  <div class="p-3 bg-white rounded-3xl border-2 border-indigo-200 shadow-xl inline-block mb-2.5">
    <img src="/lab-05-submission-qr.png" alt="Assignment 1 Submission QR Code" class="w-[330px] h-[330px] object-contain" />
  </div>
  <div class="mb-1.5">
    <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZURURPNVlNN1lHVDA3U1FaSllTWVJBOE4yTC4u" target="_blank" class="px-5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm inline-flex items-center gap-1.5 transition no-underline" style="color: #ffffff !important; text-decoration: none !important;">
      <span style="color: #ffffff !important; font-weight: 700; font-size: 0.72rem;">Open Microsoft Forms Submission ↗</span>
    </a>
  </div>
  <div>
    <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZURURPNVlNN1lHVDA3U1FaSllTWVJBOE4yTC4u" target="_blank" class="text-[0.52rem] font-mono text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200 px-4 py-1 rounded-full border border-slate-300 inline-block transition select-all" style="text-decoration: none !important;">
      https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=twQ5o3wq-k-WjR0V5Byu8yfIedfI9QBOq86huAYW4xZURURPNVlNN1lHVDA3U1FaSllTWVJBOE4yTC4u</a>
  </div>
</div>
