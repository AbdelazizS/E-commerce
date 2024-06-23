<script setup>
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const favouriteItems = ref([])
const cartStore = useCartStore()

onMounted(() => {
  console.log(cartStore.cartItems)
})
</script>

<template>
  <!--  -->
  <Navbar />

  <BottomNav>
    {{ $t('home.nav.favourites') }}
  </BottomNav>

  <!--  -->
  <Container>
    <div class="py-8 md:mb-16">
      <div class="grid md:grid-cols-2 md:gap-4 gap-6 md:gap-y-12">
        <div
          v-for="item in cartStore.cartItems"
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
              <h2 class="text-lg font-bold text-foreground">
                {{ item.title }}
              </h2>
              <div class="flex items-center text-muted-foreground">
                <p class="text-base">{{ item.price }}.00 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Footer />
</template>
