import axios from 'axios'
const host = import.meta.env.VITE_BASE_API_URL
const baseURL = `${host}`

export const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const addFavourites = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .post('add_favorite', {
        app_id: '199',
        product_id: '66',
        client_id: '411',
        product_name: 'قلادة في شكل قلب',
        product_price: '11690.00',
        image: ''
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const addOrder = ({ user, totalAmount }) => {
  return new Promise((resolve, reject) => {
    console.log(user)

    instance
      .post('add_order_not_found_product', {
        transportation_cost: '100',
        total_price: totalAmount,
        location: 'sennar',
        locality_id: '480',
        prominent_place: 'end',
        state_id: '57',
        app_id: user.app_id,
        platform: '1',
        client_id: user.id
      })
      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const addFavouriteItem = ({ product, user }) => {
  return new Promise((resolve, reject) => {
    console.log(product, user.app_id)

    instance
      .post('add_favorite', {
        app_id: user.app_id,
        client_id: user.client_id,
        product_id: product.id,
        product_name: product.product_name,
        product_price: '222',
        image: product.image
      })
      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const addCartItem = () => {
  return new Promise((resolve, reject) => {
    instance

      // product_category
      .post('add_cart', {
        client_id: '411',
        app_id: '199',
        product_id: 72
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const getOrders = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .get('get_client_orders', {
        // client_id: '411'
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getCatagories = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .post('product_category')

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const getUser = (userInfo) => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .post('client_info', {
        client_id: userInfo.id,
        app_id: userInfo.app_id
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const getFavourites = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .get('get_favorites', {
        client_id: '411',
        app_id: '199'
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const getCartItems = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .post('get_cart', {
        client_id: '411'
      })

      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export const getFeaturedProducts = () => {
  return new Promise((resolve, reject) => {
    instance
      // product_category
      .get('features_product')
      .then((resp) => {
        resolve(resp)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
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
        .post('resend_verify', payload)
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
