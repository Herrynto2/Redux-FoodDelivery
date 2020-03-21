import { GET_CART_USER, GET_CART_ID } from '../action/types'

const initialState = {
    data_cart: [],
    data_cartID: null,
    checkout: null
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_USER:
            return {
                ...state,
                data_cart: action.payload
            }
        case GET_CART_ID:
            return {
                ...state,
                data_cartID: action.payload,
                checkout: action.checkout
            }

        default:
            return state
    }
}