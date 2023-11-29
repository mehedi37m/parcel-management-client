import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";



const AdminRoute = ({children}) => {
    const [isAdmin , isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();
    if(isAdminLoading || loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;