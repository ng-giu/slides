<script setup lang="ts">
/**
 * Renders `value` as a QR code, computed entirely in the browser at render
 * time — nothing is fetched or written to disk. It builds a plain inline SVG
 * (not a <canvas>), so the same markup shows up whether Slidev is serving a
 * live dev session or a static build, and a PDF export (which screenshots
 * the built pages) captures it exactly like any other vector content.
 */
import { computed } from 'vue'
import { create as createQrCode } from 'qrcode'

const props = defineProps<{ value: string }>()

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
  <div class="giu-qr" v-html="svg" />
</template>

<style>
.giu-qr {
  display: flex;
  align-items: center;
  justify-content: center;
}
.giu-qr svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
