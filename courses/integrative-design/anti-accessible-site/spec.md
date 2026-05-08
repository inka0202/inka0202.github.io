# 📋 WEBSITE SPECIFICATION

## Integrative Design — Anti-Accessibility Case Study

> **Disclaimer:** This website is created **exclusively for educational purposes** as part of the Integrative Design university course. It intentionally violates autism-friendly design guidelines to demonstrate the real-world impact of poor design decisions on neurodivergent users. No harm is intended.

## 🔻 Theme

**"ZenPetals"** — a chaotic, overstimulating, and deeply disorienting wellness/spa booking website that weaponizes its own "relaxation" theme against the user. The irony is intentional: a website that _claims_ to offer calm and peace but delivers sensory chaos at every interaction.

## 🔻 Purpose

The purpose of this website is to intentionally break autism-friendly web design guidelines and demonstrate how bad design negatively affects usability and accessibility. It is an anti-pattern library rendered as a real-looking product.

## 🔻 Goal

To create a maximally stressful, confusing, and cognitively exhausting user experience by systematically violating every principle from the teacher's material — covering Visual Principles (typography, color, contrast, layout, navigation), Interaction & Motion (animation, autoplay, hidden interactions, icons), Language & Forms (plain language, error messages, forms), and User Control. The site should feel _stressful_ to navigate — not randomly broken, but _deliberately wrong_ in ways that map directly to documented autism sensitivities.

## 🔻 Website Structure — Pages & Content

### Site Name: **ZenPetals**

### Tagline: ~~"Find Your Inner Peace"~~ _(delivered in the most unpeaceful way possible)_

### Pages:

1. **Home** — Hero section, rotating promo banner, featured treatments
2. **Services** — Spa menu, pricing, "exclusive offers"
3. **Book Now** — Multi-column chaotic booking form
4. **Contact** — Contact info buried in noise, broken map

## 🎨 Visual Design — Everything Wrong

### 01 · Typography

- **Body font stack:** `'Comic Sans MS'`, fallback `'Papyrus'`, fallback `'Impact'`
  - _Rule broken: no decorative/display fonts for body content. Comic Sans and Papyrus are explicitly the worst choices for legibility and are universally mocked for professional use._
- **Base font size: 10px** on most paragraphs; some labels at **8px**
  - _Rule broken: body must be >=16–18px . 10px is nearly unreadable and strains the eyes immediately._
- **Line-height: 1.0** (text lines touching or overlapping)
  - _Rule broken: line-height must be >=1.5–1.7. Tight leading makes it impossible for eyes to track lines._
- **Text alignment: fully justified** everywhere, including navigation labels
  - _Rule broken: never justify text. Justification creates uneven word gaps ("rivers of white") that disrupt reading flow._
- **Random words in ALL-CAPS mid-sentence** for "EMPHASIS!"
  - _Rule broken: no ALL-CAPS in body text. ALL-CAPS disrupts reading rhythm and feels like shouting._
- **Random italics** scattered through paragraphs, including entire 3-sentence blocks
  - _Rule broken: avoid italics in long paragraphs. This just makes it harder to read._
- **Line length: 140+ characters** per line (full browser width, no max-width)
  - _Rule broken: max line length 60–75 characters. Long lines cause the eye to lose track when returning to the next line._
- **Mixed font weights:** switching between 100 (thin) and 900 (black) within the same paragraph
  - _Rule broken: avoid font weights below 400 at small sizes._
- **Heading fonts:** use `'Wingdings'` / `'Webdings'` for H3 subheadings — literally unreadable symbols
  - _Rule broken: headings should aid comprehension, not destroy it._

### 02 · Color & Saturation

- **Background:** pure white `#ffffff` on all pages
  - _Rule broken: pure white backgrounds create glare. The "don't" list specifically calls out #ffffff._
- **Accent colors:** neon green `#00FF00`, hot pink `#FF00FF`, electric blue `#0000FF`, vivid red `#FF0000` — all fully saturated, used together
  - _Rule broken: avoid neon colors, vivid reds, electric blues. High-saturation colors cause visual fatigue and anxiety._
