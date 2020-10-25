const initialState = {
    dataAirline: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
}
  
export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_AIRLINE_DETAIL_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_AIRLINE_DETAIL_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_AIRLINE_DETAIL_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          dataAirline: action.payload.data.data[0],
        }
      }
      default : {
        return state
      }
    }
  }