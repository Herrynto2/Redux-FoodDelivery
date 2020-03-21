import axios from 'axios'
import { GET_DRINK_CATEGORY } from './types'

export const getDrinksCategory = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-category/2')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_DRINK_CATEGORY,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}