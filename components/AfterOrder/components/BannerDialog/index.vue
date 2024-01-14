<template>
    
    <v-dialog width="1041" v-model="test">
        <template style="background-color: white;" v-slot:default="{ isActive }">
            <div class="after-order-dialog-parent">
                <div class="after-order-dialog-parent-title-section">
                    <div class="title-section-right">افزودن بنر </div>
                    <div class="title-section-left"><img src="/images/afterOrder/dialog-close.svg" @click="close()" /></div>
                </div>
                <div class="after-order-dialog-parent-content">
                    <div class="after-order-dialog-parent-content-right" id="style-1">
                        <div class="after-order-dialog-parent-content-right-part1">
                            <img src="/images/afterOrder/alert.svg" />
                            <span> در این صفحه فقط پر کردن بخش (عنوان بنر) اجباری است. سایر بخش‌ها را بر اساس نوع تبلیغ و نیاز خود پر کنید یا خالی بگذارید.</span>
                        </div>
                        <img style="margin-top: 21px;" src="/images/afterOrder/banner-dialog-line.svg" />
                        <div class="after-order-dialog-parent-content-right-title">
                            <span>عکس یا ویدئو</span>
                            <div class="question">
                                <img src="/images/afterOrder/question.svg" />
                            </div>
                        </div>
                        <div class="after-order-dialog-parent-content-right-part2">
                            <div class="input-section"> <input class="ll" placeholder="فایل مورد نظر را انتخاب کنید" /></div>
                            <div class="select-button">
                                <img src="/images/afterOrder/attach.svg" />
                                <span>انتخاب فایل</span>
                            </div>

                        </div>
                        <div class="after-order-dialog-parent-content-right-title">
                            <span>متن خود را وارد کنید </span>
                            <div class="question">
                                <img src="/images/afterOrder/question.svg" />
                            </div>
                        </div>
                        <div class="after-order-dialog-parent-content-right-des">
                            <span>برای جایگذاری متن کپی شده از کلید‌های ctrl+v استفاده کنید.</span>
                        </div>
                        <div class="after-order-dialog-parent-content-right-part3">
                            <div class="after-order-dialog-parent-content-right-part3-top"></div>
                            <div class="after-order-dialog-parent-content-right-part3-bottom"></div>
                        </div>
                        <div class="after-order-dialog-parent-content-right-part4">
                            <div class="after-order-dialog-parent-content-right-part4-right">
                                <div class="check"></div>
                                <span>برای این تبلیغ لینک کوتاه بساز</span>
                            </div>
                            <div class="after-order-dialog-parent-content-right-part4-left">
                                <span>چرا لینک کوتاه بسازم</span>
                                <img src="/images/afterOrder/arrow-down-blue.svg" />
                            </div>


                        </div>
                        <div class="after-order-dialog-parent-content-right-title">
                            <span>لینک صفحه لندینگ </span>
                            <div class="question">
                                <img src="/images/afterOrder/question.svg" />
                            </div>
                        </div>
                        <div class="after-order-dialog-parent-content-right-des">
                            <span>با تبدیل لینک خود به (لینک کوتاه)، آمار کلیدی و تحلیلی از تعداد کلیک روی تبلیغ خود دریافت کنید.</span>
                        </div>
                        <div class="after-order-dialog-parent-content-right-part5">
                            <input class="ll" placeholder="لینک رو اینجا قرار بدهید..." />
                        </div>
                        <div class="after-order-dialog-parent-content-right-title">
                            <span>عنوان بنر</span>
                            <div class="question">
                                <img src="/images/afterOrder/question.svg" />
                            </div>
                        </div>
                        <div class="after-order-dialog-parent-content-right-part5">
                            <input class="ll" placeholder="عنوان بنر رو اینجا بنویسید" />
                        </div>
                        <div class="after-order-dialog-parent-content-right-part6">
                            ثبت نهایی
                        </div>

                    </div>
                    <div class="after-order-dialog-parent-content-left">
                        <div class="post">
                            <img src="/images/afterOrder/post.svg" />
                            <span>
