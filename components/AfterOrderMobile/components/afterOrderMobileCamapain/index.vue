<template>
  <div class="after-order-mobile-campain">
    <div class="section1">اطلاعات تکمیلی کمپین</div>
    <div class="section2">نام کمپین:</div>
    <div class="section3"> <input  placeholder="نام کمپین:"/></div>
    <div class="section4">
      <div class="right"></div>
      <div class="left">درصورتی که ادمین رسانه در تاریخ انتخاب شده در دسترس نبود ، تبلیغ تا 24 ساعت بعد از تاریخ انتخابی منتشر شود.</div>
    </div>
    <div class="button1">ثبت نهایی</div>
    <div class="button2">
      <img src="/images/afterOrder/archive-add.svg" />
      <span>ذخیره در پیش نویس</span>
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
   .after-order-mobile-campain {
    width: 370px  ;
    height: 406px ;
    margin-top: 31px;
    border-radius: 13px ;
    background-color: white;
    padding: 24px ;
    direction: rtl;
    display: flex ;
    flex-direction: column ;
    .section1 {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        justify-content: flex-start;
        font-weight: bold;
        font-size: 22px;
        line-height: 34px;
        text-align: right;
        color: #404040;
    }
    .section2 {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        justify-content: flex-start;
        margin-top: 14px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        text-align: right;
        color: #404040;
        
    }
    .section3 {
      width: 317px ;
      height: 55px ;
      border-radius: 7px ;
      border: .5px solid #404040;
      margin-top: 6px;
      input {
        width: 100% ;
        height: 100%;
        display: flex ;
        flex-direction: row ;
        justify-content: center ;
        align-items: center ;
        padding-right: 15px ;
      }
    }
    .section4 {
      width: 100% ;
      display: flex ;
      flex-direction: row;
      justify-content: center;
      
      margin-top: 17px;
      gap: 6px ;
      .right {
        width: 60px  ;
        height: 23px ;
        border-radius: 5px ;
        border: .5px solid #404040;
        background-color: #e4e4e4;
      }
      .left {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: right;
      color: #404040;}
    }
    .button1 {
      width: 317px ;
      height: 50px;
      background-color: #58A65C ;
      color: white ;
      display: flex ;
      flex-direction: row ;
      justify-content: center ;
      align-items: center;
      border-radius: 7px;
      margin-top: 17px;

    }
    .button2 {
      width: 317px ;
      height: 50px;
      background-color: white ;
      border: 1px solid #5E7DBE;
      color: #5E7DBE;
      display: flex ;
      flex-direction: row ;
      justify-content: center ;
      align-items: center;
      border-radius: 7px;
      margin-top: 14px;
    }

   }
    </style>
  
  