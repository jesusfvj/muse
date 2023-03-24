import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { isLogged } = useContext(UserContext);

  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
