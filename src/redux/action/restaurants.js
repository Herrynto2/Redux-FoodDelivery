import axios from 'axios'
import { GET_ALL_RESTAURANTS } from './types'

export const getDataRestaurants = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-restaurant')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_ALL_RESTAURANTS,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}