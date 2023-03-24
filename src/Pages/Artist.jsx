import { Layout } from "../Components";
import { ArtistInfo, ArtistBody } from "../Components/Pages/ArtistPage";
import logo from "../assets/logo/logowhite.png";

export const Artist = () => {
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="absolute right-[-25vw] top-[-15vw] hidden md:block">
        <img src={logo} className="z-50 w-[70vw] mix-blend-overlay"/>
      </div>
      <div className="z-2 relative flex flex-col items-center  min-h-screen gap-8">
        <ArtistInfo />
        <ArtistBody />
      </div>
    </Layout>
  );
};
