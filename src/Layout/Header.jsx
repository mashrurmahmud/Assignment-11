import React, { use } from 'react';

import tree from '../assets/thetree.png'
import './Header.css'
import { Link } from 'react-router';
import { Mycontext } from './AuthProvider/AuthProvider';



const Header = () => {
    const{user, handleSignout} = use(Mycontext);
    const handlebuttonlogout = () =>{
        console.log("Are you okay");
        handleSignout().then(()=>{

        }).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='bg-[#fbf9f3]'>
            <nav className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-2'>
                    <img src={tree} alt=""  className='w-[50px] h-[50px]'/>
                    <h1 className='montserrat'>JAMAL KHAN TREE PLANT</h1>

                </div>
                <div className='space-y-5'>
                   <ul className='flex items-center'>
                  {
                    user?   <li className='mr-5'><button onClick={handlebuttonlogout}>Log out</button></li> : <li className='mr-5'><Link to='/auth/Login'>Log in</Link></li>
                  }

                   {
                     user? <li className='parentli'><img src={user?.photoURL} className='w-[50px] h-[50px] rounded-full' alt="" />
                     <ul className='child montserrat font-bold text-white'>
                        <li><Link to='/profile'>My Profile</Link></li>
                        <li><Link to='/addtreeevent'>Create Event</Link></li>
                        <li><Link to='/join'>Joined Event</Link></li>
                        <li><Link to={`/upcomming/${user.email}`}>UpComming Event</Link></li>
                        <li><Link to={`/manageEvents`}>Manage Events</Link></li>
                        
                     </ul>
                     </li>

                      : ''
                   }
                    <li className='mr-5'>Search</li>
                    <li className='mr-5'><button className='bg-green-600 btn rounded-2xl text-white'>Donate</button></li>
                  
                   </ul>
                   <div className='add-stick'>
                    <ul className='flex  '>
                        <li className='mr-5 mozilla'><Link to='/explore'>Explore the forest</Link></li>
                        <li className='mr-5 mozilla'>About</li>
                        <li className='mr-5 mozilla'>Ways to support</li>
                        <li className='mr-5 mozilla'>Grants and advice</li>
                    </ul>
                   </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;