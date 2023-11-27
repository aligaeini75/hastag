<template>
    <div v-if="!isMobile()">
        <Order/>
    </div>
    <div v-else>
        <MobileOrder/>
    </div>
    
  </template>
  
  <script>
  import { defineComponent  } from '@nuxtjs/composition-api'
  import Order from '../components/Order/index.vue'
  import MobileOrder from '../components/MobileOrder/index.vue'
  
  export default defineComponent({
    components : { Order , MobileOrder  } , 
    layout: 'orderLayout',
    setup() {
      const isMobile = () =>  {
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
          } else {
            return false
          }
   }
      return { isMobile }
    },
  })
  </script>
  <style>
  .vpd-actions {
    display: none;
  }
  </style>
  
  