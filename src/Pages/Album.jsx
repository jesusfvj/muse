import { useState } from "react";
import { AlbumHeader, AlbumTracks } from "../Components";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";
import { Layout } from "../Components/Layout";
import { songs2 } from "../data/data.js";

export const Album = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout>
      <AlbumHeader />
      <div className="flex items-start pt-[10vh] justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
        <AlbumTracks
          songs={songs2}
          styles="w-4/5"
          handleToggleModal={handleToggleModal}
        />
      </div>
      {isModalOpen && (
        <AddToPlaylistModal handleToggleModal={handleToggleModal} />
      )}
    </Layout>
  );
};
