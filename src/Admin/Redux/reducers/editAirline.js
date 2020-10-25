const initialState = {
    isAdd: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_AIRLINE_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'EDIT_AIRLINE_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot airline data'
            }
        }
        case 'EDIT_AIRLINE_FULFILLED':{
            return{
                ...state,
                isError: false,
                isAdd: true,
                isLoading:false,
                message: 'edit airline success'
            }
        }
        default:{
            return state
        }
    }
}