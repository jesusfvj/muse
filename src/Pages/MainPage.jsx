import { useQuery } from "@tanstack/react-query";
import { getAlbums, getArtists, getPlaylists, getSongs } from "../API/MusicApi/MusicApi";

import { Header, List, Layout } from "../Components";
import { arrayTodaysHits } from "../data/MainPage/MainPage";

export const MainPage = () => {
  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });
  const {
    data: albums,
    isLoading: isLoadingAlbums,
    error: errorAlbums,
  } = useQuery({ queryKey: ["albums"], queryFn: getAlbums });
  const {
    data: artists,
    isLoading: isLoadingArtists,
    error: errorArtists,
  } = useQuery({ queryKey: ["artists"], queryFn: getArtists });
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });
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
          <div className="w-full md:w-5/6">
             {artists && (
            <List
                object={artists}
                sectionTitle="artists"
                dataType="artist"
                itemsNumber={{
                  itemsSuperLarge: 8,
                  itemsDesktop: 6,
                  itemsTablet: 3,
                  itemsMobile: 2,
                }}
              />
              )}
          </div>
          <div className="w-full md:w-5/6">
             {albums && (
            <List
                object={albums}
                sectionTitle="albums"
                dataType="album"
                itemsNumber={{
                  itemsSuperLarge: 8,
                  itemsDesktop: 6,
                  itemsTablet: 3,
                  itemsMobile: 2,
                }}
              />
              )}
          </div>
          <div className="w-full md:w-5/6">
             {playlists && (
           <List
                object={playlists}
                sectionTitle="playlists"
                dataType="playlist"
                itemsNumber={{
                  itemsSuperLarge: 8,
                  itemsDesktop: 6,
                  itemsTablet: 3,
                  itemsMobile: 2,
                }}
              />
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
