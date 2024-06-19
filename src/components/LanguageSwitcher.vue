<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { setLocale } from '@/plugins/i18n'
import i18n from '@/plugins/i18n'

const locale = () => (i18n.global.locale.value === 'ar' ? 'home.nav.arabic' : 'home.nav.english')

// const switchLanguage = async (event) => {
//   const newLocale = event.target.value

//   await Tr.switchLanguage(newLocale)

//   try {
//     await router.replace({ params: { locale: newLocale } }) // <--- 3
//   } catch (e) {
//     // <--- 4
//     console.log(e)
//     router.push('/')
//   }
// }

// return { t, locale, supportedLocales, switchLanguage }
</script>

<template>
  <DropdownMenu :dir="i18n.global.locale.value === 'ar' ? 'rtl' : 'ltr'">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="flex gap-1 justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-foreground"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>

        <span class="text-foreground"> {{ $t(locale()) }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="i18n.global.locale.value">
        <DropdownMenuRadioItem value="ar" @click="setLocale('ar')">
          {{ $t('home.nav.arabic') }}
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="en" @click="setLocale('en')">
          {{ $t('home.nav.english') }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<!-- <script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { ref } from 'vue'

const onCLick = () => {
  console.log('www')
}

const language = ref('en')
</script>

<template>
  <Select v-model="language">
    <SelectTrigger class="w-[120px] lg:mx-2">
      <SelectValue placeholder="Select a fruit" :value="'ee'" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="en">Apple </SelectItem>
        <SelectItem value="banana"> Banana </SelectItem>
      </SelectGroup>
    </SelectContent>
    <p @click="onCLick">asdasd</p>
  </Select>
</template> -->
