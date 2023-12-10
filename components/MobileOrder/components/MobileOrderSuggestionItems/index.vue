<template>
    
    <div style="display: flex ;flex-direction: column ;align-items: center;margin: 8px;width: 370px;align-self: center;">
        <div style="margin: 8px;width: 100%;border-top-right-radius: 10px;border-top-left-radius: 10px;background-color: white;padding: 8px;z-index: 1000;">
        <!-- section1 -->
        <div style="display: flex;flex-direction: row;justify-content: space-between;">
            <!-- left -->
            <div style="display: flex ;flex-direction: row ;justify-content: left ;align-items: top;">
                <img src="../../../../static//images/more-mobile.svg"   style="width: 40px;height: 40px;"/>
            </div>
            <!-- right -->
            <div style="display: flex ;flex-direction: row;">
                <div style="display: flex ;flex-direction: column ;margin-right: 16px;direction: rtl;">
                    <div style="
                                font-size: 14px;
                                font-weight: 700;
                                line-height: 25px;
                                letter-spacing: 0em;
                                text-align: right;
                                color: #404040;
                    "> پکیج 5 کانال تلگرامی برنامه نویسی</div>
                    <div style="margin-top: 8px;border-radius: 10px;float: right;text-align: right; width: 100px; height: 20px;display: flex;gap: 8px;flex-direction: row;justify-content: center;align-items: center;border: 1px solid #f5f5f5;
                        font-size: 12px;
                        font-weight: 300;
                        line-height: 19px;
                        letter-spacing: 0em;
                        text-align: right;

                    ">
                    <img src="/images/tick-circle.svg"/> 
                    <span>برنامه نویسی</span>
                       
                </div>
                </div>
                <img src="../../../../static//images/content/avatar.svg"   style="width: 47px;height: 47px;"/>
                
            </div>
        </div>
        <!-- section2 -->
        <div style="display: flex ;flex-direction: row ; gap: 8px; width: 100%; margin-top: 8px;align-items: center;justify-content: right;">
            
            <div style="width: 80%;height: .5px;border-radius: 50%;background-color: #ADADAD;"></div>
            <img src="../../../../static//images/marks/takhfif.svg"   style="width: 40px;height: 40px;"/>
            <img src="../../../../static//images/marks/new.svg"       style="width: 40px;height: 40px;"/>

        </div>
        <!-- section3 -->
        <div style="text-align: right;
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 23px;
                    letter-spacing: 0em;
                    text-align: right;
                    color: #404040;
                    ">این کانال برای طرفدارای سیمسون هاست که برنامه نویسم هستن تازه</div>
        <!-- section4 -->
        <div style="display: flex ;flex-direction: row ;justify-content: space-between;direction: rtl;margin-top: 8px;margin-bottom: 8px;">
            <div style="
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 15px;
                        letter-spacing: 0em;
                        text-align: right;
                        color: #9e9e9e;
            ">نشانی پیج:</div>
            <div style="
                        font-size: 16px;
                        display: flex ;
                        flex-direction: row ;
                        gap: 8px;
                        font-weight: 500;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: #5e7dbe;
            ">
                <span>simsion_programmers</span>
                <img src="/images/content/arrow.svg" />
            </div>
        </div>
        <!-- section5 -->
        <div style="display: flex ;flex-direction: row ;justify-content: space-between ;align-items: center;direction: rtl;background-color: #f5f5f5;padding: 8px;border-radius: 8px;height: 113px;padding-right: 19px;padding-left: 14px;">
              
              <div style="display: flex ;flex-direction: column ;margin-top: 4px;">
                  <div style="display: flex ;flex-direction: column; gap: 2px; font-size: 14px; font-weight: 300; line-height: 15px; letter-spacing: 0em; text-align: right; color: #9e9e9e;
  ">
                      <span>اطلاعات</span>
                      <span>کلیدی</span>
                  </div>
                  <div style="display: flex ;flex-direction: column; gap: 1px;margin-top: 12px;">
                      <span style="
                                  font-size: 12px;
                                  font-weight: 300;
                                  line-height: 19px;
                                  letter-spacing: 0em;
                                  text-align: right;
                      ">تعداد کانال:</span>
                      <span style="
                              font-size: 16px;
                              font-weight: 700;
                              line-height: 25px;
                              letter-spacing: 0em;
                              text-align: right;
                              ">7 عدد</span>
                  </div>
              </div>
              <div style="display: flex ;flex-direction: column ; gap: 2px;">
                  <div style="display: flex ;flex-direction: column; gap: 1px;">
                      <span style="
                                  font-size: 12px;
                                  font-weight: 300;
                                  line-height: 19px;
                                  letter-spacing: 0em;
                                  text-align: right;">حدود بازدید:</span>
                      <span style="
                              font-size: 16px;
                              font-weight: 700;
                              line-height: 25px;
                              letter-spacing: 0em;
                              text-align: right;">3.8K</span>
                  </div>
                  <div style="display: flex ;flex-direction: column; gap: 1px;">
                      <span style="
                                  font-size: 12px;
                                  font-weight: 300;
                                  line-height: 19px;
                                  letter-spacing: 0em;
                                  text-align: right;">تعداد کاربر:</span>
                      <span style="
                              font-size: 16px;
                              font-weight: 700;
                              line-height: 25px;
                              letter-spacing: 0em;
                              text-align: right;">14.696</span>
                  </div>
              </div>
              <div style="display: flex ;flex-direction: row ;justify-content: center ;align-items: center;">
                  <div class="calender-parent">
                          <span>تقویم روز</span>
                          <img src="../../../../static//images/content/calendar.svg" @click="setCalenderPopupStatus( true )" />
                      </div>
              </div>
  
          </div>

        </div>
        <div style="padding: 8px;margin-right: 0;width: 100% ;height: 70px; background-color: #58A65C;border-bottom-left-radius: 13px;border-bottom-right-radius: 13px;margin-top: -20px; display: flex;flex-direction: row;justify-content: space-between ;align-items: flex-end;">
            <div style="display: flex ;flex-direction: row ; gap: 8px;position: relative; bottom: -18px;align-items: center;">
                <div style="display: flex ; flex-direction: row ;justify-content: space-between;align-items: center;background-color: #f5f5f5;border-radius: 7px;width: 73px;height: 34px;margin-bottom: 6px;">
                    <img src="../../../../static//images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
                    <input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="count" />
                    <img src="../../../../static//images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
                </div>
                <v-select
                style="width: 84px;font-size: 6px;"
                disabled
                class="vvlabel tt"
                  label="بازه زمانی"
                  :items="['24 ساعته'  , '12 ساعته']"
                ></v-select>
                
            </div>
            <div style="display: flex ;flex-direction: row ;align-items: center;">
                <span style="font-weight: bold;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 28px;
                    letter-spacing: 0em;
                    color: white;
                    text-align: right;direction: rtl;margin-right: 8px;margin-bottom: 4px;"> 560/000 تومان</span>
                <img src="../../../../static//images/content/shopping-cart.svg" style="width: 24px; height: 24px;margin-bottom: 4px;" />
                

            </div>
            
        </div>

    </div>
