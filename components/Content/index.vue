<template>
  <div class="column">
    <CalenderStatus />
    <Shopping />
    <v-overlay @click="removeCalenderDatePicker()" :value="calenderPopupStatus">
    </v-overlay>
    <div class="calender-parent1" v-if="calenderPopupStatus">
      <VuePersianDatetimePicker />
    </div>
    <div class="content-parent-desktop">
      <TopTitles />
      <Buttons />
      <v-skeleton-loader
        v-for="i in 8"
        :key="i"
        v-if="channelLoading == true"
        style="direction: rtl; margin-bottom: 8px"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
      <ChannelsItem
        v-for="(i, index) in channelsItem"
        v-if="channelLoading == false"
        :item="i"
        :key="i.id"
        :id="index"
        :header-color="
          i.attribute == 'block'
            ? '#404040'
            : i.social == 'Telegram'
            ? '#34AADF'
            : 'linear-gradient(169deg, #DFAF34 -24.75%, #DC34DF 158.25%)'
        "
        style="margin-top: 8px"
      />
      <div
        style="
          width: 150px;
          height: 40px;
          border-radius: 8px;
          color: white;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: #34aadf;
          margin-bottom: 16px;
          align-self: center;
          cursor: pointer;
        "
        @click="loadMoreData()"
      >
        مشاهده بیشتر
      </div>
      <BoxParent
        title="راهنمای تبلیغات هدفمند تر در تلگرام و اینستگرام"
        des="dqdqwddddddd"
        style="margin-top: 51.74px"
      />
      <LineDesktop />
      <div style="display: flex; flex-direction: column; gap: 7.51px">
        <BoxParent
          title="میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟"
          des="dqdqwddddddd"
          style="margin-top: 57px"
        />
        <BoxParent
          title="چطور می‌توانم سفارشم را پیگیری کنم؟"
          des="dqdqwddddddd"
        />
        <BoxParent
          title="هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟"
          des="dqdqwddddddd"
        />
        <BoxParent
          title="چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟"
          des="dqdqwddddddd"
        />
      </div>
      <ScoreBoxComponent />
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
import CalenderStatus from "./components/calenderStatus/index.vue";
import VuePersianDatetimePicker from "../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue";
import {
  calenderPopupStatus,
  setCalenderPopupStatus,
} from "../../composition/content/calender/index.js";
import {
  shoppingSection,
  setShoppingSection,
} from "../../composition/content/Header/index";
import Shopping from "./components/ShoppingComponent/index.vue";
import ScoreBoxComponent from "./components/ScoreBoxComponent/index.vue";
import BoxParent from "./components/BoxParent/index.vue";
import LineDesktop from "./components/LineDesktop/index.vue";
import Buttons from "./components/Buttons/index.vue";
import TopTitles from "./components/TopTitles/index.vue";
import ChannelsItem from "./components/ChannelsItem/index.vue";
import { channelLoading } from "../../composition/Loading/index";
import { VCol } from "vuetify/lib";
import Popper from "vue-popperjs";
import {
  getChannelItems,
  addChannelItems,
  channelsItem,
} from "../../composition/Channels/index";
import {
  changeCategoryLength,
  categorySelected,
  categoryChangeRequest,
} from "../../composition/Category/index";
import { sortField, sortType } from "../../composition/Sort/index";
import {
  finalPlatform,
  price,
  members,
  visitNum,
  attribute,
  newFilter,
  startDate,
  endDate,
} from "../../composition/Filter/index";
import { headerSearch } from "../../composition/content/Header/index";
import BasketDataService from "../../services/BasketDataService";
import {
  setApiItemShops,
  apiShopItems,
  setShoppedItem,
  changeShopItem,
} from "../../composition/Basket/index";
export default defineComponent({
  components: {
    TopTitles,
    Buttons,
    LineDesktop,
    VCol,
    VuePersianDatetimePicker,
    popper: Popper,
    Shopping,
    ScoreBoxComponent,
    BoxParent,
    ChannelsItem,
    CalenderStatus,
  },
  setup() {
    const showDetailParameters = ref([]);
    const show = ref(false);
    const boxTitle = ref(false);
    const boxParent1 = ref(false);
    const boxParent = ref(false);
    const boxParent11 = ref(false);
    const boxParent2 = ref(false);
    const boxParent3 = ref(false);
    const DatePickerStatus = ref(false);
    const count = ref(2);
    const page = ref(1);
    const changeBoxTitle = () => {
      boxTitle.value = !boxTitle.value;
    };
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    const changeBoxParent1 = () => {
      boxParent1.value = !boxParent1.value;
    };
    const loadMoreData = () => {
      page.value = page.value + 1;
      addChannelItems(
        page.value,
        categorySelected.value,
        finalPlatform.value,
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value,
        sortField.value,
        sortType.value,
        startDate.value,
        endDate.value
      );
      changeCategoryLength();
    };
    const changeBoxParent = () => {
      boxParent.value = !boxParent.value;
    };
    const changeBoxParent2 = () => {
      boxParent2.value = !boxParent2.value;
    };
    const changeBoxParent3 = () => {
      boxParent3.value = !boxParent3.value;
    };
    const changeBoxParent11 = () => {
      boxParent11.value = !boxParent11.value;
    };
    const showDetail = (value) => {
      showDetailParameters.value.push(value);
    };
    const hideDetail = (value) => {
      let test = showDetailParameters.value || [];
      showDetailParameters.value = test.filter((x) => x != value);
    };
    const removeCalenderDatePicker = () => {
      setCalenderPopupStatus(false);
    };
    watch(categoryChangeRequest, (value) => {
      getChannelItems(
        page.value,
        categorySelected.value,
        finalPlatform.value,
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value,
        sortField.value,
        sortType.value
      );
    });
    onMounted(async () => {
      getChannelItems(page.value, null, null);
      if (localStorage.getItem("uuid")) {
        const BasketItems = await BasketDataService.getItems(
          localStorage.getItem("uuid")
        );
        setApiItemShops(BasketItems.data.data.basket);
        setShoppedItem(BasketItems.data.data.basket);
      }
      console.log("api shop items : ", apiShopItems.value);
    });
    return {
      setShoppingSection,
      shoppingSection,
      count,
      boxParent,
      changeBoxParent,
      changeBoxParent11,
      boxParent11,
      removeCalenderDatePicker,
      calenderPopupStatus,
      setCalenderPopupStatus,
      DatePickerStatus,
      toFarsiNumber,
      boxParent1,
      boxParent2,
      boxParent3,
      changeBoxParent1,
      changeBoxParent2,
      changeBoxParent3,
      showDetail,
      hideDetail,
      showDetailParameters,
      show,
      changeBoxTitle,
      boxTitle,
      channelsItem,
      loadMoreData,
      channelLoading,
      headerSearch,
    };
  },
});
</script>
<style lang="scss">
.v-skeleton-loader__avatar {
  margin-left: 16px !important;
}
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

