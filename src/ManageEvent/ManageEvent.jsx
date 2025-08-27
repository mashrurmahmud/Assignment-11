import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import './ManageEvent.css'
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router';
import { Mycontext } from '../Layout/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ManageEvent = ({dat}) => {
    console.log(dat)
   
    const [manage, setManage] = useState([]);
    const {user} = use(Mycontext);
    console.log(user)

  

    const [form1, setForm] = useState(false);

    useEffect(()=>{
        axios.get('https://my-backend-server-seven.vercel.app/manage', {
            headers:{
                authorization:`Bearer ${user.accessToken}`

            }

        }).then(data => setManage(data?.data









        ))
    },[user])


    const handleEdit = ()=>{
        // e.preventDefault();
        // const form = e.target;
        // const newFormdata = new FormData(form);
        // const formObject = Object.fromEntries(newFormdata.entries());
        // console.log(formObject)
        setForm(!form1)
        


    }
    

    

    const handleDelete = (id) =>{
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
     console.log('Deleted okay');
        axios.delete(`https://my-backend-server-seven.vercel.app/upComming_details/${id}`).then(data => {
            if(data?.data.acknowledged){
                const deleteData = manage.filter(man => man._id !== id);
                setManage(deleteData)
            }

        })
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});
    }
    return (
       <div>
     
             <div>
            <div>
                { 
                    manage?.map(man => <div className='flex gap-2 p-2 mx-2 my-2 rounded-2xl parent4 border_size'>
                        <div className='px-2 py-2'>
                            <img src={man.photoUrl} className='w-[200px] h-[200px] object-cover' alt="" />

                        

                        </div>
                        <div>

                            <h1 className='text-3xl font-bold mozilla text-red-500'>{man.title}</h1>
                            <p>Event type:<span>{man.eventType}</span></p>
                            <p>Location: <span>{man.location}</span></p>
                            <p>email:<span>{man.email}</span></p>
                             <Link to={``} className='bg-green-500 text-white btn'>View</Link>
                    
                            <div className='child4'>
                                {
                                    user?.email == man.email ? <button onClick={()=> handleDelete(man._id)} className='btn bg-red-500 font-bold text-white'>Delete</button> : ''
                                }
                               
                            </div>
                            <div className='edit1'>
                                {
                                    user?.email == man.email ?<Link to={`/updateForm/${man._id}`} className='btn bg-black text-white'> <FaRegEdit  /></Link>:''
                                }

                            </div>
                          
                                                       


                        </div>
                    </div>
                    )
                }

            </div>
            
        </div>
           
        

       </div>

    );
};

export default ManageEvent;