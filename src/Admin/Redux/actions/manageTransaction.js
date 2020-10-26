/* eslint-disable no-unused-vars */
import http from "../../Helper/http";
import qs from "querystring";

export default {
  readTransaction: (token)=>({
    type: "GET_TRANSACTION",
    payload: http(token).get(`manage/ticket?limit=${100}`)
  }),
  readTransactionById: (token, id)=>({
    type: "GET_TRANSACTION",
    payload: http(token).get(`manage/ticket/${id}`)
  }),
//   deleteUser: (token, id)=>({
//     type: "DELETE_USER",
//     payload: http(token).delete(`manage/user/${id}`)
//   })
};