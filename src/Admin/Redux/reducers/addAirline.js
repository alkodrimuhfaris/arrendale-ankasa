const initialState = {
    isAdd: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AIRLINE_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'ADD_AIRLINE_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot add data'
            }
        }
        case 'ADD_AIRLINE_FULFILLED':{
            return{
                ...state,
                isError: false,
                isAdd: true,
                isLoading:false,
                message: 'add airline success'
            }
        }
        default:{
            return state
        }
    }
}