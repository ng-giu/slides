---
theme: ../../theme
title: BINF 301 - Lab 5 - HTML & CSS Foundations
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 5
lineNumbers: true
layout: cover
---

<!-- Slide 1 -->

<h1 style="max-width:70% ">Information & Communication Architecture — Lab 5 — HTML & CSS Foundations</h1>

---
layout: people
title: Contacts
---

<!-- Slide 2 -->

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

<!-- Slide 3 -->

# Lab agenda

| Duration | Topic |
|---|---|
| 5 min | **The Three Pillars:** What is a Web Page Made Of? |
| 15 min | **HTML Primitives:** Tags, Typography, Inputs & Skeleton |
| 15 min | **CSS Core:** Properties, Flexbox, Box Model & Surfaces |
| 10 min | **Beyond the Basics:** Native HTML Showcase & MDN Docs |
| 5 min | **Complete Example:** Simple Login Page Reference |
| 30 min | **In-Class Activity (Ungraded):** Hands-On Sign-Up Card |
| 10 min | **Take-Home Assignment (Graded):** Specs & 1-Week Deadline |

---
layout: section
icon: intro
sub: Semantics, presentation, and behavior
---

<!-- Slide 4 -->

# 01 — What is a web page made of?

---
layout: default
icon: intro
dense: true
---

<!-- Slide 5 -->

# The three building blocks of the web

Every webpage rendered in your browser is constructed from three distinct technologies:

<div class="grid grid-cols-3 gap-3.5 my-3.5">
  <!-- HTML (Highlighted) -->
  <div class="p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/80 shadow-md relative flex flex-col justify-between">
    <div class="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[0.55rem] font-bold uppercase tracking-wider">
      Today's Topic
    </div>
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
          &lt;/&gt;
        </div>
        <div>
          <div class="font-bold text-blue-950 text-sm leading-tight">HTML</div>
          <div class="text-[0.58rem] text-blue-700 font-medium">HyperText Markup Language</div>
        </div>
      </div>
      <div class="font-bold text-blue-900 text-xs mb-1">Structure &amp; Semantics</div>
      <p class="text-[0.66rem] text-slate-700 leading-relaxed">
        Defines the meaning and skeleton of the page: headings, paragraphs, containers, text fields, and action buttons.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-blue-200 text-[0.6rem] font-bold text-blue-800">
      The raw bones of the web
    </div>
  </div>
  <!-- CSS (Highlighted) -->
  <div class="p-3.5 rounded-xl border-2 border-teal-600 bg-teal-50/80 shadow-md relative flex flex-col justify-between">
    <div class="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-teal-600 text-white text-[0.55rem] font-bold uppercase tracking-wider">
      Today's Topic
    </div>
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
          #
        </div>
        <div>
          <div class="font-bold text-teal-950 text-sm leading-tight">CSS</div>
          <div class="text-[0.58rem] text-teal-700 font-medium">Cascading Style Sheets</div>
        </div>
      </div>
      <div class="font-bold text-teal-900 text-xs mb-1">Styling &amp; Presentation</div>
      <p class="text-[0.66rem] text-slate-700 leading-relaxed">
        Controls visual aesthetics: surface colors, typographic scale, inner cushioning, outer spacing, and layout flow.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-teal-200 text-[0.6rem] font-bold text-teal-800">
      The visual skin &amp; layout
    </div>
  </div>
  <!-- JS (Later) -->
  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 shadow-xs flex flex-col justify-between opacity-80">
    <div>
      <div class="flex items-center gap-2 mb-1.5">
        <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
          { }
        </div>
        <div>
          <div class="font-bold text-slate-800 text-sm leading-tight">JavaScript</div>
          <div class="text-[0.58rem] text-slate-500 font-medium">Dynamic Programming</div>
        </div>
      </div>
      <div class="font-bold text-slate-700 text-xs mb-1">Interactivity &amp; Logic</div>
      <p class="text-[0.66rem] text-slate-600 leading-relaxed">
        Powers interactive behavior: API requests, client-side input validation, rich animations, and state updates.
      </p>
    </div>
    <div class="mt-2.5 pt-1.5 border-t border-slate-200 text-[0.6rem] font-medium text-slate-500">
      Later in the semester
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[0.65rem] text-blue-900">
  <strong>Focus Today:</strong> We will master <strong>HTML</strong> structure and <strong>CSS</strong> styling to turn Figma designs into real web screens.
</div>

---
layout: default
icon: intro
dense: true
---

<!-- Slide 6 -->

# What is HTML?

**HTML** stands for **HyperText Markup Language**. It is the standard language used to structure content on the World Wide Web.

