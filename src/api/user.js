import axios from "./index";
export const getUserInfo = option => {
  return axios.request({
    url: "/getUserInfo",
    method: "post",
    data: option
  });
};
