import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../Context/UserContext/UserContext';
import { LandingPage } from '../Pages/LandingPage';



export const ProtectedRoutes = ({children}) => {
    const {isLogged} = useContext(UserContext)
    if (!isLogged){
     return <Navigate to={<LandingPage/>} replace={true}/>
    }else {
       return children
    }
  
}