- **Rainbow gradient** on the main CTA button and page header
  - _Rule broken: avoid rainbow gradients on CTAs and headers._
- **Color as the only signal:** required form fields shown only in red with no label or icon
  - _Rule broken: color must not be the only way to convey meaning._
- **No dark mode offered.** A small dark mode toggle exists but is hidden behind a hover-only icon with no label, and clicking it plays a loud sound and does nothing
  - _Rule broken: dark mode must be a real, accessible option_

### 03 · Contrast

- **Main body text:** light grey `#cccccc` on white `#ffffff` — contrast ratio approximately **1.6:1**
  - _Rule broken: minimum 4.5:1 required for body text. 1.6:1 is nearly invisible._
- **Navigation links:** yellow `#ffff00` on white `#ffffff` — contrast ratio **1.07:1** (essentially invisible)
  - _Rule broken: minimum 4.5:1._
- **"Book Now" CTA button:** white text on pale yellow background — ratio ~1.3:1
  - _Rule broken: UI components need minimum 3:1._
- **Some text sections:** pure black `#000000` on pure white — ratio 21:1, which is technically WCAG perfect but the teacher's material notes this is "too harsh" for many autistic readers. We use it strategically to alternate between too-low and too-high contrast, maximizing discomfort.
  - _Rule broken both ways: too low and too harsh contrast on the same page._

### 04 · Layout & Spacing

- **Zero whitespace:** content is packed edge-to-edge with `padding: 0; margin: 0` on all elements
  - _Rule broken: generous whitespace required. Dense, packed layouts overwhelm the visual field._
- **No clear hierarchy:** all headings, subheadings, and body text have the same visual weight. H1, H2, H3, and `<p>` tags are styled identically
  - _Rule broken: clear hierarchy with descriptive headings required._
- **Content is one enormous, unbroken wall of text** — no chunking, no sections, no visual breaks
  - _Rule broken: chunked content in short sections required._
- **Multi-column layout for all reading content:** text split into 4 narrow columns with text running across all simultaneously
  - _Rule broken: single column for reading content._
- **Navigation bar changes position on every page:** top on Home, left sidebar on Services, bottom on Book Now, floating randomly on Contact
  - _Rule broken: consistent element placement is essential. "If an element appears in the top-left on one page, it should be there on every page."_

### 05 · Navigation

- **Navigation changes structure per page** — different items, different order, different visual style
  - _Rule broken: same nav, same place, across every page._
- **No breadcrumbs, no active state**, no `aria-current`. User has no idea what page they are on
  - _Rule broken: show current location._
- **Mega-menu with 40+ items** that completely covers the screen, requires precise hover to navigate sub-menus, and disappears if the cursor moves 2px off-target (flyouts that vanish before you reach them)
  - _Rule broken: avoid mega-menus and flyouts that disappear._
- **Navigation hides on scroll down** and reappears on scroll up — but only sometimes, based on scroll speed
  - _Rule broken: avoid navigation that hides on scroll._
- **No sitemap provided**
  - _Rule broken: provide a sitemap for users who prefer full structure._
- **Back button disabled** with JavaScript `history.pushState` manipulation — the browser back button sends users to a random page
  - _Rule broken: violates the basic expectation of browser navigation predictability._

## ⚡ Interaction & Motion — Everything Wrong

### 06 · Animation & Motion

- **Parallax scrolling on every section** — background moves at a different speed to foreground content
  - _Rule broken: no parallax._
- **Infinite CSS animation loops** — floating petals, spinning lotus icon, bouncing text, pulsing background gradient. All run simultaneously
  - _Rule broken: no infinite loops._
- **Auto-scroll:** page slowly drifts downward on its own after 3 seconds of inactivity
  - _Rule broken: no auto-scroll._
- **Bouncy spring easing** on all transitions (cubic-bezier overshoot), lasting 800ms–1200ms
  - _Rule broken: transitions max 300ms, no bouncy easing._
