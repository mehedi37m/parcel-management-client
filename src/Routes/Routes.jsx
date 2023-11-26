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
          path:'/addItem',
          element:<AddItems></AddItems>
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
          
        }
      ]
    }
  ]);

export default router;