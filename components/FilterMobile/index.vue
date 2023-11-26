  <template>
    <div class="filter-parent">
        <platformFilter />
        <Hr />
        <Marks />
        <Hr />
        <Rnage title="قیمت"/>
        <Rnage title="تعداد کاربر"/>
        <Rnage title="حدود بازدید"/>
        <Hr />
        <Calender />
        <div style="height: 400px;width: 10px;"></div>
        <Hr />
        <SecretMedia />
        <Hr />
        <FilterName />
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from '@nuxtjs/composition-api'
  import platformFilter from './components/platformFilter/index.vue'
  import Marks from './components/Marks/index.vue'
  import Rnage from './components/Range/index.vue'
  import Calender from './components/Calender/index.vue'
  import SecretMedia from './components/SecretMedia/index.vue'
  import FilterName from './components/FilterName/index.vue'
  import Hr from '../Hr/index.vue'
  export default defineComponent({
    components : {
      platformFilter , 
      Marks , 
      Rnage , 
      Calender , 
      SecretMedia , 
      FilterName , 
      Hr
    }, 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
  @media screen and (max-width: 700px){
    .filter-parent {
        display: flex ;
        flex-direction: column ;
        width: 90vw;
        height: 100%;
  }
  }

  
  </style>
  
  