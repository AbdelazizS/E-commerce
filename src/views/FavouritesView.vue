<script setup>
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useFavoritesStore } from '@/stores/favouritesStore.js'

// const favouriteItems = ref([])
const favouriteStore = useFavoritesStore()
const { favouriteItems } = favouriteStore

onMounted(() => {
  // console.log(favouriteStore.favouriteItems)
})
</script>

<template>
  <!--  -->
  <Navbar />

  <BottomNav :baseRoute="'profile'">
    <template #base>
      {{ $t('home.nav.profile') }}
    </template>
    {{ $t('home.nav.favourites') }}
  </BottomNav>

  <!--  -->
  <Container>
    <div class="py-8 mb-8">
      <div class="grid md:grid-cols-2 md:gap-4 gap-6 md:gap-y-12" v-if="favouriteItems?.length > 0">
        <div
          v-for="item in favouriteItems"
          :key="item.id"
          class="bg-card shadow-md border max-w-lg p-4 relative"
        >
          <div class="flex items-center gap-4 md:gap-6 items-">
            <div class="w-36 h-26 md:w-40 md:h-40">
              <img
                src="/src/assets/pc.png"
                alt="product-image"
                class="w-full rounded-lg h-full object-cover"
              />
            </div>

            <div class="space-y-2">
              <RouterLink :to="`/product/${item.id}`">
                <h2
                  class="text-lg font-bold text-foreground transition-all duration-300 hover:underline hover:text-primary"
                >
                  {{ item.title }}
                </h2>
              </RouterLink>
              <div class="flex items-center text-muted-foreground">
                <p class="text-base">{{ item.price }}.00 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="heroBg mb-8 md:mb-16 flex flex-col justify-center space-y-6 text-center items-center"
      >
        <div>
          <img src="/src/assets/empty_cart.svg" alt="" class="h-44 md:max-h-[200px] w-full mb-16" />
          <h3 class="text-xl md:text-2xl font-semibold text-foreground">
            {{ $t(`shopping_cart.your_cart`) }}
            <span
              class="text-transparent font-bold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >{{ $t(`shopping_cart.empty`) }}
            </span>
          </h3>

          <p class="text-base md:text-lg text-muted-foreground mt-2">
            {{ $t(`shopping_cart.empty_cart_desc`) }}
          </p>
        </div>
        <RouterLink to="/">
          <Button variant="default" class="max-w-max">{{
            $t('shopping_cart.continue_shopping')
          }}</Button>
        </RouterLink>
      </div>
    </div>
  </Container>

  <Footer />
</template>
