<template>
    <div class="ss">
        <div class="suggestion-title-mobile-parent">
            <div class="right">پیشنهاد تبلیغات</div>
            <div class="left">
                <div class="left-button">
                    <img src="/images/order/eye-slash.svg" />
                    <span>پنهان کردن پیشنهاد ها</span>
                </div>
            </div>

        </div>
    </div> 
</template>
  
  <script>
  import { defineComponent, ref ,watch } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {  }, 
    setup() {
      return {  }
    },
  })
  </script>
  <style scoped lang="scss">
  .ss {
    display: flex ;
    width: 100% ; 
    flex-direction: row ;
    justify-content: center ;
    .suggestion-title-mobile-parent {
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    align-items: center;
    direction: rtl ;
    width: 370px  ;
    margin-top: 40px;
    height: 60px ;
    .right {
        font-size: 18px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: right;
        color: #404040;

    }
    .left {
        .left-button {
            background-color: white;
            width: 190px ;
            height: 38px ;
            gap: 8px;
            border-radius: 13px;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            
            img {
                width:  19px ;
                height: 19px;
            }
            span {
                font-size: 14px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #404040;
            }

        }

    }

    }
  }
  </style>
  
  