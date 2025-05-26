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
    <div v-for="(achievements, type) in pillars" :key="type" class="pillar">
      <div
        v-for="(achievement, index) in achievements"
        :key="index"
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
  grid-template-columns: repeat(6, var(--size));
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

.achievement:hover {
  filter: brightness(1.5);
  cursor: pointer;
}

.achievement.unlocked {
  filter: brightness(1.5) !important;
}
</style>
