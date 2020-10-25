import http from '../../Helper/http'

export default {
    getAirline: (id) => ({
        type: 'GET_AIRLINE_DETAIL',
        payload: http().get(`manage/airlines/${id}`)
    })
}