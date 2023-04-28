import { useState } from "react";
import { Body, FavoriteMusic, ProfileHeader } from "../Components";
import { Layout } from "../Components/Layout";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";

export const Profile = () => {

  return (
    <Layout>
      <ProfileHeader />
      <div className="w-screen min-h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
        <Body />
        <FavoriteMusic />
      </div>
    </Layout>
  );
};
