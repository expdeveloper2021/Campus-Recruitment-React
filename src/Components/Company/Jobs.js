import React, { Component } from 'react'
import firebase from '../../Config/Fire'
import Navbar from './Navbar'

class Jobs extends Component {
    constructor() {
        super()
        this.state = {
            companyName: '',
            userData: []
        }
    }

    componentDidMount() {
        let uid = localStorage.getItem("userId")
        firebase.database().ref("users/" + uid).on("value", (data) => {
            let nameCompany = data.val().name
            this.setState({
                companyName: nameCompany,
            })
            firebase.database().ref("jobsPosted").on("value", (data) => {
                let userData = []
                for (let key in data.val()) {
                    userData.push(data.val()[key])
                }
                this.setState({
                    userData: userData
                })
            })
        })
    }

    render() {
        return (
            <div className="main">
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{ marginBottom: "30px" }}>
                    <h1>
                        Your Jobs
            </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.userData.map((data) => {
                            if (data.name === this.state.companyName) {
                                return (
                                    <div className='well' key={Math.random(36)}>
                                        <h5 className="bold"> Job Title: </h5> <h4 className="title">{data.title} </h4>
                                        <h5 className="bold"> About Job: </h5> <h4 className="description">{data.description} </h4>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Jobs