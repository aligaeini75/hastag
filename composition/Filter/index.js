import { computed, reactive  } from 'vue'
import OrderDataService from '../../services/OrderDataService'
import { sortField , sortType} from '../Sort/index'
import { categorySelected } from '../Category/index'
import { setChannelItems , setAllItem  } from '../Channels/index'
let state = reactive({ filterSectionSearch : '' , cancleFilter : false , savedFilter : [] , platforms : [] , platformRequest : false , price : null , visitNum : null , members : null,  finalPlatform : [] , new : null , attributeTemp : [] , attribute : null , startDate : null , endDate : null  })
export const platform2 =  computed(() => { return state.platforms })
export const finalPlatform =  computed(() => { return state.finalPlatform })
export const newFilter =  computed(() => { return state.new })
export const price =  computed(() => { return state.price })
export const visitNum =  computed(() => { return state.visitNum })
export const members =  computed(() => { return state.members })
export const attribute =  computed(() => { return state.attribute })
export const attributeTemp =  computed(() => { return state.attributeTemp })
export const startDate =  computed(() => { return state.startDate })
export const endDate =  computed(() => { return state.endDate })
export const savedFilter = computed(() => { return state.savedFilter })
export const cancleFilter = computed(() => { return state.cancleFilter })
export const filterSectionSearch = computed(() => { return state.filterSectionSearch })
export const setFilterSectionSearch = ( value ) => { state.filterSectionSearch = value }
export const setStartDate = ( value ) => { state.startDate = value }
export const setEndDate = ( value ) => { state.endDate = value }
export const setAttribute = ( value ) => { state.attribute = value }
export const setPrice = ( value ) => { state.price = value }
export const setVisitNum = ( value ) => { state.visitNum = value }
export const setMembers = ( value ) => { state.members = value }
export const setFinalPlatform = ( value ) => { state.finalPlatform = value }
export const emptyFilter = () => {
    state.platforms = []
    state.platformRequest = false 
    state.price = null 
    state.visitNum = null 
    state.members = null 
    state.finalPlatform = []
    state.new = null  
    state.attributeTemp = []
    state.attribute = null 
    state.startDate = null  
    state.endDate = null    

}
export const changeFilterCancle = () => {
    state.cancleFilter = !state.cancleFilter
}
export const changeNewFilter = () => {
    if( state.new == null || state.new == 0 ) {
        state.new = 1
    }else {
        state.new = 0
    }
}
export const setplatform = ( id ) => {
    if( state.platforms.findIndex( x => x == id ) >= 0 ) {
        state.platforms = state.platforms.filter( x => x != id )
    }else {
        state.platforms.push( id )
    }
    state.platformRequest = !state.platformRequest
}
export const setAttributeTemp = ( id ) => {
    if( state.attributeTemp.findIndex( x => x == id ) >= 0 ) {
        state.attributeTemp = state.attributeTemp.filter( x => x != id )
    }else {
        state.attributeTemp.push( id )
    }
}
export const saveNewFilter = async  ( name ) =>  {
    const data = await OrderDataService.setFilter( name , sortField.value , state.finalPlatform , categorySelected.value , state.price ? state.price[0] : null , state.price ?  state.price[1] : null , state.members ? state.members[0] : null  , state.members ? state.members[1] : null , state.visitNum ? state.visitNum[0] : null  , state.visitNum ? state.visitNum[1] : null  , state.attribute , state.new , sortType.value  )
    console.log("data saved new filter : " , data)
    return data

}
export const getFilter = async () => {
    const data = await OrderDataService.getFilter()
    state.savedFilter = data.data.data.items
    return data.data.data.items
}
export const getFilterId = async ( id ) => {
    const data = await OrderDataService.getFilterId( id )
    console.log("filter id : " , data.data.data.items)
    setChannelItems( data.data.data.items )
    setAllItem( data.data.data.total )
}