<template>
    <div class="content-parent-desktop">
            <div class="channels-parent">
                <div class="channels">
            <div class="left">
                    <img slot="reference" src="images/content/more.svg" />
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
					
                    <img src="images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
					<input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="toFarsiNumber(count)" />
                    <img src="images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
					
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
                <!-- <div style="padding-top: 4px;margin-top: 16px;width: 40px;height: 23px;display: flex;flex-direction: row;justify-content: flex-end;padding-right: 8px;align-items: center;background-color: black;color: white;border-radius: 10px;font-size: 12px;">
                    <span>32</span>
                </div> -->

            </div>
            
            
                </div>
            </div>
    </div>

    
    
</template>
  
  <script>
  import { defineComponent, ref  } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {  }, 
    setup() {
        const count = ref(2)
        const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
  }     
      return {   count  , toFarsiNumber  }
    },
  })
  </script>
  <style lang="scss">
  .bold {
    font-weight: bold;
  }
  .hr {
    width: 100% ;
    height: 2px ;
    background-color: #f5f5f5;
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
  
  