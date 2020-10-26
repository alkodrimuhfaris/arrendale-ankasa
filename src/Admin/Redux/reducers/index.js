/* eslint-disable no-unused-vars */
import {combineReducers} from "redux";

import auth from "./auth";
import manageUser from "./manageUser";
import manageFlight from "./manageFlight";
import manageAirline from "./manageAirline";
import manageCity from "./manageCity";
import manageTransit from "./manageTransit";
import manageTransaction from "./manageTransaction";
import profile from "./profile";

export default combineReducers({
  auth,
  manageUser,
  manageFlight,
  manageAirline,
  manageCity,
  manageTransit,
  manageTransaction,
  profile
});
