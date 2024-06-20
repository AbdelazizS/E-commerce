import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
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
        },
        {
          path: '/auth/register',
          name: 'register',
          component: RegisterView
        },
        {
          path: '/auth/login',
          name: 'login',
          component: LoginView
        }
      ]
    }
  ]
})

export default router
