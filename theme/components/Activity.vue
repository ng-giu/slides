<script setup lang="ts">
import SlideIcon from './SlideIcon.vue'

/**
 * An in-lab task sitting inside a content slide. Carries the same mark as the
 * full-slide `activity` layout, so a task reads as a task wherever it appears.
 */
defineProps<{ label?: string }>()
</script>

<template>
  <div class="giu-activity">
    <div class="giu-activity__head">
      <SlideIcon name="activity" />
      <span class="giu-activity__label">{{ label || 'Activity' }}</span>
    </div>
    <slot />
  </div>
</template>
