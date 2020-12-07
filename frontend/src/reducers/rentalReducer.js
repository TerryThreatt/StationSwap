export default function rentalReducer(state = {rentals: [], rental: {}, loading: false }, action) {
    switch(action.type){
        case 'GETTING_RENTALS':
            return {...state, rentals: [...state.rentals], loading: true}
        case 'GET_RENTALS':
            return {...state, rentals: action.rentals, loading: true }
        case 'ADD_RENTAL':
            let rental = state.rentals.map(rental => {
                if(rental.id === action.rental.id){
                    return action.rental
                } else {
                    return rental
                }
            })
            return {...state, rentals: [...state.rentals, rental], rental: rental }
        default:
        return state
    }
}