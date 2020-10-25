const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "FIND_TICKET_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "FIND_TICKET_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: "Load Place Fail",
    };
  }
  case "FIND_TICKET_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.result,
    };
  }
  default: {
    return state;
  }
  }
};