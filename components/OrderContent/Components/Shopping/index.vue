<template>
    <div class="column">
        <div class="shopping" v-if="shoppingSection">
            <div class="title">
                <img src="/images/shopping-close-icon.svg" @click="setShoppingSection( false )" />
                <span>سبد خرید</span>
                <!--  -->
            </div>
            <div class="shop-item-parent">
                    <div class="shop-item" v-for=" i in 3">
                        <div class="left-si">
                            <div class="parent-red-close">
                                <img src="/images/red-close.svg" />
                            </div>
                            <div style="display: flex ; flex-direction: row ;justify-content: space-between;align-items: center;background-color: #f5f5f5;border-radius: 7px;width: 120px;height: 35px;margin-bottom: 4px;">
					
                                <div style="width: 27px;height: 27px;border-radius: 7px;background-color: white;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <img src="/images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
                                </div>
					            <input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="toFarsiNumber(count)" />
                                <div style="width: 27px;height: 27px;border-radius: 7px;background-color: white;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <img src="/images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
                                </div>
                                
					
				            </div>
                        </div>
                        <div class="right-si">
                            <div class="detail-section-si">
                                <div class="top-si">simpsons   کانال تلگرامی </div>
                                <div class="bottom-si">
                                    
                                    <div class="category-parent-si">
                                        <div class="category-item-si">
                                            <span>تست</span>
                                        </div>
                                        <div class="category-item-si">
                                            <span>صثب</span>
                                        </div>
                                    </div>
                                    <img src="/images/telegram-shopping.svg" />
                                </div>
                            </div>
                            <div class="image-section-si">
                                <img src="/images/content/avatar.svg" />
                            </div>
                        </div>
                        <!--  -->
                        
                        
                    </div>
            </div>
            <div class="shopping-result">
                <div class="right">
                    <div class="button">نهایی کردن تبلیغ</div>
                </div>
                <div class="left">
                    <div class="top">هزینه نهایی:</div>
                    <div class="bottom">560 هزارتومان</div>
                </div>
            </div>
        </div>
</div>

    
    
</template>
  
  <script>
  import { defineComponent, ref ,watch } from '@nuxtjs/composition-api'
  import { shoppingSection , setShoppingSection } from '../../../../composition/content/Header/index'
  export default defineComponent({
    components : {  }, 
    setup() {    
        const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
        }
        const count = ref(2) 

      return { shoppingSection , setShoppingSection , toFarsiNumber , count }
    },
  })
  </script>
  <style lang="scss">
  .shopping {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    transition: all 0.4s;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 16px ;
    position: absolute;
    top: 100px;
    left: 83px;
    z-index: 100;
    width: 500px;
    height: 370px;
    background-color: white;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: flex-start ;
    .title  {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        span {
            font-size: 18px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: right;

        }
    }
   .shop-item-parent {
    display: flex ;
    flex-direction: column ;
    gap: 8px ;
    margin-top: 16px;
    .shop-item {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ; 
        align-items: center;
        width: 470px ;
        height: 64px ;
        border-radius: 10px ;
        padding: 8px;
        background-color: #F0F0F0;
        .right-si {
            width: fit-content;
            display : flex ; 
            flex-direction : row  ; 
            gap : 8px ; 
            justify-content : flex-end ; 
            align-items : center ;
            .image-section-si {
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                img  {
                    width : 37px  ; 
                    height : 37px ; 
                }
            }
            .detail-section-si {
                display : flex ; 
                flex-direction : column  ; 
                gap: 4px;
                .top-si {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: right;

                }
                .bottom-si {
                    display : flex ; 
                    flex-direction : row ; 
                    justify-content : center ; 
                    gap : 8px ; 
                    img {
                        width : 19px ; 
                        height : 19px ; 
                    }
                    .category-parent-si {
                        display: flex ;
                        flex-direction: row ;
                        justify-content: flex-end ;
                        
                        gap: 8px ;
                        .category-item-si {
                            width: 72px ;
                            height: 21px ;
                            border-radius: 25px ;
                            background-color: white;
                            display: flex ;
                            flex-direction: row ;
                            justify-content: center ;
                            align-items: center;
                            span {
                                font-size: 12px;
                                font-weight: 300;
                                line-height: 19px;
                                letter-spacing: 0em;
                                text-align: center;

                            }
                        }
                    }
                }
            }
        }
        .left-si {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            gap: 16px;
            .parent-red-close {
                width: 28px ;
                height: 28px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center ;
                padding: 8px;
                background-color: white;
                border-radius: 7px;
            }

        }
    }
   }
   .shopping-result {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        align-items : center ; 
        justify-content: space-between ;
        margin-top: 24px ;
        margin-bottom : 20px;
        .right {
            .button {
                width: 170px ;
                height: 45px ;
                border-radius: 10px ;
                background-color: #58A65C ;
                margin: 0 auto ;
                font-size: 17px;
                font-weight: 500;
                line-height: 26px;
                letter-spacing: 0em;
                display: flex ;
                flex-direction: row ;
                justify-content: center;
                align-items: center;
                text-align: right;
                color: white;

            }

        }
        .left {
            display: flex;
            flex-direction: column ;
            align-items: flex-end ;
            justify-content: center;
            gap : 1px  ; 
            .top {
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: right;
                direction : rtl

            }
            .bottom {
                font-size: 22px;
                font-weight: 700;
                line-height: 34px;
                letter-spacing: 0em;
                text-align: right;

            }
            
        }
   }
  }
  .calender-parent1 {
    width: 100vw  ;
    height: 100vh ;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
  .bold {
    font-weight: bold;
  }
  .hr {
    width: 100% ;
    height: 2px ;
    background-color: #f5f5f5;
  }
  </style>
  
  