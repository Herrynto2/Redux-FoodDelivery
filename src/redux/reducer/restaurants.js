import { GET_ALL_RESTAURANTS, GET_ITEMS_RESTAURANT } from '../action/types'

const initialState = {
    data_restaurants: [],
    data_item: []
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

        default:
            return state
    }
}