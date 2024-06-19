<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'
</script>

<template>
  <Button
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
    size="sm"
    variant="ghost"
    class="w-full justify-start lg:justify-center lg:w-12"
  >
    <div v-if="mode == 'light'" class="flex gap-2">
      <Moon class="size-6" />
      <span class="block lg:hidden"> Dark </span>
    </div>

    <div v-else="mode == 'dark'" class="flex gap-2">
      <Sun class="size-6" />
      <span class="block lg:hidden">Light</span>
    </div>
  </Button>
</template>
