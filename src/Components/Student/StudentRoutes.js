import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StudentInfo from './Info'
import Applied from './Applied'
import Available from './Available'

function StudentRoutes() {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/student" component={StudentInfo} />
                <Route exact path="/student/Available" component={Available} />
                <Route exact path="/student/Applied" component={Applied} />
            </BrowserRouter>
        </>
    )
}

export default StudentRoutes
