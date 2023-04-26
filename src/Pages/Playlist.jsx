import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlaylists } from "../API/MusicApi/MusicApi";
import { Layout } from "../Components/Layout";
import { useEffect, useState } from "react";
import { PlaylistsHeader } from "../Components/PlaylistsHeader";
import { PlaylistsTracks } from "../Components/PlaylistsTracks";
import { AddToPlaylistModal } from "../Components/AddToPlaylistModal";

export const Playlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [songs, setSongs] = useState();
  const { playlistId = 1 } = useParams();

  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists });
  useEffect(() => {
    if (!isLoadingPlaylists && playlistId) {
      playlists.forEach((element) => {
        if (element.id == playlistId) {
          setSongs({
            name: element.name,
            tracks: element.tracks,
            thumbnail: element.thumbnail,
          });
        }
      });
    }
  }, [isLoadingPlaylists]);

  return (
    <Layout>
      {songs && (
        <>
          <PlaylistsHeader name={songs.name} thumbnail={songs.thumbnail} />
          <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen py-20 md:py-48">
            <PlaylistsTracks
              handleToggleModal={handleToggleModal}
              songs={songs.tracks}
              isFollowed={songs.isFollowed}
              styles="w-full md:w-4/5"
            />
          </div>
        </>
      )}
      {isModalOpen && (
        <AddToPlaylistModal handleToggleModal={handleToggleModal} />
      )}
    </Layout>
  );
};
