import axios from 'axios'
import { GET_ALL_RESTAURANTS, GET_ITEMS_RESTAURANT, GET_ITEM_RESTAURANT_ID } from './types'

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
    //ADMIN by ID
export const getItemRestaurantID = (id, token) => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + `/restaurant-items/${id}`, { headers: { Authorization: 'Bearer ' + token } })
        .then(res => {
            console.log('keys', res)
            dispatch({
                type: GET_ITEM_RESTAURANT_ID,
                payload: res.data.data[0],
                review: res.data.review

            })
        })
        .catch(err => console.log(err))
}