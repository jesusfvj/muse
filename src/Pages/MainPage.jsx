import { useQuery } from "@tanstack/react-query";
import {
  getAlbums,
  getArtists,
  getPlaylists,
  getSongs,
} from "../API/MusicApi/MusicApi";

import { Header, List, Layout } from "../Components";
import { ArtistBody } from "../Components/Pages/ArtistPage/ArtitstBody";
import { arrayTodaysHits } from "../data/MainPage/MainPage";

export const MainPage = () => {
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="z-2 relative  min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
          <Header />
        </div>
        <ArtistBody />
      </div>
    </Layout>
  );
};