<div class="grid grid-cols-2 gap-4 my-3 text-xs">
  <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
    <div class="font-bold text-blue-950 text-xs">What does the name mean?</div>
    <ul class="text-[0.68rem] text-slate-700 space-y-1.5 list-disc pl-3">
      <li><strong>HyperText:</strong> Text documents connected across the web via clickable hyperlinks.</li>
      <li><strong>Markup:</strong> Annotation tags that instruct the browser on how to treat content.</li>
      <li><strong>Language:</strong> A standardized specification understood by every browser worldwide.</li>
    </ul>
  </div>
  <div class="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
    <div class="font-bold text-slate-900 text-xs">Made of Tags</div>
    <p class="text-[0.68rem] text-slate-600 leading-relaxed">
      An HTML document is constructed entirely out of <strong>tags</strong>.
    </p>
    <p class="text-[0.68rem] text-slate-600 leading-relaxed">
      Tags act as structural containers that wrap around text, images, and other tags to declare their purpose to the browser.
    </p>
    <div class="p-2 rounded bg-slate-50 border border-slate-200 font-mono text-[0.64rem] text-blue-800">
      &lt;tagname&gt;Content goes here&lt;/tagname&gt;
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-slate-100 border border-slate-200 text-[0.65rem] text-slate-700">
  <strong>Core Idea:</strong> Without HTML, the browser does not know whether a piece of text is a title, a paragraph, an input field, or an action button. Tags give raw text its meaning.
</div>

---
layout: default
icon: code
dense: true
---

<!-- Slide 7 -->

# What are tags? Syntax & kinds of tags

A **tag** is a markup instruction enclosed in angle brackets (`<` and `>`).

<div class="grid grid-cols-2 gap-4 my-3 text-xs">
  <div class="space-y-3">
    <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-slate-900 text-xs mb-1.5">Tag Anatomy &amp; Syntax</div>
      <div class="p-2.5 rounded-lg bg-slate-900 text-white font-mono text-[0.7rem] flex items-center justify-between mb-2">
        <span class="text-blue-400">&lt;div&gt;</span>
        <span class="text-slate-200">Hello World</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
      </div>
      <div class="grid grid-cols-3 gap-1.5 text-center text-[0.58rem]">
        <div class="p-1 rounded bg-blue-50 border border-blue-200 font-semibold text-blue-800">Opening Tag</div>
        <div class="p-1 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">Content</div>
        <div class="p-1 rounded bg-blue-50 border border-blue-200 font-semibold text-blue-800">Closing Tag</div>
      </div>
    </div>
    <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50">
      <div class="font-bold text-blue-950 text-xs mb-1">Example: The &lt;div&gt; Tag</div>
      <p class="text-[0.66rem] text-slate-700 leading-relaxed">
        <code>&lt;div&gt;</code> stands for <em>content division</em>. It creates a generic container that bundles multiple elements together, exactly like an empty frame in Figma.
      </p>
    </div>
  </div>
  <div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2">The Two Kinds of Tags</div>
      <div class="space-y-2 text-[0.66rem] text-slate-700">
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-bold text-slate-900 mb-0.5">1. Paired / Container Tags</div>
          <p class="text-slate-600 mb-1">Require an opening tag and a closing tag with a slash (<code>/</code>). They wrap text or child elements.</p>
          <code class="text-blue-700 font-mono text-[0.62rem]">&lt;div&gt;...&lt;/div&gt;, &lt;h1&gt;...&lt;/h1&gt;, &lt;p&gt;...&lt;/p&gt;, &lt;button&gt;...&lt;/button&gt;</code>
        </div>
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-bold text-slate-900 mb-0.5">2. Self-Closing / Void Tags</div>
          <p class="text-slate-600 mb-1">Stand alone with no closing tag or inner text. They represent standalone UI controls.</p>
          <code class="text-teal-700 font-mono text-[0.62rem]">&lt;input&gt;, &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;</code>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
icon: code
dense: true
---

<!-- Slide 8 -->

# Today we will learn 5 essential HTML tags

To construct our card screen from scratch, these 5 primitives provide all required functionality:

<div class="grid grid-cols-5 gap-2.5 my-3 text-xs">
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/60 flex flex-col justify-between">
    <div>
      <code class="text-blue-800 font-mono font-bold text-sm block mb-1">&lt;div&gt;</code>
      <div class="font-bold text-blue-950 text-[0.68rem] mb-1">The Container</div>
      <p class="text-[0.62rem] text-slate-600 leading-snug">
        Bundles elements into a single card frame. Like a Figma frame.
      </p>
    </div>
    <div class="text-[0.56rem] font-semibold text-blue-700 pt-1 border-t border-blue-200 mt-2">Paired tag</div>
  </div>
  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/60 flex flex-col justify-between">
    <div>
      <code class="text-indigo-800 font-mono font-bold text-sm block mb-1">&lt;h1&gt;</code>
      <div class="font-bold text-indigo-950 text-[0.68rem] mb-1">Top Headline</div>
      <p class="text-[0.62rem] text-slate-600 leading-snug">
        Primary title. Bold and visually dominant by default.
      </p>
    </div>
    <div class="text-[0.56rem] font-semibold text-indigo-700 pt-1 border-t border-indigo-200 mt-2">Paired tag</div>
  </div>
  <div class="p-3 rounded-xl border border-teal-200 bg-teal-50/60 flex flex-col justify-between">
    <div>
      <code class="text-teal-800 font-mono font-bold text-sm block mb-1">&lt;p&gt;</code>
      <div class="font-bold text-teal-950 text-[0.68rem] mb-1">Paragraph</div>
      <p class="text-[0.62rem] text-slate-600 leading-snug">
        Secondary body text, subtitles, descriptions, and captions.
      </p>
    </div>
    <div class="text-[0.56rem] font-semibold text-teal-700 pt-1 border-t border-teal-200 mt-2">Paired tag</div>
  </div>
  <div class="p-3 rounded-xl border border-amber-200 bg-amber-50/60 flex flex-col justify-between">
    <div>
      <code class="text-amber-800 font-mono font-bold text-sm block mb-1">&lt;input&gt;</code>
      <div class="font-bold text-amber-950 text-[0.68rem] mb-1">Data Field</div>
      <p class="text-[0.62rem] text-slate-600 leading-snug">
        Interactive field for entering text, email, or passwords.
      </p>
    </div>
    <div class="text-[0.56rem] font-semibold text-amber-700 pt-1 border-t border-amber-200 mt-2">Self-closing</div>
  </div>
  <div class="p-3 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between">
    <div>
      <code class="text-emerald-800 font-mono font-bold text-sm block mb-1">&lt;button&gt;</code>
      <div class="font-bold text-emerald-950 text-[0.68rem] mb-1">Action Button</div>
      <p class="text-[0.62rem] text-slate-600 leading-snug">
        Clickable call-to-action trigger to submit forms or sign in.
      </p>
    </div>
    <div class="text-[0.56rem] font-semibold text-emerald-700 pt-1 border-t border-emerald-200 mt-2">Paired tag</div>
  </div>
