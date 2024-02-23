import axios from '../modules/BasketAxios'
import { auth } from '../apiRoute/index'
import { convertParamsToURLSearchParams } from './convertParamsToURLSearchParams'
class AuthService {
  login({
    email,
    password,
    recaptcha,
  }) {
    return axios.post(auth.login, convertParamsToURLSearchParams({
      email: email,
      password: password,
      recaptcha: recaptcha,
    }))
  }

  register({
    name,
    last_name,
    company_title,
    telegram_id,
    mobile,
    email,
    password,
    accept_rule,
  }) {
    return axios.post(auth.register, convertParamsToURLSearchParams(
      {
        name: name,
        last_name: last_name,
        company_title: company_title,
        telegram_id: telegram_id,
        mobile: mobile,
        email: email,
        password: password,
        accept_rule: accept_rule,
      }
    ))
  }
}
export default new AuthService();
