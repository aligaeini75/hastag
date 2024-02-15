<template>
  <h1 style="margin: 0 auto">در حال انتقال به صفحه داشبورد</h1>
</template>
<script>
import { defineComponent, onMounted, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {},
  layout: "emptyLayout",
  setup() {
    const router = useRouter();
    onMounted(() => {
      setTimeout(() => {
        router.replace("/dashboard");
      }, 3000);
    });
    return {};
  },
});
</script>
<style scoped></style>
