<script setup>
import CategoryCard from './CategoryCard.vue'
import Container from '@/layouts/Container.vue'
</script>

<template>
  <section id="categories" class="py-8 md:py-16">
    <!-- Title -->

    <Container>
      <div class="">
        <h2 class="text-2xl md:text-3xl text-foreground mb-8 tracking-wider font-bold">
          {{ $t(`home.categories`) }}
        </h2>

        <!-- <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2> -->
      </div>

      <!-- Grid List -->

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        <!-- Card -->

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </Container>
  </section>
</template>
