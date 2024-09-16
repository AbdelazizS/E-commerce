<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ProductCard from './ProductCard.vue'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '@/layouts/Container.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getFeaturedProducts } from '@/services/api'

const featuredProducts = ref([])
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  getFeaturedProducts()
    .then((res) => {
      console.log(res)
      featuredProducts.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })

  gsap.from('.fade-up-txt', {
    scrollTrigger: {
      trigger: '.Products',
      start: 'top 80%'
      // toggleActions: 'play pause restart reset'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2
  })
  gsap.from('.p-card', {
    scrollTrigger: {
      trigger: '.Products',
      start: 'top 65%'
      // toggleActions: 'play pause restart reset'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.25
  })
})
const items = ref([
  {
    product_name: 'Mega LCD TV For Sports',
    id: 1,
    product_price: 440,
    product_price_old: 500,
    image: '/src/assets/pc.png',
    category: 'Computers',
    stars: 4
  },
  {
    product_name: 'Mega LCD TV For Sports',
    id: 1,
    product_price: 440,
    product_price_old: 500,
    image: '/src/assets/pc.png',
    category: 'Computers',
    stars: 4
  },
  {
    product_name: 'Mega LCD TV For Sports',
    id: 1,
    product_price: 440,
    product_price_old: 500,
    image: '/src/assets/pc.png',
    category: 'Computers',
    stars: 4
  },
  {
    product_name: 'Apple Watch',
    id: 2,
    image: '/src/assets/watch.png',
    category: 'Accessories',
    product_price: 240,
    product_price_old: 400.0,
    stars: 2
  },
  {
    product_name: 'Iphone X',
    id: 3,
    image: '/src/assets/squares-bg.png',
    category: 'Phones',
    product_price: 840,
    product_price_old: 900.0,
    stars: 3
  }
])
</script>
<template>
  <section id="Products" class="Products my-8 md:my-16">
    <!-- Title -->

    <Container>
      <div class="mb-8">
        <h2 class="fade-up-txt text-2xl md:text-3xl text-foreground text tracking-wider font-bold">
          {{ $t('home.products') }}
        </h2>

        <p class="fade-up-txt text-base md:text-xl text-muted-foreground mt-2 mb-8">
          {{ $t(`home.categories_desc`) }}
        </p>
        <div
          class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
        >
          <div v-if="!featuredProducts.length" v-for="item in 4" :key="item">
            <div
              class="p-card flex flex-col relative shadow-md overflow-hidden border rounded-lg w-full max-w-xs bg-card max-h-fit"
            >
              <Skeleton class="h-48 w-full rounded-none" />
              <div class="space-y-2 px-2 my-4">
                <Skeleton class="h-4 w-[250px]" />
                <Skeleton class="h-4 w-[200px]" />
              </div>
              <div class="px-2 mb-2">
                <Skeleton class="h-9 w-[150px]" />
              </div>
            </div>
          </div>
          <ProductCard v-else v-for="item in featuredProducts" :key="item.id" :item="item" />
        </div>
      </div>
    </Container>
  </section>
</template>
