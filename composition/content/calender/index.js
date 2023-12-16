import { computed, reactive  } from 'vue'
let state = reactive({ calenderPopupStatus : false , pickerValue : '' })
export const calenderPopupStatus =  computed(() => { return state.calenderPopupStatus })
export const setCalenderPopupStatus = ( value ) => { state.calenderPopupStatus = value }
// 
export const pickerValue =  computed(() => { return state.pickerValue })
export const setPickerValue = ( value ) => { state.pickerValue = value }