import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Dashboard from '../components/layout/Dashboard'

import PatientsOverview from '../pages/Dashboard/PatientsOverview';

import Products from '../pages/products/Products';



function PatientsRoutes() {
    return (
      <Dashboard>
          <Switch>
            <Route path='/patient' component={PatientsOverview} />
            <Route path='/patient-chats' component={Products} />
            <Redirect to='/patient'/>

          </Switch>
       
      </Dashboard>
    )
}

export default PatientsRoutes
