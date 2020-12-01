export default function laptopReducer(state = {laptops: []}, action) {
    switch(action.type){
        case 'GET_LAPTOPS':
            return {laptops: action.payload}
        case 'ADD_LAPTOP':
            return {...state, laptops: [...state.laptops, action.payload]}
        default:
        return state
    }
}