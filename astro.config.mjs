import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Static site (Astro's default output). The React integration lets us hydrate
// only the interactive "islands" — everything else ships as plain HTML.
export default defineConfig({
  // Set the real domain at deploy time (used for canonical URLs / sitemap):
  // site: 'https://brand.tailoredapplications.com',
  integrations: [react()],
});
