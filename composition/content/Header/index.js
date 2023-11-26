import { computed, reactive  } from 'vue'

let state = reactive({ shoppingSection : false })
export const shoppingSection =  computed(() => { return state.shoppingSection })
export const setShoppingSection = ( value ) => { state.shoppingSection =  value }