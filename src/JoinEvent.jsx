import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Mycontext } from './Layout/AuthProvider/AuthProvider';
import { Link } from 'react-router';
import './JoinEvent.css'

const JoinEvent = () => {

    const [join, setJoin] = useState([]);
    const {user} = use(Mycontext);


    useEffect(()=>{
        axios.get(`https://my-backend-server-seven.vercel.app/joinEvent/${user?.email}`, {
            headers:{
                authorization:`Bearer ${user.accessToken}`
            }
        }).then(data => {
            // console.log(data);
            setJoin(data?.data);
        });

    },[user])



    


    


    return (
        <div className=''>
            <div className=''>
                {
                    join.map(jo => <div className='flex gap-2 px-3 py-2 rounded-2xl border_size parent_small'>
                        <div className=''>

                            <img src={jo.photoUrl} className='w-[300px] h-[300px] rounded-2xl object-cover ' alt="" />

                        </div>
                        <div>
                            <h1 className='text-2xl text-red-500 font-bold  '>{jo.title}</h1>
                            <p className='mozilla'>{jo.location}</p>
                            <div className='my-3'>
                                <span className='bg-green-400 text-white px-2 py-2 rounded-full'>{jo.time}</span>
                            </div>

                            <Link to={`/join/${jo._id}`} className='btn bg-black text-white'>Details</Link>

                           <div className='child_small'>
                             <button className='bg-green-500 small_button'>Joined</button>
                           </div>
                           




                        </div>

                    </div> )
                    
                }


            </div>
           

            
        </div>
    );
};

export default JoinEvent;