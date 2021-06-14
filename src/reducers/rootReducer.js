import { combineReducers } from "redux"
import laptopReducer from './laptopReducer'
import rentalReducer from './rentalReducer'

const rootReducer = combineReducers({
    laptops: laptopReducer,
    rentals: rentalReducer
})

export default rootReducer