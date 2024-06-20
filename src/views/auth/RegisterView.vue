<template>
  <Navbar />
  <!-- <BottomNav>Login</BottomNav> -->
  <div class="bg-/10">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="flex min-h-full flex-col justify-center py-10 md:py-16">
          <div class="text-center">
            <img src="/src/assets/logo.png" class="mx-auto h-24 w-24" />
            <div class="mt-5 space-y-2">
              <h3 class="text-foreground text-2xl font-bold md:text-3xl">
                {{ $t("auth.register_title") }}
              </h3>
              <p class="text-muted-foreground">
                {{ $t("auth.have_account") }}
                <RouterLink
                  to="/auth/login"
                  href="javascript:void(0)"
                  class="font-medium text-primary hover:text-primary hover:underline"
                  >{{ $t("home.nav.sign_in") }}</RouterLink
                >
              </p>
            </div>
          </div>
          <div class="mt-10 mx-auto w-full max-w-sm">
            <vee-form :validation-schema="schema" @submit="onSubmit" class="space-y-6">
              <BaseInput name="name" v-model="form.name" :label="$t('auth.name')" />
              <BaseInput
                autocomplete="email"
                name="email"
                v-model="form.email"
                :label="$t('auth.email')"
              />

              <BaseInput
                name="password"
                v-model="form.password"
                :label="$t('auth.password')"
              />
              <BaseInput
                name="password_Confirmation"
                v-model="form.password_Confirmation"
                :label="$t('auth.confirm_password')"
              />

              <Button class="w-full">{{ $t("home.nav.sign_up") }}</Button>
            </vee-form>
          </div>
        </div>

        <div class="hidden lg:block">
          <img
            src="/src/assets/register.svg"
            alt=""
            class="md:h-[400px] lg:h[450px] w-full"
          />
        </div>
      </div>
    </Container>
  </div>

  <Footer />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import BaseInput from "@/components/BaseInput.vue";
import { Button } from "@/components/ui/button";
import Container from "@/layouts/Container.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

import { Form, defineRule, configure } from "vee-validate";
import {
  required,
  regex,
  alpha_spaces,
  email,
  min,
  max,
  confirmed,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("regex", regex);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("alpha_spaces", alpha_spaces);
defineRule("confirmed", confirmed);

const strongPassword = "(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.{8,35})";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_Confirmation: "",
});
const schema = {
  name: { required: true, alpha_spaces: true, min: 3 },
  email: { required: true, email: true },
  password: { required: true, min: 8, regex: strongPassword },
  password_Confirmation: { required: true, confirmed: "@password" },
};

// const schema = {
//   name: "required|min:3|max:50|alpha_spaces",
//   email: "required|email",
//   // password: "required",
//   // password_confirmation: "password_mismatch:@password",
// };

// configure({
//   // Generates an English message locale generator
//   generateMessage: {
//     required: `${$t("auth.required")}`,
//   },
// });

const onSubmit = (values) => {
  console.log(values);
};
</script>
