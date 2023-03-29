import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { isLogged } = useUser();

  return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
