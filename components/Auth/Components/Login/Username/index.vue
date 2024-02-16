<template>
  <form @submit.prevent="login" class="tw-bg-white tw-rounded-lg tw-border tw-border-zinc-600/20 mt-7 tw-p-5 tw-py-8">
    <div class="tw-flex tw-justify-between tw-items-center">
      <span class="tw-text-xl tw-font-bold">
        ورود به پنل کاربری
      </span>
      <NuxtLink to="/auth/register" class="tw-text-primary tw-text-xs font-weight-medium ">
        اگر ثبت نام نکردید کلیک کنید.
      </NuxtLink>
    </div>
    <div class="tw-space-y-4 my-6">
      <div>
        <label for="email">ایمیل*</label>
        <input type="email" id="email" v-model="email" dir="ltr" required
          class="text-left tw-mt-2 tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
          placeholder="ایمیل">
      </div>
      <div>
        <label for="password">رمز عبور*</label>
        <input type="password" id="password" required v-model="password" dir="ltr"
          class="tw-mt-2 tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
          placeholder="رمز عبور">
      </div>
    </div>
    <div>
      <span class="tw-h-6 text-lg-right tw-text-neutral-700 tw-text-base tw-font-light">
        لطفا تیک من ربات نیستم رو بزنید.
      </span>
      <div class="tw-h-20">

      </div>
    </div>
    <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-2 tw-space-x-reverse">
      <input type="checkbox" id="remember" class="tw-mr-2">
      <label for="remember" class="tw-text-primary tw-text-sm tw-font-medium">
        مرا به خاطر داشته باش.
      </label>
    </div>
    <button type="submit"
      class="tw-mt-4 tw-bg-primary tw-w-full tw-rounded-lg tw-text-center tw-py-3 tw-text-white text-base font-medium">
      <span class="tw-text-white">
        ورود
      </span>
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import AuthService from '../../../../../services/AuthService';
import Token from '../../../../../modules/token'

const email = ref();
const password = ref();

const login = async () => {
  const res = await AuthService.login(
    {
      email: email.value,
      password: password.value,
      recaptcha: "JKSvY/BLYGXcf2IM//ffHTd7T4-/r3oCCH9pH3=tB4ETmJnGp4L-8wXZ4bP?-MGfAR1eiZ?1N-0mZGXgM?tWPhlrPsFwfhMUt=sQsUyiUJRI9O!ExNuOw4l0kVkxEuyWL765o6ykr8Qeo?SzYpgCB6oBB53!9Ox9w5VIJ4Hrei11QFQ5fBV4dEhvgDZ/TTgEQFTFAU=AgVz/YL/TCWHWgBW2TP!JV!n3=MuRJIaWxfGiDoWtSRHKqK8i9of1!yud"
    }
  );

  if (res.data != undefined) {
    const token = data.data.auth_user.token;
    Token.setToken(token);
  }
}


</script>

<style></style>
