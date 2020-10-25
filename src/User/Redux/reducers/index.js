import { combineReducers } from "redux";

// Import reducers
import auth from "./auth";
import profile from "./profile";
import flight from "./flight";
import searchResult from "./searchResult"; 
import city from "./city";

export default combineReducers({
  searchResult,
  auth,
  flight,
  profile,
  city,
});
