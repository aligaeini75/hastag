<template>
  <div :class="['input-item', idInput]">
    <label :for="idInput" class="font-weight-300 color-404 font-size-14p mb-2p pr-10p" v-if="!isMobile()"><span class="origin">{{ titleInput }}</span><span class="subtitle font-size-10p" v-if="subTitleInput">{{ subTitleInput }}</span><span v-if="requireInput" class="require color-D85">*</span></label>
    <input :type="typeInput" :placeholder="isMobile() ? titleInput : ''" :id="idInput">
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    idInput: {
      type: String,
      required: true,
    },
    typeInput: {
      type: String,
      required: true,
    },
    titleInput: {
      type: String,
      required: true,
    },
    subTitleInput: {
      type: String,
      required: true,
    },
    requireInput: {
      type: Boolean,
      required: true,
    },

  },
  setup() {
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };



    return { isMobile };
  },
});
</script>

<style lang="scss" scoped>
  $font-family: 'YekanBakh';
  .color-404 { color: #404040 !important; }
  .color-D85 { color: #D85240; }
  .font-size-14p { font-size: 14px; }
  .font-size-10p { font-size: 10px; }
  .font-weight-300 { font-weight: 300; }
  .mb-2p { margin-bottom: 2px; }
  .w-100 { width: 100%; }
  .font-yekanBakh { font-family: $font-family !important; }
  .border-none { border: none; }
  .dir-rtl { direction: rtl; }
  .pr-10p{padding-right: 10px;}
  input { border-radius: 7px; border: 0.2px solid #878787; background: #F0F0F0; width: 100%; height: 50px; padding: 10px; }
  .input-item { width: calc(50% - 20px); display: flex; flex-direction: column; }

  @media(max-width:768px) {
    
}
</style>
