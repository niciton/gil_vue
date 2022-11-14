import { createRouter, createWebHistory } from 'vue-router';

// let currentPage = Home

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/pages/Home/Home.vue'),
      alias: '/',
      meta: {
        title: 'GILBER AUTO ELECTRIC APPLIANCE CO. LTD.',
        name: 'Главная',
      },
    },
    {
      path: '/about',
      component: () => import('@/pages/About/About.vue'),

      meta: {
        // title: 'about',
        name: 'О бренде',
      },
    },
    {
      path: '/guarantee',
      component: () => import('@/pages/Guarantee/Guarantee.vue'),

      meta: {
        name: 'Гарантия'
      }
    },
    {
      path: '/catalog',
      component: () => import('@/pages/Catalog/Catalog.vue'),

      meta: {
        title: 'Каталог запчастей GILBER'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/Error404/Error404.vue'),

      meta: {
        name: 'Гарантия'
      }
    }
  ],
});
