<template>
    <div class="d-flex register-input-container">
        <inputCom idInput="name" titleInput="نام" typeIput="text" />
        <inputCom idInput="family" titleInput="نام خانوادگی" typeIput="text" />
        <inputCom idInput="companyName" titleInput="نام شرکت" typeIput="text" />
        <inputCom idInput="telegram" titleInput="ID یا شماره تلگرام" typeIput="text" />
        <inputCom idInput="phoneNumber" titleInput="شماره همراه" typeIput="number" />
        <inputCom idInput="email" titleInput="ایمیل" typeIput="email" />
        <inputCom idInput="password" titleInput="انتخاب رمزعبور" typeIput="text" />
    </div>
</template>
  
  <script>
  import { defineComponent } from '@nuxtjs/composition-api';
  import inputCom from './components/input/index.vue';
  export default defineComponent({
    components: {inputCom},
    setup() {
      return {};
    },
  });
  </script>

  <style>
    .d-flex{display:flex;}

    .gap-12p{gap:12px}

    .flex-column{flex-direction:column;}

    .register-input-container{flex-wrap:wrap;gap:10px;justify-content:space-between;}
  </style>