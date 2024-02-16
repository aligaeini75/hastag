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
}
export default new AuthService();
