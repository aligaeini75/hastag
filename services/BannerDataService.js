import axios from '../modules/BasketAxios'
import { banner } from '../apiRoute/index'
import { convertParamsToURLSearchParams } from './convertParamsToURLSearchParams'
class BannerDataService {
  store(
    _title = null,
    _want_short_link = null,
    _link = null,
    _description = null,
    _text = null,
  ) {
    return axios.post(banner, convertParamsToURLSearchParams({
      title: _title,
      want_short_link: _want_short_link,
      link: _link,
      description: _description,
      text: _text,
    }))

  }
}
export default new BannerDataService();
