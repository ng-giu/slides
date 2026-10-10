<script setup lang="ts">
/**
 * Renders `value` as a QR code, computed entirely in the browser at render
 * time — nothing is fetched or written to disk. It builds a plain inline SVG
 * (not a <canvas>), so the same markup shows up whether Slidev is serving a
 * live dev session or a static build, and a PDF export (which screenshots
 * the built pages) captures it exactly like any other vector content.
 *
 * The link is always written out, clickable, under the code. A QR alone forces
 * a reader of the PDF or the live slides to reach for a second device.
 */
import { computed } from 'vue'
import { create as createQrCode } from 'qrcode'

const props = defineProps<{ value: string }>()

// What the reader sees: the URL without the scheme, which says nothing new
const shown = computed(() => props.value.replace(/^https?:\/\//, '').replace(/\/$/, ''))

// A one-module quiet zone border, per the QR spec's minimum recommendation.
const QUIET_ZONE = 4

const svg = computed(() => {
  const qr = createQrCode(props.value, { errorCorrectionLevel: 'M' })
  const { size } = qr.modules
  const dim = size + QUIET_ZONE * 2

  let path = ''
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (qr.modules.get(row, col)) {
        path += `M${col + QUIET_ZONE},${row + QUIET_ZONE}h1v1h-1z`
      }
    }
  }

  return `<svg viewBox="0 0 ${dim} ${dim}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect width="${dim}" height="${dim}" fill="#fff"/><path d="${path}" fill="#000"/></svg>`
})
</script>

<template>
  <div class="giu-qr">
    <div class="giu-qr__code" v-html="svg" />
    <a class="giu-qr__link" :href="value" target="_blank" rel="noopener">{{ shown }}</a>
  </div>
</template>

<style>
.giu-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 0;
}
.giu-qr__code {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.giu-qr__code svg {
  height: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  display: block;
}
.giu-qr__link {
  flex: none;
  max-width: 100%;
  font-family: var(--slidev-code-font-family, monospace);
  font-size: 0.62rem;
  line-height: 1.35;
  text-align: center;
  overflow-wrap: anywhere;
  color: var(--giu-red, #e2001a);
}
</style>
