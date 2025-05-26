<script setup lang="ts">
import { pillars } from '@/pages/pillars/config';
import { usePillarStore } from '@/pages/pillars/model/pillarsStore';
import type { EPillar } from '@/pages/pillars/types';
const pillarsStore = usePillarStore();

const onToggleAchievement = (pillar: EPillar, achievement: number) => {
  if (pillarsStore[pillar].has(achievement)) {
    pillarsStore[pillar].delete(achievement);
  } else {
    pillarsStore[pillar].add(achievement);
  }
};
</script>

<template>
  <div class="pillars">
    <div v-for="(achievements, type) in pillars" :key="type" :class="['pillar', `pillar-${type}`]">
      <div
        v-for="(achievement, index) in achievements"
        :key="index"
        v-tooltip.right="{
          theme: 'note',
          content: `<div class='note note_${achievement.id}'></div>`,
          html: true,
        }"
        :class="{ unlocked: pillarsStore[type].has(index) }"
        class="achievement"
        :style="`background-image: url(${achievement.image})`"
        @click="onToggleAchievement(type, index)"
      />
    </div>
  </div>
</template>

<style scoped>
.pillars {
  --size: 96px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: var(--size);
  gap: 0 70px;
  align-items: end;
  background-image:
    url('/src/shared/assets/tree/0_background.png'), url('/src/shared/assets/tree/4_background.png');
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-position:
    0 170%,
    100% 170%;
  padding: 0 300px 50px;
  position: relative;
}

.pillars::after {
  content: '';
  position: absolute;
  bottom: 150px;
  left: calc(50% - 700px);
  width: 90px;
  height: 142px;
  background: url('/src/shared/assets/Monster_playerstand_full.webp') no-repeat;
  background-size: contain;
}

.pillar::before,
.pillar::after,
.achievement {
  width: var(--size);
  height: var(--size);
  background-size: contain;
}

.achievement {
  background-image: url('/src/shared/assets/pillars/pillar_part.png');
  filter: grayscale(1) brightness(1.5);
}

.pillar::before,
.pillar::after {
  content: '';
  display: block;
  filter: brightness(1.5);
}

.pillar-6 {
  filter: hue-rotate(45deg) opacity(0.5);
}

.pillar::after {
  background-image: url('/src/shared/assets/pillars/pillar_part_fade.png');
}

.pillar:nth-child(1)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_01.png');
}
.pillar:nth-child(2)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_03.png');
}
.pillar:nth-child(3)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_06.png');
}
.pillar:nth-child(4)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_02.png');
}
.pillar:nth-child(5)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_05.png');
}
.pillar:nth-child(6)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_04.png');
}
.pillar:nth-child(7)::before {
  background-image: url('/src/shared/assets/pillars/pillar_end_03.png');
}

.achievement:hover {
  filter: brightness(1.5);
  cursor: pointer;
}

.achievement.unlocked {
  filter: brightness(1.5) !important;
}
</style>

<style>
.note {
  background-image: url(/src/shared/assets/SecretPillarsMills.png);
  background-repeat: no-repeat;
  width: 366px;
  height: 276px;
}

.note_phalo {
  background-position: -361px -940px;
}
.note_plukki {
  background-position: -361px -1228px;
}
.note_pfungi {
  background-position: -361px -1516px;
}
.note_prat {
  background-position: -361px -1804px;
}
.note_pghost {
  background-position: -361px -2092px;
}
.note_secrett {
  background-position: -361px -2380px;
}
.note_dseffect {
  background-position: -361px -2668px;
}
.note_seffect {
  background-position: -361px -2956px;
}
.note_mbots {
  background-position: -361px -3244px;
}
.note_mrain {
  background-position: -361px -3532px;
}
.note_train {
  background-position: -361px -3820px;
}
.note_grain {
  background-position: -361px -4108px;
}
.note_wrain {
  background-position: -361px -4396px;
}
.note_urain {
  background-position: -361px -4684px;
}
.note_crain {
  background-position: -361px -4972px;
}

