import React from 'react';
import './ThirdContainer.css'
import { PiTreeDuotone } from "react-icons/pi";

const ThirdContainer = () => {
    return (
        <div className='plant flex items-center'>
            <div className='description space-y-5 ml-3 rounded-2xl'>
                <h1 className='montserrat '>Life is better with trees</h1>
                <p className='mozilla'>Trees are transformational. We're creating a Forest where people live and work, so that everyone can enjoy the benefits of trees.</p>
                <button className='btn bg-sky-500 rounded-xl'>Plant tres</button>

            </div>
            <div className='zero '>
                <div className='flex justify-center'>
                    <PiTreeDuotone size={40} />
                </div>

                <h1 className='text-2xl text-white font-bold'>9.5 million
                                </h1>

                <p>trees planted so far</p>                

            </div>
            
        </div>
    );
};

export default ThirdContainer;