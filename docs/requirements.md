# Tailored Applications — Brand Website Requirements

**Document type:** Product / design requirements
**Status:** Draft v0.3 (for review)
**Last updated:** 17 June 2026
**Changelog:**
- v0.3 — locked build approach (Astro + React, static output); resolved sidebar top slot (wordmark) and global download button (included).
- v0.2 — incorporated reference screenshots of espn.design; navigation model, sidebar anatomy, and section/card patterns specified to match.

> This is the working requirements doc for the Tailored Applications brand website. It captures *what* we are building and *why*, the page structure, and the decisions we still need to make. Items marked **[Decision needed]** are open questions for the team. Items marked **[Proposal]** are my recommendation that you can accept, change, or reject.

---

## 1. Overview

We are building a **public brand guidelines microsite** for Tailored Applications — a single, always-available reference for how our brand looks and sounds. It is the canonical home for our logo, colors, typography, and voice, and will grow to cover patterns, illustration, and photography.

The site is **static** (no login, no database, no user accounts) — read-only reference material served as files.

**Inspiration:** [espn.design](https://espn.design) — clean, editorial, asset-forward, generous whitespace, large type, a sticky left sidebar, and card-based asset displays. We are taking the *structure and feel*, not the content.

**How we deliberately differ from espn.design:**
- **No top navigation bar** and **no "Sign in"** — the brand is internal/partner-facing reference, not a product.
- **No hero video.** The page opens with a short written **introduction** explaining what this site is and who it's for.
- **No "Brand Elements" header / utility bar** at the top of the sidebar (ESPN labels its sidebar "Brand Elements"; we won't).

---

## 2. Goals & non-goals

**Goals**
- Give the team, partners, and vendors one trustworthy place to find correct brand assets and rules.
- Make assets easy to view *and* download in the right formats.
- Ship a clean general layout first, then drop in real assets section-by-section without redesigning.
- Be fast, accessible, and shareable by direct URL (including deep links to a specific section).

**Non-goals (for v1)**
- No authentication, gated content, or per-user permissions.
- No CMS / admin UI — content is edited in code/files by us.
- No e-commerce, forms, or back-end logic.

---

## 3. Audience

Primary: our own team and trusted collaborators (designers, developers, marketers, external vendors) who need correct assets and rules.
Secondary: anyone we hand the link to who wants to understand the Tailored Applications brand.

This shapes tone (helpful, internal-facing, confident) and means we optimize for *findability and correctness* over conversion.

---

## 4. Information architecture

The whole site is **one long page**. The left sidebar lists the top-level sections; clicking a link scrolls to that section, and the active section is highlighted as you scroll (scroll-spy). The **introduction sits at the very top of the page** and **also has its own nav row** at the top of the sidebar (clicking it scrolls back to the top/intro).

| Order in sidebar | Section | State |
|------|------------------|--------------------|
| 1 | Introduction | Active |
| 2 | Logo | Active |
| 3 | Color | Active |
| 4 | Typography | Active |
| 5 | Tone & Voice | Active |
| 6 | Patterns | Disabled + "Coming soon" |
| 7 | Illustration Style | Disabled + "Coming soon" |
| 8 | Photography Style | Disabled + "Coming soon" |

Each top-level section contains **sub-sections** (for example, Logo → Primary Logo, Clearspace, Minimum Size, Color Treatments, Misuse — these are indicative and subject to change as we finalize each section). Sub-sections use an **accent-colored sub-heading** (ESPN uses red for these; we'll use our primary brand color).

Secondary sidebar links (Contact, About, Changelog) sit below the main list, as in ESPN's layout. *(Decided: we want these, but as a future addition — not part of the initial build.)*

---

## 5. Global layout & navigation

A persistent two-column shell: sticky left sidebar + scrolling main content.

**Left sidebar (sticky)**
- On desktop it reads as a **floating white card with rounded corners**, staying in place while the page scrolls.
- **Top of sidebar** — instead of ESPN's "Brand Elements" label, this slot holds the **Tailored Applications wordmark/logo** (small), which also links back to the top/intro. *(Decided.)*
- A divider, then the **primary section list** in the order above.
- The **active section** is highlighted in the **primary brand color** (ESPN turns the active item red), updated automatically as you scroll.
- **Coming-soon items** are greyed out, non-clickable, with a small "Coming soon" label/badge beside them — visible so people can see what's planned.
- A divider + **secondary links** (Contact / About / Changelog). *(Decided: planned as a future addition — not built in v1.)*
- A divider + a prominent **"Download All Assets"** button pinned at the bottom, in the primary brand color, showing total size — matching the reference. *(Decided: included.)*

**Main content area (right)**
- Opens with the **introduction headline** (large display type, a couple of sentences on what the site is and who it's for).
- Below it, the sections stack vertically. Comfortable max content width with generous margins; asset-forward and uncluttered.
- Each section/sub-section has a **copy-link anchor** affordance (a small link icon) so people can copy a deep link straight to it.

**Responsive behavior**
- **Desktop / tablet landscape:** sidebar always visible on the left.
- **Mobile / narrow:** sidebar collapses into a hamburger or top drawer that overlays when opened; main content takes full width.

---

## 6. Section anatomy & reusable patterns

Every section shares the same building blocks so it feels consistent and so new assets slot in predictably:

- **Section title** (large) + a short intro line.
- **Sub-sections** with **accent-colored sub-headings**, explanatory copy, and the asset display.
- **Display cards** — rounded cards with subtle borders used to present assets. Variants seen in the reference:
  - *Plain specimen card* (e.g. the logo on a clean background).
  - *Dark specimen card* (asset shown reversed/on dark).
  - *Annotated card* (clear-space guides, minimum-size markers).
  - *Labeled context cards in a row* — e.g. **Over White / Over Black / Over Imagery**, and a **"Do not…"** card for incorrect usage.
- **Download block** — an icon + "Download [X] Assets", the **file formats** offered (e.g. SVG, PNG, AI, PDF, FIG), and the **file size**. Used per section/sub-section.
- **Do / Don't** pairs where correct vs. incorrect usage needs to be explicit.
- **Copyable values** — color hex/RGB/CMYK, font names, and snippets are click-to-copy.

---

## 7. Section-by-section requirements

Starting points — we refine as real assets arrive.

### 7.1 Introduction (top of page)
- **What this is** — the Tailored Applications brand hub; what you'll find here.
- **Who it's for** — team, partners, vendors.
- *(Optional)* **How to use it** — view, copy values, download assets; sections fill in over time.

### 7.2 Logo

Structured into the following sections (sub-sections subject to change as we finalize):

**Section 1 — Primary logo**
- **Primary combination logo** — the main lockup, shown large on a clean specimen card.
- **Clearspace** — required uninterrupted space around the logo, shown on an annotated card.
- **Minimum size** — smallest digital (px) and print (mm) sizes, with a specimen.

**Section 2 — One-color logo treatments** *(each sub-section shows the variant **plus its use cases**)*
- **One-color red** combination logo + use cases.
- **One-color white** logo + use cases.
- **One-color black** logo + use cases.
- **[Decision needed]** You noted *four* sub-sections here, but the variants listed were red, white, and black (white appears twice in the note). What's the fourth treatment — e.g. grayscale, full-color, or something else?

**Section 3 — In context & misuse**
- **Mockup gallery** — the logo applied across real-world mockups, shown as a gallery.
- **Do not use** — a set of misuse examples ("do not use the logo like this").

*Downloads:* a **Download Logo Assets** block delivers a **single zip containing folders for digital and print uses**. *(Decided.)*

> **[Confirm]** You mentioned "four sections for now" but described three (Primary logo · One-color treatments · In context & misuse). Is there a fourth Logo section, or did you mean three?

### 7.3 Color
- **Primary colors** — the core brand colors, each as a large swatch with name + **HEX / RGB / CMYK**, click-to-copy.
- **Red color palette** — the red family (tints/shades), shown as swatches with values.
- **Gray color palette** — the neutral grays (tints/shades), shown as swatches with values.
- **Secondary colors** — supporting colors, shown as swatches with values.
- **Gradients** — approved gradients with their color stops/values.
- **Color in use** — mockups showcasing how the colors are applied.

### 7.4 Typography

Four sections:

**Section 1 — Why this family**
- The rationale for our typeface choice — what it is, why it fits the brand — with a character-set specimen.

**Section 2 — Four roles, one family**
- A single super-family (IBM Plex) covering four roles, each with its weights/styles:
  - **Display & Headings** — IBM Plex Sans Bold / SemiBold (tight tracking, mirrors the logotype).
  - **Text & UI** — IBM Plex Sans Regular / Medium.
  - **Code & Data** — IBM Plex Mono Regular / Medium (snippets, specs, version tags, eyebrows).
  - **Arabic & Kurdish** — IBM Plex Sans Arabic (RTL).

**Section 3 — Type scale**
- The scale / hierarchy: display, H1–H6, body, caption — sizes, line-heights, and usage.

**Section 4 — Bilingual system**
- English (Latin) and Central Kurdish / Arabic (RTL, Sorani) in the same IBM Plex family via IBM Plex Sans Arabic — pairing, alignment, and per-script checks (verify shaping on live strings before sign-off).

*Downloads:* a **Download Font Families** block — the font files (where licensing permits) or a link to obtain them.

### 7.5 Tone & Voice
- **Brand personality** — a few defining voice attributes.
- **Voice vs. tone** — constant voice, context-flexing tone.
- **Writing principles** — the rules we write by.
- **This, not that** — side-by-side on-brand vs. off-brand copy.
- **Words we use / avoid** — preferred vocabulary and things to avoid.
- **Examples in context** — sample heading, button, error message, social post.

### 7.6 Coming-soon sections (Patterns, Illustration Style, Photography Style)
- Appear in the sidebar, greyed out, non-clickable, with a "Coming soon" label.
- A tiny **"Coming soon" placeholder block** is rendered at that section's scroll position (rather than nothing). *(Decided.)* The sidebar item stays greyed with its "Coming soon" label.

---

## 8. Visual & interaction design principles

- **Editorial & asset-forward:** let assets breathe; lots of whitespace; restrained UI chrome.
- **Brand-true:** the site itself follows our own logo, color, and type rules — a living demonstration.
- **Accent-colored sub-headings & active states** in the primary brand color, mirroring the reference's use of red.
- **Card-based displays** for every asset, including annotated and labeled-context variants.
- **Quiet motion:** subtle transitions only (active-state changes, hover on copy/download). No autoplay, no heavy animation.
- **Copy- & download-friendly:** values are click-to-copy; assets are one click to download.

---

## 9. Content & asset strategy

Build the **layout and placeholders first**, then replace with real assets section by section — without changing structure.

- Define a clear **assets folder structure** up front, e.g. `/assets/logo/`, `/assets/fonts/`, `/assets/color/`, so dropping in real files is mechanical.
- Each asset slot maps to a known file path; swapping placeholder for real asset shouldn't move anything.
- **Logos:** ship the agreed formats with consistent naming (e.g. `logo-primary.svg`, `logo-mark-dark.svg`).
- **Fonts:** self-host WOFF2 or use the licensed host; document the fallback stack.
- **Colors:** one source of truth (a tokens/variables file) so the site's styling and the documented values can't drift.
- **Placeholders** clearly marked so we never ship lorem-ipsum by accident.

---

## 10. Accessibility & responsiveness

- Meet **WCAG 2.1 AA** for contrast and keyboard navigation; sidebar and all controls keyboard-operable.
- Meaningful images have alt text; decorative ones hidden from screen readers.
- Fully responsive from large desktop down to mobile (sidebar collapses per §5).
- Respect `prefers-reduced-motion`.
- Scroll-spy and anchor links must also work for keyboard and screen-reader users.

---

## 11. Performance & SEO

- Static files, optimized assets (SVG where possible, compressed images, WOFF2) → fast loads.
- Sensible `<title>` and meta description; section anchors for deep links.
- **Public and indexable** by search engines. *(Decided.)* Provide a `robots.txt` and sitemap, and sensible Open Graph/meta tags for sharing.

---

## 12. Technical approach

**Decided: Astro + React, static output.**

Static, single long page built with **Astro** using **React** components. Astro renders everything to static HTML at build time and ships **zero JavaScript by default**, hydrating only the interactive "islands." This gives us React's component model for the repeating pieces (section blocks, swatches, display cards, download blocks) while keeping first paint fast and the runtime essentially unbreakable — the opposite trade-off from a client-rendered React SPA, which would ship a bundle just to draw static content.

- **React components** for the reusable patterns in §6, so the "same template, drop in assets later" workflow is mechanical.
- **Interactive islands** (the only hydrated JS): scroll-spy active states, mobile nav toggle, copy-to-clipboard, and copy-link anchors.
- Semantic HTML, CSS variables/tokens for brand values, minimal client JS otherwise.
- Output is plain static files → deploys to any CDN host (Netlify, Vercel, Cloudflare Pages).

---

## 13. Hosting & deployment

- Static hosting: Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
- **Can live on a subdomain of an existing website** (e.g. `brand.tailoredapplications.com`) without touching that site. A subdomain is independent at the DNS level, so either: deploy the build to a static host and point the subdomain's DNS (CNAME) at it (simplest, free SSL, main site untouched, its tech stack irrelevant); or, if we control the existing server, drop the static files there and configure a virtual host for the subdomain. A true subdomain is cleaner than a subpath (`/brand`), which would require the existing server to serve the files and an Astro `base`-path setting.
- **[Deferred — TBD]** preferred host and exact domain/subdomain. Not yet decided, and not needed until deployment.

---

## 14. Phasing / roadmap

**Phase 1 — Skeleton (layout first)**
- Two-column shell, sticky sidebar, scroll-spy, responsive behavior, active + coming-soon states.
- Intro + all four sections with sub-section structure and *placeholder* content and cards.

**Phase 2 — Real assets, section by section**
- Logo → Color → Typography → Tone & Voice (or whichever order assets are ready).
- Wire up downloads, click-to-copy, and deep-link anchors.

**Phase 3 — Future categories**
- Light up Patterns, Illustration Style, Photography Style as guidelines are produced; flip them from "coming soon" to active.
- Add the secondary sidebar links (Contact / About / Changelog).

---

## 15. Open questions / decisions needed

**Resolved by the espn.design reference screenshots:**
- *Navigation model* → single long page with sticky left sidebar + scroll-spy (not separate pages).
- *Introduction placement* → at the top of the page, and also given its own nav row at the top of the sidebar.
- *Build approach* → **Astro + React, static output** (see §12).
- *Sidebar top slot* → Tailored Applications wordmark, linking to top.
- *Global "Download All Assets" button* → included, pinned at bottom of sidebar.
- *Secondary sidebar links (Contact / About / Changelog)* → wanted, but as a future addition (not in v1).
- *Coming-soon sections* → render a small "Coming soon" placeholder block at that scroll position; sidebar item stays greyed.
- *Logo downloads* → a single zip containing folders for digital and print uses.
- *Search indexing* → public and indexable (robots.txt + sitemap + share meta tags).
- *Brand color* → Red #ef3340, Black #101820, Off-White #f8f1e0, Gray #53565a.
- *Typography* → IBM Plex super-family: Plex Sans (display + text/UI), Plex Mono (code/data + labels), Plex Sans Arabic (Arabic/Kurdish, RTL). Resolves the four type roles and the bilingual system.

**Still open:**
1. **Hosting & domain:** which host, what subdomain? *(TBD — not decided yet; only needed at deployment, not a blocker for building.)*
2. **Your real brand files (for Phase 2):** when we move from the placeholder skeleton to real content, I'll need your actual materials — the logo files, the exact color values (hex/RGB/CMYK), the font files, and the written tone & voice text — to replace the placeholders. *Nothing needed right now; this is just a reminder for when we reach Phase 2.*

---

*Next step: I can turn this into a concrete Phase 1 build plan (file/folder structure, component list, and the section scaffolding) and start the skeleton whenever you're ready. The remaining open items above aren't blockers for the skeleton — they can be filled in as we go.*
