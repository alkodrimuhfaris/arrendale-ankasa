const initialStateFlight = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  statusMsg: "",
  alertMsg: "",
  dataCityTopTen: {},
  dataCityTrending: {},
};

export default (state = initialStateFlight, action) => {
  switch (action.type) {
  case "GET_CITY_TOP_TEN_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_CITY_TOP_TEN_REJECTED": {
    return {
      ...state,
      isSuccess: false,
      isLoading: false,
      isError: true,
      statusMsg: "Failed",
      alertMsg: action.payload.response.data.message,
    };
  }
  case "GET_CITY_TOP_TEN_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      statusMsg: "Succes",
      alertMsg: action.payload.data.message,
      dataCityTopTen: action.payload.data.result,
    };
  }
  case "GET_CITY_TRENDING_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_CITY_TRENDING_REJECTED": {
    return {
      ...state,
      isSuccess: false,
      isLoading: false,
      isError: true,
      statusMsg: "Failed",
      alertMsg: action.payload.response.data.message,
    };
  }
  case "GET_CITY_TRENDING_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      statusMsg: "Succes",
      alertMsg: action.payload.data.message,
      dataCityTrending: action.payload.data.result,
    };
  }
  default: {
    return state;
  }
  }
};