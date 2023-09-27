<template>
    <div class="marks-parent">
        <div class="marks-title">
            نشانه ها
        </div>
        <div class="marks">
            <img class="image2" src="images/marks/avoid.svg" />
            <img class="image2" src="images/marks/like.svg" />
            <img class="image2" src="images/marks/person.svg" />
            <img class="image" src="images/marks/new.svg" />
            <img class="image" src="images/marks/takhfif.svg" />
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
    .marks-title {
        width: 70% ;
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
    .marks { 
        width: 70% ;
        display: flex ;
        flex-direction: row ;
        justify-content: space-around ;
        .image {
            width:  65px ;
            height: 65px;
        }
        .image2 {
            width:  50px ;
            height: 50px;
            margin-top: 4px;
        }
    }
}

</style>

