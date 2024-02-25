import axios from '../modules/BasketAxios'
import { profile } from '../apiRoute/index'
import { convertParamsToURLSearchParams } from './convertParamsToURLSearchParams'
class ProfileService {
  async profile() {
    return await axios.get(profile.profile, convertParamsToURLSearchParams())
  }
}

export default new ProfileService();
