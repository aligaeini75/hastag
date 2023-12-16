import { computed, reactive  } from 'vue'
let state = reactive({ status : false })
export const status =  computed(() => { return state.status })
export const setStatus1 = ( value ) => { state.status = value }