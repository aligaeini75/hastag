<template>
  <div class="column">
    <Save />
    <Share />
    <InfoSection />
    <TitleSection />
    <Buttons />
    <!-- <Shopping /> -->
    <v-overlay @click="removeCalenderDatePicker()" :value="calenderPopupStatus">
    </v-overlay>
    <div class="calender-parent1" v-if="calenderPopupStatus">
      <VuePersianDatetimePicker />
    </div>
    <ItemDiffrentIcon
      v-if="apiShopItems && apiShopItems.length > 0"
      v-for="(x, index) in apiShopItems && apiShopItems.length
        ? apiShopItems.filter(
            (m) =>
              (m.title.includes(orderSearch) ||
                m.category_title.includes(orderSearch)) &&
              (social == null || m.social == social)
          )
        : apiShopItems"
      :key="index"
      :item="x"
      :id="x.id"
    />
    <SuggestionTitle />
    <Item />
    <Item />
    <Item />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import VuePersianDatetimePicker from "../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue";
import {
  calenderPopupStatus,
  setCalenderPopupStatus,
} from "../../composition/content/calender/index.js";
import InfoSection from "./Components/InfoSection/index.vue";
import TitleSection from "./Components/TitleSection/index.vue";
import Buttons from "./Components/Buttons/index.vue";
import Shopping from "../../components/Content/components/ShoppingComponent/index.vue";
import Item from "./Components/Item/index.vue";
import ItemDiffrentIcon from "./Components/ItemDiffrentIcon/index.vue";
import SuggestionTitle from "./Components/SuggestionTitle/index.vue";
import { apiShopItems } from "../../composition/Basket/index";
import { orderSearch, social } from "../../composition/Order/index";
import Save from "../../components/OrderContent/Components/Save/index.vue";
import Share from "../../components/OrderContent/Components/Share/index.vue";
export default defineComponent({
  components: {
    Shopping,
    VuePersianDatetimePicker,
    InfoSection,
    TitleSection,
    Buttons,
    Item,
    SuggestionTitle,
    ItemDiffrentIcon,
    Save,
    Share,
  },
  setup() {
    const removeCalenderDatePicker = () => {
      setCalenderPopupStatus(false);
    };
    return {
      removeCalenderDatePicker,
      calenderPopupStatus,
      setCalenderPopupStatus,
      apiShopItems,
      orderSearch,
      social,
    };
  },
});
</script>
<style lang="scss">
.calender-parent1 {
  width: 100vw;
  height: 100vh;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
