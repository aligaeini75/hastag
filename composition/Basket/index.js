import { computed, reactive  } from 'vue'
let state = reactive({ shoppedItem : []  , shopItemChange : false})
export const shoppedItem =  computed(() => { return state.shoppedItem })
export const changeShopItem =  computed(() => { return state.shopItemChange })
export const setShoppedItem = async ( value ) => {
    state.shoppedItem = value
}
export const setchangeShopItem = async ( value ) => {
    state.shopItemChange = !state.shopItemChange
}