import { use, useEffect, useState } from "react";
import {  Link, useLoaderData } from "react-router";
import './UpComing_events.css';
import axios from "axios";
import { Mycontext } from "./Layout/AuthProvider/AuthProvider";



const UpComming_events = () => {


    const {user} = use(Mycontext);

    const [upComming, setUpComming] = useState([]);

    // console.log(user)


  


    // useEffect(()=>{
    //     // axios.get(`http://localhost:3000/upcomming/${user.email}}`).then(data =>{
    //     //     console.log(data);
    //     //     setUpComming(data?.data)
    //     // } )

    //     fetch(`http://localhost:3000/upcomming/${user.email}}`).then(data => {
    //         setUpComming(data)
        
    // },[user.email]))

+  useEffect(()=>{
    axios.get(`http://localhost:3000/upcomming/${user?.email}`,{
        headers:{
            Authorization:`Bearer ${user?.accessToken
}`
        }
    }).then(data => setUpComming(data?.data))
},[user])


    const today = new Date();
    console.log(today)

    
    // console.log(today)


    // const breakArry = upComming.filter(up => {
    //     const eventDate = new Date(up.time.split('/').reverse().join('-') );
    //     return today >= eventDate;
    // } )

    
            // const data = useLoaderData();

            // const mashrur = '15/07/2022'.split('/');
            // console.log(mashrur)
            

            

            // const [upevent, setEvent] = useState(data);
            // const today = new Date(); 

            const breakArry = upComming.filter(up =>{
                const eventdate = new Date(up.time.split('/').reverse().join('-'));
                
                return eventdate >= today /* if eventdate bigger than today,it will be true neither
                it will be false */
                
            })


  





   const handleData = (id)=>{
   

    axios.delete(`http://localhost:3000/upComming_details/${id}`).then(data => {
        if(data?.data.acknowledged){
            const deletedata = upComming.filter(del => del._id !== id);
            // console.log('not deleted')
            setUpComming(deletedata);
        }

    });


     
        
   }


 

 

     



    

     
    
     



  



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-[980px] mx-auto">
            
            {/* {
                breakArry.map(br => <div className="px-2 py-2 banner-design-kora ">
                    <img src={br.photoUrl} className="w-[300px] h-[300px] rounded-2xl object-cover" alt="" />
                    <h1>{br.title}</h1>
                    <p>Date:{br.time}</p>
                    <p className="text-black">type:<span className="text-red-500 font-bold">{br.eventtype}</span></p>
                    <p>Location: <span>{br.location}</span></p>
                    
                   <div className="flex justify-between">
                      <Link to={`/upComming_details/${br._id}`}  className="bg-black btn text-white">View</Link>
                      <button onClick={()=>handleData(br._id)} className="btn text-white bg-red-500">Delete</button>
                   </div>
                    

                </div>) */}

               {
               breakArry.map(br => <div key={br._id}>
                    <img src={br.photoUrl} className="w-[300px] h-[300px] rounded-2xl object-cover" alt="" />
                    <h1>{br.title}</h1>
                    <h1>Date:{br.time}</h1>
                    <p className="text-black">type:<span>{br.eventtype}</span></p>
                    <p>Location: <span>{br.location}</span></p>

                    <div className="flex justify-between">
                        <Link to={`/upComming_details/${br._id}`} className='bg-black btn text-white'>View</Link>
                        <button className="btn text-white bg-red-500" onClick={()=> handleData(br._id)}>Delete</button>

                    </div>

                </div>)
               } 
            
           
            
         


        </div>
    );
};


export default UpComming_events;