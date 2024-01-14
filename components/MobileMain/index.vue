<template>
  <div class="main-mobile-parent" style="background-color: #e4e4e4 !important">
    <CalenderStatus />
    <TitleSection />
    <CategorySection />
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import TitleSection from "./components/TitleSection/index.vue";
import CategorySection from "./components/CategorySection/index.vue";
import CalenderStatus from "../../components/Content/components/calenderStatus/index.vue";
export default defineComponent({
  components: {
    TitleSection,
    CategorySection,
    CalenderStatus,
  },
  setup() {
    const drawer = ref(true);
    return { drawer };
  },
});
</script>
<style lang="scss"></style>
