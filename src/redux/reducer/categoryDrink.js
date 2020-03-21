import { GET_DRINK_CATEGORY } from '../action/types'

const initialState = {
    drink_category: []
}

export default function drinkGet(state = initialState, action) {
    switch (action.type) {
        case GET_DRINK_CATEGORY:
            return {
                ...state,
                drink_category: action.payload
            }
        default:
            return state
    }
}