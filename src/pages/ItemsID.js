import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Bakso from '../img/rendang.jpg'
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Navbarsubuser from '../components/Navbarsubuser'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Modal } from 'react-bootstrap'

class ItemsID extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data_items: null,
                data_review: [],
                review: '',
                total_item: '',
                show: false
            }
        }

        componentDidMount() {
            this.getDataItems(this.props.match.params.id)
        }

        async getDataItems(id) {
            await axios.get(`http://localhost:3000/detail-items/${id}`)
                .then(res => {
                    console.log(res.data)
                    let dataArr = res.data.data
                    let dataArr2 = res.data.review
                    this.setState({
                        data_items: dataArr,
                        data_review: dataArr2
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }

        handleTextComment = (e) => {
            console.log(e.target.value)
            this.setState({
                review: e.target.value
            })
        }

        handleComment = async(e) => {
            const data = {
                review: this.state.review
            }
            const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })
            if (this.state.review === "") {
                alerts.fire({ icon: 'error', text: 'value still empty' })
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/review/${this.props.match.params.id}`, data, {
                        headers: {
                            Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                        }
                    })
                    .then(res => {
                        if (res.data.success !== false) {
                            try {
                                alerts.fire({ icon: 'success', text: 'Comment successful' })
                            } catch (error) {
                                console.log(error.response)
                                alerts.fire({ icon: 'error', text: `${error.response.msg}` })
                            }
                        } else {
                            alerts.fire({ icon: 'error', title: 'Oops...', text: 'Failed post comment' })
                        }
                    })
                    .catch(err => {
                        console.log({ err })
                        alerts.fire({ icon: 'error', text: `${err.response.msg}` })
                    })
            }
        }

        ////Add To Cart
        handleValue = (e) => {
            console.log(e.target.value)
            this.setState({
                total_item: e.target.value
            })
        }

        handleAddToCart = async(e) => {
            const data = {
                total_item: this.state.total_item
            }
            const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })

            if (this.state.total_item === "") {
                alerts.fire({ icon: 'error', text: 'value still empty' })
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/carts/${this.props.match.params.id}`, data, {
                        headers: {
                            Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
                        }
                    })
                    .then(res => {
                        if (res.data.success !== false) {
                            try {
                                alerts.fire({ icon: 'success', text: 'Save items successfully' })
                            } catch (error) {
                                console.log(error.response)
                                alerts.fire({ icon: 'error', text: `${error.response.msg}` })
                            }
                        } else {
                            alerts.fire({ icon: 'error', title: 'Oops...', text: 'Failed to save items' })
                        }
                    })
                    .catch(err => {
                        console.log({ err })
                        alerts.fire({ icon: 'error', text: `${err.response.msg}` })
                    })
            }
        }

        handleModal() {
            this.setState({ show: !this.state.show })
        }

        render() {
                return ( <
                        div >
                        <
                        Navbarsubuser / >
                        <
                        div className = 'container' >
                        <
                        h4 className = " bold mt-5 mb-5 text-center" > Items < /h4>

                        {
                            this.state.data_items && ( <
                                div className = "card-body-link" >
                                <
                                div className = "card mb-5 card-profil" >
                                <
                                div className = "row no-gutters" >
                                <
                                div className = "row no-gutters" >
                                <
                                img src = { process.env.REACT_APP_API_URL + this.state.data_items.images }
                                className = "card-img card-img-detail"
                                alt = "..." / >
                                <
                                /div> <
                                div className = "col-md-6" >
                                <
                                div className = "card-body" >
                                <
                                h5 className = "cart-titles" > { this.state.data_items.name_restaurant } < /h5> <
                                hr / >
                                <
                                h6 className = "cart-resto" > { this.state.data_items.name_item } - { this.state.data_items.location } < /h6> <
                                p className = "text-muted" > { this.state.data_items.desciption } < /p> <
                                h6 className = "cart-price" > Rp. { this.state.data_items.price } < /h6> <
                                /div> <
                                /div> <
                                /div> <
                                /div> <
                                /div>
                            )
                        } <
                        button onClick = {
                            () => { this.handleModal() } }
                        type = "button"
                        className = "btn btn-warning plus marginplus" > Cart < /button> <
                        /div>

                        <
                        div className = "container mt-5" >
                        <
                        Tabs defaultIndex = { 1 }
                        onSelect = { index => console.log(index) } >
                        <
                        TabList >
                        <
                        Tab className = "btn btn-danger mr-2" > Hide < /Tab> <
                        Tab className = "btn btn-danger" > See Review < /Tab> <
                        /TabList> <
                        hr / >
                        <
                        TabContent >
                        <
                        TabPanel > < /TabPanel> <
                        /TabContent> <
                        TabPanel > {
                            this.state.data_review.map((val, idx) => ( <
                                    Reviews name = { val.name_user }
                                    date_created = { val.date_created }
                                    review = { val.review }
                                    date = { val.date_created }
                                    images = { process.env.REACT_APP_API_URL + val.images }
                                    />))} <
                                    div className = "row justify-content-center" >
                                    <
                                    div className = "text-center" > < textarea onChange = { e => this.handleTextComment(e) }
                                    name = "comment"
                                    className = "form-comment form-control pl-3"
                                    rows = "2"
                                    placeholder = "comment ..." > < /textarea></div >
                                    <
                                    /div> <
                                    div className = "col-lg-5 justify-content-center text-center mt-3" >
                                    <
                                    button type = "button"
                                    onClick = { e => this.handleComment(e) }
                                    className = "btn btn-danger" > Comment < /button> <
                                    /div> <
                                    /TabPanel> <
                                    /Tabs> <
                                    /div> { /* Add Items Hide*/ } {
                                        this.state.data_items && ( <
                                            Modal centered show = { this.state.show }
                                            onHide = {
                                                () => this.handleModal() } >
                                            <
                                            Modal.Header closeButton > < span className = "bold text-muted" > { this.state.data_items.name_restaurant } < /span></Modal.Header >
                                            <
                                            Modal.Body className = "text-center" >
                                            <
                                            div class = "card mb-3" >
                                            <
                                            div class = "row no-gutters" >
                                            <
                                            div class = "col-md-4" >
                                            <
                                            img src = { process.env.REACT_APP_API_URL + this.state.data_items.images }
                                            className = "imgshapes" / >
                                            <
                                            /div> <
                                            div class = "col-md-8 text-left" >
                                            <
                                            div class = "card-body card-bodies" >
                                            <
                                            h6 className = "cart-prices" > Rp. { this.state.data_items.price } < span > /item</span > < /h6>

                                            <
                                            input type = "number"
                                            onChange = { e => this.handleValue(e) }
                                            name = "value"
                                            className = "cartvalue form-control"
                                            min = "1"
                                            placeholder = "add items..." / >
                                            <
                                            div className = "valuealign" > < button onClick = { e => this.handleAddToCart(e) }
                                            type = "button"
                                            className = "btn-carts btn-auth btn btn-warning mt-3" > Save < /button></div >
                                            <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /div> <
                                            /Modal.Body> <
                                            /Modal>
                                        )
                                    } { /* Footer */ } <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }

                        export default ItemsID;