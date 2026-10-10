---
theme: ../../theme
title: BINF 301 - Lab 5 (Test) - HTML Basics & Web Document Structure
courseTitle: Information and Communication Architecture
course: BINF 301
track: Web Design and Information Architecture
semester: W2026
lab: 5
lineNumbers: true
layout: cover
---

<h1 style="max-width:70% ">Information & Communication Architecture — Lab 5 (Test) — HTML Basics & Document Structure</h1>
<!--
Welcome to Lab 05! Today we make the critical transition from visual design to web implementation. You will write pure semantic HTML from scratch using only a plain text editor (Notepad), understand how web browsers parse markup without styling, and build a fully functional sign-up form using native browser form controls.
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
| 10 min | What is HTML? The Notepad Workflow & Browser Rendering |
| 20 min | Document Anatomy, Text Semantics & Document Flow |
| 20 min | HTML Forms: Labels, Inputs, Choices, Dropdowns & Buttons |
| 10 min | TA Live Demo: Building a Pure HTML Form in Notepad |
| 25 min | **Graded In-Class Sprint:** Build a User Sign-Up Page in Notepad |
| 5 min | Self-Audit Checklist, Validation & Submission |

---
layout: section
icon: intro
sub: From visual frames to raw markup text
---

# 01 — What is HTML & the Notepad workflow

---
layout: default
icon: intro
dense: true
---

# The role of HTML in the web stack

Websites are built from three distinct layers. Today, we focus exclusively on **structure**.

<div class="grid grid-cols-3 gap-3 mt-4">
  <div class="p-3.5 rounded-xl border-2 border-indigo-500 bg-indigo-50/50">
    <div class="text-[0.72rem] font-bold text-indigo-700 uppercase tracking-wide mb-1">01. Structure</div>
    <div class="text-[1.05rem] font-bold text-slate-900 mb-1">HTML</div>
    <div class="text-[0.62rem] text-slate-600 leading-relaxed">
      Defines content, document hierarchy, headings, paragraphs, images, links, and form fields.
    </div>
    <div class="mt-2 text-[0.58rem] font-bold text-indigo-800">Our Focus Today</div>
  </div>

  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 opacity-60">
    <div class="text-[0.72rem] font-bold text-slate-500 uppercase tracking-wide mb-1">02. Presentation</div>
    <div class="text-[1.05rem] font-bold text-slate-700 mb-1">CSS</div>
    <div class="text-[0.62rem] text-slate-600 leading-relaxed">
      Controls colors, typography, spacing, responsive flexbox layout, and visual appearance.
    </div>
    <div class="mt-2 text-[0.58rem] text-slate-500 italic">Excluded in this lab</div>
  </div>

  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 opacity-60">
    <div class="text-[0.72rem] font-bold text-slate-500 uppercase tracking-wide mb-1">03. Behavior</div>
    <div class="text-[1.05rem] font-bold text-slate-700 mb-1">JavaScript</div>
    <div class="text-[0.62rem] text-slate-600 leading-relaxed">
      Handles client-side logic, interactivity, DOM manipulation, animations, and API requests.
    </div>
    <div class="mt-2 text-[0.58rem] text-slate-500 italic">Excluded in this lab</div>
  </div>
</div>

<div class="mt-3.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[0.64rem] text-amber-900 leading-relaxed">
  <strong>Key Takeaway:</strong> HTML is <em>HyperText Markup Language</em>. It is not a programming language—there are no variables, loops, or functions. It marks up text to tell the browser what each piece of content represents.
</div>

---
layout: default
icon: tools
dense: true
---

# Why build with Notepad?

Modern web tools often hide how web browsers actually interpret code. Writing in a bare text editor builds true foundational understanding.

<div class="grid grid-cols-2 gap-3.5 mt-3">
  <div class="p-3 rounded-xl border border-rose-200 bg-rose-50/40">
    <div class="text-[0.75rem] font-bold text-rose-800 mb-1.5">What we avoid today</div>
    <ul class="text-[0.62rem] text-slate-700 space-y-1.5 leading-relaxed list-disc pl-4">
      <li><strong>No IDE autocompletion (Emmet):</strong> Typing tags manually ensures you master the exact syntax.</li>
      <li><strong>No CSS frameworks:</strong> Bootstrap or Tailwind hide the native browser layout model.</li>
      <li><strong>No Live Server extensions:</strong> You learn how the browser reads files from disk.</li>
      <li><strong>No build tools:</strong> No npm, Node, or Vite required to view HTML.</li>
    </ul>
  </div>

  <div class="p-3 rounded-xl border border-emerald-200 bg-emerald-50/40">
    <div class="text-[0.75rem] font-bold text-emerald-800 mb-1.5">What you learn</div>
    <ul class="text-[0.62rem] text-slate-700 space-y-1.5 leading-relaxed list-disc pl-4">
      <li><strong>The raw browser engine:</strong> A webpage is just a text file with a <code>.html</code> extension.</li>
      <li><strong>User-Agent styling:</strong> How the browser renders unstyled elements out of the box.</li>
      <li><strong>Native form controls:</strong> How buttons, checkboxes, and inputs behave with zero styling.</li>
      <li><strong>Precision:</strong> Missing a closing bracket breaks rendering immediately, teaching attention to detail.</li>
    </ul>
  </div>
