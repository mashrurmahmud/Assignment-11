import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
          <section className='max-w-[1400px]   mx-auto'>
            <Header></Header>
           
                

                <Outlet></Outlet>

            </section>
            
        </div>
    );
};

export default HomeLayout;