import http from "../../Helper/http";

export default {
  getCityTopTen: () => ({
    type: "GET_CITY_TOP_TEN",
    payload: http().get("explore/popular"),
  }),
  getCityTrending: () => ({
    type: "GET_CITY_TRENDING",
    payload: http().get("explore/trending?limit=5"),
  })
};