<template>
  <div class="buttons">
    <div class="right">
      <div
        class="item-2"
        :class="selected == true ? 'border' : ''"
        style="cursor: pointer"
        @click="
          () => {
            selected = !selected;
            addAllItemToBasket();
          }
        "
      >
        <span>انتخاب همه رسانه ها</span>
        <img src="/images/check.svg" />
      </div>
    </div>
    <div class="right">
      <div
        class="item-1"
        @click="changeSortField('price')"
        v-if="sortField == 'price'"
      >
        <span>قیمت</span>
        <img v-if="sortType && sortType == 'desc'" src="/images/sort.svg" />
        <img
          v-else-if="sortType && sortType == 'asc'"
          style="rotate: 360deg"
          src="/images/sort-rotate.png"
        />
      </div>
      <div class="item" @click="changeSortField('price')" v-else>قیمت</div>
      <!--  -->
      <div
        class="item-1"
        @click="changeSortField('members')"
        v-if="sortField == 'members'"
      >
        <span>کاربر</span>
        <img v-if="sortType && sortType == 'desc'" src="/images/sort.svg" />
        <img
          v-else-if="sortType && sortType == 'asc'"
          style="rotate: 360deg"
          src="/images/sort-rotate.png"
        />
      </div>
      <div class="item" @click="changeSortField('members')" v-else>کاربر</div>
      <!--  -->
      <div
        class="item-1"
        @click="changeSortField('visit_num')"
        v-if="sortField == 'visit_num'"
      >
        <span>بازدید</span>
        <img v-if="sortType && sortType == 'desc'" src="/images/sort.svg" />
        <img
          v-else-if="sortType && sortType == 'asc'"
          style="rotate: 360deg"
          src="/images/sort-rotate.png"
        />
      </div>
      <div class="item" @click="changeSortField('visit_num')" v-else>
        بازدید
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import {
  setSortField,
  setSortType,
  sortField,
  sortType,
} from "../../../../composition/Sort/index";
import {
  getChannelItems,
  channelsItem,
} from "../../../../composition/Channels/index";
import { categorySelected } from "../../../../composition/Category/index";
import {
  finalPlatform,
  attribute,
  members,
  price,
  visitNum,
  newFilter,
} from "../../../../composition/Filter/index";
import {
  shoppedItem,
  setShoppedItem,
} from "../../../../composition/Basket/index";
export default defineComponent({
  components: {},
  setup() {
    const selected = ref(false);
    const addAllItemToBasket = (value) => {
      if (selected.value == true) {
        console.log("sabts");
        let temp = shoppedItem.value;
        channelsItem.value.forEach((element) => {
          console.log("qwuehfe : ", element);
          temp.push({ ...element, count: 0 });
        });
        setShoppedItem(temp);
        console.log("shopped item : ", shoppedItem.value);
      } else {
        console.log("hazf");
        let temp = shoppedItem.value;
        channelsItem.value.forEach((element) => {
          temp = temp.filter((x) => x.id == element.id);
        });
        setShoppedItem(temp);
        console.log("shopped item : ", shoppedItem.value);
      }
    };
    const changeSortField = (_sortField) => {
      if (sortField.value) {
        if (sortField.value != _sortField) {
          console.log("ok");
          setSortType(null);
        }
      }
      setSortField(_sortField);

      if (sortType.value) {
        if (sortType.value == "desc") {
          setSortType("asc");
        } else if (sortType.value == "asc") {
          setSortType(null);
          setSortField(null);
        }
      } else {
        setSortType("desc");
      }
      getChannelItems(
        1,
        categorySelected.value,
        finalPlatform.value,
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value,
        sortField.value,
        sortType.value
      );
    };
    return {
      changeSortField,
      sortField,
      sortType,
      addAllItemToBasket,
      selected,
    };
  },
});
</script>
<style lang="scss">
.border {
  border: 1px solid #5e7dbe;
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 12px;
  .right {
    display: flex;
    flex-direction: row;
    gap: 8px;
    .item {
      width: 60px;
      height: 50px;
      border-radius: 13px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: white;
      gap: 4px;
      font-size: 13px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
      color: #000000;
      cursor: pointer;
    }
    .item-1 {
      width: 95px;
      height: 49px;
      border-radius: 13px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
      color: #edc764;
      border: 1px solid #edc764;
      background-color: white;
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
      cursor: pointer;

      img {
        fill: #edc764;
      }
    }
    .item-2 {
      width: 180px;
      height: 49px;
      border-radius: 13px;
      margin-right: 32px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
      color: #edc764;
      background-color: white;
      font-size: 13px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;

      img {
        fill: #edc764;
      }
      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #5e7dbe;
      }
    }
  }
  .left {
  }
}
@media screen and (max-width: 800px) {
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 12px;
    .right {
      display: flex;
      flex-direction: row;
      gap: 8px;
      .item {
        width: 60px;
        height: 50px;
        border-radius: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        gap: 4px;
        font-size: 13px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #000000;
        cursor: pointer;
      }
      .item-1 {
        width: 95px;
        height: 49px;
        border-radius: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #edc764;
        border: 1px solid #edc764;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        cursor: pointer;

        img {
          fill: #edc764;
        }
      }
      .item-2 {
        width: 180px;
        height: 49px;
        border-radius: 13px;
        margin-right: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #edc764;
        background-color: white;
        font-size: 13px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;

        img {
          fill: #edc764;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: right;
          color: #5e7dbe;
        }
      }
    }
    .left {
    }
  }
}
</style>
