import {combineReducers} from 'redux'

import auth from './auth'
import manageUser from "./manageUser"

export default combineReducers({
    auth,
    manageUser
})