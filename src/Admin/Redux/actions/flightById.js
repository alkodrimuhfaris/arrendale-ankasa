import http from '../../Helper/http'

export default {
    getFlight: (id) => ({
        type: 'GET_FLIGHT_DETAIL',
        payload: http().get(`manage/flight/${id}`)
    })
}