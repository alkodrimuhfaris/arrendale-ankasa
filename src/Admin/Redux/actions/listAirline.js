import http from '../../Helper/http'
import qs from 'querystring'

export default {
    getAirline: (data) => ({
        type: 'GET_AIRLINE',
        payload: http().get('manage/airlines/',qs.stringify(data))
    })
}