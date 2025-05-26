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
      id: 'phalo',
      title: '',
      image: getPart('phalo'),
    },
    {
      id: 'plukki',
      title: '',
      image: getPart('plukki'),
    },
    {
      id: 'pfungi',
      title: '',
      image: getPart('pfungi'),
    },
    {
      id: 'prat',
      title: '',
      image: getPart('prat'),
    },
    {
      id: 'pghost',
      title: '',
      image: getPart('pghost'),
    },
    {
      id: 'secrett',
      title: '',
      image: getPart('secrett'),
    },
    {
      id: 'dseffect',
      title: '',
      image: getPart('dseffect'),
    },
    {
      id: 'seffect',
      title: '',
      image: getPart('seffect'),
    },
    {
      id: 'mbots',
      title: '',
      image: getPart('mbots'),
    },
    {
      id: 'mrain',
      title: '',
      image: getPart('mrain'),
    },
    {
      id: 'train',
      title: '',
      image: getPart('train'),
    },
    {
      id: 'grain',
      title: '',
      image: getPart('grain'),
    },
    {
      id: 'wrain',
      title: '',
      image: getPart('wrain'),
    },
    {
      id: 'urain',
      title: '',
      image: getPart('urain'),
    },
    {
      id: 'crain',
      title: 'Sacrifice Treasure Chest',
      image: getPart('crain'),
    },
  ],
  [EPillar.ESSENCES]: [
    {
      id: 'dsunmoon',
      title: '',
      image: getPart('dsunmoon'),
    },
    {
      id: 'sunmoon',
      title: '',
      image: getPart('sunmoon'),
    },
    {
      id: 'dmoong',
      title: '',
      image: getPart('dmoong'),
    },
    {
      id: 'dmoon',
      title: '',
      image: getPart('dmoon'),
    },
    {
      id: 'moong',
      title: '',
      image: getPart('moong'),
    },
    {
      id: 'moona',
      title: '',
      image: getPart('moona'),
    },
    {
      id: 'moon',
      title: '',
      image: getPart('moon'),
    },
    {
      id: 'essenceal',
      title: '',
      image: getPart('essenceal'),
    },
    {
      id: 'essencea',
      title: '',
      image: getPart('essencea'),
    },
    {
      id: 'essencee',
      title: '',
      image: getPart('essencee'),
    },
    {
      id: 'essencew',
      title: '',
      image: getPart('essencew'),
    },
    {
      id: 'essencef',
      title: '',
      image: getPart('essencef'),
    },
  ],
  [EPillar.COMPLETIONS]: [
    {
      id: 'endn',
      title: '',
      image: getPart('endn'),
    },
    {
      id: 'endp',
      title: '',
      image: getPart('endp'),
    },
    {
      id: 'endg',
      title: '',
      image: getPart('endg'),
    },
    {
      id: 'endb',
      title: '',
      image: getPart('endb'),
    },
    {
      id: 'endt',
      title: '',
      image: getPart('endt'),
    },
    {
      id: 'end0',
      title: '',
      image: getPart('end0'),
    },
  ],
  [EPillar.BOSSES]: [
    {
      id: 'boss',
      title: '',
      image: getPart('boss'),
    },
    {
      id: 'minisky',
      title: '',
      image: getPart('minisky'),
    },
    {
      id: 'yeah3',
      title: '',
      image: getPart('yeah3'),
    },
    {
      id: 'minigm',
      title: '',
      image: getPart('minigm'),
    },
    {
      id: 'threelk',
      title: '',
      image: getPart('threelk'),
    },
    {
      id: 'elk',
      title: '',
      image: getPart('elk'),
    },
    {
      id: 'fish',
      title: '',
      image: getPart('fish'),
    },
    {
      id: 'maggot',
      title: '',
      image: getPart('maggot'),
    },
    {
      id: 'meme',
      title: '',
      image: getPart('meme'),
    },
    {
      id: 'minir',
      title: '',
      image: getPart('minir'),
    },
    {
      id: 'minia',
      title: '',
      image: getPart('minia'),
    },
    {
      id: 'minip',
      title: '',
      image: getPart('minip'),
    },
    {
      id: 'minigh',
      title: '',
      image: getPart('minigh'),
    },
    {
      id: 'meat',
      title: '',
      image: getPart('meat'),
    },
    {
      id: 'minil',
      title: '',
      image: getPart('minil'),
    },
    {
      id: 'minid',
      title: '',
      image: getPart('minid'),
    },
  ],
  [EPillar.ACCOMPLISHMENTS]: [
    {
      id: 'col',
      title: '',
      image: getPart('col'),
    },
    {
      id: 'sunkill',
      title: '',
      image: getPart('sunkill'),
    },
    {
      id: 'dsun',
      title: '',
      image: getPart('dsun'),
    },
    {
      id: 'sun',
      title: '',
      image: getPart('sun'),
    },
    {
      id: 'nohit',
      title: '',
      image: getPart('nohit'),
    },
    {
      id: 'minit',
      title: '',
      image: getPart('minit'),
    },
    {
      id: 'clock',
      title: '',
      image: getPart('clock'),
    },
    {
      id: 'nogold',
      title: '',
      image: getPart('nogold'),
    },
    {
      id: 'pacifist',
      title: '',
      image: getPart('pacifist'),
    },
    {
      id: 'orba',
      title: '',
      image: getPart('orba'),
    },
    {
      id: 'orbe',
      title: '',
      image: getPart('orbe'),
    },
    {
      id: 'orbf',
      title: '',
      image: getPart('orbf'),
    },
  ],
  [EPillar.SECRETS]: [
    {
      id: 'null',
      title: '',
      image: getPart('null'),
    },
    {
      id: 'hutb',
      title: '',
      image: getPart('hutb'),
    },
    {
      id: 'huta',
      title: '',
      image: getPart('huta'),
    },
    {
      id: 'secrethg',
      title: '',
      image: getPart('secrethg'),
    },
    {
      id: 'secretbe',
      title: '',
      image: getPart('secretbe'),
    },
    {
      id: 'secretme',
      title: '',
      image: getPart('secretme'),
    },
    {
      id: 'secretae',
      title: '',
      image: getPart('secretae'),
    },
    {
      id: 'secretf',
      title: '',
      image: getPart('secretf'),
    },
    {
      id: 'secretten',
      title: '',
      image: getPart('secretten'),
    },
    {
      id: 'secretall',
      title: '',
      image: getPart('secretall'),
    },
    {
      id: 'secretcl',
      title: '',
      image: getPart('secretcl'),
    },
    {
      id: 'secretcd',
      title: '',
      image: getPart('secretcd'),
    },
    {
      id: 'yeah2',
      title: '',
      image: getPart('yeah2'),
    },
    {
      id: 'yeah',
      title: '',
      image: getPart('yeah'),
    },
    {
      id: 'secretg',
      title: '',
      image: getPart('secretg'),
    },
  ],
  [EPillar.EXTRA]: [
    {
      id: 'extra1',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra2',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra3',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra4',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra5',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra6',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
    {
      id: 'extra7',
      title: '',
      image: '/src/shared/assets/pillars/pillar_part.png',
    },
  ],
};
