import { Navigate } from "react-router-dom";
import { useLoggedContext } from "../Provider/LoggedProvider";



const LoginGuard = ({ children }) => {

    const isLogged = useLoggedContext();

    if (!isLogged) {
        return null
        // <Navigate to={'/login'} replace />
    }

    return children;
}

export default LoginGuard;