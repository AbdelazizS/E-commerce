import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  // state
  const products = ref([
    {
      title: 'Mega LCD TV For Sports',
      id: 1,
      price: 440,
      pre_price: 500,
      img: '../assets/pc.png',
      category: 'Computers',
      description:
        "Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear",
      stars: 4
    },
    {
      title: 'Apple Watch',
      id: 2,
      img: '../assets/watch.png',
      category: 'Accessories',
      price: 240,
      description:
        "Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear",
      pre_price: 400.0,
      stars: 2
    },
    {
      title: 'Iphone X',
      id: 3,
      img: '../assets/squares-bg.png',
      category: 'Phones',
      description:
        "Step up your footwear game with our premium men's shoes. Designed for comfort and crafted with a contemporary aesthetic, these versatile shoes are a must-have addition to your wardrobe. The supple and breathable materials ensure all-day comfort, making them perfect for everyday wear",
      price: 840,
      pre_price: 900.0,
      stars: 3
    }
  ])

  return {
    products
  }
})
