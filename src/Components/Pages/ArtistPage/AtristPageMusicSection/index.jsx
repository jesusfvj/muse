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

export const ArtistPageMusicSection = ({ artist }) => {
  const {
    user: { _id },
  } = useUser();

  const { uploadedTracks, uploadedAlbums } = artist;
console.log(uploadedTracks)
  return (
    <div className="flex flex-col justify-center items-center gap-y-[4rem] pt-[4rem] pb-[4rem] w-full">
      <div className="w-full md:w-5/6">
        {uploadedTracks?.length ? (
          <List
            object={uploadedTracks}
            sectionTitle="Songs"
            dataType="song"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 5,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : (
          <EmptyDefault text="Songs" />
        )}
      </div>

      <div className="w-full md:w-5/6">
        {uploadedAlbums?.length ? (
          <List
            object={uploadedAlbums}
            sectionTitle="Albums"
            dataType="album"
            itemsNumber={{
              itemsSuperLarge: 7,
              itemsDesktop: 5,
              itemsTablet: 3,
              itemsMobile: 2,
            }}
          />
        ) : (
          <EmptyDefault text="Albums" />
        )}
      </div>

      {/* <div className="w-full md:w-5/6">
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
      </div> */}
    </div>
  );
};