.bold {
  font-weight: bold;
}

.hr {
  width: 100%;
  height: 2px;
  background-color: #f5f5f5;
}

.column {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.content-parent-desktop {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

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
        border-radius: 8px;
        z-index: 2;

        .section1 {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 4px;
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
                  width: 70px;
                  height: 30px;
                  border-radius: 8px;
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
                  border-radius: 8px;
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
            width: 90%;
            height: 90%;
            background-color: #f5f5f5;
            border-radius: 13px;
            display: flex;
            flex-direction: row;
            padding: 8px;
            direction: rtl;

            .section2_1 {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              justify-content: space-around;

              .section2_1_1 {
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

            .section2_2 {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
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

        .section3 {
          direction: rtl;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 10px;
          padding-bottom: 24.32px;
          flex-grow: 3;

          .section3_1 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            padding: 16px;

            .section3_1_2 {
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

          .section3_2 {
            margin-top: -30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            font-size: 14px;
            color: #404040;
            gap: 8px;

            .bold {
              font-weight: bold;
              color: #404040;
              font-size: 24px;
            }
          }
        }
      }

      .left {
        display: flex;
        padding-right: 8px;
        z-index: 1;
        flex-direction: column;
        flex-grow: 0.7;
        align-items: center;
        justify-content: space-around;
        background-color: #34aadf;
        margin-right: -10px;
        border-radius: 8px;
      }
    }

    .detail-channels-parent {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      padding-bottom: 16px;
      background-color: white;
      padding-top: 16px;
      padding-left: 8px;
      padding-right: 8px;
      padding-bottom: 8px;
      margin-top: -10px;

      .detail-channels {
        width: 515px;
        height: 190px;
        display: flex;

        .right {
          display: flex;
          flex-direction: row;
          flex-grow: 5;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 8px;
          z-index: 1000;
          padding: 8px;

          .section1 {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 4px;

            .section1_1 {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin-top: 8px;

              .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 0px;
                flex-grow: 4;

                .titles {
                  font-weight: 700;
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
                    width: 70px;
                    height: 30px;
                    border-radius: 8px;
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
                    border-radius: 8px;
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

              span {
                font-size: 16px;
                font-weight: 300;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: right;
              }
            }

            .section1_3 {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-bottom: 8px;

              .section1_3_right {
                display: flex;
                flex-direction: row;
                gap: 8px;
                color: #5e7dbe;
                align-items: center;
                font-size: 16px;
                font-weight: 500;

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
                padding-right: 8px;

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
            width: 123px;
            height: 141px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .section2 {
              width: 90%;
              height: 90%;
              background-color: white;
              border-radius: 8px;
              display: flex;
              flex-direction: row;
              padding: 8px;
              direction: rtl;

              .section2_1 {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: space-around;

                .section2_1_1 {
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

              .section2_2 {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: space-around;

                .section2_1_2 {
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  color: #404040;
                  font-size: 13px;
                  font-weight: 300;
                  text-align: center;

                  .bold {
                    color: #404040;
                    font-size: 15px;
                    font-weight: 700;
                  }
                }
              }

              .section2_3 {
                box-shadow: 0px 4px 8px 0px #5e7dbe40;
                border: 0.53px solid #5e7dbe;
                background-color: white;
                border-radius: 8px;
                display: flex;
                width: 50px;
                height: 110px;
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
              }
            }
          }

          .section3 {
            direction: rtl;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex-grow: 3;

            .section3_1 {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              padding: 16px;

              .section3_1_2 {
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

            .section3_2 {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 16px;
              font-size: 14px;
              color: #404040;
              gap: 8px;

              .bold {
                font-weight: bold;
                color: #404040;
                font-size: 24px;
              }
            }
          }
        }

        .left {
          display: flex;
          padding-right: 4px;
          z-index: 1;
          flex-direction: column;
          flex-grow: 0.7;
          align-items: center;
          justify-content: space-around;
          background-color: #34aadf;
          margin-right: -10px;
          border-radius: 8px;
        }
      }

      .summary {
        width: 515px;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 32px;
        direction: rtl;

        .summary-item {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .span1 {
            font-size: 16px;
            color: #404040;
            text-align: center;
          }

          .span2 {
            color: #404040;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
