export default function rentalReducer(state = {rentals: [], rental: {}, loading: false }, action) {
    switch(action.type){
        case 'GETTING_RENTALS':
            return {...state, rentals: [...state.rentals], loading: true}
        case 'GET_RENTALS':
            return {...state, rentals: action.rentals, loading: true }
        case 'ADD_RENTAL':
            return {...state, rentals: [...state.rentals, action.rental], rental: {...action.laptop} }
        default:
        return state
    }
}