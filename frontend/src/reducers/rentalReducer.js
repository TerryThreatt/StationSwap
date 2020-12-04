const initialState = {
    rentals: [],
    rental: {}
}

export default function rentalReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_RENTALS':
            return {rentals: action.payload}
        case 'ADD_RENTAL':
            let rental = state.rentals.map(rental => {
                if(rental.id === action.payload.id){
                    return action.payload
                } else {
                    return rental
                }
            })
            return {...state, rentals: [...state.rentals, rental], rental: rental }
        default:
        return state
    }
}