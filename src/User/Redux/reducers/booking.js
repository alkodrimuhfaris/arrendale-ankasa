const initialState = {
  data: [],
  detail: [],
  pageInfo: {},
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
      isError:false,
      alertMsg: action.payload.data.message,
      data: action.payload.data.data,
      pageInfo: action.payload.data.pageInfo
    };
  }
  case "GET_DETAIL_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "GET_DETAIL_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: "There is an error at request data",
    };
  }
  case "GET_DETAIL_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isError:false,
      alertMsg: action.payload.data.message,
      data: action.payload.data.data,
      detail: action.payload.data.detailBooking
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
