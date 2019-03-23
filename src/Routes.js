import React, { Component } from "react"
import { Route, BrowserRouter } from "react-router-dom"
import SignUp from './SignUp'
import SignIn from './SignIn'
import CompanyRoutes from './Components/Company/CompanyRoutes'
import StudentRoutes from './Components/Student/StudentRoutes'
import AdminRoutes from './Components/Admin/AdminRoutes'

class Routes extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <>
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/" component={SignUp} />
                        <Route path="/company" component={CompanyRoutes} />
                        <Route path="/student" component={StudentRoutes} />
                        <Route path="/admin" component={AdminRoutes} />
                    </>
                </BrowserRouter>
            </>
        )
    }
}

export default Routes