</div>

<!--
Writing HTML in Notepad demystifies the web. You realize that every website in the world started as a text stream delivered to a browser engine.
-->

---
layout: default
icon: tools
dense: true
---

# The Notepad development cycle

Follow this 4-step workflow for all exercises in today's lab.

<div class="grid grid-cols-4 gap-2.5 mt-3 text-center">
  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="w-7 h-7 mx-auto rounded-full bg-slate-100 text-slate-800 font-bold text-[0.8rem] flex items-center justify-center mb-2">1</div>
    <div class="font-bold text-[0.7rem] text-slate-900 mb-1">Open Notepad</div>
    <div class="text-[0.58rem] text-slate-600 leading-snug">
      Launch Windows Notepad (or macOS TextEdit in plain text mode: <code>Cmd + Shift + T</code>).
    </div>
  </div>

  <div class="p-3 rounded-xl border border-indigo-200 bg-indigo-50/40 shadow-xs">
    <div class="w-7 h-7 mx-auto rounded-full bg-indigo-600 text-white font-bold text-[0.8rem] flex items-center justify-center mb-2">2</div>
    <div class="font-bold text-[0.7rem] text-indigo-950 mb-1">Save as .html</div>
    <div class="text-[0.58rem] text-slate-600 leading-snug">
      Go to <strong>File &gt; Save As</strong>.<br>
      Set file type to <strong>All Files (*.*)</strong>.<br>
      Name it <code>signup.html</code>.
    </div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="w-7 h-7 mx-auto rounded-full bg-slate-100 text-slate-800 font-bold text-[0.8rem] flex items-center justify-center mb-2">3</div>
    <div class="font-bold text-[0.7rem] text-slate-900 mb-1">Open in Browser</div>
    <div class="text-[0.58rem] text-slate-600 leading-snug">
      Double-click <code>signup.html</code> or drag it into Chrome or Edge.
    </div>
  </div>

  <div class="p-3 rounded-xl border border-teal-200 bg-teal-50/40 shadow-xs">
    <div class="w-7 h-7 mx-auto rounded-full bg-teal-600 text-white font-bold text-[0.8rem] flex items-center justify-center mb-2">4</div>
    <div class="font-bold text-[0.7rem] text-teal-950 mb-1">Edit &amp; Refresh</div>
    <div class="text-[0.58rem] text-slate-600 leading-snug">
      Edit in Notepad, press <code>Ctrl + S</code> to save, then press <code>F5</code> in the browser.
    </div>
  </div>
</div>

<div class="mt-4 p-2.5 rounded-lg border border-red-200 bg-red-50 text-[0.62rem] text-red-900 leading-relaxed">
  <strong>Common Mistake:</strong> If your file saves as <code>signup.html.txt</code>, it will open as text instead of a webpage. Always ensure the Save As dialog has <strong>Save as type: All Files (*.*)</strong> selected.
</div>

---
layout: code
title: "The HTML5 document boilerplate"
dense: true
---

Every HTML document must follow this minimal standard skeleton:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>GIU Student Portal - Sign Up</title>
  </head>
  <body>
    <h1>Welcome to GIU Portal</h1>
    <p>Please fill out the form below to create your student account.</p>
  </body>
