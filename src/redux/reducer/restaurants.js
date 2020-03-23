import { GET_ALL_RESTAURANTS, GET_ITEMS_RESTAURANT, GET_ITEM_RESTAURANT_ID } from '../action/types'

const initialState = {
    data_restaurants: [],
    data_item: [],
    data_review: [],
    data_itemID: null
}
export default function restaurantReducer(state = initialState, action) {
    switch (action.type) {
        //GUEST
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                data_restaurants: action.payload
            }
            //ADMIN
        case GET_ITEMS_RESTAURANT:
            return {
                ...state,
                data_item: action.payload
            }
        case GET_ITEM_RESTAURANT_ID:
            return {
                ...state,
                data_itemID: action.payload,
                data_review: action.review

            }

        default:
            return state
    }
}