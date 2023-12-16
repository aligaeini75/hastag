<template>
    <div class="item-selected-parent">
        <div class="header" :style="{'background-color': headerColor , 'background' : headerColor }">
            <div class="right">
                <img :src=" mode == 'telegram' ? '/images/afterOrder/telegram.svg' : '/images/afterOrder/instagram.svg'" />
                <span>{{ title }} </span>
            </div>
            <div class="left">
                <div class="calender-button">انتخاب تاریخ برای انتخاب شده ها</div>
                <div class="banner-button" v-if="bannerButtonState == false" @click="bannerButtonState = true">انتخاب یک بنر برای انتخاب شده ها</div>
                <div class="banner-button-selected" v-else @click="bannerButtonState = false">
                    <span style="margin-bottom: 6px;">انتخاب یک بنر برای انتخاب شده ها</span>
                    <div class="banner-button-selected-button" @click="setStatus1( true )">افزودن بنر</div>
                    <div class="banner-button-selected-button" @click="setStatus(true)">استفاده از بنر های قبلی</div>
                </div>
                <div class="all-button">
                    <img src="/images/afterOrder/tick-square.svg" />
                    <span>انتخاب همه</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row-titles">
                <div class="right">عنوان پیج</div>
                <div class="left">
                    <span style="margin-left: 48px;">تاریخ</span>
                    <span style="margin-left: 24px;">نام بنر</span>
                    <span style="margin-left: -20px;">عملیات بنر</span>
                    <span>انتخاب</span>
                </div>
            </div>
            <div class="item-selectedd">
                <div class="intro">
                    <div class="right">
                        <img src="/images/afterOrder/avatar.svg" />
                    </div>
                    <div class="left">
                        <div class="title1">simpsons کانال تلگرامی</div>
                        <div class="id">
                            <img :src=" mode == 'telegram' ? '/images/afterOrder/telegram-blue.svg' : '/images/afterOrder/instagram-blue.svg'" />
                            <span>simsion_programmers</span>
                        </div>
                        <div class="price">200 هزارتومان</div>
                    </div>
                </div>
                <img src="/images/afterOrder/line1.svg" />
                <div class="detail">
                    <div class="item">
                        <div class="right">تعداد کاربر:</div>
                        <div class="left">40 k</div>
                    </div>
                    <div class="item">
                        <div class="right">دسته بندی:</div>
                        <div class="left">برنامه نویسی</div>

                    </div>
                </div>
                <div class="action">
                        <div class="calender-select" v-if="false" @click="showCalender(1)" :id="`test${ids}1`">
                            <img src="/images/afterOrder/calendar-search.svg" />
                            <span>انتخاب تاریخ</span>
                        </div>
                        <div class="calender-selected" v-else>
                            <div class="calender-selected-top">02 آبان 1402</div>
                            <div class="calender-selected-bottom">شروع: 13:00 الی 15:00</div>
                        </div>
                        <div v-if="calenderActive && !date" class="calender-wrap" :style="{'top': `${topDistance}px` , 'right' : `${rightDistance}px` }">
                            <date-picker color="#5E7DBE" class="calender" :autoSubmit="true" @click="test()" :value="date" v-model="date" />
                        </div>
                        <div v-else-if="calenderActive && date && ids == '1'" class="calender-wrap-hour" :style="{'top': `${(topDistance + 20)}px` , 'right' : `${(rightDistance - 140)}px` , 'background-color' : 'white' }">
                            <div class="calender-wrap-hour-title">
                                <div class="calender-wrap-hour-right">انتخاب ساعت شروع تبلیغ</div>
                                <div class="calender-wrap-hour-left"><img src="/images/afterOrder/close2.svg" /></div>
                            </div>
                            <div class="hour-items-parent">
                                <div class="hour-item" v-for=" item in hourItems">
                                    <div class="top-section">{{ item.top }}</div>
                                    <div class="bottom-section">{{ item.bottom }}</div>
                                </div>
                            </div>
                            <div class="hour-section-button" @click="closeActiveBox()">تایید</div>
                        </div>
                    
                    <img src="/images/afterOrder/line2.svg" />
                    <div class="banner-name">-</div>
                    <img src="/images/afterOrder/line2.svg" />
                    <div class="banner-select" v-if="!bannerButtonStateInner"  @click="bannerButtonStateInner = true">
                        <span>انتخاب بنر</span>
                        <img src="/images/afterOrder/arrow-right.svg" />
                    </div>
                    <div class="banner-button-selected-inner" v-else @click="bannerButtonStateInner = false">
                        <div class="ti">
                            <span>انتخاب بنر</span>
                            <img src="/images/afterOrder/arrow-right.svg" />
                        </div>
                        <div class="banner-button-selected-button" @click="setStatus1( true )">افزودن بنر</div>
                        <div class="banner-button-selected-button" @click="setStatus(true)">استفاده از بنر قبلی</div>
                     </div>
                    <div class="check"></div>
                </div>
            </div>
            <div class="line"></div>
            <div class="item-selectedd">
                <div class="intro">
                    <div class="right">
                        <img src="/images/afterOrder/avatar.svg" />
                    </div>
                    <div class="left">
                        <div class="title1">simpsons کانال تلگرامی</div>
                        <div class="id">
                            <img :src=" mode == 'telegram' ? '/images/afterOrder/telegram-blue.svg' : '/images/afterOrder/instagram-blue.svg'" />
                            <span>simsion_programmers</span>
                        </div>
                        <div class="price">200 هزارتومان</div>
                    </div>
                </div>
                <img src="/images/afterOrder/line1.svg" />
                <div class="detail">
                    <div class="item">
                        <div class="right">تعداد کاربر:</div>
                        <div class="left">40 k</div>
                    </div>
                    <div class="item">
                        <div class="right">دسته بندی:</div>
                        <div class="left">برنامه نویسی</div>

                    </div>
                </div>
                <div class="action">
                    <div class="calender-select" @click="showCalender(2)" :id="`test${ids}2`">
                        <img src="/images/afterOrder/calendar-search.svg" />
                        <span>انتخاب تاریخ</span>
                    </div>
                    <div v-if="calenderActive && !date" class="calender-wrap" :style="{'top': `${topDistance}px` , 'right' : `${rightDistance}px` }">
                            <date-picker color="#5E7DBE" class="calender" @click="test()" :autoSubmit="true" :value="date" v-model="date" />
                    </div>
                    <div v-else-if="calenderActive && date && ids == '2'" class="calender-wrap-hour" :style="{'top': `${(topDistance + 20)}px` , 'right' : `${(rightDistance - 140)}px` , 'background-color' : 'white' }">
                        <div class="calender-wrap-hour-title">
                            <div class="calender-wrap-hour-right">انتخاب ساعت شروع تبلیغ</div>
                            <div class="calender-wrap-hour-left"><img src="/images/afterOrder/close2.svg" /></div>
                        </div>
                        <div class="hour-items-parent">
                            <div class="hour-item" v-for=" item in hourItems">
                                <div class="top-section">{{ item.top }}</div>
                                <div class="bottom-section">{{ item.bottom }}</div>
                            </div>
                        </div>
                        <div class="hour-section-button" @click="closeActiveBox()">تایید</div>
                    </div>
                    
                    <img src="/images/afterOrder/line2.svg" />
                    <div class="banner-name">-</div>
                    <img src="/images/afterOrder/line2.svg" />
                    <div class="banner-select">
                        <span>انتخاب بنر</span>
                        <img src="/images/afterOrder/arrow-right.svg" />
                    </div>
                    <div class="check"></div>
                </div>
            </div>
        </div>

    </div>
