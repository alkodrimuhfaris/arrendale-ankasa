const initialState = {
  dataBooking: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
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
      data: action.payload.data.data,
    };
  }
  case "POST_BOOKING_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "POST_BOOKING_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: "Cannot book ticket",
    };
  }
  case "POST_BOOKING_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isSuccess: true,
      alertMsg: "Ticket has booked"
    };
  }
  case "CLEAR_MESSAGE": {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isSucces: false,
    };
  }
  default: {
    return state;
  }
  }
};
