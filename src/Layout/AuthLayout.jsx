import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Header></Header>
           
                <section className='bg-amber-500 h-screen flex justify-center items-center'>
                    <Outlet></Outlet>
                </section>
           
            
        </div>
    );
};

export default AuthLayout;