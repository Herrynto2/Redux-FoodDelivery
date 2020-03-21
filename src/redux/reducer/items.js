import { GET_ALL_ITEMS } from '../action/types'

const initialState = {
    data_items: []
}

export default function itemsGet(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                data_items: action.payload
            }

        default:
            return state
    }
}