import { computed, reactive  } from 'vue'
let state = reactive({ sortType : null , sortField : null  })
export const sortType =  computed(() => { return state.sortType })
export const sortField =  computed(() => { return state.sortField })
export const setSortType = async ( value ) => { state.sortType = value }
export const setSortField = async ( value ) => { state.sortField = value}