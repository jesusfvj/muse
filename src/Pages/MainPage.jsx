import { useQuery } from "@tanstack/react-query";
import { getSongs } from "../API/MusicApi/MusicApi";

import { Header, List, Layout } from "../Components";
import { arrayTodaysHits } from "../data/MainPage/MainPage";

export const MainPage = () => {
  const {
    data: songs,
    isLoading,
    error,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });

  return (
    <Layout>
      <div className="z-0 fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#02040C] to-[#0A4148]"></div>
      <div className="z-2 relative  min-h-screen">
        <div className="pt-[5rem] pl-[2rem] sm:pl-[4rem] md:pl-[6rem] lg:pl-[8rem]">
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[4rem] pt-[4rem] w-full">
          <div className="w-full md:w-5/6">
            {songs && (
              <List
                object={songs}
                sectionTitle="songs"
                dataType="song"
                itemsNumber={{
                  itemsSuperLarge: 8,
                  itemsDesktop: 5,
                  itemsTablet: 3,
                  itemsMobile: 2,
                }}
              />
            )}
          </div>
          <div className="w-3/4">
            <List
              object={arrayTodaysHits}
              sectionTitle="artists"
              dataType="artist"
            />
          </div>
          <div className="w-3/4">
            <List
              object={arrayTodaysHits}
              sectionTitle="playlists"
              dataType="playlist"
            />
          </div>
          <div className="w-3/4">
            <List
              object={arrayTodaysHits}
              sectionTitle="albums"
              dataType="album"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
