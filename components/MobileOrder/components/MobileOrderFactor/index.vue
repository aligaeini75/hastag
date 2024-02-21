<template>
  <div class="order-factor-mobile-parent">
    <div class="title-item" v-for="item in titleItems">
      <div class="key">{{ item.key }}</div>
      <div class="value shabnam-bold">{{ item.value }}</div>
    </div>
    <div class="order-detail-count">
      <div
        class="order-detail-count-item"
        v-for="item in orderDetailCountItems"
      >
        <div class="order-detail-count-item-icon"><img :src="item.icon" /></div>
        <div class="order-detail-count-item-title shabnam-bold">
          {{ item.title }}
        </div>
      </div>
    </div>
    <!--  -->
    <div class="order-line"><img src="/images/order/order-line.svg" /></div>
    <!--  -->
    <div class="order-detail">
      <div class="order-detail-item" v-for="item in orderDetailItem">
        <div class="order-detail-item-key">{{ item.key }}</div>
        <div class="order-detail-item-value shabnam-bold">{{ item.value }}</div>
      </div>
      <img src="/images/order/order-detail-line.svg" />
      <div class="order-detail-item-with-checkbox">
        <div class="order-detail-item-with-checkbox-key">کد تخفیف:</div>
        <div class="order-detail-item-with-checkbox-value">
          <v-switch style="direction: ltr" label=""></v-switch>
        </div>
      </div>
      <div class="order-detail-takhfif-input">
        <input class="placeh" placeholder="کد تخفیف رو اینجا وارد کنین..." />
      </div>
      <img src="/images/order/order-detail-line.svg" />
      <div class="order-detail-item">
        <div class="order-detail-item-key">مبلغ نهایی:</div>
        <div class="order-detail-item-value shabnam-bold">
          {{ finalPrice() }}
        </div>
      </div>
    </div>
    <div class="checkboxes-parent">
      <div class="checkbox-section" v-for="item in checkboxes">
        <div class="checkbox-section-checkbox"></div>
        <div class="checkbox-section-title">{{ item.title }}</div>
      </div>
    </div>
    <div class="submit-button">پرداخت صورتحساب</div>
    <div class="description">
      قبل از پرداخت حتما از خاموش بودن فیلتر شکن اطمینان حاصل کنید.
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import { apiShopItems } from "../../../../composition/Basket/index";
export default defineComponent({
  components: {},
  setup() {
    const bardasht = ref(false);
    const maliat = ref(false);
    let members = 0;
    let visitNum = 0;
    let telegram = 0;
    let instagram = 0;
    let price = 0;
    let pack = 0;
    const titleItems = ref([
      {
        key: "تعداد تبلیغ ها:",
        value:
          apiShopItems.value && apiShopItems.value.length
            ? apiShopItems.value.length
            : 0,
      },
      { key: "دنبال کننده ها:", value: "20.000" },
      { key: "بازدید :", value: "13.000" },
    ]);
    const orderDetailItem = ref([
      { key: "مبلغ سفارش:", value: "90.000" },
      { key: "اعتبار:", value: 1000 },
      // { key: "مالیات:", value: "0%" },
    ]);
    const orderDetailCountItems = ref([
      { icon: "/images/order/telegram.svg", title: "5 کانال" },
      { icon: "/images/order/instagram.svg", title: "3 پیج" },
      { icon: "/images/order/package.svg", title: "2 پکیج" },
    ]);
    const checkboxes = ref([
      { title: "برداشت از اعتبار" },
      { title: "فاکتور رسمی میخواهم (+ 9 درصد مالیات)" },
    ]);
    const finalPrice = () => {
      let temp;
      if (bardasht.value == false) {
        if (maliat.value == true) {
          return price + price * 0.09;
        } else {
          return price;
        }
      } else {
        temp = price - orderDetailItem.value[1].value;
        if (maliat.value == true) {
          console.log("temp : ", temp);
          return temp + temp * 0.09;
        } else {
          return temp;
        }
      }
    };
    watch(maliat, (value) => {
      if (value == true) {
        orderDetailItem.value[2].value = "9%";
      } else {
        orderDetailItem.value[2].value = "0%";
      }
    });
    watch(apiShopItems, (value) => {
      members = 0;
      visitNum = 0;
      telegram = 0;
      instagram = 0;
      price = 0;
      pack = 0;
      console.log("value : ", value);
      titleItems.value[0].value = apiShopItems.value.length;
      for (var i = 0; i < value.length; i++) {
        console.log("value : ", value[i]);
        members += Number(value[i].members);
        visitNum += Number(value[i].story_visit_num);
        price += value[i].price;
        if (value[i].social == "Telegram") {
          telegram += 1;
        }
        if (value[i].social == "Instagram") {
          instagram += 1;
        }
      }
      titleItems.value[1].value = members;
      titleItems.value[2].value = visitNum;
      orderDetailCountItems.value[0].title = ` ${telegram} کانال`;
      orderDetailCountItems.value[1].title = ` ${instagram} پیج`;
      orderDetailCountItems.value[2].title = ` ${telegram} پکیج`;
      orderDetailItem.value[0].value = price;
    });
    return {
      checkboxes,
      titleItems,
      orderDetailCountItems,
      orderDetailItem,
      bardasht,
      maliat,
      finalPrice,
    };
  },
});
</script>
<style scoped lang="scss">
.shabnam-bold {
  font-family: ShabnamLight !important;
}
.order-factor-mobile-parent {
  width: 370px;
  height: 910px;
  border-radius: 8px;
  background-color: white;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 24px;
  padding: 29px;
  .title-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    direction: rtl;
    .key {
      font-size: 18px;
      font-weight: 300;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: right;
    }
    .value {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .order-detail-count {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 278.01px;
    height: 32.57px;
    border-radius: 50px;
    background-color: #f0f0f0;
    align-items: center;
    padding: 12px;
    direction: rtl;
    .order-detail-count-item {
      display: flex;
      flex-direction: row;
      gap: 8px;
      .order-detail-count-item-icon {
        width: 23px;
        height: 23px;
        border-radius: 50px;
      }
      .order-detail-count-item-title {
        font-size: 17px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: right;
        color: #000000;
      }
    }
  }
  .order-line {
    align-self: center;
    padding: 0 !important;
  }
  .order-detail {
    width: 299.81px;
    height: 357.46px;
    border-radius: 13px;
    background-color: #f0f0f0;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    direction: rtl;
    gap: 16px;
    .order-detail-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      .order-detail-item-key {
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: right;
        color: #000000;
      }
      .order-detail-item-value {
        font-size: 22px;
        font-weight: 500;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        color: #000000;
      }
    }
    .order-detail-item-with-checkbox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30px;
      .order-detail-item-with-checkbox-key {
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: right;
        color: #000000;
      }
      .order-detail-item-with-checkbox-value {
      }
    }
    .order-detail-takhfif-input {
      width: 251.28px;
      height: 56.26px;
      border-radius: 10px;
      background-color: white;
      align-self: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px !important;
      font-weight: 700;
      .placeh::placeholder {
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #878787;
      }
      input {
        all: unset;
        width: 100%;
        padding-right: 16px;
      }
    }
  }
  .checkboxes-parent {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: flex-start;
    direction: rtl;
    .checkbox-section {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      .checkbox-section-checkbox {
        width: 25px;
        height: 25px;
        border-radius: 7px;
        background-color: #e4e4e4;
      }
      .checkbox-section-title {
        font-size: 15px;
        font-weight: 300;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #404040;
      }
    }
  }
  .submit-button {
    width: 299.81px;
    height: 55.34px !important;
    border-radius: 13px;
    align-self: center;
    background-color: #58a65c;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }
  .description {
    direction: rtl;
    font-size: 16px;
    height: 5px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
    color: #878787;
    margin-top: -8px;
  }
}
</style>
