<script setup>
import CategoryCard from './CategoryCard.vue'
import Container from '@/layouts/Container.vue'
</script>

<template>
  <section id="categories" class="py-8 md:py-16">
    <!-- Title -->

    <Container>
      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl text-foreground tracking-wider font-bold">
          {{ $t(`home.categories`) }}
        </h2>

        <p class="text-base md:text-xl text-muted-foreground mt-2">
          {{ $t(`home.categories_desc`) }}
        </p>
      </div>

      <!-- Grid List -->

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        <!-- Card -->

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </Container>
  </section>
</template>
