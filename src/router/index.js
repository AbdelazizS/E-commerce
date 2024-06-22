import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

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
          component: ShoppingCart
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

// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!user.state.flag) {
//       return {
//         path: '/login'
//       }
//     }
//   }
// })

export default router
