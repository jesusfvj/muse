import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getSongs } from "../API/MusicApi/MusicApi";
import { AlbumHeader, AlbumTracks } from "../Components";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";
import { Layout } from "../Components/Layout";
import { SkeletonAlbumTracks } from "../Components/Skeletons";

export const Album = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: songs,
    isLoading: isLoadingSongs,
    error: errorSongs,
  } = useQuery({ queryKey: ["songs"], queryFn: getSongs });

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout>
      <AlbumHeader />
      <div className="flex items-start pt-[10vh] justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen min-h-screen">
        {songs?.length ? (
          <AlbumTracks
            songs={songs}
            styles="w-4/5"
            handleToggleModal={handleToggleModal}
          />
        ) : isLoadingSongs ? (
          <SkeletonAlbumTracks />
        ) : errorSongs ? (
          "error"
        ) : (
          "No tracks"
        )}
      </div>
      {isModalOpen && (
        <AddToPlaylistModal handleToggleModal={handleToggleModal} />
      )}
    </Layout>
  );
};
