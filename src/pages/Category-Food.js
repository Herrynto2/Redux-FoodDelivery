import React from 'react'
import '../assets/Style.css'
import Navbarsub from '../components/Navbarsub'
import ListItem from '../components/Listitems'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { getFoodsCategory } from '../redux/action/categoryFood'

class CategoryFood extends React.Component {

        componentDidMount() {
            this.props.getFoodsCategory()
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
                        div className = "col-md-12" > < h4 className = "text-center bold mt-5 mb-5" > Food Category < /h4></div >
                        <
                        /div> <
                        div className = "row " > {
                            this.props.foods_category.map((val, idx) => ( <
                                    ListItem key = { idx }
                                    items = { val.name_item }
                                    restaurant = { val.name_restaurant }
                                    prices = { val.price }
                                    id = { val.id_item }
                                    images = { val.images }
                                    />))} <
                                    /div> <
                                    /div> <
                                    /div> { /* Footer */ } <
                                    Footer / >
                                    <
                                    /div>
                                )
                            }
                        }


                        const mapStateToProps = state => ({
                            foods_category: state.foodsCategory.foods_category
                        })

                        const mapDispatchToProps = { getFoodsCategory }

                        export default connect(mapStateToProps, mapDispatchToProps)(CategoryFood)