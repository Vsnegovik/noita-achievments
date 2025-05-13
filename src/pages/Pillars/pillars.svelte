<script lang="ts">
  import { pillars } from './model/pillarsStore'
  import type { EPillar } from './types'

  const onToggleAchievement = (type: string, index: number) => () => {
    if (index > 0) {
      pillars.toggle(type as unknown as EPillar, index)
    }
  }
</script>

<div class="pillars">
  {#each Object.entries($pillars) as [type, achievements], groupIndex}
    <div class="pillar">
      {#each achievements as achievement, index}
        <div
          class:unlocked={achievement.isUnlocked}
          class="achievement"
          style={`background-image: url(${achievement.image});`}
          on:click={onToggleAchievement(type, index)}
        ></div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .pillars {
    --size: 96px;
    display: grid;
    grid-template-columns: repeat(6, var(--size));
    gap: 0 70px;
    align-items: end;
    background-image:
      url('/src/shared/assets/tree/0_background.png'),
      url('/src/shared/assets/tree/4_background.png');
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position:
      0 170%,
      100% 170%;
    padding: 0 300px 50px;
  }

  .pillar::after,
  .pillar::before,
  .achievement {
    width: var(--size);
    height: var(--size);
    background-image: url('/src/shared/assets/pillars/pillar_part.png');
    background-size: contain;
    filter: grayscale(1) brightness(1.5);
  }

  .pillar::after {
    content: '';
    display: block;
    background-image: url('/src/shared/assets/pillars/pillar_part_fade.png');
    filter: grayscale(0) brightness(1.5);
  }

  .achievement:not(:first-child):hover {
    filter: brightness(1.5);
    cursor: pointer;
  }

  .achievement:first-child,
  .achievement.unlocked {
    filter: brightness(1.5) !important;
  }
</style>
