<template>
  <v-dialog width="607" v-model="state">
    <template style="background-color: #f5f5f5" v-slot:default="{ isActive }">
      <div class="share-box-dialog">
        <div class="close-parent">
          <img
            @click="setOrderShopSection(false)"
            src="images/store-close.svg"
          />
        </div>
        <div class="share-box-dialog-section1">
          <span> اشتراک گذاری</span>
          <div class="share-box-dialog-section1-icons-parent">
            <div class="share-box-dialog-section1-icons" v-for="x in icons">
              <img :src="x" />
            </div>
          </div>
        </div>
        <div class="share-box-dialog-section2">
          <div class="share-box-dialog-section2-right">
            <img src="images/share/copy.svg" />
            <span>کپی کردن لینک</span>
          </div>
          <div class="share-box-dialog-section2-left">
            https://www.httb.ir/customer/account
          </div>
        </div>
      </div>
    </template>
  </v-dialog>
</template>

<script>
import { defineComponent, watch, ref } from "@nuxtjs/composition-api";
import {
  orderShopSection,
  setOrderShopSection,
} from "../../../../composition/Order/index";
export default defineComponent({
  components: {},
  setup() {
    const state = ref(false);
    const icons = ref([
      "images/share/gmail.svg",
      "images/share/instagram.svg",
      "images/share/whatsapp.svg",
      "images/share/telegram.svg",
    ]);
    watch(orderShopSection, (value) => {
      console.log(" save change : ", value);
      state.value = value;
    });
    return { state, setOrderShopSection, icons };
  },
});
</script>
<style lang="scss" scoped>
a::placeholder {
  font-size: 12px !important;
}
.share-box-dialog {
  width: 607px;
  background-color: white;
  padding: 24px;
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 14px;
  .close-parent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      cursor: pointer;
    }
  }
  .share-box-dialog-section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    .share-box-dialog-section1-icons-parent {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      .share-box-dialog-section1-icons {
        width: 52px;
        height: 52px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #ececec;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
  .share-box-dialog-section2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    height: 52px;
    color: #404040;
    border-radius: 8px;
    background-color: #ececec;
    padding: 8px;
    .share-box-dialog-section2-right {
      width: 146px;
      height: 37px;
      background-color: white;
      border: 1px solid #5e7dbe;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      gap: 8px;
      span {
        color: #5e7dbe;
      }
    }
    .share-box-dialog-section2-left {
      color: #5e7dbe;
      cursor: pointer;
    }
  }
}
</style>
