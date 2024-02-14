import { computed, reactive  } from 'vue'
let state = reactive({ social : null ,  orderSearch : '' , orderShopSection : false , orderSaveSection : false })
export const social =  computed(() => { return state.social })
export const orderSearch =  computed(() => { return state.orderSearch })
export const orderShopSection =  computed(() => { return state.orderShopSection })
export const orderSaveSection =  computed(() => { return state.orderSaveSection })
export const setOrderSaveSection = ( value ) => {
    state.orderSaveSection = value 
}
export const setOrderShopSection = ( value ) => {
    state.orderShopSection = value
}
export const setSearch = ( value ) => {
    state.orderSearch = value 
}
export const setSocial = ( value ) => {
    state.social = value 
}