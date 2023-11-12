<template>
    <div class="">
        <button type="submit">{{ buttonTitle }}</button>
    </div>    
</template>

<script>
    import { defineComponent } from '@nuxtjs/composition-api';
    export default defineComponent({
        components: {  },
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

<style lang="scss" scoped>

    button{
            width: 100%;
            height: 56px;
            border-radius: 7px;
            background: #DAE3F5;
            color: #5E7DBE!important;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
        }

</style>