import { defineStore } from 'pinia'
import Products from '@/data/products.json'

export const useFavoritesStore = defineStore({
  id: 'favorites',
  state: () => ({
    favoriteProducts: [],
    total: 0,
    products: Products
  }),
  actions: {
    addToFavorites(id) {
      const favorites = this.favoriteProducts.find((product) => product.id === id)

      if (favorites) {
      } else {
        const addedFavorite = this.products.find((product) => product.id === id)
        const favoriteData = {
          ...addedFavorite
        }
        this.favoriteProducts.push(favoriteData)
      }
      this.calculateTotal()
    },
    isInFavorites(id) {
      return this.favoriteProducts.some((product) => product.id === id)
    },
    deleteFromFavorites(index) {
      this.favoriteProducts.splice(index, 1)
      this.calculateTotal()
    },
    calculateTotal() {
      this.totalFavorites()
    },
    totalFavorites() {
      return (this.total = this.favoriteProducts.length)
    }
  }
})
