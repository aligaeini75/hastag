<template>
  <div style="display: flex ; flex-direction: column ;align-items: center;">
    <!--  -->
    <div class="tab-wrap" style="width: 96vw !important;">

<input type="radio" id="tab4" name="tabGroup2" class="tab" checked>
<label for="tab4" style="font-weight: bold;display: flex ; flex-direction: row ; gap: 8px;justify-content: center;">
    دسته بندی ها
    <img src="../../../../static//images/category-icon.svg" />
   
</label>

<input type="radio" id="tab5" name="tabGroup2" class="tab">
<label for="tab5" style="font-weight: bold;display: flex ; flex-direction: row ; gap: 8px;justify-content: center;">
فیلتر نتایج
<img src="../../../../static//images/filter-icon.svg" />
</label>


<div class="tab__content">
    <Category />
</div>

<div class="tab__content">
    <Filters />
</div>


</div>

    <!--  -->
	<div style="display: flex;flex-direction: row; justify-content: space-between;margin-top: 8px; width: 100%;padding: 8px;">
		<img src="../../../../static//images/price-mobile.svg" />
		<img src="../../../../static//images/resane-select.svg" />
	</div>
	<div style="display: flex ;flex-direction: column ;align-items: center;margin: 8px;">
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
		<div style="display: flex ;flex-direction: row ;justify-content: space-between ;direction: rtl;background-color: #f5f5f5;padding: 8px;border-radius: 8px;">
			
			<div style="display: flex ;flex-direction: column ; gap: 16px;">
				<div style="display: flex ;flex-direction: column; gap: 8px; font-size: 14px; font-weight: 300; line-height: 15px; letter-spacing: 0em; text-align: right; color: #9e9e9e;
">
					<span>اطلاعات</span>
                    <span>کلیدی</span>
				</div>
				<div style="display: flex ;flex-direction: column; gap: 8px;margin-top: 16px;">
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
			<div style="display: flex ;flex-direction: column ; gap: 16px;">
				<div style="display: flex ;flex-direction: column; gap: 8px;">
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
				<div style="display: flex ;flex-direction: column; gap: 8px;">
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
                <div style="display: flex ; flex-direction: row ;justify-content: space-between;align-items: center;background-color: #f5f5f5;border-radius: 7px;width: 73px;height: 35px;margin-bottom: 4px;">
					<img src="../../../../static//images/minus.svg" style="width: 24px; height: 24px;" @click="count--" />
					<input style="-webkit-appearance: none; width: 10px;font-weight: bold;" :value="count" />
					<img src="../../../../static//images/add-mobile.svg" style="width: 24px; height: 24px;" @click="count++"/>
				</div>
				<v-select
				style="width: 110px;"
                disabled
				class="vvlabel"
				  label="بازه زمانی"
				  :items="['24 ساعته'  , '12 ساعته']"
				></v-select>
				
			</div>
			<div style="display: flex ;flex-direction: row ; gap: 16px;margin-bottom: 4px;">
				<span style="font-weight: bold;
					font-size: 18px;
					font-weight: 700;
					line-height: 28px;
					letter-spacing: 0em;
					color: white;
					text-align: right;direction: rtl;"> 560/000 تومان</span>
				<img src="../../../../static//images/content/shopping-cart.svg" style="width: 24px; height: 24px;" />
				

			</div>
			
		</div>

	</div>
	<!--  -->
	<div style="padding-left: 8px;padding-right: 8px;">
		<div class="box-title" style="margin-top: 8px;"  @click="changeBoxTitle()">
        	<img style="fill: #363A3F;" :src="!boxTitle ? '/images/arrow-right.svg' : '/images/arrow-up.svg'"  />
        	<span style="
							font-size: 14px;
							font-weight: 700;
							line-height: 25px;
							letter-spacing: 0em;
							text-align: right;
			">راهنمای تبلیغات هدفمند تر در تلگرام و اینستاگرام</span>
    	</div> 
   		<div class="box-title-detail" style="width: 96vw;" v-if="boxTitle">
   		  <div class="content">تست</div>
   		</div>
    	<div class="line">
    	  <div class="line-section" style="width: 60%;"></div>
    	  <span class="span" style="
				font-size: 16px;
				font-weight: 700;
				line-height: 28px;
				letter-spacing: 0em;
				text-align: right;
				">سوالات متداول</span>

    	</div> 
		<div class="box-parent" style="margin-top: 16px;" @click="changeBoxParent1()" >
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent1 ? '/images/arrow-right.svg' : '/images/arrow-up.svg'" />
                <span>میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟</span>
            </div>
            <div v-if="boxParent1" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
		  <div class="box-parent" @click="changeBoxParent2()" >
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent2 ? '/images/arrow-right.svg' : '/images/arrow-up.svg'" />
                <span>چطور می‌توانم سفارشم را پیگیری کنم؟</span>
            </div>
            <div v-if="boxParent2" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
		  <div class="box-parent" @click="changeBoxParent3()">
            <div class="box-title">
                <img style="fill: #363A3F;" :src="!boxParent3? '/images/arrow-right.svg' : '/images/arrow-up.svg'"  />
                <span>هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟</span>
            </div>
            <div v-if="boxParent3" style="text-align: right;padding: 16px;">dqdqwddddddd</div>
          </div>
		  
	</div>
	<!--  -->
	<div style="margin-top: 8px;">
		<div class="score-box-mobile">
		<div class="right">
                <div class="title">
                    <span>لطفا برای ارتقا کیفیت امتیاز خودتونو ثبت کنید</span>
                </div>
                <div class="bottom-section">
                    <div class="bottom-section-part2">
                        <div class="title2"> 4289</div>
                        <div class="title1"> امتیاز </div>
                        
                        
                        
                    </div>
                    <div class="bottom-section-part1">
                        <span class="title3"> 4.5 میانگین </span>
                        <v-rating
                            background-color="grey lighten-2"
                            color="warning"
                            hover
                            length="5"
                            size="16"
                            value="3"
                        ></v-rating>
                       
                    </div>
                    
                </div>              
            </div>
            <div class="left">
                
                <v-rating
                    value="3"
                    background-color="orange lighten-3"
                    color="orange"
                    size="30"
                ></v-rating>
            </div>
			<div class="left-btn-submit">
                    <span>ثبت امتیاز</span>
                </div>
           

    </div>
	</div>
