const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "GET_BOOKING_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_BOOKING_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: "There is an error at request data",
    };
  }
  case "GET_BOOKING_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isError:false,
      alertMsg: action.payload.data.message,
      data: action.payload.data.data,
      pageInfo: action.payload.data.pageInfo
    };
  }
  default: {
    return state;
  }
  }
};
