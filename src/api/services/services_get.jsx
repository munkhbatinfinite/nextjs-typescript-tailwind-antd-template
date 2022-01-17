import { axios_get } from "@/api";
import { notification } from "antd";
let main = function (url, json) {
  let list = function (resolve, reject) {
    axios_get(url, json)
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
  template_test: (json) => {
    return main("/1asdfa/asdfasdf", json);
  },
};
export default services;
