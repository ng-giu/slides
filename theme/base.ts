// Public files (`/img/...`) passed as props or frontmatter are plain strings, so
// Vite never rewrites them for the site's base path the way it does `<img src>`
// in Markdown. On GitHub Pages a deck lives at /<course>/<deck>/, so prefix them.
export function withBase(url?: string): string | undefined {
  if (!url || !url.startsWith('/') || url.startsWith('//')) return url
  return import.meta.env.BASE_URL.replace(/\/$/, '') + url
}
