<script setup>
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <!--  -->
  <Navbar />

  <BottomNav :baseRoute="'profile/orders'" :rootRoute="'profile'">
    <template #root>
      {{ $t('profile') }}
    </template>
    <template #base>
      {{ $t('orders.orders') }}
    </template>
    {{ $t('orders.order_details') }}
  </BottomNav>

  <!--  -->
  <Container>
    <div class="py-8 md:mb-16">
      <div class="grid md:grid-cols-2 md:gap-4 gap-6">
        <div class="bg-card shadow-md border max-w-lg p-4 relative">
          <div
            class="bg-primary w-8 h-8 md:h-10 md:w-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 ltr:right-2 rtl:left-2 rtl:md:left-4 md:top-4 ltr:md:right-4 text-white font-bold"
          >
            2
          </div>
          <div class="flex items-center gap-4 md:gap-6 items-">
            <div class="w-36 h-26 md:w-40 md:h-40">
              <img
                src="/src/assets/pc.png"
                alt="product-image"
                class="w-full rounded-lg h-full object-cover"
              />
            </div>

            <div class="space-y-2">
              <h2 class="text-lg font-bold text-foreground">Apple iMac 24</h2>
              <div class="flex items-center text-muted-foreground">
                <p class="text-base">259.000 $</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-card shadow-md border max-w-lg p-4 relative">
          <div
            class="bg-primary w-8 h-8 md:h-10 md:w-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 ltr:right-2 rtl:left-2 rtl:md:left-4 md:top-4 ltr:md:right-4 text-white font-bold"
          >
            2
          </div>
          <div class="flex items-center gap-4 md:gap-6 items-">
            <div class="w-36 h-26 md:w-40 md:h-40">
              <img
                src="/src/assets/pc.png"
                alt="product-image"
                class="w-full rounded-lg h-full object-cover"
              />
            </div>

            <div class="space-y-2">
              <h2 class="text-lg font-bold text-foreground">Apple iMac 24</h2>
              <div class="flex items-center text-muted-foreground">
                <p class="text-base">259.000 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Footer />
</template>
