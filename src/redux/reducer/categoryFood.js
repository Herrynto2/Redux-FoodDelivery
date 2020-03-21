import { GET_FOOD_CATEGORY } from '../action/types'

const initialState = {
    foods_category: []
}

export default function foodsGet(state = initialState, action) {
    switch (action.type) {
        case GET_FOOD_CATEGORY:
            return {
                ...state,
                foods_category: action.payload
            }
        default:
            return state
    }
}