</template>  
  <script>
  import { defineComponent , ref , watch } from '@nuxtjs/composition-api'
  import { setCalenderPopupStatus } from '../../../../composition/content/calender/index.js'
  export default defineComponent({
    components : { } , 
    setup() {
        const count = ref(2)
      return { count , setCalenderPopupStatus   }
    },
  })
  </script>
      <style lang="scss">
      .tt .v-label {
          font-size: 12px;
          margin-top: 2px;
      }
    @media screen and (max-width: 700px) {
        .v-expansion-panel-content__wrap {
        width: 100vw;
    }
    .v-expansion-panel-content {
        width: 100vw;
    }
    }
    .calender-parent {
        border-radius: 8px;
        background-color: white;
        display: flex ;
        box-shadow: 0px 4px 8px rgba(94, 125, 190, 0.25);
        border: 0.53px solid #5E7DBE;
        width: 70px ;
        height: 80px;
        align-self: center;
        flex-direction: column ;
        margin-bottom: 16px;
        justify-content: space-between;
        flex-grow: 1 ;
        font-size: 12px;
        gap: 4px;
        padding: 8px;
        justify-content: center ;
        align-items: center;
        img {
            width: 46px ;
            height: 46px;
        }
    }
    .v-slide-group__content {
        justify-content: center;
        margin-top: 8px;
    }
    </style>














  
  