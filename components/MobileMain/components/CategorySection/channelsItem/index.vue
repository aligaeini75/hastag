<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100% !important;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 8px;
        width: 95% !important;
      "
    >
      <div
        style="
          margin: 8px;
          width: 100%;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          background-color: white;
          padding: 8px;
          z-index: 1000;
        "
      >
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
                selectedAdvertiseType = item.advertise_plan[index].title;
                advertiseTypeBoxTop = null;
              }
            "
          >
            {{ x.title }}
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: left;
              align-items: top;
            "
          >
            <img
              src="/images/more-mobile.svg"
              style="width: 40px; height: 40px"
            />
          </div>
          <div style="display: flex; flex-direction: row">
            <div
              style="
                display: flex;
                flex-direction: column;
                margin-right: 16px;
                direction: rtl;
              "
            >
              <div
                style="
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 25px;
                  letter-spacing: 0em;
                  text-align: right;
                  color: #404040;
                "
              >
                {{
                  item.media_channels && item.media_channels.length
                    ? item.category_title
                    : item.title
                }}
              </div>
              <div
                style="
                  margin-top: 8px;
                  border-radius: 10px;
                  float: right;
                  text-align: right;
                  width: fit-content;
                  height: 30px;
                  display: flex;
                  padding: 8px;
                  gap: 8px;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  border: 1px solid #f5f5f5;
                  font-size: 12px;
                  font-weight: 300;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: right;
                "
              >
                <img src="/images/tick-circle.svg" />
                <span style="margin-top: 4px"
                  >{{ item.orders_num }} تبلیغ داده شده</span
                >
              </div>
            </div>
            <img
              :src="`https://beta.httb.ir/` + item.miniImageUrl"
              style="width: 47px; height: 47px"
            />
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            gap: 8px;
            width: 100%;
            margin-top: 8px;
            align-items: center;
            justify-content: right;
          "
        >
          <div
            style="
              width: 80%;
              height: 0.5px;
              border-radius: 50%;
              background-color: #adadad;
            "
          ></div>
          <img
            src="/images/marks/takhfif.svg"
            style="width: 40px; height: 40px"
          />
          <img src="/images/marks/new.svg" style="width: 40px; height: 40px" />
        </div>

        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            direction: rtl;
            margin-top: 8px;
            margin-bottom: 8px;
          "
        >
          <div
            style="
              font-size: 14px;
              font-weight: 300;
              line-height: 15px;
              letter-spacing: 0em;
              text-align: right;
              color: #9e9e9e;
            "
            v-if="item.media_channels && item.media_channels.length == 0"
          >
            نشانی پیج:
          </div>
          <div
            style="
              font-size: 16px;
              display: flex;
              flex-direction: row;
              gap: 8px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: left;
              color: #5e7dbe;
            "
            v-if="item.media_channels && item.media_channels.length == 0"
          >
            <span style="cursor: pointer" @click="openSocial(item.social_id)">{{
              item.social_id
            }}</span>
            <img
              v-if="item.social == 'Telegram'"
              src="/images/content/arrow.svg"
            />
            <img v-else src="/images/afterOrder/instagram-blue.svg" />

            <div></div>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            direction: rtl;
            background-color: #f5f5f5;
            padding: 8px;
            border-radius: 8px;
          "
        >
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 14px;
                font-weight: 300;
                line-height: 15px;
                letter-spacing: 0em;
                text-align: right;
                color: #9e9e9e;
              "
            >
              <span>اطلاعات</span>
              <span>کلیدی</span>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-top: 16px;
              "
            >
              <span
                style="
                  font-size: 12px;
                  font-weight: 300;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >تعداد کانال:</span
              >
              <span
                style="
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 25px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >{{
                  item.media_channels
                    ? toFarsiNumber(item.media_channels.length)
                    : "----"
                }}</span
              >
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <span
                style="
                  font-size: 12px;
                  font-weight: 300;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >حدود بازدید:</span
              >
              <span
                style="
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 25px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >{{
                  item.visit_num
                    ? Number(item.visit_num) >= 1000000
                      ? (Number(item.visit_num) / 1000000).toFixed(0) + "M"
                      : Number(item.visit_num) >= 1000
                      ? (Number(item.visit_num) / 1000).toFixed(0) + "K"
                      : item.visit_num
                    : "----"
                }}</span
              >
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px">
              <span
                style="
                  font-size: 12px;
                  font-weight: 300;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >تعداد کاربر:</span
              >
              <span
                style="
                  font-size: 16px;
                  font-weight: 700;
                  line-height: 25px;
                  letter-spacing: 0em;
                  text-align: right;
                "
                >{{
                  item.members
                    ? Number(item.members) >= 1000000
                      ? (Number(item.members) / 1000000).toFixed(0) + "M"
                      : Number(item.members) >= 1000
                      ? (Number(item.members) / 1000).toFixed(0) + "K"
                      : item.members
                    : "----"
                }}</span
              >
            </div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            "
          >
            <div class="calender-parent">
              <span>تقویم روز</span>
              <img
                src="/images/content/calendar.svg"
                @click="clickCalenderDays()"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          padding: 8px;
          margin-right: 0;
          width: 100%;
          height: 70px;
          border-bottom-left-radius: 13px;
          border-bottom-right-radius: 13px;
          margin-top: -20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        "
        :style="{
          'background-color': shopping == true ? '#58A65C' : headerColor,
          background: shopping == true ? '#58A65C' : headerColor,
        }"
      >
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            position: relative;
            align-items: center;
          "
        >
          <div
            class="content-parent-desktop-order-11-section3_1_2"
            style="margin-top: 3px"
          >
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
                style="-webkit-appearance: none; width: 10px; font-weight: bold"
                :value="toFarsiNumber(count)"
              />
              <img
                src="/images/minus.svg"
                style="width: 24px; height: 24px"
                @click="count--"
              />
            </div>
          </div>
          <div
            ref="typeAdvertiseRef"
            class="content-parent-desktop-order-11-section3_1_2"
            @click="openAdvertiseType(`mmm${id}`)"
            :id="`mmm${id}`"
          >
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
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            margin-bottom: 4px;
          "
        >
          <span
            style="
              font-weight: bold;
              font-size: 18px;
              font-weight: 700;
              line-height: 28px;
              letter-spacing: 0em;
              color: white;
              text-align: right;
              direction: rtl;
            "
          >
            {{
              item.default_price
                ? toFarsiNumber(item.default_price) + "&nbsp;" + "تومان"
                : toFarsiNumber(0)
            }}
          </span>
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
          <img
            v-else-if="item.attribute != 'block' && shopping == false"
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
        </div>
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
} from "@nuxtjs/composition-api";
import {
  calenderPopupStatus,
  setCalenderPopupStatus,
} from "../../../../../composition/content/calender/index";
import {
  channelsItem,
  setAttributeForMedia,
} from "../../../../../composition/Channels/index";
import {
  shoppedItem,
  setShoppedItem,
  changeShopItem,
  setchangeShopItem,
  setApiItemShops,
  apiShopItems,
} from "../../../../../composition/Basket/index";
import { headerSearch } from "../../../../../composition/content/Header/index";
import {
  calenderMedia,
  setCalenderMedia,
} from "../../../../../composition/content/calender/index";
import BasketDataService from "../../../../../services/BasketDataService";
import { uuid, setUuid } from "../../../../../composition/Basket/index";

