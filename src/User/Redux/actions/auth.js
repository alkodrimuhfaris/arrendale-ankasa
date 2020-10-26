import qs from "querystring";
import http from "../../Helper/http";

export default {
  login: (data) => ({
    type: "LOGIN_USER",
    payload: http().post("auth/user/login", qs.stringify(data)),
  }),
  logout: () => ({
    type: "LOGOUT_USER",
  }),
  relogin: () => ({
    type: "RELOGIN_USER",
  }),
  register: (data) => ({
    type: "SIGN_UP",
    payload: http().post("auth/user/signup", qs.stringify(data)),
  }),
  setToken: (payload) => ({
    type: "SET_TOKEN",
    payload,
  }),
};