</html>
```

<div class="grid grid-cols-2 gap-3 mt-3 text-[0.6rem] text-slate-700">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <strong>Document Declaration &amp; Root:</strong>
    <ul class="list-disc pl-3.5 mt-1 space-y-0.5">
      <li><code>&lt;!DOCTYPE html&gt;</code> tells the browser to parse as modern HTML5.</li>
      <li><code>&lt;html lang="en"&gt;</code> wraps all content and defines the primary language.</li>
    </ul>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <strong>Head vs. Body:</strong>
    <ul class="list-disc pl-3.5 mt-1 space-y-0.5">
      <li><code>&lt;head&gt;</code> contains metadata (charset, tab title, page info)—never visible on page.</li>
      <li><code>&lt;body&gt;</code> contains all visible content displayed inside the browser viewport.</li>
    </ul>
  </div>
</div>

---
layout: default
icon: intro
dense: true
---

# Anatomy of an HTML element

An HTML element typically consists of an opening tag, optional attributes, content, and a closing tag.

<div class="p-4 rounded-xl border border-slate-200 bg-white shadow-xs my-3 flex items-center justify-center gap-2 font-mono text-[0.85rem]">
  <span class="text-blue-600 font-bold">&lt;p</span>
  <span class="text-amber-600 font-semibold">id="intro"</span>
  <span class="text-blue-600 font-bold">&gt;</span>
  <span class="text-slate-900 font-sans">Welcome to our community!</span>
  <span class="text-blue-600 font-bold">&lt;/p&gt;</span>
</div>

<div class="grid grid-cols-3 gap-3 text-[0.62rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-900 mb-0.5">1. Opening &amp; Closing Tags</div>
    <div class="text-slate-600 leading-snug">
      The opening tag starts the element (<code>&lt;p&gt;</code>); the closing tag includes a forward slash (<code>&lt;/p&gt;</code>).
    </div>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-900 mb-0.5">2. Attributes</div>
    <div class="text-slate-600 leading-snug">
      Provide additional settings or identifiers (e.g. <code>id="intro"</code>, <code>type="email"</code>). Always use lowercase names with double quotes.
    </div>
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-900 mb-0.5">3. Content &amp; Nesting</div>
    <div class="text-slate-600 leading-snug">
      The text or other nested elements wrapped inside. Proper closing order is mandatory: <code>&lt;p&gt;&lt;strong&gt;text&lt;/strong&gt;&lt;/p&gt;</code>.
    </div>
  </div>
</div>

<div class="mt-3 p-2 rounded-lg bg-blue-50 border border-blue-200 text-[0.62rem] text-blue-900">
  <strong>Void Elements:</strong> Some elements do not wrap content and do not have closing tags. Examples: <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>.
</div>

---
layout: section
icon: code
sub: Headings, paragraphs, lists, links, and browser flow
---

# 02 — Content elements & document flow

---
layout: split
title: "Headings & text hierarchy"
dense: true
icon: code
---

Headings communicate the **information architecture** of your page, not visual sizing.

- HTML provides six levels: `<h1>` through `<h6>`.
- `<h1>` is the primary document title (**use exactly one per page**).
- `<h2>` defines major sections.
- `<h3>` defines sub-sections inside an `<h2>`.
- Do not skip levels (e.g. do not jump from `<h1>` directly to `<h4>`).

```html
<h1>Main Portal Title</h1>
<p>Introductory paragraph describing the service.</p>

<h2>Account Registration</h2>
<p>Fill out the credentials below.</p>
```

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
  <div class="text-[0.62rem] font-bold text-slate-500 uppercase tracking-wide mb-2">Browser Default Rendering</div>
  <div class="space-y-2 border border-slate-200 p-3 rounded-lg bg-slate-50/50">
    <div class="text-[1.3rem] font-bold text-black leading-tight">Main Portal Title</div>
    <div class="text-[0.64rem] text-slate-800">Introductory paragraph describing the service.</div>
    <div class="text-[1.05rem] font-bold text-black leading-tight mt-2">Account Registration</div>
    <div class="text-[0.64rem] text-slate-800">Fill out the credentials below.</div>
  </div>
</div>

---
layout: code
title: "Paragraphs, breaks & text semantics"
dense: true
---

HTML distinguishes between layout breaks and semantic text meaning.

```html
<p>The German International University offers applied software engineering curricula.</p>
<p>Classes are held at the New Administrative Capital campus.</p>

<!-- Thematic break: horizontal rule -->
<hr>

<!-- Line break inside paragraph -->
<p>GIU Admissions Office<br>Building M2, Campus Drive<br>Cairo, Egypt</p>

<!-- Semantic text formatting -->
<p><strong>Warning:</strong> Your password must contain at least <em>8 characters</em>.</p>
```

<div class="grid grid-cols-2 gap-3 mt-3 text-[0.62rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <strong><code>&lt;strong&gt;</code> vs. <code>&lt;b&gt;</code>:</strong>
    <code>&lt;strong&gt;</code> conveys serious importance to screen readers and browsers; <code>&lt;b&gt;</code> is purely stylistic bolding without semantic weight.
  </div>
  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
    <strong><code>&lt;em&gt;</code> vs. <code>&lt;i&gt;</code>:</strong>
    <code>&lt;em&gt;</code> indicates stress emphasis, changing the sentence's spoken meaning; <code>&lt;i&gt;</code> is stylistic italic text (such as technical terms).
  </div>
</div>

---
layout: split
title: "Lists & hyperlinks"
dense: true
icon: code
---

Lists group related items; links connect pages together.

**Unordered List (`<ul>`):**
Bullet points for collections with no numerical sequence.

**Ordered List (`<ol>`):**
Numbered steps for sequential instructions.

**Hyperlinks (`<a>`):**
Use the `href` attribute to specify the destination URL.

```html
<h3>Registration Checklist:</h3>
<ul>
  <li>Valid national ID card</li>
  <li>Active university email</li>
</ul>

<h3>Steps to complete:</h3>
<ol>
  <li>Enter your credentials</li>
  <li>Confirm your email</li>
</ol>

