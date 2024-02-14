<template>
  <v-dialog width="600" height="430" v-model="state">
    <template style="background-color: #f5f5f5" v-slot:default="{ isActive }">
      <div class="calender-status-parent">
        <div class="calender-status-parent-top">
          <div class="calender-status-parent-top-right">
            <span style="font-weight: bold">تقویم</span>
            <div class="calender-status-parent-top-right-item">
              <img src="~/static/images/calender-1.svg" />
              <span>رزرو شده</span>
            </div>
            <div class="calender-status-parent-top-right-item">
              <img src="~/static/images/calender-2.svg" />
              <span>در حال رزرو شدن</span>
            </div>
          </div>
          <div class="calender-status-parent-top-left">
            <img src="~/static/images/calender-close.svg" />
          </div>
        </div>
        <div class="calneder-status-section2">
          <span style="margin-right: 30px; padding-right: 26px">{{
            firstMonth
          }}</span>
          <img src="/images/calender-status-line.svg" />
          <span style="padding-left: 32px">{{ secondMonth }}</span>
        </div>
        <div class="calender-days">
          <div class="calender-days-item1">
            <div class="calender-days-item1-days-persian">
              <span v-for="x in persianDays">{{ x }}</span>
            </div>
            <div class="calender-digit-parent" v-if="firstArray.length > 0">
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel1"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == firstMonthDigit
                        ? 'green'
                        : x < firstMonthDigit
                        ? 'grey'
                        : getStatus1(x),
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel2"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == firstMonthDigit
                        ? 'green'
                        : x < firstMonthDigit
                        ? 'grey'
                        : getStatus1(x),
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel3"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == firstMonthDigit
                        ? 'green'
                        : x < firstMonthDigit
                        ? 'grey'
                        : getStatus1(x),
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel4"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == firstMonthDigit
                        ? 'green'
                        : x < firstMonthDigit
                        ? 'grey'
                        : getStatus1(x),
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit-remaind">
                <span
                  v-for="x in digitDaysLevel5"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == firstMonthDigit
                        ? 'green'
                        : x < firstMonthDigit
                        ? 'grey'
                        : getStatus1(x),
                  }"
                  >{{ x }}</span
                >
              </div>
            </div>
          </div>
          <!--  -->
          <div class="calender-days-item2">
            <div class="calender-days-item1-days-persian">
              <span v-for="x in persianDays">{{ x }}</span>
            </div>
            <div class="calender-digit-parent">
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel1"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == secondMonthDigit
                        ? 'black'
                        : x < secondMonthDigit
                        ? getStatus2(x)
                        : 'grey',
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel2"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == secondMonthDigit
                        ? 'black'
                        : x < secondMonthDigit
                        ? getStatus2(x)
                        : 'grey',
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel3"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == secondMonthDigit
                        ? 'black'
                        : x < secondMonthDigit
                        ? getStatus2(x)
                        : 'grey',
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit">
                <span
                  v-for="x in digitDaysLevel4"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == secondMonthDigit
                        ? 'black'
                        : x < secondMonthDigit
                        ? getStatus2(x)
                        : 'grey',
                  }"
                  >{{ x }}</span
                >
              </div>
              <!--  -->
              <div class="calender-days-item1-days-digit-remaind">
                <span
                  v-for="x in digitDaysLevel5"
                  @click="getHours(x)"
                  :style="{
                    color:
                      x == secondMonthDigit
                        ? 'black'
                        : x < secondMonthDigit
                        ? getStatus2(x)
                        : 'grey',
                  }"
                  >{{ x }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="calender-hours">
          <div class="calender-hours-right">ساعت تبلیغات</div>
          <div class="calender-hours-left">
            <div
              class="calender-hours-left-item"
              v-for="x in reservedHours.length"
            >
              <div class="calender-hours-left-item-top">13</div>
              <div class="calender-hours-left-item-bottom">16 الی 18</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  watch,
} from "@nuxtjs/composition-api";
import OrderDataService from "../../../../services/OrderDataService";
import { calenderMedia } from "../../../../composition/content/calender/index";
// import moment from ''

