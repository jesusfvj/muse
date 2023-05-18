import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext/UserContext';

function PublicRoute({ children }) {
    const {user} = useUser()
    const token = window.localStorage.getItem("token");

    if (user && token){
        return <Navigate to='/main' />
    }
        return children;
}

export default PublicRoute;

