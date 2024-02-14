<template>
  <div class="after-order-parent">
    <div class="after-order-content">
      <Dialog />
      <BannerDialog />
      <Info />
      <ItemSelected
        v-if="TelegramItems"
        :key="key1"
        header-color="#34AADF"
        mode="telegram"
        title="تبلیغ در تلگرام"
        ids="1"
        :items="TelegramItems"
      />
      <ItemSelected
        v-if="InstagramItems"
        :key="key2"
        header-color="linear-gradient(169deg, #DFAF34 -24.75%, #DC34DF 158.25%)"
        mode="instagram"
        title="تبلیغ در اینستگرام"
        ids="2"
        :items="InstagramItems"
      />
      <FurtherInformation />
    </div>

    <div class="after-order-side">
      <SideMenu />
    </div>
  </div>
  <!--  -->
  <!--  -->
</template>

<script>
import { defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import SideMenu from "../SideMenu/index.vue";
import Info from "./components/Info/index.vue";
import ItemSelected from "./components/ItemSelected/index.vue";
import FurtherInformation from "./components/FurtherInformation/index.vue";
import Dialog from "./components/Dialog/index.vue";
import BannerDialog from "./components/BannerDialog/index.vue";
import BasketDataService from "../../services/BasketDataService";
import { apiShopItems, setApiItemShops } from "../../composition/Basket/index";
export default defineComponent({
  components: {
    SideMenu,
    Info,
    ItemSelected,
    FurtherInformation,
    Dialog,
    BannerDialog,
  },
  setup() {
    const TelegramItems = ref(null);
    const InstagramItems = ref(null);
    onMounted(async () => {
      const BasketItems = await BasketDataService.getItems(
        localStorage.getItem("uuid")
      );
      setApiItemShops(BasketItems.data.data.basket);
      console.log("apiShopItems : ", apiShopItems);
      TelegramItems.value = apiShopItems.value.filter(
        (x) => x.social == "Telegram"
      );
      InstagramItems.value = apiShopItems.value.filter(
        (x) => x.social == "Instagram"
      );
    });
    return { apiShopItems, TelegramItems, InstagramItems };
  },
});
</script>
<style lang="scss">
.after-order-parent {
  background-color: #e4e4e4;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: fit-content;
  .after-order-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
  }
  .after-order-side {
    display: flex;
    background-color: white;
    width: 170px;
    max-width: 100px;
  }
}
</style>
