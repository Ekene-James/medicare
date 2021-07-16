import React, { useContext } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import DoctorsRoutes from './DoctorsRoutes';
import PublicRoutes from './PublicRoutes';
import { AuthContext } from '../store/auth/AuthStore';
import PatientsRoutes from './PatientsRoutes';

function Routes() {
   
    const {state} = useContext(AuthContext);
    return (
       <Router>
           {state.authenticated ? ( state.role === 'doctor' ? <DoctorsRoutes/> : <PatientsRoutes/> )
           : <PublicRoutes/>
           }
       </Router>
    )
}

export default Routes
