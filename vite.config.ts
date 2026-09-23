import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: true,
  },
  // Pre-bundle eagerly: the theme's `end`/`media` layouts lazily pull in
  // QrCode.vue -> qrcode. If Vite only discovers it once a slide using
  // those layouts actually renders, it triggers a live re-optimize +
  // page reload — which the PDF exporter doesn't handle gracefully and
  // can produce blank pages for decks that use those layouts.
  optimizeDeps: {
    include: ['qrcode'],
  },
})
