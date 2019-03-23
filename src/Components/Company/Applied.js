import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar';

class Applied extends Component {
    constructor() {
        super()
        this.state = {
            companyName: '',
            filteredArr: [],
        }
    }

    componentDidMount() {
        var uid = localStorage.getItem("userId")
        firebase.database().ref("users/" + uid).on("value", (data) => {
            this.setState({
                companyName: data.val().name
            })
            firebase.database().ref("appliedStudents").on("value", (data) => {
                let userData = []
                for (let key in data.val()) {
                    userData.push(data.val()[key])
                }
                for (let i = 0; i < userData.length; i++) {
                    let jobId = userData[i].jobId
                    let studentId = userData[i].uid
                    firebase.database().ref("jobsPosted/" + jobId).on("value", (data) => {
                        let userData = []
                        for (let key in data.val()) {
                            userData.push(data.val()[key])
                        }
                        let name = userData[1]
                        let description = userData[3]
                        let title = userData[0]
                        firebase.database().ref("users/" + studentId).on("value", data => {
                            let userData = []
                            for (let key in data.val()) {
                                userData.push(data.val()[key])
                            }
                            let nameStudent = userData[3]
                            let email = userData[2]
                            let number = userData[4]
                            if (name === this.state.companyName) {

                                var arr = this.state.filteredArr
                                arr.push([name, description, title, nameStudent, email, number])
                                this.setState({
                                    filteredArr: arr
                                })
                            }
                        })
                    })
                }
            })
        })
    }
    render() {
        return (
            <div className="main" >
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Applied Students
                    </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.filteredArr.map((data) => {
                            return (
                                <div className='well' key={Math.random(36)}>
                                    <h5 className="bold"> Job Title: </h5> <h4 className="title">{data[1]} </h4>
                                    <h5 className="bold"> About Job: </h5> <h4 className="description">{data[2]} </h4>
                                    <div className="well">
                                        <h3>Applied Students</h3>
                                        <h5 className="bold"> Name: </h5> <h4 className="title">{data[3]} </h4>
                                        <h5 className="bold"> Email: </h5> <h4 className="title">{data[4]} </h4>
                                        <h5 className="bold"> Number: </h5> <h4 className="description">{data[5]} </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
            </div >
        )
    }
}

export default Applied