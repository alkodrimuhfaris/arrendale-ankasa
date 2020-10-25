import {combineReducers} from 'redux'

import addFlight from './addFlight' 
import listFlight from './listFlight'
import detailFlightById from './flightById'

export default combineReducers({
    addFlight,
    listFlight,
    detailFlightById
})