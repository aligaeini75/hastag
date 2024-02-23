<template>
  <div class="tw-min-h-screen tw-bg-slate-100 tw-p-8" dir="rtl">
    <div class="md:tw-max-w-md tw-mx-auto">
      <AuthHeader />
      <form
        class="tw-bg-white tw-rounded-lg tw-border tw-border-zinc-600/20 mt-7 tw-p-5"
        @submit.prevent="register"
      >
        <div class="tw-flex tw-justify-between tw-items-center">
          <span class="tw-text-xl tw-font-bold"> ثبت نام </span>
          <NuxtLink to="/auth/login" class="tw-text-xs tw-font-light">
            اگر قبلا ثبت نام کردید کلیک کنید.
          </NuxtLink>
        </div>
        <div
          class="mt-4 tw-flex tw-bg-zinc-100 tw-border tw-border-zinc-600/20 tw-rounded-lg tw-p-1 tw-text-center"
        >
          <div
            class="tw-bg-white shadow py-2 px-4 font-light text-slate-500 text-base shadow tw-rounded-md tw-grow"
          >
            آگهی دهنده
          </div>
          <!--
          <div class="tw-bg-white shadow py-2 px-4 font-light text-slate-500 text-base tw-rounded-md tw-grow">
            ادمین رسانه
          </div>
          -->
        </div>

        <div class="tw-gap-4 tw-my-6 tw-grid tw-grid-cols-1 md:tw-grid-cols-2">
          <div>
            <label for="name" class="tw-text-sm tw-font-light"> نام </label>
            <input
              type="text"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="نام"
              v-model="form.name"
            />
          </div>
          <div>
            <label for="last_name" class="tw-text-sm tw-font-light">
              نام خانوادگی
            </label>
            <input
              type="text"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="نام خانوادگی"
              v-model="form.last_name"
            />
          </div>
          <div>
            <label for="company_title" class="tw-text-sm tw-font-light">
              نام شرکت
            </label>
            <input
              type="text"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="نام شرکت"
              v-model="form.company_title"
            />
          </div>
          <div>
            <label for="telegram_id" class="tw-text-sm tw-font-light">
              یا شماره تلگرام ID
            </label>
            <input
              type="text"
              v-model="form.telegram_id"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="یا شماره تلگرام ID "
            />
          </div>
          <div>
            <label for="mobile" class="tw-text-sm tw-font-light">
              شماره همراه
            </label>
            <input
              type="text"
              v-model="form.mobile"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="شماره همراه"
            />
          </div>
          <div>
            <label for="name" class="tw-text-sm tw-font-light"> ایمیل </label>
            <input
              type="email"
              v-model="form.email"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="ایمیل"
            />
          </div>
          <div>
            <label for="name" class="tw-text-sm tw-font-light">
              انتخاب رمز عبور (حداقل 9 کاراکتر)
            </label>
            <input
              type="text"
              v-model="form.password"
              class="tw-w-full tw-bg-zinc-100 tw-ring-1 tw-ring-zinc-600/20 tw-rounded-lg tw-p-3"
              placeholder="انتخاب رمز عبور (حداقل 9 کاراکتر)"
            />
          </div>
        </div>
        <div class="mt-8">
          <label
            class="tw-text-right tw-text-neutral-700 tw-text-base tw-font-light"
            >لطفا تیک من ربات نیستم رو بزنید.</label
          >
          <div
            class="tw-h-16 tw-bg-neutral-400/20 tw-w-full tw-rounded-lg"
          ></div>
        </div>
        <div class="mt-4 tw-flex tw-space-x-2 tw-space-x-reverse">
          <input type="checkbox" v-model="form.accept_rule" value="true" />
          <span> قوانین و ظوابط رو خوندم و موافقم </span>
        </div>
        <button
          class="mt-4 tw-bg-primary tw-w-full tw-rounded-lg tw-text-center tw-py-3 tw-text-white text-base font-medium"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import AuthHeader from "../../components/Auth/Components/Header/index.vue";
import AuthService from "../../services/AuthService";

export default defineComponent({
  layout: "emptyLayout",
  components: {
    AuthHeader,
  },

  setup() {
    const form = ref({
      name: "",
      last_name: "",
      company_title: "",
      telegram_id: "",
      mobile: "",
      email: "",
      password: "",
      accept_rule: false,
    });
    const register = async () => {
      const res = await AuthService.register(form.value);
    };

    return {
      form,
      register,
    };
  },
});
</script>

<style></style>
