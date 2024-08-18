<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div className="min-h-[] fl items-center my-8 md:my-16">
    <Container className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white  bg-purple-500">
        <div className="p-6 sm:p-8">
          <p data-aos="slide-right" className="text-sm">{{ $t(`${data.discount}`) }}</p>
          <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">
            {{ $t(`${data.title}`) }}
          </h1>
          <p data-aos="fade-up" className="text-sm mt-4">
            {{ $t(`${data.date}`) }}
          </p>
        </div>
        <div data-aos="zoom-in" className="h-full flex items-center">
          <img
            :src="data.image"
            alt=""
            className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <p data-aos="zoom-out" className="font-bold text-xl">
            {{ $t(`${data.title2}`) }}
          </p>
          <p data-aos="fade-up" className=" text-3xl sm:text-5xl font-bold">
            {{ $t(`${data.title3}`) }}
          </p>
          <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
            {{ $t(`${data.title4}`) }}
          </p>
          <div data-aos="fade-up" data-aos-offset="0">
            <Button variant="outline" class="text-foreground">
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
</script>
