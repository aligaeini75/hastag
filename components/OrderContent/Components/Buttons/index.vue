<template>
    <div class="button-section-parent">
        <div class="button-section-parent-select">
            <v-select
                disabled
				class="vvlabel"
				  label="بازه زمانی"
				  :items="['پلتفرم']"
		    ></v-select>
        </div>
        <!--  -->
        <div class="button-section-parent-input">

            <div class="input"> <input placeholder="جستجو کنین..." /> </div>
            <div class="icon"> <img src="images/order/search.svg" /> </div>
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
   .theme--light.v-text-field.v-input--is-disabled .v-input__slot::before {
        all: unset;
   }
    .button-section-parent {
        width: 100%  ;
        height: 50px ;
        gap: 8px ;
        margin-top: -10px;
        display: flex ;
        direction: rtl;
        flex-direction: row ;
        justify-content: center;
        align-items: center ;
        .v-input__control .v-select__slot {
            height: 49px ;
            padding-top: 8px;
            label {
                position: absolute ;
                margin-top: 8px;
            }
        }
        .button-section-parent-select {
            width: 220px;
            height: 49px;
            margin-top: -5px;
            text-align: center;
        }
        .button-section-parent-input {
            display: flex ;
            border-radius: 8px ;
            background-color: white;
            flex-direction: row ;
            align-items: center;
            width: 80%;
            height: 49px;
            margin-top: 28px;
            padding-right: 8px;
            .input { 
                
                all: unset ;
                width: 97% !important;
            }
            .icon {
                margin-top: 8px;
                img {
                    width: 16px ;
                    height: 16px;
                }
            }
        }
    }
    </style>
  
  