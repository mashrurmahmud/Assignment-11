import React, { use, useState } from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { Mycontext } from '../Layout/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { FaLockOpen } from "react-icons/fa";
import Lottie from 'lottie-react';
import Animation from '../../developer skills.json'
import security from '../../Data Security character animation.json'

const Login = () => {

    const {setUser, error, setError, handlSignIn, googlepopup} = use(Mycontext);

    const navigate = useNavigate();

    const[unlock, setUnlock] = useState(false);


    const handleUnlock = () =>{

        setUnlock(!unlock)

        

    }



     const hello = () =>{
            googlepopup().then(result =>{
                console.log(result)

                setUser(result);
                navigate('/')
            }).error(result =>{
                console.log(result)
            })

        }

        const handleChange =(e)=>{
            e.preventDefault();
            setError('')

        }

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handlSignIn(email, password).then(result =>{
            console.log(result);

            Swal.fire({
            title: "Successfully logged in",
            icon: "success",
            draggable: true
});
            setUser(result);
            navigate('/');
        }).catch(error =>{
            console.log(error);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
            setError('Invalid Username & password');
            // console.log(error)
            
        })
        

    }
    return (
       <>
     <div className='relative '>
          <Lottie className='w-[300px] absolute -top-34 -left-75'   animationData={security}  loop={true}></Lottie>
     </div>
       <div className='max-w-[960px] bg-[#00000050] grid grid-cols-2 gap-2 items-center rounded-2xl'>
        <div className=' p-5 '>
           
            
            <img src="../../public/signIn.jpg" alt="" className='w-[300px] h-[300px] rounded-2xl  object-cover' />

        </div>
        <div className='grid gap-2'>
            <h1 className='text-3xl font-bold text-white'>Log In</h1>
            <form action="" onSubmit={handleLogin} className='space-y-5'>
                <div className='relative'>
                    <div className='absolute top-3 left-1'>            
                                                          
                        <HiOutlineMailOpen size={20} />
                       
                    </div>
                    <input onChange={handleChange} type="email" name='email' placeholder='Email Address' className='w-80 bg-gray-400 text-white px-8 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-bg-sky-300 ' />

                </div>
                
                <div className='relative'>
                    <div className='absolute top-3 left-1'>

                       {
                        unlock?  <FaLockOpen onClick={handleUnlock} size={20} />: <FaLock onClick={handleUnlock} size={20}/>
                       }
                        

                    </div>
                    <input type={unlock?'text':'password'} name='password' className='w-80 bg-gray-400 px-8 py-3  text-white focus:outline-none rounded-full focus:ring focus:ring-bg-blue-300' placeholder='password' />
                    <p>{error}</p>

                   

                </div>
                <button className='bg-blue-400 text-white px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-amber-500'>Sign in</button>
            </form>
            <div>
                <p>Don't have an account?  <Link to='/auth/Register'> <span className=' text-blue-500'>Sign up</span> </Link></p>
                <p>Forget Password <span className='text-blue-500'>Reset Password</span></p>
                <p>Don't have an password yet? <span className=' text-blue-500'>Set password</span></p>
                <button onClick={hello} className='flex bg-black btn text-white'>Sign in with <FcGoogle /></button>
            </div>

        </div>

       </div>
       </>
    );
};

export default Login;