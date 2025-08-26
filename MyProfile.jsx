import React, { use, useState } from 'react';
import { Mycontext } from './src/Layout/AuthProvider/AuthProvider';
import './Myprofile.css'
import { FaRegEdit } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import { auth } from './src/firebase_auth_control';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyProfile = () => {
    const {user, setUser} = use(Mycontext);
    const navigate = useNavigate();

    


    const handleupdateProfile = (e) =>{
        e.preventDefault();
        const form = e.target;
        // const email = form.email.value;
        const name = form.name.value;
        
        const photoURL1 = form.photoUrl.value;

        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL1
        }).then(()=>{

            console.log(`you are updated ${setUser({...auth.currentUser})}`)
            
            setUser({...auth.currentUser});
            Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
            });
            navigate('/');
        }).catch(error =>{
            console.log(error);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
});
        })

        
        
    }

    


    

    return (
        <div className='main-container'>
            <div className='img-container'>

                <img src={user?.photoURL} className='w-[300px] h-[300px] rounded-full object-cover' alt="" />
                 
           



            </div>
             <div>
                <h1 className='text-xl text-blue-500 font-bold'>Update Profile</h1>

                <form action="" onSubmit={handleupdateProfile} className='space-y-6'>
                    <div>
                        <div>
                            <label htmlFor="">Name</label>

                        </div>
                         <input type="text" name='name' className='bg-black px-3 py-2 text-white mozilla w-80 rounded-2xl' defaultValue={user.displayName} placeholder='Enter your name' />
                         
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Email</label>

                        </div>
                        <input type="email" name='email' className='bg-black px-3 py-2 text-white mozilla w-80 rounded-2xl' defaultValue={user.email} placeholder='' />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Photo Url</label>

                        </div>
                        <input type="text" className='bg-black px-3 py-2 text-white mozilla w-80 rounded-2xl' name='photoUrl' defaultValue={user.photoURL} />

                    
                    </div>
                    <button type='submit' className='btn bg-black px-3 py-2 rounded-2xl text-white'>UPDATE</button>
                </form>
             </div>
        </div>
    );
};

export default MyProfile;