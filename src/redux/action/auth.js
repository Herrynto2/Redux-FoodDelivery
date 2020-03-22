import axios from 'axios'
import { USER_LOGIN, USER_LOGOUT } from './types'

export const loginUser = dataUser => dispatch => {
    dispatch({
        type: USER_LOGIN,
        payload: dataUser
    })
    return

}

export const logoutUser = () => dispatch => {
    dispatch({
        type: USER_LOGOUT,
        payload: ""
    })
    return

}