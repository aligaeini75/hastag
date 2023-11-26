<template>
    <div class="column">
        <div class="shopping" v-if="shoppingSection">
            <div class="title">
                <img src="images/shopping-close-icon.svg" @click="setShoppingSection( false )" />
                <span>سبد خرید</span>
                <!--  -->
            </div>
            <div class="shop-item-parent">
                    <div class="shop-item" v-for=" i in 3">
                        <div class="left-si">
                            <div class="parent-red-close">
                                <img src="images/red-close.svg" />
                            </div>
                            <div style="display: flex ; flex-direction: row ;justify-content: space-between;align-items: center;background-color: #f5f5f5;border-radius: 7px;width: 120px;height: 35px;margin-bottom: 4px;">
					
                                <div style="width: 27px;height: 27px;border-radius: 7px;background-color: white;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <img src="../../static/images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
                                </div>
					            <input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="toFarsiNumber(count)" />
                                <div style="width: 27px;height: 27px;border-radius: 7px;background-color: white;display: flex;flex-direction: row;justify-content: center;align-items: center;">
                                    <img src="../../static/images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
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
                                    <img src="images/telegram-shopping.svg" />
                                </div>
                            </div>
                            <div class="image-section-si">
                                <img src="images/content/avatar.svg" />
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
        <v-overlay @click="removeCalenderDatePicker()" :value="calenderPopupStatus">
        </v-overlay>
        <div class="calender-parent1" v-if="calenderPopupStatus">
            <VuePersianDatetimePicker />
        </div>
        <div class="content-parent-desktop">
            <div class="top-titles">
            <div class="left">
                <span class="count">{{ toFarsiNumber(4781) }}</span>
                <span class="rtl">تعداد کل رسانه ها:</span>
                
            </div>
            <div class="right">
                <span>لیست کانال های برنامه نویسی تلگرام</span>
            </div>
            

            </div>
            <div class="buttons">
            <div class="right">
                <div class="item-2">
                    <span>انتخاب همه رسانه ها</span>
                    <img src="images/check.svg" />
                    
                </div>
            </div>
            <div class="right">
                <div class="item-1">
                    <span>قیمت</span>
                    <img src="images/sort.svg" />
                    
                </div>
                <div class="item">کاربر</div>
                <div class="item">بازدید</div>
                
            </div>
            </div>
            <div class="channels-parent">
                <div class="channels">
            <div class="left">
                    
                    <popper trigger="click" :options="{placement: 'bottom'}"  >
                        <div class="popper" >
                          Popper Content
                        </div>
                        <img slot="reference" src="images/content/more.svg" />
                    </popper>
                    <img src="images/content/heart.svg" />
                    <img src="images/content/shopping-cart.svg" />
            </div>
            <div class="right">
                
                <div class="section3">
                    <div class="section3_1">
                        <div class="section3_1_2">
                            <span>نوع تبلیغ:</span>
				<v-select
				style="width: 110px;margin-top: -12px;"
                disabled
				class="vvlabel"
				  label="بازه زمانی"
				  :items="['24 ساعته'  , '12 ساعته']"
				></v-select>
                        </div>
                        <div class="section3_1_2">
                            <span>تعداد تبلیغ:</span>
                            <div style="display: flex ; flex-direction: row ;justify-content: space-between;align-items: center;background-color: #f5f5f5;border-radius: 7px;width: 73px;height: 35px;margin-bottom: 4px;">
					
                    <img src="../../static/images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
					<input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="toFarsiNumber(count)" />
                    <img src="../../static/images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
					
				</div>
                        </div>

                    </div>
                    <div class="section3_2">
                        <span>هزینه نهایی:</span>
                            <span class="bold" style="font-size: 1.2em;"> {{toFarsiNumber(560)}} هزارتومان</span>
                    </div>
                    
                </div>
                <div class="section2-parent">
                    <div class="section2">
                        <div class="section2_1">
                        <div class="section2_1_1">
                            <span style="color:#9E9E9E"> اطلاعات </span>
                            <span style="color:#9E9E9E">کلیدی</span>
                        </div>
                        <div class="section2_1_1">
                            <span> تعداد کاربر: </span>
                            <span class="bold">{{ toFarsiNumber(3000000) }}</span>
                        </div>

                        </div>
                    <div class="section2_2">
                        <div class="section2_1_2">
                            <span>حدود بازدید:</span>
                            <span class="bold">{{toFarsiNumber(40)}}k</span>
                        </div>
                        <div class="section2_1_2">
                            <span>طرح:</span>
                            <span class="bold">تبلیغ ساعتی</span>
                        </div>
                    </div>
                    <div class="section2_3">
                        <span>تقویم روز</span>
                        <img src="images/content/calendar.svg" @click="setCalenderPopupStatus( true )" />
                    </div>
                    </div>
                </div>
                <div class="section1">
                    <div class="section1_1">
                        <div class="content">
                            <div class="titles">simpsons کانال تلگرامی</div>
                            <div class="buttons">
                                <div class="button">کامپیوتر</div>
                                <div class="button">کامپیوتر</div>
                                <div class="button1" style="display: flex;flex-direction: row;justify-content: center;align-items: center;gap: 8px;">
                                    <img src="images/tick-circle.svg"/>
                                    <span style="margin-top: 4px;">239 تبلیغ داده شده</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="images/content/avatar.svg" />
                        </div>
                    </div>
                    <div class="section1_2">
                        <span>این کانال برای طرفدارای سیمسون هاست که برنامه نویسم هستن تازه...</span>
                    </div>
                    <div class="section1_3">
                        <div class="section1_3_right">
                            
                            <div  @showDetail="showDetail" class="detail-button" v-if="show == false" @click="show = true">
                                <img src="images/arrow-down.svg" />
                                <span>مشاهده لیست کانال ها</span>    
                            </div>
                            <div @showDetail="showDetail" class="detail-button2" v-else @click="show = false">
                                <img src="images/add.svg" />
                                <span>بستن لیست</span>    
                            </div>
                            <div>
                                <img src="images/content/arrow.svg" />
                                <span >simsion_programmers</span>
                                <div></div>
                            </div>

                        </div>
                        <div class="section1_3_left">
                            <img src="images/marks/new.svg" />
                            <img src="images/marks/takhfif.svg" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="right-icon">
                <div style="margin-top: 32px;width: 40px;height: 23px;display: flex;flex-direction: row;justify-content: flex-end;padding-right: 8px;align-items: center;background-color: #34aadf;border-radius: 10px">
                    <img src="images/telegram-white.svg" />
                </div>
                <div style="padding-top: 4px;margin-top: 16px;width: 40px;height: 23px;display: flex;flex-direction: row;justify-content: flex-end;padding-right: 8px;align-items: center;background-color: black;color: white;border-radius: 10px;font-size: 12px;">
                    <span>32</span>
                </div>

            </div>
            
            
                </div>
                <!--  -->
                <div class="hr" v-if="show == true"></div>
                <div class="detail-channels-parent" v-if="show == true">
                        <div class="detail-channels" v-for=" i in 5">
            <div class="right">
                
                <div class="section2-parent">
                    <div class="section2">
                    <div class="section2_2">
                        <div class="section2_1_2">
                            <span>حدود بازدید:</span>
                            <span class="bold">40K</span>
                        </div>
                        <div class="section2_1_2">
                            <span>طرح:</span>
                            <span class="bold">تبلیغ ساعتی</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="section1">
                    <div class="section1_1">
                        <div class="content">
                            <div class="titles">simpsons کانال تلگرامی</div>
                            <div class="buttons">
                                <div class="button">کامپیوتر</div>
                                <div class="button">کامپیوتر</div>
                                <div class="button1">239 تبلیغ داده شده</div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="images/content/avatar.svg" />
                        </div>
                    </div>
                    <div class="section1_2">
                        <span>این کانال برای طرفدارای سیمسون هاست که برنامه نویسم هستن تازه...</span>
                    </div>
                    <div class="section1_3">
                        <div class="section1_3_right">
                            <div>
                                <img src="images/content/arrow.svg" />
                                <span >simsion_programmers</span>
                                <div></div>
                            </div>

                        </div>
                        <div class="section1_3_left">
                            <img src="images/marks/new.svg" />
                            <img src="images/marks/takhfif.svg" />
                        </div>
                    </div>
                </div>
                
            </div>
            
                    </div>
                    <div class="summary">
                        <div class="summary-item">
                            <span class="span1">طرح:</span>
                            <span class="span2">ساعتی</span>
                        </div>
                        <div class="summary-item">
                            <span class="span1">تعداد کانال:</span>
                            <span class="span2">7 عدد</span>
                        </div>
                        <div class="summary-item">
                            <span class="span1">حدود بازدید:</span>
                            <span class="span2">3.8K</span>
                        </div>
                        <div class="summary-item">
                            <span class="span1">تعداد کاربر:</span>
                            <span class="span2">14.696</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-parent" style="margin-top: 51.74px;" @click="changeBoxParent()" >
                <div class="box-title">
                    <img style="fill: #363A3F;" :src="!boxParent ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" />
                    <span>راهنمای تبلیغات هدفمند تر در تلگرام و اینستاگرام</span>
                </div>
                <div v-if="boxParent" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
          <div class="line-desktop">
            <div class="line-section"></div>
            <span class="span">سوالات متداول</span>
            <div class="line-section"></div>
          </div> 
          <!--  -->
          <div style="display: flex ; flex-direction: column ; gap: 7.51px;">
            <div class="box-parent" style="margin-top: 57px;" @click="changeBoxParent11()" >
                <div class="box-title">
                    <img style="fill: #363A3F;" :src="!boxParent11 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" />
                    <span>میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟</span>
                </div>
                <div v-if="boxParent11" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
            </div>
           <!--  -->
           <div class="box-parent" @click="changeBoxParent1()">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent1 ? 'images/arrow-up.svg' : 'images/arrow-right.svg'"  />
                <span>چطور می‌توانم سفارشم را پیگیری کنم؟</span>
            </div>
            <div v-if="boxParent1" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
          <!--  -->
          <div class="box-parent" @click="changeBoxParent2()">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent2 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'"  />
                <span>هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟</span>
            </div>
            <div v-if="boxParent2" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
          <!--  -->
          <div class="box-parent" @click="changeBoxParent3()">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent3 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'"  />
                <span>چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟</span>
            </div>
            <div v-if="boxParent3" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
        </div>
          <div class="score-box">
            <div class="left">
                <div class="left-btn-submit">
                    <span>ثبت امتیاز</span>
                </div>
                <v-rating
                    value="3"
                    background-color="orange lighten-3"
                    color="orange"
                    size="24"
                ></v-rating>
            </div>
            <div class="right">
                <div class="title">
                    <span>لطفا برای ارتقا کیفیت امتیاز خودتونو ثبت کنید</span>
                </div>
                <div class="bottom-section">
                    <div class="bottom-section-part2">
                        <div class="title2"> {{ toFarsiNumber(4289) }}</div>
                        <div class="title1"> امتیاز گرفتیم تا الان </div>
                        
                        
                        
                    </div>
                    <div class="bottom-section-part1">
                        <span class="title3"> {{toFarsiNumber(4.5)}} میانگین </span>
                        <v-rating
                            background-color="grey lighten-2"
                            color="warning"
                            hover
                            length="5"
                            size="24"
                            value="3"
                        ></v-rating>
                       
                    </div>
                    
                </div>              
            </div>

          </div>
        </div>
