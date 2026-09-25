<script setup lang="ts">
/**
 * A left-to-right chain of steps, each handing on to the next: request
 * layers, a middleware pipeline, a build process. Each step has a short
 * title, and optionally one line of code and a one-line caption.
 *
 * Steps are long enough, and full enough of quotes, that they read best as
 * slide frontmatter rather than an inline attribute:
 *
 *   ---
 *   layers:
 *     - { title: Route, code: 'app.get("/api/listings/:id", ...)', sub: Picks the controller }
 *     - { title: Controller, code: getListing(req, res) }
 *   ---
 *   <Flow :steps="$frontmatter.layers" back="The response travels back" />
 *
 * `back` draws a return arrow under the chain, labelled.
 */
defineProps<{ steps: { title: string; code?: string; sub?: string }[]; back?: string }>()
</script>

<template>
  <div class="giu-flow">
    <div class="giu-flow__row">
      <template v-for="(s, i) in steps" :key="i">
        <div v-if="i > 0" class="giu-flow__arrow" aria-hidden="true" />
        <div class="giu-flow__step">
          <div class="giu-flow__title">{{ s.title }}</div>
          <code v-if="s.code" class="giu-flow__code">{{ s.code }}</code>
          <div v-if="s.sub" class="giu-flow__sub">{{ s.sub }}</div>
        </div>
      </template>
    </div>
    <div v-if="back" class="giu-flow__back"><span>{{ back }}</span></div>
  </div>
</template>
