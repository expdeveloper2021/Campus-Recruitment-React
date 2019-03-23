import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar';

class Create extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
        }
    }

    create() {
        let uid = localStorage.getItem("userId")
        firebase.database().ref("users/" + uid).on("value", (data) => {
            let a = Object.entries(data.val())
            let name = a[2][1]
            let pushKey = firebase.database().ref("jobsPosted/").push().getKey();
            let description = this.state.description
            let title = this.state.title
            let userObj = {
                description,
                title,
                name
            }
            firebase.database().ref("jobsPosted/" + pushKey).set({
                ...userObj,
                pushKey
            })
                .then(() => {
                    alert("Job created Successfully")
                })
        })
    }

    title(e) {
        this.setState({
            title: e.target.value
        })
    }

    txtArea(e) {
        this.setState({
            description: e.target.value
        })
    }

    render() {
        return (
            <div className="main">
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Create a Job
                    </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    <div className="form-group">
                        <label>Job Title:</label>
                        <input type="text" className="form-control" onChange={this.title.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Job Description:</label>
                        <textarea className="form-control" rows="5" onChange={this.txtArea.bind(this)}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-default" onClick={this.create.bind(this)}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create