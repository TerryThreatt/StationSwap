export default function rentalReducer(state = {rentals: []}, action) {
    switch(action.type){
        case 'GET_RENTALS':
            return {rentals: action.payload}
        case 'ADD_RENTAL':
            let rentals = state.rentals.map(rental => {
                if(rental.id === action.payload.id){
                    return action.payload
                } else {
                    return rental
                }
            })
            return {...state, rentals: rentals }
        default:
        return state
    }
}