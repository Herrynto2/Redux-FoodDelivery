import React from 'react'
import '../assets/Style.css'
import Navbarsub from '../components/Navbarsub'
import ListItems from '../components/Listitems'
import Footer from '../components/Footer'
import axios from 'axios'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux'
import { getDrinksCategory } from '../redux/action/categoryDrink'

class CategoryDrink extends React.Component {

        componentDidMount() {
            this.props.getDrinksCategory()
        }


        render() {
                return ( <
                        div > { /* Navbar */ } <
                        Navbarsub / >

                        { /* Content Items */ } <
                        div >
                        <
                        div className = "container margincontent" >
                        <
                        div className = "row" >
                        <
                        div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > Drink Category < /h4></div >
                        <
                        /div> <
                        div className = "row " > {
                            this.props.drink_category.map((val, idx) => ( <
                                    ListItems key = { idx }
                                    items = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    prices = { val.price }
                                    id = { val.id_item }
                                    images = { val.images }
                                    />))} <
                                    /div> <
                                    /div> <
                                    /div>

                                    { /* Footer */ } <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }


                        const mapStateToProps = state => ({
                            drink_category: state.drinksCategory.drink_category
                        })

                        const mapDispatchToProps = { getDrinksCategory }

                        export default connect(mapStateToProps, mapDispatchToProps)(CategoryDrink)