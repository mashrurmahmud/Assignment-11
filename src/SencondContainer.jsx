import React from 'react';
import './SecondContainer.css'
import { IoIosArrowForward } from "react-icons/io";

const SencondContainer = () => {
    return (
        <div>
            <div className='container-section space-y-5 text-white text-center flex justify-center items-center '>
              <div className='max-w-[680px]   p-4 space-y-4 '>
                <h1 className='text-3xl font-bold  montserrat'>Welcome to the National <br />Forest</h1>

                <p className='mozilla'>We believe in a positive future where people, nature and the economy can grow together. With the help of our communities, partners, and passionate people like you, we are transforming 200 square miles of the Midlands as a model for more sustainable living.</p>

              <div className='parent'>
                  <button className='bg-amber-500 px-4 rounded-3xl py-3 text-white mozilla cursor-pointer hover:bg-red-400 '>Our Service </button>

                  <div className='child'>
                    <IoIosArrowForward size={33} />
                  </div>
                  
              </div>
                


              </div>
            </div>
            
        </div>
    );
};

export default SencondContainer;