</template>
  
  <script>
  import { defineComponent , ref , watch } from '@nuxtjs/composition-api'
  import VuePersianDatetimePicker from '../../../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue'
  import { setStatus } from '../../../../composition/content/afterOrderDialog/index'
  import { setStatus1 } from '../../../../composition/content/afterOrderBannerDialog'
  export default defineComponent({
    components : {
        datePicker: VuePersianDatetimePicker
    } , 
    props: {
        headerColor: {
          type: String,
          required: true,
        },
        mode: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        ids: {
          type: String,
          required: true,
        },
  },
    setup(props) {
        const bannerButtonState = ref( false )
        const topDistance = ref( null )
        const rightDistance = ref( null )
        const date = ref( null )
        const calenderActive = ref( false )
        const bannerButtonStateInner = ref( false )
        const hourItems = ref([ { top : '13' , bottom : '16 الی 18' }  , { top : '13' , bottom : '16 الی 18' } , { top : '13' , bottom : '16 الی 18' } , { top : '13' , bottom : '16 الی 18' } , { top : '13' , bottom : '16 الی 18' }])
        const closeActiveBox = () => {
            calenderActive.value = false 
            date.value = null
        }
        const showCalender = ( id ) => {
            calenderActive.value = !calenderActive.value
            console.log( calenderActive.value )
            topDistance.value = null
            rightDistance.value = null
            let top = document.getElementById(`test${props.ids}${id}`).offsetTop
            console.log( "top : " , top )
            topDistance.value = ( top + 30)
            rightDistance.value = (( document.body.clientWidth - document.getElementById(`test${props.ids}${id}`).getBoundingClientRect().right) + 70)
        }
        watch( date , ( value ) => {
            console.log("value : " , value)
        })
        const test = () => {
            console.log("ok")
        }
      return { setStatus1  , setStatus , closeActiveBox , test , bannerButtonState , showCalender , topDistance , rightDistance , date , calenderActive , hourItems , bannerButtonStateInner }
    },
  })
  </script>
   <style lang="scss" scoped>
   .calender-wrap {
    background-color: transparent;
    position: absolute;
    z-index: 1000 !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 13px;
   }
   .calender-wrap-hour {
    background-color: transparent;
    position: absolute;
    z-index: 1000 !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 7px;
    width: 281px ;
    height: 160px;
    padding: 16px;
    display: flex ;
    flex-direction: column ;
    background-color: white;
    .calender-wrap-hour-title {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        align-items: center;
        margin-top: -16px;
        .calender-wrap-hour-right {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            display: flex;
            flex-direction: row ;
            justify-content: center ;
            align-items: flex-start;
            text-align: right;
            color: #404040;

        }
        .calender-wrap-hour-left {
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            padding-top: 16px;
            cursor: pointer;

        }
    }
    .hour-items-parent  {
        width: 263px ;
        height: 53px ;
        background-color: #f5f5f5;
        padding: 4px;
        align-self: center;
        display: flex ;
        flex-direction: row ;
        gap: 5px ;
        border-radius: 10px;
        justify-content: center ;
        align-items: center;
        .hour-item {
            display: flex ;
            flex-direction: column ;
            justify-content: center ;
            align-items: center;
            background-color: white ;
            border-radius: 10px;
            width: 46px  ;
            height: 46px ;
            border: .5px solid #9e9e9e;
            cursor: pointer;
            .top-section {
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                text-align: right;
                color: #404040;
            }
            .bottom-section {
                font-style: normal;
                font-weight: 300;
                font-size: 10px;
                line-height: 15px;
                text-align: right;
                color: #404040;
            }
        }
    }
    .hour-section-button {
        display: flex ;
        flex-direction: row ;
        justify-content: center ;
        align-items: center ;
        width: 263px ;
        height: 32px ;
        background-color: #5E7DBE ;
        color: white;
        border-radius: 8px ;
        align-self: center ;
        margin-top: 11px;
        cursor: pointer;

    }
   }
   .item-selected-parent {
    display: flex ;
    flex-direction: column;
    margin-top: 33px;
    overflow-x: hidden;
    .header {
        width: 1010px ;
        height: 76px;
        padding-bottom: 8px;
        direction: rtl;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        align-items: center;
        border-top-right-radius: 13px ;
        border-top-left-radius: 13px ;
        // background-color: #34AADF;
        padding-right: 20px ;
        padding-left: 14px ;
        .right {
            display: flex ;
            flex-direction: row;
            align-items: center;
            gap: 5px ;
            img {
                width:  16px;
                height: 16px;
            }
            span {
                color: #FFF;
                text-align: right;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

        }
        .left {
            display: flex ;
            flex-direction: row ;
            align-items: center;
            gap: 14px ;
            .calender-button {
                width: 187px ;
                height: 30px ;
                background-color: white;
                color: #404040;
                font-size: 12px;
                font-style: normal;
                font-weight: 300;
                line-height: normal ; 
                display : flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                border-radius: 7px;
                padding: 8px;
            }
            .banner-button {
                width: 193px ;
                height: 30px ;
                background-color: white;
                color: #404040;
                text-align: right;
                font-size: 12px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                border-radius: 7px;
                padding: 8px;
                cursor: pointer;

            }
            .banner-button-selected {
                width: 193px ;
                height: 103px ;
                background-color: #f5f5f5;
                color: #404040;
                text-align: right;
                position: relative;
                top: 36px;
                z-index: 3;
                font-size: 12px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                display: flex ;
                flex-direction: column ;
                justify-content: center ;
                align-items: center;
                border-radius: 7px;
                padding: 8px;
                gap: 3px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                cursor: pointer;
                .banner-button-selected-button {
                    width: 170px ;
                    height: 27px;
                    border: .5px solid #888888;
                    background-color: white ;
                    border-radius: 7px;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                }

            }
            .all-button {
                width: 100px ;
                height: 30px;
                background-color: white;
                display: flex ;
                flex-direction: row ;
                gap: 4px;
                justify-content: center ;
                align-items: center;
                border-radius: 7px;
                padding: 8px;
                img {
                    width: 18px  ;
                    height: 18px ;
                }
                span {
                    color: #404040;
                    text-align: right;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

            }
        }
    }
    .content {
        width: 1010px ;
        height: 257px ;
        border: .1px solid #d9d9d9 ;
        background-color: white;
        border-radius: 13px;
        margin-top: -10px;
        display: flex ;
        flex-direction: column ;
        .row-titles {
            width: 983px ;
            height: 34px ;
            display: flex ;
            direction: rtl;
            flex-direction: row ;
            align-self: center;
            background-color: #f5f5f5;
            border-radius: 10px ;
            padding: 6px;
            padding-left: 10px;
            justify-content: space-between ;
            align-items: center;
            color: #404040;
            text-align: right;
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            margin-top: 14px ;
            .right {
                padding-right: 120px;

            }
            .left {
                display: flex ;
                flex-direction: row ;
                justify-content: flex-end ;
                gap: 70px ;
            }
        }
        .item-selectedd {
            width: 983px ;
            display: flex ;
            flex-direction: row ;
            padding: 8px ;
            padding-top: 16px;
            direction: rtl;
            justify-content: center ;
            .intro {
                display: flex ;
                flex-direction: row ;
                align-items: center;
                gap: 8px;
                margin-left: 20px;
                margin-right: -20px;
                .right {
                    img {
                    width: 52px  ;
                    height: 52px ;
                }
                }
                .left {
                    display: flex ;
                    flex-direction: column ;
                    gap: 3px ;
                    .title1 {
                        color: #404040;
                        text-align: right;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;

                    }
                    .id {
                        display: flex ;
                        flex-direction: row ;
                        direction: ltr;
                        justify-content: flex-start;
                        align-items: center;
                        text-align: right;
                        gap: 4px ;
                        span {
                            color: #5E7DBE;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                        img {
                            width: 12px ;
                            height: 12px;
                            fill: #5E7DBE;
                        }

                    }
                    .price {
                        color: #404040;
                        text-align: right;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 300;
                        line-height: normal;
                    }
                }

            }
            .detail {
                margin-right: 25px;
                margin-left: 65px;
                width: 160px !important;
                display: flex ;
                flex-direction: column ;
                justify-content: center;
                gap: 8px ;
                .item {
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between;
                    gap: 12px ;
                    .right {
                        display: flex ;
                        flex-direction: row ;
                        justify-content: center ;
                        align-items: center;    
                        color: #404040;
                        text-align: right;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 300;
                        line-height: normal;
                    }
                    .left {
                        width: 71px ;
                        height: 19px ;
                        background-color: #f5f5f5;
                        border-radius: 25px;
                        padding: 4px;
                        display: flex ;
                        flex-direction: row ;
                        justify-content: center ;
                        align-items: center;
                        color: #000;
                        text-align: center;
                        font-size: 11px;
                        font-weight: bold;
                        font-style: normal;
                        line-height: normal;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
            .action {
                display: flex ;
                flex-direction: row ;
                justify-content: center;
                align-items: center;
                padding: 12px;
                width: 477.602px;
                height: 58.889px;
                margin-top: 8px;
                gap: 19px;
                border-radius: 10px ;
                background-color: #f5f5f5;
                .calender-select {
                    width: 126px ;
                    height: 34px ;
                    background-color: white;
                    border-radius: 7px;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                    gap: 4px;
                    border: 0.5px solid #9E9E9E;
                    cursor: pointer;
                    span {
                        color: #404040;
                        text-align: right;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                    img {
                        width: 18px  ;
                        height: 18px ;
                    }
                }
                .calender-selected {
                    width: 126px ;
                    height: 34px ;
                    background-color: transparent;
                    display: flex ;
                    flex-direction: column ;
                    justify-content: center ;
                    align-items: center;
                    gap: 4px;
                    .calender-selected-top {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 25px;
                        display: flex;
                        align-items: center;
                        text-align: right;
                        color: #404040;

                    }
                    .calender-selected-bottom {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        line-height: 23px;
                        display: flex;
                        align-items: center;
                        text-align: right;           
                        color: #404040;
                    }
                }
                .banner-name {
                    width: 100px ;
                    height: 34px ;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                }
                .banner-select {
                    width: 126px ;
                    height: 34px ;
                    background-color: white;
                    border-radius: 7px;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: space-between ;
                    align-items: center;
                    gap: 4px;
                    border: 0.5px solid #9E9E9E;
                    padding-right: 7px ;
                    padding-left: 7px;
                    span {
                        color: #404040;
                        text-align: right;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                    img {
                        width: 13px  ;
                        height: 13px ;
                    }
                }
                .banner-button-selected-inner {
                width: 126px ;
                height: 103px ;
                background-color: #f5f5f5;
                color: #404040;
                text-align: right;
                position: relative;
                top: 36px;
                z-index: 3;
                font-size: 12px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                display: flex ;
                flex-direction: column ;
                justify-content: center ;
                align-items: center;
                border-radius: 7px;
                padding: 8px;
                gap: 3px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                cursor: pointer;
                .ti {
                    margin-bottom: 6px;
                    background-color: white;
                    width: 120px;
                    border-radius: 7px;
                    height: 32px;
                    display: flex;
                    flex-direction: row ;
                    align-items: center;
                    justify-content: space-between;
                    padding-right: 8px;
                    padding-left: 8px;
                    border: .5px solid #888888;
                }
                .banner-button-selected-button {
                    width: 110px ;
                    height: 27px;
                    border: .5px solid #888888;
                    background-color: white ;
                    border-radius: 7px;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                }

            }
                .check {
                    width: 21.432px;
                    height: 21.43px;
                    border-radius: 5px;
                    border: 0.5px solid #9E9E9E;
                    background: #FFF;
                }
            }

        }
        .line {
            width: 1010.805px;
            height: .5px;
            background-color: #c2c2c2;
            margin-top: -.5px;
        }

    }
   }
    </style>
  
  