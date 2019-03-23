import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Company from './Company'
import Students from './Students'
import Jobs from './Jobs'
import Applied from './Applied'

function CompanyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/admin" component={Company} />
                <Route exact path="/admin/Student" component={Students} />
                <Route exact path="/admin/Jobs" component={Jobs} />
                <Route exact path="/admin/Applied" component={Applied} />
            </BrowserRouter>
        </>
    )
}

export default CompanyRoutes
