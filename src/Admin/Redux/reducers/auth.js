const initialState = {
    isLoginAdmin: false,
    isLoadingAdmin: false,
    isErrorAdmin: false,
    tokenAdmin: '',
    alertMsgAdmin: '',
    isSuccess: false
  }
  
  export default (state=initialState, action) => {
    switch(action.type){
      case 'AUTH_ADMIN_PENDING':{
        return {
          ...state,
          isLoadingAdmin: true
        }
      }
      case 'AUTH_ADMIN_REJECTED': {
        return {
          ...state,
          isLoadingAdmin: false,
          isErrorAdmin: true,
          alertMsgAdmin: action.payload.response.data.error
        }
      }
      case 'AUTH_ADMIN_FULFILLED':{
        console.log(action.payload.data.message)
        localStorage.setItem('tokenAdmin', action.payload.data.message)
        return {
          ...state,
          tokenAdmin: action.payload.data.message,
          isLoadingAdmin: false,
          isLoginAdmin: true,
          alertMsgAdmin: 'Successfully login'
        }
      }case 'RESET_PASSWORD_PENDING': {
        return {
          ...state,
          isLoadingAdmin: true,
          isLoginAdmin: false,
        }
      }
      case 'RESET_PASSWORD_REJECTED': {
        return {
          ...state,
          isLoadingAdmin: false,
          isLoginAdmin: false,
          isErrorAdmin: true
        }
      }
      case 'RESET_PASSWORD_FULFILLED': {
        return {
          ...state,
          isLoadingAdmin: false,
          isLoginAdmin: false,
          isErrorAdmin: false,
          isSuccess: true
        }
      }
      case 'MATCH_CODE_PENDING': {
        return {
          ...state,
          isLoadingAdmin: true,
          isLoginAdmin: false,
        }
      }
      case 'MATCH_CODE_REJECTED': {
        return {
          ...state,
          isLoadingAdmin: false,
          isLoginAdmin: false,
          isErrorAdmin: true
        }
      }
      case 'MATCH_CODE_FULFILLED': {
        return {
          ...state,
          isLoadingAdmin: false,
          isLoginAdmin: false,
          isErrorAdmin: false,
          isSuccess: true
        }
      }
      case 'SET_TOKEN_ADMIN':{
        return{
          ...state,
          tokenAdmin: action.payload,
          isLoginAdmin: true
        }
      }
      case 'LOGOUT_ADMIN': {
        localStorage.removeItem('tokenAdmin')
        return {
          isLoginAdmin: false,
          isLoadingAdmin: false,
          tokenAdmin: '',
          isErrorAdmin: false,
          alertMsgAdmin: 'Logout Successfully'
        }
      }
      case 'CLEAR_MESSAGE_ADMIN': {
        return {
          ...state,
          alertMsgAdmin: ''
        }
      }
      default : {
        return state
      }
    }
  }