// @unocss-include
/**
 * Every tool or technology the decks mention by name, in one place, so the
 * inline mention (`<Tool name="npm" />`) and the big product mark on a tool
 * slide (`<ToolLogo name="npm" />`, `tools: [npm]` on a media slide) always
 * agree on icon, label and colour.
 *
 * Icons come from Simple Icons via the UnoCSS icon preset Slidev ships with
 * (@iconify-json/simple-icons); a tool Simple Icons lacks borrows a Lucide
 * mark instead. Write every `i-*` class out in full: UnoCSS scans source text
 * for them, so a class built dynamically resolves to nothing and the icon
 * silently disappears. The `@unocss-include` comment above is what makes
 * UnoCSS scan this file at all — plain .ts files are skipped by default.
 *
 * Add a tool with one line; find its slug at simpleicons.org.
 */
export interface ToolInfo {
  icon: string
  label: string
  color: string
}

export const TOOLS: Record<string, ToolInfo> = {
  vscode: { icon: 'i-simple-icons-visualstudiocode', label: 'VS Code', color: '#007ACC' },
  nodejs: { icon: 'i-simple-icons-nodedotjs', label: 'Node.js', color: '#3C873A' },
  npm: { icon: 'i-simple-icons-npm', label: 'npm', color: '#CB3837' },
  git: { icon: 'i-simple-icons-git', label: 'Git', color: '#D14027' },
  github: { icon: 'i-simple-icons-github', label: 'GitHub', color: '#181717' },
  mongodb: { icon: 'i-simple-icons-mongodb', label: 'MongoDB', color: '#3FA037' },
  mongoose: { icon: 'i-simple-icons-mongoose', label: 'Mongoose', color: '#880000' },
  express: { icon: 'i-simple-icons-express', label: 'Express', color: '#000000' },
  react: { icon: 'i-simple-icons-react', label: 'React', color: '#0F9BC4' },
  javascript: { icon: 'i-simple-icons-javascript', label: 'JavaScript', color: '#C9A227' },
  html5: { icon: 'i-simple-icons-html5', label: 'HTML', color: '#E34F26' },
  css3: { icon: 'i-simple-icons-css3', label: 'CSS', color: '#1572B6' },
  figma: { icon: 'i-simple-icons-figma', label: 'Figma', color: '#D8380F' },
  postman: { icon: 'i-simple-icons-postman', label: 'Postman', color: '#FF6C37' },
  thunderclient: { icon: 'i-lucide-zap', label: 'Thunder Client', color: '#8E4F9C' },
}
