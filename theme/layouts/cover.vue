<script setup lang="ts">
defineProps<{ logo?: string }>()
</script>

<template>
  <div class="slidev-layout giu-cover">
    <div />
    <div>
      <slot />
    </div>
    <div>
      <img class="giu-cover__logo" :src="logo || '/giu-logo.png'" alt="German International University" />
    </div>
    <GiuFooter />
  </div>
</template>
