/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useLoadingStore } from '@/store/loading';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  extendRoutes: setupLayouts,
})

router.beforeEach(() => {
  useLoadingStore().startLoading();
});

router.afterEach(() => {
  useLoadingStore().finishLoading();
});

export default router
