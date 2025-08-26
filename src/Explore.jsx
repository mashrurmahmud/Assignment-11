import React from 'react';
import { useLoaderData } from 'react-router';
import Forestbanner from './Forestbanner';

const Explore = () => {
    const data = useLoaderData();
    const{title,description} = data
    console.log(data);
    return (
      <div className='mt-3'>
          <div className='flex justify-between items-center '>
           <div className='w-[60%] px-3'>
            <h1 className='text-2xl mozilla'>{title}</h1>
            <p className='mozilla text-sm'>Mention your friends, family and your siblings. Exploring the forest is the maintainence of the tree plantanation.thousend of dollers invested in this. Make sure you get proper guild</p>
            

           </div>
           <div className='w-[50%] flex justify-center'>
            <img src='../public/plant.jpg' alt="" className='w-[400px] h-[400px] object-cover' />

           </div>


           
            
        </div>
        <Forestbanner></Forestbanner>
      </div>
    );
};

export default Explore;