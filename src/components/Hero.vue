<script setup>
import { useColorMode } from '@vueuse/core'
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
// import { Card, CardContent } from '@/components/ui/card'

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false
})
</script>

<template>
  <div class="py-8 md:py-12">
    <Container>
      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div class="">
          <div class="ext-cener space-y-8">
            <Badge variant="outline" class="text-sm py-2 flex max-w-max gap-2">
              <span>Save Up to</span>
              <span class="text-primary">
                <Badge>15%</Badge>
              </span>
            </Badge>

            <div class="max-w-screen-sm text- text-3xl sm:text-4xl md:text-6xl font-bold">
              <h1>
                Your One-Stop
                <span
                  class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                  >Electronic
                </span>
                Market
              </h1>
            </div>

            <p class="max-w-screen-sm text-xl text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit unde
              asperiores voluptas beatae id pariatur debitis laudantium!
            </p>

            <div class="space-y-4 md:space-y-0 md:space-x-4">
              <Button class="sm:w font-bold group/arrow"> SHOP NOW </Button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <Carousel
            class="relative w-full max-w-md"
            :plugins="[plugin]"
            @mouseenter="plugin.stop"
            @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
          >
            <CarouselContent>
              <CarouselItem v-for="(_, index) in 3" :key="index">
                <div class="p-1">
                  <img className="w-full object-cover" src="/src/assets/pc.png" alt="" />
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
