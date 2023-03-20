import { useState } from "react";
import { Login, Register } from "../Components/Pages/LandingPage";

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
