<template>
  <v-app>
        <Header />
        <Nuxt />
  </v-app>
</template>

<script>
import Header from '../components/Header/index.vue'
export default {
  name: 'DefaultLayout',
  components : {
   Header  
  } ,
  data () {
    return { }
  }
}
</script>
<style>
input { outline: none; }
body {
  font-family: YekanBakh ;
}
html {
  /* overflow: hidden; */
}
</style>