.note_dsunmoon {
  background-position: -1021px -1804px;
}
.note_sunmoon {
  background-position: -1021px -2092px;
}
.note_dmoong {
  background-position: -1021px -2380px;
}
.note_dmoon {
  background-position: -1021px -2668px;
}
.note_moong {
  background-position: -1021px -2956px;
}
.note_moona {
  background-position: -1021px -3244px;
}
.note_moon {
  background-position: -1021px -3532px;
}
.note_essenceal {
  background-position: -1021px -3820px;
}
.note_essencea {
  background-position: -1021px -4108px;
}
.note_essencee {
  background-position: -1021px -4396px;
}
.note_essencew {
  background-position: -1021px -4684px;
}
.note_essencef {
  background-position: -1021px -4972px;
}

.note_endn {
  background-position: -1681px -3532px;
}
.note_endp {
  background-position: -1681px -3820px;
}
.note_endg {
  background-position: -1681px -4108px;
}
.note_endb {
  background-position: -1681px -4396px;
}
.note_endt {
  background-position: -1681px -4684px;
}
.note_end0 {
  background-position: -1681px -4972px;
}

.note_boss {
  background-position: -2341px -652px;
}
.note_minisky {
  background-position: -2341px -940px;
}
.note_yeah3 {
  background-position: -2341px -1228px;
}
.note_minigm {
  background-position: -2341px -1516px;
}
.note_threelk {
  background-position: -2341px -1804px;
}
.note_elk {
  background-position: -2341px -2092px;
}
.note_fish {
  background-position: -2341px -2380px;
}
.note_maggot {
  background-position: -2341px -2668px;
}
.note_meme {
  background-position: -2341px -2956px;
}
.note_minir {
  background-position: -2341px -3244px;
}
.note_minia {
  background-position: -2341px -3532px;
}
.note_minip {
  background-position: -2341px -3820px;
}
.note_minigh {
  background-position: -2341px -4108px;
}
.note_meat {
  background-position: -2341px -4396px;
}
.note_minil {
  background-position: -2341px -4684px;
}
.note_minid {
  background-position: -2341px -4972px;
}

.note_col {
  background-position: -3001px -1804px;
}
.note_sunkill {
  background-position: -3001px -2092px;
}
.note_dsun {
  background-position: -3001px -2380px;
}
.note_sun {
  background-position: -3001px -2668px;
}
.note_nohit {
  background-position: -3001px -2956px;
}
.note_minit {
  background-position: -3001px -3244px;
}
.note_clock {
  background-position: -3001px -3532px;
}
.note_nogold {
  background-position: -3001px -3820px;
}
.note_pacifist {
  background-position: -3001px -4108px;
}
.note_orba {
  background-position: -3001px -4396px;
}
.note_orbe {
  background-position: -3001px -4684px;
}
.note_orbf {
  background-position: -3001px -4972px;
}

.note_null {
  background-position: -3661px -940px;
}
.note_hutb {
  background-position: -3661px -1228px;
  width: 406px;
}
.note_huta {
  background-position: -3661px -1516px;
  width: 406px;
}
.note_secrethg {
  background-position: -3661px -1804px;
}
.note_secretbe {
  background-position: -3661px -2092px;
}
.note_secretme {
  background-position: -3661px -2380px;
}
.note_secretae {
  background-position: -3661px -2668px;
}
.note_secretf {
  background-position: -3661px -2956px;
}
.note_secretten {
  background-position: -3661px -3244px;
}
.note_secretall {
  background-position: -3661px -3532px;
  width: 458px;
}
.note_secretcl {
  background-position: -3661px -3820px;
  width: 458px;
}
.note_secretcd {
  background-position: -3661px -4108px;
  width: 458px;
}
.note_yeah2 {
  background-position: -3661px -4396px;
}
.note_yeah {
  background-position: -3661px -4684px;
}
.note_secretg {
  background-position: -3661px -4972px;
}
.note_extra1 {
  background-position: -3661px -652px;
  width: 458px;
}
.note_extra2 {
  background-position: -3661px -5260px;
  width: 458px;
}
.note_extra3 {
  background-position: -3001px -5260px;
}
.note_extra4 {
  background-position: -2341px -5260px;
}
.note_extra5 {
  background-position: -1681px -5260px;
}
.note_extra6 {
  background-position: -1021px -5260px;
}
.note_extra7 {
  background-position: -361px -5260px;
}
</style>
