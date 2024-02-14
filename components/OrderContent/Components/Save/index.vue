<template>
  <v-dialog width="413" height="270" v-model="state">
    <template style="background-color: #f5f5f5" v-slot:default="{ isActive }">
      <div class="save-box-dialog">
        <div class="save-box-dialog-section1">
          <span> ذخیره پکیج</span>
          <img
            style="cursor: pointer"
            src="images/store-close.svg"
            @click="setOrderSaveSection(false)"
          />
        </div>
        <div class="save-box-dialog-section2">
          برای زخیره پکیج یک نام اختصاصی انتخاب کنید . تمامی پکیج های خود را
          میتوانید در بخش پکیج های من مشاهده کنید .
        </div>
        <div class="save-box-dialog-section3">
          <input
            v-model="packageName"
            class="a"
            placeholder="نام پکیج را اینجا وارد کنید"
          />
        </div>
        <div @click="savePackage()" class="save-box-dialog-section4">
          <img v-if="!loading" src="/images/order/archive-add.svg" />
          <span v-if="!loading">ذخیره پکیج</span>
          <v-loading></v-loading>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script>
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
import {
  orderSaveSection,
  setOrderSaveSection,
} from "../../../../composition/Order/index";
import OrderDataService from "../../../../services/OrderDataService";
export default defineComponent({
  components: {},
  setup() {
    const state = ref(false);
    const packageName = ref("");
    const loading = ref(false);
    const savePackage = async () => {
      loading.value = true;
      const { data } = await OrderDataService.savePackage(
        localStorage.getItem("uuid"),
        packageName.value
      );
      if (data) {
        loading.value = false;
      }
    };
    watch(orderSaveSection, (value) => {
      console.log(" save change : ", value);
      state.value = value;
    });
    return { state, setOrderSaveSection, packageName, savePackage };
  },
});
</script>
<style lang="scss" scoped>
a::placeholder {
  font-size: 12px !important;
}
.save-box-dialog {
  width: 413px;
  height: 270px;
  background-color: white;
  padding: 24px;
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 14px;
  .save-box-dialog-section1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 34px;
      text-align: right;
      color: #404040;
    }
    img {
      width: 33px;
      height: 33px;
    }
  }
  .save-box-dialog-section2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;

    color: #404040;
  }
  .save-box-dialog-section3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 100%;
    height: 43px;
    background-color: #f5f5f5;
    border: 1px solid #888888;
    input {
      all: unset;
      width: 100%;
      height: 100%;
      padding-right: 8px;
    }
  }
  .save-box-dialog-section4 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: white;
    background-color: #5e7dbe;
    border-radius: 8px;
    height: 43px;
    img {
      width: 17px;
      height: 17px;
      filter: brightness(0) invert(1);
    }
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      text-align: right;
      color: #f5f5f5;
    }
  }
}
</style>
