import http from "../../Helper/http";

export default {
  getBooking: (token, path) => ({
    type: "GET_BOOKING",
    payload: http(token).get(path),
  }),
  postBooking: (token, data) => ({
    type: "POST_BOOKING",
    payload: http(token).post("mybook", data),
  }),
  clearMsg: () => ({
    type: "CLEAR_MESSAGE",
  }),
  getDetail: (token, id) => ({
    type: "GET_DETAIL",
    payload: http(token).get(`mybook/${id}`)
  })
};
