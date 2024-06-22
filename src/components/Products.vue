<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ProductCard from './ProductCard.vue'
import Container from '@/layouts/Container.vue'
import { ref } from 'vue'

const newItems = ref([
  {
    title: 'Mega LCD TV For Sports',
    id: 1,
    price: 440,
    pre_price: 500,
    img: '../assets/pc.png',
    category: 'Computers',
    stars: 4
  },
  {
    title: 'Apple Watch',
    id: 2,
    img: '../assets/watch.png',
    category: 'Accessories',
    price: 240,
    pre_price: 400.0,
    stars: 2
  },
  {
    title: 'Iphone X',
    id: 3,
    img: '../assets/squares-bg.png',
    category: 'Phones',
    price: 840,
    pre_price: 900.0,
    stars: 3
  }
])
</script>
<template>
  <section id="categories" class="py-8 md:py-16">
    <!-- Title -->

    <Container>
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl text-foreground text mb-8 tracking-wider font-bold">
          {{ $t('home.products') }}
        </h2>
        <div
          class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
        >
          <ProductCard v-for="item in newItems" :key="item.id" :item="item" />
        </div>
      </div>
    </Container>
  </section>
</template>
