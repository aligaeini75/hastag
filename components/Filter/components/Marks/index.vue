<template>
  <div class="filter-marks-parent">
    <div class="filter-marks-title-desktop">نشانه ها</div>
    <div class="filter-marks">
      <img
        class="image2"
        src="/images/marks/avoid.svg"
        :class="attribute && attribute == 'block' ? 'shadow' : ''"
        @click="changeAttribute('block')"
      />
      <img
        class="image2"
        src="/images/marks/like.svg"
        :class="attribute && attribute == 'favorite' ? 'shadow' : ''"
        @click="changeAttribute('favorite')"
      />
      <img
        :class="newFilter == 1 ? 'shadow' : ''"
        class="image"
        src="/images/marks/new.svg"
        @click="changeNew()"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import {
  changeNewFilter,
  setAttributeTemp,
  setAttribute,
  attribute,
  attributeTemp,
  newFilter,
  finalPlatform,
  price,
  members,
  visitNum,
} from "../../../../composition/Filter/index";
import { getChannelItems } from "../../../../composition/Channels/index";
import { categorySelected } from "../../../../composition/Category/index";
export default defineComponent({
  components: {},
  setup() {
    const newSelect = ref(false);
    const localAttribute = ref([]);
    const changeNew = () => {
      changeNewFilter();
      getChannelItems(
        1,
        categorySelected.value,
        finalPlatform.value,
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value
      );
    };
    const changeAttribute = (id) => {
      if (attribute.value == id) {
        setAttribute(null);
      } else {
        setAttribute(id);
      }

      getChannelItems(
        1,
        categorySelected.value,
        finalPlatform.value,
        price.value,
        members.value,
        visitNum.value,
        attribute.value,
        newFilter.value
      );
    };
    return { changeNew, changeAttribute, attribute, newFilter };
  },
});
</script>
<style lang="scss">
.shadow {
  filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.1));
}
.filter-marks-parent {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .filter-marks-title-desktop {
    width: 90%;
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
  .filter-marks {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    .image {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .image2 {
      width: 40px;
      height: 40px;
      margin-top: 4px;
      cursor: pointer;
    }
  }
}
</style>
