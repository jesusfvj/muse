import {
  Header,
  List,
  TrendingList,
} from "../Components/Pages/MainPage/index.js";
import { Layout } from "../Components/Layout/index.jsx";
import { arrayTodaysHits, arraySectionTitles } from "../data/MainPage/MainPage";

export const MainPage = () => {
  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="z-2 relative  min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[2rem] pt-[4rem]">
          <TrendingList />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[4rem] pt-[4rem]">
          <List object={arrayTodaysHits} sectionTitle="songs" dataType="song" />
          <List object={arrayTodaysHits} sectionTitle="artists" dataType="artist" />
          <List object={arrayTodaysHits} sectionTitle="playlists" dataType="playlist" />
          <List object={arrayTodaysHits} sectionTitle="albums" dataType="album" />
        </div>
      </div>
    </Layout>
  );
};
