import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useUser();

  if(user){
    if(user.role==="admin"){
      return <Navigate to="/admin" />;
    } else {
      return children;
    }
  }
  return <Navigate to="/" />
};

export default ProtectedRoutes;
