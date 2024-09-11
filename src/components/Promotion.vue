<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!--  bg-sky-600 -->
  <section
    class="overflow-hidden relative h-64 text-gray-50 flex flex-col justify-center items-center gap-4 py-4 bg-gradient-to-r to-primary from-primary/30 dark:bg-muted dark:to-muted dark:from-background/80 my-8 md:my-16 Promo"
  >
    <svg
      y="0"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      width="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      height="100"
      class="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current"
    >
      <path
        stroke-width="8"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z"
        class="svg-stroke-primary"
      ></path>
    </svg>
    <div class="flex flex-col items-center Promo_text">
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
        {{ $t(`home.offers.discounts`) }}
      </h2>
      <p
        class="relative text-xs inline-block after:absolute after:content-[''] after:ms-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ms-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5"
      >
        {{ $t(`home.offers.up_to`) }}
      </p>
      <span class="font-extrabold text-5xl md:text-7xl -skew-x-12 -skew-y-12 mt-4">18%</span>
    </div>
    <!-- <button
      class="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-sky-500 hover:bg-sky-500 hover:text-gray-50"
    >
      Shop now
    </button> -->
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.Promo', {
    y: '20%',
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.Promo'
      // toggleActions: 'play pause restart reset'
    }
  })

  gsap.from('.Promo_text', {
    y: '50%',
    opacity: 0,
    duration: 1.5,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.Promo'
      // toggleActions: 'play pause restart reset'
    }
  })
})
</script>
