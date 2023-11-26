<template>
    <div>
        <div class="suggestion-title-parent">
            <div class="right">پیشنهاد تبلیغات</div>
            <div class="left">
                <div class="left-button">
                    <img src="images/order/eye-slash.svg" />
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
  <style lang="scss">
  .suggestion-title-parent {
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    align-items: center;
    direction: rtl ;
    width: 100%  ;
    margin-top: 40px;
    height: 60px ;
    margin-bottom: 30px;
    .right {
        font-size: 22px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: right;
        color: #404040;

    }
    .left {
        .left-button {
            background-color: white;
            width: 202px ;
            height: 49px ;
            gap: 16px;
            border-radius: 13px;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            
            img {
                width: 22px ;
                height: 22px;
            }
            span {
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #404040;
            }

        }

    }

  }
  </style>
  
  