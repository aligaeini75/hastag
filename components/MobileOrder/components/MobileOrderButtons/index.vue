<template>
    <div class="button-section-mobile-parent">
        <div class="row">
            <div class="button-section-parent-select">
                <span> پلتفرم</span>
                <img src="/images/order/arrow-down.svg" />
            </div>
        <!--  -->
            <div class="add-button">
                    <img src="/images/order/add.svg" />
                    <span>افزودن رسانه جدید</span>
            </div>
        </div>
        <!--  -->
        <div class="button-section-parent-input">

            <div class="input"> <input placeholder="جستجو کنین..." /> </div>
            <div class="icon"> <img src="/images/order/search.svg" /> </div>
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
//    .theme--light.v-text-field.v-input--is-disabled .v-input__slot::before {
//         all: unset;
//    }
    .button-section-mobile-parent {
        width: 370px  ;
        height: 150px ;
        align-self: center ;
        border-radius: 13px ;
        background-color: white;
        gap: 8px ;
        margin-top: 16px;
        padding-bottom: 16px;
        display: flex ;
        direction: rtl;
        flex-direction: column ;
        justify-content: center;
        align-items: center ;
        // .v-input__control .v-select__slot {
        //     height: 49px ;
        //     padding-top: 8px;
        //     label {
        //         position: absolute ;
        //         margin-top: 8px;
        //     }
        // }
        .row {
            display: flex;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            gap: 13px;
            .add-button {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            width: 159px  ;
            gap : 8px ;
            height: 48px ;
            font-size: 14px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: right;
            color: white;
            background-color: #5E7DBE;
            border-radius: 13px;

        }
        .button-section-parent-select {
            width: 163px;
            height: 48px;
            text-align: center;
            background-color: #ECECEC ;
            border-radius: 13px ;
            display: flex ;
            flex-direction: row ;
            justify-content: space-between;
            align-items: center;
            direction: rtl;
            padding: 8px;
            span {
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #000000;
                margin-right: 12px;

            }
            img {
                margin-left: 19px;
                width: 16px ;
                height: 16px;
            }
        }
        }
        .button-section-parent-input {
            display: flex ;
            border-radius: 13px ;
            background-color: #ECECEC;
            flex-direction: row ;
            align-items: center;
            width: 336px;
            height: 48px;
            padding-right: 8px;
            .input { 
                
                all: unset ;
                width: 100% !important;
                padding-right: 20px;
            }
            .icon {
                margin-top: 8px;
                margin-left: 20px;
                img {
                    width: 16px ;
                    height: 16px;
                }
            }
        }
    }
    </style>
  
  