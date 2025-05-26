import { defineStore } from 'pinia';
import { EPillar } from '@/pages/pillars/types';

export const usePillarStore = defineStore('pillars', {
  state: (): Record<EPillar, Set<string>> => ({
    [EPillar.SACRIFICE_TRANSFORMATION]: new Set(),
    [EPillar.ESSENCES]: new Set(),
    [EPillar.COMPLETIONS]: new Set(),
    [EPillar.BOSSES]: new Set(),
    [EPillar.ACCOMPLISHMENTS]: new Set(),
    [EPillar.SECRETS]: new Set(),
    [EPillar.EXTRA]: new Set(),
  }),
  persist: {
    key: 'pillars',
    paths: ['pillars'],
    serializer: {
      serialize: (state: any) =>
        JSON.stringify(state, (_key, value) => {
          if (value instanceof Set) {
            return {
              __type: 'Set',
              value: Array.from(value),
            };
          }
          return value;
        }),

      deserialize: (raw: string) =>
        JSON.parse(raw, (_key, value) => {
          if (
            value != null &&
            typeof value === 'object' &&
            value.__type === 'Set' &&
            Array.isArray(value.value)
          ) {
            return new Set(value.value);
          }
          return value;
        }),
    },
  },
});
