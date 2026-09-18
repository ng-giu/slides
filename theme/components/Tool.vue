<script setup lang="ts">
/**
 * Inline mention of a tool or technology — an icon plus its name, in the
 * tool's own brand color, so a tool reads as itself wherever it comes up in
 * prose (`Open <Tool name="vscode" />` rather than plain text). Icons come
 * from Simple Icons via the UnoCSS icon preset Slidev ships with
 * (@iconify-json/simple-icons). The `i-simple-icons-*` strings are written
 * out in full — see SlideIcon.vue for why a dynamically built class silently
 * fails. Add a tool by adding one line to the map below; find its slug at
 * simpleicons.org.
 */
const TOOLS: Record<string, { icon: string; label: string; color: string }> = {
  vscode: { icon: 'i-simple-icons-visualstudiocode', label: 'VS Code', color: '#007ACC' },
  nodejs: { icon: 'i-simple-icons-nodedotjs', label: 'Node.js', color: '#3C873A' },
  npm: { icon: 'i-simple-icons-npm', label: 'npm', color: '#CB3837' },
  git: { icon: 'i-simple-icons-git', label: 'Git', color: '#D14027' },
  github: { icon: 'i-simple-icons-github', label: 'GitHub', color: '#181717' },
  mongodb: { icon: 'i-simple-icons-mongodb', label: 'MongoDB', color: '#3FA037' },
  express: { icon: 'i-simple-icons-express', label: 'Express', color: '#000000' },
  react: { icon: 'i-simple-icons-react', label: 'React', color: '#0F9BC4' },
  javascript: { icon: 'i-simple-icons-javascript', label: 'JavaScript', color: '#C9A227' },
  html5: { icon: 'i-simple-icons-html5', label: 'HTML', color: '#E34F26' },
  css3: { icon: 'i-simple-icons-css3', label: 'CSS', color: '#1572B6' },
  figma: { icon: 'i-simple-icons-figma', label: 'Figma', color: '#D8380F' },
}

const props = defineProps<{ name: string; label?: string }>()
</script>

<template>
  <span v-if="TOOLS[props.name]" class="giu-tool" :style="{ color: TOOLS[props.name].color }">
    <i class="giu-tool__icon" :class="TOOLS[props.name].icon" aria-hidden="true" />{{ props.label ?? TOOLS[props.name].label }}
  </span>
</template>
