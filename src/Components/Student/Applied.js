import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar'

class Applied extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        var uid = localStorage.getItem("userId")
        var myArr = this.state.arr
        firebase.database().ref("users/" + uid + "/appliedJobs").on("value", (data) => {
            var a = Object.entries(data.val())
            for (let i = 0; i < a.length; i++) {
                var jobId = a[i][1].jobId
                firebase.database().ref("jobsPosted/" + jobId).on("value", (data) => {
                    myArr.push(data.val())
                    this.setState({
                        arr: myArr
                    })
                })
            }
        })
    }

    render() {
        return (
            <div className="main">
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Applied Jobs
                    </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.arr.map((data) => {
                            return (
                                <div className='well' key={Math.random(36)}>
                                    <h5 className="bold" key={Math.random(36)}> Company Name: </h5> <h4 className="name" key={Math.random(36)}>{data.name}</h4>
                                    <h5 className="bold" key={Math.random(36)}> Job Title: </h5> <h4 className="title" key={Math.random(36)}>{data.title} </h4>
                                    <h5 className="bold" key={Math.random(36)}> About Job: </h5> <h4 className="description" key={Math.random(36)}>{data.description} </h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Applied