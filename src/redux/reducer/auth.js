import { USER_LOGIN, USER_LOGOUT } from '../action/types'


const initialState = {
    token: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case USER_LOGOUT:
            return {
                token: action.payload
            }
        default:
            return state
    }
}