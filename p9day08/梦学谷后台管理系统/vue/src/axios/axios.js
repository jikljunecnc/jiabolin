import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/161ba971b7547743480f0cdfc17b27e8/four-api';


axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    return response.data
  }, function (error) {
    return Promise.reject(error);
  });

export default axios