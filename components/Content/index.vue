<template>
    <div class="column">
        <v-overlay @click="removeCalenderDatePicker()" :value="calenderPopupStatus">
        </v-overlay>
        <div class="calender-parent1" v-if="calenderPopupStatus">
            <VuePersianDatetimePicker />
        </div>
        <div class="content-parent">
            <div class="titles">
            <div class="left">
                <span class="count">{{ toFarsiNumber(4781) }}</span>
                <span class="rtl">تعداد کل رسانه ها:</span>
                
            </div>
            <div class="right">
                <span>لیست کانال های برنامه نویسی تلگرام</span>
            </div>
            

            </div>
            <div class="buttons">
            <div class="left">
                <img src="images/select-all.svg" />
            </div>
            <div class="right">
                <div class="item">کاربر</div>
                <div class="item">بازدید</div>
                <div class="item-1">
                    <span>قیمت</span>
                    <img src="images/sort.svg" />
                    
                </div>
            </div>
            </div>
            <div class="channels-parent">
                <div class="channels">
            <div class="left">
                <img src="images/content/more.svg" />
                <img src="images/content/heart.svg" />
                <img src="images/content/shopping-cart.svg" />
            </div>
            <div class="right">
                
                <div class="section3">
                    <div class="section3_1">
                        <div class="section3_1_2">
                            <span>نوع تبلیغ:</span>
                            <span class="bold">تبلیغ ساعتی</span>
                        </div>
                        <div class="section3_1_2">
                            <span>تعداد تبلیغ:</span>
                            <span class="bold">تبلیغ ساعتی</span>
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
                            <span class="bold">40K</span>
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
                            <!-- <div>
                                <img src="images/content/arrow.svg" />
                                <span >simsion_programmers</span>
                                <div></div>
                            </div> -->
                            <div  @showDetail="showDetail" class="detail-button" v-if="show == false" @click="show = true">
                                <img src="images/arrow-down.svg" />
                                <span>مشاهده لیست کانال ها</span>    
                            </div>
                            <div @showDetail="showDetail" class="detail-button2" v-else @click="show = false">
                                <img src="images/add.svg" />
                                <span>بستن لیست</span>    
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
          <div class="box-title">
            <img style="fill: #363A3F;" :src="!boxTitle ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" @click="changeBoxTitle()" />
            <span>راهنمای تبلیغات هدفمند تر در تلگرام و اینستاگرام</span>
          </div> 
          <div class="box-title-detail" v-if="boxTitle">
            <div class="content">تست</div>
            
          </div>
          <div class="line">
            <div class="line-section"></div>
            <span class="span">سوالات متداول</span>
            <div class="line-section"></div>
          </div> 
          <!--  -->
          <div class="box-parent" style="margin-top: 16px;">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent1 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" @click="changeBoxParent1()" />
                <span>میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟</span>
            </div>
            <div v-if="boxParent1" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
           <!--  -->
           <div class="box-parent">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent1 ? 'images/arrow-up.svg' : 'images/arrow-right.svg'" @click="changeBoxParent1()" />
                <span>چطور می‌توانم سفارشم را پیگیری کنم؟</span>
            </div>
            <div v-if="boxParent1" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
          <!--  -->
          <div class="box-parent">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent2 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" @click="changeBoxParent2()" />
                <span>هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟</span>
            </div>
            <div v-if="boxParent2" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
          <!--  -->
          <div class="box-parent">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent3 ? 'images/arrow-right.svg' : 'images/arrow-up.svg'" @click="changeBoxParent3()" />
                <span>چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟</span>
            </div>
            <div v-if="boxParent3" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
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
                        <div class="title2"> 4289</div>
                        <div class="title1"> امتیاز گرفتیم تا الان </div>
                        
                        
                        
                    </div>
                    <div class="bottom-section-part1">
                        <span class="title3"> 4.5 میانگین </span>
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
import { VCol } from 'vuetify/lib';
  export default defineComponent({
    components : { VCol , VuePersianDatetimePicker }, 
    setup() {
        const showDetailParameters = ref([])
        const show = ref( false )
        const boxTitle = ref( false )
        const boxParent1 = ref( false )
        const boxParent2 = ref( false )
        const boxParent3 = ref ( false)
        const DatePickerStatus = ref( false )
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
        const changeBoxParent2 = () => {
            boxParent2.value = !boxParent2.value 
        }
        const changeBoxParent3 = () => {
            boxParent3.value = !boxParent3.value
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
      return { removeCalenderDatePicker , calenderPopupStatus , setCalenderPopupStatus , DatePickerStatus , toFarsiNumber , boxParent1 , boxParent2 , boxParent3 ,   changeBoxParent1 , changeBoxParent2 , changeBoxParent3 ,showDetail , hideDetail , showDetailParameters , show , changeBoxTitle , boxTitle }
    },
  })
  </script>
  <style lang="scss">
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
  .content-parent {
    display: flex ;
    flex-direction: column ;
    width: 100% ;
    height: fit-content ;
    gap: 8px ;
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
    .line {
        display: flex ; 
        flex-direction: row;
        justify-content: space-around ;
        align-items: center ;
        margin-top: 16px;
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
    .titles {
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
        justify-content: space-between;
        margin-top: 32px;
        .right {
            display: flex ;
            flex-direction: row ;
            gap: 8px;
            .item {
                width: 80px  ;
                height: 45px ;
                border-radius: 16px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                background-color: white;
                gap: 4px;
            }
            .item-1 {
                width: 80px  ;
                height: 45px ;
                border-radius: 16px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                gap: 4px;
                color: #EDC764;
                border: 1px solid #EDC764;
                img {
                    fill: #EDC764 ;
                }
            }
        }
        .left {

        }
    }
    .channels-parent {
        display: flex ;
        flex-direction: column ;
        background-color: white;
        align-items: center;
        .channels {
        width: 100% ;
        height: 200px ;
        display: flex ;
        flex-direction: row ;
        
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
                    margin-top: 16px;
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
                .section2 {
                    width: 90% ;
                    height: 90%;
                    background-color: #f5f5f5 ;
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
    .detail-channels-parent {
        display: flex ;
        flex-direction: row ;
        width: 1200px;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: center;
        padding-bottom: 16px;
        .detail-channels {
        width: 590px ;
        height: 200px ;
        
        display: flex ;
        margin-top: 8px;
        flex-direction: row ;
        .right {
            display: flex ;
            flex-direction: row ;
            flex-grow: 5;
            background-color: #f5f5f5;
            border-radius: 8px;
            z-index: 1000;
            .section1 {
                display: flex ;
                flex-direction: column ;
                flex-grow: 1;
                gap: 4px ;
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
                    margin-top: 16px;
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
            width: 590px ;
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
  
  