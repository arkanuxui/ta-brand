# Tailored Applications — Brand site

The Tailored Applications brand-guidelines hub, built with **Astro 5 + React** (static output) and deployed on **GitHub Pages**.

**Live:** https://arkanuxui.github.io/ta-brand/

## What it is

A brand reference for the team, partners, and vendors. Navigation works like **pages**: a sticky left sidebar switches between sections (Introduction, Logo, Color, Typography, Tone & Voice) — clicking a nav item shows only that section, the URL updates (`/ta-brand/#logo`), and browser back/forward work. There's a repeating full-width footer on every page.

- **Light & dark themes** with a segmented toggle in the sidebar (persisted to `localStorage`, follows the OS until you choose). Dark canvas `#191919`, raised surfaces `#2B2C2D`.
- **Glass navigation** — translucent frosted sidebar with liquid-glass hover/active states; the wordmark is a theme-aware SVG (recolored via CSS mask).
- Brand: red `#ef3340`, ink `#101820`, off-white `#f8f1e0`, IBM Plex super-family, with red IBM Plex Mono labels as the signature.

## Status

- **Logo** — fully built: combination logo (clearspace, minimum size), color treatments (full-color / red / white / black with correct + do-not-use), in-context mockups, a CSS-distorted misuse grid, and **the mark** (clearspace, app icon, social avatar, on-backgrounds gallery, things to avoid).
- **Color / Typography / Tone & Voice** — structure in place; some values/copy still being finalized.
- **Patterns / Illustration / Photography** — *coming soon* (placeholders in the nav).

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:4321/ta-brand
npm run build    # outputs static files to ./dist
npm run preview  # serve the built site
```

> The site is configured with `base: '/ta-brand'` (project page), so the dev/preview URL includes `/ta-brand`.

### Quick look (no install)

Open **`preview.html`** in a browser — a self-contained static snapshot of the same layout, kept in sync with the real site.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`, using `withastro/action` + `actions/deploy-pages`) that builds and publishes to GitHub Pages automatically. No manual steps.

## Structure

```
src/
  pages/index.astro        The page: all section markup + the client <script>
                           (theming, paged nav, mobile nav, copy-link anchors).
  components/CopyButton.jsx React island for click-to-copy color swatches.
  styles/global.css        Design tokens in :root + all layout/styles. The
                           brand look (light + dark) is driven from here.
public/
  logo/                    Logo assets (section-1, section-2-1..4, section-3).
  mark/                    The standalone mark and its applications.
  nav/                     ta-wordmark.svg — the nav logo (used as a CSS mask).
preview.html               Self-contained static snapshot (no build needed).
astro.config.mjs           Astro config (React integration, site + base).
```

### How the interactivity works
Static HTML ships by default; only the interactive bits run JS. Color-swatch copy buttons are React islands (`CopyButton`, `client:visible`). Theming, paged navigation, the mobile nav drawer, and copy-link anchors run from a small client `<script>` in `index.astro`.

### Images
Photographic assets (mockups, in-context shots) are optimized JPEGs (≤1600px); flat logo/mark artwork stays PNG for crisp edges; the nav wordmark is SVG. Drop new assets into the matching `public/` folder and point the markup at them.

## Conventions
- Colors, type, and spacing live as tokens in `:root` of `global.css` — never hard-code ad-hoc values.
- Keep `preview.html` in sync with `index.astro` / `global.css` when changing markup or styles.
- Quality floor: WCAG AA contrast, visible keyboard focus, `prefers-reduced-motion` respected.
