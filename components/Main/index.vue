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
    background-color: #e4e4e4;
    display: flex ;
    flex-direction: row ;
    width: 100vw;
    height: fit-content;
    .filter-section {
        display: flex ;
        flex-grow: 7 ;
        padding-top: 34px;
        padding-right: 25px;
        padding-left: 70px;
        width: 350px;
        margin-right: 10px;
    }
    .content-section {
        display: flex ;
        flex-grow: 20 ;
        padding-top: 46px;
        padding-right: 35px;
        max-width: 1100px;
    }
    .category-section {
      padding-top: 23px;
        display: flex ;
        flex-direction: row;
        justify-content: center;
        flex-grow: 1 ;
        max-width: 300px;
    }
    .side {
        display: flex ;
        flex-grow: 2;
        background-color: white;
        width: 97px;
    }
  }
</style>
  
  