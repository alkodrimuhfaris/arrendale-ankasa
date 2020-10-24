import {combineReducers} from 'redux'

import addFlight from './addFlight' 
import listFlight from './listFlight'

export default combineReducers({
    addFlight,
    listFlight
})