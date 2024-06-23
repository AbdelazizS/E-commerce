<template>
  <Toaster />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { onBeforeMount } from 'vue'
import i18n from '@/plugins/i18n'
import axios from 'axios'

axios.get('https://api.etoolabbs.com/v3/public/api/get_products').then((res) => {
  console.log(res)
})
axios.get('https://api.aray.tarhil.com/activates/get-activites').then((res) => {
  console.log(res)
})

onBeforeMount(() => {
  console.log(i18n.global.locale.value)
  if (i18n.global.locale.value === 'en') {
    document.documentElement.dir = 'ltr'
    document.documentElement.setAttribute('dir', 'ltr')
  } else {
    document.documentElement.dir = 'rtl'
    document.documentElement.setAttribute('dir', 'rtl')
  }
})
</script>
