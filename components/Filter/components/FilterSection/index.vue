<template>
  <div class="filter-section-parent">
    <div class="filter-section-top">
      <div class="filter-section-top-right">
        <img src="images/filter-tick2.svg" />
        <div>فیلتر های ذخیره شده</div>
      </div>
      <div class="filter-section-top-left" @click="open = !open">
        <img src="images/filter-section-icon.svg" />
      </div>
    </div>
    <div
      v-if="open"
      style="
        width: 100%;
        height: 40px;
        background-color: #e4e4e4;
        border-radius: 8px;
        margin-top: 16px;
      "
    >
      <input
        style="width: 100%; height: 100%; padding: 8px"
        class="a"
        v-model="search"
        placeholder="جستجو کنید"
      />
    </div>
    <!--  -->
    <div class="filter-section-item border" v-if="filterSectionSelected">
      {{ filterSectionSelected.title }}
    </div>
    <!--  -->
    <div
      class="filter-section-item"
      v-if="open"
      :class="selectedItem == index ? 'border' : ''"
      v-for="(x, index) in savedFilter.filter((x) =>
        x.title.includes(filterSectionSearch)
      )"
      @click="
        () => {
          open = false;
          setFilterSectionSelected(x);
          laodFilter(x, index);
        }
      "
    >
      {{ x.title }}
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  watch,
} from "@nuxtjs/composition-api";
import {
  savedFilter,
  getFilter,
  getFilterId,
  setFilterSectionSearch,
  filterSectionSearch,
  cancleFilter,
} from "../../../../composition/Filter/index";
export default defineComponent({
  components: {},
  setup() {
    const open = ref(false);
    const selectedItem = ref(-1);
    const search = ref("");
    const filterSectionSelected = ref(null);
    const setFilterSectionSelected = (x) => {
      filterSectionSelected.value = x;
      console.log("filterSectionSearch : ", filterSectionSelected.value);
    };
    watch(search, (value) => {
      setFilterSectionSearch(value);
    });
    watch(cancleFilter, (value) => {
      filterSectionSelected.value = null;
    });
    onMounted(() => {
      getFilter();

      console.log("getFilter : ", savedFilter.value);
    });
    const laodFilter = (item, index) => {
      selectedItem.value = index;
      getFilterId(item.id);
    };
    return {
      open,
      savedFilter,
      laodFilter,
      selectedItem,
      filterSectionSearch,
      search,
      filterSectionSelected,
      setFilterSectionSelected,
    };
  },
});
</script>
<style lang="scss">
.a::placeholder {
  font-size: 12px;
}
.border {
  border: 1px solid #5e7dbe;
}
.filter-section-parent {
  width: 260px;
  direction: rtl;
  background-color: #f5f5f5;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  .filter-section-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .filter-section-top-right {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 8px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      text-align: right;
      color: #404040;
    }
    .filter-section-top-left {
      img {
        width: 16px;
        height: 16px;
        margin-top: 8px;
      }
    }
  }
  .filter-section-item {
    // width: 231px;
    height: 44px;
    border-radius: 13px;
    margin-top: 8px;
    background-color: #e4e4e4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: #404040;
    cursor: pointer;
  }
}
@media screen and (max-width: 800px) {
  .filter-section-parent {
    width: 335px;
    direction: rtl;
    background-color: #f5f5f5;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    padding: 14px;
    .filter-section-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .filter-section-top-right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        text-align: right;
        color: #404040;
      }
      .filter-section-top-left {
        img {
          width: 16px;
          height: 16px;
          margin-top: 8px;
        }
      }
    }
    .filter-section-item {
      // width: 231px;
      height: 44px;
      border-radius: 13px;
      margin-top: 8px;
      background-color: #e4e4e4;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      text-align: right;
      color: #404040;
      cursor: pointer;
    }
  }
}
</style>
