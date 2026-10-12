<script setup lang="ts">
import { withBase } from '../base'
import QrCode from '../components/QrCode.vue'
import ToolLogo from '../components/ToolLogo.vue'

// `tools:` draws large product marks (by name, from ../tools.ts) in the image's
// spot instead of a picture — no image file needed.
defineProps<{ image?: string; tools?: string[]; side?: 'left' | 'right'; alt?: string; qr?: boolean; dense?: boolean }>()
</script>

<template>
  <div class="slidev-layout" :class="{ 'is-dense': dense }">
    <div class="giu-media">
      <template v-if="side === 'left'">
        <div v-if="tools" class="giu-media__img giu-media__tools">
          <ToolLogo v-for="t in tools" :key="t" :name="t" size="lg" />
        </div>
        <QrCode v-else-if="qr" class="giu-media__img" :value="image" />
        <img v-else class="giu-media__img" :src="withBase(image)" :alt="alt || ''" />
      </template>
      <div class="giu-media__body"><slot /></div>
      <template v-if="side !== 'left'">
        <div v-if="tools" class="giu-media__img giu-media__tools">
          <ToolLogo v-for="t in tools" :key="t" :name="t" size="lg" />
        </div>
        <QrCode v-else-if="qr" class="giu-media__img" :value="image" />
        <img v-else class="giu-media__img" :src="withBase(image)" :alt="alt || ''" />
      </template>
    </div>
    <GiuFooter />
  </div>
</template>
