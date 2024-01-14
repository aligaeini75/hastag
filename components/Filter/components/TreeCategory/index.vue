<template>
  <div
    style="
      width: 255px;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      direction: rtl;
    "
  >
    <div class="expansion-panel">
      <div class="item">
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd${categoryItemsId}`"
              @click="
                (e) => {
                  instagramCheck = !instagramCheck;
                  packageCheck1 = !packageCheck1;
                  packageCheck2 = !packageCheck2;
                  packageTelegram = !packageTelegram;
                  parentInputClick(categoryItemsValue, e.target.checked);
                }
              "
            />
            <label
              :for="`${categoryItemsId}dd${categoryItemsId}`"
              class="s14"
              >{{ categoryItemsValue.title }}</label
            >
          </div>
        </form>
      </div>
      <img
        src="/images/category/arrow-down.svg"
        style="width: 18px; height: 18px; margin-left: 8px; cursor: pointer"
        @click="subMenu = !subMenu"
      />
    </div>
    <div class="tree-box" v-if="subMenu == true">
      <!-- telegram -->
      <div
        class="item"
        v-if="
          (categoryItemsValue.telegram.package.hourly.ids.length ||
            categoryItemsValue.telegram.package.visit.ids.length ||
            categoryItemsValue.telegram.hourly.length) &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd14`"
              :checked="packageTelegram && packageCheck1 && packageCheck2"
              @click="
                (e) => {
                  changeroute(`dashboard/telegram/title${categoryItemsId}`);
                  packageTelegram = !packageTelegram;
                  packageCheck1 = !packageCheck1;
                  packageCheck2 = !packageCheck2;
                  telegramCategoryCheck(categoryItemsValue, e.target.checked);
                }
              "
            />
            <label :for="`${categoryItemsId}dd14`" class="s14">تلگرام</label>
          </div>
        </form>
        <img
          src="/images/category/arrow-down.svg"
          @click="telegram = !telegram"
          style="width: 18px; height: 18px; margin-left: 8px"
          class="cursor"
        />
      </div>
      <!-- telegram-submenu -->
      <div
        class="item2"
        v-if="
          telegram == true &&
          categoryItemsValue.telegram.hourly.length > 0 &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd15`"
              :checked="packageTelegram"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/telegram/title${categoryItemsId}/Hourly`
                  );
                  packageTelegram = !packageTelegram;
                  telegramHourly1CategoryCheck(
                    categoryItemsValue,
                    e.target.checked
                  );
                }
              "
            />
            <label :for="`${categoryItemsId}dd15`" class="s14">ساعتی</label>
          </div>
        </form>
        <img
          src="/images/category/arrow-down.svg"
          style="width: 18px; height: 18px; margin-left: 8px"
          class="cursor"
          v-if="categoryItemsValue.telegram.hourly.length > 1"
          @click="telegramLevel1 = !telegramLevel1"
        />
      </div>
      <div
        class="item3"
        v-for="(x, index) in categoryItemsValue.telegram.hourly"
        v-if="
          telegram == true &&
          telegramLevel1 == true &&
          categoryItemsValue.telegram.hourly.length > 1 &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}ddd${{ index }}`"
              :checked="packageTelegram"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/telegram/title${categoryItemsId}/Hourly/Hourly${categoryItemsValue.telegram.hourly[index].id}`
                  );
                  telegramHourlyCategoryCheck(
                    categoryItemsValue,
                    e.target.checked,
                    index
                  );
                }
              "
            />
            <label :for="`${categoryItemsId}ddd${{ index }}`" class="s14">{{
              x.title
            }}</label>
          </div>
        </form>
      </div>
      <div
        class="item2"
        v-if="
          telegram == true &&
          (categoryItemsValue.telegram.package.hourly.ids.length ||
            categoryItemsValue.telegram.package.visit.ids.length) &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd17`"
              :checked="packageCheck1 == true && packageCheck2 == true"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/telegram/title${categoryItemsId}/Package`
                  );
                  packageCheck1 = !packageCheck1;
                  packageCheck2 = !packageCheck2;
                  telegramPackageCategoryCheck(
                    categoryItemsValue,
                    e.target.checked
                  );
                }
              "
            />
            <label :for="`${categoryItemsId}dd17`" class="s14">پکیج</label>
          </div>
        </form>
        <img
          src="/images/category/arrow-down.svg"
          style="width: 18px; height: 18px; margin-left: 8px"
          class="cursor"
          @click="telegramLevel2 = !telegramLevel2"
          v-if="
            (categoryItemsValue.telegram.package.hourly.ids.length ||
              categoryItemsValue.telegram.package.visit.ids.length) &&
            (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
              finalPlatform.length == 0)
          "
        />
      </div>
      <!-- telegram package submenu -->
      <div
        class="item3"
        v-if="
          telegram == true &&
          telegramLevel2 == true &&
          categoryItemsValue.telegram.package.hourly.ids.length > 0 &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd18`"
              :checked="packageCheck1"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/telegram/title${categoryItemsId}/Package/Hourly`
                  );
                  telegramPackageHourlyCategoryCheck(
                    categoryItemsValue,
                    e.target.checked
                  );
                  packageCheck1 = !packageCheck1;
                }
              "
            />
            <label :for="`${categoryItemsId}dd18`" class="s14">ساعتی</label>
          </div>
        </form>
        <!-- <img
        src="/images/category/arrow-down.svg"
        style="width: 18px; height: 18px; margin-left: 8px"
      /> -->
      </div>
      <div
        class="item3"
        v-if="
          telegram == true &&
          telegramLevel2 == true &&
          categoryItemsValue.telegram.package.visit.ids.length > 0 &&
          (finalPlatform.findIndex((x) => x == 'Telegram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd19`"
              :checked="packageCheck2"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/telegram/title${categoryItemsId}/Package/Visit`
                  );
                  telegramPackageVisitCategoryCheck(
                    categoryItemsValue,
                    e.target.checked
                  );
                  packageCheck2 = !packageCheck2;
                }
              "
            />
            <label :for="`${categoryItemsId}dd19`" class="s14">بازدیدی</label>
          </div>
        </form>
        <!-- <img
        src="/images/category/arrow-down.svg"
        style="width: 18px; height: 18px; margin-left: 8px"
      /> -->
      </div>
      <!-- instagram -->
      <div
        class="item"
        v-if="
          categoryItemsValue.instagram.story.ids.length > 0 &&
          (finalPlatform.findIndex((x) => x == 'Instagram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd12`"
              :checked="instagramCheck == true"
              @click="
                (e) => {
                  changeroute(`dashboard/instagram/title${categoryItemsId}`);
                  instagramCheck = !instagramCheck;
                  instagramCatgeoryCheck(categoryItemsValue, e.target.checked);
                }
              "
            />
            <label :for="`${categoryItemsId}dd12`" class="s14">اینستگرام</label>
          </div>
        </form>
        <img
          @click="instagram = !instagram"
          src="/images/category/arrow-down.svg"
          style="width: 18px; height: 18px; margin-left: 8px"
          class="cursor"
        />
      </div>
      <!-- instagram story -->
      <div
        class="item2"
        v-if="
          instagram == true &&
          categoryItemsValue.instagram.story.ids.length > 0 &&
          (finalPlatform.findIndex((x) => x == 'Instagram') >= 0 ||
            finalPlatform.length == 0)
        "
      >
        <form>
          <div class="form-group">
            <input
              type="checkbox"
              :id="`${categoryItemsId}dd13`"
              :checked="instagramCheck"
              @click="
                (e) => {
                  changeroute(
                    `dashboard/instagram/title${categoryItemsId}/story`
                  );
                  instagramCheck = !instagramCheck;
                  instagramCatgeoryCheck(categoryItemsValue, e.target.checked);
                }
              "
            />
            <label :for="`${categoryItemsId}dd13`" class="s14">استوری</label>
          </div>
        </form>
        <!-- <img
        src="/images/category/arrow-down.svg"
        style="width: 18px; height: 18px; margin-left: 8px"
      /> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  watch,
  nextTick,
  useRouter,
} from "@nuxtjs/composition-api";
import { extremum } from "../../../../composition/Channels/index";
import { finalPlatform } from "../../../../composition/Filter/index";
import {
  changeCategorySelected,
  categorySelected,
} from "../../../../composition/Category/index";

export default defineComponent({
  components: {},
  props: {
    categoryItemsValue: {
      type: Object,
      required: true,
    },
    categoryItemsId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const selectionType = ref("leaf");
    const selection = ref([]);
    const instagram = ref(false);
    const telegram = ref(false);
    const instagramLevel1 = ref(false);
    const telegramLevel1 = ref(false);
    const telegramLevel2 = ref(false);
    const instagramCheck = ref(false);
    const packageCheck1 = ref(false);
    const packageCheck2 = ref(false);
    const packageTelegram = ref(false);
    const subMenu = ref(false);
    const router = useRouter();
    const ids = ref([]);
    const changeroute = (value) => {
      router.replace("/dashboard");
      setTimeout(() => {
        router.replace(value);
      }, 100);
    };
    watch(telegram, () => {
      if (telegram.value == true && instagram.value == true) {
        router.replace("/dashboard");
      }
    });
    watch(instagram, () => {
      if (telegram.value == true && instagram.value == true) {
        router.replace("/dashboard");
      }
    });
    const removeDuplicates = (arr) => {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    watch(finalPlatform, () => {});
    const removeArrayFromArray = (toRemove) => {
      let temp = categorySelected.value.filter(function (el) {
        return toRemove.indexOf(el) < 0;
      });
      changeCategorySelected(temp);
    };
    onMounted(async () => {});
    const telegramHourly1CategoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const telegramHourlyCategoryCheck = (value, status, index) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat([value.telegram.hourly[index].id]);
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat([value.telegram.hourly[index].id]);
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const telegramPackageHourlyCategoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const telegramPackageVisitCategoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const telegramPackageCategoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const telegramCategoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const instagramCatgeoryCheck = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.instagram.story.ids);
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.instagram.story.ids);
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };
    const parentInputClick = (value, status) => {
      ids.value = [];
      if (status == true) {
        ids.value = ids.value.concat(value.instagram.story.ids);
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        changeCategorySelected(
          categorySelected.value.concat(removeDuplicates(ids.value))
        );
      } else {
        ids.value = ids.value.concat(value.instagram.story.ids);
        ids.value = ids.value.concat(value.telegram.package.hourly.ids);
        ids.value = ids.value.concat(value.telegram.package.visit.ids);
        for (var x = 0; x < value.telegram.hourly.length; x++) {
          ids.value = ids.value.concat([value.telegram.hourly[x].id]);
        }
        removeArrayFromArray(removeDuplicates(ids.value));
      }
    };

    return {
      selectionType,
      selection,
      instagram,
      telegram,
      instagramLevel1,
      telegramLevel1,
      telegramLevel2,
      instagramCheck,
      packageTelegram,
      packageCheck1,
      packageCheck2,
      changeCategorySelected,
      subMenu,
      parentInputClick,
      instagramCatgeoryCheck,
      telegramCategoryCheck,
      telegramPackageCategoryCheck,
      telegramPackageVisitCategoryCheck,
      telegramPackageHourlyCategoryCheck,
      telegramHourlyCategoryCheck,
      telegramHourly1CategoryCheck,
      finalPlatform,
      changeroute,
    };
  },
});
</script>
<style scope lang="scss">
.s14 {
  font-size: 12px;
}
.hr-parent-bottom1 {
  width: 100%;
  margin-top: -30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  .hr {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 1px;
    border-radius: 50%;
    background-color: #adadad;
    align-self: center;
    justify-content: center;
    margin-top: 32px;
  }
}
.cursor {
  cursor: pointer;
}
.expansion-panel {
  width: 100%;
  background-color: #f0f0f0;
  // padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  direction: rtl;
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    gap: 8px;

    .text {
      font-size: 14px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
      color: #606060;
    }
  }
}
.tree-box {
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: -20px;
  padding-top: 32px;
  padding-bottom: 8px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  .item {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .item2 {
    width: 100%;
    padding-right: 32px;
    padding-left: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .item3 {
    width: 100%;
    padding-right: 46px;
    padding-left: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
}
.form-group1 {
  display: block;
}

.form-group1 input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  margin-left: 8px;
  display: none;
  cursor: pointer;
}

.form-group1 label {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
}

.form-group1 label:before {
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

.form-group1 input:checked + label:after {
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
.container {
  direction: rtl;
  // input[type="checkbox"] {
  //             appearance: none;
  //             background-color: #fff;
  //             color: #888888;
  //             margin: 0;
  //             font: inherit;
  //             width: 1.15em;
  //             height: 1.15em;
  //             border: .5px solid #888888;
  //             border-radius: 0.15em;
  //             transform: translateY(-0.075em);
  //             border-radius: 5px;
  //         }
}
</style>
