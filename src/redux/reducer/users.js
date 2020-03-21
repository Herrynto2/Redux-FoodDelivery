import { GET_USER_PROFILE } from '../action/types'

const initialState = {
    data_user: {},
    data_updated: {}
}

export default function usersGet(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                data_user: action.payload,
                data_updated: action.payloads
            }

        default:
            return state
    }
}