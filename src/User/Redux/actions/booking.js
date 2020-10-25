import http from "../../Helper/http";

export default {
  getBooking: (token, path) => ({
    type: "GET_BOOKING",
    payload: http(token).get(path),
  }),
};
