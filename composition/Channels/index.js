import { computed, reactive  } from 'vue'
import OrderDataService from '../../services/OrderDataService'
import { setChannelLoading } from '../../composition/Loading/index'
let state = reactive({  allItems : 0 , channelsItem : [] , extremum : null })
export const channelsItem =  computed(() => { return state.channelsItem })
export const extremum =  computed(() => { return state.extremum })
export const allItems =  computed(() => { return state.allItems })
export const setChannelItems = ( value ) => { state.channelsItem =  value }
export const setAllItem = ( value ) => { state.allItems =  value }
export const getChannelItems = async ( page , categoryIds = null , platform = null , price = null , members = null , visitNum = null , attribute = null , newFilter = null , sortField = null, sortType = null , freeDateBegin = null , freeDateEnd = null , searchHeader = null ) => {
    setChannelLoading( true )
     const { data } = await OrderDataService.getChannelItems( page , categoryIds , platform , price , members , visitNum , attribute , newFilter , sortField , sortType , freeDateBegin , freeDateEnd , searchHeader )
    if( data ) {
        setChannelLoading( false )
    }
    console.log("data : " , data.data)
    state.channelsItem = data.data.items
    if( data.data.extremum.price_min != null )
        state.extremum = data.data.extremum
    state.allItems = data.data.total
     // state.categoryItems = data.data.categories
}
export const addChannelItems = async ( page  , categoryIds , platform , price = null , members = null , visitNum = null , attribute = null , newFilter = null , sortField, sortType , freeDateBegin , freeDateEnd  ) => {
     const { data } = await OrderDataService.getChannelItems( page  , categoryIds , platform , price = null , members = null , visitNum = null , attribute = null , newFilter = null , sortField, sortType , freeDateBegin , freeDateEnd  )
    state.channelsItem = state.channelsItem.concat(data.data.items)
 }
export const setAttributeForMedia = async  ( _attribute , _media_id , _social_type ) => {
    const { data } = await OrderDataService.setAttributeForMedia( _attribute , _media_id , _social_type ) 
 }
export const deleteAttributeForMedia = async  ( _attribute , _media_id , _social_type ) => {
    const { data } = await OrderDataService.setAttributeForMedia( _attribute , _media_id , _social_type ) 
 }