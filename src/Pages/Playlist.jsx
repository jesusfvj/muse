import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlaylistsById } from "../API/MusicApi/MusicApi";

import { useEffect, useState } from "react";
import { PlaylistsHeader } from "../Components/PlaylistsHeader";
import { PlaylistsTracks } from "../Components/PlaylistsTracks";
import { useUser } from "../Context/UserContext/UserContext";
import { Typography } from "@material-tailwind/react";

export const Playlist = () => {
  const {
    user: { _id },
  } = useUser();
  const { playlistId } = useParams();

  const {
    data: playlist,
    isLoading: isLoadingPlaylists,
    error: errorPlaylists,
  } = useQuery({
    queryKey: ["playlists", playlistId],
    queryFn: () => getPlaylistsById(playlistId),
    refetchInterval: 2000,
  });

  const isOwner = _id === playlist?.user;

  return (
    <>
      {!isLoadingPlaylists && playlist ? (
        <>
          <PlaylistsHeader
            name={playlist.name}
            thumbnail={playlist.thumbnail}
            playlistId={playlistId}
            followedBy={playlist.followedBy}
            tracks={playlist.tracks}
          />
          <div className="flex items-center justify-center bg-gradient-to-b from-[#02040C] to-[#0A4148] w-screen min-h-[70vh] sm:py-20 md:py-48">
            <PlaylistsTracks
              isOwner={isOwner}
              songs={playlist.tracks}
              playlistId={playlistId}
              styles="w-full md:w-4/5"
              playlist={playlist}
            />
          </div>
        </>
      ) : (
        <Typography text="This playlist do not exists" />
      )}
    </>
  );
};
