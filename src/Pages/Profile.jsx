import { useState } from "react";
import { Body, FavoriteMusic, ProfileHeader } from "../Components";
import { Layout } from "../Components/Layout";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Layout>
      <ProfileHeader />
      <div className="w-screen min-h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
        <Body />
        <FavoriteMusic handleToggleModal={handleToggleModal} />
      </div>
      {isModalOpen && (
        <AddToPlaylistModal handleToggleModal={handleToggleModal} />
      )}
    </Layout>
  );
};
