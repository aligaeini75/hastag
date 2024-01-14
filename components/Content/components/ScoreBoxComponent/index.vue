<template>
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
</template>
  
  <script>
  import { defineComponent } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {}, 
    setup() {
        const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
    }     
      return { toFarsiNumber }
    },
  })
  </script>
  <style lang="scss">
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
                        font-family: YekanBakh-Regular-woff;
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
  </style>
  
  