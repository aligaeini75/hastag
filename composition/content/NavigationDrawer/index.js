import { computed, reactive  } from 'vue'

let state = reactive({ navigationDrawer : false })
export const navigationDrawer =  computed(() => { return state.navigationDrawer })
export const setNavigationDrawer = ( ) => { state.navigationDrawer =  !state.navigationDrawer }