</div>

<div class="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[0.65rem] text-slate-700">
  Next, let's observe how these tags render in the browser when <strong>zero CSS styling</strong> is applied.
</div>

---
layout: split
title: Typography — h1 and p Tags
icon: code
dense: true
---

<!-- Slide 9 -->

### Semantic Text Levels

HTML tags declare clear visual priority:

```html
<h1>Welcome Back</h1>
<p>Sign in to your account</p>
```

- **`<h1>` (Heading 1):** Dominant title. Bold and prominent by default.
- **`<p>` (Paragraph):** Secondary copy for descriptions and subtitles.

::right::

<div class="pure-browser-window">
  <div class="pure-browser-header">
    <span class="pure-browser-dot bg-red-400"></span>
    <span class="pure-browser-dot bg-amber-400"></span>
    <span class="pure-browser-dot bg-emerald-400"></span>
    <span class="ml-1">Pure Browser Rendering (No CSS)</span>
  </div>
  <div class="pure-browser-content">
    <h1>Welcome Back</h1>
    <p>Sign in to your account</p>
  </div>
</div>

<p class="text-[0.62rem] text-slate-500 mt-2">
  Raw browser rendering: notice default bold heading weight and paragraph margins. Zero custom CSS applied.
</p>

---
layout: split
title: Interactive Controls — input and button Tags
icon: code
dense: true
---

<!-- Slide 10 -->

### Inputs & Actions

```html
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<button>Sign In</button>
```

- **`<input>`:** Self-closing data field.
  - `type`: Sets text behavior or masks characters (`password`).
  - `placeholder`: Ghost hint text inside the field.
- **`<button>`:** Clickable trigger for the primary action.

::right::

<div class="pure-browser-window">
  <div class="pure-browser-header">
    <span class="pure-browser-dot bg-red-400"></span>
    <span class="pure-browser-dot bg-amber-400"></span>
    <span class="pure-browser-dot bg-emerald-400"></span>
    <span class="ml-1">Pure Browser Rendering (No CSS)</span>
  </div>
  <div class="pure-browser-content">
    <div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">
      <input type="text" placeholder="Username" readonly />
      <input type="password" value="secret123" readonly />
      <button>Sign In</button>
    </div>
  </div>
</div>

<p class="text-[0.62rem] text-slate-500 mt-2">
  Pure HTML in browser: native 1px border inputs and classic beveled grey button. Zero colors or styles applied.
</p>

---
layout: split
title: The Complete HTML Skeleton
icon: code
dense: true
---

<!-- Slide 11 -->

### Structure Only (login.html)

Combining all 5 primitives into one working file:

```html
<div>
  <h1>Welcome Back</h1>
  <p>Sign in to your account</p>

  <input type="text" placeholder="Username">
  <input type="password" placeholder="Password">
  <button>Sign In</button>
</div>
```

- **Functional:** Typing and clicking work immediately.
- **Unstyled:** Uses raw browser defaults. Next: styling with CSS!

::right::

<div class="pure-browser-window">
  <div class="pure-browser-header">
    <span class="pure-browser-dot bg-red-400"></span>
    <span class="pure-browser-dot bg-amber-400"></span>
    <span class="pure-browser-dot bg-emerald-400"></span>
    <span class="ml-1">login.html — Pure Browser Rendering</span>
  </div>
  <div class="pure-browser-content">
    <div>
      <h1>Welcome Back</h1>
      <p>Sign in to your account</p>
      <input type="text" placeholder="Username" style="width: 82px;" readonly />
      <input type="password" value="pass" style="width: 72px;" readonly />
      <button>Sign In</button>
    </div>
  </div>
</div>

