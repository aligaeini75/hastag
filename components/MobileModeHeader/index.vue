<template>
  <div class="header-parent">
    <div class="left-section">
      <img
        src="/images/mobileImages/mobile-images-menu.svg"
        style="width: 30px; height: 30px"
        @click="setNavigationDrawer()"
      />
      <img
        src="/images/mobileImages/mobile-images-search.svg"
        style="width: 30px; height: 30px"
      />
      <div
        style="
          border-radius: 8px;
          width: 30px;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
        "
        @click="
          apiShopItems && apiShopItems.length
            ? setShoppingSection(!shoppingSection)
            : null
        "
      >
        <img src="/images/shopping.svg" style="width: 20px; height: 20px" />
      </div>
    </div>
    <div class="right-section">
      <div class="icon-box">
        <div class="hashtag">
          <img
            src="/images/Hashtag-text.svg"
            style="margin-top: 2px; width: 63px; height: 14px"
          />
          <img
            src="/images/Hashtag-icon.svg"
            style="width: 21px; height: 24px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  ref,
  useRoute,
  name,
} from "@nuxtjs/composition-api";
import { shoppedItem, apiShopItems } from "../../composition/Basket/index";
import {
  shoppingSection,
  setShoppingSection,
} from "../../composition/content/Header/index";
import {
  navigationDrawer,
  setNavigationDrawer,
} from "../../composition/content/NavigationDrawer/index";
export default defineComponent({
  setup() {
    const name = ref("ali");
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    return {
      setNavigationDrawer,
      toFarsiNumber,
      name,
      shoppingSection,
      setShoppingSection,
      apiShopItems,
    };
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: YekanBakh-Regular-woff;
}
.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
  background: #f5f5f5;
}
.theme--dark.v-icon {
  color: #404040;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  background-color: #f5f5f5;
  border-radius: 13px;
  width: 290px;
  height: 40px;
  margin-top: 8px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 48px;
  padding: 0;
  margin-top: 16px;
}
.v-application--is-ltr .v-text-field .v-label {
  transform-origin: top left;
  color: #404040;
}
.header-parent {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-bottom: 0.5px solid #878787;
  height: 100px;
  .left-section {
    display: flex;
    flex-direction: row;
    // background-color: red;
    margin-left: 0;
    align-items: center;
    justify-content: left;
  }
  .right-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .icon-box {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      .hashtag {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
      .menu-icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.img-icon {
  width: 20px;
  height: 20px;
}
</style>
