<script setup>
import { Button } from '../components/ui/button'
import Navbar from '../components/Navbar.vue'
import Container from '@/layouts/Container.vue'
import BottomNav from '@/components/BottomNav.vue'
import Footer from '../components/Footer.vue'
import CartItem from '../components/CartItem.vue'
import { useCartStore } from '@/stores/cart.js'
// import {storeToRefs} from 'pinia'
// const { cartItems } = storeToRefs(store)
// const { totalAmount, cartItems } = CartStore
const CartStore = useCartStore()

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Skeleton } from '@/components/ui/skeleton'
import { getCartItems, addCartItem } from '@/services/api'

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  addCartItem()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  gsap.from('.fade-up', {
    scrollTrigger: {
      trigger: '.Cart',
      start: 'top 60%'
      // toggleActions: 'play pause restart reset'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1
  })
})
</script>

<template>
  <!--  -->
  <Navbar />

  <!--  -->
  <BottomNav>
    {{ $t('shopping_cart.title') }}
  </BottomNav>

  <!--  -->
  <Container>
    <div class="Cart py-8 mb-8">
      <div class="md:gap-6 lg:flex lg:items-start xl:gap-8" v-if="CartStore.cartItems?.length > 0">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <CartItem
              class="fade-up"
              v-for="item in CartStore.cartItems"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>

        <div
          class="fade-up mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full lg:sticky lg:top-4"
        >
          <div
            class="space-y-4 rounded-lg border bg-card p-4 shadow-sm :border-gray-700 :bg-gray-800 sm:p-6"
          >
            <p class="text-xl font-semibold text-foreground">
              {{ $t('shopping_cart.order_summary') }}
            </p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-foreground/60 :text-gray-400">
                    {{ $t('shopping_cart.original_price') }}
                  </dt>
                  <dd class="text-base font-medium text-foreground">
                    <span v-if="!CartStore.loading"> ${{ CartStore.totalAmount }} </span>
                    <span v-else>
                      <Skeleton class="h-5 rounded-md w-[80px]" />
                    </span>
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-foreground/60 :text-gray-400">
                    {{ $t('shopping_cart.shipping') }}
                  </dt>
                  <dd v-if="!CartStore.loading" class="text-base font-medium text-text-foreground">
                    $9
                  </dd>

                  <dd v-else>
                    <Skeleton class="h-5 rounded-md w-[50px]" />
                  </dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t pt-2 :border-gray-700">
                <dt class="text-base font-bold text-foreground">
                  {{ $t('shopping_cart.total') }}
                </dt>

                <dd class="text-base font-medium text-foreground">
                  <span v-if="!CartStore.loading"> ${{ CartStore.totalAmount + 9 }} </span>
                  <span v-else>
                    <Skeleton class="h-5 rounded-md w-[90px]" />
                  </span>
                </dd>
              </dl>
            </div>

            <Button variant="default" class="w-full">{{ $t('shopping_cart.checkout') }}</Button>

            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-normal text-foreground/60 :text-gray-400">
                {{ $t('or') }}
              </span>

              <RouterLink
                to="/"
                class="inline-flex items-center gap-1 text-sm font-medium text-primary-700 underline hover:no-underline :text-primary-500"
              >
                {{ $t('shopping_cart.continue_shopping') }}
                <!-- <svg
                class="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg> -->
              </RouterLink>
            </div>
          </div>
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
            {{ $t(`shopping_cart.your_cart`) }}
            <span
              class="fade-up text-transparent font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >{{ $t(`shopping_cart.empty`) }}
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
    </div>
  </Container>

  <Footer />
</template>
