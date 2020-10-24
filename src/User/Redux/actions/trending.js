import http from '../../Helper/http'
import qs from 'querystring'

export default {
    getTrending: (data) => ({
        type: 'GET_TREN',
        payload: http().get('explore/trending?limit=5', qs.stringify(data))
    })
}