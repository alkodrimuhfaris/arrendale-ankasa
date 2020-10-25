/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  readTransit: (token, data) => ({
    type: "GET_TRANSIT",
    payload: http().get("manage/transit")
  })
};