export type Pillar = {
  title: string
}

export type CopyLinkAction = {
  label: string
  hash: string
}

export type CopyTextAction = {
  label: string
  content: string
  successLabel?: string
}

export type ComparisonColumn = {
  label: string
  title: string
  items: readonly string[]
  footer: string
  tone?: 'accent' | 'neutral'
}

export type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  time: string
  density?: 'compact'
  kind: 'cover' | 'statement' | 'bullets' | 'pillars' | 'case' | 'practice' | 'briefing' | 'comparison'
  bullets?: readonly string[]
  highlight?: string
  pillars?: readonly Pillar[]
  comparison?: readonly [ComparisonColumn, ComparisonColumn]
  copyLink?: CopyLinkAction
  copyText?: CopyTextAction
}

export type SlideDeck = readonly [Slide, ...Slide[]]
