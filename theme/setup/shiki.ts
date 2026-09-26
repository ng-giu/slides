import { defineShikiSetup } from '@slidev/types'

// Slidev's default code theme (vitesse) is pale on the light code background:
// grey punctuation, tan keys, faint comments. github-light keeps every token
// readable when projected or printed. Used for dark mode too, because the
// theme draws code on a light surface in both modes.
export default defineShikiSetup(() => ({
  themes: {
    light: 'github-light',
    dark: 'github-light',
  },
}))
