import { useState } from "react";
import { Logo } from "../Components/Logo";
import { Login, Register } from "../Components/Pages/LandingPage";

export const LandingPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const changeLogRegister = () => setIsRegistering(!isRegistering);

  return (
    <div className="items-center h-screen sm:bg-[url('https://res.cloudinary.com/dmufnezzd/image/upload/v1684396023/muze-image_file-folder/LandBgImage_cdxwqx_1_psx46y.jpg')] bg-[url('https://res.cloudinary.com/dmufnezzd/image/upload/v1684424280/muze-image_file-folder/LandBgImageCut_afqads.png')] bg-cover bg-left-bottom">
      <Logo extraClassesParent="absolute top-[8vh]" />

      {isRegistering ? (
        <Register changeLogRegister={changeLogRegister} />
      ) : (
        <Login changeLogRegister={changeLogRegister}/>
      )}
    </div>
  );
};

