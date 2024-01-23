import axios from '../modules/BasketAxios'
import OrderAxios from '../modules/axios'
import { basket } from '../apiRoute/index'
import {convertParamsToURLSearchParams } from './convertParamsToURLSearchParams'
class OrderDataService {
  updateItems ( _uuid = null , _basket = null  ) { 
    if( _uuid != null ) {
      return axios.patch( basket , convertParamsToURLSearchParams( {
        uuid : _uuid , 
        basket : JSON.stringify( _basket )
     }))
    }else {
      return axios.patch( basket , convertParamsToURLSearchParams( {
        basket : JSON.stringify( _basket )
     }))
    }
    
  }
  getItems ( _uuid ) { 
    return OrderAxios.get( basket , {
      params: {
        uuid : _uuid
      }
      
    } )
    
  }
}
export default new OrderDataService();