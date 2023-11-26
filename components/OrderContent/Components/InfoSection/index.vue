<template>
    <div class="info-section-parent">
        <div class="icon-section">
            <img src="/images/order/info.svg" />
        </div>
        <div class="text-section">
            <div class="text-section-title">پس از مرحله‌‌‌‌‌‌‌‌‌‌ پرداخت می‌توانید بنر خود را بارگذاری کنید و تاریخ مدنظرتان را برای اجرای تبلیغات، ثبت کنید.</div>
            <div class="text-section-description">توجه: هرگونه تبلیغی که به هر نحوی مخالف قوانین کشور باشد، تبلیغات سیستم‌های مالی مبهم (سیستم‌های هرمی و زیرمجموعه‌گیری) و هرگونه تبلیغی که برای گروهی از مخاطبان مضر باشد (محتوایی و مادی)، اجرا نمی‌شود و مبلغ پرداختی برگشت داده می‌شود.</div>
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
   <style lang="scss">
   .info-section-parent {
        width: 100% ;
        height: 97.8px ; 
        border-radius: 13px ; 
        direction: rtl;
        display: flex ;
        flex-direction: row;
        .icon-section {
            width: 54.25px ; 
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
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
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
  
  