import { computed, reactive  } from 'vue'
import OrderDataService from '../../services/OrderDataService'
let state = reactive({ categoryItems : [] , categorySelected : [] , categoryLength : 2000 ,categoryChangeRequest : false  })
export const categoryItems =  computed(() => { return state.categoryItems })
export const categoryLength =  computed(() => { return state.categoryLength })
export const categorySelected =  computed(() => { return state.categorySelected })
export const categoryChangeRequest =  computed(() => { return state.categoryChangeRequest })
export const setCategoryItems = ( value ) => { state.categoryItems =  value }
export const getCategoryItems = async ( ) => {
    const { data } = await OrderDataService.getCategory()
     state.categoryItems = data.data.categories
}
export const changeCategoryLength = async ( ) => {
    state.categoryLength = state.categoryLength * 2
}
export const changeCategorySelected = ( value ) => {
    state.categorySelected = value
    state.categoryChangeRequest = !state.categoryChangeRequest
}
