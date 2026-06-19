# Tailored Applications — Brand site

Context for Claude Code. Read this and `docs/requirements.md` before working.

## What this is
A static **brand-guidelines microsite** for the company "Tailored Applications". One long scrolling page with a sticky left sidebar (inspired by espn.design). Audience: internal team, partners, vendors. No login, no backend.

## Status
- **Phase 1 (skeleton) — DONE.** Two-column shell, sticky sidebar + scroll-spy, all sections with *placeholder* content, responsive mobile nav, "Coming soon" placeholders, download buttons, click-to-copy.
- **Phase 2 — NEXT.** Replace placeholders with the real brand: logo files, color values, fonts, and tone & voice copy.
- **Phase 3 — LATER.** Build out Patterns, Illustration Style, Photography Style; add secondary sidebar links (Contact / About / Changelog).

## Stack & commands
- Astro 5 + `@astrojs/react`, React 18. Static output (Astro default).
- `npm install` → `npm run dev` (http://localhost:4321) → `npm run build` (outputs to `dist/`).

## Structure
- `src/pages/index.astro` — the whole page; all section markup + a small client `<script>`.
- `src/components/CopyButton.jsx` — React island for click-to-copy on color swatches (`client:visible`).
- `src/styles/global.css` — **design tokens in `:root`** + all layout/styles. The brand look is driven from here.
- `docs/requirements.md` — full requirements doc; **source of truth** for scope and decisions.

## Design direction (follow for ALL UI work)
Read and follow **`docs/design-direction.md`**. The tokens in `:root` of `src/styles/global.css` are its implementation — never invent ad-hoc colors, fonts, or spacing. The real brand is now applied: warm off-white canvas (`#f8f1e0`), ink (`#101820`), red accent (`#ef3340`), gray (`#53565a`), IBM Plex super-family, with **red IBM Plex Mono labels as the signature**.

## Conventions
- Colors and type live as tokens in `:root` and are the real brand values (see design-direction). Tint scales, secondary colors, and gradients are still placeholders to confirm.
- Interactivity: copy buttons are React islands; scroll-spy, mobile nav toggle, and anchor-link copy live in the client `<script>` in `index.astro`.
- Sidebar order: Introduction · Logo · Color · Typography · Tone & Voice · [divider] · Patterns / Illustration Style / Photography Style (greyed, "Coming soon"). "Download All Assets" pinned at the bottom. Wordmark at top links to `#introduction`.
- Quality floor: WCAG AA contrast, visible keyboard focus, `prefers-reduced-motion` respected.

## Section structure (from the requirements)
- **Logo** — S1 Primary logo (primary combination logo, clearspace, minimum size); S2 one-color treatments (red / white / black, each with use cases); S3 in-context mockup gallery + "do not use". Download = a single `.zip` with folders for digital and print.
- **Color** — Primary colors, Red palette, Gray palette, Secondary colors, Gradients, Color in use (mockups). Swatches are copyable.
- **Typography** — S1 why this family; S2 four roles, one family; S3 type scale; S4 bilingual system. Download font families.
- **Tone & Voice** — personality, voice vs. tone, writing principles, "this not that", words we use/avoid, examples in context.

## Open questions — DO NOT guess; confirm with the user
- Logo S2: the **fourth** one-color treatment (brief gave red, white, black).
- Color: secondary colors beyond the four primaries, the red/gray tint scales, and whether gradients are used (placeholders in build).
- Hosting/domain: **TBD** (not needed until deploy).

## Resolved brand facts
- Type roles (Typography S2): Display & Headings (Plex Sans Bold/SemiBold), Text & UI (Plex Sans Regular/Medium), Code & Data (Plex Mono), Arabic & Kurdish (Plex Sans Arabic).
- Bilingual system (Typography S4): English (Latin) + Central Kurdish/Arabic (RTL, Sorani) via IBM Plex Sans Arabic.
- Primary colors: Red #ef3340, Black #101820, Off-White #f8f1e0, Gray #53565a.