- **`prefers-reduced-motion` explicitly overridden** with `!important` in CSS, ignoring the user's OS accessibility setting
  - _Rule broken: this is described as "non-negotiable". We ignore it anyway._
- **No pause controls** anywhere on the page
  - _Rule broken: pause control mandatory for animations longer than 5s._

### 07 · Autoplay Content

- **Hero video autoplays on load, with sound on by default** at full volume — a "peaceful waterfall" that begins playing immediately
  - _Rule broken: video autoplay is explicitly named as "hostile design"._
- **Auto-rotating image carousel** in the services section: changes every 1.5 seconds, no controls, no pause
  - _Rule broken: sliders that change without user input. "Rarely read, frequently skipped."_
- **Pop-up modal** requesting browser notification permission appears within 2 seconds of page load
  - _Rule broken: no surprise notifications on first visit._
- **Toast notification** (with a chime sound) appears every 45 seconds: "🔥 Someone just booked a Hot Stone Massage!"
  - _Rule broken: pop-ups and toasts with sound are described as "attention taxes"._
- **Cookie consent banner with sound effect** — plays a gentle "whoosh" when it appears
  - _Rule broken: compounds the autoplay audio problem._

### 08 · Hidden Interactions

- **Navigation is hover-only** — menu items only appear when hovering over an invisible region at the top of the screen. On mobile, the menu is completely inaccessible
  - _Rule broken: hover-only menus that vanish on mobile._
- **"Book Now" button is only reachable by swiping left** on desktop (no click alternative, no visible affordance)
  - _Rule broken: swipe gestures with no visible alternative._
- **Secret keyboard shortcuts exist** (e.g., pressing `B` submits the form) with no documentation in the UI
  - _Rule broken: keyboard shortcuts not documented._
- **The "About" page is only accessible** by triple-clicking the logo — not linked in the nav
  - _Rule broken: features must be visible. "Autistic users rarely 'explore' interfaces by guessing."_

### 09 · Icons Without Labels

- **Navigation uses only icons**, no text labels: a question mark for Contact, a flower for Services, a swirly line for Booking
  - _Rule broken: every icon must have a visible text label. Tooltips on hover are not enough._
- **Action buttons** (add to cart, share, save, delete) are icon-only with no labels, no tooltips
  - _Rule broken: icons are visual shorthand that "only work if both designer and user share the same metaphor"._
- **Form submit button:** displays only a right-pointing arrow — no "Submit" text
  - _Rule broken: critical actions especially need text labels._

## 📝 Language & Forms — Everything Wrong

### 10 · Plain Language

- **Dense, jargon-heavy copy** throughout: _"Embark upon a transcendent odyssey of holistic bio-energetic recalibration"_ (means: get a massage)
  - _Rule broken: aim for CEFR B1 / Flesch-Kincaid grade 7–8. This reads at a post-graduate level._
- **Heavy use of idioms:** "break a leg before your treatment!", "our therapists are out of this world", "you'll be in seventh heaven"
  - _Rule broken: no idioms. "Break the ice reads as glass-shattering instructions."_
- **Sarcasm in UI copy:** the 404 page reads "Oh WOW, you REALLY couldn't find that? Amazing 🙄"
  - _Rule broken: no sarcasm. Literal language processors cannot detect tone._
- **Passive voice everywhere:** "Your appointment will have been tentatively considered for scheduling" instead of "We'll schedule your appointment"
  - _Rule broken: active voice required._
- **Sentences average 45–60 words**, multiple clauses, parenthetical asides, and nested subclauses
  - _Rule broken: aim for 15–20 words per sentence._
- **Vague CTAs:** "Let us know!", "Feel free!", "Reach out whenever!" — no specific instruction
  - _Rule broken: "Click Submit" not "Let us know"._

### 11 · Error Messages

- **Vague errors only:** all form errors display `"Something went wrong 😅"` — no field specified, no reason, no fix
  - _Rule broken: errors must be specific. "What happened · Why · What to do next."_
