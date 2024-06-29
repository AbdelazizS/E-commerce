<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'

import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.from('.preguntas-text', {
    scale: 0.5,
    duration: 1.5,
    scrollTrigger: { trigger: '.preguntas', toggleActions: 'play pause restart reset' }
  })
})
</script>

<template>
  <div class="heroBg">
    <Navbar id="header" class="navbar" />
    <Hero />
  </div>
  <Categories />
  <Products />

  <!-- <section
    data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="500"
    class="relative w-full bg-[#D8EEFE] py-12 rounded-xl shadow-[0_6px_30px_rgba(9,64,103,0.13)] mb-24 overflow-hidden"
  >
    <div class="relative z-10 flex flex-col items-center px-4 sm:px-8">
      <h3
        class="text text-2xl sm:text-3xl lg:text-4xl text-[#094067] text-center font-bold leading-tight px-0 lg:px-24 xl:px-48 mb-9"
      >
        Pengen Dapet Info Seputar Destinasi Wisata? Yuk Berlangganan Di Newsletter Kami
      </h3>
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
      >
        <div
          class="px-6 py-4 w-full md:w-[550px] bg-white shadow-md rounded-md flex space-x-2 focus-within:ring-2 focus-within:ring-[#3DA9FC] ring-offset-2 transition duration-300"
        >
          <input
            class="w-full border-none outline-none focus:outline-none"
            type="text"
            placeholder="Tulis alamat email kamu disini"
          />
        </div>
        <button
          class="w-full sm:w-fit bg-[#EF4565] px-6 py-4 text-white font-bold shadow-md shadow-[rgba(239,69,101,0.25)] rounded-md hover:bg-[#d03753] transition-colors duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div
      class="absolute top-[-140%] left-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"
    ></div>
    <div
      class="absolute bottom-[-190%] left-[-25%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"
    ></div>
    <div
      class="absolute top-[-140%] right-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"
    ></div>
    <div
      class="absolute bottom-[-190%] right-[-16%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"
    ></div>
  </section> -->
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
