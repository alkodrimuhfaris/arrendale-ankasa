const initialState = {
  isLogin: false,
  isError: false,
  token: "",
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "LOGIN_USER_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "LOGIN_USER_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response 
        ? action.payload.response.data.error 
        : "Sorry, Try again later",
    };
  }
  case "LOGIN_USER_FULFILLED": {
    localStorage.setItem("token", action.payload.data.token);
    return {
      ...state,
      token: action.payload.data.message.token,
      isLoading: false,
      isLogin: true,
      alertMsg: "Successfully login",
    };
  }
  case "LOGOUT_USER": {
    localStorage.removeItem("token");
    return {
      isLogin: false,
      isError: false,
      token: "",
      alertMsg: "Logout Successfully",
    };
  }
  case "RELOGIN_USER": {
    localStorage.removeItem("token");
    return {
      isLogin: false,
      isError: false,
      token: "",
      alertMsg: "",
    };
  }
  case "SET_TOKEN": {
    return {
      ...state,
      isLogin: true,
      token: action.payload,
    };
  }
  case "SIGN_UP_PENDING": {
    return {
      ...state,
      isLoading: true,
    };
  }
  case "SIGN_UP_REJECTED": {
    return {
      ...state,
      isLoading: false,
      isError: true,
      alertMsg: action.payload.response 
        ? action.payload.response.data.error 
        : "Sorry, Try again later",
    };
  }
  case "SIGN_UP_FULFILLED": {
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
