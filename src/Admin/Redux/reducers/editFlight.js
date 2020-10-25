const initialState = {
    isAdd: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_FLIGHT_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'EDIT_FLIGHT_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot edit data'
            }
        }
        case 'EDIT_FLIGHT_FULFILLED':{
            return{
                ...state,
                isError: false,
                isAdd: true,
                isLoading:false,
                message: 'edit flight success'
            }
        }
        default:{
            return state
        }
    }
}