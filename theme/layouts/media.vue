<script setup lang="ts">
import QrCode from '../components/QrCode.vue'

defineProps<{ image: string; side?: 'left' | 'right'; alt?: string; qr?: boolean }>()
</script>

<template>
  <div class="slidev-layout">
    <div class="giu-media">
      <QrCode v-if="qr && side === 'left'" class="giu-media__img" :value="image" />
      <img
        v-else-if="side === 'left'"
        class="giu-media__img"
        :src="image"
        :alt="alt || ''"
      />
      <div class="giu-media__body"><slot /></div>
      <QrCode v-if="qr && side !== 'left'" class="giu-media__img" :value="image" />
      <img
        v-else-if="side !== 'left'"
        class="giu-media__img"
        :src="image"
        :alt="alt || ''"
      />
    </div>
    <GiuFooter />
  </div>
</template>
