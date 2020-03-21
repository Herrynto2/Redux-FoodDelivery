import React from 'react';
import axios from 'axios'
import Navbarsubuser from '../components/Navbarsubuser'
import Swal from 'sweetalert2'

class Profileuser extends React.Component {

    //Get Data Profile
    constructor(props) {
        super(props)
        this.state = {
            data_profile: {},
            saldo: '',
            name_user: '',
            email: '',
            gender: '',
            work: '',
            address: '',
            images: null
        }
    }
    componentDidMount() {
        this.getDataUsers()
    }
    async getDataUsers() {
        // await axios.get("http://localhost:3000/detail-items/" + this.props.match.params.id)
        console.log(window.localStorage.getItem('token'))
        await axios.get(`http://localhost:3000/profile`, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
            .then(res => {
                const x = "heriheryanto"
                    // console.log(x.substr(2, 4))
                console.log(res.data.data[0][0].images)
                let dataArr = res.data.data[0][0]
                this.setState({
                    data_profile: dataArr
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // componentWillUpdate(firstState){
    //     if(parseInt(firstState.saldo) !== parseInt(this.state.saldo)){
    //         this.getDataUsers()
    //         return;
    //     } else {
    //         return;
    //     }
    // }

    // Topup
    handleBalance = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            saldo: e.target.value
        })
    }
    handleTopup = (e) => {
        e.preventDefault()
        const data = {
            saldo: this.state.saldo
        }
        const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })
        if (this.state.saldo === "") {
            alerts.fire({ icon: 'error', text: 'Please input the value! ' })
        } else {
            console.log(data)
            axios.patch(`http://localhost:3000/topup`, data, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    if (res.data.success !== false) {
                        try {
                            alerts.fire({ icon: 'success', text: 'topup successfully' })
                            this.props.history.push('/userprofile') //push home page
                        } catch (error) {
                            alerts.fire({ icon: 'error', text: `${error.response.msg}` })
                        }
                    } else {
                        alerts.fire({ icon: 'error', text: 'please input value' })

                    }
                })
                .catch(err => {
                    console.log(err.response)
                    alerts.fire({ icon: 'error', text: `${err.response.msg}` })
                })
        }
    }

    //Edit Profile
    handleName = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            name_user: e.target.value
        })
    }
    handleEmail = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            email: e.target.value
        })
    }
    handleGender = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            gender: e.target.value
        })
    }
    handleWork = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            work: e.target.value
        })
    }
    handleAddress = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            address: e.target.value
        })
    }
    handleImages = (e) => {
        console.log(e.target.files[0])
        this.setState({
            images: e.target.files[0]
        })
    }
    handleProfile = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name_user', this.state.name_user)
        data.append('email', this.state.email)
        data.append('gender', this.state.gender)
        data.append('address', this.state.address)
        data.append('work', this.state.work)
        data.append('images', this.state.images)
        const alerts = Swal.mixin({ customClass: { confirmButton: 'btn btn-warning' } })
        if (this.state.email === "") {
            alerts.fire({ icon: 'error', text: 'Text still empty! ' })
        } else {
            axios.patch(`http://localhost:3000/profile`, data, { headers: { Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem('token')) } })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success !== false) {
                        try {
                            alerts.fire({ icon: 'success', text: 'update user successfully' })
                            this.props.history.push('/userprofile')
                        } catch (error) {
                            alerts.fire({ icon: 'error', text: 'Failed to update' })
                        }
                    } else {
                        alerts.fire({ icon: 'error', title: 'Oops', text: 'Failed to update' })
                    }
                })
                .catch(err => {
                    alert(err.response.msg)
                    alerts.fire({ icon: 'error', text: 'update user successfully ' })
                })
        }
    }

    render() {
        return ( <
            div >
            <
            Navbarsubuser / >
            <
            div className = "container" >
            <
            div className = "row mt-5" >
            <
            div className = "col-sm-12" >
            <
            h3 className = "tittleuserprofile" > User Profile < /h3><hr / >
            <
            /div> <
            /div> <
            div className = "row mt-3" >
            <
            div className = "col-lg-4 sizeprofile" >
            <
            img src = { process.env.REACT_APP_API_URL + this.state.data_profile.images }
            className = "sizeuserprofile mb-3" / >
            <
            input type = "file"
            onChange = { e => this.handleImages(e) }
            className = "form-control-file" / >
            <
            textarea onChange = { e => this.handleAddress(e) }
            name = "address"
            className = "form-control address"
            rows = "3"
            defaultValue = { this.state.data_profile.address } > < /textarea> <
            /div> <
            div className = "col-lg-1" > < /div> <
            div className = "col-lg-6" >
            <
            small className = "balance" > Balance < /small><br / >
            <
            button onClick = { e => this.handleTopup(e) }
            class = "btn btn-warning btntopup"
            type = "submit" > Topup < /button> <
            span className = "value" > Rp. { this.state.data_profile.Saldo } < /span> <
            input onChange = { e => this.handleBalance(e) }
            type = "number"
            width = "100px"
            name = "balance"
            className = "form-control mb-4"
            id = "exampleFormControlInput1" / >


            <
            hr / >
            <
            div class = "form-group" >
            <
            label
            for = "exampleFormControlInput1"
            className = " sml" > Name < /label> <
            input onChange = { e => this.handleName(e) }
            name = "name"
            type = "text"
            className = "form-control"
            id = "exampleFormControlInput1"
            defaultValue = { this.state.data_profile.name_user }
            disable / >
            <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Email < /label> <
            input onChange = { e => this.handleEmail(e) }
            type = "email"
            name = "email"
            className = "form-control"
            id = "exampleFormControlInput1"
            defaultValue = { this.state.data_profile.email }
            /> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Gender < /label> <
            select onChange = { e => this.handleGender(e) }
            name = "gender"
            class = "form-control"
            id = "exampleFormControlSelect1" >
            <
            option > --Select gender-- < /option> <
            option > Man < /option> <
            option > Woman < /option> <
            /select> <
            label
            for = "exampleFormControlInput1"
            className = "mt-2 sml" > Work < /label> <
            input onChange = { e => this.handleWork(e) }
            name = "work"
            type = "text"
            className = "form-control mb-4"
            id = "exampleFormControlInput1"
            defaultValue = { this.state.data_profile.work }
            /> <
            button onClick = { e => this.handleProfile(e) }
            class = "btn btn-warning my-2 my-sm-0"
            type = "submit" > Edit < /button> <
            /div> <
            /div> <
            /div> <
            /div>


            <
            /div>
        )
    }
}

export default Profileuser;