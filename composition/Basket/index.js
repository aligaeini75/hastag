import { computed, reactive  } from 'vue'
let state = reactive({ apiShopItems : null , uuid : null , shoppedItem : []  , shopItemChange : false})
export const shoppedItem =  computed(() => { return state.shoppedItem })
export const uuid =  computed(() => { return state.uuid })
export const changeShopItem =  computed(() => { return state.shopItemChange })
export const apiShopItems =  computed(() => { return state.apiShopItems })
export const setApiItemShops = ( value ) => {
    state.apiShopItems = value 
}
export const setUuid = ( value ) => {
    state.uuid = value 
}
export const setShoppedItem = async ( value ) => {
    state.shoppedItem = value
}
export const setchangeShopItem = async ( value ) => {
    state.shopItemChange = !state.shopItemChange
}