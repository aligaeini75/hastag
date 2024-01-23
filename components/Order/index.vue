<template>
  <div class="order-parent">
    <div class="order-filter-section">
      <OrderFactor />
    </div>
    <div class="order-content-section">
      <OrderContent />
    </div>
    <div class="order-side">
      <SideMenu />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import OrderFactor from "./OrderFactor/index.vue";
import SideMenu from "../SideMenu/index.vue";
import Catgeory from "../Category/index.vue";
import OrderContent from "../OrderContent/index.vue";
import BasketDataService from "../../services/BasketDataService";
import { setApiItemShops, apiShopItems } from "../../composition/Basket/index";
export default defineComponent({
  components: {
    OrderFactor,
    SideMenu,
    Catgeory,
    OrderContent,
  },
  setup() {
    onMounted(async () => {
      const BasketItems = await BasketDataService.getItems(
        localStorage.getItem("uuid")
      );
      setApiItemShops(BasketItems.data.data.basket);
    });
    return {};
  },
});
</script>
<style lang="scss">
.order-parent {
  background-color: #e4e4e4;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: fit-content;
  .order-filter-section {
    display: flex;
    flex-grow: 7;
    padding-top: 34px;
    padding-right: 25px;
    margin-left: 200px;
    width: 350px;
    max-width: 350px;
    margin-right: 30px;
  }
  .order-content-section {
    display: flex;
    flex-grow: 20;
    padding-top: 46px;
    margin-right: 160px;
    // max-width: 1100px;
  }
  .order-side {
    display: flex;
    flex-grow: 2;
    background-color: white;
    width: 170px;
    max-width: 100px;
  }
}
</style>
