import React, { Component } from "react"
import firebase from "../../Config/Fire"
import Navbar from './Navbar'

class Jobs extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            userObj: []
        }
    }

    componentDidMount() {
        firebase.database().ref("jobsPosted").on('value', (data) => {
            this.setState({
                userObj: Object.entries(data.val())
            })
            for (let i = 0; i < this.state.userObj.length; i++) {
                let arr = this.state.arr
                arr.push(this.state.userObj[i][1])
                this.setState({
                    arr
                })
            }
        })
    }

    render() {
        return (
            <div className="main" >
                <Navbar />
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1" style={{marginBottom: "30px"}}>
                    <h1>
                        All Jobs
                </h1>
                </div>
                <div className="col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-3 col-sm-10 col-sm-offset-1">
                    {
                        this.state.arr.map((data) => {
                            return (
                                <div className='well' key={Math.random(36)}>
                                    <h5 className="bold"> Company Name: </h5> <h4 className="name">{data.name}</h4>
                                    <h5 className="bold"> Job Title: </h5> <h4 className="title">{data.title} </h4>
                                    <h5 className="bold"> About Job: </h5> <h4 className="description">{data.description} </h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Jobs