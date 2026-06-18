import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Static site (Astro's default output). The React integration lets us hydrate
// only the interactive "islands" — everything else ships as plain HTML.
export default defineConfig({
  // Deployed via GitHub Pages as a project site (served under /ta-brand).
  // When a custom domain is set up, change `site` to the real domain and
  // remove `base` (or set it to '/').
  site: 'https://arkanuxui.github.io',
  base: '/ta-brand',
  integrations: [react()],
});
