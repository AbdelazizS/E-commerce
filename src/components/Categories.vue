<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CategoryCard from './CategoryCard.vue'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '@/layouts/Container.vue'
import { ref } from 'vue'

const newItems = ref([
  {
    title: 'Computers',
    id: 1,
    image: '/src/assets/pc.png'
  },
  {
    title: 'Accessories',
    id: 2,
    image: '/src/assets/watch.png'
  },
  {
    title: 'SomeSth',
    id: 1,
    image: '/src/assets/cta.png'
  }
])
</script>

<template>
  <section id="categories" class="my-16 md:my-24 Categories">
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

        <div
          v-if="!newItems"
          class="flex flex-col space-y-3"
          v-for="item in newItems"
          :key="item.id"
        >
          <Skeleton
            class="h-60 w-72 rounded-xl shadow-p p-3 group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black/50 before:absolute before:inset-0 before:opacity-10 before:transition-all max-w-sm"
          />
        </div>

        <CategoryCard v-for="item in newItems" :key="item.id" :item="item" />
      </div>
    </Container>
  </section>
</template>