export default defineComponent({
  components: {},
  setup() {
    const state = ref(false);
    const persianDays = ref(["ش", "ی", "د", "س", "چ", "پ", "چ"]);
    const digitDaysLevel1 = ref([1, 2, 3, 4, 5, 6, 7]);
    const digitDaysLevel2 = ref([8, 9, 10, 11, 12, 13, 14]);
    const digitDaysLevel3 = ref([15, 16, 17, 18, 19, 20, 21]);
    const digitDaysLevel4 = ref([22, 23, 24, 25, 26, 27, 28]);
    const digitDaysLevel5 = ref([29, 30, 31]);
    const firstMonth = ref("");
    const firstMonthDigit = ref(0);
    const secondMonthDigit = ref(0);
    const secondMonth = ref("");
    const firstArray = ref([]);
    const secondArray = ref([]);
    const reservedHours = ref([]);
    const getHours = async (x) => {
      const currentDate = new Date();
      const currentMonth1 = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      const { data } = await OrderDataService.getHourse(
        `${currentYear}-${
          currentMonth1 >= 10 ? currentMonth1 : `0${currentMonth1}`
        }-${x >= 10 ? x : `0${x}`}`,
        calenderMedia.value.id,
        calenderMedia.value.social_type
      );
      reservedHours.value = data.data.reserved_hours;
      console.log("reservedHours : ", reservedHours.value);
    };
    const getStatus1 = (x) => {
      if (firstArray.value) {
        let temp = firstArray.value.find((z) => z.key == x);
        if (temp) {
          if (temp.value == "free") return "black";
          if (temp.value == "reserved") return "red";
          if (temp.value == "reserving") return "yellow";
        } else {
          return "black";
        }
      } else {
        return "black";
      }
    };
    const getStatus2 = (x) => {
      if (secondArray.value) {
        let temp = secondArray.value.find((z) => z.key == x);
        if (temp) {
          if (temp.value == "free") return "black";
          if (temp.value == "reserved") return "red";
          if (temp.value == "reserving") return "yellow";
        } else {
          return "black";
        }
      } else {
        return "black";
      }
    };
    const miladiToShamsi = (gy, gm, gd) => {
      let g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      let jy = 0;
      let jm = 0;
      let jd = 0;
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
      let gy2 = gm > 2 ? gy + 1 : gy;
      let days =
        365 * gy +
        parseInt((gy2 + 3) / 4) -
        parseInt((gy2 + 99) / 100) +
        parseInt((gy2 + 399) / 400) -
        80 +
        gd +
        g_d_m[gm - 1];
      jy += 33 * parseInt(days / 12053);
      days %= 12053;
      jy += 4 * parseInt(days / 1461);
      days %= 1461;
      jy += parseInt((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
      if (days < 186) {
        jm = 1 + parseInt(days / 31);
        jd = 1 + (days % 31);
      } else {
        jm = 7 + parseInt((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
      }
      return [jy, jm, jd];
    };
    const getPersianMonth = (digit) => {
      switch (digit) {
        case 1:
          return "فروردین";
        case 2:
          return "اردیبهشت";
        case 3:
          return "خرداد";
        case 4:
          return "تیر";
        case 5:
          return "مرداد";
        case 6:
          return "شهریور";
        case 7:
          return "مهر";
        case 8:
          return "ابان";
        case 9:
          return "اذر";
        case 10:
          return "دی";
        case 11:
          return "بهمن";
        case 12:
          return "اسفند";
      }
    };
    const getCurrentAndNextMonth = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      const [jy, jm, jd] = miladiToShamsi(
        currentYear,
        currentMonth,
        currentDay
      );

      let nextYear = jy;
      let nextMonth = jm + 1;

      if (nextMonth > 12) {
        nextMonth = 1;
        nextYear++;
      }
      firstMonthDigit.value = jd;
      secondMonthDigit.value = jd;
      return [jm, nextMonth];
    };
    onMounted(async () => {});
    watch(calenderMedia, async () => {
      state.value = true;
      const [currentMonth, nextMonth] = getCurrentAndNextMonth();
      const currentDate = new Date();
      firstMonth.value = getPersianMonth(Number(currentMonth));
      secondMonth.value = getPersianMonth(Number(nextMonth));
      const currentMonth1 = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      const currentDay = currentDate.getDate();
      const { data } = await OrderDataService.getDays(
        `${currentYear}-${
          currentMonth1 >= 10 ? currentMonth1 : `0${currentMonth1}`
        }-${currentDay >= 10 ? currentDay : `0${currentDay}`}`,
        `${currentMonth1 == 12 ? currentYear + 1 : currentYear}-${
          currentMonth1 == 12
            ? "01"
            : currentMonth1 + 1 >= 10
            ? currentMonth1 + 1
            : `0${currentMonth1 + 1}`
        }-${currentDay >= 10 ? currentDay : `0${currentDay}`}`,
        calenderMedia.value.id,
        calenderMedia.value.social_type
      );
      console.log("dataew : ", data);
      if (data) {
        let diArray = [];
        let bahmanArray = [];
        for (let day in data.data.days[firstMonth.value]) {
          let status = data.data.days[firstMonth.value][day];
          diArray.push({ key: Number(day), value: status });
        }
        for (let day in data.data.days[secondMonth.value]) {
          let status = data.data.days[secondMonth.value][day];
          bahmanArray.push({ key: Number(day), value: status });
        }
        console.log(diArray);
        firstArray.value = diArray;
        secondArray.value = bahmanArray;
        console.log(bahmanArray);
      }
    });
    return {
      state,
      persianDays,
      digitDaysLevel1,
      digitDaysLevel2,
      digitDaysLevel3,
      digitDaysLevel4,
      digitDaysLevel5,
      firstMonth,
      secondMonth,
      firstMonthDigit,
      secondMonthDigit,
      firstArray,
      secondArray,
      getStatus1,
      getStatus2,
      getHours,
      reservedHours,
    };
  },
});
</script>
<style lang="scss" scoped>
.calender-status-parent {
  width: 600px;
  height: 430px;
  background-color: #f5f5f5;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 9px;
  direction: rtl;
  .calender-status-parent-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
    .calender-status-parent-top-right {
      width: 254px;
      height: 29px;
      background-color: #e6e6e6;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      border-radius: 10px;
      gap: 14px;
      font-size: 12px;
      .calender-status-parent-top-right-item {
        display: flex;
        flex-direction: row;
        gap: 5px;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
    .calender-status-parent-top-left {
      width: 29px;
      height: 29px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #e6e6e6;
      border-radius: 10px;
    }
  }
  .calneder-status-section2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 580px;
    height: 30px;
    margin-top: 14px;
    border-radius: 10px;
    background-color: white;
  }
  .calender-days {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    .calender-days-item1 {
      display: flex;
      flex-direction: column;
      gap: 7px;
      .calender-days-item1-days-persian {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
      }
      .calender-digit-parent {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        gap: 7px;
        .calender-days-item1-days-digit {
          display: flex;
          width: 242px;
          flex-direction: row;
          justify-content: space-between;
          gap: 20px;
          text-align: right;
          cursor: pointer;
        }
        .calender-days-item1-days-digit-remaind {
          display: flex;
          width: 242px;
          flex-direction: row;
          justify-content: flex-start;
          text-align: right;
          gap: 20px;
          cursor: pointer;
        }
      }
    }
    .calender-days-item2 {
      display: flex;
      flex-direction: column;
      gap: 7px;
      .calender-days-item1-days-persian {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
      }
      .calender-digit-parent {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        gap: 7px;
        .calender-days-item1-days-digit {
          display: flex;
          width: 242px;
          flex-direction: row;
          justify-content: space-between;
          gap: 20px;
          text-align: right;
          cursor: pointer;
        }
        .calender-days-item1-days-digit-remaind {
          display: flex;
          width: 242px;
          flex-direction: row;
          justify-content: flex-start;
          text-align: right;
          gap: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .calender-hours {
    width: 100%;
    height: 69px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 26px;
    margin-top: 18px;
    .calender-hours-right {
    }
    .calender-hours-left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 6px;
      .calender-hours-left-item {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7px;
        border-radius: 10px;
        .calender-hours-left-item-top {
          font-size: 16px;
          font-weight: bold;
        }
        .calender-hours-left-item-bottom {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
