import axios from 'axios'
import { GET_CART_USER, GET_CART_ID } from './types'

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

export const getCartItemID = (id) => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + `/cart/${id}`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CART_ID,
                payload: res.data.data[0],
                checkout: res.data.checkout
            })
        })
        .catch(err => console.log(err))
}