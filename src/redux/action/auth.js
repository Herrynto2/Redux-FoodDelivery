import axios from 'axios'
import { USER_LOGIN } from './types'

export const loginUser = dataUser => dispatch => {
    console.log('payload', dataUser)
    dispatch({
        type: USER_LOGIN,
        payload: dataUser
    })
    return

}