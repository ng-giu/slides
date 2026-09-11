<script setup lang="ts">
defineProps<{ image: string; side?: 'left' | 'right'; alt?: string }>()
</script>

<template>
  <div class="slidev-layout">
    <div class="giu-media">
      <img
        v-if="side === 'left'"
        class="giu-media__img"
        :src="image"
        :alt="alt || ''"
      />
      <div class="giu-media__body"><slot /></div>
      <img
        v-if="side !== 'left'"
        class="giu-media__img"
        :src="image"
        :alt="alt || ''"
      />
    </div>
    <GiuFooter />
  </div>
</template>