</div>
</template>  
  <script>
  import { defineComponent , ref , watch } from '@nuxtjs/composition-api'
  import Category from './Category/index.vue'
  import Filters from '../../../../components/FilterMobile'
  import './index.scss'
  import { calenderPopupStatus , setCalenderPopupStatus } from '../../../../composition/content/calender/index.js'
//   import Tabs from './Tabs'
  export default defineComponent({
    components : {
        Category , 
		Filters 
        // Tabs
    } , 
    setup() {
		const tab = ref( null )
		const statement = ref("")
		const boxTitle = ref( false )
		const boxParent1 = ref( false )
        const boxParent2 = ref( false )
        const boxParent3 = ref ( false)
        const count = ref(2)
		const changeBoxTitle = () => {
            boxTitle.value = !boxTitle.value 
        }
		const removeCalenderDatePicker = () => {
            setCalenderPopupStatus( false )
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
		watch( tab , () => {
			console.log("tab : " , tab.value)
			if( tab.value == 0 )
				statement.value = 'category'
			else
				statement.value = 'filters'
			console.log( statement )
		})
      return { count , setCalenderPopupStatus , changeBoxParent1 , changeBoxParent2 , changeBoxParent3 , boxParent1 , boxParent2 , boxParent3 ,  changeBoxTitle , boxTitle , removeCalenderDatePicker , tab , statement }
    },
  })
  </script>
  	<style lang="scss">
    @media screen and (max-width: 700px) {
        .v-expansion-panel-content__wrap {
        width: 100vw;
    }
    .v-expansion-panel-content {
        width: 100vw;
    }
    }
    *{}
   
	.score-box-mobile {
        width: 95vw;
        margin: 8px;
        display: flex ;
        flex-direction: column ;
        height: fit-content ;
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
			margin-top: 8px;
        }
		.left-btn-submit {
                display: flex ;
				margin-top: 8px;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                width: 140.23px;
                height: 37.04px;
                top: 3073.6px;
                left: 452.16px;
                border-radius: 7px;
                background-color: #E3A507;
                color: #404040;
                span {
					font-size: 14px;
					font-weight: 700;
					line-height: 22px;
					letter-spacing: 0em;
					text-align: left;


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
                justify-content: left ;
                gap: 12px;
				margin-top: 8px;
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
		margin-top: 10px;
    }
	// 
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
		font-size: 16px;
		font-weight: 700;
		line-height: 25px;
		letter-spacing: 0em;
		text-align: right;
        span {
            color: #404040;
            font-size: 14px;
			font-weight: 700;
			line-height: 25px;
			letter-spacing: 0em;
			text-align: right;
        }
    }
    .box-title-detail {
        display: flex ;
        flex-direction: row ;
        justify-content: right ;
        padding: 16px ;
		margin-top: 4px;
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


	// 
	.v-label .theme--light {
		position: absolute ;
		left: auto ;
		right: 2px;
	}
	.v-select__slot {
		background-color: #f5f5f5;
    	border-radius: 8px;
    	padding: 1px;
    	color: black;
    	font-weight: bold;
		direction: rtl;
	}
	.v-application--is-ltr .v-text-field .v-label {
    transform-origin: top left;
     left: auto !important;
    right: 8px !important;
    position: absolute !important;
}
	.v-slide-group__wrapper {
		background-color: #f5f5f5;
        border-radius: 8px;
	}
	.calender-parent {
        border-radius: 8px;
        background-color: white;
        display: flex ;
        height: 110px;
        align-self: center;
        flex-direction: column ;
        justify-content: space-between;
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
	.v-slide-group__content {
		justify-content: center;
		margin-top: 8px;
	}
	</style>














  
  