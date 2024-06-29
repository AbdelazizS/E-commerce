<template>
  <Toaster />
  <Preloader />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { onBeforeMount } from 'vue'
import i18n from '@/plugins/i18n'
import Preloader from './components/Preloader.vue'

onBeforeMount(() => {
  if (i18n.global.locale.value === 'en') {
    document.documentElement.dir = 'ltr'
    document.documentElement.setAttribute('dir', 'ltr')
  } else {
    document.documentElement.dir = 'rtl'
    document.documentElement.setAttribute('dir', 'rtl')
  }
})
</script>
