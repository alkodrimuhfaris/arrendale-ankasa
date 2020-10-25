import http from "../../Helper/http";
import qs from "querystring";

export default {
  getBooking: (token, path) => ({
    type: "GET_BOOKING",
    payload: http(token).get(path),
  }),
  getDetail: (token, id) => ({
    type: "GET_DETAIL",
    payload: http(token).get(`mybook/${id}`)
  }),
  payment: (token, data) => ({
    type: "PAY",
    payload: http(token).post("payment/commit", qs.stringify(data))
  })
};
