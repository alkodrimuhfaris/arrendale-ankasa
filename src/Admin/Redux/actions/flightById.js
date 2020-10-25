import http from '../../Helper/http'
import qs from 'querystring'

export default {
    getFlight: (id) => ({
        type: 'GET_FLIGHT_DETAIL',
        payload: http().get(`manage/flight/${id}`)
    })
}