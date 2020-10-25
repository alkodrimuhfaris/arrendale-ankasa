const initialState = {
  isSuccess: false,
  data: {},
  isError: false,
  message: ""
};
  
export default (state = initialState, action) => {
  switch (action.type) {
  case "GET_AIRLINE_PENDING":{
    return{
      ...state,
      isLoading: true
    };
  }
  case "GET_AIRLINE_REJECTED":{
    return{
      ...state,
      isLoading: false,
      isError: true,
      message: "cannot read data"
    };
  }
  case "GET_AIRLINE_FULFILLED":{
    console.log(action.payload);
    return{
      ...state,
      isError: false,
      isSuccess: true,
      data: action.payload.data.data,
      isLoading:false,
      message: "add flight success"
    };
  }
  case "ADD_AIRLINE_PENDING":{
    return{
      ...state,
      isLoading: true
    };
  }
  case "ADD_AIRLINE_REJECTED":{
    return{
      ...state,
      isLoading: false,
      isError: true,
      message: "cannot add data"
    };
  }
  case "ADD_AIRLINE_FULFILLED":{
    return{
      ...state,
      isError: false,
      isAdd: true,
      isLoading:false,
      message: "add AIRLINE success"
    };
  }
  default:{
    return state;
  }
  }
};