import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shoppingCart from '../components/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/shopping-cart',
          name: 'shoppingCart',
          component: shoppingCart
        }
      ]
    }
  ]
})

export default router
