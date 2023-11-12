<template>
    <div class="d-flex register-input-container">
        <inputCom idInput="name" titleInput="نام" typeInput="text" require-input="true" />
        <inputCom idInput="family" titleInput="نام خانوادگی" typeInput="text" require-input="true" />
        <inputCom idInput="companyName" titleInput="نام شرکت" typeInput="text" require-input="true" />
        <inputCom idInput="phoneNumber" titleInput="شماره همراه" typeInput="number" require-input="true" />
        <inputCom idInput="telegram" titleInput="ID یا شماره تلگرام" typeInput="text" />
        <inputCom idInput="email" titleInput="ایمیل" typeInput="email" require-input="true" />
        <inputCom idInput="password" titleInput="انتخاب رمزعبور" typeInput="password" subTitleInput="(حداقل 9 کاراکتر)" require-input="true" />
        <captcha titleInput="لطفا تیک من ربات نیستم را بزنید" />
        <inputCheckBoxCom idInput="accept-role" hTitleInput=" قوانین و ظوابط" titleInput="رو خوندم و موافقم" nameInput="accept-role" class="w-100 mt-10p" />
        <inputButton buttonTitle="ارسال کد تایید" class="w-100 mt-10p" /> 

    </div>
</template>
  
  <script>
  import { defineComponent } from '@nuxtjs/composition-api';
  import inputCom from './components/input/index.vue';
  import inputCheckBoxCom from './components/checkbox/index.vue';
  import inputButton from './components/button/index.vue';
  import captcha from './components/captcha/index.vue';
  export default defineComponent({
    components: {inputCom, inputCheckBoxCom, inputButton, captcha},
    setup() {
      
      return {};
    },
  });
  </script>

  <style scoped>
    .d-flex{display:flex;}

    .gap-12p{gap:12px}

    .flex-column{flex-direction:column;}
    .w-100{width: 100%!important;}
    .mt-10p{margin-top: 10px;}

    .input-item { width: calc(50% - 20px); display: flex; flex-direction: column; }

    .register-input-container{flex-wrap:wrap;gap:10px;justify-content:space-between;}

    @media(max-width:768px) {
    .register-input-container {
      /* flex-wrap: nowrap; */
    }
    .input-item.companyName, .input-item.phoneNumber{
      width: calc(50% - 8px);
    }
    .input-item {
        width: 100%;
    }
}
  </style>