import { computed, reactive  } from 'vue'
let state = reactive({ channelLoading : false })
export const channelLoading =  computed(() => { return state.channelLoading })
export const setChannelLoading = async ( value ) => {
    state.channelLoading = value
}