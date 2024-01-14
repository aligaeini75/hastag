import { computed, reactive  } from 'vue'
let state = reactive({ calenderPopupStatus : false , pickerValue : '' , calenderMedia : null  })
export const calenderPopupStatus =  computed(() => { return state.calenderPopupStatus })
export const setCalenderPopupStatus = ( value ) => { state.calenderPopupStatus = value }
// 
export const pickerValue =  computed(() => { return state.pickerValue })
export const setPickerValue = ( value ) => { state.pickerValue = value }
// 
export const calenderMedia =  computed(() => { return state.calenderMedia })
export const setCalenderMedia = ( value ) => { state.calenderMedia = value }

