<template>
    <div class="registerSwitch-w-parent d-flex dir-rtl">
        <div class="item">
            <input type="radio" id="register-switch-Ads" name="register-switch" value="" class="d-none" checked>
            <label for="register-switch-Ads" class="color-404 font-size-16p font-weight-300">آگهی دهنده</label>
        </div>
        <div class="item">
            <input type="radio" id="register-switch-MediaAdmin" name="register-switch" value="" class="d-none">
            <label for="register-switch-MediaAdmin" class="color-404 font-size-16p font-weight-300">ادمین رسانه</label>
        </div>
    </div>
</template>

<script>

    import { defineComponent } from '@nuxtjs/composition-api'
    export default defineComponent({
        setup() {
            return {  }
        }
    })

</script>
<style scope>

    .color-404{color:#404040!important;}
    .color-5e7{color:#5E7DBE!important;}

    .font-size-22p{font-size:22px;}
    .font-size-16p{font-size:16px;}

    .font-weight-300{font-weight:300}
    .font-weight-400{font-weight:400}
    .font-weight-500{font-weight:500}
    .font-weight-600{font-weight:600}


    .registerSwitch-w-parent{border-radius: 7px;border: 0.2px solid #606060;background: #F0F0F0;width:100%;padding:4px;justify-content: space-around;gap:20px;height:40px}

    .registerSwitch-w-parent .item{width:50%;}

    .registerSwitch-w-parent .item label{width:100%;height:100%;display:block;display: flex;align-items: center;justify-content: center;transition:all 0.25s;}

    .registerSwitch-w-parent .item input:checked+label{color:#5E7DBE!important;border-radius: 5px;background: #FFF;box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);}


    .d-none{display:none;}



</style>