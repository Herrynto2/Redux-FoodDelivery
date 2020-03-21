import axios from 'axios'
import { GET_ALL_ITEMS, GET_FOOD_CATEGORY, GET_DRINK_CATEGORY } from './types'

export const getDataItems = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-items')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_ALL_ITEMS,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}


export const getFoodsCategory = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-category/1')
        .then(res => {
            console.log('food', res)
            dispatch({
                type: GET_FOOD_CATEGORY,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}

export const getDrinksCategory = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-category/2')
        .then(res => {
            dispatch({
                type: GET_DRINK_CATEGORY,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}