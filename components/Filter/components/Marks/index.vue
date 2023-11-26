<template>
    <div class="marks-parent">
        <div class="marks-title-desktop">
            نشانه ها
        </div>
        <div class="marks">
            <img class="image2" src="/images/marks/avoid.svg" />
            <img class="image2" src="/images/marks/like.svg" />
            <img class="image2" src="/images/marks/person.svg" />
            <img class="image" src="/images/marks/new.svg" />
            <img class="image" src="/images/marks/takhfif.svg" />
        </div>

    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
components : {
  
}, 
setup() {
  return { }
},
})
</script>
<style lang="scss">
.marks-parent {
    display: flex ;
    flex-direction: column ;
    gap: 8px ;
    .marks-title-desktop {
        width: 90% ;
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
    .marks { 
        width: 90% ;
        display: flex ;
        flex-direction: row ;
        justify-content: space-around ;
        .image {
            width:  50px ;
            height: 50px;
        }
        .image2 {
            width:  40px ;
            height: 40px;
            margin-top: 4px;
        }
    }
}

</style>

