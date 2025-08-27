import { createBrowserRouter } from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./Home/Home";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Login/Login";
import Register from "./register/Register";
import Errorelement from "./Errorelement";
import MyProfile from "../MyProfile";
import AddtreeEvent from "./AddtreeEvent/AddtreeEvent";
import PrivateRoute from "./PrivateRoute";
import UpComming_events from "./UpComming_events";
import UpComming_details from "./UpComming_details";
import ManageEvent from "./ManageEvent/ManageEvent";
import Databasebox from "./Databasebox";
import UpdateForm from "./UpdateForm";

import Explore from "./Explore";

import { Mycontext } from "./Layout/AuthProvider/AuthProvider";
import JoinEvent from "./JoinEvent";
import JoinDetails from "./JoinDetails";




export const router = createBrowserRouter([
 
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<Errorelement></Errorelement>,
    children:[{
        index:true,
        path:'/',
        element:
          <Home></Home>
      

    },
    {
      path:'/profile',
      element:<PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    },
    {
      path:'/join',
      element:<PrivateRoute>
        <JoinEvent></JoinEvent>
      </PrivateRoute>

    },
    {
      path:'/join/:id',
      element:<PrivateRoute>
        <JoinDetails></JoinDetails>
      </PrivateRoute>,
      loader:({params})=>fetch(`https://my-backend-server-seven.vercel.app/joinEvent2/${params.id}`)


    },
     {
      path:'/addtreeevent',
      element:
        <AddtreeEvent></AddtreeEvent>,
     
    },
    {
      path:'/upcomming/:email',
      element:<UpComming_events></UpComming_events>,
      // loader: ({params})=> fetch(`https://my-backend-server-seven.vercel.app/upComming/${params.email}`
       
      // )
    },
    {
      path:'/upComming_details/:id',
      
      element:<UpComming_details></UpComming_details>,
      loader:({params})=> fetch(`https://my-backend-server-seven.vercel.app/upComming_details/${params.id}`)
     
    
    },
    {
      path:'/manageEvents',
      element:<ManageEvent></ManageEvent>
       
      
       
     

    },
   
    {
      path:'/updateForm/:id',
      element:<UpdateForm></UpdateForm>,
      loader:({params})=> fetch(`https://my-backend-server-seven.vercel.app/manage/${params.id}`)
       
    


    },
    {
      path:'/explore',
      element:<Explore></Explore>,
      loader:()=>fetch('Forest.json')
    },
    

   
    
  
  ]
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    errorElement:<Errorelement></Errorelement>,
    children:[{
      index:true,
      path:'/auth/Login',
      element:<Login></Login>

    },
    {
      path:'/auth/Register',
      element:<Register></Register>
    },
  
   

  ]
  },
  
]);