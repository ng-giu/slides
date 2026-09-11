<script setup lang="ts">
import SlideIcon from '../components/SlideIcon.vue'

defineProps<{ sub?: string; icon?: string }>()
</script>

<template>
  <div class="slidev-layout giu-section" :data-type="icon">
    <SlideIcon :name="icon" class="giu-section__icon" />
    <span v-if="icon" class="giu-section__dot" />
    <div class="giu-section__body">
      <div class="giu-section__rule" />
      <slot />
      <div v-if="sub" class="giu-section__sub">{{ sub }}</div>
    </div>
    <GiuFooter />
  </div>
</template>
