import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f3f7fd',
  '--slot4-page-text': '#081426',
  '--slot4-panel-bg': '#eaf3fb',
  '--slot4-surface-bg': '#eef6ff',
  '--slot4-muted-text': '#3c526e',
  '--slot4-soft-muted-text': '#6c7d95',
  '--slot4-accent': '#2f6ee5',
  '--slot4-accent-fill': '#10c6ad',
  '--slot4-accent-soft': '#d9fff7',
  '--slot4-dark-bg': '#1f2a38',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#dceaf6',
  '--slot4-cream': '#f7fbff',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#2f6ee5',
  '--slot4-gray': '#edf4fb',
  '--slot4-body-gradient': 'linear-gradient(180deg, #eef6ff 0%, #f7fbff 46%, #eef6ff 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[#d6e4f2]',
  darkBorder: 'border-white/15',
  shadow: 'shadow-[0_18px_48px_rgba(28,76,130,0.10)]',
  shadowStrong: 'shadow-[0_28px_90px_rgba(10,41,78,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(47,110,229,0.06),rgba(7,32,62,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10',
    sectionY: 'py-14 sm:py-18 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[260px] shrink-0 snap-start sm:w-[300px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-light leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.1rem]',
    sectionTitle: 'text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg} rounded-[10px]`,
    soft: `border ${editablePalette.border} ${editablePalette.panelBg} rounded-[10px]`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#235aaa] px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#17427f]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#2f6ee5]/30 bg-white px-7 py-3.5 text-sm font-black text-[#2362c9] transition hover:bg-[#eaf3fb]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-[5px] bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#0aa58f]`,
  },
  media: {
    frame: `relative overflow-hidden rounded-[10px] ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(28,76,130,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a Newswire-inspired light masthead, blue navigation, teal actions, sweeping hero shapes, service sections, and a dark footer.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Render all posts defensively with fallbacks for missing images, categories, summaries, or dates.',
  'Branding must remain display-only inside editable components and must not alter core routing or backend behavior.',
] as const
