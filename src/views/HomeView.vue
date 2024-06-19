<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="heroBg">
    <Navbar />
    <Hero />
  </div>
  <Categories />
  <Products />
  <Footer />
</template>

<style>
.heroBg {
  background: url('/src/assets/squares-bg.jpg') no-repeat center;
  background-size: cover;
  background-size: cover;
  background-blend-mode: overlay;
}
.dark .heroBg {
  background: transparent;
}
</style>
