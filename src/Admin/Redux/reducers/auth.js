/* eslint-disable no-undef */
const initialState = {
  isLoginAdmin: false,
  isLoadingAdmin: false,
  isErrorAdmin: false,
  token: "",
  alertMsgAdmin: "",
  isSuccess: false
};
  
export default (state=initialState, action) => {
  switch(action.type){
  case "AUTH_ADMIN_PENDING":{
    return {
      ...state,
      isLoadingAdmin: true
    };
  }
  case "AUTH_ADMIN_REJECTED": {
    return {
      ...state,
      isLoadingAdmin: false,
      isErrorAdmin: true,
      alertMsgAdmin: action.payload.response.data.error
    };
  }
  case "AUTH_ADMIN_FULFILLED":{
    console.log(action.payload.data.message);
    localStorage.setItem("token", action.payload.data.message.token);
    return {
      ...state,
      token: action.payload.data.message.token,
      isLoadingAdmin: false,
      isLoginAdmin: true,
      alertMsgAdmin: "Successfully login"
    };
  }case "RESET_PASSWORD_PENDING": {
    return {
      ...state,
      isLoadingAdmin: true,
      isLoginAdmin: false,
    };
  }
  case "RESET_PASSWORD_REJECTED": {
    return {
      ...state,
      isLoadingAdmin: false,
      isLoginAdmin: false,
      isErrorAdmin: true
    };
  }
  case "RESET_PASSWORD_FULFILLED": {
    return {
      ...state,
      isLoadingAdmin: false,
      isLoginAdmin: false,
      isErrorAdmin: false,
      isSuccess: true
    };
  }
  case "MATCH_CODE_PENDING": {
    return {
      ...state,
      isLoadingAdmin: true,
      isLoginAdmin: false,
    };
  }
  case "MATCH_CODE_REJECTED": {
    return {
      ...state,
      isLoadingAdmin: false,
      isLoginAdmin: false,
      isErrorAdmin: true
    };
  }
  case "MATCH_CODE_FULFILLED": {
    return {
      ...state,
      isLoadingAdmin: false,
      isLoginAdmin: false,
      isErrorAdmin: false,
      isSuccess: true
    };
  }
  case "SET_TOKEN_ADMIN":{
    console.log(action.payload);
    // localStorage.removeItem("token");
    return{
      ...state,
      token: action.payload,
      isLoginAdmin: true
    };
  }
  case "LOGOUT_ADMIN": {
    localStorage.removeItem("token");
    return {
      isLoginAdmin: false,
      isLoadingAdmin: false,
      token: "",
      isErrorAdmin: false,
      alertMsgAdmin: "Logout Successfully"
    };
  }
  case "CLEAR_MESSAGE_ADMIN": {
    return {
      ...state,
      alertMsgAdmin: ""
    };
  }
  default : {
    return state;
  }
  }
};