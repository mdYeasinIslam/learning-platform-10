import React, { useContext } from 'react';
import { AuthProvider } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    const location = useLocation()
    if (loading) {
        return <div className='text-4xl'>loading</div>
    }
    if (user && user.emailVerified == true) {
        return children
    }
    else {
        toast('Your email is not varified,Please varified your email')
        return <Navigate to='/logIn' state={{ from: location }} replace />
    }
};

export default PrivateRoute;