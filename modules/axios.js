

import axiosInstance from 'axios'
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
      const token = "92|XMUnnMLiIH2BACd0n70vUtk5Kc4kolTAWcObwWD2"
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



