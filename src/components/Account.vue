<script setup>
import { Bell, Heart, LogOut, User } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useAuthStore } from '@/stores/authStore'
import { useFavoritesStore } from '@/stores/favouritesStore'
import { storeToRefs } from 'pinia'
import { useToast } from './ui/toast'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Loader from './Loader.vue'

const { toast } = useToast()
const router = useRouter()
const loading = ref(false)
const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)
const notificationStore = useFavoritesStore()

const handleLogout = () => {
  loading.value = true
  authStore
    .logout()
    .then((res) => {
      if (res.status === 200) {
        toast({
          title: 'auth.logout_success',
          success: true,
          duration: 3000
        })
        setTimeout(() => {
          loading.value = false
          router.push('/')
        }, 10000)
      }
    })
    .catch((error) => {
      loading.value = false
      console.log(error)
    })
}
</script>

<template>
  <Loader v-if="loading" />
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm" class="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-48 md:w-56" v-if="isAuthenticated">
      <DropdownMenuLabel>{{ $t(`home.nav.my_account`) }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup class="space-y-.5">
        <RouterLink to="/profile">
          <DropdownMenuItem>
            <User class="me-2 h-4 w-4" />
            <span>{{ $t(`home.nav.profile`) }}</span>
          </DropdownMenuItem>
        </RouterLink>

        <RouterLink to="/profile/notifications">
          <DropdownMenuItem class="flex items-center">
            <div class="flex items-center me-2">
              <div class="relative inline-flex w-fit">
                <div
                  v-if="notificationStore.favouriteItems?.length > 0"
                  class="absolute bottom-auto start-1 top-1 z-10 inline-block -translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1 text-xs"
                ></div>
                <Bell class="h-4 w-4" />
              </div>
            </div>
            {{ $t(`home.nav.notifications`) }}
          </DropdownMenuItem>
        </RouterLink>

        <RouterLink to="/profile/favourites">
          <DropdownMenuItem>
            <Heart class="me-2 h-4 w-4" />
            <span>{{ $t(`home.nav.favourites`) }}</span>
          </DropdownMenuItem>
        </RouterLink>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleLogout">
        <LogOut class="me-2 h-4 w-4" />
        <span>{{ $t(`home.nav.sign_out`) }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>

    <DropdownMenuContent class="w-56" v-else>
      <RouterLink to="/auth/register">
        <DropdownMenuItem>
          <User class="me-2 h-4 w-4" />
          <span>{{ $t(`home.nav.sign_up`) }}</span>
        </DropdownMenuItem>
      </RouterLink>
      <DropdownMenuSeparator />

      <RouterLink to="/auth/login">
        <DropdownMenuItem>
          <User class="me-2 h-4 w-4" />
          <span>{{ $t(`home.nav.sign_in`) }}</span>
        </DropdownMenuItem>
      </RouterLink>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
