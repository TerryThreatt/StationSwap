export default function laptopReducer(state = {laptops: [], laptop: {}}, action) {
    switch(action.type){
        case 'GET_LAPTOPS':
            return {...state, laptops:[...state.laptops, action.payload]}
        case 'ADD_LAPTOP':
            return {...state, laptops: [...state.laptops, action.payload], laptop: {...action.payload}}
        default:
        return state
    }
}