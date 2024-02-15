<template>
    <div class="header-w-parent d-flex dir-rtl">
        <div class="logo">
            <img src="images/hashtag-text.svg" alt="">
            <img src="images/hashtag-icon.svg" alt="">
        </div>
        <a href="#" class="d-flex border-none"><img src="images/close.svg"></a>
    </div>
</template>
<script>
    import { defineComponent } from '@nuxtjs/composition-api'
    import "./index.scss"
    export default defineComponent({
        setup() {
            return {  }
        }
    })
</script>
<style lang="scss">
    .header-w-parent{width:100%;justify-content: space-between;}
    .header-w-parent .logo{display: flex; align-items: center;gap: 8px;flex-direction: row;}
    .d-flex{display:flex}
    .border-none{border:none;}
    .dir-rtl{direction:rtl;}

</style>