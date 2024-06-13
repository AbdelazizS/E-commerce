<script setup>
import { Button } from './ui/button'
import ProductCard from './ProductCard.vue'
import Container from '@/layouts/Container.vue'
import { Heart, ShoppingBag, Star } from 'lucide-vue-next'
</script>
<template>
  <section id="categories" class="py-8 md:py-16">
    <!-- Title -->

    <Container>
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl text-foreground text mb-8 tracking-wider font-bold">
          Featured Products
        </h2>
        <div
          class="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Container>
  </section>
</template>
