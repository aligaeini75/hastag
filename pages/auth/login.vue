<template>
  <div class="tw-min-h-screen tw-bg-slate-100 tw-p-8" dir="rtl">
    <div class="md:tw-max-w-md tw-mx-auto">
      <AuthHeader />
      <OTPLogin v-if="otpLogin" />
      <UsernameLogin v-if="!otpLogin" />
      <div class="mt-6">
        <button @click="otpLogin = !otpLogin"
          class="tw-bg-blue-400/60 tw-text-primary tw-text-sm tw-font-medium tw-text-center tw-w-full py-4 rounded-lg">
          ورود با شماره تلفن
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import AuthHeader from "../../components/Auth/Components/Header/index.vue"
import OTPLogin from "../../components/Auth/Components/Login/OTP/index.vue"
import UsernameLogin from "../../components/Auth/Components/Login/Username/index.vue"

export default defineComponent({
  layout: "emptyLayout",
  components: {
    AuthHeader,
    OTPLogin,
    UsernameLogin,
  },
  data() {
    return {
      otpLogin: false,
    };
  },
});
</script>

<style></style>
