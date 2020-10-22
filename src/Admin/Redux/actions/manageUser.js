import http from '../../Helper/http'
import qs from 'querystring'

export default {
  readUser: (tokenAdmin, data)=>({
    type: 'GET_USER',
    payload: http(tokenAdmin).get('admin/listuser/')
  }),
  deleteUser: (tokenAdmin, id)=>({
      type: 'DELETE_USER',
      payload: http(tokenAdmin).delete(`admin/listuser/${id}`)
  }),
  topUpBalance: (tokenAdmin, data)=>({
      type: 'TOP_UP_BALANCE',
      payload: http(tokenAdmin).post(`payment/topUp/`, qs.stringify(data))
  }) 
}