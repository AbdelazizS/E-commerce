<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

import { onBeforeMount } from 'vue'
import i18n from '@/plugins/i18n'

onBeforeMount(() => {
  console.log(i18n.global.locale.value)
  if (i18n.global.locale.value === 'en') {
    document.documentElement.dir = ',ltr'
    document.documentElement.setAttribute('dir', 'ltr')
  } else {
    document.documentElement.dir = 'rtl'
    document.documentElement.setAttribute('dir', 'rtl')
  }
})
</script>


