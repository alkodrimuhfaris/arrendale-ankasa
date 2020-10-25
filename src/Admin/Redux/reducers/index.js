import {combineReducers} from 'redux'

import addFlight from './addFlight' 
import listFlight from './listFlight'
import detailFlightById from './flightById'
import editFlight from './editFlight'
import listAirline from './listAirline'
import detailAirlineById from './airlineById'
import editAirline from './editAirline'

export default combineReducers({
    addFlight,
    listFlight,
    detailFlightById,
    editFlight,
    listAirline,
    detailAirlineById,
    editAirline
})