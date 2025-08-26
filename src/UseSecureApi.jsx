import React, { use } from 'react';
import UseSecureAxios from './UseSecureAxios';
import { Mycontext } from './Layout/AuthProvider/AuthProvider';

const UseSecureApi = () => {
    const axiosSecure = UseSecureAxios();
    const{user} = use(Mycontext);
    
    const MyapplicationPromise = email =>{
        // return axiosSecure.get(`upcomming/${user.email}`).then(res => res.data)
    }

    return (
        <div>
            
        </div>
    );
};

export default UseSecureApi;