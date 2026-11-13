<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $slidev } = useSlideContext()
</script>

<template>
  <footer class="giu-footer">
    <span>
      {{ $slidev.configs.courseTitle }} - {{ $slidev.configs.course }}
      <span class="giu-footer__sep">|</span>
      <template v-if="$slidev.configs.track">
        {{ $slidev.configs.track }}
        <span class="giu-footer__sep">|</span>
      </template>
      GIU
    </span>
    <span class="giu-footer__page">{{ $slidev.nav.currentPage }}</span>
  </footer>
</template>
