import { EPillar, type Pillars } from './types';

const rawImages: Record<string, string> = import.meta.glob('/src/shared/assets/pillars/*.png', {
  eager: true,
  import: 'default',
});

function getPart(name: string) {
  return rawImages[`/src/shared/assets/pillars/pillar_part_${name}.png`];
}

export const pillars: Pillars = {
  [EPillar.SACRIFICE_TRANSFORMATION]: [
    {
      id: 1_2,
      title: '',
      image: getPart('phalo'),
    },
    {
      id: 1_3,
      title: '',
      image: getPart('plukki'),
    },
    {
      id: 1_4,
      title: '',
      image: getPart('pfungi'),
    },
    {
      id: 1_5,
      title: '',
      image: getPart('prat'),
    },
    {
      id: 1_6,
      title: '',
      image: getPart('pghost'),
    },
    {
      id: 1_7,
      title: '',
      image: getPart('secrett'),
    },
    {
      id: 1_8,
      title: '',
      image: getPart('dseffect'),
    },
    {
      id: 1_9,
      title: '',
      image: getPart('seffect'),
    },
    {
      id: 1_10,
      title: '',
      image: getPart('mbots'),
    },
    {
      id: 1_11,
      title: '',
      image: getPart('mrain'),
    },
    {
      id: 1_12,
      title: '',
      image: getPart('train'),
    },
    {
      id: 1_13,
      title: '',
      image: getPart('grain'),
    },
    {
      id: 1_14,
      title: '',
      image: getPart('wrain'),
    },
    {
      id: 1_15,
      title: '',
      image: getPart('urain'),
    },
    {
      id: 1_16,
      title: 'Sacrifice Treasure Chest',
      image: getPart('crain'),
    },
  ],
  [EPillar.ESSENCES]: [
    {
      id: 2_2,
      title: '',
      image: getPart('dsunmoon'),
    },
    {
      id: 2_3,
      title: '',
      image: getPart('sunmoon'),
    },
    {
      id: 2_4,
      title: '',
      image: getPart('dmoong'),
    },
    {
      id: 2_5,
      title: '',
      image: getPart('dmoon'),
    },
    {
      id: 2_6,
      title: '',
      image: getPart('moong'),
    },
    {
      id: 2_7,
      title: '',
      image: getPart('moona'),
    },
    {
      id: 2_8,
      title: '',
      image: getPart('moon'),
    },
    {
      id: 2_9,
      title: '',
      image: getPart('essenceal'),
    },
    {
      id: 2_10,
      title: '',
      image: getPart('essencea'),
    },
    {
      id: 2_11,
      title: '',
      image: getPart('essencee'),
    },
    {
      id: 2_12,
      title: '',
      image: getPart('essencew'),
    },
    {
      id: 2_13,
      title: '',
      image: getPart('essencef'),
    },
  ],
  [EPillar.COMPLETIONS]: [
    {
      id: 3_2,
      title: '',
      image: getPart('endn'),
    },
    {
      id: 3_3,
      title: '',
      image: getPart('endp'),
    },
    {
      id: 3_4,
      title: '',
      image: getPart('endg'),
    },
    {
      id: 3_5,
      title: '',
      image: getPart('endb'),
    },
    {
      id: 3_6,
      title: '',
      image: getPart('endt'),
    },
    {
      id: 3_7,
      title: '',
      image: getPart('end0'),
    },
  ],
  [EPillar.BOSSES]: [
    {
      id: 4_1,
      title: '',
      image: getPart('boss'),
    },
    {
      id: 4_2,
      title: '',
      image: getPart('minisky'),
    },
    {
      id: 4_3,
      title: '',
      image: getPart('yeah3'),
    },
    {
      id: 4_4,
      title: '',
      image: getPart('minigm'),
    },
    {
      id: 4_5,
      title: '',
      image: getPart('threelk'),
    },
    {
      id: 4_6,
      title: '',
      image: getPart('elk'),
    },
    {
      id: 4_7,
      title: '',
      image: getPart('fish'),
    },
    {
      id: 4_8,
      title: '',
      image: getPart('maggot'),
    },
    {
      id: 4_9,
      title: '',
      image: getPart('meme'),
    },
    {
      id: 4_10,
      title: '',
      image: getPart('minir'),
    },
    {
      id: 4_11,
      title: '',
      image: getPart('minia'),
    },
    {
      id: 4_12,
      title: '',
      image: getPart('minip'),
    },
    {
      id: 4_13,
      title: '',
      image: getPart('minigh'),
    },
    {
      id: 4_14,
      title: '',
      image: getPart('meat'),
    },
    {
      id: 4_15,
      title: '',
      image: getPart('minil'),
    },
    {
      id: 4_16,
      title: '',
      image: getPart('minid'),
    },
  ],
  [EPillar.ACCOMPLISHMENTS]: [
    {
      id: 5_1,
      title: '',
      image: getPart('col'),
    },
    {
      id: 5_2,
      title: '',
      image: getPart('sunkill'),
    },
    {
      id: 5_3,
      title: '',
      image: getPart('dsun'),
    },
    {
      id: 5_4,
      title: '',
      image: getPart('sun'),
    },
    {
      id: 5_5,
      title: '',
      image: getPart('nohit'),
    },
    {
      id: 5_6,
      title: '',
      image: getPart('minit'),
    },
    {
      id: 5_7,
      title: '',
      image: getPart('clock'),
    },
    {
      id: 5_8,
      title: '',
      image: getPart('nogold'),
    },
    {
      id: 5_9,
      title: '',
      image: getPart('pacifist'),
    },
    {
      id: 5_10,
      title: '',
      image: getPart('orba'),
    },
    {
      id: 5_11,
      title: '',
      image: getPart('orbe'),
    },
    {
      id: 5_12,
      title: '',
      image: getPart('orbf'),
    },
  ],
  [EPillar.SECRETS]: [
    {
      id: 6_1,
      title: '',
      image: getPart('null'),
    },
    {
      id: 6_2,
      title: '',
      image: getPart('hutb'),
    },
    {
      id: 6_3,
      title: '',
      image: getPart('huta'),
    },
    {
      id: 6_4,
      title: '',
      image: getPart('secrethg'),
    },
    {
      id: 6_5,
      title: '',
      image: getPart('secretbe'),
    },
    {
      id: 6_6,
      title: '',
      image: getPart('secretme'),
    },
    {
      id: 6_7,
      title: '',
      image: getPart('secretae'),
    },
    {
      id: 6_8,
      title: '',
      image: getPart('secretf'),
    },
    {
      id: 6_9,
      title: '',
      image: getPart('secretten'),
    },
    {
      id: 6_10,
      title: '',
      image: getPart('secretall'),
    },
    {
      id: 6_11,
      title: '',
      image: getPart('secretcl'),
    },
    {
      id: 6_12,
      title: '',
      image: getPart('secretcd'),
    },
    {
      id: 6_13,
      title: '',
      image: getPart('yeah2'),
    },
    {
      id: 6_14,
      title: '',
      image: getPart('yeah'),
    },
    {
      id: 6_15,
      title: '',
      image: getPart('secretg'),
    },
  ],
};
