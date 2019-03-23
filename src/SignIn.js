import React, { Component } from "react"
import './signUp.css'
import firebase from './Config/Fire'
import Navbar from "./Navbar";


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
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
    signIn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((success) => {
                let uid = success.user.uid
                localStorage.setItem("userId", uid)
                alert("Login successfull. You are redirecting to the home page")
                firebase.database().ref("users/" + uid).on("value", (data) => {
                    if (data.val() === null) {
                        alert("Sorry! You have been deleted from our database")
                    } else if (data.val().type === "Student") {
                        this.props.history.push('/student')
                    } else if (data.val().type === "Company") {
                        this.props.history.push('/company')
                    } else if (data.val().type === "Admin") {
                        this.props.history.push("/admin")
                    }
                })
            })
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 heading" style={{ marginTop: "20px" }}>
                    <h1>Sign In</h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1 form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" onChange={this.email.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" onChange={this.password.bind(this)} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-default" onClick={this.signIn.bind(this)}>Sign In</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SignIn