import http from "../../Helper/http";
import qs from "qs";

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
  findTicket: (query = {}) => ({
    type: "FIND_TICKET",
    payload: http().get(
      `explore/search/flight?${qs.stringify(query)}`
    ),
  }),
  selectTicket: (id) => ({
    type: "SELECT_TICKET",
    payload: http().get(`searchticket/${id}`),
  }),
  filterTicket: (data) => ({
    type: "FILTER_TICKET",
    payload: data
  })
};
