import { GET_ALL_RESTAURANTS } from '../action/types'

const initialState = {
    data_restaurants: []
}

export default function restaurantsGet(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                data_restaurants: action.payload
            }

        default:
            return state
    }
}