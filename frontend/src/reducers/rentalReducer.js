export default function rentalReducer(state = {rentals: []}, action) {
    switch(action.type){
        case 'GET_RENTALS':
            return {rentals: action.payload}
        default:
        return state
    }
}