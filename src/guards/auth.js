import { useAuthStore } from '@/stores/authStore'
export function authGuard(to, from, next) {
  const authStore = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.requiresRegister)) {
    if (!authStore.isAuthenticated && authStore.isRegistered) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.requiresLogged)) {
    // else if any of the routes in ./router.js has a meta named 'requiresLogged: true'
    // then check if the user is logged in; if true continue to home page else continue routing to the destination path
    // this comes to play if the user is logged in and tries to access the login/register page
    if (authStore.isAuthenticated) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
}
