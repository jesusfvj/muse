import { Layout } from "../Components";
import { ArtistInfo } from "../Components/Pages/ArtistPage";
import { ArtistBody } from "../Components/Pages/ArtistPage/ArtitstBody";

export const Artist = () => {
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="z-2 relative flex flex-col items-center  min-h-screen">
        <ArtistInfo />
        <ArtistBody />
      </div>
    </Layout>
  );
};
