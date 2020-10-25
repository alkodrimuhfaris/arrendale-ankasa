import http from "../../Helper/http";

export default {
  getAllCity: () => ({
    type: "GET_ALL_CITY",
    payload: http().get("manage/city"),
  }),
  getCity: (cityName) => ({
    type: "GET_CITY",
    payload: http().get("city/search/" + cityName),
  }),
  setHistoryPlace: (payload) => ({
    type: "SET_HISTORY_PLACE",
    payload,
  }),
  findTicket: (origin, destination, departure) => ({
    type: "FIND_TICKET",
    payload: http().get(
      `searchticket?search[origin]=${origin}&search[destination]=${destination}&search[departure_time]=${departure}`
    ),
  }),
  selectTicket: (id) => ({
    type: "SELECT_TICKET",
    payload: http().get(`searchticket/${id}`),
  }),
};
