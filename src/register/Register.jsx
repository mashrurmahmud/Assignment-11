import React, { use } from 'react';
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { IoCameraSharp } from "react-icons/io5";
import { Mycontext } from '../Layout/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

import signup_security from '../../Sign up.json'
import Lottie from 'lottie-react';

const Register = () => {
    const{ setUser, handleSignUP, error, setError, googlepopup} = use(Mycontext)
      const hello = () =>{
            googlepopup().then(result =>{
                console.log(result)
                setUser(result);
            }).error(result =>{
                console.log(result)
            })

        }
    const handleSignUP2 = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        const password = form.password.value;

        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=(?:.*\d){2,}).+$/;

        if(!regex.test(password)){
            setError('Password is not acceptable');
            return;
        }
        else{
            setError('');
        }

        if(!email){
            setError('email must be required');
            return;
            
        }
        else{
            setError('')
        }
        handleSignUP(email, password).then(result =>{
            console.log('hello i am sign up');
            console.log(result);
            Swal.fire({
            title: "Successfully created!",
            icon: "success",
  
});

            setUser(result);

            
        }).catch(error =>{
            console.log(error);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
});
            // setError(error)
            console.log(error)

        })


      

          


    }
    return (
        <div className='relative max-w-[980px] bg-[#00000050] grid grid-cols-2 rounded-2xl items-center gap-2 p-5'>


            <Lottie animationData={signup_security} className='absolute top-0  w-[700px] h-[300px] ' loop={true}>

            </Lottie>
           

            <div>
                <img src="../../public/images.png" className='w-[300px] h-[300px] rounded-2xl' alt="" />
             
            </div>
            <div>
                <h1 className='text-2xl text-white font-bold my-1'>Sign up</h1>
                <form action="" className='space-y-5' onSubmit={handleSignUP2} >
                    <div className='relative'>
                        <div className='absolute top-3 left-1'>

                            <CgProfile />

                        </div>
                        <input type="text" className='w-80 bg-gray-500 focus:bg-gray-500 focus:outline-none text-white rounded-full px-8 py-2 ' placeholder='enter your first name' />

                    </div>
                    <div className='relative'>
                        <div className='absolute top-3 left-1'>
                               <CgProfile />

                        </div>
                        <input type="text" className='w-80 bg-gray-500 focus:bg-gray-500 focus:outline-none text-white rounded-full px-8 py-2' placeholder='enter your last name' />

                    </div>
                    <div className='relative'>
                        <div className='absolute top-3 left-1'>
                             <HiOutlineMailOpen />
                        </div>
                        <input type="email" name='email' className='w-80 bg-gray-500 focus:bg-gray-500 focus:outline-none text-white rounded-full px-8 py-2' placeholder='enter your email' />
                        {
                            error?<p className='text-red-500 uppercase font-bold'>Email must required</p>:''
                        }
                    </div>
                    <div className='relative'>
                        <div className='absolute top-3 left-1'>

                            <CiLock />

                        </div>
                        <input type="password"  name='password' className='w-80 bg-gray-500 focus:bg-gray-500 text-white  py-2 rounded-full focus:outline-none px-8' placeholder='enter your password' />
                        {
                            error?<p>{error}</p>:''
                        }
                    </div>
                    <div className='relative'>
                        <div className='absolute top-3 left-1'>
                            <IoCameraSharp />
                                  
                        </div>
                        <input type="text" className='w-80 bg-gray-500 text-white focus:bg-gray-500 px-8 py-2 rounded-full focus:outline-none' placeholder='photoURL' />
                    </div>

                    <button  className='bg-sky-400 rounded-full text-white font-bold px-3 py-2 cursor-pointer hover:bg-amber-500'>Sign up</button>
                    <button onClick={hello} className='bg-white flex gap-2 items-center px-3 py-2 rounded-full cursor-pointer text-black hover:bg-black hover:text-white'>Sign in with <FcGoogle /></button>

                    
                    
                </form>
              
            </div>
            
        </div>
    );
};

export default Register;