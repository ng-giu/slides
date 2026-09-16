<script setup lang="ts">
import QrCode from '../components/QrCode.vue'

defineProps<{ sub?: string; image?: string; qr?: boolean }>()
</script>

<template>
  <div class="slidev-layout giu-end" :class="{ 'has-image': image }">
    <div class="giu-end__body">
      <slot />
      <div v-if="sub" class="giu-end__sub">{{ sub }}</div>
    </div>
    <QrCode v-if="image && qr" class="giu-end__img" :value="image" />
    <img v-else-if="image" class="giu-end__img" :src="image" alt="" />
    <GiuFooter />
  </div>
</template>
