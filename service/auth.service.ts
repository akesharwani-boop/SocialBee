// const API_URL= ''
import axios from "@/lib/axios";

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
  //   { synchronous: true, runWhen: () =>() ye humesha true return karega }
);
axios.interceptors.response.use(
  function onFullfilled(response) {
    return response;
  },
  function onRejected(error) {
    console.log(error);
    return Promise.reject(error);
  },
);
