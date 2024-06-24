<script setup>
// import { Button } from '../components/ui/button'
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '../components/Footer.vue'
// import { Badge } from '@/components/ui/badge'
import OrderCard from '@/components/OrderCard.vue'
</script>

<template>
  <!--  -->
  <Navbar />

  <BottomNav>
    {{ $t('orders.orders') }}
  </BottomNav>

  <!--  -->

  <!--  -->
  <Container>
    <div class="py-8 mb-16">
      <div class="grid md:grid-cols-2 md:gap-4 gap-6">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  </Container>

  <Footer />
</template>
