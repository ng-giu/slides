<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import SlideIcon from '../components/SlideIcon.vue'

/**
 * Link list, optionally grouped. Write plain Markdown — an `##` heading starts a
 * group and the list under it belongs to that group. Groups flow down one column
 * and on into the next, and are kept whole rather than split across the break.
 */
defineProps<{ dense?: boolean; icon?: string; columns?: number }>()

const { $frontmatter } = useSlideContext()

// Kept out of the template: an entity written inside a mustache renders literally.
const DEFAULT_TITLE = 'References & useful links'
</script>

<template>
  <div
    class="slidev-layout giu-refs"
    :class="{ 'is-dense': dense }"
    :style="{ '--giu-refs-columns': columns ?? 2 }"
  >
    <SlideIcon :name="icon || 'references'" class="giu-slide-icon" />
    <h1>{{ $frontmatter.title || DEFAULT_TITLE }}</h1>
    <div class="giu-refs__body"><slot /></div>
    <GiuFooter />
  </div>
</template>
