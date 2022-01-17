import axios from "axios";
import { custom } from "@/functions";
const axioos = axios.create();

axioos.defaults.timeout = 60000;
axioos.defaults.baseURL = "/";

// if (process.env.NODE_ENV === "development") {
axioos.defaults.baseURL = "https://asdfasdfasdfas";

const errorHandler = (data) => {
  if (data && data.status === 401) {
    document.cookie = "AccessToken=; path=/";
    return data.data;
  } else {
    return {
      message: data.data.message,
    };
  }
};
let reset = function () {
  axioos.defaults.headers.common["api-key"] = custom.getCookie("api_key");
  axioos.defaults.headers.common["app-secret"] = custom.getCookie("app_secret");
};
let posta = function (url, json) {
  axioos.defaults.headers.common["Content-Type"] = "application/json";
  axioos.defaults.headers.common["Authorization"] =
    "Bearer " + custom.getCookie("AccessToken");
  // axioos.defaults.headers.common["api-key"] = custom.getCookie("api_key");
  // axioos.defaults.headers.common["app-secret"] = custom.getCookie("app_secret");

  return new Promise(function (resolve, reject) {
    axioos
      .post(url, json)
      .then(function (data) {
        resolve(data.data);
      })
      .catch(function (data) {
        data = errorHandler(data.response);
        reject(data);
      });
  });
};

export { posta, reset };
