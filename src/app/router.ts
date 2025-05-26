import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { PagePillars } from '@/pages/pillars';

export enum ELayoutType {
  DEFAULT,
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'pillars' },
  },
  {
    path: '/pillars',
    name: 'pillars',
    component: PagePillars,
    meta: {
      layout: ELayoutType.DEFAULT,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
