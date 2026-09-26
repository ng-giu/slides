<script setup lang="ts">
/**
 * The real product mark for a tool slide (VS Code, Git, ...). Distinct from
 * SlideIcon: that one says what kind of slide this is, this one says which tool
 * the slide is about.
 *
 * Give it `src` for an image file, or `name` for a tool from ../tools.ts —
 * drawn from the icon set in the tool's brand colour, so it stays sharp at any
 * size and needs no file in the repo. `size="lg"` draws the name-based mark
 * large, with its label under it; that is what a media slide's `tools:` uses.
 */
import { TOOLS } from '../tools'

const props = defineProps<{ src?: string; name?: string; alt?: string; size?: 'lg' }>()
</script>

<template>
  <img v-if="props.src" class="giu-toollogo" :src="props.src" :alt="props.alt || ''" />
  <div
    v-else-if="props.name && TOOLS[props.name]"
    class="giu-toollogo giu-toollogo--mark"
    :class="{ 'is-lg': props.size === 'lg' }"
    :style="{ color: TOOLS[props.name].color }"
    role="img"
    :aria-label="props.alt || TOOLS[props.name].label"
  >
    <i class="giu-toollogo__icon" :class="TOOLS[props.name].icon" aria-hidden="true" />
    <span v-if="props.size === 'lg'" class="giu-toollogo__label">{{ TOOLS[props.name].label }}</span>
  </div>
</template>
