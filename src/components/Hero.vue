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
          <div class="space-y-8">
            <Badge variant="outline" class="text-sm py-2 flex max-w-max gap-2">
              <span>{{ $t(`home.hero.save`) }}</span>
              <span class="text-primary">
                <Badge>{{ $t(`home.hero.save_perc`) }}</Badge>
              </span>
            </Badge>

            <div
              class="max-w-screen-sm text- text-3xl sm:text-4xl md:text-6xl font-bold"
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

            <div class="max-w-screen-sm text- text-3xl sm:text-4xl md:text-6xl font-bold" v-else>
              <h1>
                Your {{ $t(`home.hero.one_stop`) }}
                <span
                  class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
                  >{{ $t(`home.hero.electronic`) }}
                </span>
                {{ $t(`home.hero.market`) }}
              </h1>
            </div>

            <p class="max-w-screen-sm text-xl text-muted-foreground">
              {{ $t(`home.hero.description`) }}
            </p>

            <div class="space-y-4 md:space-y-0 md:space-x-4">
              <Button class="sm:w font-bold group/arrow">{{ $t(`home.shop_now`) }} </Button>
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
