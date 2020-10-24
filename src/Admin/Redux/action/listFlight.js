import http from '../../Helper/http'
import qs from 'querystring'

export default {
    getFlight: (data) => ({
        type: 'GET_FLIGHT',
        payload: http().get('manage/flight/',qs.stringify(data))
    })
}