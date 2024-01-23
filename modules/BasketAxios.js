

import axiosInstance from 'axios'
  const Axios = axiosInstance.create({
    baseURL: "https://admindev.httb.ir/",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' 
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



