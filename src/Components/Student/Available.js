import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar'

class Available extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        firebase.database().ref("jobsPosted").on("value", (data) => {
            var a = Object.entries(data.val())
            this.setState({
                arr: a
            })
        })
    }

    apply(ev) {
        var uid = localStorage.getItem("userId")
        var jobId = ev
        let userObj = {
            uid,
            jobId,
        }
        firebase.database().ref("appliedStudents").push(userObj)
        firebase.database().ref("users/" + uid + "/appliedJobs").push(userObj)
        alert("You have applied successfully")
    }

    render() {
        return (
            <div className="main">
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Available Jobs
                    </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.arr.map((data) => {
                            return (
                                <div className='well' key={Math.random(36)}>
                                    <h5 className="bold" key={Math.random(36)}> Company Name: </h5> <h4 className="name" key={Math.random(36)}>{data[1].name}</h4>
                                    <h5 className="bold" key={Math.random(36)}> Job Title: </h5> <h4 className="title" key={Math.random(36)}>{data[1].title} </h4>
                                    <h5 className="bold" key={Math.random(36)}> About Job: </h5> <h4 className="description" key={Math.random(36)}>{data[1].description} </h4>
                                    <button className="btn btn-default apply" key={data[0]} onClick={(e) => this.apply(data[0])} >Apply</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Available