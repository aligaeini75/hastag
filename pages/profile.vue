<template>
  <div dir="rtl" class="tw-bg-neutral-200 tw-min-h-screen">
    <div
      class="tw-hidden md:tw-flex tw-max-w-4xl tw-space-x-9 tw-space-x-reverse tw-mx-auto tw-items-start tw-my-10"
    >
      <div class="tw-space-y-4 flex-shrink-0">
        <div class="tw-text-neutral-700 tw-text-xl tw-font-bold">
          تنظیمات حساب کاربری
        </div>
        <div class="tw-space-y-2 tw-text-sm tw-font-light tw-text-slate-500">
          <div class="tw-flex tw-space-x-2 tw-items-center tw-text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-w-6 tw-h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span> حساب کاربری </span>
          </div>
          <!--<div class="tw-flex tw-space-x-2 tw-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-w-6 tw-h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <span> تیم من </span>
          </div>-->
          <div class="tw-flex tw-space-x-2 tw-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-w-6 tw-h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <span> تعویض رمز </span>
          </div>
        </div>
      </div>
      <div
        class="tw-rounded-lg overflow-hidden tw-grow tw-bg-white tw-border tw-border-neutral-400/20"
      >
        <div
          class="tw-bg-zinc-100 tw-flex tw-justify-between tw-px-4 tw-py-2 tw-border-b tw-items-center"
        >
          <div>
            <span class="tw-text-neutral-700 tw-text-lg tw-font-bold"
              >اطلاعات حساب</span
            >
            <span class="tw-text-neutral-700 tw-text-base tw-font-normal">
              ثبت نام در تاریخ 16 اردیبهشت 1402
            </span>
          </div>
          <a class="tw-bg-blue-100 tw-rounded-md tw-px-2 tw-py-1">
            <span> ویرایش پروفایل </span>
          </a>
        </div>
        <div class="tw-flex tw-space-x-2 tw-space-x-reverse tw-px-6 tw-py-4">
          <div class="tw-grow tw-grid tw-grid-cols-3 tw-gap-3">
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >نام:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.name }}</span
              >
            </div>
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >نام خانوادگی:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.last_name }}</span
              >
            </div>
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >نام شرکت:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.company_title }}</span
              >
            </div>
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >ایمیل:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.email }}</span
              >
            </div>
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >موبایل:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.mobile }}</span
              >
            </div>
            <div class="tw-flex tw-flex-col tw-space-y-0">
              <span class="tw-text-neutral-700 tw-text-lg tw-font-medium"
                >اکانت تلگرام:</span
              >
              <span
                class="tw-text-neutral-700 tw-text-base tw-font-normal tw-truncate"
                >{{ profile.telegram_id }}</span
              >
            </div>
          </div>
          <div class="tw-w-20 tw-aspect-square">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="img"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:tw-hidden tw-min-h-screen tw-bg-neutral-200 tw-p-6"
      dir="rtl"
    >
      <span class="tw-text-right tw-text-neutral-700 tw-text-xl tw-font-bold">
        تنظیمات حساب کاربری
      </span>
      <div class="tw-bg-white tw-p-4 tw-rounded-md tw-mt-5">
        <div class="tw-flex tw-justify-between tw-items-center">
          <div class="tw-gap-2 tw-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tw-w-5 tw-h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span class="tw-text-base tw-font-bold"> حساب کاربری </span>
          </div>
          <a class="tw-bg-blue-100 tw-rounded-md tw-px-2 tw-py-1">
            <span> ویرایش پروفایل </span>
          </a>
        </div>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-bg-zinc-100 tw-rounded-md tw-p-4 mt-4"
        >
          <div
            class="tw-space-y-2 tw-text-neutral-700 tw-text-sm tw-font-light"
          >
            <div class="tw-space-y-0 tw-flex tw-flex-col">
              <small>نام:</small>
              <b>{{ profile.name }}</b>
            </div>
            <div class="tw-space-y-0 tw-flex tw-flex-col">
              <small>نام خانوادگی:</small>
              <b>{{ profile.last_name }}</b>
            </div>
          </div>
          <div class="tw-size-24">
            <img :src="profile.imageUrl" alt="img" class="w-full h-full" />
          </div>
        </div>
        <div class="mt-4 tw-space-y-2">
          <div class="tw-flex tw-justify-between tw-items-center tw-space-x-2">
            <span class="text-neutral-700 text-base font-medium"> ایمیل: </span>
            <span class="text-neutral-700 text-base font-normal">
              {{ profile.email }}
            </span>
          </div>
          <div class="tw-flex tw-justify-between tw-items-center tw-space-x-2">
            <span class="text-neutral-700 text-base font-medium">موبایل:</span>
            <span class="text-neutral-700 text-base font-normal">
              {{ profile.mobile }}
            </span>
          </div>
          <div class="tw-flex tw-justify-between tw-items-center tw-space-x-2">
            <span class="text-neutral-700 text-base font-medium"
              >نام شرکت:</span
            >
            <span class="text-neutral-700 text-base font-normal">
              {{ profile.company_title }}
            </span>
          </div>
          <div class="tw-flex tw-justify-between tw-items-center tw-space-x-2">
            <span class="text-neutral-700 text-base font-medium"
              >اکانت تلگرام:</span
            >
            <span class="text-neutral-700 text-base font-normal">
              {{ profile.telegram_id }}
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import profileService from "../services/ProfileService";
const profile = ref({});
profileService.profile().then(function (res) {
  profile.value = ref(res.data["data"]["customer"]);
});
</script>

<style></style>
