<template>
  <div v-if="!isMobile()">
    <AfterOrder />
  </div>
  <div v-else>
    <AfterOrderMobile />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import AfterOrder from "../components/AfterOrder/index.vue";
import AfterOrderMobile from "../components/AfterOrderMobile";

export default defineComponent({
  components: { AfterOrder, AfterOrderMobile },
  layout: "orderLayout",
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
