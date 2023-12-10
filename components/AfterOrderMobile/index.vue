  <template>
    <!-- <h1>Test</h1> -->
    <div class="after-order-mobile-parent">
        <InfoSection />
        <afterOrderMobileButtons />
        <afterOrderMobileItems />
        <afterOrderMobileCampain />
    </div>
  </template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  import InfoSection from './components/afterOrderMobileInfoSection/index.vue'
  import afterOrderMobileButtons from './components/afterOrderMobileButtons/index.vue'
  import afterOrderMobileItems from './components/afterOrderMobileItems/index.vue'
  import afterOrderMobileCampain from './components/afterOrderMobileCamapain/index.vue'
  export default defineComponent({
    components : { InfoSection , afterOrderMobileButtons , afterOrderMobileItems , afterOrderMobileCampain } , 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
  .after-order-mobile-parent {
    display: flex ;
    flex-direction: column ;
    justify-content: flex-start ;
    align-items: center ;
    width: 100% ;
    padding: 30px;
    background-color: #f5f5f5;

  }
  </style>
  
  