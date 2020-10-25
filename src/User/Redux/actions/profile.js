import qs from "querystring";
import http from "../../Helper/http";

export default {
  getProfile: (token) => ({
    type: "GET_PROFILE",
    payload: http(token).get("user/profile"),
  }),
  editProfile: (token, data) => ({
    type: "EDIT_PROFILE",
    payload: http(token).patch("user/profile", qs.stringify(data)),
  }),
  editPict: (token, data) => ({
    type: "EDIT_PICT",
    payload: http(token).patch("user/profile/upload", data),
  }),
};