- **Blaming error language:** `"Invalid input. Try harder."` and `"You missed a field. Again."`
  - _Rule broken: errors must be helpful and non-blaming._
- **Error codes only** on the server errors: `"Error 0x8024A105"` with no explanation
  - _Rule broken: errors must be actionable._
- **Errors appear and disappear after 1.5 seconds** — not enough time to read them before they vanish
  - _Additional break: errors must persist until the user resolves them._
- **CAPTCHA puzzle** on the booking form: identify traffic lights in images that refresh every 8 seconds
  - _Rule broken: "Avoid CAPTCHA puzzles that demand pattern recognition under pressure"._

### 12 · Forms

- **Multi-column layout:** booking form is 3 columns wide, fields jump between columns unpredictably
  - _Rule broken: single column, predictable top-to-bottom flow required._
- **Placeholder text only** — no visible labels above fields. Once you click a field, the placeholder disappears and you forget what the field was for
  - _Rule broken: visible labels above fields, never placeholder-only._
- **No fieldset/legend grouping** — all 22 form fields run together with no visual separation between "Personal Info", "Treatment Choice", and "Payment"
  - _Rule broken: group related fields with `<fieldset>` + `<legend>`._
- **Required fields marked only with a red asterisk** in small text, with no legend explaining what `*` means
  - _Rule broken: explicitly listed as a pattern to avoid._
- **5-minute countdown timer** on the booking form — if you don't complete it in time, all data is erased with no warning and the session ends
  - _Rule broken: no time limits, or always extendable._
- **Inline validation fires on every keystroke** — the phone number field shows "❌ Invalid" while the user is still typing the second digit
  - _Rule broken: validate on blur (field exit), not on every keystroke. "Constant red errors while typing feel like punishment"._
- **Fields auto-format while typing** and unpredictably reorder the cursor — typing a credit card number causes the field to insert dashes mid-digit
  - _Rule broken: "Avoid fields that auto-format while typing"._
- **No confirm screen before submission** — the form submits immediately on Enter key, no summary, no review step
  - _Rule broken: "Confirm-before-commit for important actions"._
- **No "save as draft"** option despite the 5-minute time limit

### 13 · User Control

- **No light/dark mode toggle** (the fake one plays a sound and does nothing — see Color section)
  - _Rule broken: light/dark mode, visible and persistent._
- **Text scaling broken:** the site uses fixed pixel units (`px`) everywhere, so browser zoom at 200% breaks the layout completely — columns overlap, nav disappears, forms become unusable
  - _Rule broken: full functionality at 200% zoom required._
- **No reduce-motion toggle** beyond the system preference — which we ignore with `!important` (see Motion section)
  - _Rule broken: reduce motion toggle beyond system pref._
- **No high-contrast mode** option
  - _Rule broken: high-contrast mode as opt-in._
- **Notification sounds cannot be turned off** from within the site — the toast chimes have no mute option
  - _Rule broken: notification controls for sounds, badges, frequency._

## 🏗️ Technical Implementation Notes

### Stack

- Plain HTML + CSS + Vanilla JS
- Hosted as a single multi-page static site
- Deliberately _not_ using semantic HTML — all divs, no landmarks, no ARIA

### CSS Choices (intentionally terrible)

```css
/* Ignore user motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    /* do nothing — we override this with !important on animations */
  }
}

body {
  font-family: "Comic Sans MS", "Papyrus", Impact, cursive;
  font-size: 10px;
  line-height: 1;
  background: #ffffff;
  color: #cccccc; /* 1.6:1 contrast */
}

/* Override all text to full-width, justified */
p {
  text-align: justify;
  max-width: none;
}

/* Animation override */
.petal {
  animation: float 2s ease-in-out infinite !important;
}
.logo {
  animation: spin 3s linear infinite !important;
}
.hero-text {
  animation: bounce 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite !important;
}
```

### JavaScript Misfeatures

