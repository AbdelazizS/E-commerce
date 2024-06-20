import { createPinia } from 'pinia'

// export default createPinia()


// store.js file
import { defineStore, createPinia } from 'pinia';
const pinia = createPinia();
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
export default pinia;



import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const res = await fetch("https://localhost:3000/user");

      const user = await res.json();
      this.user = user;
    },
    async signUp(email, password) {
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json()
      this.user = user;
    },
    async signIn(email, password) {
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
  },
});



  import { defineStore } from 'pinia'
import { auth, db } from '@/includes/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      // logic to register user
      const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const newDocument = doc(db, 'users', userCred.user.uid)
      await setDoc(newDocument, {
        name: values.name,
        email: values.email
      })

      // logic to update state
      this.userLoggedIn = true
    },
  }
})