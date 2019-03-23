import React, { Component } from "react"
import './signUp.css'
import { Link } from 'react-router-dom'
import firebase from './Config/Fire'
import Navbar from "./Navbar";

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            number: '',
            address: '',
            type: 'Student',
        }
    }

    name(e) {
        this.setState({
            name: e.target.value
        })
    }

    email(e) {
        this.setState({
            email: e.target.value
        })
    }

    password(e) {
        this.setState({
            password: e.target.value
        })
    }

    number(e) {
        this.setState({
            number: e.target.value
        })
    }

    address(e) {
        this.setState({
            address: e.target.value
        })
    }

    options(e) {
        this.setState({
            type: e.target.value
        })
    }

    signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((success) => {
                let uid = success.user.uid
                this.setState({
                    uid
                })
                firebase.database().ref("users/" + uid).set(this.state)
                    .then(() => {
                        alert("Sign Up Successfully. You are now redirecting to LogIn page")
                        this.props.history.push("/login")
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 heading" style={{ marginTop: "20px" }}>
                    <h1>Sign Up</h1>
                </div>

                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="name" className="form-control" onChange={this.name.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" onChange={this.email.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" onChange={this.password.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="number" className="form-control" onChange={this.number.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" className="form-control" onChange={this.address.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Account Type:</label>
                        <select className="form-control" value={this.state.type} onChange={this.options.bind(this)}>
                            <option value="Student">Student</option>
                            <option value="Company">Company</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-default" id="norm" onClick={this.signUp.bind(this)}>Sign Up</button>
                    </div>
                    <div className="form-group">
                        <span className="spa">Have an account? <Link to="login"><u>Log In here</u></Link></span>
                    </div>

                </div>

            </ >
        )
    }
}

export default SignUp