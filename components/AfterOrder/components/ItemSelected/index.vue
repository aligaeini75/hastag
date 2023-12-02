<template>
    <div class="item-selected-parent">
        <div class="header" :style="{'background-color': headerColor , 'background' : headerColor }">
            <div class="right">
                <img :src=" mode == 'telegram' ? '/images/afterOrder/telegram.svg' : '/images/afterOrder/instagram.svg'" />
                <span>{{ title }} </span>
            </div>
            <div class="left">
                <div class="calender-button">انتخاب تاریخ برای انتخاب شده ها</div>
                <div class="banner-button">انتخاب یک بنر برای انتخاب شده ها</div>
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
                    <div class="calender-select">
                        <img src="/images/afterOrder/calendar-search.svg" />
                        <span>انتخاب تاریخ</span>
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
                    <div class="calender-select">
                        <img src="/images/afterOrder/calendar-search.svg" />
                        <span>انتخاب تاریخ</span>
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
  import { defineComponent} from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {} , 
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
  },
    setup() {
      return { }
    },
  })
  </script>
   <style lang="scss" scoped>
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
        z-index: 2 ;
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
  
  