- `history.pushState` abuse to break the browser back button
- Auto-scroll interval: `setInterval(() => window.scrollBy(0, 1), 50)`
- Session timer with forced data wipe: `setTimeout(() => document.querySelector('form').reset(), 300000)`
- Keystroke validation: `input.addEventListener('input', validateImmediately)`
- Autoplay video with audio on `DOMContentLoaded`
- Notification permission request: `Notification.requestPermission()` after 2s delay

## 📐 Page-by-Page Content Breakdown

### Page 1 — Home

- **Hero:** Autoplay video of a waterfall (sound on), parallax effect, spinning flower logo
- **Headline:** `"EMBARK Upon Your ZEN Journey — RELAXATION Awaits!!!"` (mixed caps, Comic Sans, 10px)
- **Auto-carousel:** 6 images cycling every 1.5s, no controls
- **"Featured Treatments" section:** 4-column layout, packed edge-to-edge, icon-only links
- **Pop-up toast every 45s:** "🔥 Hot Stone just booked!" with chime sound
- **Footer navigation:** different items than the header nav, no overlap

### Page 2 — Services (Spa Menu)

- **Left sidebar navigation** (different from every other page)
- **Wall-of-text service descriptions:** 500+ word paragraphs per treatment, no breaks, fully justified
- **Prices shown only in color:** "Green = affordable, Red = premium" — no numbers visible, no legend
- **Hover-only treatment expansion panels:** click does nothing, hover reveals more, mobile gets nothing
- **"Special Offer" section:** neon green banner, flashing red text, rainbow gradient button

### Page 3 — Book Now (Form)

- **3-column form layout, 22 fields total**
- Fields: Full Name (split across 3 fields with no labels), Email, Phone (auto-formats on keystroke), DOB (3 separate selects), Treatment Type (dropdown with 30 options, no grouping), Preferred Therapist (icon-only selector), Date (calendar that only works on hover), Time (AM/PM only, no specific times), Duration (no unit label), "Special Requests" (2000 char limit shown only after you exceed it), Payment Type, Card Number (auto-inserts dashes mid-type), Expiry (MM/YY auto-formats), CVV (tooltip says "see back of card" — icon only), Billing Address (5 fields in 2 columns), Newsletter checkbox (pre-checked), Terms checkbox (required, links to 40-page document that opens in the same tab, destroying form progress)
- **4-minute countdown timer** at top right, in blinking red text
- **Submit button:** right-arrow icon only, no label
- **On submit:** CAPTCHA appears (8-second refresh), then "Something went wrong 😅"

### Page 4 — Contact

- **Floating nav** in a random corner (changes on reload)
- **No address visible** — only an embedded map that requires login to view
- **Phone number in an image** (cannot be copied or clicked-to-call)
- **Email address as a hover-only tooltip** on a question mark icon
- **Contact form:** identical problems to booking form, plus an additional timer
- **404-style error humor:** `"Oh WOW, you REALLY couldn't find that? Amazing 🙄"`

---

## 📊 Rule Violation Summary Table

_Based on_ _Designing for the Autism Spectrum — Web Design Guidelines_

