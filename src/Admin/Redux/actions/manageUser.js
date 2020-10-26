/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  readUser: (token, data2=["username", "ASC"], data="")=>({
    type: "GET_USER",
    payload: http(token).get(`manage/user?orderBy[${data2[0]}]=${data2[1]}&search[username]=${data}&limit=${20}`)
  }),
  deleteUser: (token, id)=>({
    type: "DELETE_USER",
    payload: http(token).delete(`manage/user/${id}`)
  }),
  topUpBalance: (token, data)=>({
    type: "TOP_UP_BALANCE",
    payload: http(token).post("manage/topUp/", qs.stringify(data))
  }),
  clearMessage: ()=>({
    type: "CLEAR_MESSAGE"
  })
};