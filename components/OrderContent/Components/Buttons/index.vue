<template>
  <div class="button-section-parent">
    <div @click="platform = !platform" class="button-section-parent-select" style="cursor: pointer;">
      <span> {{ selecttedPlatform.title }}</span>
      <img src="/images/order/arrow-down.svg" />
    </div>
    <div
      v-if="platform"
      class="advertise-box1"
      :style="{
        top: `410px`,
        left: `1442px`,
      }"
    >
      <div
        class="advertise-box-item"
        @click="
          () => {
            platform = false ;
            selecttedPlatform = x ;
            changeSocial(x.value) ;
          }
        "
        v-for="x in platforms"
        style="cursor: pointer"
      >
        {{ x.title }}
      </div>
    </div>
    <!--  -->
    <div class="button-section-parent-input">
      <div class="input">
        <input v-model="search" placeholder="جستجو کنین..." />
      </div>
      <div class="icon"><img src="/images/order/search.svg" /></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import {
  search,
  setSearch,
  setSocial,
  social,
} from "../../../../composition/Order/index";
export default defineComponent({
  components: {},
  setup() {
    const platform = ref(false);
    const changeSocial = (value) => {
      if (value == 1) {
        setSocial(null);
      } else if (value == 2) {
        setSocial("Telegram");
      } else if (value == 3) {
        setSocial("Instagram");
      }
      console.log("social : ", social.value);
    };
    const platforms = ref([
      { title: "همه", value: 1 },
      { title: "تلگرام", value: 2 },
      { title: "اینستگرام", value: 3 },
    ]);
    const selecttedPlatform = ref(platforms.value[0]);
    const search = ref("");
    watch(search, (value) => {
      setSearch(value);
    });
    return { search, platform, platforms, selecttedPlatform, changeSocial };
  },
});
</script>
<style lang="scss">
.advertise-box1 {
  position: absolute;
  width: 220px;
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
    font-size: 16px;
    background-color: white;
    border-radius: 8px;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: black;
  }
}
//    .theme--light.v-text-field.v-input--is-disabled .v-input__slot::before {
//         all: unset;
//    }
.button-section-parent {
  width: 100%;
  height: 50px;
  gap: 8px;
  margin-top: 16px;
  display: flex;
  direction: rtl;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // .v-input__control .v-select__slot {
  //     height: 49px ;
  //     padding-top: 8px;
  //     label {
  //         position: absolute ;
  //         margin-top: 8px;
  //     }
  // }
  .button-section-parent-select {
    width: 220px;
    height: 49px;
    text-align: center;
    background-color: white;
    border-radius: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
    padding: 8px;
    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
      color: #000000;
      margin-right: 12px;
    }
    img {
      margin-left: 19px;
      width: 16px;
      height: 16px;
    }
  }
  .button-section-parent-input {
    display: flex;
    border-radius: 13px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: 49px;
    padding-right: 8px;
    .input {
      all: unset;
      width: 97% !important;
      padding-right: 20px;
    }
    .icon {
      margin-top: 8px;
      margin-left: 20px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
