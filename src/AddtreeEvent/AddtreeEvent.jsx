import React, { use, useState } from 'react';
import { Mycontext } from '../Layout/AuthProvider/AuthProvider';
import './AddtreeEvent.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';



const AddtreeEvent = () => {

    const {user} = use(Mycontext);

    const [selectedDates, setSelecteddates] = useState(null);
    const [treeplant, setTreeplant] = useState([]);

    
    

    const isPastNumber=(date)=>{
        const[month, day, year] = date.split('/').map(Number);
        const eventDate = new Date(month-1, day, year);
        const currentDate = new Date(eventDate.getMonth(), eventDate.getDate(), eventDate.getFullYear());
        return currentDate > eventDate;

       
        
    }




    




    


    const handleSelect = (e,date)=>{

        e.preventDefault();
        const form = e.target;
        const times = form.time.value;
    

        if(isPastNumber(times)){

            console.log('ok');
            
            
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can't select the past date!",
                footer: '<a href="#">Why do I have this issue?</a>'
                });
            return;
        }
        console.log(isPastNumber(times))
        
        console.log(times)
        setSelecteddates(date)
        const formdata = new FormData(form);
        const formObject = Object.fromEntries(formdata.entries());
        console.log(formObject)
        axios.post('https://my-backend-server-seven.vercel.app/addetreeevent', formObject).then(data =>{
            if(data?.data.acknowledged){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500


  

}
  
);
setTreeplant(data?.data);
            }else{
                


                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `<a href="#">you can't select the past date</a>`
                });

            }
        });
        e.target.reset();

        


    }
    return (
        <div className='banner1 h-[100vh] mx-auto '>

            <h1 className='uppercase text-3xl font-bold text-white text-center '> Create tree plant event </h1>

            <form action="" className='p-5 space-y-7 max-w-[980px] mx-auto text-red-500 mozilla' onSubmit={handleSelect}>
               
                <div>
                    <div>

                        <label htmlFor="">Title</label>


                    </div>
                    <input type="text" name='title' className='w-full bg-white rounded-full px-3 py-2' required placeholder='title Name' />

                </div>
                <div>
                    <div>
                        <label htmlFor="">Description</label>


                    </div>
                    <textarea name="description" id="" required className='resize-none focus:outline-none focus:bg-white w-full bg-white  h-[200px] px-3 py-2'>

                    </textarea>
               
                </div>
                <div>
                    <div>
                        <label htmlFor="">Email</label>
                       
                    </div>
                <input type="email" required name='email' value={user?.email} className='w-full focus:outline-none px-3 py-2 focus:bg-white rounded-full text-red-400 bg-white ' />
                
                </div>
                <div>
                    <label htmlFor="">Image url</label>
                </div>
                <input type="text" required name='photoUrl' placeholder='paste your image url' className='focus:outline-none focus:bg-white w-full rounded-full bg-white px-3 py-2'/>
                <div>
                    <div>
                        <label htmlFor="">Event type:</label>
                    </div>
                    
                    <select name="eventtype" id="" className='w-60 bg-amber-400'>
                        <option value="" disabled>Select type:</option>
                        <option value="Clean Up">Clean up</option>
                        <option value="PlantaNation">Plantanation</option>
                        <option value="Donation">Donation</option>
                        
                    </select>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Location</label>
                    </div>
                    <div>
                        <input type="text" name='location' placeholder='Your location' className='focus:outline-none focus:bg-white w-full rounded-full bg-white px-3 py-2'  />
                    </div>
                </div>
                <div>
                       <DatePicker name='time' className='text-white bg-yellow-500' selected={selectedDates} 
                     onChange={date => setSelecteddates(date)} dateFormat="dd/MM/yyyy" placeholderText='Select date & time' >
                
                        

                    </DatePicker>

                  
                </div>
                <input type="submit" value='Submit' className=' px-3 py-2 w-full bg-red-500 text-white rounded-2xl cursor-pointer' />


            </form>
           
            
        </div>
    );
};

export default AddtreeEvent;