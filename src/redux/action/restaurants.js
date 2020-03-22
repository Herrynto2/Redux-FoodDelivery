import axios from 'axios'
import { GET_ALL_RESTAURANTS, GET_ITEMS_RESTAURANT } from './types'

//GUEST
export const getDataRestaurants = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-restaurant')
        .then(res => {
            console.log('keys', res)
            dispatch({
                type: GET_ALL_RESTAURANTS,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}

//ADMIN
export const getItemsRestaurants = (token) => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/items', { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            console.log('keys', res)
            dispatch({
                type: GET_ITEMS_RESTAURANT,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}