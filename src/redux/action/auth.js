import axios from 'axios'
import { USER_LOGIN } from './types'

export const loginUser = dataUser => dispatch => {
    axios.post(process.env.REACT_APP_API_URL + '/login', dataUser)
        .then(res => {
            console.log('luliu')
            dispatch({
                type: USER_LOGIN,
                payload: dataUser
            })
        })
        .catch(err => console.log(err))
}