import { axios_post } from "@/api";
import { notification } from "antd";

let main = function (url, json) {
  let list = function (resolve, reject) {
    axios_post(url, json)
      .then((a) => [resolve(a)])
      .catch((data) => {
        notification["error"]({
          message: "Алдаа гарлаа",
          description: data.message,
        });
        reject(data);
      });
  };
  return new Promise(list);
};

let services = {
  login: (json) => {
    return main("/v1/auth/signin", json);
  },
};
export default services;
