/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  readAirline: (token, data) => ({
    type: "GET_AIRLINE",
    payload: http().get("manage/airlines")
  }),
  addingAirline: (token, data) => ({
    type: "ADD_AIRLINE",
    payload: http(token).post("manage/airlines", data)
  })
};