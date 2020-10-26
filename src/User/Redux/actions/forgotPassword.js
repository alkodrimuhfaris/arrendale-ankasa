/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";


export default {
  resetPassword: (data={}) => ({
    type: "POST_RESET",
    payload: http().post("user/reset/password", data),
  }),
  updatePassword: (data={}) => ({
    type: "POST_UPDATE_PASSWORD",
    payload: http().post("user/reset/password/match", qs.stringify(data)),
  }),
  clearMessageStatus: () => ({
    type: "CLEAR_MESSAGE",
  }),
};