const initialState = {
    isAdd: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FLIGHT_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'ADD_FLIGHT_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot add data'
            }
        }
        case 'ADD_FLIGHT_FULFILLED':{
            return{
                ...state,
                isError: false,
                isAdd: true,
                isLoading:false,
                message: 'add flight success'
            }
        }
        default:{
            return state
        }
    }
}