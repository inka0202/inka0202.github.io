# ZenPetals — Website Specification

### Accessible Wellness & Spa Booking Website

---

## 1. Project Identity

| Field       | Details                                                    |
| ----------- | ---------------------------------------------------------- |
| **Name**    | ZenPetals                                                  |
| **Tagline** | _Book your calm. At your pace._                            |
| **Type**    | Static multi-page website with a functional booking form   |
| **Pages**   | Home, Booking Form, About                                  |
| **Course**  | Integrative Design — Autism-Friendly Web Design Assignment |

---

## 2. Goal

The goal of ZenPetals is to provide a **calm, predictable, and fully accessible** online booking experience for a wellness and spa centre. The website is designed specifically to meet the needs of autistic users, following the guidelines established in the _Designing for the Autism Spectrum_ presentation. Every design and content decision serves to lower cognitive load, reduce sensory stress, and give the user full control over their experience.

---

## 3. Theme

ZenPetals uses a **soft, earth-toned visual language** inspired by nature — warm creams, sage greens, dusty blues, and muted caramel accents. The aesthetic communicates stillness, warmth, and safety. There are no sharp contrasts, no vivid neons, no sudden surprises. The interface feels like a quiet room.

**Design language keywords:** still, warm, trustworthy, minimal, literal, spacious.

---

## 4. Purpose

ZenPetals serves two purposes simultaneously:

1. **User-facing:** Allow visitors to learn about the spa, its services, and the team — and to book a wellness appointment easily and without anxiety.
2. **Academic:** Demonstrate a rigorous application of autism-friendly web design principles across a complete, multi-page website with a functional form — proving that accessible design and beautiful design are not in conflict.

---

## 5. Autism-Friendly Design Rules Applied

The following 14 rules are drawn directly from the course presentation. Each rule is listed with a precise implementation note describing exactly how it is applied on ZenPetals.

---

### Rule 01 · Typography That Does Not Strain

**Guideline:** Body text minimum 16–18px; line-height 1.5–1.7; left-aligned, never justified; sans-serif or humanist serif; max line length 60–75 characters. Avoid ALL CAPS in body, italics in long paragraphs, and decorative fonts.

**How we follow it on ZenPetals:**
Body text is set at **18px** using **Atkinson Hyperlegible** (the accessibility-first typeface designed by the Braille Institute), with a line-height of **1.7**. All text is left-aligned. Headings use **Lora** (a humanist serif) at clear hierarchical sizes. No paragraph text is in capitals or italics. Line length is kept within 65 characters via a `max-width` constraint on all content containers. Decorative fonts are never used.

---

### Rule 02 · Calm, Muted Color Palette

