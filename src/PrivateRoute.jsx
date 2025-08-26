import React, { use } from 'react';
import { Mycontext } from './Layout/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const{user} = use(Mycontext);
    const location = useLocation();
    console.log(location);


    if(user){
       return  children
    }


    return <Navigate to='/auth/Login'></Navigate>
};

export default PrivateRoute;