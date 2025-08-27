import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateForm = () => {
    const[update, setUpdate] = useState(null);
    const navigate = useNavigate()

    const data = useLoaderData();
    console.log(data)
    const {_id, title, description, photoUrl} = data;
    console.log('man in the middle', _id);
    const handleEdit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const newForm = new FormData(form);
        const formobject = Object.fromEntries(newForm.entries());
        console.log(formobject);
        Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
             axios.put(`https://my-backend-server-seven.vercel.app/manage/${_id}`,formobject).then(data =>{
            console.log(data)
            setUpdate(data?.data);

        }) 
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }

        navigate(-1);
        
        });
       
       
        

    }
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form onSubmit={handleEdit} action="" className='max-w-[980px] p-5  bg-[#00000050] space-y-3'>
                <div>
                     <h1 className='text-white font-bold mozilla text-center'>Update Data</h1>
                    <div>
                        <label htmlFor="">Title</label>
                        
                    </div>
                    <input type="text" name='title' defaultValue={title} placeholder='update your title' className='w-80 px-3 py-2 rounded-full bg-white focus:bg-white focus:outline-none' />
                </div>
                <div>
                    <div>
                        <label htmlFor="">Description</label>
                    </div>
                    <textarea name="description" defaultValue={description} id="" className='resize-none h-[200px] w-full bg-white focus:outline-none focus:bg-white'>



                    </textarea>
                    <div>
                        <div>
                            <label htmlFor="">PhotoUrl</label>
                        </div>
                        <input type="text" name='photUrl' defaultValue={photoUrl} className='w-80 px-3 py-2 rounded-full bg-white focus:bg-white focus:outline-none'  />
                    </div>
                    <div>
                        <input type="submit" value='Submit' className='w-full px-3 py-2 bg-black text-white hover:bg-red-500' />
                    </div>
                </div>

            </form>
         
        </div>
    );
};

export default UpdateForm;