<p class="text-[0.62rem] text-slate-500 mt-2">
  Notice: in pure HTML, inputs and button sit inline side-by-side! We need CSS to stack them and polish the card.
</p>

---
layout: section
icon: palette
sub: Presentation, spatial discipline, and surface styling
---

<!-- Slide 12 -->

# 02 — CSS & the 6 properties

---
layout: default
icon: palette
dense: true
---

<!-- Slide 13 -->

# What is CSS?

**CSS** stands for **Cascading Style Sheets**. It is the language used to style the visual presentation of an HTML document.

<div class="grid grid-cols-2 gap-4 my-3 text-xs">
  <div class="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2">
    <div class="font-bold text-teal-950 text-xs">HTML vs. CSS</div>
    <ul class="text-[0.68rem] text-slate-700 space-y-1.5 list-disc pl-3">
      <li><strong>HTML:</strong> Provides the raw content, tags, and semantic structure (the skeleton).</li>
      <li><strong>CSS:</strong> Controls colors, typography, sizing, spacing, and layout alignment (the skin &amp; clothes).</li>
      <li><strong>Separation of Concerns:</strong> Keeping content and presentation separate makes designs clean and easy to maintain.</li>
    </ul>
  </div>
  <div class="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
    <div class="font-bold text-slate-900 text-xs">Made of Properties</div>
    <p class="text-[0.68rem] text-slate-600 leading-relaxed">
      CSS styles are written using declarations called <strong>properties</strong>.
    </p>
    <p class="text-[0.68rem] text-slate-600 leading-relaxed">
      Each property controls one specific visual rule (such as background color or font size) applied to targeted HTML tags.
    </p>
    <div class="p-2 rounded bg-slate-50 border border-slate-200 font-mono text-[0.64rem] text-teal-800">
      selector { property: value; }
    </div>
  </div>
</div>

<div class="p-2 rounded-lg bg-slate-100 border border-slate-200 text-[0.65rem] text-slate-700">
  <strong>The Power of CSS:</strong> The exact same HTML structure can be completely transformed into a modern mobile app, a dashboard, or a storefront simply by changing its CSS rules.
</div>

---
layout: default
icon: palette
dense: true
---

<!-- Slide 14 -->

# What is a CSS property? Syntax & categories

A **CSS property** is an identifier that targets a specific visual or layout characteristic of an element.

<div class="grid grid-cols-2 gap-4 my-3 text-xs">
  <div class="space-y-3">
    <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
      <div class="font-bold text-slate-900 text-xs mb-1.5">CSS Rule Syntax</div>
      <div class="p-2.5 rounded-lg bg-slate-900 text-white font-mono text-[0.7rem] mb-2">
        <span class="text-amber-400">div</span> {<br>
        &nbsp;&nbsp;<span class="text-teal-400">background-color</span>: <span class="text-blue-300">white</span>;<br>
        }
      </div>
      <div class="grid grid-cols-3 gap-1 text-center text-[0.58rem]">
        <div class="p-1 rounded bg-amber-50 border border-amber-200 font-semibold text-amber-800">Selector (div)</div>
        <div class="p-1 rounded bg-teal-50 border border-teal-200 font-semibold text-teal-800">Property</div>
        <div class="p-1 rounded bg-blue-50 border border-blue-200 font-semibold text-blue-800">Value (white)</div>
      </div>
    </div>
    <div class="p-3 rounded-xl border border-teal-200 bg-teal-50/50">
      <div class="font-bold text-teal-950 text-xs mb-1">Example: background-color</div>
      <p class="text-[0.66rem] text-slate-700 leading-relaxed">
        Sets the surface fill color behind the element's content. Changes transparent default backgrounds to solid card surfaces (e.g. <code>white</code> or <code>#1d4ed8</code>).
      </p>
    </div>
  </div>
  <div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
    <div>
      <div class="font-bold text-slate-900 text-xs mb-2">Three Kinds of CSS Properties</div>
      <div class="space-y-2 text-[0.66rem] text-slate-700">
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-bold text-slate-900 mb-0.5">1. Layout Flow Properties</div>
          <p class="text-slate-600 mb-0.5">Define how elements arrange and stack on screen.</p>
          <code class="text-teal-700 font-mono text-[0.62rem]">display: flex; flex-direction: column;</code>
        </div>
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-bold text-slate-900 mb-0.5">2. Spacing &amp; Box Model Properties</div>
          <p class="text-slate-600 mb-0.5">Control inner cushioning and outer gaps between elements.</p>
          <code class="text-blue-700 font-mono text-[0.62rem]">padding: 24px; margin-bottom: 12px;</code>
        </div>
        <div class="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div class="font-bold text-slate-900 mb-0.5">3. Surface &amp; Typography Properties</div>
          <p class="text-slate-600 mb-0.5">Control colors, corner rounding, and typographic scale.</p>
          <code class="text-indigo-700 font-mono text-[0.62rem]">background-color: white; border-radius: 8px; font-size: 20px;</code>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
icon: palette
dense: true
---

<!-- Slide 15 -->

# Today we will learn 6 core CSS properties

These 6 properties give you complete control over layout flow, spatial discipline, and surface styling:

