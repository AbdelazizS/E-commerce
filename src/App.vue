<template>
  <Toaster />
  <Preloader />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { onBeforeMount, watch } from 'vue'
import i18n from '@/plugins/i18n'
import Preloader from './components/Preloader.vue'

import { usePageReady } from '@/composable/useWindowLoad'

const { isReady } = usePageReady()

// watch(
//   () => isReady,
//   (isReady) => {
//     if (!isReady) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'auto'
//     }
//   }
// )
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
