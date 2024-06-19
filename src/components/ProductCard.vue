<script setup>
import { Button } from './ui/button'
import { Heart, ShoppingBag, Star } from 'lucide-vue-next'

import { ref } from 'vue'

const fill = ref(false)
function setFav() {
  fill.value = fill.value === true ? false : true
}
</script>

<template>
  <!-- Card Wrapper -->
  <div class="relative shadow-md overflow-hidden border rounded-lg w-full max-w-xs bg-card">
    <!-- Image -->
    <div
      class="w-full h-[210px] overflow-hidden mx-auto aspect-w!-16 aspect-h-8 bg-primary/10 dark:bg-primary-foreground/5"
    >
      <img src="/src/assets/pc.png" class="h-full w-full object-contain" />
    </div>

    <!-- Content -->
    <div class="px-4 my-4">
      <!-- Favorite -->
      <div class="absolute top-4 right-4">
        <Button @click="setFav()" variant="outline" size="icon" class="favIcon rounded-full">
          <svg
            :class="`size-5 ${fill ? 'text-red-500 ' : ''}`"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>

          <!-- Add to Favorites -->
        </Button>
      </div>
      <div class="space-y-2 mb-4">
        <!-- category -->
        <div class="flex items-center justify-between">
          <p class="text-base text-muted-foreground">computers</p>
          <div class="flex font-medium gap- items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5 text-amber-400"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>

            <span class=""> 4 </span>
          </div>
        </div>

        <!-- title -->
        <RouterLink to="/product/1">
          <h4
            class="text-lg font-bold cursor-pointer transition-all duration-300 hover:text-primary"
          >
            Mega LCD TV For Sports
          </h4>
        </RouterLink>

        <!-- price -->
        <div class="flex items-center gap-2">
          <p class="text-lg font-semibold text-foreground">$20.00</p>
          <p class="text-base font-medium line-through text-muted-foreground">$25.00</p>
        </div>
      </div>

      <Button class="gap-2">
        <span>{{ $t(`home.add_to_cart`) }}</span>
        <ShoppingBag />
      </Button>
    </div>
  </div>

  <!-- <div class="border rounded-lg shadow-md -64 relative">
    <div
      class="bg-muted-foreground/15 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3"
    >
      <Heart fill="red" class="text-red-500 hover:scale-" />
    </div>


    <div class="max-h-64 h-64 bg-primary/10 border-b p-4 rounded-t-lg">
      <img
        src="/src/assets/pc.png"
        class="w-full object-cover h-full hover:scale-105 transition-all duration-300"
        lt=""
      />
    </div>
    <div class="p-4 mt-">
      <div class="flex justify-between items-center">
        <h5 class="text-muted-foreground">computers</h5>
        <div class="flex font-bold items-center">
          <Star fill="yellow" class="h-4 w-5 text-yellow-300 font-semibold" />
          4
        </div>
      </div>
      <h4 class="font-bold hover:text-primary mt-2 mb-4">product name</h4>
      <div class="flex justify-between items-center">
        <span class="font-semibold">22$</span>
        <Button variant="" class="flex gap-3"
          >add to cart <ShoppingBag />
        </Button>
      </div>
    </div>
  </div> -->
</template>
