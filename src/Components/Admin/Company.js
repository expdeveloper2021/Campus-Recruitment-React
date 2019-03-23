import React, { Component } from "react"
import firebase from "../../Config/Fire"
import Navbar from './Navbar'

class Company extends Component {
    constructor() {
        super()
        this.state = {
            userData: [],
            company: [],
        }
    }

    componentDidMount() {
        firebase.database().ref("users").on('value', (data) => {
            let userData = this.state.userData
            for (let key in data.val()) {
                userData.push(data.val()[key])
            }
            this.setState({
                userData
            })
            let company = this.state.userData.filter(e => {
                return e.type === 'Company'
            })
            this.setState({
                company
            })
        })
    }

    delete(key) {
        console.log(key)
        firebase.database().ref("users/" + key).remove().then(() => {
            window.location.reload()
        })
    }

    render() {
        return (
            <div className="main" >
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Companies Info
                </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.company.map((data) => {
                            return (
                                <div className="well" key={Math.random(36)}>
                                    <ul className="list-group" id="ul" >
                                        <label>Name:</label>
                                        <li className="list-group-item">{data.name}</li>
                                        <label>Email:</label>
                                        <li className="list-group-item">{data.email}</li>
                                        <label>Number:</label>
                                        <li className="list-group-item">{data.number}</li>
                                        <label>Address:</label>
                                        <li className="list-group-item">{data.address}</li>
                                    </ul>
                                    <div>
                                        <button className="btn btn-default" onClick={() => this.delete(data.uid)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Company