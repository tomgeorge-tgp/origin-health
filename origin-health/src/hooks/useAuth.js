import { useContext } from "react";
import AuthContext, { AuthProvider } from "../context/AuthProvider";

const useAuth = () => {
    console.log("useContext", useContext(AuthContext));
    return useContext(AuthContext);
}

export default useAuth;