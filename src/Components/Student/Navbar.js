import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../Config/Fire'

class Navbar extends Component {
    signOut() {
        firebase.auth().signOut().then(() => {
            alert("SignOut Successfully")
            window.location = '/'
        })
    }
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">Campus Recruitment</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/student">Your Info</Link></li>
                            <li><Link to="/student/Available">Available Jobs</Link></li>
                            <li><Link to="/student/Applied">Applied Jobs</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a onClick={() => this.signOut()}>Sign Out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar