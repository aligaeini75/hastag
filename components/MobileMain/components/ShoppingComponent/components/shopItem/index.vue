<template>
  <div class="shop-item-content-mobile">
    <div class="left-si">
      <div class="parent-red-close">
        <img src="/images/red-close.svg" @click="remove(i.id)" />
      </div>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 7px;
          width: 80px;
          height: 35px;
          margin-bottom: 4px;
        "
      >
        <div
          style="
            width: 27px;
            height: 27px;
            border-radius: 7px;
            background-color: white;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            src="/images/add-mobile.svg"
            style="width: 24px; height: 24px; cursor: pointer"
            @click="count = count + 1"
          />
        </div>
        <input
          style="-webkit-appearance: none; width: 10px; font-weight: bold"
          v-model="count"
        />
        <div
          style="
            width: 27px;
            height: 27px;
            border-radius: 7px;
            background-color: white;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            src="/images/minus.svg"
            style="width: 24px; height: 24px; cursor: pointer"
            @click="count > 1 ? (count = count - 1) : remove(i.id)"
          />
        </div>
      </div>
    </div>
    <div class="right-si">
      <div class="detail-section-si">
        <div class="top-si">{{ i.title }}</div>
        <div class="bottom-sis">
          <div class="category-parent-si">
            <div class="category-item-si">
              <span>{{ i.category_title }}</span>
            </div>
          </div>
          <img
            v-if="i.social_type == 'Telegram'"
            src="/images/telegram-shopping.svg"
          />
          <img v-else src="/images/afterOrder/instagram-blue.svg" />
        </div>
      </div>
      <div class="image-section-si">
        <img src="/images/content/avatar.svg" />
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import {
  shoppedItem,
  setShoppedItem,
  setchangeShopItem,
  changeShopItem,
  apiShopItems,
  setApiItemShops,
} from "../../../../../../composition/Basket/index";
import { uuid, setUuid } from "../../../../../../composition/Basket/index";
import BasketDataService from "../../../../../../services/BasketDataService";
export default defineComponent({
  components: {},
  props: {
    i: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const count = ref(props.i.number);
    const test = () => {
      console.log("test");
    };
    watch(changeShopItem, (value) => {
      count.value = props.i.number;
    });
    watch(count, async (value) => {
      let index = shoppedItem.value.findIndex((x) => x.id == props.i.id);
      if (index >= 0) {
        let temp = shoppedItem.value;
        temp[index].number = value;
        setShoppedItem(temp);
        setchangeShopItem();
        const { data } = await BasketDataService.updateItems(uuid.value, temp);
        setUuid(data.data.uuid);
        localStorage.setItem("uuid", data.data.uuid);
        if (data) {
          const BasketItems = await BasketDataService.getItems(uuid.value);
          setApiItemShops(BasketItems.data.data.basket);
        }
      }
      console.log("api shopped items shopped : ", apiShopItems.value);
    });
    const remove = async (id) => {
      console.log("id : ", id);
      let temp = shoppedItem.value;
      temp = temp.filter((x) => x.id != id);
      setShoppedItem(temp);
      const { data } = await BasketDataService.updateItems(uuid.value, temp);
      setUuid(data.data.uuid);
      localStorage.setItem("uuid", data.data.uuid);
      if (data) {
        const BasketItems = await BasketDataService.getItems(uuid.value);
        setApiItemShops(BasketItems.data.data.basket);
      }
      console.log("api shopped items shopped : ", apiShopItems.value);
    };
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    return {
      toFarsiNumber,
      count,
      shoppedItem,
      remove,
      test,
    };
  },
});
</script>
<style scoped lang="scss">
.shop-item-content-mobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 64px;
  border-radius: 10px;
  padding: 8px;
  background-color: #f0f0f0;
  .right-si {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
    .image-section-si {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        width: 37px;
        height: 37px;
      }
    }
    .detail-section-si {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .top-si {
        font-size: 12px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
      }
      .bottom-sis {
        display: flex;
        flex-direction: row;
        justify-content: flex-end !important;
        gap: 8px;
        img {
          width: 19px;
          height: 19px;
        }
        .category-parent-si {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          gap: 8px;
          .category-item-si {
            width: fit-content !important;
            height: 21px;
            padding: 4px;
            border-radius: 25px;
            background-color: white;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            span {
              font-size: 12px;
              font-weight: 300;
              line-height: 19px;
              letter-spacing: 0em;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .left-si {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .parent-red-close {
      width: 28px;
      height: 28px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background-color: white;
      border-radius: 7px;
    }
  }
}
</style>
