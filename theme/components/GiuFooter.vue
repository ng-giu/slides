<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $slidev } = useSlideContext()
</script>

<template>
  <footer class="giu-footer">
    <span>
      {{ $slidev.configs.courseTitle }} - {{ $slidev.configs.course }}
      <span class="giu-footer__sep">|</span>
      {{ $slidev.configs.track }}
      <span class="giu-footer__sep">|</span>
      GIU
    </span>
    <span class="giu-footer__page">{{ $slidev.nav.currentPage }}</span>
  </footer>
</template>
