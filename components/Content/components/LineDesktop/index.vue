<template>
            <div class="line-desktop">
                <div class="line-section"></div>
                <span class="span">سوالات متداول</span>
                <div class="line-section"></div>
            </div>
</template>
  
  <script>
  import { defineComponent } from "@nuxtjs/composition-api";
  export default defineComponent({
    components : { }, 
    setup() {
      return {  }
    },
  })
  </script>
  <style lang="scss">
  .line-desktop {
        display: flex ; 
        flex-direction: row;
        justify-content: space-around ;
        align-items: center ;
        margin-top: 72px;
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
  </style>
  
  