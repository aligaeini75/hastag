<template>
  <v-app>
    <Nuxt />
  </v-app>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "emptyLayout",
  components: {},
  watch: {
    navigationDrawer: function (val) {},
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
