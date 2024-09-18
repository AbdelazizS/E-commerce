<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Container from '@/layouts/Container.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.scard', {
    scrollTrigger: {
      trigger: '.Services',
      start: 'top 60%'
      // toggleActions: 'play pause restart reset'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2
  })
})
</script>

<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <!-- mb-8 md:mb-16 -->
  <!-- bg-gradient-to-r to-primary from-primary/50 dark:bg-muted dark:to-muted dark:from-background/80dark:bg-muted dark:from-background/80 -->
  <section class="relative Services">
    <Container>
      <div class="grid md:grid-cols-2 lg:md:grid-cols-3 gap-10 items-center">
        <div class="scard rounded-md px-4 py-6 text-center shadow-md border bg-card">
          <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
            <span class="text-primary bg-primary/10 p-3 rounded-full shadow-sm border"
              ><svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
              >
                <path
                  d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
          </div>
          <h3 class="mt-4 font-semibold text-foreground text-xl md:text-2xl">أفضل الاسعار</h3>
          <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            طابق أقل سعر تواصل معنا إذا خفضنا سعر المنتج بعد شرائك له، أو وجدته بسعر أرخص لدى
            المنافس،
            <!-- وسنطابق أقل سعر -->
          </p>
        </div>
        <div class="scard rounded-md px-4 py-6 text-center shadow-md border bg-card">
          <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
            <span class="text-primary bg-primary/10 p-3 rounded-full"
              ><svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
              >
                <path
                  d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
          </div>
          <h3 class="mt-4 font-semibold text-foreground text-xl md:text-2xl">توصيل مجاني</h3>
          <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            التوصيل المجاني للمنازل استمتع بتوصيل مجاني للطلبات أكثر من 99 رس.
          </p>
        </div>
        <div class="scard rounded-md px-4 py-6 text-center shadow-md border bg-card">
          <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md">
            <span class="text-primary bg-primary/10 p-3 rounded-full"
              ><svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
              >
                <path
                  d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
          </div>
          <h3 class="mt-4 font-semibold text-foreground text-xl md:text-2xl">خدمات متنوعة</h3>
          <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            خدمات للتسوق بشكل أسرع الاستلام من المعرض تسوق اونلاين كل ما تحتاجه
            <!-- واستلم من أقرب معرض
            لك خلال ساعة. -->
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
