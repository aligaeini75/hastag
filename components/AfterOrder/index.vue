<template>
  <div class="after-order-parent">
      <div class="after-order-content">
        <Dialog />
        <BannerDialog />
        <Info />
        <ItemSelected  header-color="#34AADF" mode="telegram" title="تبلیغ در تلگرام" ids="1" />
        <ItemSelected  header-color ="linear-gradient(169deg, #DFAF34 -24.75%, #DC34DF 158.25%)" mode="instagram" title="تبلیغ در اینستگرام" ids="2"/>
        <FurtherInformation />
      </div>
      
      <div class="after-order-side">
        <SideMenu />
      </div>
  </div>
  <!--  -->
  <!--  -->
</template>

<script>
import { defineComponent} from '@nuxtjs/composition-api'
import SideMenu from '../SideMenu/index.vue'
import Info from './components/Info/index.vue'
import ItemSelected from  './components/ItemSelected/index.vue'
import FurtherInformation from './components/FurtherInformation/index.vue'
import Dialog from './components/Dialog/index.vue'
import BannerDialog  from './components/BannerDialog/index.vue'
export default defineComponent({
  components : {
    SideMenu ,
    Info , 
    ItemSelected , 
    FurtherInformation , 
    Dialog , 
    BannerDialog
} , 
  setup() {
    return { }
  },
})
</script>
<style lang="scss">

.after-order-parent {
  background-color: #e4e4e4;
  display: flex ;
  flex-direction: row ;
  width: 100vw;
  height: fit-content;
  .after-order-content {
    display: flex ;
    flex-direction: column ;
    align-items: center;
    gap: 8px ;
    width: 100% ;
    height: 100%;
  }
  .after-order-side {
      display: flex ;
      background-color: white;
      width: 170px;
      max-width: 100px;
  }
}
</style>

