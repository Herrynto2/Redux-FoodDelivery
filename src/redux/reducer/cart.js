import { GET_CART_USER } from '../action/types'

const initialState = {
    data_cart: []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_USER:
            return {
                ...state,
                data_cart: action.payload
            }

        default:
            return state
    }
}