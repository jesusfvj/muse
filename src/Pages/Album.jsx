import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAlbumById, getSongs } from "../API/MusicApi/MusicApi";
import { AlbumHeader, AlbumTracks } from "../Components";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";
import { Layout } from "../Components/Layout";
import { SkeletonTracksGroup } from "../Components/Skeletons";
import { useParams } from "react-router-dom";
import { ProfileLoader } from "../Components/Pages/Profile/ProfileLoader";
import { ProfileNotFound } from "../Components/Pages/Profile/ProfileNotFound";
import { useTracks } from "../Context/TracksContext/TracksContext";

export const Album = () => {
  const { albumId = 1 } = useParams();

  const {
    data: album,
    isLoading,
    error,
  } = useQuery({ queryKey: ["songs"], queryFn: () => getAlbumById(albumId) });
  console.log(album);
  return (
    <>
      {isLoading ? (
        <ProfileLoader />
      ) : error ? (
        <ProfileNotFound />
      ) : (
        <>
          {album && (
            <>
              <AlbumHeader album={album} />
              <div className="flex items-start pt-[20vh] justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen min-h-screen">
                <AlbumTracks
                  songs={album?.songs}
                  artist={album?.artist?.fullName}
                  styles="w-4/5"
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
