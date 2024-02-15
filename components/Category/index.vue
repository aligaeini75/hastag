<template>
  <div class="category-parent">
    <div class="search-box">
      <v-text-field
        solo
        style="direction: rtl"
        label="جستجو"
        v-model="categorySearch"
        prepend-inner-icon="mdi-magnify"
        reverse
        id="32"
      ></v-text-field>
    </div>
    <div class="hr-parent-category-top">
      <div class="hr"></div>
    </div>
    <div
      id="style-1"
      style="
        overflow-y: scroll;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
      "
      :style="{ height: `${categoryLengthLocal}px` }"
    >
      <div
        v-for="(item, index) in categoryItems.filter((x) =>
          x.title.includes(categorySearch)
        )"
        :key="index"
      >
        <Tree :categoryItemsValue="item" :categoryItemsId="index" />
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
import {
  getCategoryItems,
  categoryItems,
} from "../../composition/Category/index";
import Tree from "../Filter/components/TreeCategory/index.vue";
import {
  categoryLength,
  categorySelected,
  changeCategorySelected,
} from "../../composition/Category/index";
export default defineComponent({
  components: { Tree },
  setup() {
    const panel = ref(0);
    const panel2 = ref([0, 1]);
    const categoryLengthLocal = ref(2000);
    const test = ref(true);
    const categoryDetail = ref([]);
    const categorySearch = ref("");
    const changeCategoryDetail = (value) => {
      if (categoryDetail.value.findIndex((x) => x == value) < 0) {
        categoryDetail.value.push(value);
      } else {
        categoryDetail.value = categoryDetail.value.filter((x) => x != value);
      }
    };
    onMounted(() => {
      getCategoryItems();
    });

    watch(panel, (value) => {}, { immediate: true, deep: true });
    watch(categoryLength, () => {
      categoryLengthLocal.value = categoryLengthLocal.value * 2;
    });
    watch(categorySearch, (value) => {});
    return {
      test,
      panel,
      panel2,
      categoryItems,
      categoryLengthLocal,
      changeCategorySelected,
      changeCategoryDetail,
      categoryDetail,
      categorySearch,
    };
  },
});
</script>
<style lang="scss">
.v-treeview-node {
  direction: rtl;
}
.s14 {
  font-size: 14px;
}
.new {
  padding: 50px;
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
#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 0;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9e9e9e;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  width: 260px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.theme--light.v-divider {
  display: none;
  border-color: rgba(0, 0, 0, 0.12);
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
.category-parent {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 400px !important;
  height: 100%;
  align-self: center;
  .search-box {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hr-parent {
    width: 100%;
    margin-top: -30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .hr {
      display: flex;
      width: 90%;
      height: 1px;
      border-radius: 50%;
      background-color: #adadad;
      align-self: center;
      margin-top: 32px;
    }
  }

  .hr-parent-category-top {
    width: 185px;
    margin-top: -30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .hr {
      display: flex;
      width: 90%;
      height: 1px;
      border-radius: 50%;
      background-color: #adadad;
      align-self: center;
      margin-top: 32px;
    }
  }
  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none !important;
  }
  .v-expansion-panel-header__icon {
    position: absolute;
    left: 30px;
  }
  .v-expansion-panel-header {
    font-weight: bold;
  }
}
@media only screen and (max-width: 600px) {
  .category-parent {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100% !important;
    height: 100%;
    align-self: center;
  }
}
</style>
