export enum EPillar {
  SACRIFICE_TRANSFORMATION,
  ESSENCES,
  COMPLETIONS,
  BOSSES,
  ACCOMPLISHMENTS,
  SECRETS,
}

export type Pillar = { title: string; image: string; isUnlocked?: boolean }
export type Pillars = Record<EPillar, Pillar[]>
