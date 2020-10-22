import http from '../../Helper/http'
import qs from 'querystring'

export default {
  loginAdmin: (data)=>({
    type: 'AUTH_ADMIN',
    payload: http().post('admin/login/',qs.stringify(data))
  }),
  logoutAdmin: ()=>({
    type: 'LOGOUT_ADMIN'
  }),
  clearMessageAdmin: ()=>({
    type: 'CLEAR_MESSAGE_ADMIN'
  }),
  setTokenAdmin: (payload)=>({
    type: 'SET_TOKEN_ADMIN',
    payload
  })
}