**Guideline:** Use off-white backgrounds, desaturated accent colors, earth tones, dusty blues, sage greens. Avoid pure white (#ffffff), neon colors, vivid reds, electric blues, rainbow gradients on CTAs.

**How we follow it on ZenPetals:**
The site background is **#f8f5ee** (warm off-white cream). Accent colors are **sage green (#7a9170)**, **dusty blue (#6b8a9b)**, and **muted caramel (#c89262)**. No pure white or neon hue appears anywhere in the interface. Call-to-action buttons use a subdued sage or caramel fill. The color palette is validated visually in grayscale — all meaning still holds without color.

---

### Rule 03 · Contrast Ratios

**Guideline:** Body text minimum 4.5:1 (WCAG AA). Aim for 7:1–12:1 as a sweet spot. Do not use pure black on pure white (21:1 — too harsh). UI components minimum 3:1.

**How we follow it on ZenPetals:**
The primary text color is **#1f2937** (dark slate) on the cream background **#f8f5ee**, giving a contrast ratio of approximately **10.5:1** — well within the sweet spot range of 7–12:1. It avoids the harshness of pure black (#000) on pure white (#fff). All interactive elements (buttons, input borders, form labels) meet the 3:1 minimum for UI components. Contrast is verified using WebAIM Contrast Checker.

---

### Rule 04 · Layout and Spacing

**Guideline:** Generous whitespace; clear heading hierarchy; chunked content (short sections, not walls of text); single-column layout for forms and reading.

**How we follow it on ZenPetals:**
Every page section has generous top and bottom padding (minimum 64px). Content is broken into small, clearly separated sections — never a wall of text. Headings appear before every new concept. The booking form is a strict single column from top to bottom. The home page uses a single-column reading flow for all written content. Visual "breathing room" is treated as a design priority, not an afterthought.

---

### Rule 05 · Predictable Navigation

**Guideline:** Same navigation in the same position on every page; show current page location (aria-current, visible active state); linear flows for multi-step tasks; provide a sitemap.

**How we follow it on ZenPetals:**
The navigation bar appears at the top of every page in identical position. The active page link is visually distinguished (underline + color change) and marked with `aria-current="page"` in the HTML. Navigation links are: **Home**, **Booking**, **About** — in the same order on all three pages. There are no dropdown menus. A sitemap link is included in the footer. No navigation element hides on scroll.

---

### Rule 06 · Motion — Less Is More

**Guideline:** Transitions max 300ms, no bouncy easing; pause control for animations longer than 5 seconds; no parallax, no auto-scroll, no infinite loops; always honor `prefers-reduced-motion`.

**How we follow it on ZenPetals:**
The only animation on ZenPetals is a gentle **opacity fade-in** on page load (200ms, `ease-in-out`). There is no parallax, no looping animation, no scroll-triggered movement. The following CSS is present on every page:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This means users who have enabled "Reduce Motion" in their operating system will see a completely static interface.

---

### Rule 07 · No Autoplay

**Guideline:** No video autoplay, no auto-rotating carousels, no surprise notifications or pop-ups. If video exists, show a poster image with a visible play button.

**How we follow it on ZenPetals:**
ZenPetals contains no video content and no carousels. There are no pop-up banners, no cookie consent pop-ups with sound, and no browser notification requests. If an ambient background image is used on the Home page, it is a static photograph — never a video or GIF. No content changes without an explicit user action.

---

### Rule 08 · No Hidden Interactions

**Guideline:** Every feature must be visible. No hover-only menus, no swipe-only gestures without visible alternatives, no undocumented keyboard shortcuts.

**How we follow it on ZenPetals:**
All interactive elements — buttons, links, form fields — are permanently visible. Hover effects add a subtle visual enhancement (color shift, underline) but are never the only way to reveal an action. The navigation is always fully expanded and visible on all screen sizes (a hamburger menu is avoided in favor of a simple horizontal nav). No features require swiping without a tappable/clickable alternative. No keyboard shortcuts are used that are not documented.

---

### Rule 09 · Icons Need Words

**Guideline:** Every icon must have a visible text label. Tooltips on hover are not enough.

**How we follow it on ZenPetals:**
Every icon in the interface is accompanied by a visible text label directly beside it — for example, a calendar icon next to the word "Booking", a leaf icon next to "Our Services". No icon is used as a standalone interactive element. Icons are decorative support elements, not the sole carriers of meaning. All icons also have `aria-hidden="true"` since the adjacent text label provides the accessible name.

---

### Rule 10 · Plain Language — Write Directly and Literally

**Guideline:** Short sentences (15–20 words); concrete words; no idioms, no sarcasm; active voice; CEFR B1 reading level (Flesch-Kincaid grade 7–8).

**How we follow it on ZenPetals:**
All website copy is written at B1 reading level. Sentences are short and direct. Example: _"Choose a service. Pick a date and time. We will confirm your booking by email."_ — not _"Embark on your wellness journey today!" (idiom) or "Don't miss out!" (urgency manipulation)_. No sarcasm or clever wordplay is used. All button labels are literal: **"Book Now"**, **"Send Booking"**, **"Go to Home"** — never vague calls to action like _"Let's get started"_. Copy is reviewed using the Hemingway Editor.

---

### Rule 11 · Error Messages That Help

**Guideline:** Every error must be Specific (not vague), Helpful (not blaming), and Actionable (not a code). Pattern: _What happened · Why it happened · What to do next._

**How we follow it on ZenPetals:**
All form validation errors follow the three-part pattern. Examples:

- Instead of _"Invalid input"_ → **"Please enter a valid email address. It should look like: name@example.com."**
- Instead of _"Required field"_ → **"We need your full name to confirm the booking. Please fill in this field."**
- Instead of _"Error 500"_ → **"We could not send your booking. Our server had a problem. Please try again in a few minutes."**

Error messages are displayed below the relevant field in a distinct color (muted red), accompanied by a text icon label ("⚠ Error:") — never by color alone.

---

### Rule 12 · Forms Without Anxiety

**Guideline:** Single column; visible labels above fields (never placeholder-only); group related fields with `<fieldset>` + `<legend>`; help text below each field before submission; no time limits; validate on blur (not on every keystroke); confirm-before-commit screen for submissions; avoid CAPTCHA, auto-formatting while typing, and asterisk-only required field markers.

**How we follow it on ZenPetals:**
The Booking Form page is a carefully structured, single-column form. Every field has a visible label above it. Required fields are marked with the word _"(required)"_ in text — not just a red asterisk. Help text appears below each field (for example: _"Format: DD/MM/YYYY"_ under the date field). Fields are grouped logically using `<fieldset>` and `<legend>`: Group 1 — Personal Details, Group 2 — Service Selection, Group 3 — Date & Time, Group 4 — Additional Notes. Validation triggers on `blur` (when the user leaves a field) — not on every keystroke. There is no CAPTCHA. There is no time limit. Before final submission, a **confirmation summary screen** shows all entered data and offers a **"Go back and edit"** button alongside the final **"Confirm Booking"** button.

---

### Rule 13 · User Control and Personalization

**Guideline:** Light/dark mode toggle (visible, persistent, respects system default); text scaling (functional at 200% zoom); reduce-motion toggle; high-contrast mode as opt-in; notification controls.

**How we follow it on ZenPetals:**
A persistent **accessibility toolbar** is visible at the top of every page containing:

- **Light / Dark mode toggle** — respects `prefers-color-scheme` by default; user choice is saved in `localStorage`
- **Reduce Motion toggle** — applies the `prefers-reduced-motion` CSS override regardless of OS setting
- **Text size increase button** — increments base font size from 18px to 22px and 26px

The entire website remains fully functional at **200% browser zoom**. There are no sounds, badges, or notifications — so no notification controls are required.

---

### Rule 14 · Validate and Test

**Guideline:** Test with autistic users; use browser simulators (DevTools, Stark, NoCoffee); cognitive walkthrough (can the user predict what happens next?); use reading-level tools (Hemingway Editor).

**How we follow it on ZenPetals:**
During development, the site is validated using:

- **Chrome DevTools** — Accessibility panel, color vision deficiency emulation (Achromatopsia, Deuteranopia), reduced motion emulation
- **axe DevTools** — automated WCAG AA accessibility audit
- **WebAIM Contrast Checker** — for all text and UI component pairs
- **Hemingway Editor** — for all body copy and form microcopy
- **Keyboard-only navigation test** — full site navigable using Tab, Enter, Space, Escape only
- **Cognitive walkthrough** — for each task (finding services, completing the form, reading the About page), the question _"Can the user predict what happens next?"_ is asked at every step

---

## 6. Pages — Content and Structure

---

### Page 1 · Home Page (`index.html`)

**Purpose:** Welcome the user, explain what ZenPetals offers, and invite them to book.

**Structure (top to bottom):**

1. **Accessibility Toolbar** — Light/dark toggle, reduce motion toggle, text size controls. Visible on all pages.
2. **Navigation Bar** — Logo (text: "ZenPetals"), links: Home (active), Booking, About. Sticky, same position on all pages.
3. **Hero Section** — A calm, full-width static photograph of a spa interior (no autoplay, no video). Headline: _"Wellness, at your pace."_ Subheading: _"Book a treatment that fits your needs. We make it simple and calm."_ One CTA button: **"Book a Treatment"** → links to Booking page.
4. **What We Offer Section** — Three service cards in a single-column list (not a carousel): Massage Therapy, Aromatherapy, Relaxation Facial. Each card has: icon + visible text label, service name (heading), 2–3 sentence description in plain language, and a price.
5. **How to Book Section** — Three numbered steps in a vertical list: 1. Choose a service. 2. Fill in the form. 3. We confirm by email. No animation. Simple, literal copy.
6. **CTA Banner** — Soft sage-green background block with the text: _"Ready to relax? Booking takes less than 3 minutes."_ Button: **"Go to Booking Form"**.
7. **Footer** — Address, phone, email (all plain text, no social media icons without labels), sitemap links (Home, Booking, About), copyright line.

---

### Page 2 · Booking Form Page (`booking.html`)

**Purpose:** Allow the user to book a spa appointment with no friction, no anxiety, and full clarity.

**Structure (top to bottom):**

1. **Accessibility Toolbar** (same as all pages)
2. **Navigation Bar** — "Booking" link marked as active with `aria-current="page"`
3. **Page Heading** — `<h1>`: "Book a Treatment". Short subheading: _"Fill in the form below. All required fields are marked (required)."_
4. **Booking Form** — Single column, structured with `<fieldset>` groups:
   - **Fieldset 1 — Your Details**
     - Full Name (required) — label above, help text: _"Enter your first and last name."_
     - Email Address (required) — label above, help text: _"We will send your confirmation here. Example: name@example.com"_
     - Phone Number (optional) — label above, help text: _"We will only call you if there is a problem with your booking."_

   - **Fieldset 2 — Choose a Service**
     - Radio buttons (not a dropdown) for: Massage Therapy / Aromatherapy / Relaxation Facial (required)
     - Each option has a visible label and a short description in brackets

   - **Fieldset 3 — Date & Time**
     - Preferred Date (required) — date picker input, help text: _"Please choose a date at least 2 days from today."_
     - Preferred Time (required) — radio buttons for time slots (09:00, 11:00, 13:00, 15:00, 17:00) — not a free-text field

   - **Fieldset 4 — Additional Notes**
     - Optional textarea — label: "Is there anything we should know?", help text: _"For example: allergies, mobility needs, or preferences. This is optional."_

5. **Submit Button** — Full-width, sage-colored, labeled **"Review My Booking"** (not "Submit" — which is ambiguous). Clicking shows the confirmation summary screen.

6. **Confirmation Summary Screen** — Appears in place of the form (not a new page). Displays all entered information clearly. Heading: _"Please check your booking details."_ Two buttons: **"Go Back and Edit"** (returns to the form with data preserved) and **"Confirm Booking"** (final submission).

7. **Success Message** — After confirming, the form area is replaced with: _"Your booking is confirmed. We will send a confirmation to [email address] within 24 hours."_

---

### Page 3 · About Page (`about.html`)

**Purpose:** Build trust by explaining who ZenPetals is, what they believe in, and who works there.

**Structure (top to bottom):**

1. **Accessibility Toolbar** (same as all pages)
2. **Navigation Bar** — "About" marked as active
3. **Page Heading** — `<h1>`: "About ZenPetals"
4. **Our Story Section** — 2–3 short paragraphs in plain language. No idioms. Explains when the spa was founded, the values (calm, inclusivity, care), and the commitment to accessible design.
5. **Our Commitment to Accessibility Section** — Explicit statement that ZenPetals is designed to be welcoming for autistic visitors, people with sensory sensitivities, and anyone who prefers a calm, predictable experience. Written in plain, literal language.
6. **Our Team Section** — 2–3 team members. Each entry: photograph (with `alt` text describing the person), name, role, one sentence about their specialty. Single-column list, no carousel.
7. **Our Location Section** — Plain text address, opening hours presented in a simple table, and a static map image are provided instead of an embedded interactive map to reduce cognitive load, prevent unexpected movement, and improve predictability for autistic users. A separate text link to Google Maps is also included.
8. **Footer** — Same as Home page.

---

## 7. Technical Specifications

| Spec                    | Value                                                                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML**                | Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<fieldset>`, `<legend>`, `<label>`)                                                                      |
| **CSS**                 | Custom CSS with CSS variables for theming; no CSS frameworks                                                                                                                      |
| **JavaScript**          | Minimal vanilla JS for: accessibility toolbar (dark mode, font size, reduce motion), form validation (on blur), confirmation screen toggle                                        |
| **Fonts**               | Atkinson Hyperlegible (body), Lora (headings) — loaded via Google Fonts                                                                                                           |
| **ARIA**                | `aria-current="page"` on active nav links; `aria-live="polite"` on error messages; `aria-describedby` linking fields to their help text; `aria-hidden="true"` on decorative icons |
| **Color scheme**        | CSS custom properties for light and dark mode; toggled via `data-theme` attribute on `<html>`                                                                                     |
| **Zoom support**        | Fully functional at 200% browser zoom; no horizontal scroll                                                                                                                       |
| **Keyboard navigation** | All interactive elements reachable and operable via Tab/Enter/Space/Escape                                                                                                        |
| **Form validation**     | Client-side, on `blur`; error messages injected via JS below each invalid field; no submission without all required fields valid                                                  |
| **No dependencies**     | No jQuery, no Bootstrap, no third-party UI libraries                                                                                                                              |

---

## 8. Color Palette

| Name            | Hex       | Usage                                |
| --------------- | --------- | ------------------------------------ |
| Warm Cream (bg) | `#f8f5ee` | Page background (light mode)         |
| Cream 2         | `#f0ebe0` | Section backgrounds, card fills      |
| Dark Slate      | `#2c3a45` | Page background (dark mode), nav bar |
| Text            | `#1f2937` | Body text                            |
| Muted           | `#4b5566` | Secondary text, descriptions         |
| Sage            | `#7a9170` | Primary accent, buttons, borders     |
| Sage Dark       | `#5e7458` | Hover states, emphasis               |
| Dusty Blue      | `#6b8a9b` | Links, info callouts                 |
| Caramel         | `#c89262` | Decorative accents, step numbers     |
| Muted Red       | `#c47a7a` | Error messages only                  |

---

## 9. Fonts

| Font                  | Role                               | Weights  |
| --------------------- | ---------------------------------- | -------- |
| Atkinson Hyperlegible | Body, labels, UI                   | 400, 700 |
| Lora                  | Headings (h1–h3), fieldset legends | 500, 600 |

---

## 10. Accessibility Checklist (Pre-Launch)

**Visual**

- [ ] Body text 18px, line-height 1.7
- [ ] Off-white background (#f8f5ee)
- [ ] Muted, low-saturation palette throughout
- [ ] Contrast ratio 7–12:1 for body text; 3:1 for UI components
- [ ] Color is never the only signal (all errors also have text labels)

**Interaction**

- [ ] Navigation is identical across all three pages
- [ ] No autoplay content anywhere on the site
- [ ] `prefers-reduced-motion` CSS media query present on every page
- [ ] No hover-only features; all actions visible without hover
- [ ] Every icon has a visible text label

**Content**

- [ ] All copy at B1 reading level (verified in Hemingway Editor)
- [ ] No idioms, no sarcasm, no ambiguous language
- [ ] Error messages are specific, helpful, and actionable
- [ ] All form fields have visible labels above (never placeholder-only)
- [ ] Booking form is single-column
- [ ] No time limits on any page or form

**Control**

- [ ] Light/dark mode toggle visible and persistent
- [ ] Text size controls functional
- [ ] Reduce motion toggle available in-page
- [ ] Full functionality at 200% browser zoom
- [ ] Full keyboard navigation verified

---

_Specification written for: Integrative Design Course — Autism-Friendly Web Design Assignment_
_Website: ZenPetals — Accessible Wellness & Spa Booking_
