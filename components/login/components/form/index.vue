<template>
    <div class="loginForm-w-content d-flex flex-column">
        <inputCom idInput="email" titleInput="ایمیل" typeInput="email" require-input="true" class="w-100" />
        <inputCom idInput="password" titleInput="رمزعبور" typeInput="password" require-input="true" class="w-100 mt-14p" />
        <captcha titleInput="لطفا تیک من ربات نیستم را بزنید" class="w-100 mt-25p" />
        <inputCheckBoxCom idInput="accept-role" titleInput="مرا به خاطر داشته باش." nameInput="accept-role" class="w-100 mt-25p"/>
        <inputButton buttonTitle="ارسال کد تایید" class="w-100 mt-20p" /> 
    </div>
</template>

<script>

    import { defineComponent } from '@nuxtjs/composition-api';
    import inputCom from '../../../Register/components/form/components/input/index.vue';
    import inputCheckBoxCom from '../../../Register/components/form/components/checkbox/index.vue';
    import inputButton from '../../../Register/components/form/components/button/index.vue';
    import captcha from '../../../Register/components/form/components/captcha/index.vue';

    export default defineComponent({
        components: { inputCom, inputCheckBoxCom, inputButton, captcha },
        setup(){
            return { }
        }
    })

</script>

<style lang="scss" scoped>

    .d-flex{display:flex;}

    .gap-12p{gap:12px}

    .flex-column{flex-direction:column;}
    .w-100{width: 100%!important;}
    .mt-10p{margin-top: 10px;}
    .mt-14p{margin-top: 14px;}
    .mt-20p{margin-top: 20px;}
    .mt-25p{margin-top: 25px;}

    .input-item { width: calc(50% - 20px); display: flex; flex-direction: column; }

    // .register-input-container{flex-wrap:wrap;gap:10px;justify-content:space-between;}

</style>