<template>
    <div class="side-menu-parent">
        <img src="images/side/side-menu-1.svg" />
        <img src="images/side/side-menu-2.svg" />
        <img src="images/side/side-menu-3.svg" />
        <img src="images/side/side-menu-4.svg" />
        <img src="images/side/side-menu-5.svg" style="margin-top: 46px;" />
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
        padding-top: 50px;
        flex-direction: column ;
        align-items: center;
        gap: 20px ;
        width: 100%;
        img {
            width: 30px;
            height: 30px;
        }

    }
  </style>
  