<template>
    <div class="range-parent">
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
            ></v-range-slider>
        </div>
        <div class="range-buttons">
            <div class="button">
                برو
            </div>
            <div class="inputs">
                <div class="input-right">
                    <input placeholder="100" />
                </div>
                <div class="input-left">
                    <input placeholder="0" />
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
    const price = ref([0, 100])

  return {price}
},
})
</script>
<style lang="scss">
.range-parent {
    display: flex ;
    flex-direction: column ;
    gap: 8px ;
    width: 70% ;
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
        color: #404040 ;
        margin-top: 8px;
        font-weight: bold ;
        font-size: 1.2em;

    }
    .range-buttons {
        margin-top: -32px;
        display: flex ;
        flex-direction: row ;
        justify-content: space-between;
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
                width: 70px ;
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
                width: 70px ;
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
            border-radius: 8px;
            background-color: #5E7DBE;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center;
            color: white;
        }
    }
}

</style>

