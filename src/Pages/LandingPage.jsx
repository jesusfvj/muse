import { useState } from "react";
import { Typography } from "../Components";
import { Logo } from "../Components/Logo";
import { Login, Register } from "../Components/Pages/LandingPage";

export const LandingPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const changeLogRegister = () => setIsRegistering(!isRegistering);
  return (
    <div className="items-center h-screen bg-[url('./src/assets/images/LandBgImage.jpg')] bg-cover bg-left-bottom">
      <Logo extraClassesParent="absolute top-[8vh]" />

      {isRegistering ? (
        <Register changeLogRegister={changeLogRegister} />
      ) : (
        <Login changeLogRegister={changeLogRegister} />
      )}
    </div>
  );
};
