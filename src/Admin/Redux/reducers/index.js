import {combineReducers} from 'redux'

import auth from './auth'
import manageUser from "./manageUser"
import addFlight from "./addFlight"

export default combineReducers({
    auth,
    manageUser,
    addFlight
})