<template>
    <div class="after-order-mobile-buttons-parent">
        <div class="after-order-mobile-button" v-for="x in items">
        <span>{{ x }}</span>
        <img src="/images/afterOrderMobile/arrow-right.svg" />
    </div>
    </div>
</template>
  
  <script>
  import { defineComponent , ref } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {} , 
    setup() {
        const items = ref([
            "انتخاب تاریخ  برای انتخاب شده ها" , 
            "انتخاب یک بنر برای انتخاب شده ها"
        ])
      return { items }
    },
  })
  </script>
   <style scoped lang="scss">
   .after-order-mobile-buttons-parent {
    display: flex ; 
    flex-direction: column;
    gap: 12px ;
    margin-top: 12px;
    direction: rtl;
    .after-order-mobile-button {
        width: 370px ;
        height: 50px ;
        border-radius: 7px ;
        background-color: white ;
        border: .5px solid #888888;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between;
        padding-left: 20px ;
        padding-right: 20px ;
        padding-top: 12px ;
        padding-bottom: 12px ;
        // 
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        /* identical to box height */
        display: flex;
        align-items: center;
        text-align: right;
        color: #404040;

    }
   }
    </style>
  
  