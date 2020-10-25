const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "GET_CITY_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_CITY_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: "Load Place Fail",
    };
  }
  case "GET_CITY_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.results,
    };
  }
  default: {
    return state;
  }
  }
};
