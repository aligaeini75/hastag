<template>
  <div class="filter-name-parent">
    <v-snackbar
      location="top"
      color="success"
      v-model="snackBar"
      :timeout="2000"
    >
      فیلتر با موفقیت ثبت شد
    </v-snackbar>
    <div class="filter-name">
      <input v-model="text" placeholder="اسم فیلتر" />
    </div>
    <div class="filter-button" style="cursor: pointer" @click="submit()">
      <span v-if="loading == false">ذخیره فیلتر</span>
      <img v-if="loading == false" src="/images/filter-tick.svg" />
      <v-progress-circular
        v-else
        indeterminate
        color="black"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import { saveNewFilter, getFilter } from "../../../../composition/Filter/index";
export default defineComponent({
  components: {},
  setup() {
    const text = ref("");
    const loading = ref(false);
    const snackBar = ref(false);
    const submit = async () => {
      loading.value = true;
      const { data } = await saveNewFilter(text.value);
      if (data) {
        snackBar.value = true;
      }
      setTimeout(() => {
        loading.value = false;
        snackBar.value = false;
        getFilter();
      }, 2000);
    };
    return { text, submit, snackBar, loading };
  },
});
</script>
<style lang="scss">
.filter-name-parent {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  .filter-name {
    width: 100%;
    padding: 8px;
    border: 0.5px solid #888888;
    border-radius: 8px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    input {
      text-align: right;
    }
  }
  .filter-button {
    width: 100%;
    padding: 8px;
    border: 0.5px solid #888888;
    border-radius: 8px;
    height: 50px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 0.5px solid #5e7dbe;
    color: #5e7dbe;
    svg {
      fill: #5e7dbe;
    }
    span {
      font-weight: bold;
    }
  }
}
</style>
