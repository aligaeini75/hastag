<template>
    
    <v-dialog width="413" v-model="test">
        <template style="background-color: white;" v-slot:default="{ isActive }">
            <div class="after-order-dialog-parent">
                <div class="title-section">
                    <div class="title-section-right">
                        <div class="title-section-right-top">انتخاب بنر قبلی</div>
                        <div class="title-section-right-bottom">لطفا بنر قبلی خود را انتخاب کنید.</div>

                    </div>
                    <div class="title-section-left">
                        <img src="/images/afterOrder/dialog-close.svg" @click="setStatus(false)" />
                    </div>
                </div>
                <div class="after-order-dialog-parent-input-section" v-if="selectState == false " @click="selectState = true">
                    <span>انتخاب کنید</span>
                    <img src="/images/afterOrder/arrow-right.svg" />
                </div>
                <!--  -->
                <div class="after-order-dialog-parent-input-selected-section" @click="selectState = false" v-else>
                    <div class="after-order-dialog-parent-input-selected-section-title">
                        <span>انتخاب کنید</span>
                        <img src="/images/afterOrder/arrow-up-grey.svg" />
                    </div>
                    <div class="after-order-dialog-parent-input-selected-section-title-input">
                        <span>جستجو کنین...</span>
                        <img src="/images/afterOrder/search.svg" />
                    </div>
                    <div class="after-order-dialog-parent-input-selected-section-final-test">
                        <span> تست نهایی</span>

                    </div>
                    <div class="after-order-dialog-parent-input-selected-section-test-for-write">
                        <span>تست برای نوشتن</span>
                    </div>
                </div>
                <!--  -->
                <div class="after-order-dialog-parent-input-des">پس از انتخاب میتونید جزئیات بنر خود را ویرایش یا اصلاح کنید.</div>
                <div class="after-order-dialog-paren-save-button">
                    <img src="/images/afterOrder/archieve-add-white.svg" />
                    <span>ذخیره پکیج</span>
                </div>
                <div class="after-order-dialog-parent-action-section">
                    <div class="part1"></div>
                    <div class="part2">برای این بنر لینک کوتاه بساز </div>
                    <div class="part3" @click="infoState = !infoState">
                        <span>توضیحات</span>
                        <img :src=" infoState == false ? '/images/afterOrder/arrow-down-blue.svg' : '/images/afterOrder/arrow-up-blue.svg' " />
                    </div>
                </div>
                <div class="after-order-dialog-parent-information" v-if="infoState == true">
                    <pre>
مزایای ساخت لینک کوتاه در سایت هشتگ:
1. نمایش تعداد کلیک انجام شده روی تبلیغ شما
2. نمایش آمار کلیک (ساعتی / روزانه / هفتگی)
3. نمایش بهترین ساعت تبلیغ شما (روز / هفته)
4. نمایش بهترین روز هفته
5. نمایش بهترین رسانه انتخابی
6. لینک تبلیغ شما کوتاه و جذاب می‌شود.
نمونه لینک کوتاه: httb.ir/sdrf
تمامی آمار بر اساس تعداد کلیک روی لینک کوتاه تبلیغ شما است.

                    </pre>
                </div>
            </div>
        </template>
</v-dialog>
    
