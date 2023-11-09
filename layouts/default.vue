<template>
  <v-app>
    <div v-if="!isMobile()">
      <Header />
    </div>
    <div>
      <!-- <MobileModeHeader /> -->
    </div>
        
        <Nuxt />
  </v-app>
</template>

<script>
import Header from '../components/Header/index.vue'
import MobileModeHeader from '../components/MobileModeHeader/index.vue'
export default {
  name: 'DefaultLayout',
  components : {
   Header   , 
   MobileModeHeader
  } ,
  data () {
    return { MobileModeHeader }
  } , 
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
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
