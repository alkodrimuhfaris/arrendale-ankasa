const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "GET_PROFILE_PENDING": {
    return {
      ...state,
      alertMsg: "",
      isLoading: true,
    };
  }
  case "GET_PROFILE_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response.data.error,
    };
  }
  case "GET_PROFILE_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      alertMsg: "",
      data: action.payload.data.data,
    };
  }
  case "EDIT_PROFILE_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "EDIT_PROFILE_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response.data.error,
    };
  }
  case "EDIT_PROFILE_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isError: false,
      alertMsg: action.payload.data.message,
    };
  }
  case "EDIT_PICT_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "EDIT_PICT_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response.data.message,
    };
  }
  case "EDIT_PICT_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isError: false,
      alertMsg: action.payload.data.message,
    };
  }
  default: {
    return state;
  }
  }
};
