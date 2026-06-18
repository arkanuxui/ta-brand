# Tailored Applications — Design direction

This is the visual rulebook for the brand site. It exists so the site looks like **one family with [tailored-apps.io](https://tailored-apps.io)** and never drifts into the generic AI-default look. The brand's own thesis is *anti-generic* — "software that actually fits" — so the site must look deliberately ours.

**The tokens in `src/styles/global.css` `:root` are the implementation of this doc. Never invent ad-hoc colors, fonts, or spacing — drive everything from the tokens.**

## Color (source of truth)

Primary (from the brand):
- **Red `#ef3340`** — the accent. Used for labels/eyebrows, active nav, primary buttons, key highlights. An accent, *not* a flood.
- **Black / Ink `#101820`** — headings, primary text, dark specimen backgrounds.
- **Off-White `#f8f1e0`** — the page canvas (warm cream).
- **Gray `#53565a`** — body and secondary text.

Derived neutrals (adjust to taste, kept in `:root`): card surface `#fffdf8`, warm hairline `#e7ddc8`, faint gray `#8c8a82`, coming-soon gray `#b4ad9c`.

Still to confirm with the brand owner: secondary colors beyond the four primaries, the red/gray tint scales, and whether gradients are part of the brand. These are placeholders in the build.

## Type — IBM Plex super-family ("four roles, one family")

1. **Display & Headings** — IBM Plex Sans **Bold / SemiBold**, tight tracking (mirrors the logotype). Hero statements, page titles, section heads.
2. **Text & UI** — IBM Plex Sans **Regular / Medium**. Body copy, interface labels, buttons.
3. **Code & Data** — IBM Plex **Mono** Regular / Medium. Snippets, specs, version tags — and **eyebrows/labels** (see Signature).
4. **Arabic & Kurdish** — IBM Plex **Sans Arabic**. Same family, RTL; covers Central Kurdish (Sorani). Verify shaping on live strings before sign-off.

Fonts load via Google Fonts in the page `<head>` (swap to self-hosted WOFF2 if preferred).

## Signature

**IBM Plex Mono is the connective tissue.** Small, uppercase, letter-spaced (~0.1em), **red** labels and eyebrows run through the whole brand — the "engineering signature." This is the one memorable device; keep everything else quiet and disciplined. Section eyebrows, card category labels, version tags, and the "Coming soon" badge all use it.

## Layout & feel

- Warm off-white canvas, near-black IBM Plex Sans headings, red used sparingly. Generous whitespace.
- Cards: warm ivory surface, ~18px radius, subtle warm border + soft shadow.
- Sticky left sidebar as a floating card; one long scrolling page; scroll-spy highlights the active section in red.
- **Numbering only where there's a real sequence** (the brand site uses `01 — 04` eyebrows per top-level section, which reads as a deliberate index — fine). Don't add numbers as decoration elsewhere.
- Reuse the brand's custom-illustration language when the Illustration Style section is built.

## Do / Don't

- **Do** drive every color and type choice from `:root` in `global.css`.
- **Do** keep red as a precise accent.
- **Don't** use system/default fonts or generic gray-on-white card UI.
- **Don't** add gradients, glows, or effects that aren't part of the brand.

## Accessibility

- Red `#ef3340` on cream `#f8f1e0` is acceptable for large/bold display and UI accents, but contrast is borderline for small body text — use ink `#101820` or gray `#53565a` for running text. The red is for labels and emphasis, matching the brand's own usage.
- Maintain visible keyboard focus and respect `prefers-reduced-motion` (already in `global.css`).
