import React, { useState } from "react";
import { Login, Register } from "../Components";

export const Home = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};
