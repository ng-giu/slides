# 🍔 Talabat Mobile UI Design System & Starter Kit

> **Course:** Information & Communication Architecture (ICA) — Lab 03 & Project Deliverable 2 (PD2)  
> **Institution:** German International University (GIU) • Faculty of Informatics & Computer Science  
> **Target Device:** iPhone 15 / Modern Mobile Viewport (`393 × 852 px`)  
> **Template URL:** `https://www.figma.com/community/file/1685465148190554592`  
> **Brand Guidelines (PDF):** `https://drive.google.com/file/d/16Q8km7oc1fVimUW-6GjubpxlQoFVw47g/view?usp=sharing`  

---

## 📌 Community Publish Metadata

- **File Name:** `Talabat Mobile UI Design System & Starter Kit — ICA Lab 03 [GIU]`
- **Category:** `Design systems` / `Education`
- **Figma Community Tags:** `#DesignSystem` `#MobileUI` `#AutoLayout` `#Talabat` `#FoodDelivery` `#FigmaTutorial` `#UIUX` `#GIU` `#Education`

---

## 📝 Overview & Purpose

Welcome to the official **Talabat Mobile UI Starter Kit**! This file is engineered to guide students through the transition from structural **Information Architecture (IA)** and low-fidelity wireframes into high-fidelity, production-grade mobile UI screens using Figma's **Auto-Layout** and **Component Architecture**.

Students will design for a standardized mobile viewport (`393 × 852 px`) adhering to the official Talabat brand identity, an 8-point spatial rhythm, and WCAG AA accessibility standards.

---

## 📂 What’s Inside This File?

The starter kit file is organized into 4 structured pages:

* **🗺️ Page 1 — Site Map & IA Diagrams:**  
  Complete user flow and content hierarchy mapping the core delivery journey: `Home ➔ Food Delivery Feed ➔ Restaurant Menu`.
* **📐 Page 2 — Wireframes:**  
  Pixel-precise grayscale wireframe blueprints for all three screens, defining layout bounds, content groupings, and scannable visual anchors.
* **🎨 Page 3 — Design Tokens & Component Library:**
  * **Brand Colors:** Talabat Orange (`#FF5A00`), Deep Navy (`#0F172A`), Slate (`#64748B`), and functional semantic tokens.
  * **Typography Styles:** Pre-configured text styles using the **Poppins** font family (from `display-24` down to `micro-badge-10`).
  * **8pt Spatial Grid:** Standard spacing tokens (`4px`, `8px`, `12px`, `16px`, `24px`) and corner radii (`radius-6`, `radius-12`, `radius-16`, `radius-full`).
  * **Raw Asset Library:** Official Talabat vector logos, UI icons, cuisine category badges, and curated food photography.
  * **Master Components:** Dedicated workshop area to build and store your master components (`Search Bar`, `Category Tile`, `Restaurant Card`, `Dish Card`, `Bottom Navigation`).
* **✏️ Page 4 — Student Workspace:**  
  Your active design canvas containing empty mobile frames ready for assembling your high-fidelity UI screens.

---

## 🎯 In-Class Assignment Scope

This is a **Graded In-Class Assignment (100 Points)**:

| Screen | Type | Status | Key UI Elements |
| :--- | :--- | :--- | :--- |
| **Screen 1: Home** | Core | **Mandatory (50%)** | Location header, search input, 5 service icons, promo banner carousel, vouchers card, bottom navigation. |
| **Screen 2: Food Delivery** | Core | **Mandatory (50%)** | Top navigation bar, deals card row, cuisine category circles, filter pill bar, restaurant feed cards. |
| **Screen 3: Restaurant Menu** | Extension | **★ BONUS (+Extra Credit)** | Hero cover photo, floating restaurant info badge, category tabs, 2-column dish card grid, sticky checkout order bar. |

---

## ⚖️ Grading Criteria & Evaluation Rubric

Your submission will be evaluated out of **100%** across four core pillars:

1. **UX & Visual Hierarchy (25%):**  
   Application of Gestalt grouping, clear typographic dominance, WCAG AA contrast compliance ($\ge 4.5:1$ for body copy), and consistent 8pt spatial rhythm.
2. **Auto-Layout Execution (25%):**  
   **Zero static groups or loose shapes** — 100% of elements must live inside Auto-Layout frames (`Shift + A`). Proper use of `Hug Contents` on dynamic buttons/pills and `Fill Container` on responsive cards/inputs.
3. **Component Architecture (25%):**  
   Clean master-to-instance inheritance. All Main Components must reside exclusively on **Page 3 (Assets)**; your screens on **Page 4** must contain **strictly component instances**.
4. **Brand Authenticity (25%):**  
   Faithful adherence to the Talabat design system guidelines, official color tokens, uniform corner radii, and curated photography.

---

## 📐 Mobile Typography System (Poppins)

All text layers in this template must adhere to the official Poppins typographic scale:

| Token Name | Size / Line Height | Weight | Tracking | Screen Context |
| :--- | :--- | :--- | :--- | :--- |
| `display-24` | 24px / 30px | Bold (700) | -0.02em | Hero headers, feed banners |
| `title-lg-18` | 18px / 24px | SemiBold (600) | -0.01em | Restaurant title, modal header |
| `title-md-15` | 15px / 20px | SemiBold (600) | 0.0em | Section subheads, dish title |
| `button-cta-14` | 14px / 20px | SemiBold (600) | +0.01em | Primary CTA buttons, order bar |
| `subhead-13` | 13px / 18px | Medium (500) | 0.0em | Search placeholder, tabs |
| `body-regular-13` | 13px / 18px | Regular (400) | 0.0em | Dish descriptions, body copy |
| `caption-11` | 11px / 15px | Medium (500) | +0.01em | Delivery ETA, rating counts |
| `micro-badge-10` | 10px / 13px | Bold (700) | +0.05em | Promo chips, badges (FAST, PRO) |

---

## 🔍 Student Self-Audit Protocol (Before TA Evaluation)

Before calling a TA for grading checkoff, execute these 4 tests:

1. **Resizing Stress Test:** Select your screen frame on Page 4 and drag the width from `393px` to `420px`. Do all cards, inputs, and rows stretch smoothly using `Fill Container` without visual clipping?
2. **Master Component Audit:** Inspect every element on Page 4. Are they all component instances (single hollow diamond icon in the layer tree)? Confirm zero master components were placed directly on Page 4.
3. **Multi-Screen Reuse Check:** Confirm that Screen 2 and Screen 3 reuse the Bottom Navigation and Card components established on Page 3.
4. **Contrast & Rhythm:** Verify all body text meets WCAG AA contrast ($4.5:1$) against its background and all padding/margins are multiples of 8 (`8px`, `16px`, `24px`).

---

## 🚀 How to Get Started

1. Click **Duplicate to your drafts** (or **Open in Figma**) in the top right.
2. Ensure you have the **[Poppins Font Family](https://fonts.google.com/specimen/Poppins)** available in your Figma account.
3. Read the wireframe specifications on **Page 2** and the brand guidelines PDF.
4. Construct your master components on **Page 3 (Assets & Tokens)**.
5. Assemble your final screens on **Page 4 (Workspace)** using component instances.
6. Submit your Figma view link to the course portal and request in-lab TA checkoff!
