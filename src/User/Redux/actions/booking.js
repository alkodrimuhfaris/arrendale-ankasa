import http from "../../Helper/http";

export default {
  getBooking: (token, path) => ({
    type: "GET_BOOKING",
    payload: http(token).get(path),
  }),
  getDetail: (token, id) => ({
    type: "GET_DETAIL",
    payload: http(token).get(`mybook/${id}`)
  })
};
