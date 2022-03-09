import { combineReducers } from "redux"
import laptopReducer from './laptopReducer'
import rentalReducer from './rentalReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    laptops: laptopReducer,
    rentals: rentalReducer,
    login: loginReducer
})

export default rootReducer