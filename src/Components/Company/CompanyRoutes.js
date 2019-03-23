import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CompanyInfo from './Info'
import Create from './Create'
import Jobs from './Jobs'
import Applied from './Applied'

function CompanyRoutes() {
  return (
    <>
        <BrowserRouter>
            <Route exact path="/company" component = {CompanyInfo} />
            <Route exact path="/company/Create" component = {Create} />
            <Route exact path="/company/Jobs" component = {Jobs} />
            <Route exact path="/company/Applied" component = {Applied} />
        </BrowserRouter>
    </>
  )
}

export default CompanyRoutes
