const initialState = {
  dataUser: {},
  isLoadingUserManage: false,
  isError: false,
  alertMsg: "",
  isDeleted: false,
  isSended: false
};
  
export default (state=initialState, action)=>{
  switch(action.type){
  case "GET_USER_PENDING" : {
    return {
      ...state,
      isLoadingUserManage: true
    };
  }
  case "GET_USER_REJECTED": {
    return {
      ...state,
      isLoadingUserManage: false,
      isError: true,
      alertMsg: "There is an error at request data"
    };
  }
  case "GET_USER_FULFILLED": {
    // console.log(action.payload.data.results[0].total_rating)
    return {
      ...state,
      isLoadingUserManage: false,
      dataUser: action.payload.data.results,
      alertMsg: ""
    };
  }
  case "DELETE_USER_PENDING": {
    return {
      ...state,
      isLoadingUserManage: true
    };
  }
      
  case "DELETE_USER_REJECTED": {
    return {
      ...state,
      isLoadingUserManage: false,
      alertMsg: "failed to delete user",
      isError: true
    };
  }
  case "DELETE_USER_FULFILLED": {
    return {
      ...state,
      isLoadingUserManage: false,
      alertMsg: "Success to delete user",
      isError: false,
      isDeleted: true
    };
  }
  case "TOP_UP_BALANCE_PENDING": {
    return {
      ...state,
      isLoadingUserManage: true,
      isSended: false
    };
  }
  case "TOP_UP_BALANCE_REJECTED": {
    return {
      ...state,
      isLoadingUserManage: false,
      isError: true,
      isSended: false,
      alertMsg: "Email not found"
    };
  }
  case "TOP_UP_BALANCE_FULFILLED": {
    return {
      ...state,
      isLoadingUserManage: false,
      isError: false,
      isSended: true,
      alertMsg: "Balance Added"
    };
  }
  case "CLEAR_MESSAGE": {
    return {
      ...state,
      alertMsg: "",
      isSended: false,
      isDeleted: false
    };
  }
  default : {
    return state;
  }
  }
};