</div>

    
    
</template>
  
  <script>
  import { defineComponent, ref ,watch } from '@nuxtjs/composition-api'
  import VuePersianDatetimePicker from '../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue'
  import { calenderPopupStatus , setCalenderPopupStatus } from '../../composition/content/calender/index.js'
  import { shoppingSection , setShoppingSection } from '../../composition/content/Header/index'
import { VCol } from 'vuetify/lib';
import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';
  export default defineComponent({
    components : { VCol , VuePersianDatetimePicker , 'popper': Popper }, 
    setup() {
        const showDetailParameters = ref([])
        const show = ref( false )
        const boxTitle = ref( false )
        const boxParent1 = ref( false )
        const boxParent = ref( false )
        const boxParent11 = ref( false )
        const boxParent2 = ref( false )
        const boxParent3 = ref ( false)
        const DatePickerStatus = ref( false )
        const count = ref(2)
        const changeBoxTitle = () => {
            boxTitle.value = !boxTitle.value 
        }
        const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
  }     
        const changeBoxParent1 = () => {
            boxParent1.value = !boxParent1.value
        }
        const changeBoxParent = () => {
            boxParent.value = !boxParent.value
        }
        const changeBoxParent2 = () => {
            boxParent2.value = !boxParent2.value 
        }
        const changeBoxParent3 = () => {
            boxParent3.value = !boxParent3.value
        }
        const changeBoxParent11 = () => {
            boxParent11.value = !boxParent11.value
        }
        const showDetail = ( value ) => {
            showDetailParameters.value.push( value )
        }
        const hideDetail = ( value ) => {
            showDetailParameters.value = showDetailParameters.value.filter( x => x != value )
        }
        const removeCalenderDatePicker = () => {
            setCalenderPopupStatus( false )
        }
      return {  setShoppingSection , shoppingSection , count , boxParent ,changeBoxParent,changeBoxParent11, boxParent11 , removeCalenderDatePicker , calenderPopupStatus , setCalenderPopupStatus , DatePickerStatus , toFarsiNumber , boxParent1 , boxParent2 , boxParent3 ,   changeBoxParent1 , changeBoxParent2 , changeBoxParent3 ,showDetail , hideDetail , showDetailParameters , show , changeBoxTitle , boxTitle }
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
  .column {
    width: 100%;
    display: flex ;
    flex-direction: column ;
    gap: 32px;
  }
  .content-parent-desktop {
    display: flex ;
    flex-direction: column ;
    width: 100% ;
    height: fit-content ;
    .score-box {
        width: 100%;
        display: flex ;
        flex-direction: row ;
        height: 95px ;
        align-items: center;
        border-radius: 13px;
        background-color: white;
        align-items: center; 
        justify-content: space-between;
        padding: 16px;
        margin-top: 72.14px;
        .left {
            display: flex ;
            flex-direction: row ;
            justify-content: center;
            align-items: center ;
            gap: 8px;
            .left-btn-submit {
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                width: 75.23px;
                height: 31.04px;
                top: 3073.6px;
                left: 452.16px;
                border-radius: 7px;
                background-color: #E3A507;
                color: #404040;
                span {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    letter-spacing: 0em;
                    text-align: right;

                }

            }
        }
        .right {
            display: flex ;
            flex-direction: column  ;
            align-items: center;
            .title {
                width: 100% ;
                display: flex ;
                flex-direction: row ;
                justify-content: right;
                span  {
                    text-align: right ;
                    color: #404040;
                    font-size: 18px;
                    font-weight: 700;
                }
            }
            .bottom-section {
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                gap: 24px;
                .bottom-section-part1 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                    gap: 8px ;
                    .title3 {
                        font-family: YekanBakh;
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 15px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #606060;

                    }
                }
                .bottom-section-part2 {
                    display: flex ;
                    flex-direction:  row ;
                    justify-content: center ;
                    align-items: center;
                    direction: rtl ;
                    gap: 8px ;
                    .title1 {
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #606060;
                    }
                    .title2 {
                        font-size: 18px;
                        font-weight: 700;
                        line-height: 28px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #E3A507;
                    }
                }
            }

        }
    }
    .box-parent {
        margin-top: 1px;
        height: fit-content ;
        background-color: white ;
        display: flex ;
        flex-direction: column ;
        border-radius: 13px;
    }
    .box-title {
        display: flex ;
        padding: 16px;
        flex-direction: row ;
        align-items: center;
        justify-content: space-between ;
        height: 54px ;
        width: 100%;
        background-color: white ;
        border-radius: 13px;
        span {
            color: #404040;
            font-size: 18px;
            font-weight: 700;
        }
    }
    .box-title-detail {
        display: flex ;
        flex-direction: row ;
        justify-content: right ;
        padding: 16px ;
        width: 100%;
        height: fit-content;
        background-color: white;
        border-radius: 13px;
        .content {
            inline-size: 1000px;
            float: right;
            text-align: right;
        }
    }
    .line-desktop {
        display: flex ; 
        flex-direction: row;
        justify-content: space-around ;
        align-items: center ;
        margin-top: 72px;
        .line-section {
            width: 40% ;
            height: 1px;
            background-color: #CFCFCF ;
            border-radius: 50%;
        }
        .span {
            color: #404040;
            font-size: 18px;
            font-weight: 900;
        }
    }
    .top-titles {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between;
        .right {
            font-weight: bold ;
            font-size: 1.2em ;
            color: #404040 ;
            
        }
        .left {
            display: flex ;
            flex-direction: row ;
            gap: 8px;
            .count {
                font-weight: bold ;
                font-size: 1.1em;

            }
            .rtl {
                direction: rtl;
            }
        }
    }
    .buttons {
        display: flex ;
        flex-direction: row ;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        margin-bottom: 12px;
        .right {
            display: flex ;
            flex-direction: row ;
            gap: 8px;
            .item {
                width: 80px  ;
                height: 49px ;
                border-radius: 13px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                background-color: white;
                gap: 4px;
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
                color: #000000;

            }
            .item-1 {
                width: 95px  ;
                height: 49px ;
                border-radius: 13px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                gap: 4px;
                color: #EDC764;
                border: 1px solid #EDC764;
                background-color: white;
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;

                img {
                    fill: #EDC764 ;
                }
            }
            .item-2 {
                width: 179px  ;
                height: 49px ;
                border-radius: 13px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                gap: 4px;
                color: #EDC764;
                background-color: white;
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;

                img {
                    fill: #EDC764 ;
                }
                span {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: right;
                    color: #5E7DBE;

                }
            }
        }
        .left {

        }
    }
    .channels-parent {
        display: flex ;
        flex-direction: column ;
        background-color: transparent;
        align-items: center;
        .channels {
        width: calc( 100% + 24px) ;
        height: 200px ;
        display: flex ;
        margin-left: 24px;
        flex-direction: row ;
        .right-icon {
            display: flex ;
            padding-right: 8px;
            z-index: 1;
            flex-direction: column ;
            width: 32px;
            align-items : center;
            justify-content: flex-start;
            margin-left: -8px;
            border-radius: 8px;
        }
        .right {
            display: flex ;
            flex-direction: row ;
            flex-grow: 5;
            background-color: white;
            border-radius: 8px;
            z-index: 2;
            .section1 {
                display: flex ;
                flex-direction: column ;
                flex-grow: 1;
                gap: 4px ;
                padding-top: 15px;
                padding-bottom: 18.79px;
                .section1_1 {
                    display: flex ;
                    flex-direction: row ;
                    .content {
                        display: flex ;
                        flex-direction: column; 
                        justify-content: center;
                        gap: 0px;
                        flex-grow: 4;
                        .titles {
                            font-weight: bold ;
                            font-size: 16px;
                            display: flex ;
                            margin-top: 8px;
                            flex-direction: row ;
                            justify-content: flex-end;
                        }
                        .buttons {
                            display: flex ;
                            flex-direction: row ;
                            align-items: flex-start;
                            margin-top: 4px;
                            justify-content: flex-end;
                            gap: 4px;
                            .button {
                                width: 70px ;
                                height: 30px ;
                                border-radius: 8px ;
                                font-size: 12px;
                                background-color: #f5f5f5;
                                display: flex;
                                flex-direction: row ;
                                justify-content: center; 
                                align-items: center;
                                color: black;
                            }
                            .button1 {
                                width: fit-content ;
                                padding-left: 4px;
                                padding-right: 4px;
                                height: 30px ;
                                font-size: 12px;
                                border-radius: 8px ;
                                background-color: white;
                                display: flex;
                                flex-direction: row ;
                                direction: rtl;
                                justify-content: center; 
                                align-items: center;
                                border: 1px solid #e7e7e7;
                                color: black;
                            }
                        }

                    }
                    .image {
                        display: flex ;
                        flex-direction: row ;
                        justify-content: center ;
                        align-items: center;
                         flex-grow: 1;
                         padding-top: 4px;
                         img {
                            width:  47px;
                            height: 47px;
                         }

                    }

                }
                .section1_2 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: flex-start;
                    padding-right: 20px;
                    padding-top: 8px;
                    direction: rtl;

                }
                .section1_3 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between;
                    .section1_3_right {
                        display: flex ;
                        flex-direction: row ;
                        gap: 8px ;
                        color: #5E7DBE;
                        align-items: center;
                        .detail-button {
                            width: fit-content ;
                            height: 25px ;
                            background-color: #34AADF ;
                            color: white;
                            border-radius: 7px;
                            display: flex ;
                            flex-direction: row ;
                            align-items: center;
                            gap: 8px;
                            padding: 8px;
                            justify-content: space-around ;
                            span {
                            font-size: 10px;
                        }
                        
                        }
                        .detail-button2 {
                            width: fit-content ;
                            height: 25px ;
                            background-color: #D85240 ;
                            color: white;
                            border-radius: 7px;
                            gap: 8px;
                            padding: 8px;
                            display: flex ;
                            flex-direction: row ;
                            align-items: center;
                            justify-content: space-around ;
                            span {
                            font-size: 10px;
                        }
                        
                        }
                        
                        img {
                            width: 15px ;
                            height: 15px;
                        }
                        span {
                            font-size: 16px;
                            font-weight: bold;
                            padding-top: 2px;
                        }

                    }
                    .section1_3_left {
                        display: flex ;
                        flex-direction: row ;
                        gap: 4px ;
                        padding-right: 12px;
                        img {
                            width:  45px;
                            height: 45px;
                        }
                        

                    }

                }
            }
            .section2-parent {
                display: flex ;
                flex-direction: row ;
                flex-grow: 20 ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                padding-top: 16px;
                padding-bottom: 24.32px;
                .section2 {
                    width: 90% ;
                    height: 90%;
                    background-color: #f5f5f5 ;
                    border-radius: 13px;
                    display: flex ;
                    flex-direction: row;
                    padding: 8px;
                    direction: rtl;
                    .section2_1 {
                        display: flex ;
                        flex-direction: column ;
                        flex-grow: 1 ;
                        justify-content: space-around;
                        .section2_1_1 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 14px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 16px;
                            }
                        }
                        }
                    .section2_2 {
                        display: flex ;
                        flex-direction: column ;
                        flex-grow: 1 ;
                        justify-content: space-around;
                        .section2_1_2 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 14px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 16px;
                            }
                        }
                    }
                    .section2_3 {
                        box-shadow: 0px 4px 8px 0px #5E7DBE40;
                        border: 0.53px solid #5E7DBE ;
                        background-color: white;
                        border-radius: 8px;
                        display: flex ;
                        width: 70.96px;
                        height: 96.68px;
                        align-self: center;
                        flex-direction: column ;
                        align-items: center;
                        justify-content: space-around;
                        gap: -10px;
                        // flex-grow: 1 ;
                        // gap: 4px;
                        padding: 4px;
                        // justify-content: center ;
                        // align-items: center;
                        img {
                            width: 46px ;
                            height: 46px;
                        }
                        span {
                            font-size: 14px;
                            font-weight: 300;
                            line-height: 22px;
                            letter-spacing: 0em;
                            text-align: right;

                        }
                    }
                }
            }
            .section3 {
                direction: rtl;
                display: flex ;
                flex-direction: column ;
                align-items: center;
                padding-top: 10px;
                padding-bottom: 24.32px;
                flex-grow: 3 ;
                .section3_1 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between ;
                    width: 100%;
                    padding: 16px;
                    .section3_1_2 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 14px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 16px;
                            }
                        }
                }
                .section3_2 {
                            margin-top: -30px;
                            width: 100%;
                            display: flex ;
                            flex-direction: column ;
                            align-items: flex-start;
                            padding: 16px;
                            font-size: 14px;
                            color: #404040;
                            gap: 8px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 24px;
                            }
                        }
            }
        }
        .left {
            display: flex ;
            padding-right: 8px;
            z-index: 1;
            flex-direction: column ;
            flex-grow: .7 ;
            align-items : center;
            justify-content: space-around;
            background-color: #34AADF;
            margin-right: -10px;
            border-radius: 8px;
        }
    }
    .detail-channels-parent {
        display: flex ;
        flex-direction: row ;
        width: 100%;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: center;
        padding-bottom: 16px;
        background-color: white;
        padding-top: 16px ;
        padding-left: 8px ;
        padding-right: 8px ;
        padding-bottom: 8px;
        margin-top: -10px;
        .detail-channels {
        width: 515px ;
        height: 190px ;
        display: flex ;
        .right {
            display: flex ;
            flex-direction: row ;
            flex-grow: 5;
            align-items: center;
            background-color: #f5f5f5;
            border-radius: 8px;
            z-index: 1000;
            padding: 8px;
            .section1 {
                display: flex ;
                flex-direction: column ;
                flex-grow: 1;
                gap: 4px ;
                .section1_1 {
                    display: flex ;
                    flex-direction: row ;
                    align-items: center;
                    margin-top: 8px;
                    .content {
                        display: flex ;
                        flex-direction: column; 
                        justify-content: center;
                        gap: 0px;
                        flex-grow: 4;
                        .titles {
                            font-weight: 700 ;
                            font-size: 16px;
                            display: flex ;
                            margin-top: 8px;
                            flex-direction: row ;
                            justify-content: flex-end;
                        }
                        .buttons {
                            display: flex ;
                            flex-direction: row ;
                            align-items: flex-start;
                            margin-top: 4px;
                            justify-content: flex-end;
                            gap: 4px;
                            .button {
                                width: 70px ;
                                height: 30px ;
                                border-radius: 8px ;
                                font-size: 12px;
                                background-color: #f5f5f5;
                                display: flex;
                                flex-direction: row ;
                                justify-content: center; 
                                align-items: center;
                                color: black;
                            }
                            .button1 {
                                width: fit-content ;
                                padding-left: 4px;
                                padding-right: 4px;
                                height: 30px ;
                                font-size: 12px;
                                border-radius: 8px ;
                                background-color: white;
                                display: flex;
                                flex-direction: row ;
                                direction: rtl;
                                justify-content: center; 
                                align-items: center;
                                border: 1px solid #e7e7e7;
                                color: black;
                            }
                        }

                    }
                    .image {
                        display: flex ;
                        flex-direction: row ;
                        justify-content: center ;
                        align-items: center;
                         flex-grow: 1;
                         padding-top: 4px;
                         img {
                            width:  47px;
                            height: 47px;
                         }

                    }

                }
                .section1_2 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: flex-start;
                    padding-right: 20px;
                    padding-top: 8px;
                    direction: rtl;
                    span {
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: right;

                    }

                }
                .section1_3 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between;
                    margin-bottom: 8px;
                    .section1_3_right {
                        display: flex ;
                        flex-direction: row ;
                        gap: 8px ;
                        color: #5E7DBE;
                        align-items: center;
                        font-size: 16px;
                        font-weight: 500;
                        .detail-button {
                            width: fit-content ;
                            height: 25px ;
                            background-color: #34AADF ;
                            color: white;
                            border-radius: 7px;
                            display: flex ;
                            flex-direction: row ;
                            align-items: center;
                            gap: 8px;
                            padding: 8px;
                            justify-content: space-around ;
                            span {
                            font-size: 10px;
                        }
                        
                        }
                        .detail-button2 {
                            width: fit-content ;
                            height: 25px ;
                            background-color: #D85240 ;
                            color: white;
                            border-radius: 7px;
                            gap: 8px;
                            padding: 8px;
                            display: flex ;
                            flex-direction: row ;
                            align-items: center;
                            justify-content: space-around ;
                            span {
                            font-size: 10px;
                        }
                        
                        }
                        
                        img {
                            width: 15px ;
                            height: 15px;
                        }
                        span {
                            font-size: 16px;
                            font-weight: bold;
                            padding-top: 2px;
                        }

                    }
                    .section1_3_left {
                        display: flex ;
                        flex-direction: row ;
                        gap: 4px ;
                        padding-right: 8px;
                        img {
                            width:  45px ;
                            height: 45px;
                        }
                        

                    }

                }
            }
            .section2-parent {
                display: flex ;
                flex-direction: row ;
                width: 123px ;
                height: 141px;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                .section2 {
                    width: 90% ;
                    height: 90%;
                    background-color: white ;
                    border-radius: 8px;
                    display: flex ;
                    flex-direction: row;
                    padding: 8px;
                    direction: rtl;
                    .section2_1 {
                        display: flex ;
                        flex-direction: column ;
                        flex-grow: 1 ;
                        justify-content: space-around;
                        .section2_1_1 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 14px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 16px;
                            }
                        }
                        }
                    .section2_2 {
                        display: flex ;
                        flex-direction: column ;
                        flex-grow: 1 ;
                        justify-content: space-around;
                        .section2_1_2 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 13px;
                            font-weight: 300;
                            text-align: center;
                            .bold {
                                color: #404040;
                                font-size: 15px;
                                font-weight: 700;
                            }
                        }
                    }
                    .section2_3 {
                        box-shadow: 0px 4px 8px 0px #5E7DBE40;
                        border: 0.53px solid #5E7DBE ;
                        background-color: white;
                        border-radius: 8px;
                        display: flex ;
                        width: 50px;
                        height: 110px;
                        align-self: center;
                        flex-direction: column ;
                        justify-content: space-around;
                        flex-grow: 1 ;
                        gap: 4px;
                        padding: 8px;
                        justify-content: center ;
                        align-items: center;
                        img {
                            width: 46px ;
                            height: 46px;
                        }
                    }
                }
            }
            .section3 {
                direction: rtl;
                display: flex ;
                flex-direction: column ;
                justify-content: space-around;
                align-items: center;
                flex-grow: 3 ;
                .section3_1 {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between ;
                    width: 100%;
                    padding: 16px;
                    .section3_1_2 {
                            display: flex ;
                            flex-direction: column ;
                            gap: 8px;
                            color: #404040;
                            font-size: 14px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 16px;
                            }
                        }
                }
                .section3_2 {
                            width: 100%;
                            display: flex ;
                            flex-direction: column ;
                            align-items: flex-start;
                            padding: 16px;
                            font-size: 14px;
                            color: #404040;
                            gap: 8px;
                            .bold {
                                font-weight: bold ;
                                color: #404040;
                                font-size: 24px;
                            }
                        }
            }
        }
        .left {
            display: flex ;
            padding-right: 4px;
            z-index: 1;
            flex-direction: column ;
            flex-grow: .7 ;
            align-items : center;
            justify-content: space-around;
            background-color: #34AADF;
            margin-right: -10px;
            border-radius: 8px;
        }
        }
        .summary {
            width: 515px ;
             height: 200px ;
             display: flex ;
             flex-direction: row ;
             justify-content: center;
             align-items: center;
             gap: 32px;
             direction: rtl;
             .summary-item {
                display: flex ;
                flex-direction: column ;
                gap: 8px;
                .span1 {
                    font-size: 16px;
                    color: #404040;
                    text-align: center ;
                }
                .span2 {
                    color: #404040; 
                    font-size: 22px ;
                    font-weight: bold;
                    text-align: center;
                }
             }
        }
    }
    }
  }
  </style>
  
  