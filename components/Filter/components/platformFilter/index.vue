<template>
  <div class="platform-parent">
    <div class="title-section">
      <div
        class="icons"
        style="cursor: pointer"
        @click="
          () => {
            changeFilterCancle();
            getChannelItems(1);
          }
        "
      >
        <img class="image" src="/images/filter-remove.svg" />
        <span style="margin-top: 4px">لغو فیلتر</span>
      </div>
      <div class="title">
        <span class="style1">فیلتر نتایج</span>
        <span class="style2">انتخاب پلتفرم</span>
      </div>
    </div>
    <FilterSection />
    <div class="filter-items">
      <div class="item">
        <form>
          <div
            class="form-group"
            :class="
              platform2.findIndex((x) => x == 2) >= 0 &&
              platform2.findIndex((x) => x == 3) >= 0
                ? 'blur'
                : ''
            "
          >
            <input
              type="checkbox"
              :disabled="
                platform2.findIndex((x) => x == 2) >= 0 &&
                platform2.findIndex((x) => x == 3) >= 0
                  ? true
                  : false
              "
              id="as1"
            />
            <label
              for="as1"
              class="s14"
              @click="
                platform2.findIndex((x) => x == 2) >= 0 &&
                platform2.findIndex((x) => x == 3) >= 0
                  ? null
                  : updateMedia(1)
              "
              >همه</label
            >
          </div>
        </form>
      </div>
      <div class="item">
        <form>
          <div
            class="form-group"
            :class="platform2.findIndex((x) => x == 1) >= 0 ? 'blur' : ''"
          >
            <input
              type="checkbox"
              id="as2"
              :disabled="platform2.findIndex((x) => x == 1) >= 0 ? true : false"
            />
            <label
              for="as2"
              class="s14"
              @click="
                platform2.findIndex((x) => x == 1) >= 0 ? null : updateMedia(2)
              "
              >تلگرام</label
            >
          </div>
        </form>
      </div>
      <div class="item">
        <form>
          <div
            class="form-group"
            :class="platform2.findIndex((x) => x == 1) >= 0 ? 'blur' : ''"
          >
            <input
              type="checkbox"
              id="as3"
              :disabled="platform2.findIndex((x) => x == 1) >= 0 ? true : false"
            />
            <label
              for="as3"
              class="s14"
              @click="
                platform2.findIndex((x) => x == 1) >= 0 ? null : updateMedia(3)
              "
              >ایستگرام</label
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { getChannelItems } from "../../../../composition/Channels/index";
import { categorySelected } from "../../../../composition/Category/index";
import FilterSection from "../FilterSection/index.vue";
import {
  platform2,
  setplatform,
  setFinalPlatform,
  price,
  members,
  visitNum,
  attribute,
  newFilter,
  changeFilterCancle,
} from "../../../../composition/Filter/index";
export default defineComponent({
  components: { FilterSection },
  setup() {
    const platformm = ref([]);
    const updateMedia = (id) => {
      setplatform(id);
      getChannelItems(
        1,
        categorySelected.value,
        getPlatform(platform2.value),
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value
      );
    };
    const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    const getPlatform = (platform) => {
      platformm.value = [];
      if (platform.findIndex((x) => x == 1) >= 0) {
        platformm.value.push("Telegram");
        platformm.value.push("Instagram");
      }
      if (platform.findIndex((x) => x == 2) >= 0) {
        platformm.value.push("Telegram");
      }
      if (platform.findIndex((x) => x == 3) >= 0) {
        platformm.value.push("Instagram");
      }
      setFinalPlatform(removeDuplicates(platformm.value));
      return removeDuplicates(platformm.value);
    };
    return { updateMedia, getChannelItems, changeFilterCancle, platform2 };
  },
});
</script>
<style lang="scss">
.blur {
  filter: blur(1px);
}
.s14 {
  font-size: 14px;
}
.form-group {
  display: block;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.form-group label:before {
  content: "";
  -webkit-appearance: none;
  background-color: #fff;
  border: 0.5px solid #888888;
  border-radius: 5px;
  width: 1.15em;
  height: 1.15em;
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.form-group input:checked + label:after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  right: 12px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.platform-parent {
  display: flex;
  flex-direction: column;

  padding: 8px;
  .title-section {
    width: 90%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title {
      display: flex;
      flex-direction: column;
      text-align: right;
      .style1 {
        font-weight: bold;
        color: #404040;
        font-size: 0.8em;
      }
      .style2 {
        color: #545454;
        font-size: 0.7em;
      }
    }
    .icons {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 8px;
      margin-top: 4px;
      span {
        color: #d85240;
        font-weight: bold;
        font-size: 0.9em;
      }
      svg {
        fill: #d85240;
      }
      .image {
        width: 30px;
        height: 30px;
      }
    }
  }
  .filter-items {
    width: 90%;
    direction: rtl;
    height: fit-content;
    border-radius: 0.5px solid #888888;
    background-color: #f8f8f8;
    border-radius: 8px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;

    .item {
      // input[type="checkbox"] {
      //     appearance: none;
      //     background-color: #fff;
      //     color: #888888;
      //     margin: 0;
      //     font: inherit;
      //     width: 1.15em;
      //     height: 1.15em;
      //     border: .5px solid #888888;
      //     border-radius: 0.15em;
      //     transform: translateY(-0.075em);
      //     border-radius: 5px;
      // }
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 50px;
      gap: 8px;
      margin-right: 16px;

      .text {
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #606060;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
