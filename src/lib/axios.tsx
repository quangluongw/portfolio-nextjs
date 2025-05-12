import axios from "axios";
const instance = axios.create({
  baseURL: process.env.supabaseUrl,
  timeout:200000
});

instance.interceptors.request.use(
  function (config) {
    // const token = JSON?.parse(localStorage.getItem("auth_token"))?.split("|")[1];
    // config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
