<template>
    <div class="main-parent">
        <div class="filter-section">
          <Filters />
        </div>
        <div class="content-section">
          <Content />
        </div>
        <div class="category-section">
          <Catgeory />
        </div>
        <div class="side">
          <SideMenu />
        </div>
    </div>

</template>
  
  <script>
  import { defineComponent} from '@nuxtjs/composition-api'
  import Filters from '../Filter/index.vue'
  import SideMenu from '../SideMenu/index.vue'
  import Catgeory from '../Category/index.vue'
  import Content from '../Content/index.vue'
  export default defineComponent({
    components : {
      Filters , 
      SideMenu , 
      Catgeory , 
      Content
    } , 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
  .main-parent {
    background-color: #F5F5F5;
    display: flex ;
    flex-direction: row ;
    width: 100vw;
    height: fit-content;
    .filter-section {
        display: flex ;
        flex-grow: 5 ;
        padding-top: 8px;
    }
    .content-section {
        display: flex ;
        flex-grow: 10 ;
        padding-top: 24px;
    }
    .category-section {
      padding-top: 8px;
        display: flex ;
        flex-direction: row;
        justify-content: center;
        flex-grow: .3 ;
    }
    .side {
        display: flex ;
        flex-grow: 2;
        background-color: white;
    }
  }
</style>
  
  