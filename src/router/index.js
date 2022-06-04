import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
      path: '/results',
      name: 'results',
      component: () => import('../views/ResultsView.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/PlatformView.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/eventList',
      name: '/eventList',
      component: () => import('../views/EventListView.vue')
    },
    {
      path: '/privacyPolicy',
      name: '/privacyPolicy',
      component: () => import('../views/PrivacyPolicy.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
          return { el: to.hash, behavior: "smooth" };
        } else {
          console.log("moving to top of the page");
          window.scrollTo(0, 0);
        }
      },
    
})

export default router
