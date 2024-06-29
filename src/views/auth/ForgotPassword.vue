<template>
  <Loader v-if="loading" />
  <Navbar />

  <BottomNav>
    {{ $t('home.nav.sign_up') }}
  </BottomNav>

  <div class="heroBg">
    <div class="py-16 md:py-24">
      <Container>
        <div v-if="!hideSend && hideOtpForm" class="flex flex-col">
          <div class="text-center">
            <img src="/src/assets/logo.png" class="mx-auto h-24 w-24" />
            <div class="mt-5 space-y-2">
              <h3 class="text-foreground text-2xl font-bold md:text-3xl">
                {{ $t('auth.forgot_password') }}
              </h3>
              <p class="text-muted-foreground w-full md:max-w-xl mx-auto">
                {{ $t('auth.forgot_password_desc') }}
              </p>
            </div>
          </div>
          <div class="mt-4 mx-auto w-full max-w-sm">
            <vee-form
              :validation-schema="schema"
              @submit="onSend"
              class="flex flex-col md:flex-row items-center max-md:space-y-2 gap-4 text-center"
            >
              <BaseInput
                :hide_error="true"
                placeholder="e.g@example.com"
                name="email"
                class="w-full"
                v-model="form.email"
              />

              <Button class="max-md:w-full">
                {{ $t('submit') }}
              </Button>
            </vee-form>
          </div>
        </div>

        <div v-if="hideSend && hideOtpForm" class="space-y-8">
          <div
            class="rounded-lg border p-6 bg-card text-card-foreground shadow-sm mx-auto max-w-md"
            data-v0-t="card"
          >
            <div class="flex flex-col pb-6 space-y-1">
              <h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">
                {{ $t('auth.reset_password') }}
              </h3>
              <p class="text-sm text-muted-foreground">
                {{ $t('auth.reset_password_desc') }}
              </p>
            </div>
            <vee-form
              :validation-schema="schema1"
              @submit="onReset"
              class="space-y-6 w-full md:max-w-xl"
            >
              <PasswordInput
                :placeholder="$t('auth.password_placeholder')"
                name="password"
                v-model="form1.password"
                :label="$t('auth.password')"
              />
              <PasswordInput
                :placeholder="$t('auth.passwordConfirm_placeholder')"
                name="password_Confirmation"
                v-model="form1.password_Confirmation"
                :label="$t('auth.confirm_password')"
              />

              <div class="flex gap-4 items-center justify-end">
                <div
                  @click="backStep"
                  class="flex items-center justify-center cursor-pointer transition-colors rounded-md h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                >
                  {{ $t('back') }}
                </div>
                <Button class="">{{ $t('submit') }}</Button>
              </div>

              <span
                v-if="unValidCode"
                :class="unValidCode ? 'block' : 'hidden'"
                class="text-red-500 mb-2 flex justify-center transition-all ease-in-out duration-300 delay-150"
              >
                {{ $t(`auth.${unValidCode}`) }}
              </span>
            </vee-form>
          </div>
        </div>

        <div v-if="!hideOtpForm && hideSend" class="flex flex-col">
          <div class="text-center">
            <img src="/src/assets/logo.png" class="mx-auto h-24 w-24" />
            <div class="mt-5 space-y-2">
              <h3 class="text-foreground text-2xl font-bold md:text-3xl">
                {{ $t('auth.check_inbox') }}
              </h3>
              <p class="text-muted-foreground w-full md:max-w-xl mx-auto">
                {{ $t('auth.reset_code_sended') }}
              </p>
            </div>
          </div>
          <div class="mt-4 mx-auto max-md:w-full max-w-sm">
            <vee-form
              @submit="onVerify"
              class="flex flex-col md:flex-row items-center max-md:space-y-2 gap-4 text-center"
            >
              <PinInput id="pin-input" v-model="form.otp_number" placeholder="○">
                <PinInputGroup>
                  <PinInputInput v-for="(id, index) in 4" :key="id" :index="index" />
                </PinInputGroup>
              </PinInput>
              <Button class="max-md:w-4/5 w-full">
                {{ $t('submit') }}
              </Button>
            </vee-form>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Container from '@/layouts/Container.vue'
import BaseInput from '@/components/BaseInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { defineRule } from 'vee-validate'
import { PinInput, PinInputGroup, PinInputInput } from '@/components/ui/pin-input'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { email, required, regex, min, confirmed } from '@vee-validate/rules'
import Loader from '@/components/Loader.vue'
import { ForgotPassword, ResetPassword, verify } from '@/services/api'
import { useToast } from '@/components/ui/toast'
import { useRouter } from 'vue-router'
defineRule('email', email)
defineRule('required', required)
defineRule('regex', regex)
defineRule('min', min)
defineRule('confirmed', confirmed)
const strongPassword = '(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,35})'

const { toast } = useToast()
const router = useRouter()

const unValidCode = ref('')
const hideSend = ref(false)
const loading = ref(false)
const hideOtpForm = ref(true)
const form = ref({
  email: '',
  otp_number: []
})
const form1 = ref({
  password: '',
  password_Confirmation: ''
})

const schema1 = {
  password: { required: true, min: 8, regex: strongPassword },
  password_Confirmation: { required: true, confirmed: '@password' }
}

// const handleComplete = (e) => alert(e.join(''))
// const handleShow = () => {
//   hideInput.value = false
//   console.log(hideInput.value)
// }

// const { value } = useField('email', { required: true, email: true })

const backStep = () => {
  loading.value = true
  setTimeout(() => {
    hideOtpForm.value = false
    loading.value = false
  }, 700)
}
const onReset = (values) => {
  loading.value = true
  const otp_number = form.value.otp_number.join('')
  ResetPassword({
    email: form.value.email,
    code: otp_number,
    password: values.password,
    c_password: values.password_Confirmation
  })
    .then((response) => {
      console.log(response)
      if (response.status === true) {
        toast({
          title: 'auth.password_reseted_success',
          success: true,
          duration: 3000
        })
        verify('resend_verify', {
          email: form.value.email
        })
        setTimeout(() => {
          toast({
            title: 'auth.redirect_to_verify',
            success: true,
            duration: 3000
          })
          router.push({ name: 'verify', state: { email: form.value.email } })
        }, 1500)
      }
    })
    .catch((error) => {
      if (error.response.status === 422) {
        unValidCode.value = 'unValidCode'
      }
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
        unValidCode.value = ''
      }, 3500)
    })
  // setTimeout(() => {
  //   router.push({ name: 'login', state: { email: form.value.email } })
  //   loading.value = false
  // }, 1500)
}
const onVerify = () => {
  if (form.value.otp_number.length === 4) {
    loading.value = true
    setTimeout(() => {
      hideOtpForm.value = true
      loading.value = false
    }, 1500)
  }
}

const onSend = (values, { resetForm }) => {
  loading.value = true
  form.value.email = values.email
  ForgotPassword({
    email: values.email
  })
    .then((response) => {
      console.log(response)
      if (response.status === true) {
        toast({
          title: 'auth.code_sended',
          success: true,
          duration: 3000
        })
        setTimeout(() => {
          hideSend.value = true
          hideOtpForm.value = false
        }, 1500)
      }
    })
    .catch((error) => {
      console.log(error, 'ss')
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

const schema = {
  email: { required: true, email: true }
}
</script>
