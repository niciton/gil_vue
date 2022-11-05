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
      path: '/dealer',
      component: () => import('@/pages/Dealer/Dealer.vue'),

      meta: {
        name: 'Стать дилером'
      }
    },
    {
      path: '/delivery',
      component: () => import('@/pages/Delivery/Delivery.vue'),

      meta: {
        name: 'Доставка'
      }
    }
  ],
});