<p>Need help? <a href="https://giu-uni.de" target="_blank">Visit GIU Portal</a>.</p>
```

::right::

<div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
  <div class="text-[0.62rem] font-bold text-slate-500 uppercase tracking-wide mb-2">Browser Default Rendering</div>
  <div class="p-3 border border-slate-200 rounded-lg bg-slate-50/50 text-[0.65rem] text-slate-900 space-y-2">
    <div class="font-bold">Registration Checklist:</div>
    <ul class="list-disc pl-4 space-y-0.5">
      <li>Valid national ID card</li>
      <li>Active university email</li>
    </ul>
    <div class="font-bold mt-2">Steps to complete:</div>
    <ol class="list-decimal pl-4 space-y-0.5">
      <li>Enter your credentials</li>
      <li>Confirm your email</li>
    </ol>
    <div class="mt-2 text-slate-700">
      Need help? <span class="text-blue-700 underline cursor-pointer">Visit GIU Portal</span>.
    </div>
  </div>
</div>

---
layout: default
icon: intro
dense: true
---

# Block vs. inline vs. void display flow

Without CSS, the browser formats elements using strict default layout rules.

<div class="grid grid-cols-3 gap-3 mt-3">
  <div class="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/40 flex flex-col justify-between">
    <div>
      <div class="text-[0.7rem] font-bold text-indigo-900 mb-1">Block-level Elements</div>
      <div class="text-[0.62rem] text-slate-600 mb-2 leading-snug">
        Always start on a new line and stretch to fill 100% of the parent width.
      </div>
      <div class="p-2 rounded bg-white border border-indigo-200 font-mono text-[0.58rem] text-indigo-900 space-y-1">
        <div>&lt;h1&gt; ... &lt;/h6&gt;</div>
        <div>&lt;p&gt;</div>
        <div>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</div>
        <div>&lt;form&gt;, &lt;fieldset&gt;</div>
        <div>&lt;div&gt;</div>
      </div>
    </div>
    <div class="mt-2 text-[0.56rem] font-bold text-indigo-800">Stack vertically by default</div>
  </div>

  <div class="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
    <div>
      <div class="text-[0.7rem] font-bold text-amber-900 mb-1">Inline Elements</div>
      <div class="text-[0.62rem] text-slate-600 mb-2 leading-snug">
        Sit side-by-side inside lines of text. Only occupy as much width as their content needs.
      </div>
      <div class="p-2 rounded bg-white border border-amber-200 font-mono text-[0.58rem] text-amber-900 space-y-1">
        <div>&lt;a&gt;</div>
        <div>&lt;strong&gt;, &lt;em&gt;</div>
        <div>&lt;span&gt;</div>
        <div>&lt;label&gt;</div>
      </div>
    </div>
    <div class="mt-2 text-[0.56rem] font-bold text-amber-800">Flow horizontally with text</div>
  </div>

  <div class="p-3.5 rounded-xl border border-slate-300 bg-slate-50 flex flex-col justify-between">
    <div>
      <div class="text-[0.7rem] font-bold text-slate-900 mb-1">Void (Self-Closing) Elements</div>
      <div class="text-[0.62rem] text-slate-600 mb-2 leading-snug">
        Elements that cannot contain child elements or text. No closing tag allowed.
      </div>
      <div class="p-2 rounded bg-white border border-slate-300 font-mono text-[0.58rem] text-slate-800 space-y-1">
        <div>&lt;input&gt;</div>
        <div>&lt;br&gt;</div>
        <div>&lt;hr&gt;</div>
        <div>&lt;img&gt;</div>
        <div>&lt;meta&gt;</div>
      </div>
    </div>
    <div class="mt-2 text-[0.56rem] font-bold text-slate-700">Never write &lt;/input&gt;</div>
  </div>
</div>

---
layout: section
icon: code
sub: Constructing interactive user input workflows
---

# 03 — HTML forms & form controls

---
layout: default
icon: code
dense: true
---

# The HTML `<form>` container

The `<form>` element wraps all controls and defines how data is packaged and sent.

<div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs font-mono text-[0.7rem] my-3">
  <span class="text-blue-600 font-bold">&lt;form</span> 
  <span class="text-amber-600 font-semibold">action="submit.html"</span> 
  <span class="text-purple-600 font-semibold">method="POST"</span><span class="text-blue-600 font-bold">&gt;</span><br>
  &nbsp;&nbsp;<span class="text-slate-500">&lt;!-- Form fields, labels, fieldsets, and submit button --&gt;</span><br>
  <span class="text-blue-600 font-bold">&lt;/form&gt;</span>
</div>

<div class="grid grid-cols-2 gap-3.5 text-[0.62rem]">
  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-900 mb-1">The <code>action</code> Attribute</div>
    <div class="text-slate-600 leading-relaxed">
      Specifies the URL or file path where the submitted data will be sent for processing. In our static lab exercise, you can set <code>action="#"</code>.
    </div>
  </div>

  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
    <div class="font-bold text-slate-900 mb-1">The <code>method</code> Attribute</div>
    <div class="text-slate-600 leading-relaxed">
      Specifies the HTTP method used to send data:
      <ul class="list-disc pl-4 mt-1 space-y-0.5">
        <li><strong>GET:</strong> Appends form data to the URL (useful for search queries).</li>
        <li><strong>POST:</strong> Sends data in the HTTP request body (mandatory for passwords and registration).</li>
      </ul>
    </div>
  </div>
</div>

---
layout: split
title: "The golden rule of forms: label binding"
dense: true
icon: code
---

**Every input field must be paired with an explicit `<label>`.**

1. Set the `<label for="xxx">` attribute.
2. Set the input's `<input id="xxx">` to match.
3. Set `<input name="fieldName">` for form data submission.

```html
<!-- CORRECT: Explicitly connected -->
<label for="student-email">Email Address:</label>
<input type="email" id="student-email" name="email">

