import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Menu from "../Pages/Menu/Menu";
import CardDetails from "../Pages/Menu/CardDetails";
import AddItems from "../Components/AddItems/AddItems";
import UpdateItems from "../Components/UpdateItems/UpdateItems";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/Admin/AllUser/AllUsers";
import AllDeliveryMan from "../Pages/Dashboard/Admin/AllDeliveryMan/AllDeliveryMan";
import Profile from "../Pages/Dashboard/Users/MyProfile/Profile";
import MyBooking from "../Pages/Dashboard/Users/MyBooking/MyBooking";
import AllParcel from "../Pages/Dashboard/Admin/AllParcel/AllParcel";
import DeliveryList from "../Pages/Dashboard/DelivaryMan/MyDeliveryList/DeliveryList";
import Statistics from "../Pages/Dashboard/Admin/Statistics/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/details/:id",
          element:<CardDetails></CardDetails>,
          loader:() => fetch('http://localhost:5000/items')
        },
        
        {
          path:"/updateItems/:id",
          element:<UpdateItems></UpdateItems>,
          loader:({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'addItems',
          element:<AddItems></AddItems>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        },
        {
          path:'allDeliveryMan',
          element:<AllDeliveryMan></AllDeliveryMan>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        },
        {
          path:'bookings',
          element:<MyBooking></MyBooking>
        },
        {
          path:'allParcel',
          element:<AllParcel></AllParcel>
        },
        {
          path:'deliveryList',
          element:<DeliveryList></DeliveryList>
        },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        }

      ]
    }
  ]);

export default router;