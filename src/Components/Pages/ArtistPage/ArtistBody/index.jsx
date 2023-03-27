import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getAlbums,
  getArtists,
  getPlaylists,
  getSongs,
} from "../../../../API/MusicApi/MusicApi";
import { List } from "../../../List";

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
    <div className="flex flex-col justify-center items-center gap-y-[4rem] pt-[4rem] pb-[4rem] w-full">
      <div className="w-full md:w-5/6">
        {songs ? (
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
        ) : (
          "error"
        )}
      </div>

      <div className="w-full md:w-5/6">
        {albums ? (
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
        ) : (
          "error"
        )}
      </div>
      <div className="w-full md:w-5/6">
        {artists ? (
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
        ) : isLoadingArtists ? (
          <List
            dataType="skeletonArtist"
            object={skeletonData}
            sectionTitle="Artists"
          />
        ) : (
          "error"
        )}
      </div>
      <div className="w-full md:w-5/6">
        {playlists ? (
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
        ) : (
          "error"
        )}
      </div>
    </div>
  );
};
