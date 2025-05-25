<script setup lang="ts">
import { useRoute } from 'vue-router';

import { ELayoutType } from '../router';
import LayoutDefault from './layouts/default.vue';

const route = useRoute();

const layouts = {
  [ELayoutType.DEFAULT]: LayoutDefault,
};
</script>

<template>
  <component :is="layouts[route.meta.layout ?? ELayoutType.DEFAULT]" />
</template>

<style scoped></style>
