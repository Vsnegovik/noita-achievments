import { EPillar, type Pillars } from './types'

const rawImages: Record<string, string> = import.meta.glob('/src/shared/assets/pillars/*.png', {
  eager: true,
  import: 'default',
})

function getPart(name: string) {
  return rawImages[`/src/shared/assets/pillars/pillar_part_${name}.png`]
}
function getPillarEnd(index: string) {
  return rawImages[`/src/shared/assets/pillars/pillar_end_0${index}.png`]
}

export const pillars: Pillars = {
  [EPillar.SACRIFICE_TRANSFORMATION]: [
    {
      title: '',
      image: getPillarEnd('1'),
    },
    {
      title: '',
      image: getPart('phalo'),
    },
    {
      title: '',
      image: getPart('plukki'),
    },
    {
      title: '',
      image: getPart('pfungi'),
    },
    {
      title: '',
      image: getPart('prat'),
    },
    {
      title: '',
      image: getPart('pghost'),
    },
    {
      title: '',
      image: getPart('secrett'),
    },
    {
      title: '',
      image: getPart('dseffect'),
    },
    {
      title: '',
      image: getPart('seffect'),
    },
    {
      title: '',
      image: getPart('mbots'),
    },
    {
      title: '',
      image: getPart('mrain'),
    },
    {
      title: '',
      image: getPart('train'),
    },
    {
      title: '',
      image: getPart('grain'),
    },
    {
      title: '',
      image: getPart('wrain'),
    },
    {
      title: '',
      image: getPart('urain'),
    },
    {
      title: 'Sacrifice Treasure Chest',
      image: getPart('boss'),
    },
  ],
  [EPillar.ESSENCES]: [
    {
      title: '',
      image: getPillarEnd('3'),
    },
    {
      title: '',
      image: getPart('dsunmoon'),
    },
    {
      title: '',
      image: getPart('sunmoon'),
    },
    {
      title: '',
      image: getPart('dmoong'),
    },
    {
      title: '',
      image: getPart('dmoon'),
    },
    {
      title: '',
      image: getPart('moong'),
    },
    {
      title: '',
      image: getPart('moona'),
    },
    {
      title: '',
      image: getPart('moon'),
    },
    {
      title: '',
      image: getPart('essenceal'),
    },
    {
      title: '',
      image: getPart('essencea'),
    },
    {
      title: '',
      image: getPart('essencee'),
    },
    {
      title: '',
      image: getPart('essencew'),
    },
    {
      title: '',
      image: getPart('essencef'),
    },
  ],
  [EPillar.COMPLETIONS]: [
    {
      title: '',
      image: getPillarEnd('6'),
    },
    {
      title: '',
      image: getPart('endn'),
    },
    {
      title: '',
      image: getPart('endp'),
    },
    {
      title: '',
      image: getPart('endg'),
    },
    {
      title: '',
      image: getPart('endb'),
    },
    {
      title: '',
      image: getPart('endt'),
    },
    {
      title: '',
      image: getPart('end0'),
    },
  ],
  [EPillar.BOSSES]: [
    {
      title: '',
      image: getPillarEnd('2'),
    },
    {
      title: '',
      image: getPart('boss'),
    },
    {
      title: '',
      image: getPart('minisky'),
    },
    {
      title: '',
      image: getPart('yeah3'),
    },
    {
      title: '',
      image: getPart('minigm'),
    },
    {
      title: '',
      image: getPart('threelk'),
    },
    {
      title: '',
      image: getPart('elk'),
    },
    {
      title: '',
      image: getPart('fish'),
    },
    {
      title: '',
      image: getPart('maggot'),
    },
    {
      title: '',
      image: getPart('meme'),
    },
    {
      title: '',
      image: getPart('minir'),
    },
    {
      title: '',
      image: getPart('minia'),
    },
    {
      title: '',
      image: getPart('minip'),
    },
    {
      title: '',
      image: getPart('minigh'),
    },
    {
      title: '',
      image: getPart('meat'),
    },
    {
      title: '',
      image: getPart('minil'),
    },
    {
      title: '',
      image: getPart('minid'),
    },
  ],
  [EPillar.ACCOMPLISHMENTS]: [
    {
      title: '',
      image: getPillarEnd('5'),
    },
    {
      title: '',
      image: getPart('col'),
    },
    {
      title: '',
      image: getPart('sunkill'),
    },
    {
      title: '',
      image: getPart('dsun'),
    },
    {
      title: '',
      image: getPart('sun'),
    },
    {
      title: '',
      image: getPart('nohit'),
    },
    {
      title: '',
      image: getPart('minit'),
    },
    {
      title: '',
      image: getPart('clock'),
    },
    {
      title: '',
      image: getPart('nogold'),
    },
    {
      title: '',
      image: getPart('pacifist'),
    },
    {
      title: '',
      image: getPart('orba'),
    },
    {
      title: '',
      image: getPart('orbe'),
    },
    {
      title: '',
      image: getPart('orbf'),
    },
  ],
  [EPillar.SECRETS]: [
    {
      title: '',
      image: getPillarEnd('4'),
    },
    {
      title: '',
      image: getPart('null'),
    },
    {
      title: '',
      image: getPart('hutb'),
    },
    {
      title: '',
      image: getPart('huta'),
    },
    {
      title: '',
      image: getPart('secrethg'),
    },
    {
      title: '',
      image: getPart('secretbe'),
    },
    {
      title: '',
      image: getPart('secretme'),
    },
    {
      title: '',
      image: getPart('secretae'),
    },
    {
      title: '',
      image: getPart('secretf'),
    },
    {
      title: '',
      image: getPart('secretten'),
    },
    {
      title: '',
      image: getPart('secretall'),
    },
    {
      title: '',
      image: getPart('secretcl'),
    },
    {
      title: '',
      image: getPart('secretcd'),
    },
    {
      title: '',
      image: getPart('yeah2'),
    },
    {
      title: '',
      image: getPart('yeah'),
    },
    {
      title: '',
      image: getPart('secretg'),
    },
  ],
}
