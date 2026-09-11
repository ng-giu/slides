<script setup lang="ts">
defineProps<{
  name: string
  role: string
  email?: string
  room?: string
}>()
</script>

<template>
  <div class="giu-person">
    <div class="giu-person__role">{{ role }}</div>
    <div class="giu-person__name">{{ name }}</div>
    <div class="giu-person__meta">
      <template v-if="email">{{ email }}<br /></template>
      <template v-if="room">{{ room }}</template>
    </div>
  </div>
</template>
