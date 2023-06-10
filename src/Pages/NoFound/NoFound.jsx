import React from 'react';
import { Link, useLocation, useNavigate, useRouteError } from 'react-router-dom';

const NoFound = () => {
    const error = useRouteError()   
    return (
        <div className='grid grid-cols-2 relative top-[10rem]'>
            <h1 className='text-end relative right-10 pr-10 text-7xl border-r-4  border-red-400'>{error.status}</h1>
            
            <div className=''>
                <h3 className='text-3xl'>{error.statusText}</h3>
                <p>The page you are trying to reach does not exist, or has been moved.</p>
                <Link to="/home">Go back to previous  page</Link>
            </div>
        </div>
    );
};

export default NoFound;