<!-- Click anywhere on "Email Address:" and the cursor immediately jumps into the input box! -->
```

<div class="mt-3 p-2 rounded-lg bg-red-50 border border-red-200 text-[0.6rem] text-red-900">
  <strong>Anti-pattern:</strong> Writing <code>&lt;p&gt;Email:&lt;/p&gt;&lt;input&gt;</code> without a label breaks screen readers and destroys click-to-focus accessibility.
</div>

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
  <div class="text-[0.62rem] font-bold text-slate-500 uppercase tracking-wide mb-2">Why this matters</div>
  <div class="space-y-2 text-[0.62rem] text-slate-700">
    <div class="p-2 rounded border border-indigo-100 bg-indigo-50/50">
      <strong class="text-indigo-900">1. Usability &amp; Mobile Taps:</strong><br>
      Clicking the label text activates the control, crucial for small checkboxes and radio buttons.
    </div>
    <div class="p-2 rounded border border-teal-100 bg-teal-50/50">
      <strong class="text-teal-900">2. Accessibility (a11y):</strong><br>
      Screen readers announce the label when a user tabs into the input field.
    </div>
    <div class="p-2 rounded border border-amber-100 bg-amber-50/50">
      <strong class="text-amber-900">3. Graded Requirement:</strong><br>
      Points are deducted if any input lacks a paired <code>for</code>/<code>id</code> attribute.
    </div>
  </div>
</div>

---
layout: code
title: "Text input types & native attributes"
dense: true
---

The browser provides built-in validation based on the `type` attribute:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="e.g. yzied" required>

<label for="user-email">Email:</label>
<input type="email" id="user-email" name="email" required>

<label for="user-pwd">Password:</label>
<input type="password" id="user-pwd" name="password" minlength="8" required>

<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="birthdate">
```

<div class="mt-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-[0.6rem] text-slate-700 flex justify-between">
  <span><code>required</code>: Browser blocks submission if empty.</span>
  <span><code>placeholder</code>: Faint hint text inside the box.</span>
  <span><code>minlength="8"</code>: Enforces minimum character count.</span>
</div>

---
layout: split
title: "Radio buttons & checkboxes"
dense: true
icon: code
---

**Radio buttons (`type="radio"`):**
Used when the user must pick **exactly one** option from a list.
- **Rule:** All radio buttons in the group **must share the same `name` attribute**.

**Checkboxes (`type="checkbox"`):**
Used for independent binary choices (can check zero, one, or multiple).

```html
<p>Choose Account Type:</p>
<input type="radio" id="student" name="role" value="student" checked>
<label for="student">Student</label><br>

<input type="radio" id="instructor" name="role" value="instructor">
<label for="instructor">Instructor</label><br>

<p>Agreements:</p>
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">I agree to the Terms of Service</label><br>

<input type="checkbox" id="newsletter" name="newsletter">
<label for="newsletter">Subscribe to weekly digest</label>
```

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
  <div class="text-[0.62rem] font-bold text-slate-500 uppercase tracking-wide mb-2">Browser Default Rendering</div>
  <div class="p-3 border border-slate-200 rounded-lg bg-slate-50/50 text-[0.65rem] space-y-2 text-slate-900">
    <div><strong>Choose Account Type:</strong></div>
    <div class="space-y-1">
      <div><input type="radio" checked disabled> <span class="font-medium">Student</span></div>
      <div><input type="radio" disabled> <span class="font-medium">Instructor</span></div>
    </div>
    <div class="pt-2 border-t border-slate-200"><strong>Agreements:</strong></div>
    <div class="space-y-1">
      <div><input type="checkbox" disabled> <span class="font-medium">I agree to the Terms of Service</span></div>
      <div><input type="checkbox" checked disabled> <span class="font-medium">Subscribe to weekly digest</span></div>
    </div>
  </div>
</div>

---
layout: split
title: "Dropdowns & multiline text"
dense: true
icon: code
---

**Dropdown Menu (`<select>` & `<option>`):**
Provides a compact menu to pick one value from many.

**Multiline Text (`<textarea>`):**
Used when a single-line `<input>` is too small (e.g. bio, feedback, address).

```html
<label for="campus-city">Campus Location:</label>
<select id="campus-city" name="campus" required>
  <option value="">-- Please choose an option --</option>
  <option value="cairo">Cairo (New Capital)</option>
  <option value="berlin">Berlin</option>
  <option value="munich">Munich</option>
</select>

<br><br>

<label for="bio">Short Biography:</label><br>
<textarea id="bio" name="biography" rows="4" cols="35" placeholder="Tell us about yourself..."></textarea>
```

::right::

