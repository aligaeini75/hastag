<template>
  <div
    id="category-section-parent"
    style="display: flex; flex-direction: column; align-items: center"
  >
    <!--  -->
    <div class="tab-wrap" style="width: 96vw !important">
      <input type="radio" id="tab4" name="tabGroup2" class="tab" checked />
      <label
        for="tab4"
        style="
          font-weight: bold;
          display: flex;
          flex-direction: row;
          gap: 8px;
          justify-content: center;
        "
      >
        دسته بندی ها
        <img src="../../../../static//images/category-icon.svg" />
      </label>

      <input type="radio" id="tab5" name="tabGroup2" class="tab" />
      <label
        for="tab5"
        style="
          font-weight: bold;
          display: flex;
          flex-direction: row;
          gap: 8px;
          justify-content: center;
        "
      >
        فیلتر نتایج
        <img src="../../../../static//images/filter-icon.svg" />
      </label>

      <div class="tab__content">
        <Category />
      </div>

      <div class="tab__content">
        <Filters />
      </div>
    </div>

    <!--  -->
    <Buttons />
    <ChannelsItem
      v-for="(i, index) in channelsItem"
      :item="i"
      :key="i.id"
      :id="i.id"
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
        margin-top: 16px;
        margin-bottom: 16px;
        align-self: center;
        cursor: pointer;
      "
      @click="loadMoreData()"
    >
      مشاهده بیشتر
    </div>
    <div style="padding-left: 8px; padding-right: 8px">
      <div class="box-title" style="margin-top: 8px" @click="changeBoxTitle()">
        <img
          style="fill: #363a3f"
          :src="!boxTitle ? '/images/arrow-right.svg' : '/images/arrow-up.svg'"
        />
        <span
          style="
            font-size: 14px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: right;
          "
          >راهنمای تبلیغات هدفمند تر در تلگرام و اینستاگرام</span
        >
      </div>
      <div class="box-title-detail" style="width: 96vw" v-if="boxTitle">
        <div class="content">تست</div>
      </div>
      <div class="line">
        <div class="line-section" style="width: 60%"></div>
        <span
          class="span"
          style="
            font-size: 16px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: right;
          "
          >سوالات متداول</span
        >
      </div>
      <div
        class="box-parent"
        style="margin-top: 16px"
        @click="changeBoxParent1()"
      >
        <div class="box-title">
          <img
            style="fill: #363a3f"
            :src="
              !boxParent1 ? '/images/arrow-right.svg' : '/images/arrow-up.svg'
            "
          />
          <span>میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟</span>
        </div>
        <div v-if="boxParent1" style="text-align: right; padding: 16px">
          dqdqwddddddd
        </div>
      </div>
      <div class="box-parent" @click="changeBoxParent2()">
        <div class="box-title">
          <img
            style="fill: #363a3f"
            :src="
              !boxParent2 ? '/images/arrow-right.svg' : '/images/arrow-up.svg'
            "
          />
          <span>چطور می‌توانم سفارشم را پیگیری کنم؟</span>
        </div>
        <div v-if="boxParent2" style="text-align: right; padding: 16px">
          dqdqwddddddd
        </div>
      </div>
      <div class="box-parent" @click="changeBoxParent3()">
        <div class="box-title">
          <img
            style="fill: #363a3f"
            :src="
              !boxParent3 ? '/images/arrow-right.svg' : '/images/arrow-up.svg'
            "
          />
          <span>هزینه ی ارسال در دیجی کالا چگونه محاسبه میشود؟</span>
        </div>
        <div v-if="boxParent3" style="text-align: right; padding: 16px">
          dqdqwddddddd
        </div>
      </div>
    </div>
    <div style="margin-top: 8px">
      <div class="score-box-mobile">
        <div class="right">
          <div class="title">
            <span>لطفا برای ارتقا کیفیت امتیاز خودتونو ثبت کنید</span>
          </div>
          <div class="bottom-section">
            <div class="bottom-section-part2">
              <div class="title2">4289</div>
              <div class="title1">امتیاز</div>
            </div>
            <div class="bottom-section-part1">
              <span class="title3"> 4.5 میانگین </span>
              <v-rating
                background-color="grey lighten-2"
                color="warning"
                hover
                length="5"
                size="16"
                value="3"
              ></v-rating>
            </div>
          </div>
        </div>
        <div class="left">
          <v-rating
            value="3"
            background-color="orange lighten-3"
            color="orange"
            size="30"
          ></v-rating>
        </div>
        <div class="left-btn-submit">
          <span>ثبت امتیاز</span>
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
import Category from "../../../Category/index.vue";
import Filters from "../../../../components/Filter/index.vue";
import ChannelsItem from "./channelsItem/index.vue";
import "./index.scss";
import {
  calenderPopupStatus,
  setCalenderPopupStatus,
} from "../../../../composition/content/calender/index.js";
import Buttons from "../../../Content/components/Buttons";
import {
  channelsItem,
  getChannelItems,
  addChannelItems,
} from "../../../../composition/Channels/index";
import {
  categorySelected,
  changeCategoryLength,
} from "../../../../composition/Category/index";
import { sortField, sortType } from "../../../../composition/Sort/index";
import {
  finalPlatform,
  price,
  members,
  visitNum,
  attribute,
  newFilter,
  startDate,
  endDate,
} from "../../../../composition/Filter/index";
//   import Tabs from './Tabs'
export default defineComponent({
  components: {
    Category,
    Filters,
    Buttons,
    ChannelsItem,
    // Tabs
  },
  setup() {
    const tab = ref(null);
    const statement = ref("");
    const boxTitle = ref(false);
    const boxParent1 = ref(false);
    const boxParent2 = ref(false);
    const boxParent3 = ref(false);
    const count = ref(2);
    const page = ref(1);
    onMounted(() => {
      getChannelItems(page.value, null, null);
    });
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
    const changeBoxTitle = () => {
      boxTitle.value = !boxTitle.value;
    };
    const removeCalenderDatePicker = () => {
      setCalenderPopupStatus(false);
    };
    const changeBoxParent1 = () => {
      boxParent1.value = !boxParent1.value;
    };
    const changeBoxParent2 = () => {
      boxParent2.value = !boxParent2.value;
    };
    const changeBoxParent3 = () => {
      boxParent3.value = !boxParent3.value;
    };
    watch(tab, () => {
      if (tab.value == 0) statement.value = "category";
      else statement.value = "filters";
    });
    return {
      count,
      setCalenderPopupStatus,
      changeBoxParent1,
      changeBoxParent2,
      changeBoxParent3,
      boxParent1,
      boxParent2,
      boxParent3,
      changeBoxTitle,
      boxTitle,
      removeCalenderDatePicker,
      tab,
      statement,
      channelsItem,
      loadMoreData,
    };
  },
});
</script>
<style lang="scss">
@media screen and (max-width: 700px) {
  .v-expansion-panel-content__wrap {
    width: 100vw;
  }
  .v-expansion-panel-content {
    width: 100vw;
  }
}
* {
}

.score-box-mobile {
  width: 95vw;
  margin: 8px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  border-radius: 13px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
  .left-btn-submit {
    display: flex;
    margin-top: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 140.23px;
    height: 37.04px;
    top: 3073.6px;
    left: 452.16px;
    border-radius: 7px;
    background-color: #e3a507;
    color: #404040;
    span {
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
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
      justify-content: left;
      gap: 12px;
      margin-top: 8px;
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
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  margin-top: 10px;
}
//
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
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: right;
  span {
    color: #404040;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
  }
}
.box-title-detail {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 16px;
  margin-top: 4px;
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
.line {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
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

//
.v-label .theme--light {
  position: absolute;
  left: auto;
  right: 2px;
}
.v-select__slot {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1px;
  color: black;
  font-weight: bold;
  direction: rtl;
}
.v-application--is-ltr .v-text-field .v-label {
  transform-origin: top left;
  left: auto !important;
  right: 8px !important;
  position: absolute !important;
}
.v-slide-group__wrapper {
  background-color: #f5f5f5;
  border-radius: 8px;
}
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
.v-slide-group__content {
  justify-content: center;
  margin-top: 8px;
}
</style>
