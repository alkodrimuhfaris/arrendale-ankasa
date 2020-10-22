import http from "../../Helper/http";

export default {
  getFlightDetail: (id) => ({
    type: "GET_FLIGHT",
    payload: http().get(`flightdetails/${id}`),
  }),
  clearMessageStatus: () => ({
    type: "CLEAR_MESSAGE",
  }),
};