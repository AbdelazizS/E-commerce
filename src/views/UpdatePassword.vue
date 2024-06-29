<script setup>
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import { Button } from '@/components/ui/button'
import Container from '@/layouts/Container.vue'
import Footer from '../components/Footer.vue'
import { defineRule } from 'vee-validate'
import { ref } from 'vue'
import { required, regex, email, min, confirmed } from '@vee-validate/rules'
import PasswordInput from '@/components/PasswordInput.vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import Loader from '@/components/Loader.vue'
import { useToast } from '@/components/ui/toast'
import { useRouter } from 'vue-router'
import { UpdatePassword } from '@/services/api'

defineRule('required', required)
defineRule('regex', regex)
defineRule('email', email)
defineRule('min', min)
defineRule('confirmed', confirmed)

const strongPassword = '(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,35})'

const loading = ref(false)
const form = ref({
  password: '',
  password_Confirmation: ''
})
const schema = {
  password: { required: true, min: 8, regex: strongPassword },
  password_Confirmation: { required: true, confirmed: '@password' }
}

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)
const { toast } = useToast()
const router = useRouter()

console.log(userInfo.value)

const onSubmit = (values, { resetForm }) => {
  loading.value = true
  UpdatePassword({
    email: userInfo.email,
    password: values.password,
    app_id: '1999'
  })
    .then((response) => {
      console.log(response)
      // if (response.status === true) {
      //   toast({
      //     title: 'auth.password_updated_success',
      //     success: true,
      //     duration: 3000
      //   })
      //   setTimeout(() => {
      //     router.push({ name: 'profile' })
      //   }, 1500)
      // }
    })
    .catch((error) => {
      console.log(error)
      if (!error.response) {
        toast({
          title: 'network_error',
          // success: true,
          duration: 3000
        })
      }
    })

    .finally(() => {
      resetForm({
        values: {
          email: ''
        }
      })

      setTimeout(() => {
        loading.value = false
      }, 1500)
    })
}
</script>

<template>
  <Loader v-if="loading" />
  <!--  -->
  <Navbar />

  <BottomNav :baseRoute="'profile'">
    <template #base>
      {{ $t('home.nav.profile') }}
    </template>
    {{ $t('profile.update_password') }}
  </BottomNav>

  <Container>
    <div class="py-8 mb-8">
      <div class="flex gap-8 flex-col md:flex-row">
        <div class="w-full md:max-w-xs">
          <div class="flex items-center gap-4 px-4 py-6 bg-muted rounded-md shadow-sm border h-24">
            <!-- Avatar -->
            <div
              class="flex justify-center items-center w-14 h-14 shadow-md rounded-full border-4 overflow-hidden border-card bg-primary/50"
            >
              <div class="font-bold">
                {{ userInfo.client_name.slice(0, 1) }}
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
        </div>

        <div class="w-full md:max-w-xl space-y-10">
          <div
            class="rounded-lg border p-4 md:p-6 bg-card text-card-foreground shadow-sm max-w-md"
            data-v0-t="card"
          >
            <div class="flex flex-col pb-6 space-y-1">
              <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">
                {{ $t('profile.update_password') }}
              </h3>
              <p class="text-sm text-muted-foreground">
                {{ $t('auth.reset_password_desc') }}
              </p>
            </div>
            <vee-form :validation-schema="schema" @submit="onSubmit" class="space-y-6">
              <PasswordInput
                :placeholder="$t('auth.password_placeholder')"
                name="password"
                v-model="form.password"
                :label="$t('auth.password')"
              />
              <PasswordInput
                :placeholder="$t('auth.passwordConfirm_placeholder')"
                name="password_Confirmation"
                v-model="form.password_Confirmation"
                :label="$t('auth.confirm_password')"
              />

              <div class="flex gap-4 items-center justify-end">
                <RouterLink :to="'/profile'">
                  <div
                    class="flex items-center justify-center cursor-pointer transition-colors rounded-md h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  >
                    {{ $t('cancel') }}
                  </div>
                </RouterLink>
                <Button class="">{{ $t('submit') }}</Button>
              </div>
            </vee-form>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Footer />
</template>
