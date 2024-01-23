import { computed, reactive  } from 'vue'
let state = reactive({ social : null ,  orderSearch : '' })
export const social =  computed(() => { return state.social })
export const orderSearch =  computed(() => { return state.orderSearch })
export const setSearch = ( value ) => {
    state.orderSearch = value 
}
export const setSocial = ( value ) => {
    state.social = value 
}