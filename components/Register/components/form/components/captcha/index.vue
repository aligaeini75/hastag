<template>
    <div class="input-item">
        <label class="font-weight-300 color-404 font-size-14p mb-2p">{{ titleInput }}</label>
        <img src="images/captcha-image.png" alt="">
    </div>
</template>
<script>

    import { defineComponent } from '@nuxtjs/composition-api';
    export default defineComponent({
        comments: {},
        props: {
            titleInput: {
                type: String,
                required: true,
            }
        },
        setup(props){
            return {}
        }
    })

</script>
<style scoped>

    .color-404 { color: #404040 !important; }
    .font-size-14p { font-size: 14px; }
    .font-size-10p { font-size: 10px; }
    .font-weight-300 { font-weight: 300; }
    .mb-2p { margin-bottom: 2px; }
    .w-100 { width: 100%; }
    img{width: 100%;height: 100%;}

</style>