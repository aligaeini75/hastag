<template>
    <div class="hr-parent">
      <div class="hr"></div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from '@nuxtjs/composition-api'
  export default defineComponent({
    components : {

    }, 
    setup() {
      return { }
    },
  })
  </script>
  <style lang="scss">
  .hr-parent {
    width: 70%;
    display: flex ;
    flex-direction: row ;
    justify-content: center;
    .hr {
      display: flex ;
      width: 90% ;
      height: 1px;
      border-radius: 50% ;
      background-color: #ADADAD;
      align-self: center;
      margin-top: 32px;
  }
  }
  </style>
  
  