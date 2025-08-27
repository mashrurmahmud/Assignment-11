import axios from 'axios';
import React, {  createContext, useEffect, useState } from 'react';
import ManageEvent from './ManageEvent/ManageEvent';

export const dataContext = createContext();

const Databasebox = ({children}) => {

 
    
    const[database, setDatabase] = useState([]);



    useEffect(()=>{
        axios.get('https://my-backend-server-seven.vercel.app/manage').then(data => setDatabase(data?.data))

    },[])

     
    const magnet = database.map(dat => <ManageEvent dat={dat}></ManageEvent>)

     const userInfo = {
       magnet,
     }
          



    return <dataContext value={userInfo}>
        {children}
          
    </dataContext>
       
           
            
       
   
};

export default Databasebox;