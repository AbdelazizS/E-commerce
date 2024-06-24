/* eslint-disable no-unused-vars */
// import { defineStore } from 'pinia'
// import Products from '@/data/products.json'

// export const useFavoritesStore = defineStore({
//   id: 'favorites',
//   state: () => ({
//     favoriteProducts: [],
//     total: 0,
//     products: Products
//   }),
//   actions: {
//     addToFavorites(id) {
//       const favorites = this.favoriteProducts.find((product) => product.id === id)

//       if (favorites) {
//       } else {
//         const addedFavorite = this.products.find((product) => product.id === id)
//         const favoriteData = {
//           ...addedFavorite
//         }
//         this.favoriteProducts.push(favoriteData)
//       }
//       this.calculateTotal()
//     },
//     isInFavorites(id) {
//       return this.favoriteProducts.some((product) => product.id === id)
//     },
//     deleteFromFavorites(index) {
//       this.favoriteProducts.splice(index, 1)
//       this.calculateTotal()
//     },
//     calculateTotal() {
//       this.totalFavorites()
//     },
//     totalFavorites() {
//       return (this.total = this.favoriteProducts.length)
//     }
//   }
// })

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { useProductStore } from './productStore'

function updateLocalStorage(items) {
  localStorage.setItem('favourite_products', JSON.stringify(items))
}

export const useFavoritesStore = defineStore('favorites', () => {
  // state
  const favouriteItems = ref(
    localStorage.getItem('favourite_products')
      ? JSON.parse(localStorage.getItem('favourite_products'))
      : []
  )

  // getters
  // const isInFavorites = computed((e) => favouriteItems.value.some((product) => product.id === id))

  // ;

  // actions
  function isInFavorites(id) {
    return favouriteItems.value.some((product) => product.id === id)
  }

  function addToFavorites(id) {
    const existingItem = favouriteItems.value.find((x) => x.id === id)
    const productStore = useProductStore()
    if (!existingItem) {
      const addedFavorite = productStore.products.find((product) => product.id === id)
      console.log(
        productStore.products.find((product) => product.id === id),
        id
      )
      favouriteItems.value.push({ ...addedFavorite })
      updateLocalStorage(favouriteItems.value)
      console.log({ ...addedFavorite })
    } else {
      favouriteItems.value = favouriteItems.value.filter((x) => x.id !== id)
      updateLocalStorage(favouriteItems.value)
    }
  }

  return { addToFavorites, isInFavorites, favouriteItems }
})
