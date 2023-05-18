import { Header } from "../Components";
import { ArtistBody } from "../Components/Pages/ArtistPage";
import logo from "../../public/logoWhite.png"

export const MainPage = () => {
  return (
    <>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
       <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
        <img src={logo} className="z-50 w-[70vw] mix-blend-overlay"/>
      </div>
      <div className="z-2 relative min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
          <Header />
        </div>
        <ArtistBody />
      </div>
    </>
  );
};
