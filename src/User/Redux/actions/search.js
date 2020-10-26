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
    className,
    departureDate,
    search = {}
  ) => ({
    type: "FIND_TICKET",
    payload: http().get(
      `explore/search/flight?search[origin]=${origin}&search[destination]=${destination}&search[class_name]=${className}&search[departure_date]=${departureDate}`,
      {params: search}
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
