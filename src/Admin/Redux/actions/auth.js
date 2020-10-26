import http from "../../Helper/http";
import qs from "querystring";

export default {
  loginAdmin: (data)=>({
    type: "AUTH_ADMIN",
    payload: http().post("auth/admin/login",qs.stringify(data))
  }),
  logoutAdmin: ()=>({
    type: "LOGOUT_ADMIN"
  }),
  clearMessageAdmin: ()=>({
    type: "CLEAR_MESSAGE_ADMIN"
  }),
  setTokenAdmin: (payload)=>({
    type: "SET_TOKEN_ADMIN",
    payload
  }),
  resetPassword: (payload, data)=>({
    type: "RESET_PASSWORD",
    payload: http().post("/resetpassword", data)
  }),
  matchCode: (payload, data)=>({
    type: "MATCH_CODE",
    payload: http().post("/resetpassword/match", data)
  })
};