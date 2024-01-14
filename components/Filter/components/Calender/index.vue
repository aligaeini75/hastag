<template>
  <div class="calender-parent32" style="background-color: transparent">
    <div class="calender-titles">
      <div class="calender-title-style-2">رفتن به تاریخ امروز</div>
      <div class="calender-title-style21">تقویم</div>
    </div>
    <date-picker
      color="#5E7DBE"
      class="calender"
      :autoSubmit="true"
      v-model="date"
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import VuePersianDatetimePicker from "../../../../node_modules/vue-persian-datetime-picker/src/VuePersianDatetimePicker.vue";
import { getChannelItems } from "../../../../composition/Channels/index";
import { categorySelected } from "../../../../composition/Category/index";
import {
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  finalPlatform,
  attribute,
  members,
  price,
  visitNum,
  newFilter,
} from "../../../../composition/Filter/index";
import { sortField, sortType } from "../../../../composition/Sort";
import * as shamsi from "shamsi";

export default defineComponent({
  components: {
    datePicker: VuePersianDatetimePicker,
  },
  setup() {
    const date = ref(null);
    watch(date, (value) => {
      let begin = value.split("/").map((x) => Number(x));
      begin = shamsi.jalaliToGregorian(begin[0], begin[1], begin[2]);
      begin = `${begin[0] >= 10 ? begin[0] : `0${begin[0]}`}-${
        begin[1] >= 10 ? begin[1] : `0${begin[1]}`
      }-${begin[2] >= 10 ? begin[2] : `0${begin[2]}`} 00:00:00`;
      console.log("begin : ", begin);
      setStartDate(begin);
      let end = value.split("/").map((x) => Number(x));
      end = shamsi.jalaliToGregorian(end[0], end[1], end[2]);
      end = `${end[0] >= 10 ? end[0] : `0${end[0]}`}-${
        end[1] >= 10 ? end[1] : `0${end[1]}`
      }-${end[2] >= 10 ? end[2] : `0${end[2]}`} 24:00:00`;
      console.log("end : ", end);
      setEndDate(end);
      getChannelItems(
        1,
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
    });
    return {
      date,
    };
  },
});
</script>
<style lang="scss">
.vpd-input-group input {
  border: 2px solid #5e7dbe;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.vpd-container {
  color: grey;
  font-family: YekanBakh-Regular-woff;
}
.vpd-content {
  border-radius: 13px !important;
}
.calender-parent32 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  margin-top: 16px;
  .calender-titles {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    .calender-title-style21 {
      color: #404040;
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
    }
    .calender-title-style-2 {
      font-size: 14px;
      color: #5e7dbe;
    }
  }
  .calender {
    margin-top: 20px;
  }
  @media screen and (min-width: 700px) {
    .calender {
      margin-top: 20px;
      margin-right: 24px;
    }
    .calender-titles {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-right: 16px;
      justify-content: space-between;
      .calender-title-style1 {
        font-size: 16px;
        color: #404040;
        font-weight: bold;
      }
      .calender-title-style-2 {
        font-size: 14px;
        color: #5e7dbe;
      }
    }
  }
}
</style>
