import axios from 'axios'
import { GET_FOOD_CATEGORY } from './types'

export const getFoodsCategory = () => dispatch => {
    axios.get(process.env.REACT_APP_API_URL + '/browse-category/1')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_FOOD_CATEGORY,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
}