<div class="grid grid-cols-3 gap-3 my-3 text-xs">
  <div class="p-3 rounded-xl border border-teal-200 bg-teal-50/50">
    <code class="text-teal-800 font-mono font-bold text-xs block mb-1">display: flex;</code>
    <div class="font-bold text-teal-950 text-[0.68rem] mb-0.5">Layout Flow</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Switches container into flexible auto-layout mode to align and stack children.
    </p>
  </div>
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50">
    <code class="text-blue-800 font-mono font-bold text-xs block mb-1">padding</code>
    <div class="font-bold text-blue-950 text-[0.68rem] mb-0.5">Inner Cushion</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Space inside the border; creates comfortable breathing room and touch targets.
    </p>
  </div>
  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50">
    <code class="text-indigo-800 font-mono font-bold text-xs block mb-1">margin</code>
    <div class="font-bold text-indigo-950 text-[0.68rem] mb-0.5">Outer Spacing</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Space outside the border; pushes neighboring elements away.
    </p>
  </div>
  <div class="p-3 rounded-xl border border-purple-200 bg-purple-50/50">
    <code class="text-purple-800 font-mono font-bold text-xs block mb-1">border-radius</code>
    <div class="font-bold text-purple-950 text-[0.68rem] mb-0.5">Corner Rounding</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Softens sharp 90-degree corners on card frames, inputs, and buttons.
    </p>
  </div>
  <div class="p-3 rounded-xl border border-amber-200 bg-amber-50/50">
    <code class="text-amber-800 font-mono font-bold text-xs block mb-1">font-size</code>
    <div class="font-bold text-amber-950 text-[0.68rem] mb-0.5">Typographic Scale</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Sets text size in pixels to establish visual hierarchy between titles and copy.
    </p>
  </div>
  <div class="p-3 rounded-xl border border-rose-200 bg-rose-50/50">
    <code class="text-rose-800 font-mono font-bold text-xs block mb-1">background-color</code>
    <div class="font-bold text-rose-950 text-[0.68rem] mb-0.5">Surface Color</div>
    <p class="text-[0.62rem] text-slate-600 leading-snug">
      Applies solid fill colors to cards, buttons, and background containers.
    </p>
  </div>
</div>

<div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[0.65rem] text-slate-700">
  Next, we examine each property in action to turn our unstyled skeleton into a polished card.
</div>

---
layout: split
title: "Layout Flow — display: flex"
icon: lifecycle
dense: true
---

<!-- Slide 16 -->

### From Inline to Vertical Auto-Layout

By default, `<input>` and `<button>` sit inline horizontally.

Applying `display: flex; flex-direction: column;` creates a vertical stacking layout:

```css
div {
  display: flex;
  flex-direction: column;
}
```

- **Vertical Flow:** Children stack top-to-bottom automatically.
- **Full Width:** Fields expand to match the card container width.

::right::

<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="p-2.5 rounded-lg border border-rose-200 bg-rose-50/60">
    <div class="text-[0.62rem] font-bold text-rose-800 mb-1">Default (Inline)</div>
    <div class="p-2 bg-white rounded border border-slate-300 text-[0.55rem] space-x-1">
      <span class="border p-0.5">Input</span>
      <span class="border p-0.5">Input</span>
      <span class="border p-0.5">Btn</span>
    </div>
    <div class="text-[0.55rem] text-slate-500 mt-1">Crammed side-by-side</div>
  </div>
  <div class="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50/60">
    <div class="text-[0.62rem] font-bold text-emerald-800 mb-1">display: flex (column)</div>
    <div class="p-2 bg-white rounded border border-slate-300 text-[0.55rem] space-y-1">
      <div class="border p-0.5">Email Address</div>
      <div class="border p-0.5">Password</div>
      <div class="border p-0.5">Sign In</div>
    </div>
    <div class="text-[0.55rem] text-slate-500 mt-1">Clean vertical flow!</div>
  </div>
</div>

---
layout: split
title: The Box Model — padding vs. margin
icon: lifecycle
dense: true
---

<!-- Slide 17 -->

### Inside Spacing vs. Outside Spacing

Every web element is a rectangular box:

- **`padding` (Inside):**
  - Space between content and border.
  - Creates inner breathing room and finger-friendly touch targets.

- **`margin` (Outside):**
  - Space outside the border.
  - Pushes neighboring elements apart.

```css
div { padding: 24px; }
input { margin-bottom: 12px; }
```

::right::

<div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 text-xs space-y-2">
  <div class="font-bold text-blue-900 text-xs uppercase tracking-wide">The Box Model Visualized</div>
  <div class="p-2.5 bg-amber-100 border border-amber-300 rounded text-center">
    <span class="text-[0.62rem] font-bold text-amber-800 uppercase block mb-1">margin (outer gap)</span>
    <div class="p-2.5 bg-emerald-100 border-2 border-emerald-400 rounded text-center">
      <span class="text-[0.62rem] font-bold text-emerald-800 uppercase block mb-1">padding (inner cushion)</span>
      <div class="p-2 bg-white rounded border border-slate-400 text-[0.68rem] font-semibold text-slate-800">
        Element Content (Text / Input)
      </div>
    </div>
  </div>
  <p class="text-[0.68rem] text-slate-600">
    <strong>Golden Rule:</strong> Use <code>padding</code> to size the inside of boxes. Use <code>margin</code> to separate boxes from each other.
  </p>
