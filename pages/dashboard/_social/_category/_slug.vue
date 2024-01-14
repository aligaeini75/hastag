<template>
  <div v-if="!isMobile()">
    <Main />
  </div>
  <div v-else>
    <MobileMain />
  </div>
  <!--  -->
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Main from "../../../../components/Main/index.vue";
import MobileMain from "../../../../components/MobileMain/index.vue";

export default defineComponent({
  components: { Main },
  setup() {
    const isMobile = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    };
    return { isMobile };
  },
});
</script>
<style>
.vpd-actions {
  display: none;
}
</style>
