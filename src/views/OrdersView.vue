<script setup>
// import { Button } from '../components/ui/button'
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '../components/Footer.vue'
// import { Badge } from '@/components/ui/badge'
import OrderCard from '@/components/OrderCard.vue'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.from('.fade-up', {
    scrollTrigger: {
      trigger: '.Orders',
      start: 'top 60%'
      // toggleActions: 'play pause restart reset'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1
  })
})
</script>

<template>
  <!--  -->
  <Navbar />

  <BottomNav :baseRoute="'profile'">
    <template #base>
      {{ $t('home.nav.profile') }}
    </template>
    {{ $t('orders.orders') }}
  </BottomNav>

  <!--  -->

  <!--  -->
  <Container>
    <div class="Orders py-8 mb-16">
      <div class="grid md:grid-cols-2 md:gap-4 gap-6">
        <OrderCard class="fade-up" />
        <OrderCard class="fade-up" />
      </div>
    </div>
  </Container>

  <Footer />
</template>
