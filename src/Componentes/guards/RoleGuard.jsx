import jwtDecode from 'jwt-decode';
import { useLocalStorage } from '../../Hooks';


const RoleGuard = ({ children, roles }) => {

    const [token] = useLocalStorage('token');
    const { user_role } = jwtDecode(token);

    if (!roles.includes(user_role)) {
        console.log(user_role)
        return <h1>No puedes acceder</h1>;
    }

    return children;

}

export default RoleGuard;