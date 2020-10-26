const initialStateFlight = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  isMatch: false,
  statusMsg: "",
  alertMsg: "",
  isSended: false
};
  
export default (state = initialStateFlight, action) => {
  switch (action.type) {
  case "POST_RESET_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "POST_RESET_REJECTED": {
    return {
      ...state,
      isSuccess: false,
      isLoading: false,
      isError: true,
      statusMsg: "Failed",
      alertMsg: action.payload.response.data.message,
    };
  }
  case "POST_RESET_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isSended: true,
      alertMsg: action.payload.data.message
    };
  }
  case "POST_UPDATE_PASSWORD_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "POST_UPDATE_PASSWORD_REJECTED": {
    return {
      ...state,
      isSuccess: false,
      isLoading: false,
      isError: true,
      isMatch: false,
      statusMsg: "Failed",
      alertMsg: action.payload.response.data.message,
    };
  }
  case "POST_UPDATE_PASSWORD_FULFILLED": {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      statusMsg: "Succes",
      isMatch: true,
      alertMsg: action.payload.data.message
    };
  }
  case "CLEAR_MESSAGE": {
    return {
      ...state,
      isSuccess: false,
      alertMsg: "",
      isMatch: false
    };
  }
  default: {
    return state;
  }
  }
};