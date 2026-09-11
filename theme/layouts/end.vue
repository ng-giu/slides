<script setup lang="ts">
defineProps<{ sub?: string; image?: string }>()
</script>

<template>
  <div class="slidev-layout giu-end" :class="{ 'has-image': image }">
    <div class="giu-end__body">
      <slot />
      <div v-if="sub" class="giu-end__sub">{{ sub }}</div>
    </div>
    <img v-if="image" class="giu-end__img" :src="image" alt="" />
    <GiuFooter />
  </div>
</template>
