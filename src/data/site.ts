const siteOrigin = (import.meta.env.SITE_URL ?? 'https://example.org').replace(/\/$/, '');
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteUrl = `${siteOrigin}${basePath}`;

export const site = {
  name: 'Blog CTZ',
  title: 'Blog CTZ · 沙楚子的分享',
  description: '一个喜欢瞎折腾的设计师 👾 不定期的分享',
  url: siteUrl,
  author: {
    name: '沙楚子',
    bio: '概念设计 / 中国建筑史 / Vibe Coding / ++',
    email: 'ctz_3e0@163.com',
  },
  locale: 'zh-cn',
  locales: ['zh-cn', 'en'] as const,
  writingPageSize: 8,
  tagIndexThreshold: 1,
  license: {
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  social: [] as Array<{ label: string; href: string }>,
  features: {
    search: true,
    favorites: true,
    theme: true,
    rss: true,
    share: true,
    tips: false,
    newsletter: false,
    comments: false,
  },
} as const;

export type Locale = (typeof site.locales)[number];
