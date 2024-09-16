import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from '@/guards/auth'
import i18n from '@/plugins/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/search/:q',
          name: 'search',
          component: () => import('../views/SearchView.vue')
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        },
        {
          path: '/shopping-cart',
          name: 'shoppingCart',

          component: () => import('../views/ShoppingCart.vue')
        },

        {
          path: '/profile/orders',
          name: 'orders',
          component: () => import('../views/OrdersView.vue')
        },
        {
          path: '/profile/orders/:id',
          name: 'orderDetails',
          component: () => import('../views/OrderDetails.vue')
        },
        {
          path: '/product/:id',
          name: 'ProductDetails',

          component: () => import('../views/ProductDetails.vue')
        },
        {
          path: '/auth/register',
          name: 'register',
          meta: { requiresLogged: true },
          component: () => import('../views/auth/RegisterView.vue')
        },
        {
          path: '/auth/login',
          name: 'login',
          meta: { requiresLogged: true },
          component: () => import('../views/auth/LoginView.vue'),
          props: true
        },
        {
          path: '/auth/forgot-password',
          name: 'forgotPassword',
          meta: { requiresLogged: true },
          component: () => import('../views/auth/ForgotPassword.vue')
        },
        {
          path: '/auth/verify',
          name: 'verify',
          meta: { requiresRegister: true },
          component: () => import('../views/auth/VerifyView.vue'),
          props: true
        },
        {
          path: '/profile',
          name: 'profile',
          meta: { requiresAuth: true },
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: '/profile/favourites',
          name: 'favourites',
          meta: { requiresAuth: true },
          component: () => import('../views/FavouritesView.vue')
        },
        {
          path: '/profile/update-password',
          name: 'update-password',
          meta: { requiresAuth: true },
          component: () => import('../views/UpdatePassword.vue')
        },
        {
          path: '/profile/notifications',
          name: 'notifications',
          meta: { requiresAuth: true },
          component: () => import('../views/NotificationsView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.language
  if (!language) {
    language = 'en'
  }

  // set the current language for vuex-i18n. note that translation data
  // for the language might need to be loaded first
  // Vue.i18n.set(language)
  // i18n.global.locale = language

  console.log(language, i18n.global.locale)

  next()
})

router.beforeEach(authGuard)
export default router

// {
//   path: "/:pathMatch(.*)*",
//   name: "NotFound",
//   component: NotFound,
// },
// {
//   path: "/403",
//   name: "Forbidden",
//   component: Forbidden,
// },
