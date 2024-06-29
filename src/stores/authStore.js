/* eslint-disable no-unused-vars */
import router from '@/router'
import { instance } from '@/services/api'
import { Login } from '@/services/api'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // state
  const token = ref(localStorage.getItem('access_token') || null)
  const returnUrl = ref(null)
  const userInfo = ref(
    localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
  )

  // getters
  const isAuthenticated = computed(() => Boolean(token.value))

  //   actions
  async function login(payload) {
    return new Promise((resolve, reject) => {
      try {
        Login({
          email: payload.email,
          password: payload.password,
          token_firebase: import.meta.env.VITE_FIREBASE_TOKEN,
          app_id: '1999'
        })
          .then((resp) => {
            if (resp.data.status === true) {
              const userInfo = resp.data.client
              token.value = userInfo.api_token
              userInfo.value = JSON.stringify(userInfo)
              localStorage.setItem('userInfo', JSON.stringify(userInfo))
              localStorage.setItem('access_token', userInfo.api_token)
            }
            resolve(resp.data)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(new Error(error))
      }
    })
  }
  // axios.defaults.headers.common["Authorization"] = token;

  async function logout() {
    return new Promise((resolve, reject) => {
      try {
        instance
          .post('logout', {
            email: userInfo.value.email,
            token_firebase: import.meta.env.VITE_FIREBASE_TOKEN,
            app_id: '1999'
          })
          .then((resp) => {
            resolve(resp)
            if (resp.status === 200) {
              userInfo.value = {}
              token.value = ''
              localStorage.removeItem('access_token')
              localStorage.removeItem('userInfo')
            }
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(new Error(error))
      }
    })
  }
  return { isAuthenticated, login, userInfo, returnUrl, logout }
})
