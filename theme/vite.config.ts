import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: true,
  },
  // See root vite.config.ts for why qrcode must be pre-bundled eagerly.
  optimizeDeps: {
    include: ['qrcode'],
  },
})
