import { combineReducers } from "redux";

// Import reducers
import user from "./user";
import auth from "./auth";
import profile from "./profile";
import flight from "./flight";
import getAllCity from "./SearchResult/getAllCity";
import getCity from "./SearchResult/getCity";
import setHistoryPlace from "./SearchResult/setHistoryPlace";
import findTicket from "./SearchResult/findTicket";
import selectTicket from "./SearchResult/selectTicket";

export default combineReducers({
  auth,
  user,
  flight,
  profile,
  getAllCity,
  getCity,
  setHistoryPlace,
  findTicket,
  selectTicket,
});
