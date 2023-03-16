import React, { useState } from "react";
import { Layout } from "../Components";
import { Login, Register } from "../Components/Pages/Home";

export const LandingPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const changeLogRegister = () => setIsRegistering(!isRegistering);
  return (
    <Layout>
      <div className="items-center bg-[url('./src/assets/images/LandBgImage.png')] bg-cover bg-left-bottom">
        {isRegistering ? (
          <div>
            <Register changeLogRegister={changeLogRegister} />
          </div>
        ) : (
          <div>
            <Login changeLogRegister={changeLogRegister} />
          </div>
        )}
      </div>
    </Layout>
  );
};
