import axios from 'axios'
import { GET_USER_PROFILE, GET_ADMIN_PROFILE } from './types'

export const getDataUser = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/profile', { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
        .then(res => {
            dispatch({
                type: GET_USER_PROFILE,
                payload: res.data.data[0][0],
                payloads: res.data.data[1][0]
            })
        })
        .catch(err => console.log(err))
}

export const getDataAdmin = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/restaurant', { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
        .then(res => {
            console.log('resto', res.data)
            dispatch({
                type: GET_ADMIN_PROFILE,
                payload: res.data.data[0]
            })
        })
        .catch(err => console.log(err))
}