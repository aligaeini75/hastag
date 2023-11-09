import { computed, reactive  } from 'vue'
let state = reactive({ calenderPopupStatus : false })
export const calenderPopupStatus =  computed(() => { return state.calenderPopupStatus })
export const setCalenderPopupStatus = ( value ) => { state.calenderPopupStatus = value }