export default defineComponent({
  components: {},
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
    const count = ref(2);
    const moreBoxTop = ref(null);
    const moreBoxLeft = ref(null);
    const likeTemplate = ref(false);
    const shopping = ref(false);
    const render = ref(true);
    const selectedAdvertiseType = ref(null);
    let typeAdvertiseRef = ref(null);
    const changeRender = () => {
      render.value = false;
      nextTick(() => {
        render.value = true;
      });
    };
    const addShoppedItem = async (value) => {
      let temp = shoppedItem.value;
      temp.push({
        id: props.item.id,
        title: props.item.title,
        members: props.item.members,
        advertise_plan: props.item.advertise_plan,
        price: count.value * props.item.advertise_plan[0].price,
        imageUrl: props.item.imageUrl,
        miniImageUrl: props.item.miniImageUrl,
        link: "",
        category_title: props.item.category_title,
        story_visit_num: props.item.visit_num,
        type:
          selectedAdvertiseType.value != null
            ? selectedAdvertiseType.value.en_title
            : props.item.advertise_plan[0].en_title,
        social: props.item.social,
        social_type: props.item.social_type,
        social_id: props.item.social_id ? props.item.social_id : "",
        number: count.value,
      });
      setShoppedItem(temp);
      setchangeShopItem();
      const { data } = await BasketDataService.updateItems(uuid.value, temp);
      setUuid(data.data.uuid);
      localStorage.setItem("uuid", data.data.uuid);
      if (data) {
        const BasketItems = await BasketDataService.getItems(uuid.value);
        setApiItemShops(BasketItems.data.data.basket);
      }
      console.log("api shoped items : ", apiShopItems.value);
    };
    const removeShoppedItem = (value) => {
      console.log("shopped item value  : ", value);
      let temp = shoppedItem.value;
      temp = temp.filter((x) => x.id != value.id);
      setShoppedItem(temp);
      console.log("shopped item  : ", temp);
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
      let temp = window.document.getElementById(id);
      console.log("top : ", temp.getBoundingClientRect().top);
      if (advertiseTypeBoxTop.value == null) {
        advertiseTypeBoxTop.value = temp.getBoundingClientRect().top + 2300;
        advertiseTypeBoxLeft.value = temp.getBoundingClientRect().left;
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
      typeAdvertiseRef,
    };
  },
});
</script>
<style lang="scss">
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
.content-parent-desktop-order-11-section3_1_2 {
  .content-parent-desktop-order-11-button-section-parent-select {
    width: 91.6px;
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
      font-size: 13px;
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
@media screen and (max-width: 700px) {
  .calender-parent {
    border-radius: 8px;
    background-color: white;
    display: flex;
    height: 110px;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
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
</style>
