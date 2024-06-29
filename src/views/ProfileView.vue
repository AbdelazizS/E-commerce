<script setup>
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar.vue'
import { Settings2Icon } from 'lucide-vue-next'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import Footer from '../components/Footer.vue'
import {
  Bell,
  Heart,
  Languages,
  FilePenLine,
  User,
  Settings,
  Mail,
  Lock,
  LogOut
} from 'lucide-vue-next'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
import { Moon, Sun } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { useToast } from '@/components/ui/toast'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Loader from '@/components/Loader.vue'

const { toast } = useToast()
const router = useRouter()
const loading = ref(false)

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)

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
        }, 1000)
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
  <Navbar />

  <BottomNav>
    {{ $t('home.nav.profile') }}
  </BottomNav>

  <Container>
    <div class="py-8 mb-8">
      <div class="flex gap-8 flex-col lg:flex-row">
        <div class="w-full lg:max-w-xs">
          <div
            class="flex items-center gap-4 px-4 py-6 lg:py-6 bg-muted rounded-md shadow-sm border h-24"
          >
            <!-- Avatar -->
            <div
              class="flex justify-center items-center w-14 h-14 shadow-md rounded-full border-4 overflow-hidden border-card bg-primary/50"
            >
              <div class="font-bold">
                {{ userInfo.client_name?.slice(0, 1) }}
              </div>
            </div>

            <!-- user data -->
            <div class="">
              <h3 class="text-lg md:text-xl text-foreground relative font-bold leading-6">
                {{ userInfo.client_name }}
              </h3>
              <p class="text-ltr text-sm md:text-base text-muted-foreground">
                {{ userInfo.email }}
              </p>
            </div>
          </div>

          <RouterLink :to="`/profile/orders`">
            <div
              class="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm flex items-center hover:bg-muted/30 cursor-pointer group"
              data-v0-t="card"
            >
              <div
                class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path
                    d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                  />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <div class="grid">
                <div
                  class="text-sm cursor-pointer font-medium px-4 transition-all duration-300 group-hover:underline group-hover:text-primary"
                >
                  {{ $t('orders.orders') }}
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                class="!p-0 !bg-transparent rtl:rotate-180 transition-all duration-300 group-hover:translate-x-[2px] rtl:group-hover:-translate-x-[2px] group-hover:scale-105 ltr:ml-auto rtl:mr-auto mx-1 border-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </div>
          </RouterLink>

          <div
            @click="handleLogout"
            class="mt-4 rounded-lg border bg-card text-card-foreground shadow-sm flex items-center hover:bg-muted/30 cursor-pointer group"
            data-v0-t="card"
          >
            <div class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12">
              <LogOut class="size-5" />
            </div>
            <div class="grid">
              <div
                class="text-sm cursor-pointer font-medium px-4 transition-all duration-300 group-hover:underline group-hover:text-primary"
              >
                {{ $t('home.nav.sign_out') }}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              class="!p-0 !bg-transparent rtl:rotate-180 transition-all duration-300 group-hover:translate-x-[2px] rtl:group-hover:-translate-x-[2px] group-hover:scale-105 ltr:ml-auto rtl:mr-auto mx-1 border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Button>
          </div>
        </div>

        <div class="w-full md:max-w-xl space-y-10">
          <div class="space-y-5">
            <h2 class="flex gap-2 items-center text-lg font-bold">
              <Settings2Icon class="size-5" />
              {{ $t('profile.personal_info') }}
            </h2>
            <section class="grid md:grid-cols-2 gap-4">
              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-2"
                data-v0-t="card"
              >
                <div
                  class="bg-muted text- rounded-s-lg flex items-center justify-center aspect-square w-12"
                >
                  <User class="size-5" />
                </div>
                <div class="grid gap-">
                  <div class="text-sm font-medium">
                    {{ $t('auth.name') }}
                  </div>
                  <div class="text-sm text-muted-foreground">
                    {{ userInfo.client_name }}
                  </div>
                </div>
              </div>

              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-2"
                data-v0-t="card"
              >
                <div
                  class="bg-muted text- rounded-s-lg flex items-center justify-center aspect-square w-12"
                >
                  <Mail class="size-5" />
                </div>
                <div class="grid gap-">
                  <div class="text-sm font-medium">
                    {{ $t('auth.email') }}
                  </div>
                  <div class="text-sm text-muted-foreground">
                    {{ userInfo.email }}
                  </div>
                </div>
              </div>

              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-2"
                data-v0-t="card p"
              >
                <div
                  class="bg-muted text- rounded-s-lg flex items-center justify-center aspect-square w-12"
                >
                  <Lock class="size-5" />
                </div>
                <div class="grid">
                  <div class="text-sm font-medium">
                    {{ $t('auth.password') }}
                  </div>
                  <div class="text-sm text-muted-foreground">********</div>
                </div>
                <RouterLink to="/profile/update-password" class="ltr:ml-auto rtl:mr-auto mx-1">
                  <Button variant="ghost" size="icon">
                    <FilePenLine class="size-5" />
                  </Button>
                </RouterLink>
              </div>
            </section>
          </div>

          <div class="space-y-5">
            <h2 className="flex gap-2 items-center text-lg font-bold">
              <Settings class="size-5" />
              {{ $t('profile.settings&data') }}
            </h2>

            <section class="grid gap-4">
              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-1"
                data-v0-t="card"
              >
                <div
                  class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12"
                >
                  <Languages class="size-5" />
                </div>
                <div class="grid">
                  <LanguageSwitcher :hide="true" />
                </div>
              </div>

              <div
                class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-1"
                data-v0-t="card"
              >
                <div
                  class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12"
                >
                  <div v-if="mode == 'light'" class="flex gap-2">
                    <Moon class="size-5" />
                  </div>

                  <div v-else-if="mode == 'dark'" class="flex gap-2">
                    <Sun class="size-5" />
                  </div>
                </div>
                <div class="grid">
                  <Button
                    @click="mode = mode === 'dark' ? 'light' : 'dark'"
                    size="sm"
                    variant="ghost"
                  >
                    <div class="text-sm font-medium">
                      {{ $t('change_theme') }}
                    </div>
                  </Button>
                </div>
              </div>

              <RouterLink :to="`/profile/favourites`">
                <div
                  class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center hover:bg-muted/30 cursor-pointer group"
                  data-v0-t="card"
                >
                  <div
                    class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12"
                  >
                    <Heart class="size-5" />
                  </div>
                  <div class="grid">
                    <div
                      class="text-sm cursor-pointer font-medium px-4 transition-all duration-300 group-hover:underline group-hover:text-primary"
                    >
                      {{ $t('favourites') }}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    class="!p-0 !bg-transparent rtl:rotate-180 transition-all duration-300 group-hover:translate-x-[2px] rtl:group-hover:-translate-x-[2px] group-hover:scale-105 ltr:ml-auto rtl:mr-auto mx-1 border-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </RouterLink>

              <RouterLink :to="`/profile/notifications`">
                <div
                  class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center hover:bg-muted/30 cursor-pointer group gap-4"
                >
                  <div
                    class="bg-muted rounded-s-lg flex items-center justify-center aspect-square w-12"
                  >
                    <Bell class="size-5" />
                  </div>
                  <div
                    class="text-sm cursor-pointer font-medium transition-all duration-300 group-hover:underline group-hover:text-primary"
                  >
                    {{ $t('notifications') }}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    class="!p-0 !bg-transparent rtl:rotate-180 transition-all duration-300 group-hover:translate-x-[2px] rtl:group-hover:-translate-x-[2px] group-hover:scale-105 ltr:ml-auto rtl:mr-auto mx-1 border-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-5 h-5"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </RouterLink>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Footer />
</template>
