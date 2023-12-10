<template>
    <div class="after-order-info-section-mobile-parent">
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
   <style scoped lang="scss">
   .after-order-info-section-mobile-parent {
        width: 370px ;
        height: 227px ; 
        border-radius: 13px ; 
        direction: rtl;
        display: flex ;
        flex-direction: row;
        .icon-section {
            width: 70px !important; 
            height: 227px ; 
            border-top-right-radius: 13px ;
            border-bottom-right-radius: 13px; 
            background-color : #EFBE41 ; 
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;

        }
        .text-section {
            height: 227px ; 
            width: 370px;
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
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                font-weight: bold;
                text-align: right;
                color: #000000;

            }
            .text-section-description {
                font-size: 14px;
                font-weight: 300;
                line-height: 19px;
                letter-spacing: 0em;
                text-align: right;
            }


        }
   }
    </style>
  
  