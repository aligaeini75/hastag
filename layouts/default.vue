<template>
  <v-app>
    
    <div v-if="!isMobile()">
      <Header />
    </div>
    <div v-else>
      
      <MobileModeHeader />
      <v-overlay style="z-index: 2000;" v-if="navigationDrawer == true" @click="setNavigationDrawer( false)"></v-overlay>
      <v-navigation-drawer
        v-model="navigationDrawer"
        v-if="navigationDrawer == true"
        style="height: 100vh;position: absolute;z-index: 3000;"
        temporary
      >
        <div style="display: flex ; flex-direction: column ;gap: 8px ;">
          <!-- section1 -->
          <div style="display: flex ;flex-direction: row ; justify-content: space-between;padding: 16px;border-radius: 5px;margin-top: 8px;">
            <img src="../static/images/navigation/close.svg" @click="setNavigationDrawer( false)"/>
            <div style="padding: 8px;width: 150px;height: 30px;background-color: #EDFFEE;display: flex ;flex-direction: row;justify-content: space-between;align-items: center;">
              <img src="../static/images/navigation/shopping-cart.svg" />
              <div style="
                font-size: 12px;
                font-weight: 700;
                line-height: 19px;
                letter-spacing: 0em;
                text-align: right;
                color: #58A65C;
                ">مشاهده صورتحساب</div>
            </div>
          </div>
          <!-- section2 -->
          <div style=" margin: 0 auto;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: center ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">پیام های شما</div>
            <img src="../static/images/navigation/message-square.svg" />
            
          </div>
          <!-- section 3 -->
          <v-divider></v-divider>
          <!-- section4 -->
          <div style="margin-top: 16px;display: flex;flex-direction: row;gap: 8px;direction: rtl;width: 226px; height: 41px;border-radius: 13px;border: 0.5px solid #878787 ; align-self: center; padding: 8px;gap: 16px;align-items: center;">
            <div style="
              font-size: 14px;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: right;
              ">980 هزارتومان</div>
              <div style="display: flex;flex-direction: row;justify-content: center;width: 101px;height: 30px;background-color: #58A65C;border-radius: 7px;gap: 8px;align-items: center;">
                <img src="../static/images/navigation/plus.svg" />
                <div style="
                    font-size: 11px;
                    font-weight: 500;
                    line-height: 17px;
                    letter-spacing: 0em;
                    color: white;
                    ">افزایش موجودی</div>
              </div>
          </div>
          <!--  -->
          <div style=" margin-top: 8px;padding: 8px;align-self: center;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: space-between ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <img src="../static/images/arrow-right.svg" />
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">سفارش تبلیغات</div>
            <img src="../static/images/navigation/sefaresh.svg" />
            
          </div>
          <!--  -->
          <div style=" margin-top: 8px;padding: 8px;align-self: center;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: space-between ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <img src="../static/images/arrow-right.svg" />
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">پیگیری سفارشات</div>
            <div style="border-radius: 8px;width: 20px;height: 20px;display: flex;flex-direction: row;justify-content: center;align-items: center;background-color: #606060;padding: 8px;">
              <img src="../static/images/box.svg" />
            </div>
            
          </div>
          <!--  -->
          <div style=" margin-top: 8px;padding: 8px;align-self: center;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: space-between ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <img src="../static/images/arrow-right.svg" />
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">برای من</div>
            <div style="border-radius: 8px;width: 20px;height: 20px;display: flex;flex-direction: row;justify-content: center;align-items: center;background-color: #606060;padding: 8px;">
              <img src="../static/images/user.svg" />
            </div>
            
          </div>
          <!--  -->
          <div style=" margin-top: 8px;padding: 8px;align-self: center;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: space-between ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <img src="../static/images/arrow-right.svg" />
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">گزارشات مالی</div>
            <img src="../static/images/navigation/mali.svg" />
            
          </div>
          <!--  -->
          <div style=" margin-top: 8px;padding: 8px;align-self: center;width: 226px;height: 41px;display: flex ;flex-direction: row ;justify-content: space-between ; gap: 16px;background-color: #f5f5f5;border-radius: 10px;align-items: center;">
            <img src="../static/images/arrow-right.svg" />
            <div style="
                font-size: 14px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                ">پشتیبانی</div>
            <img src="../static/images/navigation/phone.svg" />
            
          </div>
        </div>
      </v-navigation-drawer>
    </div>
        
        <Nuxt />
  </v-app>
</template>

<script>
import { ref  , watch } from 'vue'
import Header from '../components/Header/index.vue'
import MobileModeHeader from '../components/MobileModeHeader/index.vue'
import { navigationDrawer , setNavigationDrawer  }  from '../composition/content/NavigationDrawer/index'

export default {
  name: 'DefaultLayout',
  components : {
   Header   , 
   MobileModeHeader
  } ,
  watch: {
    navigationDrawer: function (val) {
     console.log("val : " , val)
    }
  } , 
  data () {
    const drawer = ref( true )
    return { drawer , MobileModeHeader , navigationDrawer , setNavigationDrawer }
  } , 
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
}
}
</script>
<style>
.v-application--wrap {
  z-index: 3000;
}
input { outline: none; }
body {
  font-family: YekanBakh ;
}
html {
  /* overflow: hidden; */
}
</style>
