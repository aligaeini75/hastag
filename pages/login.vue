<template>
    <div class="main">
        <div class="content">
            <HeaderWithoutRegister />
            <loginBox class="mt-25p" />
            <buttonLoginByMobile buttonTitle="ورود با شماره تلفن" class="mt-25p" v-if="isMobile()" />
        </div>
    </div>
</template>

<script>

    import { defineComponent } from '@nuxtjs/composition-api';
    import HeaderWithoutRegister from '../components/Header/components/withoutLoginHeader/index.vue'
    import loginBox from '../components/login/index.vue'
    import buttonLoginByMobile from '../components/login/components/form/components/button/index.vue'
    export default defineComponent({
        components: { HeaderWithoutRegister, loginBox, buttonLoginByMobile },
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

<style scoped>

.main{background: #F0F0F0;widt:100%;height:100vh;display:flex;align-items:center;}
.main .content{width:100%;max-width:490px;margin:auto}
.mt-25p{margin-top:25px;}
.px-16p{padding: 0 16px;}
@media(max-width:768px) {
    .content {
        padding: 16px;
    }
}
</style>