import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar'

class StudentInfo extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            number: ''
        }
    }

    componentDidMount() {
        var uid = localStorage.getItem("userId")
        firebase.database().ref("users/" + uid).on("value", (data) => {
            var a = Object.entries(data.val())
            for (let i = 0; i < a.length; i++) {
                if (a[i][0] === "name") {
                    var name = a[i][1]
                    this.setState({
                        name: name
                    })
                }
                if (a[i][0] === "address") {
                    var address = a[i][1]
                    this.setState({
                        address: address
                    })
                }
                if (a[i][0] === "number") {
                    var number = a[i][1]
                    this.setState({
                        number: number
                    })
                }
            }
        })

    }
    render() {
        return (
            <div className="main">
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Your Info
                    </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    <ul className="list-group" id="ul" >
                        <label>Your Name:</label>
                        <li className="list-group-item">{this.state.name}</li>
                        <label>Your Number:</label>
                        <li className="list-group-item">{this.state.number}</li>
                        <label>Your Address:</label>
                        <li className="list-group-item">{this.state.address}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default StudentInfo