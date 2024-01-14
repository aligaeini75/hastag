<template>
    <div class="box-parent" @click="changeBoxParent()" >
        <div class="box-title">
            <img style="fill: #363A3F;" :src="!boxParent ? '/images/arrow-right.svg' : '/images/arrow-up.svg'" />
            <span>{{ title }}</span>
        </div>
        <div v-if="boxParent" style="text-align: right;padding: 16px;">{{ des }}</div>
    </div>

    
</template>
  
  <script>
  import { defineComponent, ref  } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {}, 
    props: {
        title: {
          type: String,
          required: true,
        },
        des: {
          type: String,
          required: true,
        }
    } , 
    setup() {

        const boxParent = ref( false )     
        const changeBoxParent = () => {
            boxParent.value = !boxParent.value
        }
      return { boxParent , changeBoxParent  }
    },
  })
  </script>
  <style lang="scss">
    .box-parent {
        margin-top: 1px;
        height: fit-content ;
        background-color: white ;
        display: flex ;
        flex-direction: column ;
        border-radius: 13px;
    }
    .box-title {
        display: flex ;
        padding: 16px;
        flex-direction: row ;
        align-items: center;
        justify-content: space-between ;
        height: 54px ;
        width: 100%;
        background-color: white ;
        border-radius: 13px;
        span {
            color: #404040;
            font-size: 18px;
            font-weight: 700;
        }
    }
  </style>
  
  