<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Offer items-center my-8 md:my-16 bg-purple-500">
    <Container class="px-0">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white x">
        <div class="p-6 sm:p-8">
          <p data-aos="slide-right" class="offer-text text-sm">
            {{ $t(`${data.discount}`) }}
          </p>
          <h1 data-aos="zoom-out" class="zoom-out uppercase text-4xl lg:text-7xl font-bold">
            {{ $t(`${data.title}`) }}as
          </h1>
          <p data-aos="fade-up" class="offer-text text-sm mt-4">
            {{ $t(`${data.date}`) }}
          </p>
        </div>
        <div data-aos="zoom-in" class="h-full flex items-center">
          <img
            src="/src/assets/pc.png"
            alt=""
            class="zoom-in opacity-0 scale- w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
          />
        </div>
        <div class="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <p data-aos="zoom-out" class="zoom-out font-bold text-xl">
            {{ $t(`${data.title2}`) }}
          </p>
          <p data-aos="fade-up" class="offer-text text-3xl sm:text-5xl font-bold">
            {{ $t(`${data.title3}`) }}
          </p>
          <p data-aos="fade-up" class="offer-text text-sm tracking-wide leading-5">
            {{ $t(`${data.title4}`) }}
          </p>
          <div data-aos="fade-up" data-aos-offset="0">
            <Button variant="outline" class="offer-text text-foreground">
              {{ $t('home.get_it_now') }}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import Container from '@/layouts/Container.vue'

const data = {
  discount: 'home.offers.offer-discount',
  title: 'home.offers.offer-title',
  date: 'home.offers.offer-date',
  image: '/src/assets/pc.png',
  title2: 'home.offers.offer-product-title',
  title3: 'home.offers.offer-name',
  title4: 'home.offers.offer-description'
}

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // gsap.from('.slide-right', {
  //   scrollTrigger: {
  //     trigger: '.Offer',
  //     start: 'top 60%',
  //     toggleActions: 'play pause restart reset'
  //   },
  //   opacity: 0,
  //   x: -50,
  //   delay: 0.5,
  //   duration: 1
  // })
  gsap.from('.Offer', {
    scrollTrigger: {
      trigger: '.Offer',
      start: 'top 75%'

      // toggleActions: 'play pause restart reset'
    },
    opacity: 0,
    y: 50,
    duration: 1
  })
  gsap.from('.offer-text', {
    scrollTrigger: {
      trigger: '.Offer',
      start: 'top 70%'
      // toggleActions: 'play pause restart reset'
    },
    opacity: 0,
    y: 50,
    delay: 0.2,
    duration: 0.8,
    stagger: 0.2
  })
  gsap.from('.zoom-out', {
    scrollTrigger: {
      trigger: '.Offer',
      start: 'top 70%'
      // toggleActions: 'play pause restart reset'
    },
    opacity: 0,
    scale: 1.2,
    delay: 0.4,
    duration: 1
  })
  gsap.to('.zoom-in', {
    scrollTrigger: {
      trigger: '.Offer',
      start: 'top 65%'
      // toggleActions: 'play pause restart reset'
    },
    opacity: 1,
    scale: 1.3,
    delay: 0.1,
    duration: 1
  })
})
</script>
