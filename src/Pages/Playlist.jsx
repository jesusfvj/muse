import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getPlaylists } from "../API/MusicApi/MusicApi";
import { AlbumHeader, AlbumTracks } from "../Components";
import { DropDownMenu } from "../Components/Dropdown";
import { Layout } from "../Components/Layout";
import { songs } from "../data/data.js";
import { useEffect, useState } from "react";
import { PlaylistsHeader } from "../Components/PlaylistsHeader";
import { PlaylistsTracks } from "../Components/PlaylistsTracks";

export const Playlist = () => {
  const [songs, setSongs]=useState()
  const { playlistId } = useParams()
  const {
    data: playlists,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({ queryKey: ["playlists"], queryFn: getPlaylists })
  useEffect(()=>{
    if (!isLoadingPlaylists && playlistId) {
      playlists.forEach((element) => {
        if (element.name.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
          setSongs(element.tracks)
        }
      })}

  },[isLoadingPlaylists])

  return (
    <Layout>
      <PlaylistsHeader />
      <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen h-screen">
        <PlaylistsTracks songs={songs} styles="w-4/5" />
      </div>
    </Layout>
  );
};
