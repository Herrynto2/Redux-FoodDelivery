import React from 'react';
import Resto from '../img/resto1.jpg'
import { Link } from 'react-router-dom'
import cart from '../img/cart.png'

class ListRestaurant extends React.Component {
    render() {
        return ( <
            div className = "col-lg-3" >
            <
            Link className = "text-decoration-none" >
            <
            div className = "card  text-center cardresto" >
            <
            img src = { Resto }
            className = "card-img-top imgitems" / >
            <
            div className = "card-body text-center" >
            <
            h5 className = "card-resto" > { this.props.name } < /h5> <
            h6 className = "textcolor" > { this.props.location } < /h6> <
            /div> <
            /div> <
            /Link> <
            /div>
        )
    }
}

export default ListRestaurant;