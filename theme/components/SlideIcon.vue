<script setup lang="ts">
/**
 * Slide-type iconography.
 *
 * Every recurring kind of slide carries the same mark all semester, so students
 * learn to recognise the shape of a slide before they read it. Decks never name
 * an icon — they name a slide type in frontmatter (`icon: recap`) and the layout
 * picks the mark. Add a semester-wide slide type by adding one line here.
 *
 * Marks come from Lucide, via the UnoCSS icon preset Slidev ships with
 * (@iconify-json/lucide). The `i-lucide-*` strings are written out in full
 * because UnoCSS scans source text for them — never build them dynamically, or
 * the class will resolve to nothing and the icon will silently disappear.
 */
const ICONS: Record<string, string> = {
  recap: 'i-lucide-rotate-ccw',
  activity: 'i-lucide-circle-check-big',
  assignment: 'i-lucide-clipboard-check',
  intro: 'i-lucide-book-open',
  lifecycle: 'i-lucide-refresh-cw',
  tools: 'i-lucide-wrench',
  people: 'i-lucide-users',
  questions: 'i-lucide-circle-help',
  code: 'i-lucide-code-xml',
  references: 'i-lucide-link',
}

defineProps<{ name?: string }>()
</script>

<template>
  <i v-if="name && ICONS[name]" class="giu-icon" :class="ICONS[name]" aria-hidden="true" />
</template>