</div>

---
layout: split
title: Surfaces & Scale — Visual Polish
icon: palette
dense: true
---

<!-- Slide 18 -->

### Matching the Figma Inspector

Three core properties bring your design to life:

- **`border-radius: 8px;` (Corner Rounding)**
  - Softens sharp 90-degree corners on cards, inputs, and buttons.

- **`font-size: 20px;` (Typographic Scale)**
  - Sets visual hierarchy between headline (`20px`) and subtitle (`13px`).

- **`background-color: white;` (Surface Color)**
  - Sets card surface (`white`) and CTA brand color (`#1d4ed8`).

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2.5">
  <div class="font-bold text-slate-900">Before & After Visual Properties:</div>
  <div class="p-2.5 bg-slate-200 rounded text-xs space-y-1 text-slate-700">
    <div class="text-[0.6rem] font-bold text-slate-500 uppercase">Without Styles</div>
    <div class="border border-black p-0.5 bg-white text-[0.6rem] inline-block">Sharp 0px square</div>
    <button class="border border-black bg-slate-300 text-[0.6rem] px-1">Raw button</button>
  </div>
  <div class="p-2.5 bg-white rounded-xl border border-blue-200 shadow-sm text-xs space-y-1.5">
    <div class="text-[0.6rem] font-bold text-blue-700 uppercase">With Visual Polish</div>
    <input type="text" placeholder="Soft 8px rounded field" class="w-full p-1.5 rounded-lg border border-slate-300 text-[0.65rem] bg-slate-50" readonly />
    <button class="w-full py-1.5 bg-blue-700 text-white rounded-lg text-[0.65rem] font-semibold">Styled CTA Button</button>
  </div>
</div>

---
layout: split
title: The Complete Styled Card — 25 Lines
icon: code
dense: true
---

<!-- Slide 19 -->

<div class="slidev-code-compact">
```html
<style>
  div {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 24px;
    border-radius: 12px;
  }
  h1 { font-size: 20px; margin-bottom: 4px; }
  p { font-size: 13px; color: #64748b; margin-bottom: 16px; }
  input {
    padding: 10px 14px;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
  }
  button {
    padding: 12px;
    background-color: #1d4ed8;
    color: white;
    border-radius: 8px;
    font-size: 14px;
  }
</style>

<div>
  <h1>Welcome Back</h1>
  <p>Sign in to your account</p>
  <input type="email" placeholder="Email Address">
  <input type="password" placeholder="Password">
  <button>Sign In</button>
</div>
```
</div>

::right::

<div class="p-4 rounded-xl border border-blue-200 bg-slate-100 flex flex-col items-center justify-center h-full">
  <div class="w-64 rounded-xl border border-slate-200 bg-white shadow-md p-4 space-y-2 text-xs">
    <div class="font-bold text-slate-900 text-sm">Welcome Back</div>
    <div class="text-[0.65rem] text-slate-500 -mt-1.5">Sign in to your account</div>
    <div class="space-y-1.5 pt-1">
      <input type="email" placeholder="Email Address" class="w-full p-2 text-xs rounded-lg border border-slate-200 bg-slate-50" readonly />
      <input type="password" value="secret123" class="w-full p-2 text-xs rounded-lg border border-slate-200 bg-slate-50" readonly />
    </div>
    <button class="w-full py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg mt-2">Sign In</button>
  </div>
  <div class="mt-2 text-[0.68rem] text-slate-500 font-medium">Rendered live in Chrome/Edge</div>
</div>

---
layout: default
icon: tools
dense: true
---

<!-- Slide 20 -->

# A glimpse of what HTML & CSS offer

Browsers include rich native UI controls requiring **zero JavaScript or external libraries**:

