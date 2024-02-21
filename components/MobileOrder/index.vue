<template>
  <div class="mobile-order-parent">
    <InfoSection />
    <MobileOrderFactor />
    <TitleSection />
    <MobileButtons />
    <Items />
    <SuggestionTitle />
    <SuggestionItems />
  </div>
</template>

<script>
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import InfoSection from "./components/MobileOrderInfoSection/index.vue";
import MobileOrderFactor from "./components/MobileOrderFactor/index.vue";
import TitleSection from "./components/MobileOrderTitleSection/index.vue";
import MobileButtons from "./components/MobileOrderButtons/index.vue";
import Items from "./components/MobileOrderItems/index.vue";
import SuggestionTitle from "./components/MobileOrderSuggestionTitle/index.vue";
import SuggestionItems from "./components/MobileOrderSuggestionItems/index.vue";
import BasketDataService from "../../services/BasketDataService";
import { setApiItemShops } from "../../composition/Basket";
export default defineComponent({
  components: {
    MobileButtons,
    InfoSection,
    MobileOrderFactor,
    TitleSection,
    Items,
    SuggestionTitle,
    SuggestionItems,
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
<style scoped lang="scss">
.mobile-order-parent {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 30px;
}
</style>
