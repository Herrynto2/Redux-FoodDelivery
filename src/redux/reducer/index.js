import { combineReducers } from 'redux'
// import authReducer from './auth'
// import userReducer from './user'
import restaurantReducer from './restaurants'
import itemReducer from './items'
import foodsReducer from './categoryFood'
import drinksReducer from './categoryDrink'
import cartReducer from './cart'
import userReducer from './users'

export default combineReducers({
    // auth: authReducer,
    // user: userReducer,
    restaurants: restaurantReducer,
    items: itemReducer,
    foodsCategory: foodsReducer,
    drinksCategory: drinksReducer,
    cartItems: cartReducer,
    user: userReducer
})