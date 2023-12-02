<template>
    <div class="further-information">
        <div class="fi-right">
            <div class="fi-top">
                <div class="fid-right">اطلاعات تکمیلی کمپین</div>
                <div class="fid-left">
                    <div class="fi-title">نام کمپین:</div>
                    <div class="fi-input" >
                        <input class="gl" placeholder="اینجا وارد کنید..." />
                    </div>
                </div>
            </div>
            <div class="fi-bottom">
                <div class="fi-check"></div>
                <div class="fi-des">درصورتی که ادمین رسانه در تاریخ انتخاب شده در دسترس نبود ، تبلیغ تا 24 ساعت بعد از تاریخ انتخابی منتشر شود.</div>
            </div>
        </div>
        <div class="left">
            <div class="save-button">
                <img src="/images/afterOrder/archive-add.svg" />
                <span>ذخیره کمپین</span>
            </div>
            <div class="submit-button">ثبت نهایی</div>
        </div>
    </div>
    
</template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {} , 
    props: {
  },
    setup() {
      return { }
    },
  })
  </script>
   <style lang="scss" scoped>
   .gl::placeholder {
    color: #888;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
   }
   .further-information {
    display: flex ;
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 13px;
    direction: rtl;
    width: 1010px ;
    height: 151px;
    margin-top: 10px;
    padding-top: 30px;
    margin-bottom: 8px;
    .fi-right {
        
        display: flex ;
        flex-direction: column;
        flex-grow: 1;
        width: 500px;
        padding-right: 32px;
        .fi-top {
            display: flex ;
            flex-direction: row ;
            gap: 16px ;
            margin-bottom: 16px;
            .fid-right {
                color: #404040;
                width: fit-content;
                text-align: right !important;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

            }
            .fid-left {
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                gap: 8px ;
                .fi-title {
                    color: #404040;
                    width: 70px;
                    text-align: right;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .fi-input {
                    width: 178.922px;
                        height: 29.324px;
                        flex-shrink: 0;
                        border-radius: 7px;
                        border: 0.5px solid #404040;
                        background: #FFF;
                    input {
                        all: unset;
                        padding-right: 8px;
                        padding-top: 2px;
                        
                    }
                }

            }


        }
        .fi-bottom {
            display: flex ;
            flex-direction: row ;
            align-items: flex-start;
            gap: 8px;
            .fi-check {
                width: 20.53px ;
                height: 20.527px;
                border-radius: 5px;
                border: 0.5px solid #404040;
                background: #E4E4E4;
                margin-top: 2px;
            }
            .fi-des {
                width: 426.82px;
                height: 50px;
                display: flex;
                flex-direction: row ;
                justify-content: flex-end;
                align-items: flex-start;
                color: #404040;
                text-align: right;
                direction: rtl;
                font-size: 14px;
                line-break: auto;
                font-style: normal;
                font-weight: 400;
            }

            
        }

    }
    .left {
        display: flex ;
        flex-grow: 1;
        flex-direction: row ;
        justify-content: center ;
        align-items: center;
        gap: 17px ;
        .save-button {
            width: 187.516px;
            height: 50.428px;
            border-radius: 7px;
            border: 1px solid #5E7DBE;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            gap: 4px ;
            img {
                width: 24px ;
                height: 24px;
            }
            span {
                color: #5E7DBE;
                text-align: right;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

        }
        .submit-button {
            width: 187.516px;
            height: 50.428px;
            flex-shrink: 0;
            border-radius: 7px;
            border: 0.5px solid #9E9E9E;
            background: #58A65C;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            color: #FFF;
            text-align: right;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

        }



    }
   }
    </style>
  
  