<template>
  <div class="after-order-parent">
      <div class="after-order-content">
        <Info />
        <ItemSelected  header-color="#34AADF" mode="telegram" title="تبلیغ در تلگرام" />
        <ItemSelected  header-color ="linear-gradient(169deg, #DFAF34 -24.75%, #DC34DF 158.25%)" mode="instagram" title="تبلیغ در اینستگرام"/>
        <FurtherInformation />
      </div>
      
      <div class="after-order-side">
        <SideMenu />
      </div>
  </div>
  <!--  -->
</template>

<script>
import { defineComponent} from '@nuxtjs/composition-api'
import SideMenu from '../SideMenu/index.vue'
import Info from './components/Info/index.vue'
import ItemSelected from  './components/ItemSelected/index.vue'
import FurtherInformation from './components/FurtherInformation/index.vue'
export default defineComponent({
  components : {
    SideMenu ,
    Info , 
    ItemSelected , 
    FurtherInformation
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

