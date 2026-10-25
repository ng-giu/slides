<script setup lang="ts">
/**
 * A box-and-arrow diagram: tinted groups, cards with an icon badge, and
 * orthogonal arrows with rounded corners. Everything is laid out in pixels on
 * a fixed canvas (`width` x `height`), which works because Slidev scales the
 * whole slide, not its contents.
 *
 * Data reads best from the slide's frontmatter:
 *
 *   ---
 *   diagram:
 *     width: 860
 *     height: 300
 *     groups:
 *       - { id: author, x: 0, y: 0, w: 250, h: 250, label: You write, icon: pencil, tone: slate }
 *     nodes:
 *       - { id: dev, x: 15, y: 100, w: 80, h: 44, label: You, icon: user, tone: slate }
 *     edges:
 *       - { from: dev, to: jsx }                       # right side to left side
 *       - { from: vite, to: out, fromSide: b, toSide: t, fromAt: 0.8, toAt: 0.8 }
 *   ---
 *   <Diagram v-bind="$frontmatter.diagram" />
 *
 * An edge joins node or group ids. Sides are r, l, t, b (default r -> l);
 * `fromAt` / `toAt` place the end along that side (0 to 1, default 0.5).
 */
import { computed } from 'vue'

type Tone = 'slate' | 'amber' | 'green' | 'navy' | 'red'
type Box = { id: string; x: number; y: number; w: number; h: number; label: string; sub?: string; icon?: string; tone?: Tone }
type Side = 'r' | 'l' | 't' | 'b'
type Edge = { from: string; to: string; fromSide?: Side; toSide?: Side; fromAt?: number; toAt?: number; label?: string }

const props = withDefaults(defineProps<{
  width?: number
  height?: number
  groups?: Box[]
  nodes?: Box[]
  edges?: Edge[]
}>(), { width: 860, height: 300, groups: () => [], nodes: () => [], edges: () => [] })

// Written out in full: UnoCSS only generates icon classes it finds in source.
const ICONS: Record<string, string> = {
  pencil: 'i-lucide-pencil-line',
  user: 'i-lucide-user',
  'file-code': 'i-lucide-file-code',
  palette: 'i-lucide-palette',
  image: 'i-lucide-image',
  code: 'i-lucide-code',
  package: 'i-lucide-package',
  zap: 'i-lucide-zap',
  folder: 'i-lucide-folder-open',
  file: 'i-lucide-file',
  server: 'i-lucide-server',
  globe: 'i-lucide-globe',
  play: 'i-lucide-play',
  database: 'i-lucide-database',
  lock: 'i-lucide-lock',
  key: 'i-lucide-key-round',
  terminal: 'i-lucide-terminal',
  monitor: 'i-lucide-monitor',
}

const boxes = computed(() => {
  const all = new Map<string, Box>()
  for (const b of [...props.groups, ...props.nodes]) all.set(b.id, b)
  return all
})

function anchor(b: Box, side: Side, at = 0.5): [number, number] {
  if (side === 'r') return [b.x + b.w, b.y + b.h * at]
  if (side === 'l') return [b.x, b.y + b.h * at]
  if (side === 't') return [b.x + b.w * at, b.y]
  return [b.x + b.w * at, b.y + b.h]
}

// Corner points of an orthogonal route from a to b, leaving and entering
// perpendicular to the sides they start and end on.
function route(a: [number, number], sa: Side, b: [number, number], sb: Side): [number, number][] {
  const horizA = sa === 'r' || sa === 'l'
  const horizB = sb === 'r' || sb === 'l'
  if (horizA && horizB) {
    if (a[1] === b[1]) return [a, b]
    const mx = (a[0] + b[0]) / 2
    return [a, [mx, a[1]], [mx, b[1]], b]
  }
  if (!horizA && !horizB) {
    if (a[0] === b[0]) return [a, b]
    const my = (a[1] + b[1]) / 2
    return [a, [a[0], my], [b[0], my], b]
  }
  return horizA ? [a, [b[0], a[1]], b] : [a, [a[0], b[1]], b]
}

