<template>
  <div class="range-parent-desktop">
    <div class="range-title">
      {{ $props.title }}
    </div>
    <div class="range-sd">
      <v-range-slider
        v-model="price"
        :min="min1"
        :max="max1"
        :step="100"
        strict
        thumb-color="#ffffff"
        track-color="#ffffff"
      ></v-range-slider>
    </div>
    <div class="range-buttons">
      <div class="button" @click="submit()">برو</div>
      <div class="inputs">
        <div class="input-right">
          <input :placeholder="toFarsiNumber(min2)" />
        </div>
        <div class="input-left">
          <input :placeholder="toFarsiNumber(max2)" />
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
  nextTick,
} from "@nuxtjs/composition-api";
import {
  getChannelItems,
  extremum,
} from "../../../../composition/Channels/index";
import { categorySelected } from "../../../../composition/Category/index";
import {
  finalPlatform,
  setPrice,
  setMembers,
  setVisitNum,
  attribute,
  newFilter,
  cancleFilter,
} from "../../../../composition/Filter/index";
export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const price = ref([0, 2000000]);
    const min1 = ref(0);
    const max1 = ref(2000000);
    const min2 = ref(0);
    const max2 = ref(2000000);

    watch(extremum, (value) => {
      if (props.title == "قیمت") {
        setTimeout(() => {
          price.value[0] = value.price_min;
          price.value[1] = value.price_max;
          min1.value = value.price_min;
          max1.value = value.price_max;
          min2.value = value.price_min;
          max2.value = value.price_max;
        }, 2000);
      } else if (props.title == "تعداد کاربر") {
        price.value[0] = value.members_min;
        price.value[1] = value.members_max;
        min1.value = value.members_min;
        max1.value = value.members_max;
        min2.value = value.members_min;
        max2.value = value.members_max;
      } else if (props.title == "حدود بازدید") {
        price.value[0] = value.visit_num_min;
        price.value[1] = value.visit_num_max;
        min1.value = value.visit_num_min;
        max1.value = value.visit_num_max;
        min2.value = value.visit_num_min;
        max2.value = value.visit_num_max;
      }
    });
    watch(price, (value) => {
      if (props.title == "قیمت") {
        setPrice(value);
      } else if (props.title == "تعداد کاربر") {
        setMembers(value);
      } else if (props.title == "حدود بازدید") {
        setVisitNum(value);
      }
      min2.value = value[0];
      max2.value = value[1];
    });
    onMounted(() => {});
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    const submit = () => {
      if (props.title == "قیمت") {
        getChannelItems(
          1,
          categorySelected.value,
          finalPlatform.value,
          price.value,
          null,
          null,
          attribute.value,
          newFilter.value
        );
      } else if (props.title == "تعداد کاربر") {
        getChannelItems(
          1,
          categorySelected.value,
          finalPlatform.value,
          null,
          price.value,
          null,
          attribute.value,
          newFilter.value
        );
      } else if (props.title == "حدود بازدید") {
        getChannelItems(
          1,
          categorySelected.value,
          finalPlatform.value,
          null,
          null,
          price.value,
          attribute.value,
          newFilter.value
        );
      }
    };

    return { price, toFarsiNumber, min1, max1, submit, min2, max2 };
  },
});
</script>
<style lang="scss">
.md {
  direction: ltr !important;
}
.range-parent-desktop {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  margin-top: 20px;
  .range-sd {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding: 4px;
  }
  .range-title {
    width: 100%;
    height: fit-content;
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: right;
    color: #404040;
  }
  .range-buttons {
    margin-top: -32px;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    padding: 8px;
    .inputs {
      display: flex;
      flex-direction: row;
      gap: 2px;
      input {
        width: 100%;
        text-align: center;
      }
      .input-right {
        width: 100px;
        height: 40px;
        background-color: #f0f0f0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .input-left {
        width: 100px;
        height: 40px;
        background-color: #f0f0f0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
    .button {
      width: 80px;
      height: 40px;
      border-radius: 13px;
      cursor: pointer;
      background-color: #5e7dbe;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
  }
}
</style>
