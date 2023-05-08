import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getSongs } from "../API/MusicApi/MusicApi";
import { AlbumHeader, AlbumTracks } from "../Components";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";
import { Layout } from "../Components/Layout";
import { SkeletonTracksGroup } from "../Components/Skeletons";
import { useParams } from "react-router-dom";

export const Album = () => {
  const { albumId = 1 } = useParams();
  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });

  return (
    <>
      <AlbumHeader />
      <div className="flex items-start pt-[15vh] justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen min-h-screen">
        {songs?.length ? (
          <AlbumTracks
            songs={songs}
            styles="w-4/5"
          />
        ) : isLoadingSongs ? (
          <SkeletonTracksGroup />
        ) : errorSongs ? (
          "error"
        ) : (
          "No tracks"
        )}
      </div>
    </>
  );
};
