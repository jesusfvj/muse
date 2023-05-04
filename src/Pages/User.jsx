import { useState } from "react";
import { Body, FavoriteMusic, ProfileHeader } from "../Components";
import { Layout } from "../Components/Layout";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";
import { useParams } from "react-router-dom";
import { useUser } from "../Context/UserContext/UserContext";

export const User = () => {
  const { userId } = useParams();
  const { user } = useUser();

  const isLoggedUserProfile = userId === user._id;

  return (
    <Layout>
      <ProfileHeader />
      <div className="w-screen min-h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]">
        <Body />
        <FavoriteMusic isLoggedUserProfile={isLoggedUserProfile}/>
      </div>
    </Layout>
  );
};