</template>
  
  <script>
  import { defineComponent , ref , onMounted , watch  } from '@nuxtjs/composition-api'
  import { status , setStatus } from '../../../../composition/content/afterOrderDialog/index'
  export default defineComponent({
    components : {} , 
    props: {
  },
    setup() {
        const test = ref( false )
        const infoState = ref( false )
        const selectState = ref( false )
        watch( status , ( value) => {
             test.value = value

        })
      return { selectState , test , infoState , setStatus  }
    },
  })
  </script>
   <style lang="scss" scoped>
   .after-order-dialog-parent {
    width: 413px ;
    background-color: white;
    padding: 30px ;
    direction: rtl;
    border-radius: 13px;
    .title-section {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        .title-section-right {
            display: flex ;
            flex-direction: column;
            gap: 2px;
            .title-section-right-top {
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 34px;
                text-align: right;
            } 
            .title-section-right-bottom {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                text-align: right;
                color: #404040;
            } 
        }
        .title-section-left {
            img {
                width: 33px ;
                height: 33px;
                cursor: pointer;
            }

        }


    }
    .after-order-dialog-parent-input-section {
        width: 350px ;
        height: 43px ;
        border: .5px solid #888888;
        margin-top: 25px;
        border-radius: 7px;
        padding-right: 9px ;
        padding-left: 9px;
        padding-top: 12px ;
        padding-bottom: 12px;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        span {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            text-align: right;
            color: #404040;
        }
    }
    .after-order-dialog-parent-input-selected-section {
        width: 350px ;
        height: 188px ;
        border: .5px solid #888888;
        background-color: #f5f5f5;
        margin-top: 25px;
        border-radius: 7px;
        padding-right: 9px ;
        padding-left: 9px;
        padding-top: 12px ;
        padding-bottom: 12px;
        display: flex ;
        flex-direction: column;
        cursor: pointer;
        gap: 9px;
        .after-order-dialog-parent-input-selected-section-title {
            width: 100% ;
            display: flex ;
            flex-direction: row ;
            justify-content: space-between;
            span {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                text-align: right;
                color: #404040;
            }
            img {
                width: 13px ;
                height: 13px;
            }
        }
        .after-order-dialog-parent-input-selected-section-title-input {
            width: 333px;
            height: 40px;
            border-radius: 7px ;
            padding-right: 12px ;
            padding-left: 12px ;
            background-color: transparent ;
            border: .5px solid #878787;
            display: flex ;
            flex-direction: row ;
            justify-content: space-between;
            align-items: center;
            span {
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 22px;
                text-align: right;     
                color: #404040;
            }
            img {
                width: 16px  ;
                height: 16px ;
            }
        }
        .after-order-dialog-parent-input-selected-section-final-test {
            width: 333px ;
            height: 40px ;
            border-radius: 7px ;
            border: .5px solid #9e9e9e;
            background-color: white ;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            margin-top: 7px ;
        }
        .after-order-dialog-parent-input-selected-section-test-for-write {
            width: 333px ;
            height: 40px ;
            border-radius: 7px ;
            border: .5px solid #9e9e9e;
            background-color: white ;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            margin-top: 7px ;
        }
    }
    .after-order-dialog-parent-input-des {
        display: flex ;
        flex-direction: row ;
        justify-content: flex-start ;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 22px;
        text-align: right;
        color: #878787;
        margin-top: 6px;
    }
    .after-order-dialog-paren-save-button {
        width: 353px ;
        height: 43px ;
        border-radius: 7px ;
        background-color: #5E7DBE ;
        display: flex ;
        flex-direction: row ;
        justify-content: center ;
        align-items: center;
        gap: 3px;
        margin-top: 22px ;
        span {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 22px;
            text-align: right;
            color: #F5F5F5;
        }
        img {
            width:  17px  ;
            height: 17px ;
        }

    }
    .after-order-dialog-parent-action-section {
        display: flex ;
        width: 100% ;
        flex-direction: row ;
        justify-content: flex-start;
        gap: 8px ;
        margin-top: 16px;
        .part1 {
            width: 20px  ;
            height: 20px ;
            background-color: #e4e4e4;
            border-radius: 5px ;
            border: .5px solid #404040;
        }
        .part2 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            text-align: right;
            color: #404040;
        }
        .part3 {
            width: 85px  ;
            height: 23px ;
            background-color: #DAE6FF;
            border-radius: 30px;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            span {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                text-align: right;
                color: #5E7DBE;
            }
            img {
                width:  10px ;
                height: 10px;
            }

        }

    }
    .after-order-dialog-parent-information {
        width: 100% ;
        display: flex ;
        flex-direction: row ;
        justify-content: flex-start;
        margin-top: 21px;
        text-align: right;
        pre {
            font-family: YekanBakh-Regular-woff !important;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 168%;
            text-align: right;
            color: #404040;
        }
    }
   }
    </style>
  
  