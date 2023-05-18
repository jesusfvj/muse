import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useUser();
  const token = window.localStorage.getItem("token");

  if(user && token){
    if(user.role==="admin"){
      return children;
    } else {
      return <Navigate to="/main" />;
    }
  }
  return <Navigate to="/" />;
};

export default ProtectedAdminRoute;
