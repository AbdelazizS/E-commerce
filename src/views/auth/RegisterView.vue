<template>
  <Loader v-if="loading" />
  <Navbar />
  <BottomNav>
    {{ $t('home.nav.sign_up') }}
  </BottomNav>
  <div class="bg-/10">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="flex min-h-full flex-col justify-center py-8 mb-8">
          <div class="text-center">
            <img src="/src/assets/logo.png" class="mx-auto h-24 w-24" />
            <div class="mt-5 space-y-2">
              <h3 class="text-foreground text-2xl font-bold md:text-3xl">
                {{ $t('auth.register_title') }}
              </h3>
              <p class="text-muted-foreground">
                {{ $t('auth.have_account') }}
                <RouterLink
                  to="/auth/login"
                  href="javascript:void(0)"
                  class="font-medium text-primary hover:text-primary hover:underline"
                  >{{ $t('home.nav.sign_in') }}
                </RouterLink>
              </p>
            </div>
          </div>
          <div class="mt-4 mx-auto w-full max-w-sm">
            <vee-form :validation-schema="schema" @submit="onSubmit" class="space-y-5">
              <BaseInput
                :placeholder="$t('auth.name_placeholder')"
                name="name"
                v-model="form.name"
                :label="$t('auth.name')"
              />
              <div class="">
                <BaseInput
                  autocomplete="email"
                  placeholder="e.g@example.com"
                  name="email"
                  v-model="form.email"
                  :label="$t('auth.email')"
                />
                <span
                  v-if="emailUsed"
                  :class="emailUsed ? 'block' : 'hidden'"
                  class="text-red-500 px-1 transition-all duration-300"
                  >{{ $t(`auth.${emailUsed}`) }}</span
                >
              </div>

              <PasswordInput
                :placeholder="$t('auth.password_placeholder')"
                name="password"
                v-model="form.password"
                :label="$t('auth.password')"
              />

              <PasswordInput
                :placeholder="$t('auth.passwordConfirm_placeholder')"
                name="password_Confirmation"
                v-model="form.password"
                :label="$t('auth.confirm_password')"
              />

              <Button class="w-full">{{ $t('home.nav.sign_up') }}</Button>
            </vee-form>
          </div>
        </div>

        <div class="hidden lg:block">
          <img src="/src/assets/register.svg" alt="" class="md:h-[300px] lg:h-[350px] w-full" />
        </div>
      </div>
    </Container>
  </div>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import BaseInput from '@/components/BaseInput.vue'
import Loader from '@/components/Loader.vue'
import { Button } from '@/components/ui/button'
import BottomNav from '@/components/BottomNav.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '@/services/api.js'
import { useToast } from '@/components/ui/toast/use-toast'

import { defineRule } from 'vee-validate'
import { required, regex, alpha_spaces, email, min, max, confirmed } from '@vee-validate/rules'

defineRule('required', required)
defineRule('regex', regex)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha_spaces', alpha_spaces)
defineRule('confirmed', confirmed)

const strongPassword = '(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,35})'

const { toast } = useToast()
const loading = ref(false)
const emailUsed = ref('')
const form = ref({
  name: '',
  email: '',
  terms: null,
  password: '',
  password_Confirmation: ''
})
const schema = {
  name: { required: true, alpha_spaces: true, min: 3 },
  email: { required: true, email: true },
  // terms: { required: true },
  password: { required: true, min: 8, regex: strongPassword },
  password_Confirmation: { required: true, confirmed: '@password' }
}

const router = useRouter()

const onSubmit = async (values) => {
  const formData = new FormData()
  formData.append('client_name', values.name)
  formData.append('email', values.email)
  formData.append('password', values.password)
  formData.append('c_password', values.password_Confirmation)
  formData.append('app_id', 199)
  formData.append('term_of_service', 1)

  loading.value = true

  console.log(values)
  register(formData)
    .then((response) => {
      console.log(response)
      if (response.success === true) {
        toast({
          title: 'auth.register_success',
          success: true,
          duration: 3000
        })

        setTimeout(() => {
          toast({
            title: 'auth.redirect_to_verify',
            success: true,
            duration: 3000
          })
          router.push({ name: 'verify', state: { email: values.email } })
        }, 1500)

        console.log(response)
      } else if (response.status === false) {
        if (response.errNum === 'E011') {
          console.log(response)
          emailUsed.value = 'emailUsed'
        }
      }
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
      setTimeout(() => {
        loading.value = false
      }, 1500)
      setTimeout(() => {
        emailUsed.value = ''
      }, 3500)
      // clearTimeout(timer)
      console.log('eeee')
    })
}
</script>
