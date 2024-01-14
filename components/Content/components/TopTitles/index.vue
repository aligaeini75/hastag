<template>
  <div class="top-titles">
    <div class="left">
      <span class="count">{{ toFarsiNumber(allItems) }}</span>
      <span class="rtl">تعداد کل رسانه ها:</span>
    </div>
    <div class="right">
      <span>لیست کانال های برنامه نویسی تلگرام</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { allItems } from "../../../../composition/Channels/index";
export default defineComponent({
  components: {},
  setup() {
    const toFarsiNumber = (n) => {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n
        .toString()
        .split("")
        .map((x) => farsiDigits[x])
        .join("");
    };
    return { toFarsiNumber, allItems };
  },
});
</script>
<style lang="scss">
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
</style>
