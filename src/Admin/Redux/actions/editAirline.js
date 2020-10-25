import http from '../../Helper/http'
import qs from 'querystring'

export default {
    editData: (id, data) => ({
        type: 'EDIT_ARLINE',
        payload: http().patch(`manage/airlines/${id}`,qs.stringify(data))
    })
}