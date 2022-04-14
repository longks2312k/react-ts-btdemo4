import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://62577fc1c870a2149784f102.mockapi.io',
  timeout: 3000,
});

axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
