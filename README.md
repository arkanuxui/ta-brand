# Tailored Applications — Brand site (Phase 1 skeleton)

The brand reference hub: a single scrolling page with a sticky left sidebar, built with **Astro + React** (static output). This is the **Phase 1 skeleton** — real layout and structure, **placeholder content** throughout. Phase 2 swaps placeholders for the real logo, colors, fonts, and tone & voice text.

## Quick look (no install)

Open **`preview.html`** in a browser by double-clicking it. It's a self-contained static snapshot of the same layout — handy for reviewing without running the toolchain.

## Run the real project locally

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to ./dist
npm run preview  # serve the built site
```

> Note: this project was scaffolded in an offline environment, so `npm install` was not run here — run it locally to pull dependencies before the first `npm run dev`.

## Structure

```
src/
  pages/index.astro        The whole page (one long scroll). Section markup lives here.
  components/CopyButton.jsx React "island" for click-to-copy on color swatches.
  styles/global.css        Design tokens + all layout/styles. Brand look is driven from :root here.
preview.html               Self-contained static snapshot (no build needed).
astro.config.mjs           Astro config + React integration.
```

### How the interactivity works
Static HTML ships by default; only the interactive bits run JS. Color-swatch copy buttons are React islands (`CopyButton`, hydrated with `client:visible`). Scroll-spy active states, the mobile nav toggle, and the copy-link anchors run from a small client `<script>` in `index.astro`. As more repeating pieces appear, they can be pulled into their own React components.

### Swapping in the brand (Phase 2)
- **Color / type / shape:** edit the tokens in `:root` at the top of `src/styles/global.css`. The placeholder accent (`--accent`) and font stacks (`--font-display`, `--font-body`) are the main things to replace.
- **Logo, fonts, mockups:** drop real files into a `public/assets/...` structure and point the placeholders at them.
- **Copy:** replace the placeholder text in each section of `index.astro`.

## Known placeholders / open questions (visible in the page)
- Logo Section 2 — the **fourth one-color treatment** is unconfirmed.
- Typography Section 2 — the **four roles** are placeholder labels.
- Typography Section 4 — the **two languages/scripts** are a guess (Latin + Arabic).
- Hosting/domain — TBD; not needed until deploy.