<div class="mt-2.5 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
  <div class="grid grid-cols-12 bg-slate-100 border-b border-slate-200 px-3 py-2 text-[0.66rem] font-bold text-slate-700 uppercase tracking-wider">
    <div class="col-span-7">HTML Tag &amp; Syntax</div>
    <div class="col-span-5">Live Browser Widget</div>
  </div>
  <div class="divide-y divide-slate-100 text-xs">
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;select&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Dropdown menu</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;select&gt;&lt;option&gt;...&lt;/option&gt;</code>
      </div>
      <div class="col-span-5 flex items-center">
        <select class="px-2 py-0.5 text-xs rounded border border-slate-300 bg-white text-slate-800 font-sans cursor-pointer w-36">
          <option>Select City...</option>
          <option>Cairo</option>
          <option>Berlin</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;input type="date"&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Calendar picker</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;input type="date"&gt;</code>
      </div>
      <div class="col-span-5 flex items-center">
        <input type="date" value="2026-10-10" class="px-2 py-0.5 text-xs rounded border border-slate-300 bg-white text-slate-800 font-sans w-36" />
      </div>
    </div>
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;input type="color"&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Color picker</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;input type="color" value="..."&gt;</code>
      </div>
      <div class="col-span-5 flex items-center gap-2">
        <input type="color" value="#1d4ed8" class="w-8 h-6 rounded border border-slate-300 cursor-pointer bg-white p-0.5" />
        <span class="text-[0.65rem] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">#1d4ed8</span>
      </div>
    </div>
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;input type="range"&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Slider control</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;input type="range" min="0" max="100"&gt;</code>
      </div>
      <div class="col-span-5 flex items-center gap-2">
        <input type="range" min="0" max="100" value="70" class="w-32 cursor-pointer accent-blue-600" />
        <span class="text-[0.65rem] font-mono text-slate-600">70%</span>
      </div>
    </div>
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;details&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Collapsible FAQ</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;details&gt;&lt;summary&gt;...&lt;/summary&gt;</code>
      </div>
      <div class="col-span-5 flex items-center">
        <details class="text-[0.68rem] bg-slate-50 px-2 py-0.5 rounded border border-slate-200 w-52">
          <summary class="font-semibold cursor-pointer text-slate-700">Terms &amp; Conditions</summary>
          <div class="text-[0.6rem] text-slate-500 mt-0.5">Built-in expand/collapse without JS!</div>
        </details>
      </div>
    </div>
    <div class="grid grid-cols-12 items-center px-3 py-1.5 hover:bg-slate-50/60">
      <div class="col-span-7 flex items-center gap-2">
        <code class="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-bold text-[0.68rem] border border-blue-200/60">&lt;progress&gt;</code>
        <span class="font-bold text-slate-800 text-[0.7rem]">Progress bar</span>
        <span class="text-slate-300 font-mono text-[0.65rem]">&bull;</span>
        <code class="text-[0.64rem] text-slate-500 font-mono">&lt;progress value="75" max="100"&gt;</code>
      </div>
      <div class="col-span-5 flex items-center gap-2">
        <progress value="75" max="100" class="w-32 h-2.5 rounded overflow-hidden accent-blue-600"></progress>
        <span class="text-[0.65rem] font-mono text-slate-600">75%</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
icon: tools
dense: true
---

<!-- Slide 21 -->

# For full docs: Check MDN Web Docs

Professional developers do not memorize every HTML tag or CSS property—they consult **MDN Web Docs**.

<div class="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between my-3 shadow-md">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
      <div class="i-simple-icons-mdnwebdocs text-2xl text-white"></div>
    </div>
    <div>
      <div class="font-bold text-sm leading-tight flex items-center gap-2">
        MDN Web Docs by Mozilla
        <span class="i-simple-icons-mozilla text-base text-white/80"></span>
      </div>
      <div class="text-[0.68rem] text-slate-300">The authoritative reference for HTML, CSS, JavaScript, and Web APIs</div>
    </div>
  </div>
  <a href="https://developer.mozilla.org" target="_blank" class="px-3 py-1.5 rounded-lg bg-blue-600 font-mono font-bold text-xs hover:bg-blue-500 no-underline" style="color: #ffffff !important;">
    developer.mozilla.org
  </a>
</div>

<div class="grid grid-cols-4 gap-2.5 text-xs">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">HTML Elements</div>
    <p class="text-[0.62rem] text-slate-600 mb-1">Alphabetical index of all 100+ native HTML tags.</p>
    <code class="text-[0.58rem] text-blue-700">MDN HTML elements</code>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">CSS Properties</div>
    <p class="text-[0.62rem] text-slate-600 mb-1">Syntax, valid values, and interactive playgrounds.</p>
    <code class="text-[0.58rem] text-blue-700">MDN CSS reference</code>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Flexbox Guide</div>
    <p class="text-[0.62rem] text-slate-600 mb-1">Visual tutorials for flex direction, align, and justify.</p>
    <code class="text-[0.58rem] text-blue-700">MDN CSS flexbox</code>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <div class="font-bold text-slate-900 text-xs mb-1">Box Model Guide</div>
    <p class="text-[0.62rem] text-slate-600 mb-1">Mastering margin, border, padding, and content.</p>
    <code class="text-[0.58rem] text-blue-700">MDN box model</code>
  </div>
</div>

---
layout: default
icon: activity
dense: true
---

<!-- Slide 22 -->

# In-Class Activity — Build your sign-up card (30 mins)

This activity is **not graded**—use this time to build muscle memory and ask TA questions:

