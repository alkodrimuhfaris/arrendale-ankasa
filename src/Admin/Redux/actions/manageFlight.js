/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  addingFlight: (token, data) => ({
    type: "ADD_FLIGHT",
    payload: http().post("manage/flight/", qs.stringify(data))
  }),
  addingFlightDetail: (token, data) => ({
    type: "ADD_FLIGHT_DETAIL",
    payload: http(token).post("manage/detail/flight/", qs.stringify(data))
  }),
  readFlight: (token, data) => ({
    type: "READ_FLIGHT",
    payload: http().get("manage/flight/")
  }),
  clearMessage: () => ({
    type: "CLEAR_MESSAGE"
  })
};