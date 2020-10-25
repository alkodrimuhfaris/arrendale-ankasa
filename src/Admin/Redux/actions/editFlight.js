import http from '../../Helper/http'
import qs from 'querystring'

export default {
    editData: (id, data) => ({
        type: 'EDIT_FLIGHT',
        payload: http().patch(`manage/flight/${id}`,qs.stringify(data))
    })
}