| #   | Guideline                          | Violation Applied                              |
| --- | ---------------------------------- | ---------------------------------------------- |
| 01  | Body 16–18px minimum               | 10px body, 8px labels                          |
| 02  | Line-height >=1.5                  | Line-height: 1.0                               |
| 03  | No decorative fonts for body       | Comic Sans / Papyrus / Impact                  |
| 04  | Left-align, never justify          | All text fully justified                       |
| 05  | No ALL-CAPS in body                | RANDOM CAPS throughout                         |
| 06  | Max line length 60–75 chars        | 140+ chars, no max-width                       |
| 07  | Off-white background               | Pure white #ffffff                             |
| 08  | Muted, desaturated palette         | Neon green, hot pink, vivid red, electric blue |
| 09  | No rainbow gradients               | Rainbow gradient on CTA and header             |
| 10  | Color not the only signal          | Required fields: color only, no label/icon     |
| 11  | Dark mode as real option           | Fake toggle — plays sound, does nothing        |
| 12  | Contrast >=4.5:1                   | 1.6:1 body, 1.07:1 nav links                   |
| 13  | Generous whitespace                | padding:0; margin:0 everywhere                 |
| 14  | Clear visual hierarchy             | All heading levels styled identically          |
| 15  | Chunked content                    | One unbroken wall of text                      |
| 16  | Single column for reading          | 4-column reading layout                        |
| 17  | Same nav, same place               | Nav position changes every page                |
| 18  | Show current location              | No breadcrumbs, no active state                |
| 19  | No mega-menus / flyouts            | 40-item hover flyout disappears at 2px         |
| 20  | No nav hidden on scroll            | Nav hides based on scroll speed                |
| 21  | Provide sitemap                    | No sitemap                                     |
| 22  | Short transitions <=300ms          | 800–1200ms bouncy spring easing                |
| 23  | No infinite animation loops        | 5 simultaneous infinite animations             |
| 24  | No parallax                        | Parallax on every section                      |
| 25  | Honor prefers-reduced-motion       | Overridden with !important                     |
| 26  | Pause controls for animation       | No pause controls anywhere                     |
| 27  | No video autoplay with sound       | Hero video, sound on, autoplays                |
| 28  | No auto-rotating carousels         | 6-image carousel, 1.5s interval                |
| 29  | No surprise notifications          | Permission prompt at 2s, toast every 45s       |
| 30  | No hover-only menus                | Navigation visible on hover only               |
| 31  | No swipe-only features             | "Book Now" only via desktop swipe left         |
| 32  | No undocumented shortcuts          | B key submits form with no warning             |
| 33  | Every icon gets a text label       | Nav and actions: icons only, no labels         |
| 34  | B1 reading level                   | Post-graduate jargon throughout                |
| 35  | No idioms or sarcasm               | Heavy idioms, sarcastic 404                    |
| 36  | Short sentences (15–20 words)      | Average 45–60 words per sentence               |
| 37  | Active voice                       | Passive voice everywhere                       |
| 38  | Specific, helpful errors           | "Something went wrong 😅" for everything       |
| 39  | No blaming error language          | "Try harder." / "Again."                       |
| 40  | No error codes without explanation | "Error 0x8024A105"                             |
| 41  | No CAPTCHA puzzles under pressure  | 8-second-refresh CAPTCHA                       |
| 42  | Single-column forms                | 3-column, 22-field form                        |
| 43  | Visible labels above fields        | Placeholder-only, no labels                    |
| 44  | Group related fields               | No fieldset/legend grouping                    |
| 45  | Help text before submission        | No format hints until error                    |
| 46  | No time limits                     | 5-minute countdown, wipes data                 |
| 47  | Validate on blur, not keystroke    | Validates on every keystroke                   |
| 48  | No auto-format while typing        | Credit card field auto-inserts dashes          |
| 49  | Confirm before commit              | Instant submit on Enter, no review             |
| 50  | Light/dark mode toggle             | No working toggle                              |
| 51  | Full functionality at 200% zoom    | Fixed px units break layout at zoom            |
| 52  | Reduce-motion toggle               | Ignored with !important                        |
| 53  | Notification sound controls        | Toast chimes have no mute option               |

## Educational Notes

This project maps directly to the course material:

- **Visual Principles** — violations of typography, color, contrast, layout, and navigation
- **Interaction & Motion** — violations involving animation, autoplay, hidden interactions, and icon usage
- **Language & Forms** — violations related to plain language, error handling, and form design
- **User Controls** — examples where all five core user controls are either missing or intentionally deceptive

The purpose of this documentation is to make each design decision explicit and analyzable — not merely to break accessibility rules, but to identify which rule is being violated, why it affects autistic users, and what an accessible alternative would look like.

The site is intended as a controlled, annotated failure case for accessibility analysis and discussion.

_Specification for Integrative Design Course_
_for educational use only — intentional anti-pattern demonstration_
