import React from 'react';
import { Media } from 'reactstrap';
import Trash from '../img/trash.png'
import axios from 'axios'

class ReviewItemResto extends React.Component {

    handleDelete = async(id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/items-review/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                }
            })
            .then(res => {
                console.log(res.data)
                if (res.data.success !== false) {
                    try {
                        alert('success to delete items at cart')

                    } catch (error) {
                        console.log(error.response)
                        alert(error.response.msg)
                    }
                } else {
                    alert('delete item failed')
                }
            })
            .catch(err => {
                console.log({ err })
                alert(err.response.msg)
            })
    }

    render() {
        return ( <
            div >
            <
            div className = "marginreview" >
            <
            div className = 'container' >

            <
            div className = 'row justify-content-center' >
            <
            div className = 'col-lg-9' >
            <
            div className = "reviews-box" >
            <
            Media className = "text-left" >
            <
            Media left >
            <
            img src = { this.props.images }
            className = "img-reviews" / >
            <
            div className = "trash" > < img src = { Trash }
            onClick = { e => this.handleDelete(this.props.id) }
            className = "trash" / > < /div> <
            /Media> <
            Media body >
            <
            Media heading className = "reviewer" > { this.props.name } <
            /Media><hr / >
            <
            p className = "text-muted datereview" > Date Creted: { this.props.date_created } < /p> <
            span className = "reviewerComn" > { this.props.review } < /span> <
            /Media> <
            /Media> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default ReviewItemResto;