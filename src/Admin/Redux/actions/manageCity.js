/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  readCity: (token, data) => ({
    type: "GET_CITY",
    payload: http().get("manage/city")
  })
};