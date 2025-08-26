import axios from 'axios';
import React, { use } from 'react';
import { Mycontext } from './Layout/AuthProvider/AuthProvider';




const axiosInstance = axios.create({
    baseURL:'http://localhost:3000/'
})
const UseSecureAxios = () => {
    const {user} = use(Mycontext)

    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    return (
        <div>
            
        </div>
    );
};

export default UseSecureAxios;