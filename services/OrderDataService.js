import axios from '../modules/axios'
import { getCategory , getChannelsItem , setAttributeForMedia , setFilter , getFilter, getDays , getHours  } from '../apiRoute/index'
import { convertJsonToFormData } from './test'
class OrderDataService {
  getCategory () { 
    return axios.get( getCategory )
  }
  getChannelItems( page , categoryIds = null , platform = null , price = null , members = null , visitNum = null , attribute = null , newFilter = null , sortField = null , sortType = null , freeDateBegin = null, freeDateEnd = null , searchHeader = null ) {
    return axios.get( getChannelsItem  , {
      params: {
        page: page , 
        category_ids : categoryIds && categoryIds.length ?  JSON.stringify( categoryIds ) : null , 
        platforms : platform && platform.length ? JSON.stringify( platform ) : null , 
        price_min : price ? price[0] : null , 
        price_max : price ? price[1] : null ,
        members_min : members ? members[0] : null , 
        members_max : members ? members[1] : null , 
        visit_num_min : visitNum ? visitNum[0] : null , 
        visit_num_max : visitNum ? visitNum[1] : null , 
        new : newFilter ? newFilter == 1 ? true : null : null , 
        attribute : attribute ? attribute: null , 
        sort_field : sortField ? sortField : null , 
        sort_type : sortType ? sortType : null  , 
        free_date_begin : freeDateBegin ? freeDateBegin : null , 
        free_date_end : freeDateEnd ? freeDateEnd : null  ,
        s_title : searchHeader && searchHeader.length > 0 ? searchHeader : null
      }
      
    })
  }
  setAttributeForMedia ( _attribute , _media_id , _social_type ) { 
    return axios.post( setAttributeForMedia , convertJsonToFormData( {
      attribute : _attribute , 
      media_id : _media_id, 
      social_type : _social_type , 
   }) )
  }
  getFilter() {
    return axios.get( getFilter )
  }
  getFilterId( id ) {
    return axios.get( `${getFilter}/${id}` )
  }
  setFilter ( _test , _sort , _platforms , _category_ids , _price_min , _price_max , _members_min , _members_max , _visit_num_min , _visit_num_max , _attribute , _sale , _sort_type ) { 
    return axios.post( setFilter , convertJsonToFormData( {
      title : _test , 
      sort : _sort, 
      platforms : JSON.stringify( _platforms )  , 
      category_ids : JSON.stringify( _category_ids )  , 
      price_min : _price_min , 
      price_max : _price_max , 
      members_min : _members_min , 
      members_max : _members_max , 
      visit_num_min : _visit_num_min , 
      visit_num_max : _visit_num_max , 
      attribute : _attribute , 
      sale : _sale , 
      sort_type : _sort_type
   }) )
  }
  getDays( firstDate , lastDate , id , socialType ) {
    return axios.get( `${getDays}?first_date=${firstDate}&last_date=${lastDate}&id=${id}&social_type=${socialType}` )
  }
  getHourse( date , id , socialType ) {
    return axios.get( `${getHours}?date=${date}&id=${id}&social_type=${socialType}` )
  }
}
export default new OrderDataService();