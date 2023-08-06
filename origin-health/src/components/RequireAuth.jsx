import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
  console.log("auth",auth.roles)
  //console.log("allowed",allowedRoles)
    return (
        // auth.roles.find(role => allowedRoles?.includes(role))
        allowedRoles.includes(auth.roles) 
        ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;