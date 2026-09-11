<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import SlideIcon from '../components/SlideIcon.vue'

defineProps<{ file?: string; wideRight?: boolean; dense?: boolean; icon?: string }>()

// `title` is one of Slidev's reserved frontmatter fields, so it is stripped out
// before props reach a layout. Read it off the frontmatter object instead — that
// keeps one source of truth: the deck's `title:` drives both this heading and
// the slide's entry in the overview and PDF outline.
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="slidev-layout giu-split" :class="{ 'is-dense': dense }">
    <SlideIcon :name="icon" class="giu-slide-icon" />
    <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
    <div class="giu-split__grid" :class="{ 'is-wide-right': wideRight }">
      <div><slot /></div>
      <div>
        <FileTag v-if="file" :name="file" />
        <slot name="right" />
      </div>
    </div>
    <GiuFooter />
  </div>
</template>
