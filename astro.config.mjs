import { defineConfig } from 'astro/config';

export default defineConfig({
  // Update these two values to match your GitHub repo before deploying.
  // - If your repo is named "tonuser.github.io", remove the `base` line entirely.
  // - Otherwise, base must match your repo name exactly, with a leading slash.
  site: 'https://polo-dybala.github.io',
  base: '/writeups',

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
