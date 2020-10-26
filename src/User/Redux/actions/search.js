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
  findTicket: (
    origin = 0,
    destination = 0,
    filterSearch = {}
  ) => ({
    type: "FIND_TICKET",
    payload: Object.assign(filterSearch).length ? http().get(
      `explore/search/flight?search[origin]=${origin}&search[destination]=${destination}`, 
      {params: {search:{filterSearch}}}) : http().get(`explore/search/flight?search[origin]=${origin}&search[destination]=${destination}`)
  }),
  selectTicket: (id) => ({
    type: "SELECT_TICKET",
    payload: http().get(`explore/search/flight/${id}`),
  }),
  filterTicket: (data) => ({
    type: "FILTER_TICKET",
    payload: data
  })
};
