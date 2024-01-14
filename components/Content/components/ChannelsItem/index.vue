<template>
  <div class="channels-parent" v-if="render == true">
    <div
      v-if="advertiseTypeBoxTop"
      class="advertise-box"
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
    <div class="content-parent-desktop-order-11-channels">
      <div
        class="more-box"
        v-if="moreBoxTop"
        :style="{ top: moreBoxTop, left: moreBoxLeft }"
      >
        <div class="more-box-top">
          <img src="/images/content/more-black.svg" @click="closeMoreBox()" />
        </div>
        <div
          class="more-box-bottom"
          style="cursor: pointer"
          @click="block(item)"
        >
          <span>قرار دادن در بلک لیست</span>
        </div>
      </div>
      <div
        class="content-parent-desktop-order-11-leftff"
        :style="{
          'background-color': shopping == true ? '#58A65C' : headerColor,
          background: shopping == true ? '#58A65C' : headerColor,
        }"
      >
        <img
          src="/images/content/more.svg"
          style="cursor: pointer"
          :id="`more${item.id}`"
          @click="moreClick(item.id)"
        />

        <img
          src="/images/content/heart.svg"
          style="cursor: pointer"
          v-if="item.attribute == 'favorite'"
          @click="unLike()"
        />
        <img
          src="/images/heart.svg"
          style="cursor: pointer"
          @click="favorite(item)"
          v-else-if="item.attribute != 'block'"
        />
        <img
          v-if="item.attribute != 'block' && shopping == false"
          style="cursor: pointer"
          src="/images/shop.svg"
          @click="
            () => {
              addShoppedItem(item);
              addToShopping();
            }
          "
        />
        <img
          v-else-if="
            item.attribute != 'block' &&
            (shoppedItem.findIndex((x) => x.id == item.id) >= 0 ||
              shopping == true)
          "
          style="cursor: pointer"
          src="/images/shopped.svg"
          @click="
            () => {
              shopping = false;
              removeShoppedItem(item);
            }
          "
        />
        <div
          v-if="item.attribute == 'block'"
          style="
            width: 37px;
            height: 37px;
            border-radius: 10px;
            background-color: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          "
        >
          <img src="images/forbidden.svg" @click="unblock()" />
        </div>
      </div>
      <div class="content-parent-desktop-order-11-right">
        <div class="content-parent-desktop-order-11-section3">
          <div class="content-parent-desktop-order-11-section3_1">
            <div
              class="content-parent-desktop-order-11-section3_1_2"
              @click="openAdvertiseType(`mm${id}`)"
              :id="`mm${id}`"
            >
              <span>نوع تبلیغ:</span>
              <div
                class="content-parent-desktop-order-11-button-section-parent-select"
              >
                <span>{{
                  selectedAdvertiseType
                    ? selectedAdvertiseType.replace("پکیج -", "")
                    : item.advertise_plan[0].title.replace("پکیج -", "")
                }}</span>
                <img src="/images/order/arrow-down.svg" />
              </div>
            </div>

            <div class="content-parent-desktop-order-11-section3_1_2">
              <span>تعداد تبلیغ:</span>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  background-color: #f5f5f5;
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
          <div class="content-parent-desktop-order-11-section3_2">
            <span>هزینه نهایی:</span>
            <span class="bold" style="font-size: 1.2em">
              {{
                item.default_price
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
        <div class="content-parent-desktop-order-11-section2-parent">
          <div class="content-parent-desktop-order-11-section2">
            <div class="content-parent-desktop-order-11-section2_1">
              <div class="content-parent-desktop-order-11-section2_1_1">
                <span style="color: #9e9e9e"> اطلاعات </span>
                <span style="color: #9e9e9e">کلیدی</span>
              </div>
              <div class="content-parent-desktop-order-11-section2_1_1">
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
            <div class="content-parent-desktop-order-11-section2_2">
              <div class="content-parent-desktop-order-11-section2_1_2">
                <span> تعداد کانال:</span>
                <span class="bold">{{
                  item.media_channels
                    ? toFarsiNumber(item.media_channels.length)
                    : "----"
                }}</span>
              </div>
              <div class="content-parent-desktop-order-11-section2_1_2">
                <span>حدود بازدید:</span>
                <span class="bold">
                  {{
                    item.visit_num
                      ? Number(item.visit_num) >= 1000000
                        ? (Number(item.visit_num) / 1000000).toFixed(0) + "M"
                        : Number(item.visit_num) >= 1000
                        ? (Number(item.visit_num) / 1000).toFixed(0) + "K"
                        : item.visit_num
                      : "----"
                  }}
                </span>
              </div>
            </div>
            <div class="content-parent-desktop-order-11-section2_3">
              <span>تقویم روز</span>
              <img
                src="/images/content/calendar.svg"
                @click="clickCalenderDays()"
              />
            </div>
          </div>
        </div>
        <img
          src="/images/order/sp-line.svg"
          style="
            margin-right: 27px;
            margin-left: 27px;
            height: 93.17px;
            align-self: center;
          "
        />
        <div class="content-parent-desktop-order-11-section1">
          <div class="content-parent-desktop-order-11-section1_1">
            <div class="content-parent-desktop-order-11-content">
              <div class="content-parent-desktop-order-11-titles">
                {{
                  item.media_channels && item.media_channels.length
                    ? item.category_title
                    : item.title
                }}
              </div>
              <div class="content-parent-desktop-order-11-buttons">
                <div class="content-parent-desktop-order-11-button">
                  {{ item.category_title }}
                </div>
                <div
                  class="content-parent-desktop-order-11-button1"
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
          <div class="content-parent-desktop-order-11-section1_3">
            <div class="content-parent-desktop-order-11-section1_3_right">
              <div
                @showDetail="showDetail"
                class="content-parent-desktop-order-11-detail-button"
                v-if="
                  show == false &&
                  item.social == 'Telegram' &&
                  item.media_channels &&
                  item.media_channels.length
                "
                @click="show = true"
              >
                <img src="/images/arrow-down.svg" />
                <span>مشاهده لیست کانال ها</span>
              </div>
              <div
                @showDetail="showDetail"
                class="content-parent-desktop-order-11-detail-button2"
                v-else-if="item.media_channels && item.media_channels.length"
                @click="show = false"
              >
                <img src="/images/add.svg" />
                <span>بستن لیست</span>
              </div>
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
                <div></div>
              </div>
            </div>
            <div class="content-parent-desktop-order-11-section1_3_left">
              <img v-if="item.is_new == 1" src="/images/marks/new.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-parent-desktop-order-11-right-icon">
        <div
          v-if="item.social == 'Telegram'"
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
        <div
          v-else
          style="
            margin-top: 32px;
            width: 40px;
            height: 23px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding-right: 4px;
            align-items: center;
            background: linear-gradient(
              169.48deg,
              #dfaf34 -24.75%,
              #dc34df 158.25%
            ) !important;
            border-radius: 10px;
          "
        >
          <img
            src="/images/afterOrder/instagram.svg"
            style="width: 16px; height: 16px"
          />
        </div>
        <div
          v-if="item.media_channels && item.media_channels.length > 0"
          style="
            padding-top: 4px;
            margin-top: 16px;
            width: 40px;
            height: 23px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding-right: 8px;
            align-items: center;
            background-color: black;

            color: white;
            border-radius: 10px;
            font-size: 12px;
          "
        >
          <span>{{
            item.media_channels ? item.media_channels.length : ""
          }}</span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="hr" v-if="show == true"></div>
    <div class="detail-channels-parent" v-if="show == true">
      <div class="detail-channels" v-for="i in item.media_channels">
        <div class="right">
          <div class="section2-parent">
            <div class="section2">
              <div class="section2_2">
                <div class="section2_1_2">
                  <span> تعداد کاربر:</span>
                  <span class="bold"
                    >{{
                      i.members
                        ? Number(i.members) >= 1000000
                          ? (Number(i.members) / 1000000).toFixed(0) + "M"
                          : Number(i.members) >= 1000
                          ? (Number(i.members) / 1000).toFixed(0) + "K"
                          : i.members
                        : "----"
                    }}
                  </span>
                </div>
                <div class="section2_1_2">
                  <span>حدود بازدید:</span>
                  <span class="bold"
                    >{{
                      i.visit_num
                        ? Number(i.visit_num) >= 1000000
                          ? (Number(i.visit_num) / 1000000).toFixed(0) + "M"
                          : Number(i.visit_num) >= 1000
                          ? (Number(i.visit_num) / 1000).toFixed(0) + "K"
                          : i.visit_num
                        : "----"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="section1">
            <div class="section1_1">
              <div class="content">
                <div class="base-titles">{{ i.title }}</div>
                <div class="buttons">
                  <div
                    class="button"
                    style="
                      background-color: white;
                      border: 1px solid #e7e7e7;
                      width: fit-content;
                      padding-right: 4px;
                      padding-left: 4px;
                    "
                  >
                    {{ i.category_title }}
                  </div>
                  <div class="button1">{{ i.orders_num }} تبلیغ داده شده</div>
                </div>
              </div>
              <div class="image">
                <img
                  :src="`https://beta.httb.ir/` + i.miniImageUrl"
                  style="border-radius: 52px"
                />
              </div>
            </div>
            <div class="section1_2">
              <!-- <span
                >این کانال برای طرفدارای سیمسون هاست که برنامه نویسم هستن
                تازه...</span -->
              <!-- > -->
            </div>
            <div class="section1_3_detail">
              <div class="section1_3_right_detail" style="color: #5e7dbe">
                <div style="cursor: pointer">
                  <img src="/images/content/arrow.svg" />
                  <span @click="openSocial(item.social_id)">{{
                    i.social_id
                  }}</span>
                  <div></div>
                </div>
              </div>
              <div class="section1_3_left">
                <img v-if="i.is_new == 1" src="/images/marks/new.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <div class="summary-item">
          <span class="span1">طرح:</span>
          <span class="span2">{{ item.advertise_plan[0].title }}</span>
        </div>
        <div class="summary-item">
          <span class="span1">تعداد کانال:</span>
          <span class="span2" v-if="item.media_channels"
            >{{ item.media_channels.length }} عدد</span
          >
        </div>
        <div class="summary-item">
          <span class="span1">حدود بازدید:</span>
          <span class="span2">{{
            item.visit_num
              ? Number(item.visit_num) >= 1000000
                ? (Number(item.visit_num) / 1000000).toFixed(0) + "M"
                : Number(item.visit_num) >= 1000
                ? (Number(item.visit_num) / 1000).toFixed(0) + "K"
                : item.visit_num
              : "----"
          }}</span>
        </div>
        <div class="summary-item">
          <span class="span1">تعداد کاربر:</span>
          <span class="span2">{{
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
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  nextTick,
  watch,
} from "@nuxtjs/composition-api";
import VuePersianDatetimePicker from "../../../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue";
import {
  calenderPopupStatus,
  setCalenderPopupStatus,
} from "../../../../composition/content/calender/index";
import {
  channelsItem,
  setAttributeForMedia,
} from "../../../../composition/Channels/index";
import {
  shoppedItem,
  setShoppedItem,
  changeShopItem,
  setchangeShopItem,
} from "../../../../composition/Basket/index";
import { headerSearch } from "../../../../composition/content/Header/index";
import {
  calenderMedia,
  setCalenderMedia,
} from "../../../../composition/content/calender/index";
export default defineComponent({
  components: { VuePersianDatetimePicker },
  props: {
    item: {
      type: Object,
      required: true,
    },
    headerColor: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const showDetailParameters = ref([]);
    const show = ref(false);
    const advertiseTypeBoxTop = ref(null);
    const advertiseTypeBoxLeft = ref(null);
    const DatePickerStatus = ref(false);
    const count = ref(1);
    const moreBoxTop = ref(null);
    const moreBoxLeft = ref(null);
    const likeTemplate = ref(false);
    const shopping = ref(false);
    const render = ref(true);
    const selectedAdvertiseType = ref(null);
    const advertseplanIndex = ref(0);
    watch(count, (value) => {
      let id = shoppedItem.value.findIndex((x) => x.id == props.item.id);
      if (id >= 0) {
        let temp = null;
        if (id >= 0) {
          temp = shoppedItem.value;
          temp[id].count = value;
        }
        setShoppedItem(temp);
        setchangeShopItem();
      }
    });
    watch(changeShopItem, (value) => {
      let id = shoppedItem.value.findIndex((x) => x.id == props.item.id);

      if (id >= 0) {
        console.log(shoppedItem.value[id]);
        count.value = shoppedItem.value[id].count;
      }
    });
    const changeRender = () => {
      render.value = false;
      nextTick(() => {
        render.value = true;
      });
    };
    const addShoppedItem = (value) => {
      console.log("shopped item value : ", value);
      let temp = shoppedItem.value;
      temp.push({ ...value, count: count.value });
      console.log("temppp : ", temp);
      setShoppedItem(temp);
      console.log("shopped item : ", temp);
      setchangeShopItem();
    };
    const removeShoppedItem = (value) => {
      console.log("shopped item value  : ", value);
      let temp = shoppedItem.value;
      temp = temp.filter((x) => x.id != value.id);
      setShoppedItem(temp);
      console.log("shopped item  : ", temp);
      setchangeShopItem();
    };
    const block = (item) => {
      setAttributeForMedia("block", item.id, item.social_type);
      moreBoxTop.value = null;
      props.item.attribute = "block";
    };
    const addToShopping = () => {
      shopping.value = true;
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
    const showDetail = (value) => {
      showDetailParameters.value.push(value);
    };
    const hideDetail = (value) => {
      let test = showDetailParameters.value || [];
      showDetailParameters.value = test.filter((x) => x != value);
    };
    const closeMoreBox = () => {
      moreBoxTop.value = null;
    };
    const favorite = (item) => {
      setAttributeForMedia("favorite", item.id, item.social_type);
      props.item.attribute = "favorite";
    };
    const openSocial = (id) => {
      window.open(`https://t.me/${id.replace("@", "")}`);
    };
    const unLike = () => {
      props.item.attribute = null;
    };
    const unblock = () => {
      props.item.attribute = null;
    };
    const moreClick = (id) => {
      moreBoxTop.value = document.getElementById(
        `more${props.item.id}`
      ).offsetTop;
      moreBoxLeft.value = document.getElementById(
        `more${props.item.id}`
      ).offsetLeft;
    };
    const removeCalenderDatePicker = () => {
      setCalenderPopupStatus(false);
    };
    const clickCalenderDays = () => {
      setCalenderMedia(props.item);
    };
    onMounted(() => {
      setInterval(() => {
        if (
          shoppedItem.value.findIndex((x) => x.id == props.item.id) >= 0 &&
          props.item.attribute != "block"
        ) {
          shopping.value = true;
        } else if (
          props.item.attribute != "block" &&
          shoppedItem.value.findIndex((x) => x.id == props.item.id) < 0
        ) {
          shopping.value = false;
        }
      }, 500);
    });
    return {
      count,
      channelsItem,
      removeCalenderDatePicker,
      calenderPopupStatus,
      setCalenderPopupStatus,
      DatePickerStatus,
      toFarsiNumber,
      showDetail,
      hideDetail,
      showDetailParameters,
      show,
      moreClick,
      moreBoxTop,
      moreBoxLeft,
      closeMoreBox,
      openSocial,
      openAdvertiseType,
      advertiseTypeBoxTop,
      advertiseTypeBoxLeft,
      block,
      favorite,
      likeTemplate,
      unLike,
      unblock,
      addToShopping,
      shopping,
      addShoppedItem,
      removeShoppedItem,
      clickCalenderDays,
      shoppedItem,
      render,
      selectedAdvertiseType,
      advertseplanIndex,
    };
  },
});
</script>
<style scoped lang="scss">
.advertise-box {
  position: absolute;
  width: 91.6px;
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
.more-box {
  width: 161px;
  height: 60px;
  background: #f5f5f5;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  z-index: 3 !important;
  display: flex;
  flex-direction: column;
  .more-box-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8px;
  }
  .more-box-bottom {
    width: 147px;
    height: 29px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-radius: 7px;
    align-self: center;
    padding-left: 4px;
    border-radius: 7px;
    span {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #404040;
    }
  }
}
.channels-parent {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;

  .content-parent-desktop-order-11-channels {
    width: calc(100% + 24px);
    height: 200px;
    display: flex;
    margin-left: 24px;
    flex-direction: row;
    .content-parent-desktop-order-11-right-icon {
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
    .content-parent-desktop-order-11-right {
      display: flex;
      flex-direction: row;
      flex-grow: 5;
      background-color: white;
      border-radius: 13px;
      z-index: 2;
      .content-parent-desktop-order-11-section1 {
        display: flex;
        flex-direction: column;
        width: 350px !important;
        height: 100%;
        max-width: 350px !important;
        flex-grow: 1;
        gap: 60px;
        padding-top: 15px;
        padding-bottom: 18.79px;
        .content-parent-desktop-order-11-section1_1 {
          display: flex;
          flex-direction: row;
          .content-parent-desktop-order-11-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0px;
            flex-grow: 4;
            .content-parent-desktop-order-11-titles {
              font-weight: bold;
              font-size: 16px;
              display: flex;
              margin-top: 8px;
              flex-direction: row;
              justify-content: flex-end;
            }
            .content-parent-desktop-order-11-buttons {
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              margin-top: 4px;
              justify-content: flex-end;
              gap: 4px;
              .content-parent-desktop-order-11-button {
                width: fit-content !important;
                padding: 8px;
                height: 30px;
                border-radius: 25px;
                font-size: 11px;
                background-color: #f5f5f5;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                color: black;
              }
              .content-parent-desktop-order-11-button1 {
                width: 120px !important;
                padding-left: 4px;
                padding-right: 4px;
                height: 30px;
                font-size: 11px;
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
        .content-parent-desktop-order-11-section1_3 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .content-parent-desktop-order-11-section1_3_right {
            display: flex;
            flex-direction: row;
            gap: 8px;
            color: #5e7dbe;
            align-items: center;
            .content-parent-desktop-order-11-detail-button {
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
            .content-parent-desktop-order-11-detail-button2 {
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
          .content-parent-desktop-order-11-section1_3_left {
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
      .content-parent-desktop-order-11-section2-parent {
        display: flex;
        flex-direction: row;
        flex-grow: 20;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .content-parent-desktop-order-11-section2 {
          width: 100%;
          height: 100%;
          width: 330.42px;
          height: 140.77px;
          background-color: #f5f5f5;
          border-radius: 13px;
          display: flex;
          flex-direction: row;
          padding: 8px;
          direction: rtl;
          gap: 12px;
          padding: 20px;
          .content-parent-desktop-order-11-section2_1 {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 20px;
            margin-top: 15px;
            margin-bottom: 15px;
            justify-content: space-around;
            .content-parent-desktop-order-11-section2_1_1 {
              padding-top: 3px;
              display: flex;
              flex-direction: column;
              gap: 2px;
              color: #404040;
              font-size: 14px;
              .bold {
                font-weight: bold;
                color: #404040;
                font-size: 16px;
              }
            }
          }
          .content-parent-desktop-order-11-section2_2 {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 20px;
            justify-content: space-around;
            .content-parent-desktop-order-11-section2_1_2 {
              display: flex;
              flex-direction: column;
              gap: 2px;
              color: #404040;
              font-size: 14px;
              .bold {
                font-weight: bold;
                color: #404040;
                font-size: 16px;
              }
            }
          }
          .content-parent-desktop-order-11-section2_3 {
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
      .content-parent-desktop-order-11-section3 {
        direction: rtl;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        gap: 24px;
        padding-bottom: 24.32px;
        margin-left: 20px;
        flex-grow: 3;
        .content-parent-desktop-order-11-section3_1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 22px;
          width: 100%;
          padding: 16px;
          cursor: pointer;
          .content-parent-desktop-order-11-section3_1_2 {
            .content-parent-desktop-order-11-button-section-parent-select {
              width: 120px;
              height: 29.77px;
              text-align: center;
              background-color: #f5f5f5;
              border-radius: 7px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              direction: rtl;
              padding: 8px;
              span {
                font-size: 11px;
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
        .content-parent-desktop-order-11-section3_2 {
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
    .content-parent-desktop-order-11-leftff {
      display: flex;
      padding-right: 18px;
      min-width: 86px !important;
      z-index: 1;
      flex-direction: column;
      width: 96px !important;
      align-items: center;
      justify-content: space-between;
      background-color: #34aadf;
      margin-right: -20px;
      border-top-left-radius: 13px !important;
      border-bottom-left-radius: 13px !important;
      padding-top: 20px;
      padding-bottom: 20px;
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

              .base-titles {
                direction: rtl !important;
                font-weight: 700;
                font-size: 16px;
                display: flex;
                margin-top: 8px;
                flex-direction: row;
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
            justify-content: flex-start;
            margin-bottom: 8px;

            .section1_3_right {
              display: flex;
              flex-direction: row;
              gap: 8px;
              color: #5e7dbe;
              align-items: center;
              font-size: 16px;
              font-weight: 500;
              margin-left: 36px;

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
          width: 143px !important;
          height: 176px !important;
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
</style>
