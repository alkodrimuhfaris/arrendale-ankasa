import http from "../../Helper/http";

export default {
  getBooking: (token) => ({
    type: "GET_BOOKING",
    payload: http(token).get("mybook"),
  }),
  postBooking: (token, data) => ({
    type: "POST_BOOKING",
    payload: http(token).post("mybook", data),
  }),
  clearMsg: () => ({
    type: "CLEAR_MESSAGE",
  })
};
