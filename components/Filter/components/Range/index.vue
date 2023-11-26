<template>
    <div class="range-parent-desktop">
        <div class="range-title">
             {{ $props.title }}
        </div>
        <div class="range-sd">
            <v-range-slider
                v-model="price"
                :max="100"
                :min="0"
                :step="1"
                strict
                thumb-color="#ffffff"
                track-color="#ffffff"
            ></v-range-slider>
        </div>
        <div class="range-buttons">
            <div class="button">
                برو
            </div>
            <div class="inputs">
                <div class="input-right">
                    <input :placeholder="toFarsiNumber(100)" />
                </div>
                <div class="input-left">
                    <input :placeholder="toFarsiNumber(0)" />
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import { defineComponent , ref } from '@nuxtjs/composition-api'
export default defineComponent({
components : {
  
}, 
props: {
    title: {
      type: String,
      required: true,
    },
  },
setup( props ) {
    const toFarsiNumber = (n) =>  {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];   
            return n
              .toString()
              .split('')
              .map(x => farsiDigits[x])
              .join('');
  } 
    const price = ref([0, 100])

  return {price , toFarsiNumber}
},
})
</script>
<style lang="scss">
.range-parent-desktop {
    display: flex ;
    flex-direction: column ;
    gap: 8px ;
    width: 90% ;
    margin-top: 20px;
    .range-sd {
        display: flex ;
        flex-direction: row ;
        width: 100%;
        justify-content: center;
        padding: 4px;
    }
    .range-title {
        width: 100% ;
        height: fit-content;
        padding: 8px ;
        display: flex;
        flex-direction: row ;
        justify-content: flex-end ;
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
        color: #404040;


    }
    .range-buttons {
        margin-top: -32px;
        display: flex ;
        flex-direction: row ;
        // justify-content: space-between;
        padding: 8px;
        .inputs {
            display: flex ;
            flex-direction: row ;
            gap: 2px ;
            input{
                width: 30px;
                text-align: center;
            }
            .input-right {
                width: 100px ;
                height: 40px ;
                background-color: #F0F0F0;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                border-top-left-radius: 8px ;
                border-bottom-left-radius: 8px;

                
            }
            .input-left {
                width: 100px ;
                height: 40px ;
                background-color: #F0F0F0;
                display: flex ;
                flex-direction: row ;
                justify-content: center ;
                align-items: center;
                border-top-right-radius: 8px ;
                border-bottom-right-radius: 8px;
            }
        }
        .button {
            width: 80px ;
            height: 40px ;
            border-radius: 13px;
            background-color: #5E7DBE;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            color: white;
            margin-right: 10px;
        }
    }
}

</style>

