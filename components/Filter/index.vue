<template>
  <div class="filter-parent" v-if="reRender">
    <platformFilter />
    <Hr />
    <Marks />
    <Hr />
    <Rnage title="قیمت" />
    <Rnage title="تعداد کاربر" />
    <Rnage title="حدود بازدید" />
    <Hr />
    <Calender />
    <div style="height: 370px; width: 10px"></div>
    <Hr />
    <FilterName />
  </div>
</template>

<script>
import { defineComponent, ref, nextTick, watch } from "@nuxtjs/composition-api";
import platformFilter from "./components/platformFilter/index.vue";
import Marks from "./components/Marks/index.vue";
import Rnage from "./components/Range/index.vue";
import Calender from "./components/Calender/index.vue";
import SecretMedia from "./components/SecretMedia/index.vue";
import FilterName from "./components/FilterName/index.vue";
import Hr from "../Hr/index.vue";
import { extremum } from "../../composition/Channels/index";
import { cancleFilter } from "../../composition/Filter/index";
export default defineComponent({
  components: {
    platformFilter,
    Marks,
    Rnage,
    Calender,
    SecretMedia,
    FilterName,
    Hr,
  },
  setup() {
    const reRender = ref(true);
    const forceRerender = () => {
      reRender.value = false;
      nextTick(() => {
        reRender.value = true;
      });
    };
    watch(cancleFilter, (value) => {
      forceRerender();
    });
    return { extremum, reRender, forceRerender };
  },
});
</script>
<style lang="scss">
.filter-parent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 10px;
}
</style>
