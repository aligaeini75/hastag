<template>
    <div class="login-w-parent dir-rtl d-flex dir-rtl flex-column align-items-center">
        <div class="login d-flex dir-rtl flex-column align-items-center">
            <div class="title-box d-flex align-items-center justify-content-between w-100 flex-column">
                <h4 class="title-page font-size-22p color-404 font-weight-500 font-yekanBakh">ورود به پنل کاربری</h4>
                <p class="d-flex m-0"><a href="#" class="color-5e7 font-size-14p font-weight-500 border-none d-flex align-items-center">اگر قبلا ثبت نام کردید کلیک کنید.</a></p>
            </div>
            <loginForm class="mt-25p" />
            <a href="#" class="color-5e7 font-size-14p font-weight-500 text-center mt-25p border-none" v-if="!isMobile()">ورود با شماره تلفن</a>
        </div>
    </div>
</template>

<script>

    import { defineComponent } from '@nuxtjs/composition-api';
    import loginForm from './components/form/index.vue'
    export default defineComponent({
        components: { loginForm },
        setup(){
            const isMobile = () =>  {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
            return { isMobile }
        }
    })

</script>
<style lang="scss" scoped>

    $font-family: 'YekanBakh';

    .color-404{color:#404040!important;}
    .color-5e7{color:#5E7DBE!important;}


    .font-size-22p{font-size:22px;}
    .font-size-16p{font-size:16px;}
    .font-size-14p{font-size:14px;}
    .font-size-12p{font-size:12px;}

    .font-weight-300{font-weight:300}
    .font-weight-400{font-weight:400}
    .font-weight-500{font-weight:500}
    .font-weight-600{font-weight:600}

    .align-items-center{align-items:center}

    .justify-content-between{justify-content:space-between}

    .flex-column{flex-direction:column;}

    .m-0{margin:0!important;}
    .mt-16p{margin-top:16px}
    .mt-25p{margin-top:25px}

    .w-100{width:100%}

    .font-yekanBakh{font-family: $font-family!important;}

    .d-flex{display:flex}
    .border-none{border:none;}
    .dir-rtl{direction:rtl;}

    .login-w-parent{width:100%;border-radius: 10px;border: 0.5px solid #878787;background: #FFF;padding:16px}

    .login{width: 100%;max-width: 220px;padding: 70px 0;}

    .v-application {
        font-family: $font-family, sans-serif !important;
            .title { // To pin point specific classes of some components
            font-family: $font-family, sans-serif !important;
            }
    }

    @media(max-width:768px) {
        .login {
            max-width: 100%; 
            padding: 0;
        }
        .title-box{
            flex-direction: row!important;
        }
        .title-box p a{
            font-size: 12px!important;
        }
    }

</style>