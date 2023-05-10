import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getAlbums,
  getPlaylists,
  getSongs,
} from "../../../../API/MusicApi/MusicApi";
import { EmptyDefault, List } from "../../../index";
import { getArtists } from "../../../../API/UserApi/UserApi";
import { useUser } from "../../../../Context/UserContext/UserContext";

const skeletonData = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export const ArtistBody = () => {
  const {
    user: { _id },
  } = useUser();

  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
    refetchInterval: 5000,
  });
  const {
    data: albums,
    isLoading: isLoadingAlbums,
    error: errorAlbums,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
    refetchInterval: 5000,
  });
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylists,
    refetchInterval: 5000,
  });
  const {
    data: artists,
    isLoading: isLoadingArtists,
    error: errorArtists,
  } = useQuery({
    queryKey: ["artists"._id],
    queryFn: () => getArtists(_id),
    refetchInterval: 5000,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-y-[4rem] pt-[4rem] pb-[4rem] w-full">
      <div className="w-full md:w-5/6">
        {songs?.length ? (
          <List
            object={songs}
            sectionTitle="Songs"
            dataType="song"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 5,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : isLoadingSongs ? (
          <List
            dataType="skeletonSong"
            object={skeletonData}
            sectionTitle="Songs"
          />
        ) : errorSongs ? (
          <EmptyDefault error text="Songs" />
        ) : (
          <EmptyDefault text="Songs" />
        )}
      </div>

      <div className="w-full md:w-5/6">
        {albums?.length ? (
          <List
            object={albums}
            sectionTitle="Albums"
            dataType="album"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 5,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : isLoadingAlbums ? (
          <List
            dataType="skeletonAlbum"
            object={skeletonData}
            sectionTitle="Albums"
          />
        ) : errorAlbums ? (
          <EmptyDefault error text="Albums" />
        ) : (
          <EmptyDefault text="Albums" />
        )}
      </div>
     
      <div className="w-full md:w-5/6">
        {artists?.length ? (
          <List
            object={artists}
            sectionTitle="Artists"
            dataType="artist"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 5,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : isLoadingAlbums ? (
          <List
            dataType="skeletonAlbum"
            object={skeletonData}
            sectionTitle="Artists"
          />
        ) : errorAlbums ? (
          <EmptyDefault error text="Artists" />
        ) : (
          <EmptyDefault text="Artists" />
        )}
      </div>

      <div className="w-full md:w-5/6">
        {playlists?.length ? (
          <List
            object={playlists}
            sectionTitle="Playlists"
            dataType="playlist"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 4,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : isLoadingPlaylists ? (
          <List
            dataType="skeletonPlaylist"
            object={skeletonData}
            sectionTitle="Playlists"
          />
        ) : errorPlaylists ? (
          <EmptyDefault error text="Playlists" />
        ) : (
          <EmptyDefault text="Playlists" />
        )}
      </div>
    </div>
  );
};
