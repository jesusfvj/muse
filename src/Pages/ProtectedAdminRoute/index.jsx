/* import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedAdminRoute;
 */