<template>
    <div class="register-w-parent d-flex dir-rtl flex-column">
        <div class="title-box d-flex align-items-center justify-content-between w-100">
            <h4 class="title font-size-22p color-404 font-weight-500 font-yekanBakh">ثبت نام</h4>
            <p class="d-flex m-0"><a href="#" class="color-5e7 font-size-16p font-weight-300 border-none d-flex align-items-center">اگر قبلا ثبت نام کردید کلیک کنید.</a></p>
        </div>
        <registerTypeSwitch class="mt-16p" />
        <RegisterForm class="mt-16p" />
    </div>
</template>
<script>
    import { defineComponent } from '@nuxtjs/composition-api'
    import registerTypeSwitch from './components/registerTypeSwitch/index.vue'
    import RegisterForm from './components/form/index.vue'
    export default defineComponent({
        components: {registerTypeSwitch, RegisterForm},
        setup() {
            return {  }
        }
    })
</script>
<style lang="scss" scoped>

    $font-family: 'YekanBakh';

    .color-404{color:#404040!important;}
    .color-5e7{color:#5E7DBE!important;}


    .font-size-22p{font-size:22px;}
    .font-size-16p{font-size:16px;}

    .font-weight-300{font-weight:300}
    .font-weight-400{font-weight:400}
    .font-weight-500{font-weight:500}
    .font-weight-600{font-weight:600}

    .align-items-center{align-items:center}

    .justify-content-between{justify-content:space-between}

    .flex-column{flex-direction:column;}

    .m-0{margin:0!important;}
    .mt-16p{margin-top:16px}

    .w-100{width:100%}

    .font-yekanBakh{font-family: $font-family!important;}

    .d-flex{display:flex}
    .border-none{border:none;}
    .dir-rtl{direction:rtl;}
    .register-w-parent{width:100%;border-radius: 10px;border: 0.5px solid #878787;background: #FFF;padding:16px}


    .v-application {
   font-family: $font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: $font-family, sans-serif !important;
    }
 }
</style>