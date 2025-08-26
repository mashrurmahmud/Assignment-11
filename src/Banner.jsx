import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner '>

        <div className='flex justify-center items-center child mozilla font-normal '>
            <div className='text-4xl space-y-6 font-bold text-white text-center'>
            <h1>Help us grow a greener,</h1>
            <h1>healthier and more</h1>
            <h1>sustainable future.</h1>

            <div>
                <button className='btn bg-green-900 text-white'>Donate Now</button>
                
            </div>
         </div>
        </div>
            
        </div>
    );
};

export default Banner;