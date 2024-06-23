/* eslint-disable no-unused-vars */
import router from '@/router'
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
    try {
      // const response = await true
      // const token = `Bearer ${response.token}`;
      // localStorage.setItem("token", token);
      // axios.defaults.headers.common["Authorization"] = token;
      // redirect to previous url or default to home page
      // router.push(this.returnUrl || '/')
    } catch (error) {
      console.log(error)
    }
    console.log(payload)
  }

  async function register(payload) {
    // return new Promise((resolve, reject) => {
    //   axios
    //     .post('/register/', {
    //       name: data.name,
    //       email: data.email,
    //     })
    //     .then((response) => {
    //       resolve(response)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    // })
  }

  async function fetchUser() {
    try {
      // const response = await true;
      // const token = `Bearer ${response.token}`;
      // localStorage.setItem("token", token);
      // axios.defaults.headers.common["Authorization"] = token;
    } catch (error) {
      console.log(error)
    }
  }
  return { isAuthenticated, login }
})
