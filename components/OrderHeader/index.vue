<template>
    <div class="header-parent"> 
        <div class="left-section">
            <img class="img-icon" src="/images/person.svg" />
            <img class="img-icon" src="/images/line.svg" style="height: 29px;" />
            <img class="img-icon" src="/images/message.svg" />
            <img class="img-icon" src="/images/line.svg" style="height: 29px;"  />
            <img class="img-icon" src="/images/shopping.svg"  @click="setShoppingSection( !shoppingSection )"/>
            <div class="inventory-parent">
                <div style="color: #404040;margin-left: 8px;">موجودی :</div> 
                <div class="inventory">
                       {{ toFarsiNumber(980)}} هزارتومان   
                        <div class="Inventory-increase">
                            افزایش موجودی
                        </div> 
                </div>
            </div>
            
            
        </div>
        <div class="right-section">
            <div class="icon-box">
                <div class="hashtag">
                    <img src="/images/Hashtag-text.svg" />
                    <img src="/images/Hashtag-icon.svg" style="margin-top: 6px;" />
                    
                </div>
                <img class="img-icon" src="/images/line.svg" />
                <img class="menu-icon" src="/images/menu.svg" />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { computed, defineComponent, ref, useRoute , name } from '@nuxtjs/composition-api'
  import { shoppingSection , setShoppingSection } from '../../composition/content/Header/index'
  export default defineComponent({
    setup() {
       const name = ref("ali")
       const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
  }     
      return { setShoppingSection , shoppingSection , toFarsiNumber , name }
    },
  })
  </script>
  <style lang="scss">
* {
    font-family: YekanBakh;
}
.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
    background: #F5F5F5;
}
.theme--dark.v-icon {
    color: #404040;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    background-color: #F8F8F8 ;
    border-radius: 13px;
    width: 290px;
    height: 40px;
    margin-top: 8px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.v-text-field.v-text-field--solo .v-input__control {
    min-height: 48px;
    padding: 0;
    margin-top: 16px;
}
.v-application--is-ltr .v-text-field .v-label {
    transform-origin: top left;
    color: #404040;
}
  .header-parent {
    display: flex ;
    flex-direction: row ;
    justify-content: center ;
    background-color: white;
    border-bottom: .5px solid #878787;
    height: 100px;
    padding: 16px;
    .left-section {
        display: flex ;
        flex-grow: 1 ;
        flex-direction: row ;
        // background-color: red;
        align-items: center;
        gap: 24px;
        margin-left: 36px;
        img {
            width: 20px ;
            height: 20px;
        }
        .inventory-parent {
            color: #404040;
            display: flex;
            margin-left: 24px !important;
            flex-direction: row ;
            direction: rtl;
            align-items: center;
            gap: 8px;
            margin-left: 16px;
            
            .inventory {
                width: 250px ;
                height: 40px ;
                border: 1px solid #878787;
                border-radius: 13px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
                padding: 8px;
                
                .Inventory-increase {
                    width: 100px ;
                    height: 30px;
                    border-radius: 7px;
                    background-color: #58A65C;
                    color: white;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                    gap: 8px ;
                    font-size: .75em;
                }
        }
        }
        

    }
    .right-section {
        display: flex ;
        flex-direction: row ;
        flex-grow: 1 ;
        justify-content: space-between;
        align-items: center;
        .search-box {
            display: flex ;
            flex-direction: row ;
            align-items: center;
            flex-grow: 2;
        }
        .icon-box {
            display: flex ;
            flex-direction: row ;
            flex-grow: 1 ;
            justify-content: flex-end;
            align-items: center;
            gap: 16px;
            .hashtag {
                display: flex ;
                flex-direction: row;
                gap: 8px;
            }
            .menu-icon {
                width: 30px;
                height: 30px;
            }
        }
    }
  }
  .img-icon {
    width: 20px;
    height: 20px;
  }
  </style>
  
  