import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';

function normalizeSiteUrl(value) {
  const url = value?.trim();
  if (!url) return undefined;
  return url.startsWith('http') ? url : `https://${url}`;
}

// loadEnv covers both local .env files and CI-injected process env.
const env = loadEnv('all', process.cwd(), '');
const basePath = env.BASE_PATH ?? '/';
const site = normalizeSiteUrl(env.SITE_URL)
  ?? normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  ?? 'https://example.org';

export default defineConfig({
  site,
  base: basePath,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
