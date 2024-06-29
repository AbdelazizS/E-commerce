import { useAuthStore } from '@/stores/authStore'
import axios from 'axios'
import { storeToRefs } from 'pinia'
const host = import.meta.env.VITE_BASE_API_URL
const baseURL = `${host}`

export const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const Login = (payload) => {
  return new Promise((resolve, reject) => {
    instance
      .post('login', payload)
      .then((resp) => {
        resolve(resp)
        if (resp.status === true) {
          const token = resp.data.client.api_token
          instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const register = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .post('register', payload)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (err) {
      reject(new Error(err))
    }
  })
}

export const verify = (url, payload) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .post(url, payload)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (err) {
      reject(new Error(err))
    }
  })
}
export const ForgotPassword = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .post('ForgotPassword', payload)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (err) {
      reject(new Error(err))
    }
  })
}

export const ResetPassword = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .post('ResetPassword', payload)
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (err) {
      reject(new Error(err))
    }
  })
}
export const UpdatePassword = (payload) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .post('UpdatePassword', payload)
        .then((resp) => {
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    } catch (err) {
      reject(new Error(err))
    }
  })
}
// return new Promise((resolve, reject) => {
//   try {
//     instance
//       .post('login', {
//         email: payload.email,
//         password: payload.password,
//         token_firebase: import.meta.env.VITE_FIREBASE_TOKEN,
//         app_id: '1999'
//       })
//       .then((resp) => {
//         console.log(resp)
//         if (resp.data.status === true) {
//           const userInfo = resp.data.client
//           token.value = userInfo.api_token
//           userInfo.value = JSON.stringify(userInfo)
//           localStorage.setItem('userInfo', JSON.stringify(userInfo))
//           localStorage.setItem('access_token', userInfo.api_token)
//           instance.defaults.headers.common['Authorization'] = userInfo.api_token
//         }
//         resolve(resp.data)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   } catch (err) {
//     reject(new Error(err))
//   }
// })
