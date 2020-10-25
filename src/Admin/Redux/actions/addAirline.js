import http from '../../Helper/http'
import qs from 'querystring'

export default {
    addData: (data) => ({
        type: 'ADD_AIRLINE',
        payload: http().post('manage/airlines/',qs.stringify(data))
    })
}