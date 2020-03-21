import axios from 'axios'
import { GET_ALL_ITEMS } from './types'

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