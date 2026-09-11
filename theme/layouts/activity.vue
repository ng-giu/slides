<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import SlideIcon from '../components/SlideIcon.vue'

defineProps<{ label?: string; dense?: boolean }>()

// See split.vue — `title` is reserved and never arrives as a prop.
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout giu-activity-slide" :class="{ 'is-dense': dense }">
    <div class="giu-activity-slide__head">
      <SlideIcon name="activity" />
      <div>
        <div v-if="label" class="giu-activity-slide__label">{{ label }}</div>
        <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
      </div>
    </div>
    <slot />
    <GiuFooter />
  </div>
</template>
