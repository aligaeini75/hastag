<template>
    <div class="order-content-title-section">
        <div class="order-content-title-section-right">سفارشات تبلیغات</div>
        <div class="order-content-title-section-left">
          <div class="icon-parent" v-for=" item in iconImages ">
            <img :src="item" />
          </div>
            <div class="button">
                <img src="images/order/add.svg" />
                <span>اضافه کردن رسانه جدید</span>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import { ref } from 'vue'
  import { defineComponent} from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {} , 
    setup() {
      const iconImages = ref([
        "images/order/share.svg" , 
        "images/order/archive-add.svg"
      ])
      return { iconImages }
    },
  })
  </script>
  <style lang="scss">
  .order-content-title-section {
    width: 100%  ;
    height: 60px ;
    margin-top: 8px;
    display: flex ;
    flex-direction: row ;
    align-items: center;
    justify-content: space-between ;
    direction: rtl;
    .order-content-title-section-right {
        font-size: 22px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: right;
        color: #404040;

    }
    .order-content-title-section-left {
        display: flex ;
        flex-direction: row ;
        gap : 8px ; 
        
        .icon-parent {
          width: 49px  ;
          height: 49px ;
          display: flex ;
          flex-direction: row ;
          justify-content: center ;
          align-items: center;
          background-color: white;
          border-radius: 13px;
          img {
            width: 24px  ;
            height: 24px ;
          }
        }
        .button {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            width: 200px  ;
            gap : 8px ;
            height: 49px ;
            font-size: 16px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: right;
            color: white;
            background-color: #5E7DBE;
            border-radius: 13px;

        }
    }
  }
</style>
  
  