<div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
  <div class="text-[0.62rem] font-bold text-slate-500 uppercase tracking-wide mb-2">Browser Default Rendering</div>
  <div class="p-3 border border-slate-200 rounded-lg bg-slate-50/50 text-[0.65rem] space-y-2 text-slate-900">
    <div><label class="font-bold">Campus Location:</label></div>
    <div class="p-1 border border-slate-300 rounded bg-white inline-block">
      Cairo (New Capital) &#9662;
    </div>
    <div class="pt-2">
      <label class="font-bold">Short Biography:</label>
    </div>
    <div class="p-2 border border-slate-300 rounded bg-white text-slate-400 text-[0.6rem] h-16 w-full">
      Tell us about yourself...
    </div>
  </div>
</div>

---
layout: code
title: "Structuring forms with fieldset & legend"
dense: true
---

`<fieldset>` and `<legend>` organize long forms into clear visual sections using **pure native browser styling**—no CSS needed!

```html
<fieldset>
  <legend>Account Credentials</legend>
  
  <label for="user-email">Email:</label>
  <input type="email" id="user-email" name="email" required><br><br>
  
  <label for="user-pass">Password:</label>
  <input type="password" id="user-pass" name="password" required>
</fieldset>
```

<div class="mt-3 p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/40 text-[0.62rem] text-indigo-900">
  <strong>Native Browser Magic:</strong> The browser automatically draws a crisp outer border around the <code>&lt;fieldset&gt;</code> and embeds the <code>&lt;legend&gt;</code> title directly into the top boundary line.
</div>

---
layout: default
icon: code
dense: true
---

# Form submission buttons

A form requires an explicit action trigger to execute validation and submit data.

<div class="grid grid-cols-2 gap-3.5 my-3">
  <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
    <div class="text-[0.75rem] font-bold text-emerald-950 mb-1">Submit Button</div>
    <div class="text-[0.62rem] text-slate-600 mb-2 leading-snug">
      Validates all input rules (required, email format, minlength) and submits the form data.
    </div>
    <div class="p-2 rounded bg-white border border-emerald-200 font-mono text-[0.62rem] text-emerald-900 mb-2">
      &lt;button type="submit"&gt;Register Account&lt;/button&gt;
    </div>
    <div class="text-[0.58rem] text-slate-500">Alternative: <code>&lt;input type="submit" value="Register Account"&gt;</code></div>
  </div>

  <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
    <div class="text-[0.75rem] font-bold text-slate-900 mb-1">Reset Button</div>
    <div class="text-[0.62rem] text-slate-600 mb-2 leading-snug">
      Clears all fields and restores the form to its original default values.
    </div>
    <div class="p-2 rounded bg-white border border-slate-200 font-mono text-[0.62rem] text-slate-800 mb-2">
      &lt;button type="reset"&gt;Reset Form&lt;/button&gt;
    </div>
    <div class="text-[0.58rem] text-slate-500">Alternative: <code>&lt;input type="reset" value="Reset Form"&gt;</code></div>
  </div>
</div>

<div class="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[0.62rem] text-amber-900 leading-relaxed">
  <strong>Warning:</strong> Always specify <code>type="submit"</code> or <code>type="button"</code> on buttons. If you omit the type attribute inside a form, the default browser behavior treats it as <code>type="submit"</code>, which can cause unexpected form submissions!
</div>

---
layout: section
icon: tools
sub: Step-by-step walkthrough in plain Windows Notepad
---

# 04 — TA live demo

---
layout: default
icon: tools
dense: true
---

# TA live demo: building a form in Notepad

Your TA will now demonstrate writing, saving, and verifying a form in real time:

<div class="grid grid-cols-3 gap-3 my-3">
  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="text-[0.7rem] font-bold text-slate-900 mb-1.5">1. Boilerplate &amp; Save</div>
    <ul class="text-[0.58rem] text-slate-600 space-y-1 list-disc pl-3.5 leading-snug">
      <li>Open Windows Notepad.</li>
      <li>Type <code>&lt;!DOCTYPE html&gt;</code> and basic tags.</li>
      <li>Save as <code>demo.html</code> with Encoding: UTF-8.</li>
      <li>Open in Chrome side-by-side with Notepad.</li>
    </ul>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="text-[0.7rem] font-bold text-slate-900 mb-1.5">2. Inputs &amp; Fieldsets</div>
    <ul class="text-[0.58rem] text-slate-600 space-y-1 list-disc pl-3.5 leading-snug">
      <li>Add <code>&lt;form action="#" method="POST"&gt;</code>.</li>
      <li>Add a <code>&lt;fieldset&gt;</code> with <code>&lt;legend&gt;</code>.</li>
      <li>Write a label with <code>for="user"</code> and input with <code>id="user"</code>.</li>
      <li>Add a submit button.</li>
    </ul>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="text-[0.7rem] font-bold text-slate-900 mb-1.5">3. Verification</div>
    <ul class="text-[0.58rem] text-slate-600 space-y-1 list-disc pl-3.5 leading-snug">
      <li>Save in Notepad (<code>Ctrl + S</code>).</li>
      <li>Refresh Chrome (<code>F5</code>).</li>
      <li><strong>Click the label text:</strong> observe input focus.</li>
      <li>Attempt to submit empty required fields: observe native browser validation tooltips.</li>
    </ul>
  </div>
