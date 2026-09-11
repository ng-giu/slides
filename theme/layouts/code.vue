<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

defineProps<{ file?: string; dense?: boolean }>()

// See split.vue — `title` is reserved and never arrives as a prop.
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout giu-code" :class="{ 'is-dense': dense }">
    <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
    <FileTag v-if="file" :name="file" />
    <slot />
    <GiuFooter />
  </div>
</template>
