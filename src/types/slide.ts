export type Pillar = {
  title: string
}

export type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  time: string
  kind: 'cover' | 'statement' | 'bullets' | 'pillars' | 'case' | 'practice'
  bullets?: readonly string[]
  highlight?: string
  pillars?: readonly Pillar[]
}

export type SlideDeck = readonly [Slide, ...Slide[]]
