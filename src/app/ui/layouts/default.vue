<script setup lang="ts">
defineOptions({ name: 'layout-default' });
</script>

<template>
  <div class="layout--default">
    <RouterView />
  </div>
</template>

<style scoped>
.layout--default {
  display: grid;
  gap: 24px;
  min-height: 100vh;
}
</style>
