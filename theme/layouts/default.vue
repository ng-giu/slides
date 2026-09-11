<script setup lang="ts">
import SlideIcon from '../components/SlideIcon.vue'

defineProps<{ dense?: boolean; icon?: string }>()
</script>

<template>
  <div class="slidev-layout" :class="{ 'is-dense': dense }">
    <SlideIcon :name="icon" class="giu-slide-icon" />
    <slot />
    <GiuFooter />
  </div>
</template>
