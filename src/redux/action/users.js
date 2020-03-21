import axios from 'axios'
import { GET_USER_PROFILE } from './types'

export const getDataUser = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/profile', { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
        .then(res => {
            console.log('key', res.data.data)
            dispatch({
                type: GET_USER_PROFILE,
                payload: res.data.data[0][0],
                payloads: res.data.data[1][0]
            })
        })
        .catch(err => console.log(err))
}