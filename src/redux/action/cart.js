import axios from 'axios'
import { GET_CART_USER } from './types'

export const getCartItems = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/carts', { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CART_USER,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}