<template>
    <div class="calender-parent" style="background-color: transparent;">
        <div class="calender-titles">
            <div class="calender-title-style-2">
                رفتن به تاریخ امروز
            </div>
            <div class="calender-title-style21">
                تقویم
            </div>
            
        </div>
        <date-picker color="#5E7DBE" class="calender" v-model="date" />
    </div>
</template>

<script>
import { defineComponent , ref } from '@nuxtjs/composition-api'
import VuePersianDatetimePicker from '../../../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue'

export default defineComponent({
components : {
    datePicker: VuePersianDatetimePicker
}, 
setup( ) {
    const date = ref('')
  return {
    date
  }
},
})
</script>
<style lang="scss">
.vpd-input-group input {
    border: 2px solid #5E7DBE;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.vpd-container {
    color: grey;
    font-family: YekanBakh-Regular-woff;
}
.vpd-content {
    border-radius: 13px !important;
}
.calender-parent {
    display: flex ;
    flex-direction: column ;
    gap: 8px ;
    width: 90%;
    margin-top: 16px;
    .calender-titles {
        display: flex ;
        flex-direction: row ;
        width: 100%;
        justify-content: space-between ;
        .calender-title-style21 {
            color: #404040 ;
            font-size: 16px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: right;

        }
        .calender-title-style-2{
            font-size: 14px ;
            color: #5E7DBE ;
        }
    }
    .calender {
        margin-top: 20px;
    }
    @media screen and (min-width: 700px) {
        .calender {
            margin-top: 20px;
            margin-right: 24px;
    }
    .calender-titles {
        display: flex ;
        flex-direction: row ;
        width: 100%;
        margin-right: 16px;
        justify-content: space-between ;
        .calender-title-style1 {
            font-size: 16px ;
            color: #404040 ;
            font-weight: bold ;
        }
        .calender-title-style-2{
            font-size: 14px ;
            color: #5E7DBE ;
        }
    }
}
    
}

</style>

