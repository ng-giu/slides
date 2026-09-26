<script setup lang="ts">
/**
 * Inline mention of a tool or technology — an icon plus its name, in the
 * tool's own brand color, so a tool reads as itself wherever it comes up in
 * prose (`Open <Tool name="vscode" />` rather than plain text). The tool list
 * lives in ../tools.ts, shared with ToolLogo; add a tool there.
 */
import { TOOLS } from '../tools'

const props = defineProps<{ name: string; label?: string }>()
</script>

<template>
  <span v-if="TOOLS[props.name]" class="giu-tool" :style="{ color: TOOLS[props.name].color }">
    <i class="giu-tool__icon" :class="TOOLS[props.name].icon" aria-hidden="true" />{{ props.label ?? TOOLS[props.name].label }}
  </span>
</template>
