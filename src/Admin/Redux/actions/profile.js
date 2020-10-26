/* eslint-disable no-unused-vars */
import qs from "querystring";
import http from "../../Helper/http";

export default {
  getProfile: (token) => ({
    type: "GET_PROFILE",
    payload: http(token).get("admin/profile")
  })
};
