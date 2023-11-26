<template>
    <div class="main-mobile-parent" style="background-color: #e4e4e4 !important;">
      <TitleSection />
      <CategorySection />
      
    </div>

</template>
  
  <script>
  import { defineComponent , ref} from '@nuxtjs/composition-api'
  import TitleSection from './components/TitleSection/index.vue'
  import CategorySection from './components/CategorySection/index.vue'
  export default defineComponent({
    components : {
      TitleSection , 
      CategorySection
    } , 
    setup() {
      const drawer = ref( true )
      return { drawer }
    },
  })
  </script>
  <style lang="scss">
</style>
  
  