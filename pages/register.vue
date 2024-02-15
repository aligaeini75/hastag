<template>
  <div class="main">
    <div class="content">
      <HeaderWithoutRegister class="px-16p" />
      <RegisterBox class="mt-25p" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import HeaderWithoutRegister from "../components/Header/components/withoutLoginHeader/index.vue";
import RegisterBox from "../components/Register/index.vue";

export default defineComponent({
  components: { HeaderWithoutRegister, RegisterBox },
  layout: "emptyLayout",
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
<style scoped>
.main {
  background: #f0f0f0;
  widt: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.main .content {
  width: 100%;
  max-width: 467px;
  margin: auto;
}
.mt-25p {
  margin-top: 25px;
}
.px-16p {
  padding: 0 16px;
}
@media (max-width: 768px) {
  .content {
    padding: 16px;
  }
}
</style>
