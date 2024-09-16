<script setup>
// import { Button } from '../components/ui/button'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import BottomNav from '@/components/BottomNav.vue'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '@/layouts/Container.vue'
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const newItems = ref([])

import { onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  setTimeout(() => {
    newItems.value = [
      {
        product_name: 'Mega LCD TV For Sports',
        id: 1,
        product_price: 440,
        pre_price: 500,
        img: '../assets/pc.png',
        category: 'Computers',
        stars: 4
      },
      {
        product_name: 'Apple Watch',
        id: 2,
        img: '../assets/watch.png',
        category: 'Accessories',
        product_price: 240,
        pre_price: 400.0,
        stars: 2
      },
      {
        product_name: 'Iphone X',
        id: 3,
        img: '../assets/squares-bg.png',
        category: 'Phones',
        product_price: 840,
        pre_price: 900.0,
        stars: 3
      }
    ]
  }, 2000)

  setTimeout(() => {
    newItems.value = [
      {
        product_name: 'Mega LCD TV For Sports',
        id: 1,
        product_price: 440,
        pre_price: 500,
        img: '../assets/pc.png',
        category: 'Computers',
        stars: 4
      }
    ]
  }, 6000)
  gsap.from('.fade-up', {
    scrollTrigger: {
      trigger: '.Search_Sec',
      start: 'top 60%'
      // toggleActions: 'play pause restart reset'
    },
    y: 50,
    opacity: 0,
    delay: 0.4,
    duration: 0.7,
    stagger: 0.1
  })
})

const route = useRoute()
const products = ref([])
const notFound = ref(false)

watch(
  () => newItems.value,
  (newItems) => {
    console.log('changed', newItems.length)
    if (newItems.length < 2) {
      notFound.value = true
    }
  }
)
// const query = String(route.params.query)
</script>

<template>
  <!--  -->
  <Navbar />

  <section id="Search_Sec" class="Search_Sec py-8 mb-8">
    <!-- Title -->

    <Container>
      <div class="mb-8" v-if="!notFound">
        <h2
          v-if="newItems?.length"
          class="fade-up text-2xl md:text-3xl text-foreground text mb-8 tracking-wider font-bold"
        >
          {{ $t('search.items_amount', { amount: '4' }) }}
        </h2>

        <div class="fade-up px-2 mb-8" v-else>
          <Skeleton class="h-10 max-w-xs" />
        </div>

        <div
          v-if="!newItems?.length"
          class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <div v-for="item in 3" :key="item">
            <div
              class="fade-up p-card flex flex-col relative shadow-md overflow-hidden border rounded-lg w-full max-w-sm bg-card max-h-fit"
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
        </div>

        <div
          v-else
          class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
        >
          <ProductCard class="fade-up" v-for="item in newItems" :key="item.id" :item="item" />
        </div>
      </div>

      <!-- EMPTY PAGE -->
      <div
        v-else
        class="heroBg my-8 md:mb-16 flex flex-col justify-center space-y-6 text-center items-center"
      >
        <div>
          <img
            src="/src/assets/empty_cart.svg"
            alt=""
            class="fade-up h-44 md:max-h-[200px] w-full mb-16"
          />
          <h3 class="fade-up text-xl md:text-2xl font-semibold text-foreground">
            {{ $t(`search.no_match`, { query: route.params.q.slice(2) }) }}
            <span
              class="fade-up text-transparent font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >
              {{ route.params.q.slice(2) }}
            </span>
            <span class="px-1.5" v-if="$i18n.locale !== 'ar'">
              {{ $t(`search.found`) }}
            </span>
          </h3>

          <p class="fade-up text-base md:text-lg text-muted-foreground mt-2">
            {{ $t(`shopping_cart.empty_cart_desc`) }}
          </p>
        </div>
        <RouterLink to="/">
          <Button variant="default" class="fade-up max-w-max">{{
            $t('shopping_cart.continue_shopping')
          }}</Button>
        </RouterLink>
      </div>
    </Container>
  </section>

  <Footer />
</template>
