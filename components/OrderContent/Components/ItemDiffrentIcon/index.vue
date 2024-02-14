<template>
  <div class="content-parent-desktop">
    <div class="channels-parent">
      <div
        v-if="advertiseTypeBoxTop"
        class="advertise-box"
        :id="`advertise${id}`"
        :style="{
          top: `${advertiseTypeBoxTop + 60}px`,
          left: `${advertiseTypeBoxLeft}px`,
        }"
      >
        <div
          class="advertise-box-item"
          v-for="(x, index) in item.advertise_plan"
          style="cursor: pointer"
          @click="
            () => {
              advertseplanIndex = index;
              selectedAdvertiseType = item.advertise_plan[index].title;
              advertiseTypeBoxTop = null;
            }
          "
        >
          {{ x.title }}
        </div>
      </div>
      <div class="channels">
        <div class="leftsd">
          <img
            src="/images/order/close.svg"
            @click="removeShoppedItem()"
            style="cursor: pointer"
          />
        </div>
        <div class="right">
          <div class="section3-parent">
            <div class="section3">
              <div class="section3_1">
                <div
                  class="section3_1_2"
                  @click="openAdvertiseType(`mm${id}`)"
                  :id="`mm${id}`"
                >
                  <span>نوع تبلیغ:</span>
                  <div class="button-section-parent-select">
                    <span>{{
                      selectedAdvertiseType
                        ? selectedAdvertiseType.replace("پکیج -", "")
                        : item.advertise_plan[0].title.replace("پکیج -", "")
                    }}</span>
                    <img src="/images/order/arrow-down.svg" />
                  </div>
                </div>
                <div class="section3_1_2">
                  <span>تعداد تبلیغ:</span>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: center;
                      background-color: white;
                      border-radius: 7px;
                      width: 91.6px;
                      height: 29.77px;
                      margin-bottom: 4px;
                    "
                  >
                    <img
                      src="/images/add-mobile.svg"
                      style="width: 24px; height: 24px"
                      @click="count++"
                    />
                    <input
                      style="
                        -webkit-appearance: none;
                        width: 10px;
                        font-weight: bold;
                      "
                      :value="toFarsiNumber(count)"
                    />
                    <img
                      src="/images/minus.svg"
                      style="width: 24px; height: 24px"
                      @click="count > 0 ? count-- : 0"
                    />
                  </div>
                </div>
              </div>
              <div class="section3_2">
                <span>هزینه نهایی:</span>
                <span class="bold" style="font-size: 1.2em">
                  {{
                    item.advertise_plan
                      ? toFarsiNumber(
                          item.advertise_plan[advertseplanIndex].price * count
                        ) +
                        "&nbsp;" +
                        "تومان"
                      : toFarsiNumber(0)
                  }}
                </span>
              </div>
            </div>
            <div class="section3-calender">
              <span>تقویم روز</span>
              <img
                src="/images/content/calendar.svg"
                @click="setCalenderPopupStatus(true)"
              />
            </div>
          </div>
          <div class="section2-parent">
            <div class="section2">
              <div class="section2_1">
                <div class="section2_1_1">
                  <span style="color: #9e9e9e"> اطلاعات </span>
                  <span style="color: #9e9e9e">کلیدی</span>
                </div>
                <div class="section2_1_1">
                  <span> تعداد کاربر: </span>
                  <span class="bold">{{
                    item.members
                      ? Number(item.members) >= 1000000
                        ? (Number(item.members) / 1000000).toFixed(0) + "M"
                        : Number(item.members) >= 1000
                        ? (Number(item.members) / 1000).toFixed(0) + "K"
                        : item.members
                      : "----"
                  }}</span>
                </div>
              </div>
              <div class="section2_2">
                <div class="section2_1_2">
                  <span>حدود بازدید:</span>
                  <span class="bold">
                    {{
                      item.story_visit_num
                        ? Number(item.story_visit_num) >= 1000000
                          ? (Number(item.story_visit_num) / 1000000).toFixed(
                              0
                            ) + "M"
                          : Number(item.story_visit_num) >= 1000
                          ? (Number(item.story_visit_num) / 1000).toFixed(0) +
                            "K"
                          : item.story_visit_num
                        : "----"
                    }}
                  </span>
                </div>
                <div class="section2_1_2">
                  <span>طرح:</span>
                  <span>{{
                    selectedAdvertiseType
                      ? selectedAdvertiseType.replace("پکیج -", "")
                      : item.advertise_plan[0].title.replace("پکیج -", "")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/order/sp-line.svg"
            style="margin-right: 27px; margin-left: 8px"
          />
          <div class="section1">
            <div class="section1_1">
              <div class="content">
                <div class="titles">
                  {{
                    item.media_channels && item.media_channels.length
                      ? item.category_title
                      : item.title
                  }}
                </div>
                <div class="buttons">
                  <div class="button">
                    {{ item.category_title }}
                  </div>
                  <div
                    class="button1"
                    style="
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      gap: 8px;
                    "
                  >
                    <img src="/images/tick-circle.svg" />
                    <span style="margin-top: 4px"
                      >{{ item.orders_num }} تبلیغ داده شده</span
                    >
                  </div>
                </div>
              </div>
              <div class="image">
                <img
                  :src="`https://beta.httb.ir/` + item.miniImageUrl"
                  style="
                    border-radius: 52px;
                    margin-right: 16px;
                    margin-left: 8px;
                  "
                />
              </div>
            </div>
            <div class="section1_2"></div>
            <div class="section1_3">
              <div class="section1_3_right">
                <div
                  v-if="item.media_channels && item.media_channels.length == 0"
                >
                  <img
                    v-if="item.social == 'Telegram'"
                    src="/images/content/arrow.svg"
                  />
                  <img v-else src="/images/afterOrder/instagram-blue.svg" />
                  <span
                    style="cursor: pointer"
                    @click="openSocial(item.social_id)"
                    >{{ item.social_id }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-icon">
          <div
            style="
              margin-top: 32px;
              width: 40px;
              height: 23px;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              padding-right: 8px;
              align-items: center;
              background-color: #34aadf;
              border-radius: 10px;
            "
          >
            <img src="/images/telegram-white.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  watch,
} from "@nuxtjs/composition-api";
import { setCalenderPopupStatus } from "../../../../composition/content/calender/index";
import {
  shoppedItem,
  setShoppedItem,
  changeShopItem,
  setchangeShopItem,
  setApiItemShops,
  apiShopItems,
} from "../../../../composition/Basket/index";
import { setCalenderMedia } from "../../../../composition/content/calender/index";
import { uuid, setUuid } from "../../../../composition/Basket/index";
import BasketDataService from "../../../../services/BasketDataService";
export default defineComponent({
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const advertiseTypeBoxTop = ref(null);
    const advertiseTypeBoxLeft = ref(null);
    const count = ref(props.item.number);
    const selectedAdvertiseType = ref(null);
    const advertseplanIndex = ref(0);
    onMounted(() => {
      console.log(props.item);
      const tempIndex = props.item.advertise_plan.findIndex(
        (x) => x.en_title == props.item.type
      );
      const temp = props.item.advertise_plan.find(
        (x) => x.en_title == props.item.type
      );
      console.log("ok temp : ", temp);
      selectedAdvertiseType.value = temp.title;
      advertseplanIndex.value = tempIndex;
    });
    watch(advertseplanIndex, async (value) => {
      console.log("advertseplanIndex : ", advertseplanIndex);
      let id = apiShopItems.value.findIndex((x) => x.id == props.item.id);
      if (id >= 0) {
        let temp = null;
        if (id >= 0) {
          temp = apiShopItems.value;
          temp[id].type =
            props.item.advertise_plan[advertseplanIndex.value].en_title;
        }
        setShoppedItem(temp);
        setchangeShopItem();
        const { data } = await BasketDataService.updateItems(
          localStorage.getItem("uuid"),
          temp
        );
        setUuid(data.data.uuid);
        localStorage.setItem("uuid", data.data.uuid);
        if (data) {
          const BasketItems = await BasketDataService.getItems(
            localStorage.getItem("uuid")
          );
          setApiItemShops(BasketItems.data.data.basket);
        }
        console.log("api shoped items : ", apiShopItems.value);
      }
    });
    watch(count, async (value) => {
      let id = apiShopItems.value.findIndex((x) => x.id == props.item.id);
      if (id >= 0) {
        let temp = null;
        if (id >= 0) {
          temp = apiShopItems.value;
          temp[id].number = value;
        }
        setShoppedItem(temp);
        setchangeShopItem();
        const { data } = await BasketDataService.updateItems(
          localStorage.getItem("uuid"),
          temp
        );
        setUuid(data.data.uuid);
        localStorage.setItem("uuid", data.data.uuid);
        if (data) {
          const BasketItems = await BasketDataService.getItems(
            localStorage.getItem("uuid")
          );
          setApiItemShops(BasketItems.data.data.basket);
        }
      }
    });
    watch(changeShopItem, (value) => {
      let id = shoppedItem.value.findIndex((x) => x.id == props.item.id);

      if (id >= 0) {
        console.log(shoppedItem.value[id]);
        count.value = shoppedItem.value[id].number;
      }
    });
    const removeShoppedItem = async () => {
      let temp = apiShopItems.value;
      temp = temp.filter((x) => x.id != props.item.id);
      const { data } = await BasketDataService.updateItems(
        localStorage.getItem("uuid"),
        temp
      );
      setUuid(data.data.uuid);
      localStorage.setItem("uuid", data.data.uuid);
      if (data) {
        const BasketItems = await BasketDataService.getItems(uuid.value);
        setApiItemShops(BasketItems.data.data.basket);
      }
      console.log("api shoped items : ", apiShopItems.value);
    };
    const openAdvertiseType = (id) => {
      if (advertiseTypeBoxTop.value == null) {
        advertiseTypeBoxTop.value =
          window.document.getElementById(id).offsetTop;
        advertiseTypeBoxLeft.value =
          window.document.getElementById(id).offsetLeft;
      } else {
        advertiseTypeBoxTop.value = null;
        advertiseTypeBoxLeft.value = null;
      }
    };
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    const openSocial = (id) => {
      window.open(`https://t.me/${id.replace("@", "")}`);
    };
    const clickCalenderDays = () => {
      setCalenderMedia(props.item);
    };
    return {
      setCalenderPopupStatus,
      toFarsiNumber,
      openSocial,
      openAdvertiseType,
      removeShoppedItem,
      clickCalenderDays,
      advertiseTypeBoxTop,
      advertiseTypeBoxLeft,
      count,
      selectedAdvertiseType,
      advertseplanIndex,
    };
  },
});
</script>
<style lang="scss" scoped>
.advertise-box {
  position: absolute;
  width: 120px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100 !important;
  .advertise-box-item {
    width: 90%;
    padding: 2px;
    padding-right: 4px;
    padding-left: 4px;
    font-size: 12px;
    background-color: white;
    border-radius: 8px;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
  }
}
.bold {
  font-weight: bold;
}
.hr {
  width: 100%;
  height: 2px;
  background-color: #f5f5f5;
}
.content-parent-desktop {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  .score-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 95px;
    align-items: center;
    border-radius: 13px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    margin-top: 72.14px;
    .left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      .left-btn-submit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 75.23px;
        height: 31.04px;
        top: 3073.6px;
        left: 452.16px;
        border-radius: 7px;
        background-color: #e3a507;
        color: #404040;
        span {
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: right;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: right;
        span {
          text-align: right;
          color: #404040;
          font-size: 18px;
          font-weight: 700;
        }
      }
      .bottom-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 24px;
        .bottom-section-part1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 8px;
          .title3 {
            font-family: YekanBakh-Regular-woff;
            font-size: 14px;
            font-weight: 300;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: right;
            color: #606060;
          }
        }
        .bottom-section-part2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          direction: rtl;
          gap: 8px;
          .title1 {
            font-size: 14px;
            font-weight: 300;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: right;
            color: #606060;
          }
          .title2 {
            font-size: 18px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: right;
            color: #e3a507;
          }
        }
      }
    }
  }
  .box-parent {
    margin-top: 1px;
    height: fit-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 13px;
  }
  .box-title {
    display: flex;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    width: 100%;
    background-color: white;
    border-radius: 13px;
    span {
      color: #404040;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .box-title-detail {
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 16px;
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 13px;
    .content {
      inline-size: 1000px;
      float: right;
      text-align: right;
    }
  }
  .line-desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 72px;
    .line-section {
      width: 40%;
      height: 1px;
      background-color: #cfcfcf;
      border-radius: 50%;
    }
    .span {
      color: #404040;
      font-size: 18px;
      font-weight: 900;
    }
  }
  .top-titles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .right {
      font-weight: bold;
      font-size: 1.2em;
      color: #404040;
    }
    .left {
      display: flex;
      flex-direction: row;
      gap: 8px;
      .count {
        font-weight: bold;
        font-size: 1.1em;
      }
      .rtl {
        direction: rtl;
      }
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 12px;
    .right {
      display: flex;
      flex-direction: row;
      gap: 8px;
      .item {
        width: 80px;
        height: 49px;
        border-radius: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        gap: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #000000;
      }
      .item-1 {
        width: 95px;
        height: 49px;
        border-radius: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #edc764;
        border: 1px solid #edc764;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;

        img {
          fill: #edc764;
        }
      }
      .item-2 {
        width: 179px;
        height: 49px;
        border-radius: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #edc764;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;

        img {
          fill: #edc764;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: right;
          color: #5e7dbe;
        }
      }
    }
    .left {
    }
  }
  .channels-parent {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
    .channels {
      width: calc(100% + 24px);
      height: 200px;
      display: flex;
      margin-left: 24px;
      flex-direction: row;
      .right-icon {
        display: flex;
        padding-right: 8px;
        z-index: 1;
        flex-direction: column;
        width: 32px;
        align-items: center;
        justify-content: flex-start;
        margin-left: -8px;
        border-radius: 8px;
      }
      .right {
        display: flex;
        flex-direction: row;
        flex-grow: 5;
        background-color: white;
        align-items: center;
        border-radius: 13px;
        z-index: 2;
        .section1 {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 350px;
          gap: 16px;
          padding-top: 15px;
          padding-bottom: 18.79px;
          .section1_1 {
            display: flex;
            flex-direction: row;
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 0px;
              flex-grow: 4;
              .titles {
                font-weight: bold;
                font-size: 16px;
                display: flex;
                margin-top: 8px;
                flex-direction: row;
                justify-content: flex-end;
              }
              .buttons {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                margin-top: 4px;
                justify-content: flex-end;
                gap: 4px;
                .button {
                  width: fit-content;
                  padding-right: 4px;
                  padding-left: 4px;
                  height: 30px;
                  border-radius: 25px;
                  font-size: 12px;
                  background-color: #f5f5f5;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  color: black;
                }
                .button1 {
                  width: fit-content;
                  padding-left: 4px;
                  padding-right: 4px;
                  height: 30px;
                  font-size: 12px;
                  border-radius: 25px;
                  background-color: white;
                  display: flex;
                  flex-direction: row;
                  direction: rtl;
                  justify-content: center;
                  align-items: center;
                  border: 1px solid #e7e7e7;
                  color: black;
                }
              }
            }
            .image {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              flex-grow: 1;
              padding-top: 4px;
              img {
                width: 47px;
                height: 47px;
              }
            }
          }
          .section1_2 {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding-right: 20px;
            padding-top: 8px;
            direction: rtl;
          }
          .section1_3 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .section1_3_right {
              display: flex;
              flex-direction: row;
              gap: 8px;
              color: #5e7dbe;
              align-items: center;
              .detail-button {
                width: fit-content;
                height: 25px;
                background-color: #34aadf;
                color: white;
                border-radius: 7px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
                padding: 8px;
                justify-content: space-around;
                span {
                  font-size: 10px;
                }
              }
              .detail-button2 {
                width: fit-content;
                height: 25px;
                background-color: #d85240;
                color: white;
                border-radius: 7px;
                gap: 8px;
                padding: 8px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                span {
                  font-size: 10px;
                }
              }

              img {
                width: 15px;
                height: 15px;
              }
              span {
                font-size: 16px;
                font-weight: bold;
                padding-top: 2px;
              }
            }
            .section1_3_left {
              display: flex;
              flex-direction: row;
              gap: 4px;
              padding-right: 12px;
              img {
                width: 45px;
                height: 45px;
              }
            }
          }
        }
        .section2-parent {
          display: flex;
          flex-direction: row;
          flex-grow: 20;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-top: 16px;
          padding-bottom: 24.32px;
          .section2 {
            width: 100%;
            min-width: 150px;
            margin-right: 8px;
            margin-left: 8px;
            height: 90%;
            background-color: white;
            border-radius: 13px;
            display: flex;
            flex-direction: row;
            gap: 42px;
            padding: 8px;
            direction: rtl;
            .section2_1 {
              display: flex;
              flex-direction: column;
              gap: 16px;
              flex-grow: 1;
              justify-content: space-around;
              .section2_1_1 {
                display: flex;
                padding-top: 4px;
                flex-direction: column;
                gap: 8px;
                color: #404040;
                font-size: 14px;
                .bold {
                  font-weight: bold;
                  color: #404040;
                  font-size: 16px;
                }
              }
            }
            .section2_2 {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              gap: 16px;
              justify-content: space-around;
              .section2_1_2 {
                display: flex;
                flex-direction: column;
                gap: 8px;
                color: #404040;
                font-size: 14px;
                .bold {
                  font-weight: bold;
                  color: #404040;
                  font-size: 16px;
                }
              }
            }
            .section2_3 {
              box-shadow: 0px 4px 8px 0px #5e7dbe40;
              border: 0.53px solid #5e7dbe;
              background-color: white;
              border-radius: 8px;
              display: flex;
              width: 70.96px;
              height: 96.68px;
              align-self: center;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              gap: -10px;
              // flex-grow: 1 ;
              // gap: 4px;
              padding: 4px;
              // justify-content: center ;
              // align-items: center;
              img {
                width: 46px;
                height: 46px;
              }
              span {
                font-size: 14px;
                font-weight: 300;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: right;
              }
            }
          }
        }
        .section3-parent {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 135px;
          padding: 16px;
          padding: 16px;
          margin-left: 8px;
          background-color: #f5f5f5;
          border-radius: 13px;
          .section3-calender {
            box-shadow: 0px 4px 8px 0px #5e7dbe40;
            border: 0.53px solid #5e7dbe;
            background-color: white;
            border-radius: 8px;
            display: flex;
            width: 70.96px;
            height: 96.68px;
            align-self: center;
            flex-direction: column;
            justify-content: space-around;
            flex-grow: 1;
            gap: 4px;
            padding: 8px;
            justify-content: center;
            align-items: center;
            img {
              width: 46px;
              height: 46px;
            }
            span {
              font-size: 13px;
              font-weight: 300;
              line-height: 22px;
              letter-spacing: 0em;
              text-align: right;
              color: #404040;
            }
          }
          .section3 {
            direction: rtl;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 32px;
            padding-bottom: 32px;
            flex-grow: 3;

            .section3_1 {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              padding: 16px;
              gap: 16px;

              .section3_1_2 {
                .button-section-parent-select {
                  width: 120px;
                  height: 29.77px;
                  text-align: center;
                  background-color: white;
                  border-radius: 7px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  direction: rtl;
                  padding: 8px;
                  span {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: right;
                    color: #000000;
                  }
                  img {
                    width: 16px;
                    height: 16px;
                  }
                }
                display: flex;
                flex-direction: column;
                gap: 3px;
                color: #404040;
                font-size: 14px;
                .bold {
                  font-weight: bold;
                  color: #404040;
                  font-size: 16px;
                }
              }
            }
            .section3_2 {
              margin-top: -30px;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 16px;
              font-size: 14px;
              color: #404040;
              gap: 1px;
              .bold {
                font-weight: bold;
                color: #404040;
                font-size: 24px;
              }
            }
          }
        }
      }
      .leftsd {
        display: flex;
        padding-right: 18px;
        padding-top: 16px;
        z-index: 1;
        flex-direction: column;
        width: 96px;
        align-items: center;
        justify-content: flex-start;
        background-color: #34aadf;
        margin-right: -20px;
        border-radius: 13px;
      }
    }
  }
}
</style>