</div>

<div class="p-2.5 rounded-lg border border-indigo-200 bg-indigo-50/50 text-[0.62rem] text-indigo-950 font-medium">
  Observe how clean and fast the cycle is: no compilation time, no servers, no dependencies.
</div>

---
layout: section
icon: activity
sub: Build a complete user registration page from scratch
---

# 05 — Graded in-class sprint

---
layout: activity
title: "In-class assignment: the pure HTML sign-up page"
label: "Graded Sprint • 25 Minutes"
dense: true
---

Create a file named `signup.html` using **only Notepad**. Construct a complete, accessible account registration page.

<div class="p-3 rounded-xl border-2 border-red-300 bg-red-50/50 mb-3 text-[0.64rem] text-red-950">
  <strong>STRICT CONSTRAINTS (Automatic deduction if violated):</strong>
  <ul class="list-disc pl-4 mt-1 space-y-0.5">
    <li><strong>Zero CSS allowed:</strong> No <code>&lt;style&gt;</code> tags, no inline <code>style="..."</code> attributes, no external CSS files.</li>
    <li><strong>No styling elements:</strong> No <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code>, or color attributes.</li>
    <li><strong>Notepad only:</strong> Must be written in Windows Notepad or a basic plain text editor.</li>
    <li><strong>Every input must have an explicit <code>&lt;label for="..."&gt;</code></strong> matching the input's <code>id</code>.</li>
  </ul>
</div>

<div class="grid grid-cols-3 gap-2.5 text-[0.58rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <strong class="text-slate-900 text-[0.64rem] block mb-1">Group 1: Credentials</strong>
    <ul class="list-disc pl-3.5 space-y-0.5 text-slate-700">
      <li>Username (text, required)</li>
      <li>Email address (email, required)</li>
      <li>Password (password, minlength 8, required)</li>
      <li>Confirm Password (password, required)</li>
    </ul>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <strong class="text-slate-900 text-[0.64rem] block mb-1">Group 2: Personal Info</strong>
    <ul class="list-disc pl-3.5 space-y-0.5 text-slate-700">
      <li>Full Name (text, required)</li>
      <li>Date of Birth (date)</li>
      <li>Role: 2 Radio buttons (Student / Staff) sharing <code>name="role"</code></li>
      <li>City: Dropdown (select) with 4+ options</li>
      <li>Short Bio: Multiline <code>&lt;textarea&gt;</code></li>
    </ul>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white">
    <strong class="text-slate-900 text-[0.64rem] block mb-1">Group 3: Submit</strong>
    <ul class="list-disc pl-3.5 space-y-0.5 text-slate-700">
      <li>Terms Checkbox (required)</li>
      <li>Newsletter Checkbox (optional)</li>
      <li>Submit button (type="submit")</li>
      <li>Reset button (type="reset")</li>
      <li>Organized into <code>&lt;fieldset&gt;</code> tags</li>
    </ul>
  </div>
</div>

---
layout: default
icon: activity
dense: true
---

# Complete structural wireframe in HTML

Here is the exact architectural hierarchy your `signup.html` must follow:

<div class="grid grid-cols-2 gap-3 mt-2">
  <div class="p-3 rounded-lg border border-slate-700 bg-slate-900 text-slate-100 font-mono text-[0.52rem] leading-relaxed">
    <div class="text-indigo-400 font-bold mb-1">// Part 1: Head &amp; Credentials</div>
    &lt;!DOCTYPE html&gt;<br>
    &lt;html lang="en"&gt;<br>
    &nbsp;&nbsp;&lt;head&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Sign Up - GIU Portal&lt;/title&gt;<br>
    &nbsp;&nbsp;&lt;/head&gt;<br>
    &nbsp;&nbsp;&lt;body&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Create an Account&lt;/h1&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Register for student services.&lt;/p&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;hr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;form action="#" method="POST"&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;fieldset&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Account Credentials&lt;/legend&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Username, Email, Password --&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fieldset&gt;
  </div>
  <div class="p-3 rounded-lg border border-slate-700 bg-slate-900 text-slate-100 font-mono text-[0.52rem] leading-relaxed">
    <div class="text-indigo-400 font-bold mb-1">// Part 2: Profile &amp; Submission</div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;fieldset&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Personal Details &amp; Profile&lt;/legend&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Full Name, DOB, Role radios, Bio --&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fieldset&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;fieldset&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Agreements &amp; Confirmation&lt;/legend&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Terms checkbox, Submit/Reset --&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fieldset&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br>
    &nbsp;&nbsp;&lt;/body&gt;<br>
    &lt;/html&gt;
  </div>
</div>

---
layout: default
icon: activity
dense: true
---

# Grading rubric (10 points total)

Your in-lab grade is calculated against this strict checklist:

