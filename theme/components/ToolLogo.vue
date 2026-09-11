<script setup lang="ts">
/**
 * The real product mark for a tool slide (VS Code, Git, ...). Distinct from
 * SlideIcon: that one says what kind of slide this is, this one says which tool
 * the slide is about.
 */
defineProps<{ src: string; alt?: string }>()
</script>

<template>
  <img class="giu-toollogo" :src="src" :alt="alt || ''" />
</template>
