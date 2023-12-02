<template>
    <div class="after-order-info-section-parent">
        <div class="icon-section">
            <img src="/images/order/info.svg" />
        </div>
        <div class="text-section">
            <div class="text-section-title">توجه: در انتخاب تاریخ دقت کنید، ‌بعد از انتخاب تاریخ امکان ویرایش نیست. ساعت تبلیغات برای زمان تقریبی شروع تبلیغات است، ممکن است ادمین‌ها با کمی تاخیر منتشر کنند.</div>
            <div class="text-section-description">جهت رزرو تبلیغات در اولین ساعت آزاد (فردا)، باید 24 ساعت قبل از ساعت مد نظر برای انتشار تبلیغ، اقدام به رزرو نمایید.</div>
        </div>
    </div>
</template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {} , 
    setup() {
      return { }
    },
  })
  </script>
   <style lang="scss" scoped>
   .after-order-info-section-parent {
        width: 1010px ;
        height: 97.8px ; 
        border-radius: 13px ; 
        direction: rtl;
        display: flex ;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        .icon-section {
            width: 80.25px !important; 
            height: 97.8px ; 
            border-top-right-radius: 13px ;
            border-bottom-right-radius: 13px; 
            background-color : #EFBE41 ; 
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;

        }
        .text-section {
            height: 97.8px ; 
            border-top-left-radius: 13px ;
            border-bottom-left-radius: 13px;
            background-color: white;
            text-align: right ;
            display: flex ;
            justify-content: center;
            padding: 16px;
            flex-direction: column ;
            gap: 8px ;
            .text-section-title {
                font-size: 14px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #000000;

            }
            .text-section-description {
                font-size: 12px;
                font-weight: 300;
                line-height: 19px;
                letter-spacing: 0em;
                text-align: right;
                color: #000000;
            }


        }
   }
    </style>
  
  