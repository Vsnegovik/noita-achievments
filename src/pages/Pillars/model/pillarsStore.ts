import { writable } from 'svelte/store'
import type { Pillars } from '..//types'
import { pillars as initial } from '..//config'

function createPillarsStore() {
  const stored = localStorage.getItem('pillars')
  const start = stored ? (JSON.parse(stored) as Pillars) : initial

  const { subscribe, update } = writable<Pillars>(start)

  subscribe((value) => {
    localStorage.setItem('pillars', JSON.stringify(value))
  })

  function toggle(type: keyof Pillars, index: number) {
    update((p) => {
      const group = p[type]
      group[index].isUnlocked = !group[index].isUnlocked
      return {
        ...p,
        [type]: [...group],
      }
    })
  }

  return { subscribe, toggle }
}

export const pillars = createPillarsStore()
