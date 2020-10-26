const initialState = {
  info: {},
  isLoadingUserManage: false,
  isError: false,
  alertMsg: "",
  isDeleted: false
};
    
export default (state=initialState, action)=>{
  switch(action.type){
  case "GET_TRANSACTION_PENDING" : {
    return {
      ...state,
      isLoadingTRANSACTIONManage: true
    };
  }
  case "GET_TRANSACTION_REJECTED": {
    return {
      ...state,
      isLoadingUserManage: false,
      isError: true,
      alertMsg: "There is an error at request data"
    };
  }
  case "GET_TRANSACTION_FULFILLED": {
    // console.log(action.payload.data.results[0].total_rating)
    return {
      ...state,
      isLoadingUserManage: false,
      info: action.payload.data.result,
      alertMsg: ""
    };
  }
  //   case "DELETE_USER_PENDING": {
  //     return {
  //       ...state,
  //       isLoadingUserManage: true
  //     };
  //   }
        
  //   case "DELETE_USER_REJECTED": {
  //     return {
  //       ...state,
  //       isLoadingUserManage: false,
  //       alertMsg: "failed to delete user",
  //       isError: true
  //     };
  //   }
  //   case "DELETE_USER_FULFILLED": {
  //     return {
  //       ...state,
  //       isLoadingUserManage: false,
  //       alertMsg: "Success to delete user",
  //       isError: false,
  //       isDeleted: true
  //     };
  //   }
  default : {
    return state;
  }
  }
};