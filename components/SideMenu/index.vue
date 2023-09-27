<template>
    <div class="side-menu-parent">
        <img src="images/side/side-menu-1.svg" />
        <img src="images/side/side-menu-2.svg" />
        <img src="images/side/side-menu-3.svg" />
        <img src="images/side/side-menu-4.svg" />
        <img src="images/side/side-menu-5.svg" />
    </div>
  </template>
  
  <script>
  export default {
    components : {
       
    } ,
    data () {
      return { }
    }
  }
  </script>
  <style lang="scss">
    .side-menu-parent {
        display: flex; 
        margin-right: 16px;
        padding-top: 16px;
        flex-direction: column ;
        align-items: center;
        gap: 16px ;
        width: 100%;
        img {
            width: 40px;
            height: 40px;
        }

    }
  </style>
  