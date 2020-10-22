import qs from "querystring";
import http from "../../Helper/http";

export default {
  login: (data) => ({
    type: "AUTH_USER",
    payload: http().post("auth/login", qs.stringify(data)),
  }),
<<<<<<< HEAD
  // logout: () => ({
  //   type: "LOGOUT_USER",
  // }),
  register: (data) => ({
    type: "SIGN_UP",
    payload: http().post("auth/signup", qs.stringify(data)),
  }),
  setToken: (payload) => ({
    type: "SET_TOKEN",
    payload,
  }),
};
=======
  logout: () => ({
    type: "LOGOUT_USER",
  }),
  clearMessage: () => ({
    type: "CLEAR_MESSAGE",
  }),
};
>>>>>>> 713f5e481309846325a34add024d63df97f16477
