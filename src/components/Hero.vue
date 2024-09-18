<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Container from '@/layouts/Container.vue'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const plugin = Autoplay({
  delay: 4500,
  stopOnMouseEnter: true,
  stopOnInteraction: false
})

const images = ['/src/assets/watch.png', '/src/assets/pc.png']

import { onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePageReady } from '@/composable/useWindowLoad'

// gsap.registerPlugin(ScrollTrigger)

const { isReady } = usePageReady()
const tl = gsap.timeline()
watch(
  () => isReady.value,
  (isReady) => {
    if (isReady) {
      tl.play()
    }
  }
)
onMounted(() => {
  tl.add('start')
    // .to('.hero-img', { y: '-100%', duration: 1.5, delay: 2 }, 'start')
    .from('.hero-img', {
      scale: 0.8,
      opacity: 0,
      delay: 1,
      duration: 2,
      ease: 'power3.inOut'
      // scrollTrigger: { trigger: '.hero-title', toggleActions: 'play pause restart reset' }
    })
    .from(
      '.hero-description',
      {
        y: '40',
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power1.inOut'
      },
      'start'
    )
    .from(
      '.hero-title',
      {
        y: '20',
        opacity: 0,
        duration: 1,
        delay: 0.8
      },
      'start'
    )
})
</script>

<template>
  <div class="relative py-8 md:py-16 overflow-hidden">
    <Container>
      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="">
          <div class="space-y-8">
            <Badge variant="outline" class="border- hero-title text-sm py-2 flex max-w-max gap-2">
              <span>{{ $t(`home.hero.save`) }}</span>
              <span class="text-primary">
                <Badge>{{ $t(`home.hero.save_perc`) }}</Badge>
              </span>
            </Badge>

            <div
              class="hero-title max-w-screen-sm text- text-3xl sm:text-4xl md:text-6xl font-bold"
              v-if="$i18n.locale === 'ar'"
            >
              <h1 class="left">
                {{ $t(`home.hero.market`) }}
                <span
                  class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                  >{{ $t(`home.hero.electronic`) }}
                </span>
                {{ $t(`home.hero.one_stop`) }}
              </h1>
            </div>

            <div
              class="hero-title max-w-screen-sm text- text-3xl sm:text-4xl md:text-6xl font-bold"
              v-else
            >
              <h1>
                Your {{ $t(`home.hero.one_stop`) }}
                <span
                  class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                  >{{ $t(`home.hero.electronic`) }}
                </span>
                {{ $t(`home.hero.market`) }}
              </h1>
            </div>

            <p class="hero-description max-w-screen-sm text-xl text-muted-foreground">
              {{ $t(`home.cta.description`) }}
            </p>

            <div class="space-y-4 md:space-y-0 md:space-x-4">
              <Button class="hero-description sm:w font-bold group/arrow shadow-xl"
                >{{ $t(`home.shop_now`) }}
              </Button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <Carousel
            class="relative w-full max-w-md hero-img"
            :plugins="[plugin]"
            @mouseenter="plugin.stop"
            @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
          >
            <CarouselContent>
              <CarouselItem v-for="(_, index) in 2" :key="index">
                <div class="p-1">
                  <img className="w-full object-cover " :src="images[index]" alt="" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="" />
            <CarouselNext />
          </Carousel>
          <!-- <img className="w-full object-cover" src="/src/assets/pc.png" alt="" /> -->
        </div>
      </div>
    </Container>
  </div>

  <!-- </div> -->
</template>
