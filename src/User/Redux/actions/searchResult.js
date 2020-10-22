import http from "../../Helper/http";

export default {
  findTicket: () => ({
    type: "FIND_TICKET",
    payload: http().get("/flightdetails")
  })
};