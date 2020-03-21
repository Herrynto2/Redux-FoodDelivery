import { GET_ALL_ITEMS, GET_ITEMS_ID, GET_FOOD_CATEGORY, GET_DRINK_CATEGORY } from '../action/types'

const initialState = {
    data_items: [],
    data_foods: [],
    data_drinks: [],
    data_item: null,
    data_review: []
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                data_items: action.payload
            }
        case GET_ITEMS_ID:
            return {
                ...state,
                data_item: action.payload,
                data_review: action.review
            }
        case GET_FOOD_CATEGORY:
            return {
                ...state,
                data_foods: action.payload
            }
        case GET_DRINK_CATEGORY:
            return {
                ...state,
                data_drinks: action.payload
            }

        default:
            return state
    }
}