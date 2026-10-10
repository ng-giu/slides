<script setup lang="ts">
/**
 * Filename label above a code block. `state` says what the student does with
 * the file, so a step that spans files is never ambiguous:
 *   new  -> create this file (it does not exist yet)
 *   edit -> change a file that already exists
 */
defineProps<{ name: string; state?: 'new' | 'edit' }>()
</script>

<template>
  <div class="giu-filetag">
    <span v-if="state" class="giu-filetag__state" :class="`is-${state}`">{{ state === 'new' ? 'New file' : 'Edit' }}</span>
    {{ name }}
  </div>
</template>
