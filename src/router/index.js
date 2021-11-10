import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  // {
  //   name: 'SampleRoute',
  //   component: () => import(/* webpackChunkName: "archive" */ '@/views/SomeView.vue'),
  //   path: '',
  //   children: [
  //     {
  //       name: 'SomeCatchAllChildRoute',
  //       path: '/product/:slug/:catchAll(.*)',
  //       component: '',
  //     },
  //   ],
  // },
  // {
  //   // Match blog/, blog/{a number}
  //   path: '/blog/:page(\\d+)?',
  //   name: 'Blogs',
  //   component: BlogListing,
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

export default router;
