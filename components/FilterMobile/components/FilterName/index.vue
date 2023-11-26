<template>
    <div class="filter-name-parent">
        <div class="filter-name">
            <input placeholder="اسم فیلتر" />
        </div>
        <div class="filter-button">
            <span>ذخیره فیلتر</span>
            <img src="images/filter-tick.svg" />
            
        </div>
    </div>
</template>
  
  <script>
  import { defineComponent , ref } from '@nuxtjs/composition-api'
  export default defineComponent({
  components : {
    
  }, 
  setup( ) {
    return { }
  },
  })
  </script>
  <style lang="scss">
  .filter-name-parent {
    display: flex ;
    flex-direction: column;
    gap: 8px;
    width: 90%;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 16px;
    .filter-name {
        width: 100% ;
        padding: 8px ;
        border: 0.5px solid #888888;
        border-radius: 8px ;
        height: 50px;
        display: flex;
        flex-direction: row ;
        justify-content: flex-end ;
        align-items: center;
        input {
            text-align: right;
        }
    }
    .filter-button {
        width: 100% ;
        padding: 8px ;
        border: 0.5px solid #888888;
        border-radius: 8px ;
        height: 50px;
        display: flex;
        flex-direction: row ;
        gap: 8px;
        justify-content: center ;
        align-items: center;
        background-color: #ffffff;
        border: .5px solid #5E7DBE;
        color: #5E7DBE;
        svg {
            fill: #5E7DBE;
        }
        span {
            font-weight: bold;
        }

    }
  }
  
  </style>
  
  