تست بنر تلگرام سایت هشتگ
برای شناخت بهتر تلگرام و ساخت قالب برای پلتفرم 
هشتگ نیاز داشتیم
                            </span>
                        </div>
                        <div class="iphone-parent">
                            <img src="/images/afterOrder/iphone.svg" />
                        </div>
                    </div>

                </div>
            </div>
        </template>
</v-dialog>
    
</template>
  
  <script>
  import { defineComponent , ref , onMounted , watch  } from '@nuxtjs/composition-api'
  import { status , setStatus1 } from '../../../../composition/content/afterOrderBannerDialog'
  export default defineComponent({
    components : { } , 
    props: {
  },
    setup() {
        const test = ref( false )
        const infoState = ref( false )
        const selectState = ref( false )
        watch( status , ( value) => {
             test.value = value

        })
        const close = () => {
            test.value = false
            setStatus1( false )
        }
        
      return { selectState , test , infoState , setStatus1 ,close  }
    },
  })
  </script>
   <style lang="scss" scoped>
   #style-1::-webkit-scrollbar-track
    {
    	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    	border-radius: 10px;
    	background-color: #F5F5F5;
    }
    
    #style-1::-webkit-scrollbar
    {
    	width: 12px;
    	background-color: #F5F5F5;
    }
    
    #style-1::-webkit-scrollbar-thumb
    {
    	border-radius: 10px;
    	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    	background-color: #9e9e9e;
    }
   .ll::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    text-align: right;
    color: #888888;
   }
   .after-order-dialog-parent {
    background-color: white;
    padding: 30px ;
    direction: rtl;
    border-radius: 13px;
    width: 1041px ;
    display: flex ;
    flex-direction: column ;
    .after-order-dialog-parent-title-section {
        display: flex ;
        flex-direction: row ;
        justify-content: space-between ;
        .title-section-right {
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 34px;
            text-align: right;
            color: #404040;
        }
        .title-section-left {
            img {
                width: 33px  ;
                height: 33px ;
                cursor: pointer;
            }
        }
    }
    .after-order-dialog-parent-content {
        display: flex ;
        flex-direction: row ;
        width: 100%;
        margin-top: 25px;
        
        .after-order-dialog-parent-content-right {
            display: flex ;
            flex-grow: 2  ;
            flex-direction: column ;
            background-color: white;
            overflow-y: scroll;
            height: 622px;
            padding-left: 16px;
            .after-order-dialog-parent-content-right-part1 {
                display: flex ;
                flex-direction: row;
                gap: 3px;
                img {
                    width: 23px  ;
                    height: 23px ;
                    margin-top: 4px;

                }
                span {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 28px;
                    text-align: right;
                    color: #404040;


                }
            }
            .after-order-dialog-parent-content-right-title {
                display: flex ;
                flex-direction: row;
                justify-content: flex-start ;
                align-items: center;
                gap: 3px;
                margin-top: 20px ;
                span {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 28px;
                    text-align: right;
                    color: #404040;
                }
                .question {
                    width: 16px  ;
                    height: 16px ;
                    background-color: #D7E4FF ;
                    border-radius: 48px;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                    img {
                        width: 9px ;
                        height: 9px;
                    }
                }
            }
            .after-order-dialog-parent-content-right-part2 {
                width: 542px ;
                height: 40px ;
                border-radius: 7px ;
                background-color: #f7f7f7;
                margin-top: 18px;
                display: flex ;
                flex-direction: row;
                align-items: center;
                border: .5px solid #e1e1e1;
                .select-button {
                    width: 126px ;
                    height: 32px ;
                    border-radius: 5px ;
                    background-color: #5E7DBE ;
                    display: flex ;
                    flex-direction: row ;
                    justify-content: center ;
                    align-items: center;
                    gap: 3px ;
                    color: white;
                    margin-top: 4px ;
                    margin-bottom: 4px;
                    margin-left: 4px;
                }
                .input-section {
                    width: 416px ;
                    input {
                        all: unset;
                        padding-right: 15px;
                        height: 100%;
                        width: 100%;
                    }
                }
            }
            .after-order-dialog-parent-content-right-des {
                display: flex ;
                flex-direction: row;
                justify-content: flex-start ;
                align-items: center;
                gap: 3px;
                margin-top: 4px ;
                span {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 28px;
                    text-align: right;           
                    color: #404040;

                }
            }
            .after-order-dialog-parent-content-right-part3 {
                display: flex ;
                flex-direction: column ;
                margin-top: 34px;
                .after-order-dialog-parent-content-right-part3-top {
                    width: 542px ;
                    height: 48px ;
                    background-color: #f7f7f7;
                    border: .5px solid #e4e4e4;
                    border-top-right-radius: 7px ;
                    border-top-left-radius: 7px;
                }
                .after-order-dialog-parent-content-right-part3-bottom {
                    height: 191px ;
                    width: 542px  ;
                    background-color: white ;
                    border: .5px solid #e4e4e4;
                    border-bottom-left-radius: 7px ;
                    border-bottom-right-radius: 7px;
                }

            }
            .after-order-dialog-parent-content-right-part4 {
                width: 541px ;
                height: 48px ;
                border-radius: 7px ;
                background-color: #f7f7f7;
                display: flex ;
                flex-direction: row ;
                justify-content: space-between ;
                align-items: center;
                border: .5px solid #e4e4e4;
                padding-right: 13px ;
                padding-left: 13px;
                margin-top: 22px;
                .after-order-dialog-parent-content-right-part4-right {  
                    display: flex ;
                    flex-direction: row ;
                    align-items: center;
                    gap: 9px ;
                    .check {
                        width:  21px ;
                        height: 21px ;
                        border-radius: 5px ;
                        background-color: white ;
                        border: .5px solid #e4e4e4;
                    }
                    span {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 28px;
                        text-align: right;
                        color: #404040;
                    }

                }
                .after-order-dialog-parent-content-right-part4-left {
                    width: 160px ;
                    height: 30px ;
                    border-radius: 7px ;
                    background-color: #DAE6FF;
                    margin-top: 11px;
                    margin-bottom: 11px;
                    display: flex ;
                    flex-direction: row ;
                    gap: 9px;
                    justify-content: center ;
                    align-items: center;
                    padding-right: 13px ;
                    padding-left: 11px;
                    span {          
                        font-style: normal;
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 22px;
                        text-align: right;
                        color: #5E7DBE;
                    }

                }
            }
            .after-order-dialog-parent-content-right-part5 {
                width: 542px ;
                height: 40px ;
                border-radius: 7px ;
                background-color: #f7f7f7;
                border: .5px solid #e4e4e4;
                margin-top: 13px;
                padding-top: 8px ;
                padding-bottom: 8px;
                input {
                    all: unset ;
                    width: 100% ;
                    height: 100%;
                    padding-right: 10px;
                    
                }

            }
            .after-order-dialog-parent-content-right-part6 {
                width: 542px ;
                height: 42px ;
                background-color: #58A65C ;
                border-radius: 7px ;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                margin-top: 37px;
                padding-top: 8px ;
                padding-bottom: 8px;
                color: white;
                
            }


        }
        .after-order-dialog-parent-content-left {
            display: flex ;
            flex-grow: 1  ;
            flex-direction: row ;
            justify-content: center;
            align-items: flex-start;
            margin-right: 40px;
            .post {
                width: 159px  ;
                background-color: white;
                position: absolute;
                bottom: 250px;
                left: 525px;
                border-radius: 7px;
                display: flex ;
                flex-direction: column ;
                img {
                    width: 153px  ;
                    height: 241px ;
                }
                span {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 9px;
                    line-height: 16px;
                    text-align: right;                
                    color: #000000;
                    font-family: YekanBakh;
                    padding-top: 16px;
                    padding-right: 8px;
                    padding-bottom: 16px;
                }
            }
            .iphone-parent {
                width: 349px ;
                height: 622px ;
                border-radius: 13px ;
                background-color: #e4e4e4;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                
            }
            
        }

    }
   }
    </style>
  
  