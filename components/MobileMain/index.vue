<template>
    <div class="main-mobile-parent">
      <TitleSection />
      <CategorySection />
    </div>

</template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  import TitleSection from './components/TitleSection/index.vue'
  import CategorySection from './components/CategorySection/index.vue'
  export default defineComponent({
    components : {
      TitleSection , 
      CategorySection
    } , 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
</style>
  
  