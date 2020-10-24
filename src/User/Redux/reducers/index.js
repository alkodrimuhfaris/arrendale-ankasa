import { combineReducers } from "redux";

// Import reducers
import user from "./user";
import auth from "./auth";
import profile from "./profile";
import flight from "./flight";
import searchResult from "./searchResult"; 
import trending from './trending'

export default combineReducers({
  searchResult,
  auth,
  user,
  flight,
  profile,
  trending
});
