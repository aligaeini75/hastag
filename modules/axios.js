

import axiosInstance from 'axios'
import Token from './token';
const Axios = axiosInstance.create({
  baseURL: "https://admindev.httb.ir/",
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  withCredentials: false,
  transformRequest: [
    (data) => {
      return data
    },
  ],
})
Axios.interceptors.request.use(
  function (config) {
    const token = "101|dxbbRap9rIkeUKL8vGqhL7MMwXh9chWKzjri7537"
    // const token = Token.getToken();
    if (token)
      config.headers.Authorization = "Bearer " + token
    return config
  }
)
Axios.interceptors.response.use(
  (response) => {

    return response;
  },
  (requestError) => {
  }
);

export default Axios



