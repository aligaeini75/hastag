<template>
  <div class="tw-min-h-screen tw-bg-slate-100 tw-p-8" dir="rtl">
    <div class="md:tw-max-w-md tw-mx-auto">
      <AuthHeader />
      <div class="tw-bg-white tw-rounded-lg tw-border tw-border-zinc-600/20 mt-7 tw-p-5">
        <div class="tw-flex tw-justify-between tw-items-center">
          <span class="tw-text-xl tw-font-bold">
            ثبت نام
          </span>
          <NuxtLink to="/auth/login" class="tw-text-xs tw-font-light">
            اگر قبلا ثبت نام کردید کلیک کنید.
          </NuxtLink>
        </div>
        <div class="mt-4 tw-flex tw-bg-zinc-100 tw-border tw-border-zinc-600/20 tw-rounded-lg tw-p-1 tw-text-center">
          <div class="tw-bg-white shadow py-2 px-4 font-light text-slate-500 text-base shadow tw-rounded-md tw-grow">
            آگهی دهنده
          </div>
          <!--
          <div class="tw-bg-white shadow py-2 px-4 font-light text-slate-500 text-base tw-rounded-md tw-grow">
            ادمین رسانه
          </div>
          -->
        </div>
        <div class="tw-space-y-4 my-6">
          <div>
            <input type="text" class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="نام">
          </div>
          <div>
            <input type="text" class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="نام خانوادگی">
          </div>
          <div>
            <input type="text" class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="شماره همراه">
          </div>
          <div>
            <input type="text" class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="یا شماره تلگرام ID ">
          </div>
          <div>
            <input type="text" class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="انتخاب رمز عبور (حداقل 9 کاراکتر)">
          </div>
        </div>
        <div class="mt-8">
          <span class="tw-text-right tw-text-neutral-700 tw-text-base tw-font-light">لطفا تیک من ربات نیستم رو
            بزنید.</span>
          <div class="tw-h-16 tw-bg-neutral-400/20 tw-w-full tw-rounded-lg">
          </div>
        </div>
        <div class="mt-4 tw-flex tw-space-x-2 tw-space-x-reverse">
          <input type="radio" name="" id="">
          <span>
            قوانین و ظوابط رو خوندم و موافقم
          </span>
        </div>
        <button
          class="mt-4 tw-bg-primary tw-w-full tw-rounded-lg tw-text-center tw-py-3 tw-text-white text-base font-medium">
          ارسال کد تایید
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import AuthHeader from "../../components/Auth/Components/Header/index.vue"

export default defineComponent({
  layout: "emptyLayout",
  components: {
    AuthHeader,
  }
});
</script>

<style></style>
