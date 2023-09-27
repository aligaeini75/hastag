<template>
  <Main />
</template>

<script>
import { defineComponent  } from '@nuxtjs/composition-api'
import Main from '../components/Main/index.vue'

export default defineComponent({
  components : { Main } , 
  setup() {
    return { }
  },
})
</script>
<style>
</style>

