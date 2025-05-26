import { defineStore } from 'pinia';
import { EPillar } from '@/pages/pillars/types';

export const usePillarStore = defineStore('pillars', {
  state: () => ({
    [EPillar.SACRIFICE_TRANSFORMATION]: new Set(),
    [EPillar.ESSENCES]: new Set(),
    [EPillar.COMPLETIONS]: new Set(),
    [EPillar.BOSSES]: new Set(),
    [EPillar.ACCOMPLISHMENTS]: new Set(),
    [EPillar.SECRETS]: new Set(),
  }),
});
