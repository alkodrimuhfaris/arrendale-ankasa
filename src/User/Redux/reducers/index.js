import { combineReducers } from "redux";

// Import reducers
import auth from "./auth";
import profile from "./profile";
import flight from "./flight";
import booking from "./booking";
import city from "./city";
import getAllCity from "./SearchResult/getAllCity";
import getCity from "./SearchResult/getCity";
import setHistoryPlace from "./SearchResult/setHistoryPlace";
import findTicket from "./SearchResult/findTicket";
import selectTicket from "./SearchResult/selectTicket";
// import searchResult from "./searchResult";

export default combineReducers({
  auth,
  flight,
  profile,
  city,
  getAllCity,
  getCity,
  setHistoryPlace,
  findTicket,
  selectTicket,
  booking,
});
