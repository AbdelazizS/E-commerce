<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="preloader-active">
    <div class="preloader loading-page flex items-center justify-center bg-muted">
      <div class="preloader-inner position-relative">
        <div class="preloader-circle bg-muted"></div>
        <div class="preloader-img pere-text">
          <img src="/src/assets/logo.png" alt="" class="preloader-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.preloader {
  /* background-color: #f7f7f7; */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  margin: 0 auto;
}
.preloader .preloader-circle {
  width: 100px;
  height: 100px;
  position: relative;
  border-style: solid;
  border-width: 3px;
  border-top-color: #f97316;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  z-index: 10;
  border-radius: 50%;
  -webkit-box-shadow: 0 1px 5px 0 rgba(35, 181, 185, 0.15);
  box-shadow: 0 1px 5px 0 rgba(35, 181, 185, 0.15);
  -webkit-animation: zoom 2000ms infinite ease;
  animation: zoom 2000ms infinite ease;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
}

.preloader .preloader-img {
  position: absolute;
  top: 50%;
  z-index: 200;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-top: 6px;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
}
.preloader .preloader-img img {
  max-width: 55px;
}

@-webkit-keyframes zoom {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
  }
}
@keyframes zoom {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -webkit-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
  }
}
</style>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

// /1/ hide
// .to(".hide", { opacity: 0, duration: 0.3 })
// /2/ to left
// width: '100%',
// ease: Expo.easeInOut,
// duration: 1.2,
// delay: 0.5
// /3/ to top
// height: '100%',
// ease: 'easeInOut',
// duration: 0.7,
// /3/ to
onMounted(() => {
  //   awesome
  gsap.fromTo(
    '.loading-page',
    { opacity: 1 },
    {
      opacity: 0,
      display: 'none',
      duration: 1.5,
      delay: 1.5
    }
  )
})
</script>
