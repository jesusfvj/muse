import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useUser();

  if(user){
    if(user.role==="admin"){
      return children;
    } else {
      return <Navigate to="/main" />;
    }
  }
  return <Navigate to="/" />;
};

export default ProtectedAdminRoute;
