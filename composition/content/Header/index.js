import { computed, reactive  } from 'vue'

let state = reactive({ shoppingSection : false , headerSearch : null })
export const shoppingSection =  computed(() => { return state.shoppingSection })
export const headerSearch = computed(() => { return state.headerSearch })
export const setShoppingSection = ( value ) => { state.shoppingSection =  value }
export const setHeaderSearch = ( value ) => { state.headerSearch =  value }