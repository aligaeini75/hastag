<template>
  <div class="tw-bg-white tw-rounded-lg tw-border tw-border-zinc-600/20 mt-7 tw-p-5 tw-py-8">
    <div class="tw-flex tw-justify-between tw-items-center">
      <span class="tw-text-xl tw-font-bold">
        ورود به پنل کاربری
      </span>
      <NuxtLink to="/auth/register" class="tw-text-sky-900 tw-text-xs font-weight-medium ">
        اگر ثبت نام نکردید کلیک کنید.
      </NuxtLink>
    </div>
    <div class="tw-space-y-4 my-6">
      <div>
        <label for="email">ایمیل*</label>
        <input type="text" id="email"
          class="tw-mt-2 tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3" placeholder="ایمیل">
      </div>
      <div>
        <label for="password">رمز عبور*</label>
        <input type="password" id="password"
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
      <label for="remember" class="tw-text-sky-900 tw-text-sm tw-font-medium">
        مرا به خاطر داشته باش.
      </label>
    </div>
    <button
      class="tw-mt-4 tw-bg-sky-900 tw-w-full tw-rounded-lg tw-text-center tw-py-3 tw-text-white text-base font-medium">
      ورود
    </button>
  </div>
</template>

<script>

</script>

<style></style>
