import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async signUp(email, password) {
      const res = await fetch('https://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const user = await res.json()
      this.user = user
    },
    async signIn(email, password) {
      const res = await fetch('https://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const user = await res.json()
      this.user = user
    }
  }
})

import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const data = ref()
  const token = ref()

  const isLoggedIn = computed(() => Boolean(token.value))

  async function login({ email, password }) {
    const payload = await fetch('https://example.com/login', {
      method: 'POST',
      body: { email, password }
    })

    data.value = payload.data
    token.value = payload.token
  }

  async function logout() {
    await fetch('https://example.com/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token.value}` }
    })

    data.value = null
    token.value = null
  }

  return { data, token, isLoggedIn, login, logout }
})
