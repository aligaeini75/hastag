<template>
    <div :class="['input-item', idInput, 'mt-'+marginInput+'p']">
        <input type="checkbox" :id="idInput" name="nameInput" value="idInput">
        <label :for="idInput" class="font-size-14p color-404">
            <span class="circle"></span>
            <span class="title-box"><span class="color-5e7">{{ hTitleInput }}</span> <span class="">{{ titleInput }}</span></span>
        </label>
    </div>
</template>
<script>
    import { defineComponent } from '@nuxtjs/composition-api'
    export default defineComponent({
        components: {},
        props: {
            idInput: {
                type: String,
                required: true,
            },
            titleInput: {
                type: String,
                required: true,
            },
            hTitleInput: {
                type: String,
                required: true,
            },
            nameInput: {
                type: String,
                required: true,
            },
            marginInput: {
                type: String,
                required: true,
            },
        
        },
        setup(props){
            return {  }
        }
    })
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

    .mt-5p{margin-top: 5px;}
    .mt-10p{margin-top: 10px;}
    .mt-15p{margin-top: 15px;}

    input{display:none}
    label{display: flex;gap: 7px;align-items: center;}
    label .circle{width: 18px;height: 18px;border: 0.2px solid #404040;background: #EFEFEF;border-radius: 50%;position: relative;}

    input:checked+label .circle::after{content: "";width: 10px;height: 10px;border-radius: 50%;background: #5E7DBE;display: block;position: absolute;top: 0;bottom: 0;right: 0;left: 0;margin: auto;}

</style>