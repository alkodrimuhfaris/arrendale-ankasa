const initialStateFlight = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  statusMsg: "",
  alertMsg: "",
  dataFlight: {},
};

export default (state = initialStateFlight, action) => {
  switch (action.type) {
  case "GET_FLIGHT_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_FLIGHT_REJECTED": {
    return {
      ...state,
      isSuccess: false,
      isLoading: false,
      isError: true,
      statusMsg: "Failed",
      alertMsg: action.payload.response.data.message,
    };
  }
  case "GET_FLIGHT_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      statusMsg: "Succes",
      alertMsg: action.payload.data.message,
      dataFlight: action.payload.data.data[0],
    };
  }
  case "CLEAR_MESSAGE": {
    return {
      ...state,
      isSuccess: false,
      alertMsg: "",
    };
  }
  default: {
    return state;
  }
  }
};