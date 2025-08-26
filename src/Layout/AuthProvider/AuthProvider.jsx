import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase_auth_control';
import axios from 'axios';




export const Mycontext = createContext();

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [ user, setUser] = useState([]);
    const [error, setError] = useState('');
   

    const handleSignUP = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const handlSignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlepopup = () =>{
        return signInWithPopup(auth, provider);
    }

    const handleSignout = () =>{
        return signOut(auth)
    }



    
    
   


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(users)=>{
            setUser(users)
        
        })
        return()=>{
            unsubscribe()
        }

    },[])

    
    const userInfo = {
        handleSignUP,
        user,
        setUser,
        setError,
        error,
        handlSignIn,
        googlepopup,
        handleSignout,
       
    }


    return <Mycontext value={userInfo}>
        {children}

    </Mycontext>
};

export default AuthProvider;
