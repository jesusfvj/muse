import React, { useState } from "react";
import { Layout } from "../Components";
import { Login, Register } from "../Components/Pages/Home";

export const LandingPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const changeLogRegister = () => setIsRegistering(!isRegistering);
  return (
    <div className="items-center h-screen bg-[url('./src/assets/images/LandBgImage.png')] bg-cover bg-left-bottom">
      {isRegistering ? (
        <Register changeLogRegister={changeLogRegister} />
      ) : (
        <Login changeLogRegister={changeLogRegister} />
      )}
    </div>
  );
};
