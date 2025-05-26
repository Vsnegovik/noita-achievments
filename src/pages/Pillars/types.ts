export enum EPillar {
  SACRIFICE_TRANSFORMATION,
  ESSENCES,
  COMPLETIONS,
  BOSSES,
  ACCOMPLISHMENTS,
  SECRETS,
  EXTRA,
}

export type Pillar = { id: string; title: string; image: string; isUnlocked?: boolean };
export type Pillars = Record<EPillar, Pillar[]>;