// A polyline with each corner rounded off
function roundedPath(pts: [number, number][], r = 7): string {
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1], [cx, cy] = pts[i], [nx, ny] = pts[i + 1]
    const d1 = Math.hypot(cx - px, cy - py), d2 = Math.hypot(nx - cx, ny - cy)
    const k = Math.min(r, d1 / 2, d2 / 2)
    const ax = cx - ((cx - px) / d1) * k, ay = cy - ((cy - py) / d1) * k
    const bx = cx + ((nx - cx) / d2) * k, by = cy + ((ny - cy) / d2) * k
    d += ` L ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`
  }
  const last = pts[pts.length - 1]
  return d + ` L ${last[0]} ${last[1]}`
}

const paths = computed(() =>
  props.edges.flatMap((e) => {
    const f = boxes.value.get(e.from), t = boxes.value.get(e.to)
    if (!f || !t) return []
    const sa = e.fromSide ?? 'r', sb = e.toSide ?? 'l'
    const pts = route(anchor(f, sa, e.fromAt), sa, anchor(t, sb, e.toAt), sb)
    return [{ d: roundedPath(pts) }]
  }),
)

const at = (b: Box) => ({ left: `${b.x}px`, top: `${b.y}px`, width: `${b.w}px`, height: `${b.h}px` })
</script>

<template>
  <div class="giu-diagram" :style="{ width: `${width}px`, height: `${height}px` }">
    <div v-for="g in groups" :key="g.id" class="giu-diagram__group" :class="`is-${g.tone || 'slate'}`" :style="at(g)">
      <span class="giu-diagram__chip">
        <span v-if="g.icon" :class="ICONS[g.icon]" />
        {{ g.label }}
      </span>
    </div>

    <svg class="giu-diagram__edges" :viewBox="`0 0 ${width} ${height}`" :width="width" :height="height" aria-hidden="true">
      <defs>
        <marker id="giu-diagram-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#3a3a3a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>
      <path v-for="(p, i) in paths" :key="i" :d="p.d" fill="none" stroke="#3a3a3a" stroke-width="1.4" marker-end="url(#giu-diagram-arrow)" />
    </svg>

    <div v-for="n in nodes" :key="n.id" class="giu-diagram__node" :class="`is-${n.tone || 'slate'}`" :style="at(n)">
      <span v-if="n.icon" class="giu-diagram__badge"><span :class="ICONS[n.icon]" /></span>
      <span class="giu-diagram__label">{{ n.label }}</span>
      <span v-if="n.sub" class="giu-diagram__sub">{{ n.sub }}</span>
    </div>
  </div>
</template>

<style>
.giu-diagram { position: relative; margin: 0.4rem auto 0.8rem; font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif; }
.giu-diagram__edges { position: absolute; inset: 0; overflow: visible; pointer-events: none; }

/* Light tones: a tinted panel for a group, a white card with a tinted edge for a node */
.giu-diagram .is-slate { --tint: #eef3f6; --edge: #9db5c4; --ink: #2f5468; }
.giu-diagram .is-amber { --tint: #fbf3e5; --edge: #e8a33d; --ink: #8a5412; }
.giu-diagram .is-green { --tint: #ebf5ed; --edge: #79b585; --ink: #2f6e3b; }
.giu-diagram .is-navy  { --tint: #eef0f8; --edge: #8f99c9; --ink: #34407e; }
.giu-diagram .is-red   { --tint: #fdeced; --edge: #e2001a; --ink: #a30013; }

.giu-diagram__group {
  position: absolute;
  background: var(--tint);
  border: 1.5px solid var(--edge);
  border-radius: 12px;
}
.giu-diagram__chip {
  position: absolute;
  top: 8px;
  left: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid var(--edge);
  color: var(--ink);
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.giu-diagram__chip > span { font-size: 11px; }

.giu-diagram__node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fff;
  border: 1.5px solid var(--edge);
  border-radius: 9px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 9px 8px 4px;
  line-height: 1.2;
}
.giu-diagram__badge {
  position: absolute;
  top: -11px;
  left: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #fff;
  border: 1.5px solid var(--edge);
  color: var(--ink);
  font-size: 12px;
}
.giu-diagram__label { color: var(--giu-black, #000); font-weight: 600; font-size: 12px; }
.giu-diagram__sub { color: var(--giu-muted, #6f6f6f); font-size: 9.5px; margin-top: 2px; }
</style>
