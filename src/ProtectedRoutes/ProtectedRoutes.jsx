import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useUser();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
