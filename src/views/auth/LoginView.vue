<template>
  <Loader v-if="loading" />
  <Navbar />
  <BottomNav>
    {{ $t('home.nav.sign_in') }}
  </BottomNav>
  <div class="bg-/10">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="hidden lg:block">
          <img src="/src/assets/login.svg" alt="" class="md:h-[350px] lg:h[400px] w-full" />
        </div>
        <div class="flex min-h-full flex-col justify-center py-8 mb-8">
          <div class="text-center">
            <img src="/src/assets/logo.png" class="mx-auto h-24 w-24" />
            <div class="mt-5 space-y-2">
              <h3 class="text-foreground text-2xl font-bold md:text-3xl">
                {{ $t('auth.login_title') }}
              </h3>
              <p class="text-muted-foreground">
                {{ $t('auth.havenot_account') }}
                <RouterLink
                  to="/auth/register"
                  href="javascript:void(0)"
                  class="font-medium text-primary hover:text-primary hover:underline"
                  >{{ $t('home.nav.sign_up') }}
                </RouterLink>
              </p>
            </div>
          </div>
          <div class="mt-6 mx-auto w-full max-w-sm">
            <vee-form :validation-schema="schema" @submit="onSubmit" class="space-y-6">
              <BaseInput
                :value="form.email"
                placeholder="e.g@example.com"
                name="email"
                v-model="form.email"
                :label="$t('auth.email')"
              />

              <div class="">
                <PasswordInput
                  :placeholder="$t('auth.password_placeholder')"
                  name="password"
                  v-model="form.password"
                  :label="$t('auth.password')"
                />
                <span
                  v-if="errorMsg"
                  :class="errorMsg ? 'block' : 'hidden'"
                  class="text-center mt-2 text-red-500 px-1 transition-all duration-300"
                  >{{ $t(`auth.${errorMsg}`) }}</span
                >
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <!-- <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                    {{ $t('auth.remember_me') }}
                  </label>
                </div> -->
                <div class="text-sm">
                  <RouterLink
                    to="/auth/forgot-password"
                    class="text-blue-600 hover:underline font-semibold"
                  >
                    {{ $t('auth.forgot_password') }}
                  </RouterLink>
                </div>
              </div>
              <Button class="w-full">{{ $t('home.nav.sign_in') }}</Button>
            </vee-form>
          </div>
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
import PasswordInput from '@/components/PasswordInput.vue'
import BottomNav from '@/components/BottomNav.vue'
import { Button } from '@/components/ui/button'
import Container from '@/layouts/Container.vue'
import Footer from '@/components/Footer.vue'
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { defineRule } from 'vee-validate'
import { required, regex, alpha_spaces, email, min, max, confirmed } from '@vee-validate/rules'
import { useToast } from '@/components/ui/toast/use-toast'

defineRule('required', required)
defineRule('regex', regex)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha_spaces', alpha_spaces)
defineRule('confirmed', confirmed)

const router = useRouter()
onBeforeMount(() => {
  form.value.email = router.options.history.state.email
  console.log(router)
})

const { toast } = useToast()
const authStore = useAuthStore()

const errorMsg = ref('')
const loading = ref(false)
const form = ref({
  email: '',
  password: ''
})
const schema = {
  email: { required: true, email: true },
  password: { required: true, min: 8 }
}

const onSubmit = (values, { resetForm }) => {
  loading.value = true
  authStore
    .login(values)
    .then((response) => {
      console.log(response)
      if (response.status === true) {
        toast({
          title: 'auth.login_success',
          success: true,
          duration: 3000
        })
        setTimeout(() => {
          toast({
            title: 'auth.redirect_to_home',
            success: true,
            duration: 3000
          })
          router.push({ name: 'home' })
        }, 1500)
      }
      if (response.message === 'This email does not exist') {
        errorMsg.value = 'account_not_exist'
      }
      if (response.errNum === 'E001') {
        console.log(response)
        errorMsg.value = 'email_or_password_error'
      } else {
        errorMsg.value = 'verify_account_first'
      }
    })
    .catch((err) => {
      console.log(err)
      if (err.response?.status === 404) {
        errorMsg.value = 'verify_account_first'
      }
      if (!err.response) {
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
      resetForm({
        values: {
          password: '',
          email: values.email
        }
      })
      setTimeout(() => {
        errorMsg.value = ''
      }, 3500)
    })
}
</script>
