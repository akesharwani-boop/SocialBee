import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  // ye mera custom axios instance hai
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json", // server ko bataungi mai data json format men bhejungi
  },
  timeout: 10000, // request maximumj 1 millisecond tak wait karegi
});
export default api;

//axios mera https request ke liye use ghoga

// axios.interceptors.request.use(function (config) {

//     return config;
//   }, function (error) {

//     return Promise.reject(error);
//   },
//   { synchronous: true, runWhen: () =>() /* This function returns true */}
// );
// axios.interceptors.response.use  (function onFullfilled(response){
//     return response
// },function  onRejected(error){
//     console.log(error)
//     return Promise.reject(error)
// })
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => {
    Promise.reject(error);
  },
);
