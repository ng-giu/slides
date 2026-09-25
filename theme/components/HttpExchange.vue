<script setup lang="ts">
/**
 * One HTTP round trip, drawn: a client sends a request (method, URL, optional
 * body) to a server, and the server answers (status, optional body). Built in
 * HTML so it takes the theme's type and colours, and so every example on a
 * slide can show the real method, URL and JSON rather than a stock picture.
 *
 *   <HttpExchange method="POST" url="/api/listings"
 *     body='{ "title": "Beach House" }'
 *     status="201 Created" response='{ "id": 4, ... }' />
 *
 * Leave out `method`, `url` and `status` for a generic picture of the idea.
 */
const props = withDefaults(
  defineProps<{
    method?: string
    url?: string
    body?: string
    status?: string
    response?: string
    client?: string
    server?: string
  }>(),
  { client: 'Client', server: 'Server' },
)

const methodClass = (m?: string) => `is-${(m || 'any').toLowerCase()}`
const statusClass = (s?: string) => (s && /^[45]/.test(s) ? 'is-error' : 'is-ok')
</script>

<template>
  <div class="giu-http">
    <div class="giu-http__end">
      <i class="i-lucide-laptop giu-http__icon" aria-hidden="true" />
      <span>{{ props.client }}</span>
    </div>

    <div class="giu-http__wire">
      <div class="giu-http__leg">
        <div class="giu-http__tag">Request</div>
        <div class="giu-http__line">
          <span class="giu-http__method" :class="methodClass(props.method)">{{ props.method || 'METHOD' }}</span>
          <code class="giu-http__url">{{ props.url || '/some/url' }}</code>
        </div>
        <pre v-if="props.body" class="giu-http__json">{{ props.body }}</pre>
        <div class="giu-http__arrow is-right" />
      </div>

      <div class="giu-http__leg">
        <div class="giu-http__arrow is-left" />
        <div class="giu-http__tag">Response</div>
        <div class="giu-http__line">
          <span class="giu-http__status" :class="statusClass(props.status)">{{ props.status || 'STATUS' }}</span>
        </div>
        <pre v-if="props.response" class="giu-http__json">{{ props.response }}</pre>
      </div>
    </div>

    <div class="giu-http__end">
      <i class="i-lucide-server giu-http__icon" aria-hidden="true" />
      <span>{{ props.server }}</span>
    </div>
  </div>
</template>
