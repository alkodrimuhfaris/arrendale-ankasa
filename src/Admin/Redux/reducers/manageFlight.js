const initialState = {
  isLoading: false,
  isLoadingDetail: false,
  isAdd: false,
  isAddDetail: false,
  isError: false,
  isErrorDetail: false,
  messageDetail: "",
  message: "",
  data: {},
  dataDetailFlight: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "ADD_FLIGHT_PENDING":{
    return{
      ...state,
      isLoading: true
    };
  }
  case "ADD_FLIGHT_REJECTED":{
    return{
      ...state,
      isLoading: false,
      isError: true,
      message: "cannot add data"
    };
  }
  case "ADD_FLIGHT_FULFILLED":{
    return{
      ...state,
      isError: false,
      isAdd: true,
      isLoading:false,
      message: "Add flight success"
    };
  }
  case "READ_FLIGHT_PENDING":{
    return{
      ...state,
      isLoading: true
    };
  }
  case "READ_FLIGHT_REJECTED": {
    return{
      ...state,
      isLoading: false,
      isError: true,
      message: "Read request rejected"
    };
  }
  case "READ_FLIGHT_FULFILLED": {
    return{
      ...state,
      isLoading: false,
      isError: false,
      data: action.payload.data.data
    };
  }
  case "ADD_FLIGHT_DETAIL_PENDING":{
    return{
      ...state,
      isLoadingDetail: true
    };
  }
  case "ADD_FLIGHT_DETAIL_REJECTED":{
    return{
      ...state,
      isLoadingDetail: false,
      isErrorDetail: true,
      messageDetail: "cannot add data"
    };
  }
  case "ADD_FLIGHT_DETAIL_FULFILLED":{
    return{
      ...state,
      isErrorDetail: false,
      isAddDetail: true,
      isLoadingDetail:false,
      messageDetail: "add detail flight success"
    };
  }
  case "CLEAR_MESSAGE": {
    return{
      ...state,
      isLoading: false,
      isLoadingDetail: false,
      isAdd: false,
      isAddDetail: false,
      isError: false,
      isErrorDetail: false,
      messageDetail: "",
      message: "",
    };
  }
  default:{
    return state;
  }
  }
};