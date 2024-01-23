<template>
  <div class="shopping" id="style-1" v-if="shoppingSection">
    <div class="title">
      <img
        src="/images/shopping-close-icon.svg"
        @click="setShoppingSection(false)"
      />
      <span>سبد خرید</span>
      <!--  -->
    </div>
    <div class="shop-item-parent">
      <ShopItem v-for="(i, index) in apiShopItems" :i="i" :key="index" />
    </div>
    <div class="shopping-result" v-if="apiShopItems && apiShopItems.length">
      <div class="right">
        <div class="button" @click="redirectToOrder()">نهایی کردن تبلیغ</div>
      </div>
      <div class="left">
        <div class="top">هزینه نهایی:</div>
        <div class="bottom" style="direction: rtl">{{ final }} هزارتومان</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  useRouter,
  useRoute,
} from "@nuxtjs/composition-api";
import {
  shoppedItem,
  changeShopItem,
  apiShopItems,
} from "../../../../composition/Basket/index";
import ShopItem from "./components/shopItem/index.vue";
import {
  shoppingSection,
  setShoppingSection,
} from "../../../../composition/content/Header/index";
export default defineComponent({
  components: { ShopItem },
  setup() {
    const sumPrice = ref(0);
    const final = ref(0);
    const router = useRouter();
    const redirectToOrder = () => {
      router.push("order");
    };
    const getSum = () => {
      sumPrice.value = 0;
      for (var x = 0; x < apiShopItems.value.length; x++) {
        sumPrice.value +=
          apiShopItems.value[x].advertise_plan[0].price *
          apiShopItems.value[x].count;
      }
      return sumPrice.value;
    };
    watch(changeShopItem, (value) => {
      console.log("shopedItem changed  : ", value);
      final.value = getSum();
    });
    watch(apiShopItems, (value) => {
      final.value = getSum();
    });
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    return {
      setShoppingSection,
      shoppingSection,
      toFarsiNumber,
      shoppedItem,
      getSum,
      final,
      apiShopItems,
      redirectToOrder,
    };
  },
});
</script>
<style scoped lang="scss">
#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9e9e9e;
}
.shopping {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  transition: all 0.4s;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 16px;
  position: absolute;
  top: 100px;
  left: 83px;
  z-index: 100;
  width: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: right;
    }
  }
  .shop-item-parent {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }
  .shopping-result {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 20px;
    .right {
      .button {
        width: 170px;
        height: 45px;
        border-radius: 10px;
        background-color: #58a65c;
        margin: 0 auto;
        font-size: 17px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 0em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: right;
        color: white;
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      gap: 1px;
      .top {
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: right;
        direction: rtl;
      }
      .bottom {
        font-size: 22px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: right;
      }
    }
  }
}
</style>
