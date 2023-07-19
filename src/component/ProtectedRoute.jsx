import React, from 'react'
import { Navigate } from 'react-router-dom';
import UseCustomsApi from '../UserContext/UseCustomsApi';

const ProtectedRoute = ({children}) => {

  const {user} =  UseCustomsApi()

    if(!user.email) {
        return <Navigate to={'/login'} />
    }
    return children;

}

export default ProtectedRoute