<div class="grid grid-cols-2 gap-4 mt-3 text-xs">
  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
    <div class="font-bold text-slate-900 text-sm">Practice Challenge</div>
    <ul class="text-[0.7rem] text-slate-700 pl-3.5 space-y-1.5">
      <li><strong>File:</strong> Create <code>signup.html</code> in Notepad (or your plain text editor).</li>
      <li><strong>Container:</strong> Wrap inside <code>&lt;div&gt;</code> with <code>display: flex; flex-direction: column;</code></li>
      <li><strong>Typography:</strong> Add <code>&lt;h1&gt;Create Account&lt;/h1&gt;</code> and a <code>&lt;p&gt;</code> subtitle.</li>
      <li><strong>3 Fields:</strong> Full Name (<code>text</code>), Email (<code>email</code>), and Password (<code>password</code>).</li>
      <li><strong>Action Button:</strong> <code>&lt;button&gt;Create Account&lt;/button&gt;</code> styled with blue background.</li>
      <li><strong>Box Model:</strong> Add <code>padding</code> inside the card and <code>margin-bottom</code> on inputs.</li>
    </ul>
  </div>
  <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between">
    <div>
      <div class="font-bold text-emerald-900 text-sm mb-1">Ungraded Practice Goals</div>
      <div class="text-[0.68rem] text-emerald-800 space-y-1.5">
        <div>Raise your hand and call a TA if:</div>
        <div>&bull; Your file opens as plain text instead of rendering as a webpage.</div>
        <div>&bull; Your inputs sit side-by-side instead of stacking vertically.</div>
        <div>&bull; You want feedback on spacing or CSS box-model padding.</div>
      </div>
    </div>
    <div class="p-2 rounded-lg bg-white border border-emerald-300 text-center font-bold text-emerald-700 text-xs">
      Duration: 30 Minutes
    </div>
  </div>
</div>

---
layout: default
icon: lifecycle
dense: true
---

<!-- Slide 23 -->

# Take-Home Assignment — Mobile Home Screen (Graded)

Each student receives a **cryptographically unique target screen** generated from their Student ID:

<div class="grid grid-cols-3 gap-3.5 mt-3 text-xs">
  <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
    <div>
      <div class="text-blue-700 font-bold mb-1">1. Individualized Mockup</div>
      <p class="text-[0.62rem] text-slate-600 leading-relaxed mb-1.5">
        Visit the generator portal, enter your Student ID <span class="whitespace-nowrap">(e.g. <span class="font-mono font-bold text-blue-900">19006583</span>)</span>, and download your 3-page brief:
      </p>
      <a href="https://youneszied.github.io/ICA_lab_5_Assignment-/" target="_blank" class="text-[0.52rem] font-mono font-bold text-blue-700 bg-white px-1.5 py-0.5 rounded border border-blue-200 block truncate no-underline" style="color: #1d4ed8 !important;">
        youneszied.github.io/ICA_lab_5_Assignment-/ ↗
      </a>
    </div>
    <div class="text-[0.58rem] text-blue-800 font-semibold pt-1 border-t border-blue-200 flex items-center justify-between">
      <span>Zero code sharing</span>
      <span class="text-blue-600 font-bold">Portal ↗</span>
    </div>
  </div>
  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/50 flex flex-col justify-between">
    <div>
      <div class="text-indigo-700 font-bold mb-1">2. Pure HTML &amp; CSS Rules</div>
      <p class="text-[0.66rem] text-slate-600 leading-relaxed">
        Single self-contained file named <span class="font-mono font-bold text-indigo-900">19006583.html</span>. Native Unicode emojis only, zero external images or frameworks.
      </p>
    </div>
    <div class="text-[0.6rem] text-indigo-800 font-semibold pt-1 border-t border-indigo-200">
      Strict asset policy
    </div>
  </div>
  <div class="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
    <div>
      <div class="text-amber-800 font-bold mb-1">3. Automated CI Grading</div>
      <p class="text-[0.66rem] text-slate-600 leading-relaxed">
        Scored out of 100 points: Structure (40 Pts), Layout &amp; Styling (40 Pts), Academic Integrity (20 Pts).
      </p>
    </div>
    <div class="text-[0.6rem] text-amber-900 font-semibold pt-1 border-t border-amber-200">
      Headless evaluation
    </div>
  </div>
</div>

<div class="mt-4 p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
  <div>
    <div class="font-bold text-sm">Submission Deadline: Exactly 1 Week</div>
    <div class="text-[0.68rem] text-slate-400">Submit your single <code>&lt;StudentID&gt;.html</code> file via Microsoft Forms before next lab.</div>
  </div>
  <div class="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider">
    7 Days Remaining
  </div>
</div>

---
layout: default
dense: true
---

<!-- Slide 24 -->

<div class="flex flex-col items-center justify-center text-center -mt-6">
  <div class="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Lab 05 Assignment Submission Form</div>
  <div class="p-3 bg-white rounded-3xl border-2 border-indigo-200 shadow-xl inline-block mb-2.5">
    <img src="/lab-05-submission-qr.png" alt="Lab 05 Submission QR Code" class="w-[330px] h-[330px] object-contain" />
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

---
layout: refs
icon: references
dense: true
---

<!-- Slide 25 -->

## Essential Web Documentation

- [MDN Web Docs — The div Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) — universal container and content division
- [MDN Web Docs — The input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) — complete index of input types and attributes
- [MDN Web Docs — Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) — mastering flex-direction, align-items, and gap

## Visual Styling Guides

- [MDN Web Docs — The CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) — understanding margin vs padding
- [MDN Web Docs — border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) — rounding box corners
- [MDN Web Docs — background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) — applying surface and container colors

<div class="giu-refs__note">Keep MDN bookmarked as you explore new tags and attributes for your take-home assignment!</div>

---
layout: end
image: /img/illustrations/thank-you.png
sub: Practice in class today, explore MDN, and submit your assignment in 1 week!
---

<!-- Slide 26 -->
