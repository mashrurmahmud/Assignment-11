
import { useLoaderData } from 'react-router';

const JoinDetails = () => {



   


   const data = useLoaderData();
   console.log(data)
   
   const{title,description,photoUrl} = data;

    
    return (
        <div className='px-8'>

           
                <img src={photoUrl} className='w-full h-[500px] object-cover ' alt="" />

            

            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            
        </div>
    );
};

export default JoinDetails;