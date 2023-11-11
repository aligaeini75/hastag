<template>
    <div class="">
        <button type="submit">{{ buttonTitle }}</button>
    </div>    
</template>
<script>

    import { defineComponent } from '@nuxtjs/composition-api';
    export default defineComponent({
        components: {},
        props: {
            buttonTitle: {
                type: String,
                required: true,
            }
        },
        setup(props){
            return {  }
        }
    })

</script>
<style>

    button{
        width: 100%;
        height: 38px;
        border-radius: 7px;
        background: #5E7DBE;
        color: #FFF!important;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }

</style>