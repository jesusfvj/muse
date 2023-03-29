import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext/UserContext';



function PublicRoute({ children }) {
    const {isLogged} = useUser()
    if (isLogged){
     return <Navigate to='/main' /> 
    }
     return children;   
}


export default PublicRoute;

