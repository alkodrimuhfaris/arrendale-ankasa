import { combineReducers } from "redux";

import auth from "../reducers/auth";
import addFlight from '../../../Admin/Redux/reducers/addFlight'

export default combineReducers({
  auth,
  addFlight
});
