<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CategoryCard from './CategoryCard.vue'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '@/layouts/Container.vue'
import { ref } from 'vue'

const items = ref([])

import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    items.value = [
      {
        title: 'Computers',
        id: 1,
        image: '/src/assets/pc.png'
      },
      {
        title: 'Accessories',
        id: 1,
        image: '/src/assets/watch.png'
      },
      {
        title: 'Phones',
        id: 1,
        image: '/src/assets/cta.png'
      }
    ]
  }, 100)
})
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

      <div
        v-if="!items.length"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
      >
        <div
          class="p-card flex flex-col relative rounded-md shadow-md border w-full max-w-xs max-h-fit"
        >
          <Skeleton class="h-48 w-full max-w-xs rounded-none" />
        </div>
      </div>

      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="item in items" :key="item">
          <CategoryCard :item="item" />
        </div>
      </div>
    </Container>
  </section>
</template>
