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
</script>

<template>
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
    <DropdownMenuContent class="w-56" v-if="no">
      <DropdownMenuLabel>{{ $t(`home.nav.my_account`) }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="me-2 h-4 w-4" />
          <span>{{ $t(`home.nav.profile`) }}</span>
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center">
          <div class="flex items-center">
            <Bell class="me-2 h-4 w-4" />
            <span>{{ $t(`home.nav.notifications`) }}</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Heart class="me-2 h-4 w-4" />
          <span>{{ $t(`home.nav.favourites`) }}</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
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
