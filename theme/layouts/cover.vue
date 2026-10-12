<script setup lang="ts">
import { withBase } from '../base'
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import GiuCoverPattern from '../components/GiuCoverPattern.vue'
import GiuFooter from '../components/GiuFooter.vue'

const { $slidev } = useSlideContext()

const props = withDefaults(
  defineProps<{
    logo?: string
    pattern?: string | boolean
  }>(),
  {
    pattern: true,
  }
)

const resolvedPattern = computed(() => {
  if (props.pattern === false || props.pattern === 'none') {
    return null
  }
  if (typeof props.pattern === 'string' && props.pattern !== 'true') {
    return props.pattern
  }
  const course = String($slidev?.configs?.course || '').toLowerCase()
  const courseTitle = String($slidev?.configs?.courseTitle || '').toLowerCase()
  if (course.includes('ica') || courseTitle.includes('information and communication') || courseTitle.includes('ica')) {
    return 'group3'
  }
  return 'group1'
})
</script>

<template>
  <div class="slidev-layout giu-cover">
    <GiuCoverPattern
      v-if="resolvedPattern"
      :pattern="resolvedPattern"
    />
    <div class="giu-cover__title">
      <slot />
    </div>
    <div class="giu-cover__logo-wrap">
      <img class="giu-cover__logo" :src="withBase(logo || '/giu-logo.png')" alt="German International University" />
    </div>
    <GiuFooter />
  </div>
</template>
