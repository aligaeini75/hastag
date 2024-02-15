<template>
  <div class="main-mobile-parent" style="background-color: #e4e4e4 !important">
    <CalenderStatus />
    <TitleSection />
    <CategorySection />
    <Shopping />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "@nuxtjs/composition-api";
import TitleSection from "./components/TitleSection/index.vue";
import CategorySection from "./components/CategorySection/index.vue";
import CalenderStatus from "../../components/Content/components/calenderStatus/index.vue";
import BasketDataService from "../../services/BasketDataService";
import Shopping from "./components/ShoppingComponent/index.vue";
import {
  setApiItemShops,
  apiShopItems,
  setShoppedItem,
  changeShopItem,
} from "../../composition/Basket/index";
export default defineComponent({
  components: {
    TitleSection,
    CategorySection,
    CalenderStatus,
    Shopping,
  },
  setup() {
    const drawer = ref(true);
    onMounted(async () => {
      if (localStorage.getItem("uuid")) {
        const BasketItems = await BasketDataService.getItems(
          localStorage.getItem("uuid")
        );
        setApiItemShops(BasketItems.data.data.basket);
        setShoppedItem(BasketItems.data.data.basket);
      }
    });
    return { drawer };
  },
});
</script>
<style lang="scss"></style>
