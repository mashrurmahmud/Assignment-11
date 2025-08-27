import axios from 'axios';
import React, { useState } from 'react';
import { data, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpComming_details = () => {
    const gettData = useLoaderData();
    const[deleteData, setDeleteData] = useState({})
    const{title, description,photoUrl, location, email,_id,time}
    = gettData;
     const navigate = useNavigate()

  const handleBack = () =>{

    navigate(`/upcomming/${email}`)
     
  }

  const handleDelete = (id) =>{
    axios.delete(`https://my-backend-server-seven.vercel.app/upComming_details/${id}`).then(data =>{
       console.log(data?.data);
       if(data?.data.acknowledged){
           Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });


  }
  navigate(`/upcomming/${email}`)
});         
                    


        
       











       };


    });
    //  navigate(`/upcomming/${email}`)


  }


    return (
        <div className='max-w-[1100px] mx-auto flex mt-5 '>
          
          <div className='w-[60%]'>
              <img src={photoUrl} className='w-[500px] h-[500px]  object-cover ' alt="" />
          </div>
          <div className='w-[50%] space-y-4 ' >
            <h1 className='bg-red-300 font-bold mozilla text-xl'>{title}</h1>
            <p className='font-bold'>{description}</p>
            <p className='mozilla'>Location:{location}</p>
            <div className='flex gap-3'>
                <button onClick={handleBack} className='btn bg-green-400 text-white'>Back</button>
                <button onClick={()=>handleDelete(_id)} className='btn bg-red-400 text-white'>Delete</button>
            </div>
            
          </div>
        </div>
    );
};

export default UpComming_details;