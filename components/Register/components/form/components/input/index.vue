<template>
    <div class="d-flex flex-column input-item">
        <label :for="idInput" class="font-weight-300 color-404 font-size-14p mb-2p" v-if="isMobile">{{ titleInput }}</label>
        <input :type="typeIput" :placeholder="isMobile ? titleInput : ''" :id="idInput">
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
        typeIput: {
        type: String,
        required: true,
        },
        titleInput: {
        type: String,
        required: true,
        },

        
    },
    setup(props) {
      const isMobile = () =>  {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
    }
    return { isMobile }
    },
  });

</script>

<style scoped>
  .color-404{color:#404040!important;}
  .color-5e7{color:#5E7DBE!important;}


  .font-size-22p{font-size:22px;}
  .font-size-16p{font-size:16px;}
  .font-size-14p{font-size:14px;}

  .font-weight-300{font-weight:300}
  .font-weight-400{font-weight:400}
  .font-weight-500{font-weight:500}
  .font-weight-600{font-weight:600}

  .align-items-center{align-items:center}

  .justify-content-between{justify-content:space-between}

  .flex-column{flex-direction:column;}

  .m-0{margin:0!important;}
  .mt-16p{margin-top:16px}
  .mt-12p{margin-top:12px}

  .mb-2p{margin-bottom:2px}

  .w-100{width:100%}

  .font-yekanBakh{font-family: $font-family!important;}

  .d-flex{display:flex}
  .border-none{border:none;}
  .dir-rtl{direction:rtl;}

  input{border-radius: 7px;border: 0.2px solid #878787;background: #F0F0F0;width:100%;height:50px;padding:10px}

  .input-item{width:calc(50% - 20px);}
</style>