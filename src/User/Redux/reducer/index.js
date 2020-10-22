import { combineReducers } from "redux";

// Import reducers
import user from "./user";
import auth from "./auth";
import flight from "./flight";

export default combineReducers({
  auth,
  user,
  flight,
});
