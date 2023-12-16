import { computed, reactive  } from 'vue'
let state = reactive({ status : false })
export const status =  computed(() => { return state.status })
export const setStatus = ( value ) => { state.status = value }