<div class="space-y-2 mt-3 text-[0.62rem]">
  <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between shadow-xs">
    <div>
      <strong class="text-slate-900">1. Boilerplate &amp; Document Structure</strong>
      <div class="text-slate-600">Valid HTML5 skeleton (doctype, html, head, title, body) with proper tag closure.</div>
    </div>
    <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">2 Points</span>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between shadow-xs">
    <div>
      <strong class="text-slate-900">2. Form Architecture &amp; Fieldsets</strong>
      <div class="text-slate-600">Single <code>&lt;form&gt;</code> wrapping 3 distinct <code>&lt;fieldset&gt;</code> sections with informative <code>&lt;legend&gt;</code> titles.</div>
    </div>
    <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">2 Points</span>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between shadow-xs">
    <div>
      <strong class="text-slate-900">3. Control Variety &amp; Native Types</strong>
      <div class="text-slate-600">All required controls present: text, email, password, date, radio group, select dropdown, textarea, checkbox, submit, and reset.</div>
    </div>
    <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">3 Points</span>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between shadow-xs">
    <div>
      <strong class="text-slate-900">4. Label Accessibility &amp; Binding</strong>
      <div class="text-slate-600">Every input has an explicit <code>&lt;label for="id"&gt;</code>. TA will click on label text to verify input focus.</div>
    </div>
    <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">2 Points</span>
  </div>

  <div class="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between shadow-xs">
    <div>
      <strong class="text-slate-900">5. Strict Zero-CSS Compliance</strong>
      <div class="text-slate-600">Completely unstyled user-agent rendering. No CSS or styling tags included.</div>
    </div>
    <span class="font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">1 Point</span>
  </div>
</div>

---
layout: default
icon: activity
dense: true
---

# Pre-submission self-audit checklist

Before calling your TA, perform this 5-point verification in your browser:

<div class="grid grid-cols-2 gap-3 mt-3 text-[0.62rem]">
  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="font-bold text-indigo-900 mb-1.5 flex items-center gap-1.5">
      <span class="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono">1</span>
      Label Click-to-Focus Test
    </div>
    <div class="text-slate-600 leading-relaxed">
      Click directly on the text of each label (e.g., click the words "Email Address"). Does the cursor jump into the box? For radios and checkboxes, does clicking the word toggle the button?
    </div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="font-bold text-indigo-900 mb-1.5 flex items-center gap-1.5">
      <span class="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono">2</span>
      Radio Mutual Exclusivity
    </div>
    <div class="text-slate-600 leading-relaxed">
      Click "Student", then click "Staff". Does selecting one automatically uncheck the other? If both stay selected, your <code>name</code> attributes do not match!
    </div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="font-bold text-indigo-900 mb-1.5 flex items-center gap-1.5">
      <span class="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono">3</span>
      Validation Test
    </div>
    <div class="text-slate-600 leading-relaxed">
      Leave all fields blank and click "Register". Does the browser show a tooltip saying "Please fill out this field"? Type "invalid-email" in email—does it require an <code>@</code>?
    </div>
  </div>

  <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-xs">
    <div class="font-bold text-indigo-900 mb-1.5 flex items-center gap-1.5">
      <span class="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono">4</span>
      Zero Styling Check
    </div>
    <div class="text-slate-600 leading-relaxed">
      View source (<code>Ctrl + U</code>). Verify there are no <code>&lt;style&gt;</code> tags, inline styles, or external stylesheets. The page must look completely raw and native.
    </div>
  </div>
</div>

---
layout: default
dense: true
---

<div class="flex flex-col items-center justify-center text-center -mt-4">
  <div class="text-[0.7rem] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Lab 05 Submission Form</div>
  <div class="p-3 bg-white rounded-3xl border-2 border-indigo-200 shadow-xl inline-block mb-2.5">
    <img src="/giu-logo.png" alt="GIU Logo" class="w-[200px] h-[200px] object-contain" />
  </div>
  <div class="mb-1.5">
    <a href="https://forms.cloud.microsoft" target="_blank" class="px-5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm inline-flex items-center gap-1.5 transition no-underline" style="color: #ffffff !important; text-decoration: none !important;">
      <span style="color: #ffffff !important; font-weight: 700; font-size: 0.72rem;">Open Microsoft Forms Submission ↗</span>
    </a>
  </div>
  <div class="text-[0.62rem] text-slate-600 max-w-md mx-auto">
    Upload your completed <code>signup.html</code> file to the submission form and call your Teaching Assistant for in-lab evaluation and grade recording.
  </div>
</div>

<!--
Submit your signup.html file to the form and call a TA for in-lab evaluation.
-->

---
layout: refs
icon: references
dense: true
---

# Lab 05 Core Resources

- **MDN Web Docs — HTML Basics:**  
  [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- **MDN Web Docs — Your First HTML Form:**  
  [https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- **MDN Web Docs — The HTML Form Element:**  
  [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- **MDN Web Docs — HTML Input Types:**  
  [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- **W3C Nu HTML Checker:**  
  [https://validator.w3.org/nu/](https://validator.w3.org/nu/)

---
layout: end
image: /img/illustrations/thank-you.png
---

# Thank you!

See you next lab for **CSS Fundamentals & Box Model Styling**!
