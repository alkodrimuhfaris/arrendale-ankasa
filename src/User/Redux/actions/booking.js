import http from "../../Helper/http";

export default {
  getBooking: (token) => ({
    type: "GET_BOOKING",
    payload: http(token).get("user/profile"),
  }),
};
